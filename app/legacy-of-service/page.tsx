"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { School, Users, GraduationCap, Heart } from "lucide-react"
import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { LazySection } from "@/components/LazySection"

const allPriests = [
  { name: "Fr. Jules Blais, CSSp", year: "1918", note: "Laid the foundation of Kajiado Parish" },
  { name: "Fr. John Njenga", year: "1956-1960", note: "Later became Archbishop of Nairobi" },
  { name: "Fr. Colin Davies", year: "1960", note: "Later became Bishop of the Catholic Diocese of Ngong" },
  { name: "Fr. Daniel O'Connell", year: "1968-1972" },
  { name: "Fr. W. Meys", year: "1970-1972" },
  { name: "Fr. T. Brouder", year: "1973-1974" },
  { name: "Fr. M. O'Neill", year: "1974-1976" },
  { name: "Fr. J.D. Cronin", year: "1975-1976" },
  { name: "Fr. A. Vermeer", year: "1976" },
  { name: "Fr. J. Heaney", year: "1976-1977" },
  { name: "Fr. R. Hogan", year: "1977" },
  { name: "Fr. F. Mol", year: "1979-1980" },
  { name: "Fr. A. Wolf", year: "1979-1981" },
  { name: "Fr. A. Shayo", year: "1980-1981" },
  { name: "Fr. J. Van Dyk", year: "1981-1986" },
  { name: "Fr. M. Smyth", year: "1983-1986" },
  { name: "Fr. P. Coyne", year: "1986-1987" },
  { name: "Fr. G. Geraghty", year: "1988-1989" },
  { name: "Fr. R. Tarimo", year: "1988-1991" },
  { name: "Fr. A. Gollas", year: "1990-1991" },
  { name: "Fr. D. Waweru", year: "1992-1993" },
  { name: "Fr. I. Munishi", year: "1994-1999", note: "Parish Priest" },
  { name: "Fr. E. Tarimo", year: "1994" },
  { name: "Fr. C. Geraghty", year: "1994-2003", note: "Parish Priest" },
  { name: "Fr. Joseph Y.", year: "1995-1996" },
  { name: "Fr. S. Breen", year: "1996-2003" },
  { name: "Fr. D. Ganley", year: "1997-2003" },
  { name: "Fr. Dominic Waweru", year: "2004", note: "Parish Priest" },
  { name: "Fr. Ambrose Musyoka" },
  { name: "Fr. Michael Musyoka", note: "Parish Priest" },
  { name: "Fr. Lazarus Kilusu" },
  { name: "Fr. Anthony Francis Ndungu", note: "Parish Priest (also returned in 2023)" },
  { name: "Fr. Thomas Chepkwony" },
  { name: "Fr. Peter Kariuki", year: "2009-2015", note: "Parish Priest" },
  { name: "Fr. Anthony Chege", year: "2012-2016" },
  { name: "Fr. Justus Mainga", year: "2011-2017" },
  { name: "Fr. Patrick Nkaai", year: "2015 to present", note: "Parish Priest" },
  { name: "Fr. Edward Mashua", year: "2016-2018, returned in 2022" },
  { name: "Fr. Chinnappan Arockiasamy", year: "2017" },
  { name: "Fr. Anthony Mugo", year: "2018" },
  { name: "Fr. Danda A. MSFS", year: "2018" },
  { name: "Fr. Joseph Nkalami", year: "2019" },
  { name: "Fr. Charles Ndenange", year: "2021" },
  { name: "Fr. Joseph Kurian MSFS", year: "2021" },
  { name: "Fr. Nemesius Njeru", year: "2023" },
  { name: "Fr. Wilson Wachira", year: "2024 to present" },
  { name: "Fr. Paul Amal MSFS" },
]

const catechists = [
  { name: "Peter Kasaine", location: "Oloyiankalni" },
  { name: "Anthony Kimotho", location: "Oloyiankalni/Oloosuyian" },
  { name: "Stephen Mutinda", location: "Oloyiankalni/Oloosuyian" },
  { name: "Benjamin Langat", location: "Isinya" },
  { name: "Joseph Wuantai", location: "Ilbissil/Kumpa" },
  { name: "Charles Ole Mbusia", location: "Enkaroni" },
  { name: "Joseph Tonkei", location: "Enkorika/Sajiloni" },
  { name: "John Lantoo", location: "Olenarau/Empiron" },
  { name: "Regina (volunteer)", location: "Enyornyor" },
  { name: "David Wanjala", location: "Enkirngir" },
  { name: "James Kupai", location: "KMQ/Olprrikata" },
  { name: "Paul Karia", location: "Elangata Wuasi/Kilonito" },
  { name: "Agnes Niinaa", location: "Kilonito" },
  { name: "John Ole Mpai", location: "Enaudot" },
  { name: "Resty Sabanu", location: "Kajiado" },
]

const PriestsDisplay = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % allPriests.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="w-full max-w-2xl mx-auto border-sky-100 shadow-md">
      <CardHeader className="bg-sky-50/50">
        <CardTitle className="text-center font-serif text-sky-900">Priests Who Have Served</CardTitle>
      </CardHeader>
      <CardContent className="py-10">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-sky-800 mb-2">{allPriests[currentIndex].name}</h3>
          {allPriests[currentIndex].year && (
            <Badge variant="secondary" className="mb-4 bg-sky-100 text-sky-700 hover:bg-sky-200">
              {allPriests[currentIndex].year}
            </Badge>
          )}
          {allPriests[currentIndex].note && (
            <p className="text-gray-600 italic">"{allPriests[currentIndex].note}"</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

const schools = [
  {
    name: "St. John's Catholic Comprehensive School",
    subtitle: "Daycare to Primary Education",
    founded: "1987",
    location: "Kajiado Town",
    description:
      "An all-in-one educational center providing a nurturing and structured environment from daycare through primary education.",
    programs: [
      {
        level: "St. John's Daycare",
        description:
          "A loving, safe, and stimulating space for infants and toddlers with guided play, social interaction, and care grounded in Christian love.",
        icon: "👶",
      },
      {
        level: "St. John's Pre-School",
        description:
          "Introduces children to learning through joyful, interactive methods focusing on social development and basic literacy.",
        icon: "🧒",
      },
      {
        level: "St. John's Primary School",
        description:
          "Known for strong academic performance with competent teaching staff and vibrant co-curricular activities.",
        icon: "📚",
      },
    ],
    achievements: "First KCPE candidates in 2009; maintains exemplary performance with an average of 350 marks",
    icon: School,
    color: "bg-sky-100 dark:bg-sky-900/50 text-sky-500 dark:text-sky-400",
  },
  {
    name: "St. Patrick's Kajiado Township Secondary School",
    subtitle: "Secondary Education Excellence",
    location: "Kajiado Township",
    description:
      "A secondary school under St. John's Parish umbrella, providing quality secondary education with strong moral and spiritual foundation.",
    programs: [
      {
        level: "KCSE Preparation",
        description: "Supportive academic environment focused on Kenya Certificate of Secondary Education success.",
        icon: "🎓",
      },
      {
        level: "Spiritual Formation",
        description: "Regular Mass, catechism, and Christian life programs for spiritual nourishment.",
        icon: "🙏",
      },
    ],
    mission: "Forming young people into knowledgeable, responsible, and God-fearing citizens",
    icon: GraduationCap,
    color: "bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400",
  },
  {
    name: "St. John's Computer College",
    subtitle: "Digital Skills for Tomorrow",
    location: "Kajiado Parish",
    description:
      "Preparing today's learners for tomorrow's digital world with ICT-focused training programs for youth and adults.",
    programs: [
      {
        level: "Computer Packages",
        description: "Microsoft Office, Internet, Email, and essential digital literacy skills.",
        icon: "💻",
      },
      {
        level: "Technical Skills",
        description: "Computer repair, maintenance, coding, and software development.",
        icon: "🔧",
      },
      {
        level: "Innovation Programs",
        description: "Robotics and technology innovation for future-ready skills.",
        icon: "🤖",
      },
    ],
    icon: Users,
    color: "bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400",
  },
]

export default function LegacyOfServicePage() {
  const [searchTerm, setSearchTerm] = useState("")
  return (
    <div className="min-h-screen bg-sky-50/30 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-sky-500 to-sky-600 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-block rounded-md bg-white/20 px-4 py-2 text-sm text-white font-medium mb-4">
              Legacy of Service
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Parish History & Leadership</h1>
            <p className="text-lg text-white/90">
              Honoring the Priests, Catechists, and Institutions that Shaped Our Parish over the years.
            </p>
          </div>
        </div>
      </section>

      {/* Priests Display Section */}
      <section className="py-12 md:py-24 bg-sky-50/50 dark:bg-muted">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <PriestsDisplay />
          </motion.div>
        </div>
      </section>

      {/* Catechists Section */}
      <section className="py-8 md:py-12 bg-white dark:bg-gray-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl"
          >
            <h2 className="font-serif text-3xl font-bold tracking-tight text-sky-900 dark:text-white mb-4 text-center">
              Catechists & Lay Faith Leaders
            </h2>
            <p className="text-gray-600 dark:text-muted-foreground mb-6 text-center">
              Our dedicated catechists and lay faith leaders play a crucial role in faith formation and community
              outreach.
            </p>
            <div className="mb-8">
              <Input
                type="text"
                placeholder="Search catechists..."
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-sm mx-auto border-sky-100 focus:border-sky-500"
              />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {catechists
                .filter(
                  (catechist) =>
                    catechist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    catechist.location.toLowerCase().includes(searchTerm.toLowerCase()),
                )
                .map((catechist, index) => (
                  <motion.div
                    key={catechist.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Card className="h-full border-sky-50 hover:shadow-md transition-shadow">
                      <CardHeader className="p-4 text-center">
                        <CardTitle className="text-sm font-bold text-sky-900">{catechist.name}</CardTitle>
                        <CardDescription className="text-xs text-sky-600">{catechist.location}</CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Schools Section */}
      <section id="schools" className="py-12 md:py-24 bg-sky-50/50 dark:bg-muted">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center mb-12"
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-sky-900 dark:text-white mb-4">
              Faith & Education: Our Schools
            </h2>
            <p className="text-gray-600 dark:text-muted-foreground text-lg mb-6">
              St. John's Parish is deeply committed to empowering the community through holistic, faith-based education.
              Our institutions serve learners from early childhood to secondary school and beyond, offering both
              academic excellence and spiritual formation.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-1 xl:grid-cols-1">
            {schools.map((school, index) => (
              <motion.div
                key={school.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full overflow-hidden border-sky-100">
                  <CardHeader className="pb-4 bg-sky-50/30">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-16 h-16 rounded-full ${school.color} flex items-center justify-center flex-shrink-0 shadow-sm`}
                      >
                        <school.icon className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl font-serif text-sky-900 mb-1">{school.name}</CardTitle>
                        <p className="text-sm text-sky-600 font-medium">{school.subtitle}</p>
                        {school.location && <p className="text-xs text-gray-500 mt-1">📍 {school.location}</p>}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6 pt-6">
                    <p className="text-gray-700 dark:text-muted-foreground">{school.description}</p>

                    {/* Programs/Levels */}
                    {school.programs && (
                      <div>
                        <h4 className="font-bold text-sky-900 mb-3 text-sm uppercase tracking-wide">Educational Programs</h4>
                        <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                          {school.programs.map((program, idx) => (
                            <div key={idx} className="bg-white border border-sky-50 p-4 rounded-xl shadow-sm">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-2xl">{program.icon}</span>
                                <h5 className="font-bold text-sky-800 text-sm">{program.level}</h5>
                              </div>
                              <p className="text-xs text-gray-600 dark:text-muted-foreground leading-relaxed">{program.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Stats and Additional Info */}
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {school.founded && (
                        <div className="bg-sky-100/50 dark:bg-sky-950/20 p-4 rounded-xl text-center border border-sky-100">
                          <p className="text-2xl font-bold text-sky-600">{school.founded}</p>
                          <p className="text-xs text-sky-800/70 font-medium uppercase">Founded</p>
                        </div>
                      )}
                      {school.achievements && (
                        <div className="bg-sky-100/50 dark:bg-sky-950/20 p-4 rounded-xl text-center sm:col-span-2 lg:col-span-2 border border-sky-100">
                          <p className="text-sm font-bold text-sky-700">
                            350 Average KCPE Marks
                          </p>
                          <p className="text-xs text-sky-800/70 font-medium uppercase">Academic Excellence</p>
                        </div>
                      )}
                    </div>

                    {/* Mission Statement for St. Patrick's */}
                    {school.mission && (
                      <div className="bg-gradient-to-r from-sky-50 to-white dark:from-green-950/20 dark:to-sky-950/20 p-6 rounded-xl border-l-4 border-sky-500 shadow-sm">
                        <p className="text-sm font-bold text-sky-900">Our Mission:</p>
                        <p className="text-sm text-gray-700 dark:text-muted-foreground mt-2 italic">"{school.mission}"</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Card className="bg-gradient-to-r from-sky-500 to-sky-600 text-white border-none shadow-xl">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold text-center mb-8">Our Educational Impact</h3>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="text-center">
                    <p className="text-4xl font-bold mb-1">3</p>
                    <p className="text-sm text-white/80 font-medium uppercase tracking-wider">Institutions</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold mb-1">650+</p>
                    <p className="text-sm text-white/80 font-medium uppercase tracking-wider">Students</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold mb-1">35+</p>
                    <p className="text-sm text-white/80 font-medium uppercase tracking-wider">Years</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold mb-1">100%</p>
                    <p className="text-sm text-white/80 font-medium uppercase tracking-wider">Catholic</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Education Rooted in Faith - Moved to end */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="bg-white dark:bg-gray-800 p-10 rounded-2xl border border-sky-100 shadow-sm text-center">
              <div className="inline-block p-3 rounded-full bg-sky-50 mb-4">
                <Heart className="h-8 w-8 text-sky-500" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-sky-900 mb-4">Education Rooted in Faith</h3>
              <p className="text-gray-600 dark:text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                All schools under St. John's Parish strive to offer more than just academic instruction — they nurture
                the whole person. Our education is grounded in Catholic values, developing well-rounded individuals who
                are spiritually enriched and academically empowered.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-12 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl"
          >
            <Card className="border-sky-100 shadow-sm">
              <CardHeader className="bg-sky-50/30">
                <CardTitle className="text-center font-serif text-2xl text-sky-900">Impact & Future Vision</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <p className="text-gray-700 dark:text-muted-foreground">
                  The contributions of our priests, catechists, and schools continue to shape our faith and society.
                  Through spiritual guidance and education, we are nurturing generations rooted in Christian values.
                </p>
                <p className="text-gray-700 dark:text-muted-foreground">
                  Moving forward, we aim to expand our educational institutions, introduce new programs, and strengthen
                  our community outreach to ensure a lasting legacy of faith and service.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
