"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Church, Compass, BookOpenCheck, PhoneCall, Mail } from "lucide-react"

export default function HolyOrdersPage() {
  return (
    <div className="min-h-screen bg-sky-50/40 dark:bg-gray-900">
      <section className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 text-white py-10 md:py-14">
        <div className="container px-4 md:px-6 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur-sm">
            <Church className="h-4 w-4" />
            Holy Orders
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold leading-tight">Called to serve Christ and His Church</h1>
          <p className="text-base md:text-lg text-white/90 max-w-3xl">
            Holy Orders configures men to Christ as deacons, priests, or bishops. Through ordination they preach, sanctify, and
            shepherd God’s people.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge variant="outline" className="border-white/50 text-white bg-white/10">
              Vocational discernment
            </Badge>
            <Badge variant="outline" className="border-white/50 text-white bg-white/10">
              Service & mission
            </Badge>
            <Badge variant="outline" className="border-white/50 text-white bg-white/10">
              Diaconate · Priesthood
            </Badge>
          </div>
        </div>
      </section>

      <section className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-[1.2fr,1fr] gap-8">
          <div className="space-y-5">
            <h2 className="font-serif text-2xl md:text-3xl text-slate-900 dark:text-white">Discerning a call</h2>
            <div className="space-y-3 text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              <ul className="space-y-2">
                <li>• Pray daily for clarity and generosity to God’s will.</li>
                <li>• Serve in parish ministries and grow in the sacraments.</li>
                <li>• Meet regularly with a priest or spiritual director.</li>
                <li>• Connect with the diocesan vocations office for next steps.</li>
              </ul>
              <p>We will accompany you and connect you with diocesan discernment retreats, interviews, and formation paths.</p>
            </div>
          </div>

          <Card className="border border-slate-200/80 dark:border-gray-800 bg-slate-50/60 dark:bg-gray-900 shadow-sm">
            <CardHeader className="space-y-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-white text-slate-800 px-3 py-1 text-xs font-semibold dark:bg-gray-800 dark:text-slate-200">
                <Compass className="h-4 w-4" />
                Next steps
              </div>
              <CardTitle className="text-xl text-slate-900 dark:text-white">Start the conversation</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                Let us introduce you to the vocations director and walk with you through prayer, interviews, and discernment events.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <p>• Schedule time with a priest to discuss your call.</p>
              <p>• Attend diocesan retreats and informational sessions.</p>
              <p>• Receive guidance on application, studies, and formation timeline.</p>
              <div className="pt-3 flex flex-wrap gap-3">
                <Button asChild className="bg-slate-800 hover:bg-slate-900 text-white">
                  <Link href="/contact">Meet a priest</Link>
                </Button>
                <Button asChild variant="outline" className="border-slate-200 text-slate-800 hover:bg-slate-50">
                  <Link href="/programs">See parish ministries</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container px-4 md:px-6 pb-14 md:pb-20">
        <div className="rounded-2xl border border-slate-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-sm p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-[1.4fr,1fr] md:items-start">
            <div className="space-y-3">
              <h3 className="font-serif text-2xl text-slate-900 dark:text-white">Support & contacts</h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Spiritual direction and regular prayer.</li>
                <li>• Service in parish ministries to deepen discernment.</li>
                <li>• Vocations office guidance on application and formation.</li>
              </ul>
            </div>
            <div className="space-y-3 text-sm text-gray-800 dark:text-gray-200">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-slate-800 dark:bg-slate-900 dark:text-slate-200">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">Vocations connection</p>
                  <Link href="mailto:stjohnscatholicparish@gmail.com" className="block text-slate-800 dark:text-slate-200">
                    stjohnscatholicparish@gmail.com
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-slate-800 dark:bg-slate-900 dark:text-slate-200">
                  <PhoneCall className="h-4 w-4" />
                </div>
                <Link href="/contact" className="text-slate-800 dark:text-slate-200">
                  Call the parish office; ask for a priest about vocations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}



