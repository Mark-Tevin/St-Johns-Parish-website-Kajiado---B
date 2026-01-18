import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function ParishPriestMessagePage() {
  return (
    <div className="container py-12 md:py-24">
      <Card className="mx-auto max-w-3xl">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Image
              src="/placeholder.svg?height=100&width=100"
              alt="Fr. Patrick Nkaai"
              width={100}
              height={100}
              className="rounded-full"
            />
            <div>
              <CardTitle className="text-2xl">Message from Fr. Patrick Nkaai</CardTitle>
              <p className="text-muted-foreground">Parish Priest</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="prose dark:prose-invert">
          <p>Dear brothers and sisters in Christ,</p>
          <p>
            Welcome to St. John's Parish Kajiado. Our parish is a vibrant Catholic community dedicated to spreading the
            Gospel and serving God's people. As your Parish Priest, I am delighted to welcome you to our spiritual
            family.
          </p>
          <p>
            At St. John's, we strive to create an environment where faith flourishes, community thrives, and service to
            others is at the heart of all we do. Our parish is more than just a place of worship; it is a home where we
            come together to grow in our relationship with God and with one another.
          </p>
          <p>
            We offer a wide range of ministries and programs to cater to the spiritual needs of all age groups. From our
            vibrant youth ministry to our dedicated senior groups, from our faith formation classes to our outreach
            programs, there is a place for everyone to participate and contribute.
          </p>
          <p>
            I encourage you to explore our website, learn about our various activities, and most importantly, to join us
            in person for Mass and our community events. Whether you're a long-time parishioner, new to the area, or
            just visiting, know that you are welcome here.
          </p>
          <p>May God bless you and your loved ones. I look forward to meeting you and journeying together in faith.</p>
          <p>
            In Christ,
            <br />
            Fr. *** Patrick
            <br />
            Parish Priest
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
