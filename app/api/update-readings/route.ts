import { NextResponse } from "next/server"
import { sql } from "@vercel/postgres"
import { parseRSSFeed } from "@/lib/rssParser"

export const runtime = "edge"

export async function GET() {
  try {
    const readings = await parseRSSFeed("https://bible.usccb.org/readings.rss")

    await sql`
      INSERT INTO daily_readings (date, title, readings)
      VALUES (${readings.date}::date, ${readings.title}, ${JSON.stringify(readings.readings)})
      ON CONFLICT (date) DO UPDATE SET
        title = ${readings.title},
        readings = ${JSON.stringify(readings.readings)}
    `

    return NextResponse.json({ message: "Readings updated successfully" })
  } catch (error) {
    console.error("Error in update-readings route:", error)
    return NextResponse.json({ error: "Failed to update readings" }, { status: 500 })
  }
}
