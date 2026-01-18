import { NextResponse } from "next/server"
import { fetchReadings } from "@/lib/fetch-readings"

export const runtime = "edge"

export async function GET() {
  try {
    const readings = await fetchReadings()
    return NextResponse.json(readings)
  } catch (error) {
    console.error("Error fetching daily readings:", error)
    return NextResponse.json(
      {
        error: "Failed to fetch daily readings",
        date: new Date().toISOString().split("T")[0],
        title: "Daily Readings",
        readings: [],
      },
      { status: 200 }, // Return 200 even on error to prevent client-side errors
    )
  }
}
