"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, CalendarClock, BookOpenCheck, PhoneCall, Mail } from "lucide-react"

export default function HolyEucharistPage() {
  return (
    <div className="min-h-screen bg-sky-50/40 dark:bg-gray-900">
      <section className="bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-500 text-white py-10 md:py-14">
        <div className="container px-4 md:px-6 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            Holy Eucharist
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold leading-tight">The heart of our worship</h1>
          <p className="text-base md:text-lg text-white/90 max-w-3xl">
            In the Eucharist, we receive the Body and Blood of Christ, are united to His sacrifice, and are sent forth to love and
            serve. This sacrament sustains our parish and nourishes us for mission.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge variant="outline" className="border-white/50 text-white bg-white/10">
              Sacrament of Initiation
            </Badge>
            <Badge variant="outline" className="border-white/50 text-white bg-white/10">
              Real Presence
            </Badge>
            <Badge variant="outline" className="border-white/50 text-white bg-white/10">
              Sent for mission
            </Badge>
          </div>
        </div>
      </section>

      <section className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-[1.2fr,1fr] gap-8">
          <div className="space-y-5">
            <h2 className="font-serif text-2xl md:text-3xl text-emerald-900 dark:text-white">Preparing for First Holy Communion</h2>
            <div className="space-y-3 text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              <ul className="space-y-2">
                <li>• Enroll in parish catechism/formation for children or adults.</li>
                <li>• Regular Sunday Mass participation during preparation.</li>
                <li>• First Reconciliation is completed before receiving the Eucharist.</li>
                <li>• Parents/guardians accompany children and support practice at home.</li>
              </ul>
              <p>
                Adults entering the Church prepare through RCIA/OCIA; we will pair you with a formation path that fits your schedule.
              </p>
            </div>
          </div>

          <Card className="border border-emerald-100/80 dark:border-gray-800 bg-emerald-50/60 dark:bg-gray-900 shadow-sm">
            <CardHeader className="space-y-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-white text-emerald-700 px-3 py-1 text-xs font-semibold dark:bg-gray-800 dark:text-emerald-200">
                <CalendarClock className="h-4 w-4" />
                Timeline & support
              </div>
              <CardTitle className="text-xl text-emerald-900 dark:text-white">When to start</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                Start as soon as you are ready. We help with schedules, catechesis, and rehearsal so you can receive reverently.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <p>• Children: join the parish program at the beginning of term.</p>
              <p>• Adults: contact us for RCIA/OCIA and individual timelines.</p>
              <div className="pt-3 flex flex-wrap gap-3">
                <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  <Link href="/contact">Plan with us</Link>
                </Button>
                <Button asChild variant="outline" className="border-emerald-200 text-emerald-700 hover:bg-emerald-50">
                  <Link href="/programs">See formation programs</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container px-4 md:px-6 pb-14 md:pb-20">
        <div className="rounded-2xl border border-emerald-100 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-sm p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-[1.4fr,1fr] md:items-start">
            <div className="space-y-3">
              <h3 className="font-serif text-2xl text-emerald-900 dark:text-white">Documents & readiness</h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Baptism certificate (for those continuing initiation).</li>
                <li>• Attendance at catechism sessions and rehearsals.</li>
                <li>• Commitment to Sunday Mass and family prayer.</li>
              </ul>
            </div>
            <div className="space-y-3 text-sm text-gray-800 dark:text-gray-200">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-200">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-semibold text-emerald-900 dark:text-white">Faith Formation Office</p>
                  <Link href="mailto:stjohnscatholicparish@gmail.com" className="block text-emerald-700 dark:text-emerald-300">
                    stjohnscatholicparish@gmail.com
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-200">
                  <PhoneCall className="h-4 w-4" />
                </div>
                <Link href="/contact" className="text-emerald-700 dark:text-emerald-300">
                  Call the parish office during working hours
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}





