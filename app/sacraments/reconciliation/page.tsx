"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Cross, Clock, CalendarClock, BookOpenCheck } from "lucide-react"

export default function ReconciliationPage() {
  return (
    <div className="min-h-screen bg-sky-50/40 dark:bg-gray-900">
      <section className="bg-gradient-to-br from-indigo-700 via-indigo-600 to-blue-600 text-white py-10 md:py-14">
        <div className="container px-4 md:px-6 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur-sm">
            <Cross className="h-4 w-4" />
            Reconciliation
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold leading-tight">Encounter God&apos;s mercy</h1>
          <p className="text-base md:text-lg text-white/90 max-w-3xl">
            In Confession we receive forgiveness, healing, and grace to begin again. The sacrament restores us to communion with
            God and the Church.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge variant="outline" className="border-white/50 text-white bg-white/10">
              Mercy & healing
            </Badge>
            <Badge variant="outline" className="border-white/50 text-white bg-white/10">
              Examination of conscience
            </Badge>
            <Badge variant="outline" className="border-white/50 text-white bg-white/10">
              Grace to begin again
            </Badge>
          </div>
        </div>
      </section>

      <section className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-[1.2fr,1fr] gap-8">
          <div className="space-y-5">
            <h2 className="font-serif text-2xl md:text-3xl text-indigo-900 dark:text-white">How to prepare</h2>
            <div className="space-y-3 text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              <ul className="space-y-2">
                <li>• Make a prayerful examination of conscience.</li>
                <li>• Resolve to avoid near occasions of sin.</li>
                <li>• Come with trust in God&apos;s mercy and honesty of heart.</li>
              </ul>
              <p>We offer Confession before/after Mass and by appointment. Contact us if you need extra time or guidance.</p>
            </div>
          </div>

          <Card className="border border-indigo-100/80 dark:border-gray-800 bg-indigo-50/60 dark:bg-gray-900 shadow-sm">
            <CardHeader className="space-y-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-white text-indigo-700 px-3 py-1 text-xs font-semibold dark:bg-gray-800 dark:text-indigo-200">
                <Clock className="h-4 w-4" />
                Confession times
              </div>
              <CardTitle className="text-xl text-indigo-900 dark:text-white">When & where</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                Confession is available before/after Mass, during parish penance services, and by appointment.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <p>• Arrive a little early and check posted times in the bulletin.</p>
              <p>• For longer conversations, schedule with a priest.</p>
              <div className="pt-3 flex flex-wrap gap-3">
                <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-white">
                  <Link href="/contact">Schedule with priest</Link>
                </Button>
                <Button asChild variant="outline" className="border-indigo-200 text-indigo-700 hover:bg-indigo-50">
                  <Link href="/calendar">View parish calendar</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container px-4 md:px-6 pb-14 md:pb-20">
        <div className="rounded-2xl border border-indigo-100 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-sm p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-[1.4fr,1fr] md:items-start">
            <div className="space-y-3">
              <h3 className="font-serif text-2xl text-indigo-900 dark:text-white">First Reconciliation prep</h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Catechesis on the sacrament and how to confess.</li>
                <li>• Practice an examination of conscience with parents/guardians.</li>
                <li>• Celebrate before First Holy Communion.</li>
              </ul>
            </div>
            <div className="space-y-3 text-sm text-gray-800 dark:text-gray-200">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200">
                  <BookOpenCheck className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-semibold text-indigo-900 dark:text-white">Formation & catechesis</p>
                  <Link href="/programs" className="block text-indigo-700 dark:text-indigo-300">
                    View prep resources
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200">
                  <CalendarClock className="h-4 w-4" />
                </div>
                <Link href="/contact" className="text-indigo-700 dark:text-indigo-300">
                  Coordinate a time with the parish office
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}



