"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { HeartHandshake, CalendarClock, BookOpenCheck, Mail, PhoneCall } from "lucide-react"

export default function MatrimonyPage() {
  return (
    <div className="min-h-screen bg-sky-50/40 dark:bg-gray-900">
      <section className="bg-gradient-to-br from-rose-600 via-rose-500 to-orange-400 text-white py-10 md:py-14">
        <div className="container px-4 md:px-6 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur-sm">
            <HeartHandshake className="h-4 w-4" />
            Matrimony
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold leading-tight">A covenant of love and mission</h1>
          <p className="text-base md:text-lg text-white/90 max-w-3xl">
            In Matrimony, spouses give and receive each other in Christ, forming a lifelong covenant that images God&apos;s love and
            serves the Church and society.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge variant="outline" className="border-white/50 text-white bg-white/10">
              Sacrament of vocation
            </Badge>
            <Badge variant="outline" className="border-white/50 text-white bg-white/10">
              Covenant & fidelity
            </Badge>
            <Badge variant="outline" className="border-white/50 text-white bg-white/10">
              Mission to family & Church
            </Badge>
          </div>
        </div>
      </section>

      <section className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-[1.2fr,1fr] gap-8">
          <div className="space-y-5">
            <h2 className="font-serif text-2xl md:text-3xl text-rose-900 dark:text-white">Preparation overview</h2>
            <div className="space-y-3 text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              <ul className="space-y-2">
                <li>• Contact the parish at least 6 months before your desired date.</li>
                <li>• Complete marriage prep course and meetings with priest/deacon.</li>
                <li>• Provide required documents (freedom to marry, baptismal records).</li>
                <li>• Set liturgy details, music, and rehearsal once prep is complete.</li>
              </ul>
              <p>We’ll walk with you through paperwork, formation, and planning so you can focus on prayer and your vocation.</p>
            </div>
          </div>

          <Card className="border border-rose-100/80 dark:border-gray-800 bg-rose-50/60 dark:bg-gray-900 shadow-sm">
            <CardHeader className="space-y-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-white text-rose-700 px-3 py-1 text-xs font-semibold dark:bg-gray-800 dark:text-rose-200">
                <CalendarClock className="h-4 w-4" />
                Timeline & booking
              </div>
              <CardTitle className="text-xl text-rose-900 dark:text-white">When to begin</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                Start 6–12 months ahead to finish preparation, gather documents, and reserve your date.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <p>• Meet the priest/deacon for an initial conversation.</p>
              <p>• Complete prep course and FOCCUS/assessment if required.</p>
              <p>• Confirm date after paperwork and preparation milestones.</p>
              <div className="pt-3 flex flex-wrap gap-3">
                <Button asChild className="bg-rose-600 hover:bg-rose-700 text-white">
                  <Link href="/contact">Start the process</Link>
                </Button>
                <Button asChild variant="outline" className="border-rose-200 text-rose-700 hover:bg-rose-50">
                  <Link href="/calendar">Check parish calendar</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container px-4 md:px-6 pb-14 md:pb-20">
        <div className="rounded-2xl border border-rose-100 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-sm p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-[1.4fr,1fr] md:items-start">
            <div className="space-y-3">
              <h3 className="font-serif text-2xl text-rose-900 dark:text-white">Documents & readiness</h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Recent baptismal certificates with notations.</li>
                <li>• Freedom to marry forms; civil requirements as applicable.</li>
                <li>• Proof of marriage prep course completion.</li>
              </ul>
            </div>
            <div className="space-y-3 text-sm text-gray-800 dark:text-gray-200">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-200">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-semibold text-rose-900 dark:text-white">Wedding coordination</p>
                  <Link href="mailto:stjohnscatholicparish@gmail.com" className="block text-rose-700 dark:text-rose-300">
                    stjohnscatholicparish@gmail.com
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-200">
                  <PhoneCall className="h-4 w-4" />
                </div>
                <Link href="/contact" className="text-rose-700 dark:text-rose-300">
                  Call the parish office during working hours
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-200">
                  <BookOpenCheck className="h-4 w-4" />
                </div>
                <Link href="/programs" className="text-rose-700 dark:text-rose-300">
                  View marriage prep opportunities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}



