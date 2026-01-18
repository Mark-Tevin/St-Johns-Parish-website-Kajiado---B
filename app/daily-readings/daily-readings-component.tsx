"use client"

import { useEffect, useState } from "react"
import type { DailyReadings } from "@/types/readings"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { format } from "date-fns"
import { CalendarIcon, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DailyReadingsComponent() {
  const [readings, setReadings] = useState<DailyReadings | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [refreshing, setRefreshing] = useState(false)

  async function fetchReadings() {
    try {
      setLoading(true)
      const response = await fetch("/api/daily-readings")

      if (!response.ok) {
        throw new Error(`Failed to fetch readings: ${response.status}`)
      }

      const data = await response.json()
      setReadings(data)
    } catch (err) {
      console.error("Error fetching readings:", err)
      setError("Failed to load daily readings. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchReadings()
  }, [])

  const handleRefresh = async () => {
    try {
      setRefreshing(true)
      await fetchReadings()
    } finally {
      setRefreshing(false)
    }
  }

  if (loading) {
    return <ReadingsLoadingSkeleton />
  }

  if (error) {
    return (
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="text-center text-red-500">
            <p>{error}</p>
            <Button variant="outline" className="mt-4" onClick={handleRefresh} disabled={refreshing}>
              <RefreshCw className={`mr-2 h-4 w-4 ${refreshing ? "animate-spin" : ""}`} />
              Try Again
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!readings || !readings.readings || readings.readings.length === 0) {
    return (
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="text-center">
            <p>No readings available at this time.</p>
            <Button variant="outline" className="mt-4" onClick={handleRefresh} disabled={refreshing}>
              <RefreshCw className={`mr-2 h-4 w-4 ${refreshing ? "animate-spin" : ""}`} />
              Refresh
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  const formattedDate = readings.date ? format(new Date(readings.date), "EEEE, MMMM d, yyyy") : "Today"

  return (
    <div className="space-y-6">
      <Card className="mb-6 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-sky-50 to-sky-100 dark:from-sky-950 dark:to-sky-900">
          <div className="flex items-center gap-2 text-sky-500 dark:text-sky-400">
            <CalendarIcon className="h-5 w-5" />
            <span className="text-sm font-medium">{formattedDate}</span>
          </div>
          <CardTitle className="font-serif text-2xl">{readings.title}</CardTitle>
          <CardDescription>{readings.liturgicalDay}</CardDescription>
        </CardHeader>
        <CardFooter className="bg-muted/30 py-2 flex justify-end">
          <Button variant="ghost" size="sm" onClick={handleRefresh} disabled={refreshing}>
            <RefreshCw className={`mr-2 h-4 w-4 ${refreshing ? "animate-spin" : ""}`} />
            Refresh
          </Button>
        </CardFooter>
      </Card>

      {readings.readings.map((reading, index) => (
        <Card key={index} className="mb-6 overflow-hidden">
          <CardHeader className="bg-muted/50 pb-3">
            <CardTitle className="text-lg font-serif">{reading.title}</CardTitle>
            {reading.citation && <CardDescription className="font-medium">{reading.citation}</CardDescription>}
          </CardHeader>
          <CardContent className="pt-4 prose dark:prose-invert max-w-none">
            {reading.content.split("\n\n").map((paragraph, i) => (
              <p key={i} className="mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function ReadingsLoadingSkeleton() {
  return (
    <div className="space-y-6">
      <Card className="mb-6 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-sky-50 to-sky-100 dark:from-sky-950 dark:to-sky-900">
          <Skeleton className="h-4 w-32 bg-sky-200 dark:bg-sky-800" />
          <Skeleton className="h-8 w-3/4 mt-2 bg-sky-200 dark:bg-sky-800" />
          <Skeleton className="h-4 w-1/2 mt-2 bg-sky-200 dark:bg-sky-800" />
        </CardHeader>
      </Card>

      {[1, 2, 3].map((i) => (
        <Card key={i} className="mb-6">
          <CardHeader className="bg-muted/50 pb-3">
            <Skeleton className="h-6 w-1/3 bg-gray-200 dark:bg-gray-700" />
            <Skeleton className="h-4 w-1/4 mt-2 bg-gray-200 dark:bg-gray-700" />
          </CardHeader>
          <CardContent className="pt-4">
            <Skeleton className="h-4 w-full mb-2 bg-gray-100 dark:bg-gray-800" />
            <Skeleton className="h-4 w-full mb-2 bg-gray-100 dark:bg-gray-800" />
            <Skeleton className="h-4 w-3/4 bg-gray-100 dark:bg-gray-800" />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
