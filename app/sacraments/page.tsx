"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Droplets,
  Flame,
  HeartHandshake,
  Cross,
  Church,
  Sparkles,
  HelpingHand,
  PhoneCall,
  Mail,
  ClipboardList,
  CalendarClock,
  BookOpenCheck,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react"

const sacraments = [
  {
    name: "Baptism",
    href: "/sacraments/baptism",
    icon: Droplets,
    summary: "Entrance into Christian life and gateway to the Church.",
    preparation: ["Parent & godparent formation", "Birth certificate or ID", "Choose confirmed Catholic godparents"],
  },
  {
    name: "Holy Eucharist",
    href: "/sacraments/holy-eucharist",
    icon: Sparkles,
    summary: "Receiving the Body and Blood of Christ, the heart of worship.",
    preparation: ["Enroll for First Communion", "Regular Sunday Mass", "First Reconciliation beforehand"],
  },
  {
    name: "Confirmation",
    href: "/sacraments/confirmation",
    icon: Flame,
    summary: "Sealed by the Holy Spirit to witness the faith with courage.",
    preparation: ["Practicing Catholic sponsor", "Parish catechesis & retreat", "Commitment to parish life"],
  },
  {
    name: "Reconciliation",
    href: "/sacraments/reconciliation",
    icon: Cross,
    summary: "Encounter God’s mercy through confession and absolution.",
    preparation: ["Examination of conscience", "Intent to amend life", "Available before/after Mass or by appointment"],
  },
  {
    name: "Matrimony",
    href: "/sacraments/matrimony",
    icon: HeartHandshake,
    summary: "Lifelong covenant of love and service between husband and wife.",
    preparation: ["Contact 6+ months before date", "Marriage prep course & documents", "Freedom to marry verified"],
  },
  {
    name: "Anointing of the Sick",
    href: "/sacraments/anointing",
    icon: HelpingHand,
    summary: "Strength and healing for the sick, elderly, or those in surgery.",
    preparation: ["Call for hospital or home visit", "Reconciliation if possible", "Family may gather for prayer"],
  },
  {
    name: "Holy Orders",
    href: "/sacraments/holy-orders",
    icon: Church,
    summary: "Ordination to serve as deacon, priest, or bishop.",
    preparation: ["Discern with a priest or mentor", "Active prayer & parish service", "Coordinate with vocations office"],
  },
]

const quickSteps = [
  {
    title: "Reach Out",
    icon: MessageCircle,
    detail: "Contact the parish office to share your situation and timelines.",
    cta: { label: "Talk to us", href: "/contact" },
  },
  {
    title: "Prepare",
    icon: ClipboardList,
    detail: "Gather documents and join the preparation sessions we recommend.",
    cta: { label: "See programs", href: "/programs" },
  },
  {
    title: "Schedule",
    icon: CalendarClock,
    detail: "We’ll set dates, confirm ministers, and pray with you along the way.",
    cta: { label: "Book a time", href: "/contact" },
  },
]

const officeDetails = [
  { label: "Location", value: "Opposite KCB Ground, Near Total Petrol Station, Kajiado" },
  { label: "Office Hours", value: "Tue-Fri: 8AM-5PM · Sat: 9AM-12PM · Sun: 9AM-12PM · Mon: Closed" },
  { label: "Email", value: "stjohnscatholicparish@gmail.com" },
]

export default function SacramentsPage() {
  return (
    <div className="min-h-screen bg-sky-50/40 dark:bg-gray-900">
      <section className="bg-gradient-to-br from-sky-700 via-sky-600 to-sky-500 text-white py-6 md:py-8">
        <div className="container px-4 md:px-6 max-w-4xl">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-white" />
              Sacramental Life at St. John&apos;s
            </div>
            <h1 className="font-serif text-2xl md:text-3xl font-bold leading-tight">Grace for every milestone</h1>
            <p className="text-sm md:text-base text-white/90">
              Each sacrament is an encounter with Christ and the parish community. We walk with you—from first inquiry to
              celebration—so you can receive the sacraments with confidence and joy.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              <Badge variant="outline" className="border-white/50 text-white bg-white/10 text-xs">
                Welcoming guidance
              </Badge>
              <Badge variant="outline" className="border-white/50 text-white bg-white/10 text-xs">
                Prayerful preparation
              </Badge>
              <Badge variant="outline" className="border-white/50 text-white bg-white/10 text-xs">
                Parish community support
              </Badge>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              <Button size="sm" asChild className="bg-white text-sky-700 hover:bg-sky-50">
                <Link href="/contact">Start a conversation</Link>
              </Button>
              <Button size="sm" asChild variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/programs">View preparation programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container px-4 md:px-6 py-12 md:py-16">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-sky-700 dark:text-sky-300 font-semibold">The Sacraments</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-sky-900 dark:text-white">Prepare & celebrate</h2>
            <p className="mt-2 text-sm md:text-base text-gray-700 dark:text-gray-300 max-w-2xl">
              Explore what to expect, how to prepare, and who to contact. We provide clear steps, documents needed, and parish
              support for every sacrament.
            </p>
          </div>
          <Badge variant="secondary" className="bg-sky-100 text-sky-700 dark:bg-sky-900/50 dark:text-sky-200">
            We accompany you at every step
          </Badge>
        </div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sacraments.map((sacrament) => (
            <Card key={sacrament.name} className="border border-sky-100/80 dark:border-gray-800 shadow-sm h-full">
              <Link href={sacrament.href} className="block h-full">
                <CardHeader className="flex flex-row items-start justify-between space-y-0">
                  <div>
                    <CardTitle className="font-serif text-xl text-sky-900 dark:text-white">{sacrament.name}</CardTitle>
                    <CardDescription className="mt-2 text-sm leading-relaxed">{sacrament.summary}</CardDescription>
                  </div>
                  <div className="h-11 w-11 rounded-xl bg-sky-50 dark:bg-gray-800 flex items-center justify-center text-sky-600 dark:text-sky-300">
                    <sacrament.icon className="h-5 w-5" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-xs uppercase tracking-wide text-sky-700 dark:text-sky-300 font-semibold">Preparation</p>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    {sacrament.preparation.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="link" className="px-0 text-sky-700 dark:text-sky-300">
                    Learn more
                  </Button>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </section>
      <section className="container px-4 md:px-6 pb-12 md:pb-16">
        <div className="rounded-3xl border border-sky-100 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-sm overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-10 space-y-4 border-b md:border-b-0 md:border-r border-sky-100 dark:border-gray-800">
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 text-sky-700 px-3 py-1 text-xs font-semibold dark:bg-sky-900/40 dark:text-sky-200">
                How to begin
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-sky-900 dark:text-white">Your path to the sacraments</h3>
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                Whether you are preparing for yourself or a loved one, we will match you with the right ministry lead, formation
                sessions, and schedule. Here is the typical flow:
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {quickSteps.map((step) => (
                  <Card key={step.title} className="border border-sky-100/80 dark:border-gray-800 shadow-none">
                    <CardHeader className="space-y-1">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-sky-700 dark:bg-sky-900 dark:text-sky-200">
                        <step.icon className="h-4 w-4" />
                      </div>
                      <CardTitle className="text-base text-sky-900 dark:text-white">{step.title}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed">{step.detail}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Button asChild variant="link" className="px-0 text-sky-700 dark:text-sky-300">
                        <Link href={step.cta.href}>{step.cta.label}</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className="p-8 md:p-10 space-y-5 bg-sky-50/60 dark:bg-gray-900">
              <h4 className="font-serif text-xl text-sky-900 dark:text-white">Documents & scheduling</h4>
              <div className="space-y-3 text-sm text-gray-800 dark:text-gray-200">
                <div className="flex gap-3">
                  <ClipboardList className="h-5 w-5 text-sky-600 dark:text-sky-300 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sky-900 dark:text-white">Documents we often request</p>
                    <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Civil birth certificate or national ID (as applicable)</li>
                      <li>• Prior sacrament certificates when continuing initiation</li>
                      <li>• For Matrimony: freedom to marry, banns, and prep course proof</li>
                    </ul>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CalendarClock className="h-5 w-5 text-sky-600 dark:text-sky-300 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sky-900 dark:text-white">When to contact us</p>
                    <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Baptism & First Communion: as soon as you are ready to begin</li>
                      <li>• Confirmation: at least one term before the desired date</li>
                      <li>• Matrimony: 6+ months before your wedding date</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container px-4 md:px-6 pb-14 md:pb-20">
        <div className="rounded-2xl border border-sky-100 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-sm p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-[1.6fr,1fr] md:items-center">
            <div className="space-y-4">
              <h2 className="font-serif text-2xl md:text-3xl text-sky-900 dark:text-white">Schedule & contact</h2>
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Our team will help align dates, ministers, and preparation so you can focus on prayer. Reach out by phone or
                email, or visit the parish office during working hours.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {officeDetails.map((item) => (
                  <Card key={item.label} className="border border-sky-100/80 dark:border-gray-800 shadow-none">
                    <CardHeader className="pb-2">
                      <p className="text-xs uppercase tracking-wide text-sky-700 dark:text-sky-300 font-semibold">{item.label}</p>
                      <CardTitle className="text-base text-sky-900 dark:text-white">{item.value}</CardTitle>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 rounded-xl border border-sky-100 dark:border-gray-800 p-4 bg-sky-50/70 dark:bg-gray-900">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sky-600 text-white">
                  <PhoneCall className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-sky-100 font-semibold">Call</p>
                  <p className="text-sm text-white">Parish office during working hours</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-sky-100 dark:border-gray-800 p-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sky-100 text-sky-700 dark:bg-sky-900 dark:text-sky-200">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-sky-700 dark:text-sky-300 font-semibold">Email</p>
                  <p className="text-sm text-gray-800 dark:text-gray-200 break-all">stjohnscatholicparish@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-sky-100 dark:border-gray-800 p-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sky-50 text-sky-700 dark:bg-gray-900 dark:text-sky-200">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-sky-700 dark:text-sky-300 font-semibold">Visit</p>
                  <p className="text-sm text-gray-800 dark:text-gray-200">We’re happy to meet in person at the parish office.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild className="bg-sky-600 hover:bg-sky-700 text-white">
                  <Link href="/contact">Plan with us</Link>
                </Button>
                <Button asChild variant="outline" className="border-sky-200 text-sky-700 hover:bg-sky-50">
                  <Link href="/calendar">View parish calendar</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

