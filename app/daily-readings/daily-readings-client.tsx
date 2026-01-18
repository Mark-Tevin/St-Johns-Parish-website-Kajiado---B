"use client"

import { useEffect, useState, useCallback } from "react"
import type { DailyReadings } from "@/types/readings"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { format } from "date-fns"
import { CalendarIcon, RefreshCw, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DailyReadingsClient() {
  const [readings, setReadings] = useState<DailyReadings | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [refreshing, setRefreshing] = useState(false)

  const fetchReadings = useCallback(async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/daily-readings")

      if (!response.ok) {
        throw new Error(`Failed to fetch readings: ${response.status}`)
      }

      const data = await response.json()
      console.log("Fetched readings data:", data) // Debug log

      if (data.error) {
        throw new Error(data.error)
      }

      setReadings(data)
      setError(null)
    } catch (err) {
      console.error("Error fetching readings:", err)
      setError("Failed to load daily readings. Please try again later.")
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchReadings()
  }, [fetchReadings])

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
            <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" onClick={handleRefresh} disabled={refreshing}>
                <RefreshCw className={`mr-2 h-4 w-4 ${refreshing ? "animate-spin" : ""}`} />
                Try Again
              </Button>
              <Button asChild>
                <Link href="https://bible.usccb.org/bible/readings/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View on USCCB Website
                </Link>
              </Button>
            </div>
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
            <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" onClick={handleRefresh} disabled={refreshing}>
                <RefreshCw className={`mr-2 h-4 w-4 ${refreshing ? "animate-spin" : ""}`} />
                Refresh
              </Button>
              <Button asChild>
                <Link href="https://bible.usccb.org/bible/readings/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View on USCCB Website
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  const formattedDate = readings.date ? format(new Date(readings.date), "EEEE, MMMM d, yyyy") : "Today"
  const usccbDateFormat = readings.date ? format(new Date(readings.date), "MMddyy") : format(new Date(), "MMddyy")
  const usccbUrl = `https://bible.usccb.org/bible/readings/${usccbDateFormat}.cfm`

  return (
    <div className="space-y-8 relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100/30 dark:bg-sky-900/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-sky-100/20 dark:bg-sky-900/10 rounded-full blur-3xl"></div>

      {/* Header Card with Enhanced Visual Appeal */}
      <Card className="mb-8 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 relative z-10 border-sky-100 dark:border-sky-800">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 via-white to-sky-50/40 dark:from-sky-950 dark:via-sky-900/10 dark:to-sky-800/10 z-0"></div>
        <CardHeader className="bg-gradient-to-r from-sky-100 to-sky-50 dark:from-sky-900 dark:to-sky-800 relative z-10 pb-5">
          <div className="flex items-center gap-2 text-sky-500 dark:text-sky-300 mb-1">
            <div className="bg-white dark:bg-sky-950 p-1 rounded-full shadow-sm">
              <CalendarIcon className="h-4 w-4" />
            </div>
            <span className="text-sm font-medium tracking-wide">{formattedDate}</span>
          </div>
          <CardTitle className="font-serif text-2xl md:text-3xl bg-gradient-to-br from-sky-700 to-sky-900 dark:from-sky-300 dark:to-sky-100 bg-clip-text text-transparent">
            {readings.title}
          </CardTitle>
          <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-sky-100/50 to-transparent dark:from-sky-800/30 dark:to-transparent"></div>
        </CardHeader>
        <CardFooter className="bg-gradient-to-r from-white to-sky-50/30 dark:from-sky-950 dark:to-sky-900/30 py-3 flex justify-between relative z-10 border-t border-sky-100 dark:border-sky-800/50">
          <Button
            variant="outline"
            size="sm"
            className="border-sky-200 dark:border-sky-700 text-sky-700 dark:text-sky-300 hover:bg-sky-50 dark:hover:bg-sky-900/50 transition-all"
            asChild
          >
            <Link href={usccbUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              View on USCCB
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleRefresh}
            disabled={refreshing}
            className="text-sky-500 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 hover:bg-sky-50 dark:hover:bg-sky-900/50"
          >
            <RefreshCw className={`mr-2 h-4 w-4 ${refreshing ? "animate-spin" : ""}`} />
            Refresh
          </Button>
        </CardFooter>
      </Card>

      {/* Readings with Enhanced Visual Design */}
      <div className="relative z-10 space-y-6">
        {readings.readings.map((reading, index) => (
          <Card
            key={index}
            className="mb-6 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border-sky-50 dark:border-sky-900/50 transform hover:-translate-y-0.5"
          >
            <CardHeader className="bg-gradient-to-r from-sky-50/80 to-white dark:from-sky-950/80 dark:to-sky-900/20 pb-3 border-b border-sky-100/50 dark:border-sky-800/30">
              <div className="flex items-start">
                <div className="mr-3 mt-1 flex-shrink-0 h-7 w-1 rounded-full bg-gradient-to-b from-sky-400 to-sky-500 dark:from-sky-500 dark:to-sky-300"></div>
                <div>
                  <CardTitle className="text-lg font-serif text-sky-800 dark:text-sky-200">{reading.title}</CardTitle>
                  {reading.citation && (
                    <CardDescription className="font-medium mt-1 text-sky-500/80 dark:text-sky-300/80">
                      {reading.citation}
                    </CardDescription>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-5 prose dark:prose-invert max-w-none bg-gradient-to-br from-white to-sky-50/30 dark:from-transparent dark:to-sky-950/20">
              {reading.content.split("\n\n").map((paragraph, i) => (
                <p key={i} className="mb-4 last:mb-0 text-gray-700 dark:text-gray-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Scripture Quote Footer */}
      <div className="mt-10 text-center px-6 py-8 bg-sky-50/50 dark:bg-sky-950/30 rounded-xl border border-sky-100 dark:border-sky-900/50 shadow-inner">
        <p className="italic text-sky-500/70 dark:text-sky-400/80 text-sm md:text-base">
          "Your word is a lamp to my feet and a light to my path."
        </p>
        <p className="text-sky-500/60 dark:text-sky-500/60 text-xs mt-1">— Psalm 119:105</p>
      </div>
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
