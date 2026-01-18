"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { LazySection } from "@/components/LazySection"

const heroImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero.jpg-wVaeqPYR3ZJQycYLu4j5r7RSQjcQJx.jpeg",
    alt: "Bishop in red vestments with clergy and altar servers during a special celebration at St. John's Parish Kajiado",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero2.jpg-qyMykeHEoapQwO2cKXKvd8zqpSyP5K.jpeg",
    alt: "Clergy in white vestments at the dedication plaque of St. John's the Evangelist Church Kajiado",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/clearoutsidechurch.jpg-6Q3mC75eha7m50FDKuF9dYOxEWGgua.jpeg",
    alt: "Parish community gathered outside the church entrance under a festive balloon arch with the Bishop and clergy",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/outsidedoorchurch.jpg-BeWfJmKX4kbsCbjFxqfxwrYyLvRL6C.jpeg",
    alt: "Bishop, clergy, and altar servers gathered at the church entrance during a special celebration",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/outsidechurchbishop.jpg-z6llyIj1Y6TLS2FAFGz209fiNvAIcm.jpeg",
    alt: "Close-up of the Bishop with altar servers in red vestments during a liturgical celebration",
  },
]

export default function HomePage() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 200], [1, 0])
  const [isMounted, setIsMounted] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    // Auto-advance carousel
    const interval = setInterval(() => {
      nextImage()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextImage = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
      setTimeout(() => setIsTransitioning(false), 500)
    }
  }

  const prevImage = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)
      setTimeout(() => setIsTransitioning(false), 500)
    }
  }

  if (!isMounted) {
    return null
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden sm:h-[75vh] md:h-[85vh] lg:h-screen">
        <motion.div style={{ y, opacity }} className="relative h-full w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={heroImages[currentImageIndex].src || "/placeholder.svg"}
                alt={heroImages[currentImageIndex].alt}
                fill
                priority={currentImageIndex === 0}
                className="object-cover object-center"
                sizes="100vw"
                style={{ objectPosition: "center 20%" }} // This will show more of the top portion
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-sky-900/80 via-sky-900/40 to-sky-900/20 transition-colors duration-500">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="container flex h-full flex-col items-center justify-center text-center text-white"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="max-w-4xl font-serif text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl text-white"
              >
                Welcome to St. John's Catholic Church
                <motion.span
                  key={currentImageIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-4 text-white/90 font-normal"
                >
                  {currentImageIndex === 0 && "A Legacy of Faith Since Our Foundation"}
                  {currentImageIndex === 1 && "Blessed by His Lordship, the Bishop"}
                  {currentImageIndex === 2 && "Building Community Through Fellowship"}
                  {currentImageIndex === 3 && "Celebrating Sacred Traditions"}
                  {currentImageIndex === 4 && "Guided by Pastoral Care & Love"}
                </motion.span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-white/90"
              >
                Kajiado Parish in Ngong Diocese
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-8"
              >
                <Button
                  size="lg"
                  className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl"
                  asChild
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
          {/* Carousel Navigation */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-4">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={cn(
                  "h-2 w-2 rounded-full transition-all duration-300",
                  currentImageIndex === index ? "bg-sky-400 w-8" : "bg-white/50 hover:bg-white/75",
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          {/* Arrow Navigation */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-sky-500/20 p-2 text-white backdrop-blur-sm transition-all hover:bg-sky-500/40 focus:outline-none focus:ring-2 focus:ring-sky-400"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-sky-500/20 p-2 text-white backdrop-blur-sm transition-all hover:bg-sky-500/40 focus:outline-none focus:ring-2 focus:ring-sky-400"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </motion.div>
      </section>

      {/* Welcome Message Section */}
      <LazySection className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="inline-block rounded-md bg-sky-50 px-4 py-2 text-sm text-sky-500 font-medium shadow-sm">
                Welcome Message
              </div>
              <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 dark:text-white">
                A Message from Our Parish Priest
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  Dear brothers and sisters in Christ, welcome to St. John's Parish Kajiado. Our parish is a vibrant
                  Catholic community dedicated to spreading the Gospel and serving God's people.
                </p>
                <p>
                  Whether you're a long-time parishioner or new to our community, we invite you to join us in worship,
                  fellowship, and service. Here, you'll find a spiritual home where faith grows and community thrives.
                </p>
              </div>
              <Button
                variant="outline"
                className="group relative overflow-hidden rounded-md px-6 py-2 text-sky-500 dark:text-sky-400 border-sky-500 dark:border-sky-400 hover:bg-sky-50 dark:hover:bg-sky-900/20"
                asChild
              >
                <Link href="/parish-office#parish-priest-message">
                  <span className="relative z-10">Read More</span>
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-[400px] overflow-hidden rounded-xl shadow-lg"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/clergyandbishop.jpg-hfQJ3LHcJBzrV22s4Ds2hRmfJnbi6c.jpeg"
                alt="Fr. Patrick Nkaai (on the left) with the Bishop and fellow clergy member in red and gold vestments during a special celebration"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                style={{ objectPosition: "center 15%" }} // Show more of the top to capture the bishop's cap
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/40"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-serif text-xl font-semibold">
                  Fr. Patrick Nkaai <span className="text-sm font-normal">(on the left)</span>
                </h3>
                <p className="text-sm text-white/80">
                  Parish Priest, pictured with Bishop during a special celebration
                </p>
              </div>
              <div className="absolute top-4 left-4 px-3 py-1.5 bg-sky-500/70 backdrop-blur-sm rounded-full">
                <span className="text-xs font-medium text-white">Parish Priest</span>
              </div>
            </motion.div>
          </div>
        </div>
      </LazySection>

      {/* About Us Snippet Section */}
      <LazySection className="py-12 md:py-16 bg-sky-50/50 dark:bg-gray-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-block rounded-md bg-white px-4 py-2 text-sm text-sky-500 font-medium mb-4 shadow-sm">
              Our Parish Community
            </div>
            <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 dark:text-white mb-4">
              Discover St. John's Parish Kajiado
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              More than just a place of worship, St. John's Parish is a thriving Catholic community that encompasses
              spiritual growth, education, and service to others through our various institutions and programs.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <Card className="h-full bg-white dark:bg-gray-900 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-md bg-sky-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Our Parish History
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    Discover the rich heritage of St. John's Parish, from our founding to our growth as a cornerstone of
                    faith in the Kajiado community.
                  </p>
                  <Link
                    href="/about#history"
                    className="inline-flex items-center text-sky-500 dark:text-sky-400 text-sm font-medium hover:underline group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Learn our story
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group"
            >
              <Card className="h-full bg-white dark:bg-gray-900 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-md bg-sky-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Our Schools
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    Explore our Catholic schools and educational institutions that provide quality education rooted in
                    Christian values and academic excellence.
                  </p>
                  <Link
                    href="/legacy-of-service#schools"
                    className="inline-flex items-center text-sky-500 dark:text-sky-400 text-sm font-medium hover:underline group-hover:translate-x-1 transition-transform duration-300"
                  >
                    View our schools
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group"
            >
              <Card className="h-full bg-white dark:bg-gray-900 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-md bg-sky-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Parish Programs
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    Discover our various parish programs and ministries designed to strengthen faith, build community,
                    and serve others through spiritual and social initiatives.
                  </p>
                  <Link
                    href="/programs"
                    className="inline-flex items-center text-sky-500 dark:text-sky-400 text-sm font-medium hover:underline group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Explore programs
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-md shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link href="/about">Discover Our Complete Story</Link>
            </Button>
          </motion.div>
        </div>
      </LazySection>

      {/* Worship & Visit Information */}
      <LazySection className="section py-6 sm:py-8 md:py-12 px-4 sm:px-6 md:px-8">
        <div className="container max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="font-serif text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Join Us for Worship</h2>
            <p className="text-gray-600 dark:text-gray-400">Mass times and directions to our parish</p>
          </motion.div>

          <motion.div
            className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="group h-full bg-white dark:bg-gray-900 transition-all duration-300 hover:shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                <CardContent className="flex flex-col p-4 sm:p-6">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="p-2 rounded-md bg-sky-50 dark:bg-sky-900/20"
                    >
                      <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-sky-500 dark:text-sky-400" />
                    </motion.div>
                    <div>
                      <h3 className="font-serif text-base sm:text-lg font-semibold">Mass Times</h3>
                    </div>
                  </div>
                  <div className="mt-2 space-y-3 pl-4 sm:pl-12">
                    <div className="transform transition-all duration-300 hover:translate-x-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Weekdays & Saturday:</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">6:45 AM</p>
                    </div>
                    <div className="transform transition-all duration-300 hover:translate-x-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Sunday:</p>
                      <div className="grid grid-cols-1 gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <div className="touch-manipulation active:bg-sky-50 dark:active:bg-sky-900/20 rounded-lg p-2 transition-colors">
                          <span className="font-medium">1st Mass:</span> 6:30 AM
                        </div>
                        <div className="touch-manipulation active:bg-sky-50 dark:active:bg-sky-900/20 rounded-lg p-2 transition-colors">
                          <span className="font-medium">2nd Mass:</span> 8:00 AM
                        </div>
                        <div className="touch-manipulation active:bg-sky-50 dark:active:bg-sky-900/20 rounded-lg p-2 transition-colors">
                          <span className="font-medium">3rd Mass:</span> 10:00 AM
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="group h-full bg-white dark:bg-gray-900 transition-all duration-300 hover:shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                <Link href="/contact" className="block h-full">
                  <CardContent className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6">
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="p-2 rounded-md bg-sky-50 dark:bg-sky-900/20"
                    >
                      <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-sky-500 dark:text-sky-400" />
                    </motion.div>
                    <div className="flex-1 transform transition-all duration-300 group-hover:translate-x-1 group-active:translate-x-0">
                      <h3 className="font-serif text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Find Us
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Directions & Contact Information</p>
                      <div className="inline-flex items-center mt-2 text-xs text-sky-500 dark:text-sky-400 group-hover:underline">
                        <span>View map and get directions</span>
                        <svg
                          className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </LazySection>
    </>
  )
}
