"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Droplets, ClipboardList, CalendarClock, Mail, PhoneCall } from "lucide-react"

export default function BaptismPage() {
  return (
    <div className="min-h-screen bg-sky-50/40 dark:bg-gray-900">
      <section className="bg-gradient-to-br from-sky-700 via-sky-600 to-sky-500 text-white py-10 md:py-14">
        <div className="container px-4 md:px-6 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur-sm">
            <Droplets className="h-4 w-4" />
            Baptism at St. John&apos;s
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold leading-tight">What is the Sacrament of Baptism?</h1>
          <p className="text-base md:text-lg text-white/90 max-w-3xl">
            Baptism is the beginning of our faith and gateway into the Church—the first of the three Sacraments of Initiation.
            Through Baptism we are freed from sin and reborn as sons and daughters of God, becoming members of Christ and sharers
            in the Church&apos;s mission.
          </p>
          <Card className="border border-white/20 bg-white/10 text-white max-w-2xl">
            <CardContent className="pt-4 text-sm md:text-base leading-relaxed">
              “Baptism is the sacrament of regeneration through water in the word.” <span className="font-semibold">(CCC 1213)</span>
            </CardContent>
          </Card>
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge variant="outline" className="border-white/50 text-white bg-white/10">
              Sacrament of Initiation
            </Badge>
            <Badge variant="outline" className="border-white/50 text-white bg-white/10">
              Family + community
            </Badge>
            <Badge variant="outline" className="border-white/50 text-white bg-white/10">
              Grace & new life
            </Badge>
          </div>
        </div>
      </section>

      <section className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-[1.2fr,1fr] gap-8">
          <div className="space-y-5">
            <h2 className="font-serif text-2xl md:text-3xl text-sky-900 dark:text-white">Celebrating Baptism here</h2>
            <div className="space-y-3 text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                We accompany families from first inquiry through the celebration day. Please complete the steps below so we can
                prepare well and set your date.
              </p>
              <ul className="space-y-2">
                <li>• Complete all requirements on the registration form.</li>
                <li>• Parents and godparents/sponsors attend a baptism preparation class.</li>
                <li>• Parishioners take classes here; outside sponsors may attend at their parish with proof of completion.</li>
                <li>• Child’s state birth certificate is required.</li>
                <li>• Submit the full registration packet before scheduling a baptism.</li>
              </ul>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="border border-sky-100/80 dark:border-gray-800">
                <CardHeader className="pb-2">
                  <p className="text-xs uppercase tracking-wide text-sky-700 dark:text-sky-300 font-semibold">Registration & classes</p>
                  <CardTitle className="text-lg text-sky-900 dark:text-white">Start your paperwork</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button asChild variant="outline" className="w-full justify-start border-sky-200 text-sky-700 hover:bg-sky-50">
                    <Link href="#">Infant Baptism Registration (English)</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full justify-start border-sky-200 text-sky-700 hover:bg-sky-50">
                    <Link href="#">Sacramento del Bautismo - Pautas</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full justify-start border-sky-200 text-sky-700 hover:bg-sky-50">
                    <Link href="#">Baptism Class Registration</Link>
                  </Button>
                  <Button asChild className="w-full bg-sky-600 hover:bg-sky-700 text-white">
                    <Link href="#">Register for Baptismal Class</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border border-sky-100/80 dark:border-gray-800">
                <CardHeader className="pb-2">
                  <p className="text-xs uppercase tracking-wide text-sky-700 dark:text-sky-300 font-semibold">Adult baptisms</p>
                  <CardDescription className="text-sm leading-relaxed">
                    Reach out so we can guide you through RCIA/formation and scheduling.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-gray-800 dark:text-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-700 dark:bg-sky-900 dark:text-sky-200">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-sky-900 dark:text-white">Tracy Garcia</p>
                      <p className="text-xs uppercase tracking-wide text-sky-700 dark:text-sky-300">Co-Director of Faith Formation</p>
                      <Link href="mailto:tgarcia@stmatts.org" className="block text-sky-700 dark:text-sky-300 mt-1">
                        tgarcia@stmatts.org
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-700 dark:bg-sky-900 dark:text-sky-200">
                      <PhoneCall className="h-4 w-4" />
                    </div>
                    <Link href="tel:2104785011" className="text-sky-700 dark:text-sky-300">
                      (210) 478-5011
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="border border-sky-100/80 dark:border-gray-800 bg-sky-50/60 dark:bg-gray-900 shadow-sm">
            <CardHeader className="space-y-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-white text-sky-700 px-3 py-1 text-xs font-semibold dark:bg-gray-800 dark:text-sky-200">
                <CalendarClock className="h-4 w-4" />
                Scheduling
              </div>
              <CardTitle className="text-xl text-sky-900 dark:text-white">When to contact us</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                Reach out early so we can set dates, confirm ministers, and ensure preparation is complete.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <p>• Baptism & First Communion: as soon as you are ready to begin</p>
              <p>• Confirmation: at least one term before the desired date</p>
              <p>• Matrimony: 6+ months before your wedding date</p>
              <div className="pt-3 flex flex-wrap gap-3">
                <Button asChild className="bg-sky-600 hover:bg-sky-700 text-white">
                  <Link href="/contact">Plan with us</Link>
                </Button>
                <Button asChild variant="outline" className="border-sky-200 text-sky-700 hover:bg-sky-50">
                  <Link href="/calendar">View parish calendar</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}





