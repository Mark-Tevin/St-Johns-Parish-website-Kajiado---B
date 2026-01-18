"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Church } from "lucide-react"
import { motion } from "framer-motion"
import { LazySection } from "@/components/LazySection"

const outstationChurches = [
  "Kajiado",
  "Ilbissil",
  "KMQ",
  "E-WAUS",
  "Enkorika",
  "Olenarau",
  "Oloosuyian",
  "Enyornyor",
  "Kumpa",
  "Sajiloni",
  "Empiron",
  "E/kiwarie",
  "Naudot",
  "Enkoile",
  "Enkaroni",
  "Olpirikata",
  "Olooyinkalani",
  "Kikuro",
  "Torosei",
  "Olmotiany",
  "Kilonito",
]

export default function OutstationsPage() {
  return (
    <div className="min-h-screen bg-sky-50/30 dark:bg-gray-900">
      {/* Header Section */}
      <LazySection className="py-16 md:py-24 bg-gradient-to-br from-sky-500 to-sky-600 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-block rounded-md bg-white/20 px-4 py-2 text-sm text-white font-medium mb-4">
              Our Community
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              Outstation Churches
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              St. John's Parish Kajiado extends its ministry to {outstationChurches.length} outstation churches,
              serving communities across the region with faith, hope, and love.
            </p>
          </motion.div>
        </div>
      </LazySection>

      {/* Outstations Grid */}
      <LazySection className="py-12 md:py-16">
        <div className="container">
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {outstationChurches.map((church, index) => (
              <motion.div
                key={church}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
              >
                <Card className="group h-full bg-white dark:bg-gray-900 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-sky-300 dark:hover:border-sky-600 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-md bg-sky-50 dark:bg-sky-900/20 flex items-center justify-center group-hover:bg-sky-100 dark:group-hover:bg-sky-900/30 transition-colors duration-300">
                        <Church className="h-6 w-6 text-sky-500 dark:text-sky-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-serif text-lg font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                          {church}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Outstation Church</p>
                      </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
        </div>
      </LazySection>

      {/* Stats Section */}
      <LazySection className="py-12 md:py-16 bg-sky-100/50 dark:bg-gray-800">
        <div className="container">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-sky-100 dark:border-gray-700">
              <Church className="h-5 w-5 text-sky-500 dark:text-sky-400" />
              <span className="text-gray-900 dark:text-white font-semibold">
                <span className="text-2xl text-sky-500 dark:text-sky-400">{outstationChurches.length}</span>{" "}
                <span className="text-base font-normal text-gray-600 dark:text-gray-400">Outstation Churches</span>
              </span>
                  </div>
            </motion.div>
        </div>
      </LazySection>
    </div>
  )
}
