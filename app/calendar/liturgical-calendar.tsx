"use client"

import { useState, useEffect, useCallback } from "react"
import { CalendarIcon, ChevronLeft, ChevronRight, Loader2 } from "lucide-react"
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay } from "date-fns"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Celebration {
  title: string
  color: string
  rank: string
  rank_num: number
}

interface LiturgicalDay {
  date: string
  season: string
  season_week: number
  celebrations: Celebration[]
  weekday: string
}

interface LiturgicalCalendarData {
  dates: Record<string, LiturgicalDay>
  metadata?: {
    season: string
    seasonWeek: number
  }
  error?: string
}

const LITURGICAL_COLORS: Record<string, string> = {
  green: "bg-green-500",
  purple: "bg-purple-500",
  violet: "bg-purple-500", // Alias for purple
  white: "bg-white border border-gray-300 text-gray-800",
  red: "bg-red-500",
  pink: "bg-pink-400",
  rose: "bg-pink-400", // Alias for pink
  gold: "bg-yellow-500",
  yellow: "bg-yellow-500", // Alias for gold
  black: "bg-gray-800",
}

export default function LiturgicalCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [calendarData, setCalendarData] = useState<LiturgicalCalendarData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedDay, setSelectedDay] = useState<LiturgicalDay | null>(null)

  const fetchCalendarData = useCallback(async (date: Date) => {
    setLoading(true)
    setError(null)
    try {
      const year = date.getFullYear()
      const month = date.getMonth() + 1 // JavaScript months are 0-indexed

      const response = await fetch(`/api/liturgical-calendar?year=${year}&month=${month}`)

      if (!response.ok) {
        throw new Error(`Failed to fetch calendar data: ${response.statusText}`)
      }

      const data = await response.json()

      // Check if the data has the expected structure
      if (!data || typeof data.dates !== "object") {
        console.error("Invalid calendar data format:", data)
        setError("Calendar data is in an unexpected format. Please try again later.")
        setCalendarData(null)
      } else {
        setCalendarData(data)
      }
    } catch (err) {
      console.error("Error fetching liturgical calendar data:", err)
      setError("Failed to load the liturgical calendar. Please try again later.")
      setCalendarData(null)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchCalendarData(currentDate)
  }, [currentDate, fetchCalendarData])

  const handlePreviousMonth = () => {
    setCurrentDate(subMonths(currentDate, 1))
  }

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1))
  }

  const handleDayClick = (day: Date) => {
    if (!calendarData) return

    const dateString = format(day, "yyyy-MM-dd")
    const dayData = calendarData.dates[dateString]

    if (dayData) {
      setSelectedDay(dayData)
    }
  }

  // Generate days for the current month view
  const monthStart = startOfMonth(currentDate)
  const monthEnd = endOfMonth(currentDate)
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd })

  // Get day of week for the first day of the month (0 = Sunday, 6 = Saturday)
  const startDay = monthStart.getDay()

  // Create array for calendar grid (including empty cells for days from previous/next months)
  const calendarGrid = []

  // Add empty cells for days before the first of the month
  for (let i = 0; i < startDay; i++) {
    calendarGrid.push(null)
  }

  // Add days of the current month
  calendarGrid.push(...daysInMonth)

  // Get the most important celebration for a day (highest rank)
  const getPrimaryCelebration = (day: LiturgicalDay): Celebration | null => {
    if (!day.celebrations || day.celebrations.length === 0) return null

    // Sort by rank_num in descending order (higher rank_num = more important)
    return [...day.celebrations].sort((a, b) => b.rank_num - a.rank_num)[0]
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <Button variant="outline" size="icon" onClick={handlePreviousMonth}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <CardTitle className="text-xl font-serif flex items-center gap-2">
              <CalendarIcon className="h-5 w-5 text-primary" />
              {format(currentDate, "MMMM yyyy")}
            </CardTitle>
            <Button variant="outline" size="icon" onClick={handleNextMonth}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          {calendarData?.metadata && (
            <CardDescription className="text-center">
              Current Liturgical Season: <span className="font-medium">{calendarData.metadata.season}</span>
            </CardDescription>
          )}
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <span className="ml-2">Loading calendar...</span>
            </div>
          ) : error ? (
            <div className="text-center text-red-500 p-4 border border-red-200 rounded-md bg-red-50">{error}</div>
          ) : (
            <>
              {/* Calendar grid header - days of week */}
              <div className="grid grid-cols-7 gap-1 mb-2 text-center text-sm font-medium">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div key={day} className="py-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar grid */}
              <div className="grid grid-cols-7 gap-1">
                {calendarGrid.map((day, index) => {
                  if (!day) {
                    return (
                      <div key={`empty-${index}`} className="h-24 p-1 bg-gray-50 dark:bg-gray-900/20 rounded-md"></div>
                    )
                  }

                  const dateString = format(day, "yyyy-MM-dd")
                  const dayData = calendarData?.dates?.[dateString] // Using optional chaining
                  const isToday = isSameDay(day, new Date())
                  const primaryCelebration = dayData ? getPrimaryCelebration(dayData) : null

                  return (
                    <Dialog key={dateString}>
                      <DialogTrigger asChild>
                        <button
                          className={`h-24 p-1 text-left rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${
                            isToday ? "ring-2 ring-primary" : ""
                          }`}
                          onClick={() => handleDayClick(day)}
                        >
                          <div className="flex flex-col h-full">
                            <span className={`text-sm font-medium ${isToday ? "text-primary" : ""}`}>
                              {format(day, "d")}
                            </span>
                            {dayData && dayData.celebrations && dayData.celebrations.length > 0 ? (
                              <div className="mt-1 space-y-1 overflow-hidden">
                                {primaryCelebration && (
                                  <div className="text-xs truncate" title={primaryCelebration.title}>
                                    <span
                                      className={`inline-block w-2 h-2 rounded-full mr-1 ${
                                        LITURGICAL_COLORS[primaryCelebration.color?.toLowerCase()] || "bg-gray-400"
                                      }`}
                                    ></span>
                                    {primaryCelebration.title}
                                  </div>
                                )}
                                {dayData.celebrations.length > 1 && (
                                  <div className="text-xs text-muted-foreground">
                                    +{dayData.celebrations.length - 1} more
                                  </div>
                                )}
                              </div>
                            ) : (
                              <div className="mt-1 text-xs text-muted-foreground">No celebrations</div>
                            )}
                          </div>
                        </button>
                      </DialogTrigger>

                      {dayData && (
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle className="flex items-center gap-2">
                              {format(day, "EEEE, MMMM d, yyyy")}
                            </DialogTitle>
                            <DialogDescription>
                              {dayData.season || "Ordinary Time"} • Week {dayData.season_week || ""}
                            </DialogDescription>
                          </DialogHeader>

                          <ScrollArea className="max-h-[60vh]">
                            <div className="space-y-4 p-1">
                              {dayData.celebrations && dayData.celebrations.length > 0 ? (
                                dayData.celebrations.map((celebration, idx) => (
                                  <Card key={idx}>
                                    <CardHeader className="py-3">
                                      <div className="flex items-center justify-between">
                                        <CardTitle className="text-base">{celebration.title}</CardTitle>
                                        <Badge
                                          className={`${
                                            LITURGICAL_COLORS[celebration.color?.toLowerCase()] || "bg-gray-400"
                                          }`}
                                        >
                                          {celebration.color || "Default"}
                                        </Badge>
                                      </div>
                                      <CardDescription>{celebration.rank || "Feast"}</CardDescription>
                                    </CardHeader>
                                  </Card>
                                ))
                              ) : (
                                <div className="text-center text-muted-foreground py-4">
                                  No celebration details available for this day
                                </div>
                              )}
                            </div>
                          </ScrollArea>
                        </DialogContent>
                      )}
                    </Dialog>
                  )
                })}
              </div>
            </>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Understanding Liturgical Colors</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
              <span>
                <strong>Green:</strong> Ordinary Time, representing hope and growth
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-purple-500"></div>
              <span>
                <strong>Purple/Violet:</strong> Advent and Lent, symbolizing penance and preparation
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-white border border-gray-300"></div>
              <span>
                <strong>White:</strong> Christmas, Easter, feasts of the Lord, and saints who were not martyrs
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-red-500"></div>
              <span>
                <strong>Red:</strong> Palm Sunday, Good Friday, Pentecost, and feasts of martyrs
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-pink-400"></div>
              <span>
                <strong>Rose:</strong> Third Sunday of Advent (Gaudete) and Fourth Sunday of Lent (Laetare)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
              <span>
                <strong>Gold:</strong> Can replace white, red, or green on solemn occasions
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
