"use client"

import { useState, useEffect, useCallback } from "react"
import { format, addDays, subDays, parseISO } from "date-fns"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, RefreshCw, ChevronLeft, ChevronRight } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface Reading {
  title: string
  content: string
}

interface DailyReadings {
  date: string
  title: string
  readings: Reading[]
}

export function DailyReadings() {
  const [date, setDate] = useState<Date>(new Date())
  const [readings, setReadings] = useState<DailyReadings | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const fetchReadings = useCallback(async (selectedDate: Date) => {
    setLoading(true)
    setError(null)
    try {
      const formattedDate = format(selectedDate, "yyyy-MM-dd")
      const response = await fetch(`/api/daily-readings?date=${formattedDate}`)
      if (!response.ok) {
        throw new Error("Failed to fetch readings")
      }
      const data = await response.json()
      setReadings(data)
    } catch (err) {
      setError("Failed to load daily readings. Please try again later.")
      console.error("Error fetching readings:", err)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchReadings(date)
  }, [date, fetchReadings])

  const handleRefresh = () => {
    fetchReadings(date)
  }

  const handleDateChange = (newDate: Date | undefined) => {
    if (newDate) {
      setDate(newDate)
    }
  }

  const handlePreviousDay = () => {
    setDate((prevDate) => subDays(prevDate, 1))
  }

  const handleNextDay = () => {
    setDate((prevDate) => addDays(prevDate, 1))
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    )
  }

  if (!readings) {
    return null
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Button onClick={handlePreviousDay} variant="outline" size="icon">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-[240px]">
              <CalendarIcon className="mr-2 h-4 w-4" />
              {format(parseISO(readings.date), "MMMM d, yyyy")}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="center">
            <Calendar mode="single" selected={parseISO(readings.date)} onSelect={handleDateChange} initialFocus />
          </PopoverContent>
        </Popover>
        <Button onClick={handleNextDay} variant="outline" size="icon">
          <ChevronRight className="h-4 w-4" />
        </Button>
        <Button onClick={handleRefresh} variant="outline" size="icon">
          <RefreshCw className="h-4 w-4" />
        </Button>
      </div>

      <h2 className="text-2xl font-bold text-center">{readings.title}</h2>

      {readings.readings.map((reading, index) => (
        <Card key={index} className="overflow-hidden">
          <CardHeader className="bg-muted">
            <CardTitle className="text-lg">{reading.title}</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{
                __html: reading.content.replace(/\n/g, "<br>"),
              }}
            />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
