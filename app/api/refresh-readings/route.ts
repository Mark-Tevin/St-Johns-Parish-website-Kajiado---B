import { NextResponse } from "next/server"
import { fetchReadings } from "@/lib/fetch-readings"

// Set Edge runtime for better performance
export const runtime = "edge"

export async function GET() {
  try {
    // Fetch fresh readings
    const readings = await fetchReadings()

    // You could store these in a database or cache here if needed

    return NextResponse.json({
      success: true,
      message: "Readings refreshed successfully",
      timestamp: new Date().toISOString(),
      readings,
    })
  } catch (error) {
    console.error("Error refreshing readings:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to refresh readings",
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}
