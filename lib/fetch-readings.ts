import type { DailyReadings, Reading } from "@/types/readings"
import { XMLParser } from "fast-xml-parser"
import * as cheerio from "cheerio"

export async function fetchReadings(): Promise<DailyReadings> {
  try {
    const response = await fetch("https://bible.usccb.org/readings.rss", {
      next: { revalidate: 86400 }, // Cache for 24 hours
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch readings: ${response.status}`)
    }

    const xml = await response.text()
    const parser = new XMLParser()
    const result = parser.parse(xml)

    // Get the first item (today's readings)
    const item = result.rss.channel.item[0]

    // Extract date from pubDate
    const pubDate = new Date(item.pubDate)
    const date = pubDate.toISOString().split("T")[0]

    // Extract title and description
    const title = item.title
    const description = item.description

    // Parse HTML content from description to extract readings
    const readings = parseReadingsFromHTML(description)

    // Extract liturgical day information
    const liturgicalDay = extractLiturgicalDay(title)

    return {
      date,
      title,
      liturgicalDay,
      readings,
    }
  } catch (error) {
    console.error("Error fetching readings:", error)
    return {
      date: new Date().toISOString().split("T")[0],
      title: "Daily Readings",
      liturgicalDay: "Error fetching readings",
      readings: [],
    }
  }
}

function parseReadingsFromHTML(html: string): Reading[] {
  const readings: Reading[] = []

  try {
    const $ = cheerio.load(html)

    $("h3").each((index, element) => {
      const titleElement = $(element)
      const fullTitle = titleElement.text().trim()

      let contentHtml = ""
      let nextElement = titleElement.next()

      while (nextElement.length && nextElement[0].tagName !== "h3") {
        contentHtml += nextElement.toString()
        nextElement = nextElement.next()
      }

      const contentText = processContentHtml(contentHtml)

      const { title, citation } = parseTitleAndCitation(fullTitle)

      readings.push({
        title,
        citation,
        content: contentText,
      })
    })
  } catch (error) {
    console.error("Error parsing HTML:", error)
  }

  return readings
}

function processContentHtml(html: string): string {
  const $ = cheerio.load(html)

  $("p").each((i, el) => {
    $(el).after("\n\n")
    $(el).replaceWith($(el).html())
  })

  $("br").replaceWith("\n")

  return $.text()
    .replace(/&nbsp;/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
}

function parseTitleAndCitation(fullTitle: string): { title: string; citation: string } {
  const citationPatterns = [
    /\b([1-3]?\s*[A-Za-z]+\s+\d+:\d+(?:-\d+)?(?:,\s*\d+:\d+(?:-\d+)?)*)\s*$/,
    /\b(Psalm\s+\d+(?::\d+(?:-\d+)?)?(?:,\s*\d+(?::\d+(?:-\d+)?)?)*)\s*$/,
    /\b(Responsorial\s+Psalm\s+\d+(?::\d+(?:-\d+)?)?(?:,\s*\d+(?::\d+(?:-\d+)?)?)*)\s*$/,
  ]

  let title = fullTitle
  let citation = ""

  for (const pattern of citationPatterns) {
    const match = fullTitle.match(pattern)
    if (match) {
      citation = match[1]
      title = fullTitle.replace(pattern, "").trim()
      break
    }
  }

  if (!citation && fullTitle.includes(":")) {
    const parts = fullTitle.split(":")
    title = parts[0].trim()
    citation = parts.slice(1).join(":").trim()
  }

  if (title.includes("Reading") && !citation) {
    const parts = title.split("Reading")
    if (parts.length > 1) {
      title = `${parts[0]}Reading`.trim()
      citation = parts.slice(1).join("Reading").trim()
    }
  }

  return { title, citation }
}

function extractLiturgicalDay(title: string): string {
  const match = title.match(/^(.+?)(?:\s+of\s+|\s+in\s+)/i)
  return match ? match[1] : title
}
