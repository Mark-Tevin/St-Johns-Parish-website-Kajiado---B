"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Heart, Expand, Facebook, Instagram, Twitter, Youtube, MessageCircle } from "lucide-react"
import Image from "next/image"
import { Star, Shield, Scale, Trophy, Leaf, Users } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Clock, MapPin, Mail } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import useEmblaCarousel from "embla-carousel-react"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250225-WA0031.jpg-Yh0uFIkLGWgWKop00ly3H4xBVa39yy.jpeg",
    alt: "clergy members in white vestments sharing a moment of fellowship",
    category: "Clergy",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250225-WA0030.jpg-1SLiCl04wjbl9zqhYsggIsKJ39pdTe.jpeg",
    alt: "Bishop saying a prayer during consecration of the church ceremony, with a priest holding a blue booklet and another holding a microphone",
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
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250225-WA0040.jpg-mw28x801OLJEgtX5VB6wC2p28orKpN.jpeg",
    alt: "Bishop and clergy during an interview or recording session",
    category: "Parish Life",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pmc.jpg-O1XYQU2dXoZ6KdNM5ZsWfHJCFYRPoW.jpeg",
    alt: "PMC children performing liturgical dance during Mass",
    category: "PMC",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250225-WA0034.jpg-cVTVnywo9TPi0bE3jffBderTaQMm0w.jpeg",
    alt: "Church entrance decorated with balloons as parishioners gather",
    category: "Church Events",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pmcinchurch.jpg-JvAskW6UsqWIVi1KI7Rj2ZgVyF3CdE.jpeg",
    alt: "PMC children participating in Mass service",
    category: "PMC",
  },
]

export default function AboutPage() {
  const timelineEvents = [
    {
      period: "1918-1960",
      title: "The Pioneer Years",
      description:
        "Our story begins along the dusty railway line in 1918, when Holy Ghost Father Julius Blais CSSp made the arduous journey from St. Peter Claver's in Nairobi. With unwavering dedication, Fr. Blais traveled by train to scattered communities—Kima, Kajiado, Magadi, Ulu, and Sultan Hamud—bringing the sacraments to Catholics working on the railway.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250225-WA0029.jpg-pMpLRsGq1IssZuWIrjcWzFNrPvfQ7O.jpeg",
      imageAlt:
        "Bishop in white vestments celebrating Mass at the altar with other clergy members, representing the early missionary work",
      details: [
        "Fr. Blais' parish extended from Thika and Kilimambogo through all of Kajiado District to Machakos and Kitui",
        "The next mission to the east was Bura, a staggering 300 kilometers away",
        "Early visits were infrequent and incredibly challenging, yet they planted the seeds of faith",
        "Station by station, wherever Catholics gathered, Mass was celebrated",
        "By 1960, pastoral care came from Kiserian under the Prefecture of Ngong",
        "Fr. John Njenga (later Bishop of Eldoret and Archbishop of Mombasa) began visiting every two or three months",
      ],
    },
    {
      period: "1960-1967",
      title: "A Parish Takes Root",
      description:
        "In 1960, Fr. Njenga accompanied a visiting priest to celebrate what would become the first of many regular Masses in Kajiado. They arrived on a Sunday evening at the Railway workers' community hall. The scene was humble: they waited at 5 p.m. for workers who were drinking and smoking to clear out. Yet when Mass began, twenty to thirty faithful gathered—railway workers, Goan families from the Administration, and police families.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250225-WA0035.jpg-dJpp0BNDVOBIHcDUEcbfOO1tsnQmqz.jpeg",
      imageAlt: "Clergy blessing the church doors, symbolizing the early development of the parish",
      details: [
        "After Mass, priests found hospitality with Dr. Migwi, the Catholic doctor at Kajiado District Hospital",
        "6 a.m. Mass at Kenya Marble Quarries, 12 kilometers from town, became a regular feature",
        "Mr. Alan Chadwick, the quarries manager, showed extraordinary hospitality for years",
        "In 1962, our first school opened with a classroom and office fully funded by the Diocese",
        "Mr. Peter P. Ndungu became our first teacher, transferred from Ngong Township School",
        "Monthly visits followed a pattern that built relationships as much as infrastructure",
        "The colonial administration initially provided only 3 acres for the primary school and one acre for the mission",
      ],
    },
    {
      period: "1968-1976",
      title: "The Parish Establishes Its Home",
      description:
        "Everything changed when Fr. Daniel O'Connell MHM arrived around 1967-68. Initially assigned to Kiserian with plans to work 'long weekends' in Kajiado, those weekends merged into one another until he was 'lost' in Kajiado—found by the community he would serve so faithfully. Fr. O'Connell began in a safari house: a simple 22ft x 22ft structure with a bedroom, dining/sitting room, kitchen, and outside toilet.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250225-WA0032.jpg-tu7x8AbBdvrdWrg1zdLdr6r6Th1N40.jpeg",
      imageAlt: "Bishop blessing a Station of the Cross during the church's development phase",
      details: [
        "On June 1, 1970, Fr. O'Connell secured 2.2 hectares (5.46 acres) on a 33-year lease",
        "Working with Brother Jan Huitbraken MHM, he built an oratory for weekday worship",
        "By 1976, Catholic population had grown to 1,000 (reaching 4,000 by 2003)",
        "Mass centers dotted the landscape: Township (120-200 weekly), Namanga (20), Kenya Marble Quarries (12)",
        "The community hall served as our church on Sundays, regularly filling its 400-person capacity",
        "Fr. O'Connell became especially beloved at Olkejuado Secondary School where he coached basketball",
      ],
    },
    {
      period: "1968-2003",
      title: "Servants of the Gospel: Our Priests",
      description:
        "From 1968 to 2003, dedicated priests shepherded our community through growth and challenge. Each priest contributed uniquely to our parish's development, despite frequent changes due to priests leaving ministry, missionary society reassignments, or advanced studies.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250225-WA0033.jpg-8QGQsakR1qox5gAWHMhb6DJhd4G0MN.jpeg",
      imageAlt: "Bishop and priest mounting a cross on the church wall during dedication ceremonies",
      details: [
        "The Foundations (1968-1980): Fr. D. O'Connell, Fr. W. Meys, Fr. T. Brouder, Fr. M. O'Neill, Fr. J.D. Cronin, Fr. A. Vernner, Fr. J. Heaney, Fr. R. Hogan, Fr. F. Mol, Fr. A. Wolf",
        "Building and Growth (1980-1994): Fr. A. Shayo, Fr. J. Van Dyk, Fr. M. Smyth, Fr. P. Coyne, Fr. R. Hogan, Fr. G. Geraghty, Fr. R. Tarimo, Fr. D. Waweru, Fr. I. Munishi, Fr. E. Tarimo",
        "Completion and Consolidation (1994-2003): Fr. C. Geraghty, Fr. Joseph Y, Fr. S. Breem, Fr. D. Ganley",
        "In October 1987, Fr. Edmund Tarimo became our first Diocesan Youth Chaplain",
        "Each priest left their mark on the parish, building upon the foundations laid by their predecessors",
      ],
    },
    {
      period: "1990-2003",
      title: "Our Beautiful Church: A Dream Realized",
      description:
        "The crowning achievement of our parish is the church building itself—widely regarded as the most beautiful church in the diocese. This magnificent structure rose through dedication, sacrifice, and the collaborative efforts of many priests over more than a decade. Fr. Brouder excavated the foundations, Fr. Shayo (1990) completed the foundation and erected the steel structure. Then, bit by bit, through years of financial struggle and unwavering determination, successive priests advanced the work.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250225-WA0030.jpg-1SLiCl04wjbl9zqhYsggIsKJ39pdTe.jpeg",
      imageAlt: "Bishop during consecration ceremony of the church, with priests holding liturgical items",
      details: [
        "Fr. C. Geraghty brought the vision to completion in 2003",
        "The church is both beautiful and functional, seating approximately 900 worshippers",
        "The landscaping transformed the entire compound into an attractive sanctuary",
        "Fr. Geraghty solved persistent water shortage by constructing massive tanks fed from the building's extensive roofing",
        "Bishop Colin Davies arranged a twinning with St. Cecilia Church in Germany for financial support",
        "Fr. Zucco, a Comboni missionary, designed the church and oversaw construction",
        "The church was officially opened on July 12, 1992",
      ],
    },
    {
      period: "1971-Present",
      title: "Silent Witnesses: The Little Sisters of Jesus",
      description:
        "In 1971, a profound spiritual presence arrived in Kajiado. The Little Sisters of Jesus established their House of Prayer on a plot granted by the County Council at the township's edge, with distant views of Kilimanjaro. Living their charism of the Holy Family in Nazareth, the Little Sisters became neighbors and friends to the poor and unevangelized.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/treeplantingactivity.jpg-uQZSQ0OIhcJwohyZ7RO6NgMrwHReI5.jpeg",
      imageAlt: "Bishop and community members participating in a tree planting activity",
      details: [
        "They don't evangelize through programs but through presence, allowing Christ's love to flow through ordinary acts",
        "Their House of Prayer has welcomed countless priests, religious, and bishops for silent retreats",
        "Two Sisters lived in a Maasai boma for over 25 years, building a simple hut like their neighbors",
        "They embraced the spartan life of Maasai women—fetching water and firewood, tending livestock, enduring sun and drought",
        "Through lived witness, the Little Sisters led the Maasai to believe in the Real Presence of Christ in the Eucharist",
        "The Maasai concluded: these women were daughters of God who had chosen not to marry, and God was truly present in the Blessed Sacrament",
      ],
    },
    {
      period: "1992-Present",
      title: "Our Outstations: Faith Across the Landscape",
      description:
        "The Isinya outstation began with an unexpected phone call. Vice President Professor George Saitoti offered a 2-acre plot on the main Nairobi-Arusha road, 22 kilometers north of Kajiado, on one condition: the Diocese must build immediately. The church of St. Cecilia in Germany 'twinned' with Isinya, solving most financial challenges.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bishopoutsidechurchgate.jpg-sSHRKDsJPto1tAsUkvgCJFyXLLY78f.jpeg",
      imageAlt: "Bishop in red vestments blessing and interacting with children after Mass",
      details: [
        "On July 12, 1992, Isinya church was officially opened and blessed",
        "During school terms, 150-200 students from Arap Moi Girls Secondary Boarding School attend Mass",
        "Namanga began as our outstation but grew into an important parish",
        "Bissil ('Our Lady of the Way'), 24 kilometers south, has a well-built 300-seat church",
        "Enkorika, dating to the 1960s and located 30 kilometers east toward Mashuru, hosts a Catholic-sponsored school",
        "Other outstations include Elangata Wuas, Olenarao, Sajiloni, Nkoile, Kilonito, and Maili Tisa",
        "Fr. Mol envisioned a Maasai cultural center to preserve archives, literature, artifacts, and samples",
      ],
    },
    {
      period: "Present Day",
      title: "Today and Tomorrow",
      description:
        "We have journeyed from a priest waiting for railway workers to leave a smoke-filled hall in 1960, to a thriving parish with a magnificent church, active lay community, numerous programs, and multiple outstations. St. John the Evangelist Parish has grown into a vibrant faith community with 57 Small Christian Communities (SCCs) strengthening unity and deepening faith.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/priestand%20bishop.jpg-eHeZAc0Rf1iWsHy5gRvqFtxJKeSima.jpeg",
      imageAlt:
        "Three clergy members in red vestments during a special celebration, representing the current vibrant parish life",
      details: [
        "57 Small Christian Communities strengthen unity and deepen faith",
        "Increasing number of Baptisms and Matrimonies",
        "Five trained catechists and ten volunteers ensure continuous faith formation",
        "Outreach expanded to 21 outstations, supported by motorbikes",
        "Self-reliance through income-generating projects and a self-sustaining primary school",
        "Our latest initiative—a Parochial Primary School—responds to parents' desire for excellent Catholic education",
        "As District Headquarters, Kajiado holds strategic importance, and our Church's presence is valued",
        "United with active, forward-looking clergy and supported by dedicated laity, we continue to grow",
      ],
    },
  ]

  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setSelectedImage(emblaApi.selectedScrollSnap())
      })
    }
  }, [emblaApi])

  // Social Media Rotator Component
  const socialMediaItems = [
    { name: "Facebook", Icon: Facebook, href: "#", color: "text-sky-400" },
    { name: "Instagram", Icon: Instagram, href: "#", color: "text-pink-400" },
    { name: "Twitter", Icon: Twitter, href: "#", color: "text-sky-300" },
    { name: "YouTube", Icon: Youtube, href: "#", color: "text-red-400" },
    { name: "WhatsApp", Icon: MessageCircle, href: "#", color: "text-green-400" },
  ]

  const [currentSocialIndex, setCurrentSocialIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSocialIndex((prev) => (prev + 1) % socialMediaItems.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [socialMediaItems.length])

  const SocialMediaRotator = () => (
    <div className="flex items-center justify-center gap-3 mt-1.5">
      <AnimatePresence mode="wait">
        <motion.a
          key={currentSocialIndex}
          href={socialMediaItems[currentSocialIndex].href}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 ${socialMediaItems[currentSocialIndex].color} cursor-pointer`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all">
            {(() => {
              const IconComponent = socialMediaItems[currentSocialIndex].Icon
              return <IconComponent className="h-3.5 w-3.5" />
            })()}
          </div>
          <span className="text-xs font-medium">{socialMediaItems[currentSocialIndex].name}</span>
        </motion.a>
      </AnimatePresence>
      <div className="flex gap-1 ml-2">
        {socialMediaItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSocialIndex(index)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              currentSocialIndex === index ? "bg-white" : "bg-white/30"
            }`}
            />
          ))}
        </div>
    </div>
  )

  return (
    <div className="min-h-screen">
      {/* Split Header & Story Introduction Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-500 to-sky-600 text-white py-12 lg:py-20" id="history">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-block rounded bg-white/20 px-3 py-1 text-sm text-white font-medium mb-4">
                Our Complete Story
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
                A Century of Faith <br />
                <span className="text-sky-100 text-2xl sm:text-3xl md:text-4xl block mt-2 font-sans font-medium">in Kajiado Catholic Parish</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
                From humble beginnings along the dusty railway line in 1918 to a vibrant faith community today, 
                discover the remarkable journey of St. John the Evangelist Parish.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 flex-1 w-full">
                  <p className="text-xs uppercase tracking-wider text-sky-100 font-bold mb-2">Connect With Us</p>
                  <SocialMediaRotator />
                </div>
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">1918</div>
                    <div className="text-xs text-sky-100 font-medium">FOUNDED</div>
                  </div>
                  <div className="w-px h-10 bg-white/30 self-center"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">21</div>
                    <div className="text-xs text-sky-100 font-medium">STATIONS</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250225-WA0030.jpg-1SLiCl04wjbl9zqhYsggIsKJ39pdTe.jpeg"
                alt="Consecration of St. John's Parish"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-sm font-medium drop-shadow-md italic">
                  "History is the memory of things said and done."
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"></div>
      </section>

      {/* Main Narrative Content Section */}
      <section className="py-12 md:py-20 bg-white dark:bg-gray-900" id="narrative">
        <div className="container px-3 sm:px-4 md:px-6">
          <div className="mx-auto max-w-5xl">
            {/* Narrative Content */}
            <div className="space-y-12">
              {/* The Pioneer Years */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 sm:p-8 border-l-4 border-sky-500"
              >
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="text-sky-500">1918-1960:</span> The Pioneer Years
                </h3>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                  <p>
                    Our story begins along the dusty railway line in{" "}
                    <strong className="text-sky-500 dark:text-sky-400">1918</strong>, when Holy Ghost Father Julius
                    Blais CSSp made the arduous journey from St. Peter Claver&apos;s in Nairobi. With unwavering
                    dedication, Fr. Blais traveled by train to scattered communities—Kima, Kajiado, Magadi, Ulu, and
                    Sultan Hamud—bringing the sacraments to Catholics working on the railway.
                  </p>
                  <p>
                    His parish extended across vast distances: from Thika and Kilimambogo through all of Kajiado
                    District to Machakos and Kitui. The next mission to the east was Bura, a staggering 300 kilometers
                    away. These early visits were infrequent and incredibly challenging, yet they planted the seeds of
                    faith in our community. Station by station, wherever Catholics gathered, Mass was celebrated. This
                    was true apostolic work in the most demanding conditions.
                  </p>
                  <p>
                    In the following decades, priests from Mbitini also reached our area, with baptisms recorded in
                    their registers. By 1960, under the Prefecture of Ngong, pastoral care came from Kiserian. When
                    Kiserian Minor Seminary was established around 1956, a young Fr. John Njenga—who would later become
                    Bishop of Eldoret and Archbishop of Mombasa—began visiting every two or three months.
                  </p>
                </div>
            </motion.div>

              {/* A Parish Takes Root */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 sm:p-8 border-l-4 border-green-600"
              >
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="text-green-600">1960-1967:</span> A Parish Takes Root
                </h3>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                  <h4 className="font-semibold text-xl text-gray-900 dark:text-white mt-6 mb-3">The First Mass</h4>
                  <p>
                    In 1960, Fr. Njenga accompanied a visiting priest to celebrate what would become the first of many
                    regular Masses in Kajiado. They arrived on a Sunday evening at the Railway workers&apos; community
                    hall. The scene was humble: they waited at 5 p.m. for workers who were drinking and smoking to
                    clear out, the smell of drink and tobacco overpowering. Yet when Mass began, twenty to thirty
                    faithful gathered—railway workers, Goan families from the Administration, and police families.
                  </p>
                  <p>
                    After Mass, the priests found hospitality with Dr. Migwi, the Catholic doctor in charge of Kajiado
                    District Hospital. He, his wife, and their three young daughters welcomed the priests with warmth
                    that embodied the spirit of Christian fellowship.
                  </p>

                  <h4 className="font-semibold text-xl text-gray-900 dark:text-white mt-6 mb-3">
                    Kenya Marble Quarries: An Unexpected Sanctuary
                  </h4>
                  <p>
                    The next morning brought a 6 a.m. Mass at Kenya Marble Quarries, 12 kilometers from town. Workers
                    gathered in their small recreation hall before the 7 o&apos;clock shift. The manager, Mr. Alan
                    Chadwick, though not Catholic himself, showed extraordinary hospitality that would continue for
                    years. When Dr. Migwi later left Kajiado, Mr. Chadwick opened his home to visiting priests,
                    providing showers, meals, and a good night&apos;s rest—a kindness that became legendary in the
                    parish&apos;s early years.
                  </p>

                  <h4 className="font-semibold text-xl text-gray-900 dark:text-white mt-6 mb-3">
                    Building More Than Buildings
                  </h4>
                  <p>
                    These monthly visits followed a pattern that built relationships as much as infrastructure. After
                    the early morning Mass at the quarries and breakfast with Mr. Chadwick, the priest would head to
                    the Government Primary Boarding School. There, the headmaster allowed religious instruction—initially
                    to just three Catholic students.
                  </p>
                  <p>
                    Visits to the District Education Officer followed, where matters concerning Catholic-managed
                    schools at Ngong, Kiserian, Magadi, Kajiado Township, and Rombo were discussed. Courtesy calls to
                    the District Commissioner were essential in this closed district where passes were required. These
                    weren&apos;t merely obligatory—they were friendly, &quot;very English&quot; affairs (&quot;Padre,
                    jolly good show!&quot;) that proved invaluable when addressing land or educational challenges.
                  </p>

                  <h4 className="font-semibold text-xl text-gray-900 dark:text-white mt-6 mb-3">First Foundations</h4>
                  <p>
                    In <strong className="text-green-600 dark:text-green-400">1962</strong>, our first school opened. A
                    local contractor built a classroom and office, fully funded by the Diocese. Mr. Peter P. Ndungu
                    became our first teacher, transferred from Ngong Township School. That small beginning grew into a
                    three-stream school serving over a thousand students.
                  </p>
                  <p>
                    Land acquisition proved challenging. The colonial administration resisted granting land in
                    townships, initially providing only 3 acres for the primary school and one acre for the mission. It
                    would take vision and persistence to secure our future home.
                  </p>
          </div>
              </motion.div>

              {/* The Parish Establishes Its Home */}
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 sm:p-8 border-l-4 border-purple-600"
              >
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="text-purple-600">1968-1976:</span> The Parish Establishes Its Home
                </h3>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                  <h4 className="font-semibold text-xl text-gray-900 dark:text-white mt-6 mb-3">
                    Fr. O&apos;Connell: The First Resident Priest
                  </h4>
                  <p>
                    Everything changed when{" "}
                    <strong className="text-purple-600 dark:text-purple-400">Fr. Daniel O&apos;Connell MHM</strong>{" "}
                    arrived around 1967-68. Initially assigned to Kiserian with plans to work &quot;long weekends&quot;
                    in Kajiado, those weekends merged into one another until he was, as the chronicle notes,
                    &quot;lost&quot; in Kajiado—found by the community he would serve so faithfully.
                  </p>
                  <p>
                    Fr. O&apos;Connell began in a safari house he had built for weekend visits: a simple 22ft x 22ft
                    structure with a bedroom, dining/sitting room, kitchen, and outside toilet. From this humble
                    beginning, he cared for Kajiado and many outstations, becoming especially beloved at Olkejuado
                    Secondary School where he coached basketball and helped the school climb the league tables.
                  </p>

                  <h4 className="font-semibold text-xl text-gray-900 dark:text-white mt-6 mb-3">Securing Our Future</h4>
                  <p>
                    Recognizing that a thriving parish needed more space, Fr. O&apos;Connell applied for additional
                    land. On <strong className="text-purple-600 dark:text-purple-400">June 1, 1970</strong>, he secured
                    2.2 hectares (5.46 acres) on a 33-year lease—the ground where our parish would truly flourish.
                    Working with Brother Jan Huitbraken MHM, he built an oratory that became the spiritual heart of
                    weekday worship, a place where daily Mass could be celebrated and the Blessed Sacrament reserved in
                    dignity.
                  </p>

                  <h4 className="font-semibold text-xl text-gray-900 dark:text-white mt-6 mb-3">Remarkable Growth</h4>
                  <p>
                    By 1976, the transformation was evident. Our Catholic population had grown to 1,000 (reaching 4,000
                    by 2003), with 200 practicing Catholics (2,000 by 2003). Mass centers dotted the landscape: the
                    Township drew 120-200 weekly, Namanga 20, Kenya Marble Quarries 12, and Maili Tisa 10. Kitengela,
                    with no attendees in 1976, would explode to 3,750 by 2003.
                  </p>
                  <p>
                    The community hall served as our church on Sundays, regularly filling its 400-person capacity. It
                    also generated income through rentals for political meetings, wedding receptions, and important
                    government gatherings—the best-equipped hall in town.
                  </p>
                      </div>
              </motion.div>

              {/* Our Beautiful Church */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 sm:p-8 border-l-4 border-amber-600"
              >
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="text-amber-600">1990-2003:</span> Our Beautiful Church: A Dream Realized
                </h3>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                  <p>
                    The crowning achievement of our parish is the church building itself—widely regarded as{" "}
                    <strong className="text-amber-600 dark:text-amber-400">the most beautiful church in the diocese</strong>.
                    This magnificent structure rose through dedication, sacrifice, and the collaborative efforts of
                    many priests over more than a decade.
                  </p>
                  <p>
                    Fr. Brouder excavated the foundations, literally breaking ground for the dream. Fr. Shayo (1990)
                    completed the foundation and erected the steel structure. Then, bit by bit, through years of
                    financial struggle and unwavering determination, successive priests advanced the work.
                  </p>
                  <p>
                    Fr. C. Geraghty brought the vision to completion in 2003. With exceptional taste, he finished a
                    church that is both beautiful and functional, seating approximately 900 worshippers. The
                    landscaping transformed the entire compound into an attractive sanctuary. Fr. Geraghty also solved
                    our persistent water shortage by constructing massive tanks fed from the building&apos;s extensive
                    roofing—turning a problem into providence.
                  </p>
                  <p>
                    When the church opened, it fulfilled years of longing. The community hall, faithful servant of our
                    Sunday worship for so many years, could return to its role as gathering space and income generator
                    for the parish.
                  </p>
                    </div>
              </motion.div>

              {/* Little Sisters of Jesus */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 sm:p-8 border-l-4 border-rose-600"
              >
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="text-rose-600">1971-Present:</span> Silent Witnesses: The Little Sisters of Jesus
                </h3>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                  <p>
                    In 1971, a profound spiritual presence arrived in Kajiado. The Little Sisters of Jesus established
                    their House of Prayer on a plot granted by the County Council at the township&apos;s edge, with
                    distant views of Kilimanjaro. Once isolated, the location is now surrounded by urban growth—a
                    metaphor for their quiet, transformative influence.
                  </p>
                  <p>
                    Living their charism of the Holy Family in Nazareth, the Little Sisters became neighbors and
                    friends to the poor and unevangelized. They don&apos;t evangelize through programs but through
                    presence, allowing Christ&apos;s love to flow through ordinary acts of friendship and service. Their
                    House of Prayer has welcomed countless priests, religious, and bishops for silent retreats.
                  </p>

                  <h4 className="font-semibold text-xl text-gray-900 dark:text-white mt-6 mb-3">Among the Maasai</h4>
                  <p>
                    Perhaps their most remarkable witness was the decision by two Sisters to live in a Maasai boma for
                    over 25 years. They built a simple hut like their neighbors and embraced the spartan life of Maasai
                    women—fetching water and firewood, tending livestock, enduring sun and drought, sharing joys and
                    sorrows.
                  </p>
                  <p>
                    The Maasai women were initially puzzled by these unmarried women without children who spent hours
                    in prayer before a small box in their hut. Gradually, understanding emerged. The Maasai reached two
                    profound conclusions: these women were daughters of God who had chosen not to marry, and God was
                    truly present in that &quot;little Box&quot;—the Blessed Sacrament. Through lived witness rather
                    than words, the Little Sisters led the Maasai to believe in the Real Presence of Christ in the
                    Eucharist.
                  </p>
                          </div>
              </motion.div>

              {/* Today and Tomorrow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-sky-500 to-sky-700 rounded-xl shadow-2xl p-6 sm:p-8 text-white"
              >
                <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-4">Today and Tomorrow</h3>
                <div className="space-y-4 leading-relaxed text-base sm:text-lg">
                  <p>
                    As District Headquarters, Kajiado holds strategic importance. Our Church&apos;s presence is valued by
                    both the Administration and County Council, contributing significantly to the town&apos;s character
                    and development.
                  </p>
                  <p>
                    We have journeyed from a priest waiting for railway workers to leave a smoke-filled hall in 1960,
                    to a thriving parish with a magnificent church, active lay community, numerous programs, and ten
                    outstations. Our latest initiative—a Parochial Primary School—responds to parents&apos; desire for
                    excellent Catholic education for their children.
                  </p>
                  <p>
                    The road has been long, sometimes difficult. We&apos;ve experienced frequent changes in pastoral
                    leadership, financial struggles, and the normal challenges of any growing community. Yet through it
                    all, the faith planted in 1918 has blossomed into something beautiful.
                  </p>
                  <p className="text-xl font-semibold mt-6 pt-6 border-t border-white/30">
                    United with active, forward-looking clergy and supported by dedicated laity, Kajiado Catholic
                    Parish stands as a testament to what faith, perseverance, and community can accomplish. Our story
                    continues, written each day by every person who gathers for worship, serves their neighbor, and
                    carries Christ&apos;s love into the world.
                  </p>
                </div>
              </motion.div>

              {/* Attribution */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center pt-8"
              >
                <p className="text-sm italic text-gray-600 dark:text-gray-400">
                  History narrated in &apos;Mission to the Maasai&apos; by the Late Bishop Colin Davies, MHM
                </p>
              </motion.div>
                                </div>
                    </div>
                  </div>
      </section>

      {/* History Timeline Cards */}
      <section className="py-8 sm:py-12 md:py-16 bg-white dark:bg-gray-900" id="timeline">
        <div className="container px-3 sm:px-4 md:px-6">
          {/* Enhanced Header Section */}
          <div className="mx-auto max-w-4xl text-center mb-8 sm:mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-block rounded-md bg-sky-50 dark:bg-sky-900/20 px-4 py-2 text-sm text-sky-500 dark:text-sky-400 font-medium mb-4">
                Our Story
            </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6 text-gray-900 dark:text-white">
                Key Moments in Our Journey
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-6 leading-relaxed max-w-3xl mx-auto px-2">
                A timeline of major milestones from our early missionary beginnings to the vibrant parish community we are today.
              </p>
              {/* Key Milestones Summary */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 max-w-3xl mx-auto">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <div className="text-2xl sm:text-3xl font-bold text-sky-500 dark:text-sky-400">1960</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">First Mass</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <div className="text-2xl sm:text-3xl font-bold text-sky-500 dark:text-sky-400">1972</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">First Resident Priest</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <div className="text-2xl sm:text-3xl font-bold text-sky-500 dark:text-sky-400">1992</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">Church Dedication</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <div className="text-2xl sm:text-3xl font-bold text-sky-500 dark:text-sky-400">21</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">Outstations</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Timeline Cards - Alternating Layout */}
          <div className="mx-auto max-w-6xl">
            <div className="relative">
              {/* Center/Side connector line */}
              <div className="pointer-events-none absolute left-4 sm:left-5 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />

              <div className="space-y-10">
                {timelineEvents.map((event, index) => {
                  const isLeft = index % 2 === 0

                  return (
                    <motion.div
                    key={index}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.25) }}
                      viewport={{ once: true, margin: "-120px" }}
                      className="relative"
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-4 sm:left-5 md:left-1/2 top-8 -translate-x-1/2">
                        <div className="h-4 w-4 rounded-full bg-sky-500 ring-4 ring-sky-50 dark:ring-sky-900/20 shadow" />
            </div>

                      <div className={`flex flex-col md:flex-row ${isLeft ? "md:justify-start" : "md:justify-end"}`}>
                        <div
                          className={`w-full md:w-[calc(50%-2.5rem)] pl-10 sm:pl-12 md:pl-0 ${
                            isLeft ? "md:pr-10" : "md:pl-10"
                          }`}
                        >
                          <Card className="overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 group">
                            <div className="relative h-48 sm:h-56">
                    <Image
                                src={event.image || "/placeholder.svg"}
                                alt={event.imageAlt || event.title}
                      fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                    />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  </div>

                            <CardContent className="p-5 sm:p-6">
                              <h3 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                                {event.title}
                    </h3>
                              <p className="mt-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                                {event.description}
                              </p>

                              <div className="mt-5 border-t border-gray-200 dark:border-gray-700 pt-4">
                                <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                                  Key Highlights
                                </h4>
                                <ul className="mt-3 space-y-2">
                                  {event.details.map((detail, detailIndex) => (
                                    <li key={detailIndex} className="flex items-start gap-3">
                                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500 flex-shrink-0" />
                                      <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {detail}
                                      </span>
                        </li>
                      ))}
                    </ul>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                  </div>
                </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision and Core Values Section */}
      <section className="bg-white dark:bg-gray-900 py-10 sm:py-14 md:py-20" id="about-us">
        <div className="container px-3 sm:px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-10 sm:mb-14">
              <div className="inline-flex items-center rounded-md bg-sky-50 dark:bg-sky-900/20 px-4 py-2 text-sm font-medium text-sky-500 dark:text-sky-400">
                About Us
              </div>
              <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                Vision, Mission & Values
              </h2>
              <p className="mt-3 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                What guides our parish—our purpose, our hope, and the values that shape our community life.
              </p>
            </div>

            {/* Hero cards */}
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Vision */}
              <Card className="overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-sky-400 to-sky-600 text-white flex items-center justify-center shadow">
                      <Target className="h-7 w-7" />
                    </div>
                    <div className="text-left">
                      <CardTitle className="font-serif text-2xl">Our Vision</CardTitle>
                      <CardDescription className="text-sm">Where we are going</CardDescription>
                    </div>
                  </div>
                    </CardHeader>
                <CardContent className="px-6 pb-6 pt-0">
                  <p className="text-sky-600 dark:text-sky-400 font-semibold text-base leading-relaxed">
                    “Champion of spiritual nourishment and service to humanity”
                  </p>
                  <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                        We envision a future where our parish stands as a beacon of spiritual growth and humanitarian
                    service, touching lives and transforming communities through Christ’s love.
                      </p>
                    </CardContent>
                  </Card>

              {/* Mission */}
              <Card className="overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-rose-500 to-red-700 text-white flex items-center justify-center shadow">
                      <Heart className="h-7 w-7" />
                    </div>
                    <div className="text-left">
                      <CardTitle className="font-serif text-2xl">Our Mission</CardTitle>
                      <CardDescription className="text-sm">What we do</CardDescription>
                    </div>
                  </div>
                    </CardHeader>
                <CardContent className="px-6 pb-6 pt-0">
                  <p className="text-red-700 dark:text-red-300 font-semibold text-base leading-relaxed">
                    “To attain a holistic human growth through integrity, evangelization and sustainable community development”
                  </p>
                  <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                        We are dedicated to fostering comprehensive human development by upholding Christian values,
                        spreading the Gospel, and creating lasting positive change in our community.
                      </p>
                    </CardContent>
                  </Card>

              {/* Values */}
              <Card className="overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-700 text-white flex items-center justify-center shadow">
                      <Star className="h-7 w-7" />
                    </div>
                    <div className="text-left">
                      <CardTitle className="font-serif text-2xl">Our Values</CardTitle>
                      <CardDescription className="text-sm">How we live</CardDescription>
                    </div>
                  </div>
                    </CardHeader>
                <CardContent className="px-6 pb-6 pt-0">
                  <p className="text-amber-700 dark:text-amber-300 font-semibold text-base leading-relaxed">
                    Rooted in Catholic Social Teachings and Identity
                  </p>
                  <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                    Our core values guide our decisions, strengthen our unity, and shape the way we serve God and
                    neighbor.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Values grid */}
            <div className="mt-10 sm:mt-12">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center">
                Our Core Values
              </h3>
              <p className="mt-2 text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                The virtues we practice as a parish family.
              </p>

              <div className="mt-8 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                          {
                            title: "Integrity",
                    description: "We are guided, and live by Christian values at all times and in all circumstances",
                            icon: Shield,
                    iconBg: "bg-sky-100 dark:bg-sky-900/40",
                    iconColor: "text-sky-500 dark:text-sky-400",
                          },
                          {
                            title: "Unity",
                    description: "We are committed to unity of purpose and mind - we submit to each other and to God",
                            icon: Users,
                    iconBg: "bg-purple-100 dark:bg-purple-900/40",
                    iconColor: "text-purple-600 dark:text-purple-400",
                          },
                          {
                            title: "Equity",
                    description: "We believe everyone deserves a dignified life, and fair access to justice and opportunities",
                            icon: Scale,
                    iconBg: "bg-amber-100 dark:bg-amber-900/40",
                    iconColor: "text-amber-700 dark:text-amber-400",
                          },
                          {
                            title: "Professionalism",
                            description:
                              "We strive for excellence in all we do, and achieve this by investing in innovation, creativity, reflection and perpetual improvement",
                            icon: Trophy,
                    iconBg: "bg-emerald-100 dark:bg-emerald-900/40",
                    iconColor: "text-emerald-700 dark:text-emerald-400",
                          },
                          {
                            title: "Integrity of Creation",
                            description:
                              "In all our actions, we strive to protect the environment: we strive for an optimal balance between human and environmental wellbeing",
                            icon: Leaf,
                    iconBg: "bg-green-100 dark:bg-green-900/40",
                    iconColor: "text-green-700 dark:text-green-400",
                          },
                ].map((value) => (
                  <Card
                            key={value.title}
                    className="h-full border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <CardHeader className="p-5">
                      <div className="flex items-start gap-4">
                        <div className={`h-12 w-12 rounded-xl ${value.iconBg} flex items-center justify-center`}>
                          <value.icon className={`h-6 w-6 ${value.iconColor}`} />
                                </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg">{value.title}</CardTitle>
                          <CardDescription className="mt-1 text-sm">{value.description}</CardDescription>
                      </div>
          </div>
                    </CardHeader>
                      </Card>
                ))}
              </div>
              </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 sm:py-16 bg-sky-500 relative overflow-hidden">
        <div className="container relative z-10 px-3 sm:px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Join Our Parish Community
            </h2>
            <p className="text-blue-100 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 px-2">
              We invite you to become part of our faith family. Join us for Mass, participate in our ministries, or
              simply stop by for a visit.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-white text-sky-500 hover:bg-sky-50 font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all transform hover:scale-105 text-sm sm:text-base">
                    Mass Schedule
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] mx-4">
                  <DialogHeader>
                    <DialogTitle className="text-base sm:text-lg">Mass Schedule</DialogTitle>
                  </DialogHeader>
                  <Card className="mt-4">
                    <CardContent className="pt-4 sm:pt-6 p-4 sm:p-6">
                      <div className="space-y-3 sm:space-y-4">
                        <div>
                          <h3 className="font-semibold flex items-center mb-2 text-sm sm:text-base">
                            <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-2" /> Weekdays & Saturday
                          </h3>
                          <p className="text-xs sm:text-sm text-muted-foreground">6:45 AM</p>
                        </div>
                        <div>
                          <h3 className="font-semibold flex items-center mb-2 text-sm sm:text-base">
                            <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-2" /> Sunday
                          </h3>
                          <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                            <li>1st Mass: 6:30 AM</li>
                            <li>2nd Mass: 8:00 AM</li>
                            <li>3rd Mass: 10:00 AM</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-sky-500 font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all transform hover:scale-105 bg-transparent text-sm sm:text-base"
                  >
                    Contact Us
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] mx-4">
                  <DialogHeader>
                    <DialogTitle className="text-base sm:text-lg">Get in Touch</DialogTitle>
                  </DialogHeader>
                  <Card className="mt-4">
                    <CardContent className="pt-4 sm:pt-6 p-4 sm:p-6">
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex items-start space-x-3">
                          <MapPin className="text-sky-500 mt-0.5 flex-shrink-0 w-4 h-4" />
                          <span className="text-xs sm:text-sm">
                            Opposite KCB Ground, Near Total Petrol Station, Kajiado Central, Kajiado County, Kenya
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="text-sky-500 flex-shrink-0 w-4 h-4" />
                          <span className="text-xs sm:text-sm break-all">stjohnscatholicparish@gmail.com</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Clock className="text-sky-500 mt-0.5 flex-shrink-0 w-4 h-4" />
                          <span className="text-xs sm:text-sm">
                            Tue-Fri: 8AM-5PM, Sat: 9AM-12PM, Sun: 9AM-12PM, Mon: Closed
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* Parish Life Gallery Section */}
      <section className="py-8 sm:py-12 md:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container px-3 sm:px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-12">
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 sm:mb-6">
              Parish Life Gallery
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base px-2">
              Experience the vibrant spirit of our parish community through these moments of faith, fellowship, and
              celebration.
            </p>
          </div>

          <div className="relative">
            <Carousel className="w-full" ref={emblaRef}>
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <div className="p-1 sm:p-2">
                      <Card className="overflow-hidden">
                        <CardContent className="relative aspect-square p-0">
                          <Image
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            fill
                            className="object-cover transition-all hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-opacity flex items-center justify-center opacity-0 hover:opacity-100">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 h-10 w-10 sm:h-12 sm:w-12"
                                  onClick={() => setSelectedImage(index)}
                                >
                                  <Expand className="h-4 w-4 sm:h-6 sm:w-6" />
                                  <span className="sr-only">View image</span>
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-[95vw] sm:max-w-4xl">
                                <DialogHeader>
                                  <DialogTitle className="text-base sm:text-lg">{image.category}</DialogTitle>
                                </DialogHeader>
                                <div className="relative aspect-video mt-2">
                                  <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-contain" sizes="95vw" />
                                </div>
                                <p className="text-xs sm:text-sm text-muted-foreground text-center mt-2 px-2">{image.alt}</p>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4">
                <CarouselPrevious className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4">
                <CarouselNext className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
            </Carousel>
          </div>

          <div className="flex justify-center mt-4 space-x-1 sm:space-x-2">
            {galleryImages.map((_, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full p-0 ${selectedImage === index ? "bg-primary" : "bg-muted"}`}
                onClick={() => emblaApi?.scrollTo(index)}
              >
                <span className="sr-only">Go to slide {index + 1}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
