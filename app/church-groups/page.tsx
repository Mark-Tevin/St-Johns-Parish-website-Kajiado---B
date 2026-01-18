"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Music, Heart, Book, Sparkles, UserPlus, Search } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

// First, let's update the churchGroups array to include the detailed information for each group
const churchGroups = [
  {
    name: "Jumuiya Communities",
    description: "Small Christian Communities for prayer, fellowship, and spiritual growth",
    icon: Users,
    details: `Jumuiya communities are small Christian groups within the parish where members gather regularly in homes for prayer, Bible reflection, and fraternal sharing. Started in the early 1970s in Eastern Africa, these communities bring the Church closer to people's daily lives.

**Why Join?**
- Experience faith in a more personal, intimate setting
- Receive spiritual and material support during life challenges
- Participate actively in evangelization within your neighborhood
- Develop leadership skills through service opportunities
- Build lasting relationships with fellow parishioners`,
  },
  {
    name: "Parish Choir",
    description: "Enhancing our liturgical celebrations through music",
    icon: Music,
    details: `St. John's Catholic Parish Kajiado features three vibrant mass choirs, each serving a different mass time. These choirs enhance liturgical celebrations through sacred music, fostering deeper worship experiences.

**Why Join?**
- Use your musical talents to glorify God
- Learn traditional and contemporary Catholic hymns
- Experience the joy of communal worship through song
- Develop your singing and musical abilities
- Participate more actively in the liturgy
- All are welcome regardless of experience level!`,
  },
  {
    name: "Catholic Men Association",
    description: "Fostering spiritual growth and service among men in the parish",
    icon: UserPlus,
    details: `The Catholic Men Association is a fellowship of Catholic men dedicated to growing in faith, promoting family values, and serving the Church and community. Established in Kenya in the 1980s, CMA members strive to be role models of Christian manhood.

**Why Join?**
- Connect with other Catholic men for spiritual growth and support
- Participate in retreats and formation programs designed specifically for men
- Engage in community service and development projects
- Strengthen your role as a spiritual leader in your family
- Contribute to parish development initiatives`,
  },
  {
    name: "Catholic Women Association",
    description: "Empowering women through faith, service, and community",
    icon: Heart,
    details: `The Catholic Women Association empowers women to actively participate in the Church's mission. Founded in Kenya in the 1950s, CWA members promote Christian values, support families, and undertake various charitable works.

**Why Join?**
- Connect with a supportive network of Catholic women
- Grow spiritually through prayer, retreats, and formation programs
- Participate in impactful community development projects
- Advocate for family values and women's dignity
- Contribute to parish life through service and leadership
- Learn practical skills through various workshops`,
  },
  {
    name: "Youth",
    description: "Engaging young people in faith formation and fellowship",
    icon: Users,
    subgroups: [
      { name: "Senior Youth", description: "For young adults aged 18-35" },
      { name: "Missionary Youth Movement (MYM)", description: "Focused on missionary work and evangelization" },
    ],
    details: `St. John's Youth Ministry nurtures young Catholics through faith formation, fellowship, and service. The group is divided into Junior (ages 13-17) and Senior (ages 18-35) sections to address age-specific needs and interests.

**Why Join?**
- Connect with peers who share your faith and values
- Participate in youth-oriented liturgies, retreats, and formation programs
- Develop leadership skills through youth-led activities
- Engage in community service and outreach projects
- Enjoy social activities in a safe, supportive environment
- Discover your gifts and how to use them in service to the Church`,
  },
  {
    name: "Legion of Mary",
    description: "Promoting devotion to Mary and serving the Church through prayer and action",
    icon: Sparkles,
    details: `The Legion of Mary is a lay apostolic association dedicated to the spiritual growth of members and evangelization. Founded in Dublin, Ireland in 1921 by Frank Duff, legionaries engage in spiritual works of mercy under Mary's guidance.

**Why Join?**
- Deepen your devotion to Mary and Jesus
- Grow spiritually through weekly prayer meetings and active apostolate
- Visit the sick, homebound, and bereaved in your community
- Participate in evangelization efforts within the parish
- Experience the joy of bringing others closer to Christ
- Benefit from a structured system of spiritual formation`,
  },
  {
    name: "PMC",
    description: "Pontifical Mission Childhood, nurturing missionary spirit in children",
    icon: Book,
    details: `Pontifical Missionary Childhood is a global Catholic children's association that fosters missionary awareness among children. Founded in 1843 by Bishop Charles de Forbin-Janson, PMC encourages children (ages 4-14) to pray, learn about, and support missions worldwide.

**Why Join?**
- Learn about the universal Church and missions around the world
- Develop compassion for children in need globally
- Participate in fun, age-appropriate spiritual activities
- Grow in faith through prayer, songs, and Bible stories
- Contribute to the Church's missionary work through small sacrifices
- Build a foundation for lifelong missionary discipleship`,
  },
  {
    name: "Charismatic",
    description: "Fostering spiritual renewal through the Holy Spirit",
    icon: Sparkles,
    details: `The Catholic Charismatic Renewal emphasizes a personal relationship with Jesus Christ and the gifts of the Holy Spirit. Originating in the United States in 1967, this movement brings renewal through prayer, praise, and spiritual gifts.

**Why Join?**
- Experience a deeper relationship with the Holy Spirit
- Participate in vibrant praise and worship services
- Learn to pray spontaneously and from the heart
- Discover and use your spiritual gifts
- Find healing through prayer and community support
- Renew your enthusiasm for evangelization`,
  },
  {
    name: "Couples for Christ",
    description: "Strengthening Christian family life and values",
    icon: Heart,
    details: `Couples for Christ is a family ministry aimed at strengthening Christian marriages and family life. Founded in the Philippines in 1981, this global movement helps couples grow in faith together and become effective witnesses to God's love.

**Why Join?**
- Strengthen your marriage through Christ-centered formation
- Connect with other couples facing similar challenges and joys
- Participate in marriage enrichment programs and retreats
- Receive support in raising children in the faith
- Contribute to family renewal in the parish and society
- Engage in family-oriented service and evangelization activities`,
  },
]

const jumuiyaCommunities = [
  "St. Peter",
  "St. Paul",
  "St. Mary",
  "St. Joseph",
  "St. John",
  "St. Luke",
  "St. Mark",
  "St. Matthew",
  "St. Jude",
  "St. James",
  "St. Thomas",
  "St. Andrew",
  "St. Philip",
  "St. Bartholomew",
  "St. Simon",
  "St. Matthias",
  "St. Ignatius",
  "St. Francis Xavier",
  "St. Teresa of Avila",
  "St. Catherine of Siena",
]

// Now let's update the component to include a dialog for each group's details
export default function ChurchGroupsPage() {
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedGroup, setSelectedGroup] = useState<(typeof churchGroups)[0] | null>(null)

  const toggleExpand = (groupName: string) => {
    setExpandedGroup(expandedGroup === groupName ? null : groupName)
  }

  const filteredJumuiya = jumuiyaCommunities.filter((jumuiya) =>
    jumuiya.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="container py-12 md:py-24">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center font-serif text-4xl font-bold text-foreground"
      >
        Church Groups
      </motion.h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {churchGroups.map((group, index) => (
          <motion.div
            key={group.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full transition-all hover:shadow-lg bg-card text-card-foreground">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <group.icon className="h-6 w-6 text-primary" />
                    <span>{group.name}</span>
                  </CardTitle>
                  {group.name === "Jumuiya Communities" && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="transition-all duration-300 hover:bg-blue-100 dark:hover:bg-blue-900"
                        >
                          View All Jumuiyas
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px] max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-semibold text-center mb-4">
                            Jumuiya Communities
                          </DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4">
                          <div className="flex items-center gap-2">
                            <Search className="h-4 w-4 opacity-50" />
                            <Input
                              placeholder="Search Jumuiya..."
                              className="col-span-3"
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value)}
                            />
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {filteredJumuiya.map((jumuiya) => (
                              <motion.div
                                key={jumuiya}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <Card className="h-full hover:shadow-md transition-shadow duration-300">
                                  <CardHeader className="p-3">
                                    <CardTitle className="text-sm font-semibold">{jumuiya}</CardTitle>
                                  </CardHeader>
                                </Card>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                </div>
                <CardDescription>{group.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-semibold flex items-center gap-2">
                        <group.icon className="h-5 w-5 text-primary" />
                        {group.name}
                      </DialogTitle>
                      <DialogDescription>{group.description}</DialogDescription>
                    </DialogHeader>
                    <div className="mt-4 prose dark:prose-invert max-w-none">
                      {group.details && (
                        <div
                          className="whitespace-pre-line"
                          dangerouslySetInnerHTML={{
                            __html: group.details.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/- /g, "• "),
                          }}
                        />
                      )}
                      {group.subgroups && (
                        <div className="mt-4">
                          <h3 className="text-lg font-semibold">Subgroups</h3>
                          <ul className="mt-2 space-y-2">
                            {group.subgroups.map((subgroup) => (
                              <li key={subgroup.name} className="flex items-start gap-2">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                                <div>
                                  <span className="font-medium">{subgroup.name}</span>
                                  <p className="text-sm text-muted-foreground">{subgroup.description}</p>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
