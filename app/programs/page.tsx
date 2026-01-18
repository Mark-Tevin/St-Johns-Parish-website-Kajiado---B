"use client"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { motion } from "framer-motion"
import { LazySection } from "@/components/LazySection"

const programs = [
  {
    name: "Catechism Classes",
    description: "Faith formation for children and adults preparing for sacraments",
    details: `## Catechism Classes
Develop a strong foundation in Catholic teachings while preparing properly for sacraments. Gain confidence explaining your faith to others and learn how Catholic teachings apply to daily life. Become better equipped to pass on the faith to family members and deepen your own spiritual journey.`,
  },
  {
    name: "Family & Marriage Encounter",
    description: "Programs to strengthen family bonds and enrich marriages through faith",
    details: `## Family & Marriage Encounter
Enhance communication skills for resolving conflicts and rediscover the spiritual dimension of your marriage. Learn practical ways to pray together as a family while connecting with other Catholic couples for support. Receive guidance on raising children in the faith and transform your marriage into a powerful witness of God's love.`,
  },
  {
    name: "Infant Baptism",
    description: "Preparation and celebration of the Sacrament of Baptism for infants and young children",
    details: `## Infant Baptism
Understand the rich meaning behind baptismal rituals and recognize your crucial role in your child's faith formation. Connect with other parents at a similar life stage and receive guidance for nurturing faith in your home. Begin fulfilling your promise to raise your child in the faith while joining a parish community that will support your family every step of the way.`,
  },
  {
    name: "Faith Renewal",
    description: "Spiritual retreats and programs designed to deepen and renew one's faith journey",
    details: `## Faith Renewal
Experience a personal encounter with Christ and rediscover the joy of your faith commitment. Break through patterns of spiritual stagnation and develop a more meaningful prayer life. Build deeper connections with fellow parishioners, find renewed enthusiasm for Mass and sacraments, and become equipped to share your faith authentically with others.`,
  },
]

export default function ProgramsPage() {
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
              Our Programs
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              Parish Programs
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Discover our various faith formation and community outreach programs designed to enrich your spiritual life.
            </p>
          </motion.div>
        </div>
      </LazySection>

      <div className="container py-12 md:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full transition-all hover:shadow-lg hover:border-sky-200">
                <CardHeader>
                  <CardTitle className="text-sky-900 dark:text-white font-serif">{program.name}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="border-sky-500 text-sky-600 hover:bg-sky-50">Learn More</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-serif text-sky-900 dark:text-white">{program.name}</DialogTitle>
                      </DialogHeader>
                      <div className="mt-4 prose dark:prose-invert max-w-none">
                        <div className="whitespace-pre-line text-gray-700 dark:text-gray-300">
                          {program.details
                            .replace("##", "")
                            .split("\n")
                            .map((paragraph, i) => (
                              <p key={i} className={i === 0 ? "text-xl font-semibold mb-4 text-sky-700 dark:text-sky-400" : "mb-4"}>
                                {paragraph}
                              </p>
                            ))}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
