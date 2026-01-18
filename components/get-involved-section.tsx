"use client"

import { motion } from "framer-motion"
import { Users, Heart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const ministries = [
  {
    title: "Jumuiya Communities",
    description: "Join our Small Christian Communities for prayer, fellowship, and spiritual growth",
    icon: Users,
    color: "from-sky-500 to-sky-600",
  },
  {
    title: "Parish Choir",
    description: "Lift your voice in praise and enhance our liturgical celebrations through music",
    icon: Heart,
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Church Groups",
    description: "Engage with various ministry groups and make a difference in our community",
    icon: Users,
    color: "from-green-500 to-green-600",
  },
]

export default function GetInvolvedSection() {
  return (
    <section className="section bg-gradient-to-br from-sky-50/50 via-white to-sky-50/50 dark:from-sky-950/50 dark:via-transparent dark:to-sky-950/50 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-sky-800 dark:from-sky-400 dark:to-sky-600">
            Get Involved
          </h2>
          <p className="text-muted-foreground mb-12">Discover ways to serve and grow in our vibrant parish community</p>
        </motion.div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group relative overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                <CardHeader>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${ministry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />
                  <div className="relative z-10">
                    <div className="mb-4 rounded-full bg-sky-100 dark:bg-sky-900 p-3 w-12 h-12 flex items-center justify-center">
                      <ministry.icon
                        className={`h-6 w-6 bg-gradient-to-r ${ministry.color} text-transparent bg-clip-text`}
                      />
                    </div>
                    <CardTitle className="font-serif group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-300">
                      {ministry.title}
                    </CardTitle>
                    <CardDescription className="mt-2">{ministry.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="link"
                    className="p-0 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-300"
                  >
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel Layout */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {ministries.map((ministry, index) => (
                <CarouselItem key={index}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className="p-1"
                  >
                    <Card className="group relative overflow-hidden">
                      <CardHeader>
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${ministry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                        />
                        <div className="relative z-10">
                          <div className="mb-4 rounded-full bg-sky-100 dark:bg-sky-900 p-3 w-12 h-12 flex items-center justify-center">
                            <ministry.icon
                              className={`h-6 w-6 bg-gradient-to-r ${ministry.color} text-transparent bg-clip-text`}
                            />
                          </div>
                          <CardTitle className="font-serif group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-300">
                            {ministry.title}
                          </CardTitle>
                          <CardDescription className="mt-2">{ministry.description}</CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <Button
                          variant="link"
                          className="p-0 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-300"
                        >
                          Learn More →
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden sm:flex absolute -bottom-12 left-0 right-0 justify-center gap-2">
              <CarouselPrevious className="relative static" />
              <CarouselNext className="relative static" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
