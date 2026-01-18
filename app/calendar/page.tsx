import LiturgicalCalendar from "./liturgical-calendar"

export const metadata = {
  title: "Liturgical Calendar | St. John's Parish Kajiado",
  description: "View the Catholic liturgical calendar for St. John's Parish Kajiado",
}

export default function CalendarPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Liturgical Calendar</h1>
        <p className="text-lg mb-8 text-center text-muted-foreground">
          Follow the Catholic liturgical year with daily celebrations, feasts, and solemnities
        </p>
        <LiturgicalCalendar />
      </div>
    </main>
  )
}
