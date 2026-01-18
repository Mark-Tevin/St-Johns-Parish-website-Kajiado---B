"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Calendar, MapPin, Copy, Check, User, Info, Mail, ChevronDown } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { FileText } from "lucide-react"

export default function ParishOfficePage() {
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white dark:from-sky-950 dark:to-sky-900">
      {/* Compact Header Section */}
      <section className="relative py-10 md:py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00529B] via-[#007FFF] to-[#0096FF] opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10 bg-repeat"></div>
        <div className="container relative z-10">
          <div className="mx-auto max-w-2xl text-center text-white">
            <h1 className="font-serif text-3xl font-bold tracking-tight">Parish Office</h1>
            <p className="mt-2 text-white/90">Your gateway to our parish community and services</p>
          </div>
        </div>
      </sectioncal history
      {/* Main Content Section */}
      <section className="py-8 md:py-12">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-12">
            {/* Left Column - Office Information */}
            <div className="lg:col-span-4">
              <Card className="overflow-hidden border-none shadow-md bg-white/80 dark:bg-sky-950/80 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-sky-500 to-sky-600 text-white py-4">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Info className="h-4 w-4" />
                    Parish Office Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-4">
                  <div>
                    <h3 className="font-serif text-base font-semibold mb-2 flex items-center">
                      <Clock className="mr-2 h-4 w-4 text-sky-500 dark:text-sky-400" />
                      Office Hours
                    </h3>
                    <div className="ml-6 space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="font-medium">Tuesday - Friday</span>
                        <Badge
                          variant="outline"
                          className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400 text-xs"
                        >
                          8:00 AM - 5:00 PM
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Saturday</span>
                        <Badge
                          variant="outline"
                          className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400 text-xs"
                        >
                          9:00 AM - 12:00 PM
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Sunday</span>
                        <Badge
                          variant="outline"
                          className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400 text-xs"
                        >
                          9:00 AM - 12:00 PM
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Monday</span>
                        <Badge variant="destructive" className="text-xs">
                          Closed
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <Separator className="my-2" />

                  <div>
                    <h3 className="font-serif text-base font-semibold mb-2 flex items-center">
                      <User className="mr-2 h-4 w-4 text-sky-500 dark:text-sky-400" />
                      Priest Availability
                    </h3>
                    <div className="ml-6 text-sm">
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar className="h-3 w-3 text-sky-500 dark:text-sky-400" />
                        <span className="font-medium">Thursdays</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        For urgent matters, please contact the parish office.
                      </p>
                    </div>
                  </div>

                  <Separator className="my-2" />

                  <TooltipProvider>
                    <div>
                      <h3 className="font-serif text-base font-semibold mb-2 flex items-center">
                        <MapPin className="mr-2 h-4 w-4 text-sky-500 dark:text-sky-400" />
                        Contact Details
                      </h3>
                      <div className="ml-6 space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Mail className="h-3 w-3 mr-2 text-muted-foreground" />
                            <span>stjohnscatholicparish@gmail.com</span>
                          </div>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6"
                                onClick={() => copyToClipboard("stjohnscatholicparish@gmail.com", "email")}
                              >
                                {copied === "email" ? (
                                  <Check className="h-3 w-3 text-green-500" />
                                ) : (
                                  <Copy className="h-3 w-3" />
                                )}
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="text-xs">Copy email address</p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                        <p className="text-xs">
                          St. John&apos;s Parish Kajiado
                          <br />
                          P.O. Box 123
                          <br />
                          Opposite KCB Ground, Near Total Petrol Station, Kajiado Central, Kajiado County, Kenya
                        </p>
                      </div>
                    </div>
                  </TooltipProvider>
                </CardContent>
                <CardFooter className="bg-muted/50 px-4 py-3">
                  <Button className="w-full text-sm py-1 h-8" asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Right Column - Parish Priest Message and Services */}
            <div className="lg:col-span-8 space-y-6">
              {/* Parish Priest Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden border-none shadow-md">
                  <CardHeader className="border-b pb-4">
                    <div className="flex items-center gap-4">
                      <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-white shadow-md">
                        <Image
                          src="/placeholder.svg?height=150&width=150"
                          alt="Fr. Patrick Nkaai"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <CardTitle className="font-serif text-xl">Fr. Patrick Nkaai</CardTitle>
                        <CardDescription>Parish Priest</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <h2 className="font-serif text-lg font-bold flex items-center gap-2">
                        <FileText className="h-4 w-4 text-sky-500 dark:text-sky-400" />
                        Message from Our Parish Priest
                      </h2>
                      <div className="prose-sm dark:prose-invert max-w-none">
                        <p className="text-sm font-medium text-blue-800 dark:text-blue-300 italic">
                          "Dear brothers and sisters in Christ,"
                        </p>
                        <p className="text-sm">
                          Welcome to St. John's Parish Kajiado. Our parish is a vibrant Catholic community dedicated to
                          spreading the Gospel and serving God's people. As your Parish Priest, I am delighted to
                          welcome you to our spiritual family.
                        </p>
                        <p className="text-sm">
                          At St. John's, we strive to create an environment where faith flourishes, community thrives,
                          and service to others is at the heart of all we do.
                        </p>
                      </div>
                      <div className="flex justify-end">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" className="text-xs">
                              Read Full Message
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[425px] w-[95vw] max-h-[90vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle>Message from Fr. Patrick Nkaai</DialogTitle>
                              <DialogDescription>Parish Priest</DialogDescription>
                            </DialogHeader>
                            <div className="mt-4 space-y-4">
                              <p className="text-sm font-medium text-blue-800 dark:text-blue-300 italic">
                                "Dear brothers and sisters in Christ,"
                              </p>
                              <p className="text-sm">
                                Welcome to St. John's Parish Kajiado. Our parish is a vibrant Catholic community
                                dedicated to spreading the Gospel and serving God's people. As your Parish Priest, I am
                                delighted to welcome you to our spiritual family.
                              </p>
                              <p className="text-sm">
                                At St. John's, we strive to create an environment where faith flourishes, community
                                thrives, and service to others is at the heart of all we do. Our parish is more than
                                just a place of worship; it is a home where we come together to grow in our relationship
                                with God and with one another.
                              </p>
                              <p className="text-sm">
                                We offer a wide range of ministries and programs to cater to the spiritual needs of all
                                age groups. From our vibrant youth ministry to our dedicated senior groups, from our
                                faith formation classes to our outreach programs, there is a place for everyone to
                                participate and contribute.
                              </p>
                              <p className="text-sm">
                                I encourage you to explore our website, learn about our various activities, and most
                                importantly, to join us in person for Mass and our community events. Whether you're a
                                long-time parishioner, new to the area, or just visiting, know that you are welcome
                                here.
                              </p>
                              <p className="text-sm">
                                May God bless you and your loved ones. I look forward to meeting you and journeying
                                together in faith.
                              </p>
                              <p className="text-sm font-medium">
                                In Christ,
                                <br />
                                Fr. Patrick Nkaai
                                <br />
                                Parish Priest
                              </p>
                            </div>
                            <DialogFooter>
                              <DialogClose asChild>
                                <Button type="button">Close</Button>
                              </DialogClose>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Parish Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-md">
                  <CardHeader className="bg-gradient-to-r from-sky-500 to-sky-600 text-white py-3">
                    <CardTitle className="text-lg">Parish Office Services</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <Tabs defaultValue="sacraments" className="w-full">
                      <TabsList className="grid w-full grid-cols-3 h-8">
                        <TabsTrigger value="sacraments" className="text-xs">
                          Sacraments
                        </TabsTrigger>
                        <TabsTrigger value="certificates" className="text-xs">
                          Certificates
                        </TabsTrigger>
                        <TabsTrigger value="appointments" className="text-xs">
                          Appointments
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="sacraments" className="mt-4">
                        <p className="text-xs text-muted-foreground mb-2">
                          The parish office coordinates the scheduling and preparation for all sacraments:
                        </p>
                        <div className="grid gap-2 grid-cols-2 sm:grid-cols-3">
                          {[
                            "Baptism",
                            "First Holy Communion",
                            "Confirmation",
                            "Matrimony",
                            "Anointing of the Sick",
                            "Reconciliation",
                          ].map((sacrament) => (
                            <div key={sacrament} className="flex items-center gap-1 text-xs">
                              <div className="h-1.5 w-1.5 rounded-full bg-sky-500"></div>
                              <span>{sacrament}</span>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                      <TabsContent value="certificates" className="mt-4">
                        <p className="text-xs text-muted-foreground mb-2">
                          The following certificates can be requested from the parish office:
                        </p>
                        <div className="grid gap-2 grid-cols-2">
                          {[
                            "Baptism Certificate",
                            "Confirmation Certificate",
                            "Marriage Certificate",
                            "Letter of Good Standing",
                          ].map((certificate) => (
                            <div key={certificate} className="flex items-center gap-1 text-xs">
                              <div className="h-1.5 w-1.5 rounded-full bg-sky-500"></div>
                              <span>{certificate}</span>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                      <TabsContent value="appointments" className="mt-4">
                        <p className="text-xs text-muted-foreground mb-2">
                          The parish office can help you schedule appointments for:
                        </p>
                        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2">
                          {[
                            "Spiritual Direction with Fr. Patrick (Thursdays)",
                            "Marriage Preparation Counseling",
                            "Grief Counseling",
                            "Home or Hospital Visits",
                          ].map((appointment) => (
                            <div key={appointment} className="flex items-center gap-1 text-xs">
                              <div className="h-1.5 w-1.5 rounded-full bg-sky-500"></div>
                              <span>{appointment}</span>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </motion.div>

              {/* FAQ Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-md">
                  <CardHeader className="py-3">
                    <CardTitle className="font-serif text-lg flex items-center gap-2">
                      <ChevronDown className="h-4 w-4" />
                      Frequently Asked Questions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <Accordion type="single" collapsible className="w-full">
                      {[
                        {
                          question: "How do I request a baptism or marriage certificate?",
                          answer:
                            "You can request certificates by visiting the parish office during regular hours. Please bring identification and any relevant information such as the date of the sacrament.",
                        },
                        {
                          question: "How do I schedule a Mass intention?",
                          answer:
                            "Mass intentions can be scheduled by visiting or calling the parish office. Please provide the name of the person for whom the Mass is intended.",
                        },
                        {
                          question: "How can I register as a new parishioner?",
                          answer:
                            "New parishioners can register by filling out a registration form available at the parish office or downloading it from our website.",
                        },
                        {
                          question: "How do I arrange for a home blessing?",
                          answer:
                            "To arrange for a home blessing, please contact the parish office to schedule an appointment with one of our priests.",
                        },
                      ].map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-sm py-2">{faq.question}</AccordionTrigger>
                          <AccordionContent className="text-xs">{faq.answer}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
