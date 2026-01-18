import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const year = searchParams.get("year") || new Date().getFullYear()
  const month = searchParams.get("month") || new Date().getMonth() + 1

  try {
    // Fetch data from the Liturgical Calendar API
    const response = await fetch(
      `https://litcal.johnromanodorazio.com/api/v3/LitCalEngine.php?year=${year}&month=${month}&locale=en`,
    )

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`)
    }

    const rawData = await response.json()

    // Transform the data into the format our frontend expects
    const transformedData = {
      dates: {},
      metadata: {
        season: "Unknown",
        seasonWeek: 0,
      },
    }

    // Check if LitCal exists in the response
    if (rawData && rawData.LitCal) {
      // Convert the LitCal object to our dates format
      const dates = {}

      Object.entries(rawData.LitCal).forEach(([key, value]) => {
        const eventData = value as any
        if (eventData && eventData.date) {
          // Convert Unix timestamp to YYYY-MM-DD format
          const date = new Date(eventData.date * 1000)
          const dateString = date.toISOString().split("T")[0]

          // Create or update the entry for this date
          if (!dates[dateString]) {
            dates[dateString] = {
              date: dateString,
              season: eventData.liturgicalSeason || "ORDINARY_TIME",
              season_week: eventData.seasonWeek || 0,
              celebrations: [],
              weekday: eventData.dayOfTheWeekLong || "",
            }
          }

          // Add this celebration to the date
          dates[dateString].celebrations.push({
            title: eventData.name || "Unknown Celebration",
            color: eventData.color?.[0] || "green",
            rank: eventData.gradeLcl || "weekday",
            rank_num: eventData.grade || 0,
          })
        }
      })

      transformedData.dates = dates

      // Extract metadata if available
      if (rawData.Metadata) {
        transformedData.metadata = {
          season: rawData.Metadata.liturgicalSeason || "Unknown",
          seasonWeek: rawData.Metadata.seasonWeek || 0,
        }
      }
    }

    return NextResponse.json(transformedData)
  } catch (error) {
    console.error("Error fetching liturgical calendar:", error)

    // Return a fallback structure
    return NextResponse.json(
      {
        dates: {},
        metadata: {
          season: "Unknown",
          seasonWeek: 0,
        },
        error: "Failed to fetch liturgical calendar data",
      },
      { status: 200 },
    ) // Return 200 with error info in the payload
  }
}
