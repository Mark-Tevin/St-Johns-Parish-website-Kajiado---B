"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { HelpingHand, PhoneCall, CalendarClock, HeartPulse } from "lucide-react"

export default function AnointingPage() {
  return (
    <div className="min-h-screen bg-sky-50/40 dark:bg-gray-900">
      <section className="bg-gradient-to-br from-teal-700 via-teal-600 to-cyan-500 text-white py-10 md:py-14">
        <div className="container px-4 md:px-6 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur-sm">
            <HelpingHand className="h-4 w-4" />
            Anointing of the Sick
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold leading-tight">Strength and healing in Christ</h1>
          <p className="text-base md:text-lg text-white/90 max-w-3xl">
            The Anointing of the Sick brings grace, peace, and healing to those seriously ill, elderly, or preparing for major
            surgery. It unites suffering with Christ and strengthens hope.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge variant="outline" className="border-white/50 text-white bg-white/10">
              Grace in illness
            </Badge>
            <Badge variant="outline" className="border-white/50 text-white bg-white/10">
              Peace & courage
            </Badge>
            <Badge variant="outline" className="border-white/50 text-white bg-white/10">
              Communion & hope
            </Badge>
          </div>
        </div>
      </section>

      <section className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-[1.2fr,1fr] gap-8">
          <div className="space-y-5">
            <h2 className="font-serif text-2xl md:text-3xl text-teal-900 dark:text-white">When to call</h2>
            <div className="space-y-3 text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              <ul className="space-y-2">
                <li>• Serious illness, significant weakness from age, or major surgery ahead.</li>
                <li>• Before hospital admission when possible; call urgently in emergencies.</li>
                <li>• Family and friends are encouraged to be present and pray.</li>
              </ul>
              <p>If the situation is urgent, call immediately. For planned procedures, contact us early to schedule.</p>
            </div>
          </div>

          <Card className="border border-teal-100/80 dark:border-gray-800 bg-teal-50/60 dark:bg-gray-900 shadow-sm">
            <CardHeader className="space-y-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-white text-teal-700 px-3 py-1 text-xs font-semibold dark:bg-gray-800 dark:text-teal-200">
                <CalendarClock className="h-4 w-4" />
                Scheduling & visits
              </div>
              <CardTitle className="text-xl text-teal-900 dark:text-white">Hospital or home</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                Priests can visit hospitals, homes, and care facilities. Please provide the patient&apos;s name, location, and urgency.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <p>• Combine with Confession when possible.</p>
              <p>• We can bring Holy Communion during the visit.</p>
              <div className="pt-3 flex flex-wrap gap-3">
                <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white">
                  <Link href="/contact">Request a visit</Link>
                </Button>
                <Button asChild variant="outline" className="border-teal-200 text-teal-700 hover:bg-teal-50">
                  <Link href="/calendar">See availability</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container px-4 md:px-6 pb-14 md:pb-20">
        <div className="rounded-2xl border border-teal-100 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-sm p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-[1.4fr,1fr] md:items-start">
            <div className="space-y-3">
              <h3 className="font-serif text-2xl text-teal-900 dark:text-white">What to prepare</h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Patient’s name, location/room, and contact person.</li>
                <li>• If possible, a brief update on the condition and urgency.</li>
                <li>• Family welcome to gather and pray during anointing.</li>
              </ul>
            </div>
            <div className="space-y-3 text-sm text-gray-800 dark:text-gray-200">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-200">
                  <HeartPulse className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-semibold text-teal-900 dark:text-white">Pastoral care line</p>
                  <Link href="/contact" className="block text-teal-700 dark:text-teal-300">
                    Call the parish office for urgent needs
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-200">
                  <PhoneCall className="h-4 w-4" />
                </div>
                <Link href="/contact" className="text-teal-700 dark:text-teal-300">
                  After-hours? Leave a message and note urgency
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}





