import { NextResponse } from "next/server"
import axios from "axios"
import * as cheerio from "cheerio"
import { format } from "date-fns"
import type { Reading, DailyReadings } from "@/types/readings"

export async function GET() {
  try {
    const response = await axios.get("https://bible.usccb.org/readings.rss")
    const xml = response.data

    // Find the first item in the RSS feed (today's readings)
    const $ = cheerio.load(xml, { xmlMode: true })
    const item = $("item").first()

    // Extract basic information
    const title = item.find("title").text()
    const pubDate = new Date(item.find("pubDate").text())
    const date = format(pubDate, "yyyy-MM-dd")
    const description = item.find("description").text()

    // Parse the HTML content in the description
    const readings = parseReadingsFromHTML(description)

    const dailyReadings: DailyReadings = {
      date,
      title,
      readings,
    }

    return NextResponse.json(dailyReadings)
  } catch (error) {
    console.error("Error fetching daily readings:", error)
    return NextResponse.json(
      {
        error: "Failed to fetch daily readings",
        date: format(new Date(), "yyyy-MM-dd"),
        title: "Daily Readings",
        readings: [],
      },
      { status: 200 }, // Return 200 even on error to prevent client-side errors
    )
  }
}

function parseReadingsFromHTML(html: string): Reading[] {
  const readings: Reading[] = []

  try {
    // Load the HTML content
    const $ = cheerio.load(html)

    // Find all h3 elements (reading titles)
    $("h3").each((index, element) => {
      // Get the title
      const fullTitle = $(element).text().trim()

      // Extract content - everything until the next h3
      let content = ""
      let currentNode = $(element).next()

      while (currentNode.length && currentNode[0].name !== "h3") {
        if (currentNode[0].type === "tag") {
          // If it's a paragraph, add with line breaks
          if (currentNode[0].name === "p") {
            content += $(currentNode).text().trim() + "\n\n"
          } else {
            content += $(currentNode).text().trim()
          }
        }
        currentNode = currentNode.next()
      }

      // Clean up the content
      content = content.replace(/\n{3,}/g, "\n\n").trim()

      // Split title and citation
      let title = fullTitle
      let citation = ""

      // Try to extract citation from title
      const colonIndex = fullTitle.indexOf(":")
      if (colonIndex > 0) {
        title = fullTitle.substring(0, colonIndex).trim()
        citation = fullTitle.substring(colonIndex + 1).trim()
      }

      readings.push({
        title,
        citation,
        content,
      })
    })

    // If no readings were found, add a fallback
    if (readings.length === 0) {
      readings.push({
        title: "Daily Reading",
        citation: "Information",
        content: "Please visit the USCCB website for today's readings: https://bible.usccb.org/bible/readings/",
      })
    }
  } catch (error) {
    console.error("Error parsing HTML:", error)
    readings.push({
      title: "Error",
      citation: "Parsing Error",
      content: "There was an error parsing today's readings. Please visit the USCCB website directly.",
    })
  }

  return readings
}
