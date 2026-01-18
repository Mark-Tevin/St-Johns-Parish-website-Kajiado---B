import axios from "axios"
import * as cheerio from "cheerio"
import { createPool } from "@vercel/postgres"

interface Reading {
  title: string
  content: string
}

interface DailyReadings {
  date: string
  firstReading: Reading
  responsorialPsalm: Reading
  gospel: Reading
}

async function scrapeUniversalis(): Promise<DailyReadings> {
  const url = "https://universalis.com/qr/mass.htm"
  const { data } = await axios.get(url)
  const $ = cheerio.load(data)

  const date = $("h1").text().trim()

  const firstReading: Reading = {
    title: $('h2:contains("First reading")').text().trim(),
    content: $('h2:contains("First reading")').next().text().trim(),
  }

  const responsorialPsalm: Reading = {
    title: $('h2:contains("Responsorial Psalm")').text().trim(),
    content: $('h2:contains("Responsorial Psalm")').next().text().trim(),
  }

  const gospel: Reading = {
    title: $('h2:contains("Gospel")').text().trim(),
    content: $('h2:contains("Gospel")').next().text().trim(),
  }

  return {
    date,
    firstReading,
    responsorialPsalm,
    gospel,
  }
}

export async function updateReadings() {
  try {
    const readings = await scrapeUniversalis()
    const pool = createPool()

    await pool.query(
      `
      INSERT INTO daily_readings (date, first_reading, responsorial_psalm, gospel)
      VALUES ($1, $2, $3, $4)
      ON CONFLICT (date) DO UPDATE SET
        first_reading = $2,
        responsorial_psalm = $3,
        gospel = $4
    `,
      [
        readings.date,
        JSON.stringify(readings.firstReading),
        JSON.stringify(readings.responsorialPsalm),
        JSON.stringify(readings.gospel),
      ],
    )

    console.log("Readings updated successfully")
  } catch (error) {
    console.error("Error updating readings:", error)
  }
}
