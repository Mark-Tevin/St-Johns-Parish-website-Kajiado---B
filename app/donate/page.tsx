"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Smartphone, Copy, AlertCircle, CheckCircle2, ChevronRight, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"

const donationPurposes = [
  { value: "tithe", label: "Tithe" },
  { value: "thanksgiving", label: "Thanksgiving" },
  { value: "sdk", label: "SDK" },
  { value: "project", label: "Church Project" },
  { value: "offering", label: "Sunday Offering" },
  { value: "other", label: "Other Purpose" },
]

export default function DonatePage() {
  const [selectedPurpose, setSelectedPurpose] = useState<string>("")
  const [currentStep, setCurrentStep] = useState(1)
  const [showSuccess, setShowSuccess] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    toast.success("Paybill number copied to clipboard!")
    setTimeout(() => setCopied(false), 2000)
  }

  const handlePurposeSelect = (value: string) => {
    setSelectedPurpose(value)
    setCurrentStep(2)
  }

  const simulateSuccess = () => {
    setShowSuccess(true)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-50 dark:from-sky-950 dark:via-sky-900/20 dark:to-sky-950">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-sky-500 dark:from-sky-700 dark:to-sky-600"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat"></div>
        <div className="container relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-serif text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-white drop-shadow-md"
            >
              Support Our Ministry
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/90 text-lg font-medium"
            >
              Your generous contributions help us maintain our church and support our community programs
            </motion.p>
          </div>
        </div>
        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
            <path
              fill="currentColor"
              fillOpacity="1"
              className="text-background"
              d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,64C960,53,1056,43,1152,42.7C1248,43,1344,53,1392,58.7L1440,64L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <AnimatePresence mode="wait">
              {showSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border-blue-200 dark:border-sky-700 bg-sky-50 dark:bg-sky-950/50 shadow-lg">
                    <CardContent className="pt-6 pb-6">
                      <div className="text-center space-y-4">
                        <div className="mx-auto w-16 h-16 rounded-full bg-sky-100 dark:bg-sky-900 flex items-center justify-center">
                          <CheckCircle2 className="h-8 w-8 text-sky-500 dark:text-sky-400" />
                        </div>
                        <CardTitle className="text-2xl font-serif text-sky-700 dark:text-blue-200">
                          Thank You for Your Donation!
                        </CardTitle>
                        <CardDescription className="text-sky-600 dark:text-sky-300 text-base">
                          Your contribution has been received. May God bless you for your generosity.
                        </CardDescription>
                        <Button
                          variant="outline"
                          className="mt-4 border-sky-300 dark:border-sky-600 text-sky-600 dark:text-sky-300"
                          onClick={() => setShowSuccess(false)}
                        >
                          Make Another Donation
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Tabs defaultValue="mpesa" className="w-full">
                    <TabsList className="w-full mb-6">
                      <TabsTrigger value="mpesa" className="flex items-center gap-2 w-full">
                        <Smartphone className="h-4 w-4" />
                        M-PESA
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="mpesa" className="space-y-6">
                      <Card className="border-2 border-sky-100 dark:border-sky-700 bg-white dark:bg-gray-900 shadow-lg overflow-hidden">
                        <CardHeader className="bg-gradient-to-r from-sky-50 to-white dark:from-sky-900/50 dark:to-sky-950/30 border-b border-sky-100 dark:border-sky-700/50">
                          <CardTitle className="flex items-center gap-2 text-sky-700 dark:text-blue-200">
                            <span>M-PESA Payment</span>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full">
                                  <HelpCircle className="h-4 w-4 text-sky-500 dark:text-sky-400" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                  <DialogTitle>How to Pay via M-PESA</DialogTitle>
                                  <DialogDescription>
                                    Follow these simple steps to make your donation:
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="mt-4 space-y-2">
                                  <ol className="list-decimal list-inside space-y-2 text-sm">
                                    <li className="p-2 bg-sky-50 dark:bg-sky-900/20 rounded-md">
                                      Go to M-PESA on your phone
                                    </li>
                                    <li className="p-2 bg-sky-50 dark:bg-sky-900/20 rounded-md">
                                      Select "Lipa na M-PESA"
                                    </li>
                                    <li className="p-2 bg-sky-50 dark:bg-sky-900/20 rounded-md">Select "Pay Bill"</li>
                                    <li className="p-2 bg-sky-50 dark:bg-sky-900/20 rounded-md">
                                      Enter Business Number: <span className="font-bold">7186261</span>
                                    </li>
                                    <li className="p-2 bg-sky-50 dark:bg-sky-900/20 rounded-md">
                                      Enter Account Number: Your Name followed by purpose (e.g., "John SDK" or "Mary
                                      Tithe")
                                    </li>
                                    <li className="p-2 bg-sky-50 dark:bg-sky-900/20 rounded-md">Enter Amount</li>
                                    <li className="p-2 bg-sky-50 dark:bg-sky-900/20 rounded-md">
                                      Enter your M-PESA PIN
                                    </li>
                                    <li className="p-2 bg-sky-50 dark:bg-sky-900/20 rounded-md">
                                      Confirm the transaction
                                    </li>
                                  </ol>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </CardTitle>
                          <CardDescription className="text-sky-500 dark:text-sky-300">
                            Follow the steps below to make your donation via M-PESA
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6 p-6">
                          {/* Step 1: Select Purpose */}
                          <div className="space-y-4">
                            <div className="flex items-center gap-2">
                              <div
                                className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium ${
                                  currentStep === 1
                                    ? "bg-sky-500 text-white dark:bg-sky-500"
                                    : "bg-sky-100 text-sky-500 dark:bg-sky-900 dark:text-sky-300"
                                }`}
                              >
                                1
                              </div>
                              <h3 className="font-medium text-lg text-sky-700 dark:text-blue-200">Select Purpose</h3>
                            </div>
                            <Select value={selectedPurpose} onValueChange={handlePurposeSelect}>
                              <SelectTrigger className="border-2 border-blue-200 dark:border-sky-700 bg-white dark:bg-gray-900 h-14 text-base">
                                <SelectValue
                                  placeholder="Choose purpose of donation"
                                  className="text-sky-500 dark:text-sky-300"
                                />
                              </SelectTrigger>
                              <SelectContent className="border-2 border-blue-200 dark:border-sky-700 bg-white dark:bg-gray-900">
                                {donationPurposes.map((purpose) => (
                                  <SelectItem key={purpose.value} value={purpose.value}>
                                    {purpose.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <Separator className="my-6 bg-sky-100 dark:bg-sky-700/50" />

                          {/* Step 2: Payment Details */}
                          <div
                            className={`space-y-4 transition-opacity duration-300 ${
                              currentStep >= 2 ? "opacity-100" : "opacity-50"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <div
                                className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium ${
                                  currentStep === 2
                                    ? "bg-sky-500 text-white dark:bg-sky-500"
                                    : "bg-sky-100 text-sky-500 dark:bg-sky-900 dark:text-sky-300"
                                }`}
                              >
                                2
                              </div>
                              <h3 className="font-medium text-lg text-sky-700 dark:text-blue-200">Payment Details</h3>
                            </div>

                            <Card className="mt-4 border-2 border-dashed border-blue-200 dark:border-sky-700 bg-sky-50/50 dark:bg-sky-950/20">
                              <CardHeader className="border-b border-sky-100 dark:border-sky-700/50 pb-3">
                                <CardTitle className="text-base text-sky-700 dark:text-blue-200">
                                  M-PESA Payment Steps
                                </CardTitle>
                                <CardDescription className="text-sky-500 dark:text-sky-400">
                                  Follow these steps on your phone
                                </CardDescription>
                              </CardHeader>
                              <CardContent className="pt-4">
                                <ol className="space-y-3 list-decimal list-inside text-sm">
                                  {[
                                    "Go to M-PESA menu on your phone",
                                    'Select "Lipa na M-PESA"',
                                    'Select "Pay Bill"',
                                    <>
                                      Enter Business Number:{" "}
                                      <span
                                        key="business-number"
                                        className="font-mono font-bold text-sky-600 dark:text-sky-300 bg-sky-100 dark:bg-sky-900/50 px-2 py-0.5 rounded"
                                      >
                                        7186261
                                      </span>
                                    </>,
                                    <>
                                      Enter Account Number: Your Name followed by purpose
                                      {selectedPurpose && (
                                        <span
                                          key="account-number-purpose"
                                          className="font-medium text-sky-600 dark:text-sky-300"
                                        >
                                          {" "}
                                          (e.g., "John{" "}
                                          {donationPurposes.find((p) => p.value === selectedPurpose)?.label}")
                                        </span>
                                      )}
                                    </>,
                                    "Enter Amount you wish to donate",
                                    "Enter your M-PESA PIN",
                                    "Confirm all details are correct and submit",
                                    "You will receive a confirmation message from M-PESA",
                                    "Keep the message as proof of payment",
                                  ].map((step, index) => (
                                    <li
                                      key={index}
                                      className="text-sky-600 dark:text-sky-300 active:bg-sky-100/70 dark:active:bg-sky-700/30 rounded-md p-2 transition-colors touch-manipulation"
                                    >
                                      {step}
                                    </li>
                                  ))}
                                </ol>
                              </CardContent>
                            </Card>

                            <Card className="border-2 border-blue-200 dark:border-sky-700 bg-gradient-to-r from-sky-50 to-white dark:from-sky-950 dark:to-sky-900/30 shadow-md">
                              <CardContent className="pt-6 pb-6">
                                <div className="space-y-6">
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <p className="text-sm font-medium text-sky-500 dark:text-sky-400">
                                        Paybill Number
                                      </p>
                                      <p className="text-3xl font-mono font-bold text-sky-700 dark:text-blue-200 mt-1">
                                        7186261
                                      </p>
                                    </div>
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      onClick={() => copyToClipboard("7186261")}
                                      className="h-10 border-blue-200 dark:border-sky-600 hover:bg-sky-100 dark:hover:bg-sky-900 text-sky-600 dark:text-sky-300"
                                    >
                                      {copied ? (
                                        <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
                                      ) : (
                                        <Copy className="h-4 w-4 mr-2" />
                                      )}
                                      {copied ? "Copied!" : "Copy"}
                                    </Button>
                                  </div>

                                  <div className="flex items-center justify-between p-3 bg-sky-100/50 dark:bg-sky-900/20 rounded-lg">
                                    <div>
                                      <p className="text-sm font-medium text-sky-600 dark:text-sky-300">
                                        Account Format
                                      </p>
                                      <p className="text-base font-medium text-sky-700 dark:text-blue-200 mt-1">
                                        Your Name{" "}
                                        {selectedPurpose && (
                                          <span className="text-sky-500 dark:text-sky-400">
                                            {donationPurposes.find((p) => p.value === selectedPurpose)?.label}
                                          </span>
                                        )}
                                      </p>
                                    </div>
                                    <ChevronRight className="h-5 w-5 text-sky-400 dark:text-sky-500" />
                                  </div>
                                </div>
                              </CardContent>
                            </Card>

                            <Alert className="border-2 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
                              <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                              <AlertTitle className="text-amber-800 dark:text-amber-200">Important</AlertTitle>
                              <AlertDescription className="text-amber-700 dark:text-amber-300">
                                Please keep your transaction message as proof of donation. For any issues, contact our
                                parish office with your transaction details.
                              </AlertDescription>
                            </Alert>

                            {/* Simulate success button (for demo purposes) */}
                            <div className="flex justify-end mt-6">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={simulateSuccess}
                                className="text-sky-500 dark:text-sky-400 border-blue-200 dark:border-sky-700"
                              >
                                Simulate Successful Donation (Demo)
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Additional Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8"
            >
              <Card className="border-2 border-sky-100 dark:border-sky-900 bg-white dark:bg-gray-900 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-sky-50 to-white dark:from-sky-900/50 dark:to-sky-950/30 border-b border-sky-100 dark:border-sky-700/50">
                  <CardTitle className="text-sky-700 dark:text-blue-200">Why Support Us?</CardTitle>
                </CardHeader>
                <CardContent className="py-4">
                  <div className="flex flex-col space-y-3 text-sky-600 dark:text-sky-300">
                    <div className="flex flex-wrap gap-2 text-sm">
                      {[
                        "Church facilities",
                        "Outreach programs",
                        "Education",
                        "Community support",
                        "Spiritual events",
                        "Outstation churches",
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-1.5 bg-sky-50/50 dark:bg-sky-900/20 rounded-full px-3 py-1 text-xs"
                        >
                          <CheckCircle2 className="h-3 w-3 text-sky-500 dark:text-sky-400" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-2 p-3 bg-sky-50 dark:bg-sky-900/20 rounded-lg border border-sky-100 dark:border-sky-700/50 text-sm">
                      <p className="italic text-sky-500 dark:text-sky-400 text-center">
                        "Each of you should give what you have decided in your heart to give, not reluctantly or under
                        compulsion, for God loves a cheerful giver."
                      </p>
                      <p className="text-right text-xs mt-1 text-sky-500 dark:text-sky-500">- 2 Corinthians 9:7</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
