import axios from "axios"
import { XMLParser } from "fast-xml-parser"
import { format } from "date-fns"

interface Reading {
  title: string
  content: string
}

interface DailyReadings {
  date: string
  title: string
  readings: Reading[]
}

export async function parseRSSFeed(url: string): Promise<DailyReadings> {
  const response = await axios.get(url)
  const xml = response.data

  const parser = new XMLParser()
  const result = parser.parse(xml)

  const item = result.rss.channel.item[0]
  const date = new Date(item.pubDate)
  const title = item.title
  const description = item.description

  // Parse the description to extract individual readings
  const readings: Reading[] = []
  const readingRegex = /<h3>(.+?)<\/h3>([\s\S]+?)(?=<h3>|$)/g
  let match
  while ((match = readingRegex.exec(description)) !== null) {
    readings.push({
      title: match[1].trim(),
      content: match[2].trim().replace(/<p>/g, "").replace(/<\/p>/g, "\n\n").trim(),
    })
  }

  return {
    date: format(date, "yyyy-MM-dd"),
    title,
    readings,
  }
}
