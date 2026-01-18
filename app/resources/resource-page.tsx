"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Download, FileText, Image as ImageIcon, FileCheck, Info, Calendar, FileSpreadsheet } from "lucide-react"
import { LazySection } from "@/components/LazySection"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useSearchParams } from "next/navigation"

// Sample documents - these would be replaced with actual document links
const documents = [
  {
    title: "Parish Registration Form",
    description: "Register as a new member of St. John's Parish",
    type: "Form",
    size: "245 KB",
    icon: FileText,
    category: "Forms",
  },
  {
    title: "Baptism Application Form",
    description: "Application form for infant and adult baptism",
    type: "Form",
    size: "180 KB",
    icon: FileText,
    category: "Forms",
  },
  {
    title: "Marriage Preparation Form",
    description: "Required documents and forms for marriage preparation",
    type: "Form",
    size: "320 KB",
    icon: FileText,
    category: "Forms",
  },
  {
    title: "Parish Constitution",
    description: "The constitution and bylaws of St. John's Parish",
    type: "Document",
    size: "1.2 MB",
    icon: FileCheck,
    category: "Documents",
  },
  {
    title: "Parish Bulletin - January 2025",
    description: "Weekly parish bulletin and announcements",
    type: "Bulletin",
    size: "850 KB",
    icon: FileSpreadsheet,
    category: "Bulletins",
  },
  {
    title: "Parish Bulletin - December 2024",
    description: "Weekly parish bulletin and announcements",
    type: "Bulletin",
    size: "920 KB",
    icon: FileSpreadsheet,
    category: "Bulletins",
  },
]

// Sample tender information
const tenders = [
  {
    title: "Church Renovation Project",
    description: "Tender for renovation of the main church building",
    deadline: "March 15, 2025",
    category: "Construction",
    status: "Open",
  },
  {
    title: "School Furniture Supply",
    description: "Tender for supply of furniture to St. John's Primary School",
    deadline: "February 28, 2025",
    category: "Supply",
    status: "Open",
  },
  {
    title: "IT Equipment Supply",
    description: "Tender for supply of computer equipment to St. John's Computer College",
    deadline: "March 10, 2025",
    category: "Supply",
    status: "Open",
  },
]

// Gallery images - using existing gallery images from about page
const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250225-WA0031.jpg-Yh0uFIkLGWgWKop00ly3H4xBVa39yy.jpeg",
    alt: "Young clergy members in white vestments sharing a moment of fellowship",
    category: "Clergy",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250225-WA0030.jpg-1SLiCl04wjbl9zqhYsggIsKJ39pdTe.jpeg",
    alt: "Bishop saying a prayer during consecration of the church ceremony",
    category: "Liturgical Celebrations",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250225-WA0023.jpg-OVqGTMH7sesPi9XQE1G5aw2jv4XNHN.jpeg",
    alt: "Congregation gathered in prayer with the priest during Mass",
    category: "Community Worship",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bishopoutsidechurchgate.jpg-sSHRKDsJPto1tAsUkvgCJFyXLLY78f.jpeg",
    alt: "Bishop in red vestments blessing and interacting with children after Mass",
    category: "Special Celebrations",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250225-WA0038.jpg-KRR18PCqHpRSInxRIsXLJWToF8j84A.jpeg",
    alt: "Clergy gathered at church entrance for a special ceremony",
    category: "Parish Events",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pmc.jpg-O1XYQU2dXoZ6KdNM5ZsWfHJCFYRPoW.jpeg",
    alt: "PMC children performing a liturgical dance during Mass",
    category: "Youth Ministry",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250225-WA0034.jpg-cVTVnywo9TPi0bE3jffBderTaQMm0w.jpeg",
    alt: "Church entrance decorated with balloons as parishioners gather",
    category: "Community Events",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pmcinchurch.jpg-JvAskW6UsqWIVi1KI7Rj2ZgVyF3CdE.jpeg",
    alt: "PMC children participating in worship service",
    category: "Children's Ministry",
  },
]

export default function ResourcesPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [activeTab, setActiveTab] = useState<string>("downloads")

  // Handle hash navigation
  useEffect(() => {
    const hash = window.location.hash.replace("#", "")
    if (hash === "downloads" || hash === "tenders" || hash === "gallery") {
      setActiveTab(hash)
      // Scroll to top of tabs section
      setTimeout(() => {
        const element = document.getElementById("resources-tabs")
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }, 100)
    }
  }, [])

  const categories = ["All", ...Array.from(new Set(galleryImages.map((img) => img.category)))]

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <div className="min-h-screen bg-sky-50/30 dark:bg-gray-900">
      {/* Header Section */}
      <LazySection className="py-12 md:py-16 bg-gradient-to-br from-sky-500 to-sky-600 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-block rounded-md bg-white/20 px-4 py-2 text-sm text-white font-medium mb-4">
              Resources
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              Parish Resources
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Access documents, forms, tender information, and browse our gallery of parish life and events.
            </p>
          </motion.div>
        </div>
      </LazySection>

      {/* Main Content with Tabs */}
      <LazySection className="py-12 md:py-16">
        <div className="container" id="resources-tabs">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-8 bg-gray-100 dark:bg-gray-800">
              <TabsTrigger
                value="downloads"
                className="data-[state=active]:bg-sky-500 data-[state=active]:text-white"
              >
                <Download className="h-4 w-4 mr-2" />
                Downloads
              </TabsTrigger>
              <TabsTrigger
                value="tenders"
                className="data-[state=active]:bg-sky-500 data-[state=active]:text-white"
              >
                <FileCheck className="h-4 w-4 mr-2" />
                Tenders
              </TabsTrigger>
              <TabsTrigger
                value="gallery"
                className="data-[state=active]:bg-sky-500 data-[state=active]:text-white"
              >
                <ImageIcon className="h-4 w-4 mr-2" />
                Gallery
              </TabsTrigger>
            </TabsList>

            {/* Downloads Tab */}
            <TabsContent value="downloads" className="mt-8" id="downloads">
              <div className="mb-8">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Downloads
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Access parish forms, documents, and bulletins for download.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {documents.map((doc, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-md bg-sky-50 dark:bg-sky-900/20 flex items-center justify-center flex-shrink-0">
                            <doc.icon className="h-6 w-6 text-sky-500 dark:text-sky-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                              {doc.title}
                            </CardTitle>
                            <div className="flex items-center gap-2 mt-2">
                              <span className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                                {doc.category}
                              </span>
                              <span className="text-xs text-gray-500 dark:text-gray-500">{doc.size}</span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                          {doc.description}
                        </CardDescription>
                        <Button
                          className="w-full bg-sky-500 hover:bg-sky-600 text-white"
                          onClick={() => {
                            // In a real implementation, this would download the actual file
                            alert(`Downloading ${doc.title}...`)
                          }}
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Tenders Tab */}
            <TabsContent value="tenders" className="mt-8" id="tenders">
              <div className="mb-8">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Tender Information
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  View current tender opportunities and procurement information.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {tenders.map((tender, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <span
                            className={`text-xs px-2 py-1 rounded font-medium ${
                              tender.status === "Open"
                                ? "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400"
                                : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                            }`}
                          >
                            {tender.status}
                          </span>
                          <span className="text-xs px-2 py-1 rounded bg-sky-50 dark:bg-sky-900/20 text-sky-500 dark:text-sky-400">
                            {tender.category}
                          </span>
                        </div>
                        <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                          {tender.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                          {tender.description}
                        </CardDescription>
                        <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 mb-4">
                          <Calendar className="h-4 w-4 text-sky-500 dark:text-sky-400" />
                          <span className="font-medium">Deadline:</span>
                          <span>{tender.deadline}</span>
                        </div>
                        <Button
                          variant="outline"
                          className="w-full border-sky-500 dark:border-sky-400 text-sky-500 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-900/20"
                          onClick={() => {
                            // In a real implementation, this would open tender details
                            alert(`Viewing tender details for ${tender.title}...`)
                          }}
                        >
                          <Info className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Tender Information Notice */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mt-12 bg-sky-50 dark:bg-sky-900/20 border border-sky-200 dark:border-sky-800 rounded-lg p-6"
              >
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  Tender Submission Guidelines
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-sky-500 flex-shrink-0"></span>
                    All tenders must be submitted before the specified deadline
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-sky-500 flex-shrink-0"></span>
                    Documents should be submitted in sealed envelopes marked with the tender reference
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-sky-500 flex-shrink-0"></span>
                    For inquiries, contact the Parish Office during office hours
                  </li>
                </ul>
              </motion.div>
            </TabsContent>

            {/* Gallery Tab */}
            <TabsContent value="gallery" className="mt-8" id="gallery">
              <div className="mb-8">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Photo Gallery
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Browse through photos of our parish life, events, and celebrations.
                </p>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={
                      selectedCategory === category
                        ? "bg-sky-500 hover:bg-sky-600 text-white"
                        : "border-gray-200 dark:border-gray-700"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>

              {/* Gallery Grid */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
                    onClick={() => setSelectedImage(index)}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="text-white text-center px-4">
                          <p className="text-sm font-medium">{image.category}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Image Modal */}
              {selectedImage !== null && (
                <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
                  <DialogContent className="max-w-4xl">
                    <DialogHeader>
                      <DialogTitle>{filteredImages[selectedImage]?.category}</DialogTitle>
                    </DialogHeader>
                    <div className="relative aspect-video mt-4">
                      <Image
                        src={filteredImages[selectedImage]?.src || "/placeholder.svg"}
                        alt={filteredImages[selectedImage]?.alt || ""}
                        fill
                        className="object-contain"
                        sizes="100vw"
                      />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 text-center">
                      {filteredImages[selectedImage]?.alt}
                    </p>
                  </DialogContent>
                </Dialog>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </LazySection>
    </div>
  )
}

