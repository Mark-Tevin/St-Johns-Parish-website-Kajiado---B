export interface Reading {
  title: string
  citation: string
  content: string
}

export interface DailyReadings {
  date: string
  title: string
  readings: Reading[]
}
