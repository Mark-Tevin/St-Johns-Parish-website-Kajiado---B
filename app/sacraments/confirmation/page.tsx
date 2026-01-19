"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Flame, CalendarClock, BookOpenCheck, Users, PhoneCall, Mail } from "lucide-react"

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen bg-sky-50/40 dark:bg-gray-900">
      <section className="bg-gradient-to-br from-orange-600 via-red-600 to-amber-500 text-white py-10 md:py-14">
        <div className="container px-4 md:px-6 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur-sm">
            <Flame className="h-4 w-4" />
            Confirmation
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold leading-tight">Sealed with the Holy Spirit</h1>
          <p className="text-base md:text-lg text-white/90 max-w-3xl">
            Confirmation strengthens the grace of Baptism, seals you with the Gift of the Holy Spirit, and sends you to witness
            with courage and charity.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge variant="outline" className="border-white/50 text-white bg-white/10">
              Sacrament of Initiation
            </Badge>
            <Badge variant="outline" className="border-white/50 text-white bg-white/10">
              Gift of the Spirit
            </Badge>
            <Badge variant="outline" className="border-white/50 text-white bg-white/10">
              Mission & service
            </Badge>
          </div>
        </div>
      </section>

      <section className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-[1.2fr,1fr] gap-8">
          <div className="space-y-5">
            <h2 className="font-serif text-2xl md:text-3xl text-orange-900 dark:text-white">Preparation overview</h2>
            <div className="space-y-3 text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              <ul className="space-y-2">
                <li>• Sponsor: practicing, confirmed Catholic who is a mentor in faith.</li>
                <li>• Parish catechesis sessions, retreat, and service/project component.</li>
                <li>• Regular Sunday Mass and ongoing confession during preparation.</li>
                <li>• Commitment to parish life after Confirmation.</li>
              </ul>
              <p>We align teens and adults to age-appropriate groups; adults may prepare via RCIA/OCIA tracks.</p>
            </div>
          </div>

        <Card className="border border-orange-100/80 dark:border-gray-800 bg-orange-50/60 dark:bg-gray-900 shadow-sm">
            <CardHeader className="space-y-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-white text-orange-700 px-3 py-1 text-xs font-semibold dark:bg-gray-800 dark:text-orange-200">
                <CalendarClock className="h-4 w-4" />
                Timeline & milestones
              </div>
              <CardTitle className="text-xl text-orange-900 dark:text-white">When to start</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                Begin one term ahead of your desired Confirmation date. We’ll schedule retreat, service, and rehearsals with you.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <p>• Register at the start of the catechetical term.</p>
              <p>• Complete retreat and sponsor meetings.</p>
              <p>• Celebrate Reconciliation before Confirmation Mass.</p>
              <div className="pt-3 flex flex-wrap gap-3">
                <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white">
                  <Link href="/contact">Talk to formation team</Link>
                </Button>
                <Button asChild variant="outline" className="border-orange-200 text-orange-700 hover:bg-orange-50">
                  <Link href="/programs">See formation programs</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container px-4 md:px-6 pb-14 md:pb-20">
        <div className="rounded-2xl border border-orange-100 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-sm p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-[1.4fr,1fr] md:items-start">
            <div className="space-y-3">
              <h3 className="font-serif text-2xl text-orange-900 dark:text-white">Documents & readiness</h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Baptism certificate and First Communion record.</li>
                <li>• Sponsor eligibility/letter from their parish.</li>
                <li>• Retreat completion and service/project reflection.</li>
              </ul>
            </div>
            <div className="space-y-3 text-sm text-gray-800 dark:text-gray-200">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-200">
                  <Users className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-semibold text-orange-900 dark:text-white">Youth & Adult Formation</p>
                  <Link href="mailto:stjohnscatholicparish@gmail.com" className="block text-orange-700 dark:text-orange-300">
                    stjohnscatholicparish@gmail.com
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-200">
                  <PhoneCall className="h-4 w-4" />
                </div>
                <Link href="/contact" className="text-orange-700 dark:text-orange-300">
                  Call the parish office during working hours
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-200">
                  <Mail className="h-4 w-4" />
                </div>
                <Link href="/programs" className="text-orange-700 dark:text-orange-300">
                  See schedules and retreats
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}



