import type { Metadata } from "next"
import DailyReadingsClient from "./daily-readings-client"

export const metadata: Metadata = {
  title: "Daily Readings | St. John's Parish Kajiado",
  description: "Today's Catholic Mass readings from the USCCB",
}

export default function DailyReadingsPage() {
  return (
    <div className="container py-12 md:py-24">
      <h1 className="text-3xl font-bold text-center mb-8 font-serif">Daily Mass Readings</h1>
      <div className="max-w-3xl mx-auto">
        <DailyReadingsClient />
      </div>
    </div>
  )
}
