import { format } from "date-fns"

const today = format(new Date(), "yyyy-MM-dd")

export const sampleReadings = {
  [today]: {
    title: "Today's Readings",
    readings: [
      {
        type: "First Reading",
        citation: "Sample Citation",
        text: "This is a sample reading for today. Please check a Catholic missal or visit the USCCB website for the actual readings.",
      },
      {
        type: "Responsorial Psalm",
        citation: "Psalm Sample",
        text: "R. This is a sample responsorial psalm.\nVerse 1 of the sample psalm.\nVerse 2 of the sample psalm.",
      },
      {
        type: "Gospel",
        citation: "Sample Gospel",
        text: "This is a sample gospel reading. Please refer to a Catholic missal or the USCCB website for today's actual gospel.",
      },
    ],
  },
  "2024-03-03": {
    title: "Third Sunday of Lent",
    readings: [
      {
        type: "First Reading",
        citation: "Exodus 20:1-17",
        text: "In those days: God spoke all these words. He said, 'I am the Lord your God who brought you out of the land of Egypt, out of the house of slavery...'",
      },
      {
        type: "Responsorial Psalm",
        citation: "Psalm 19:8, 9, 10, 11",
        text: "R. (John 6:68c) Lord, you have the words of everlasting life.\nThe law of the LORD is perfect,\n    refreshing the soul;\nThe decree of the LORD is trustworthy,\n    giving wisdom to the simple.",
      },
      {
        type: "Second Reading",
        citation: "1 Corinthians 1:22-25",
        text: "Brothers and sisters: Jews demand signs and Greeks look for wisdom, but we proclaim Christ crucified, a stumbling block to Jews and foolishness to Gentiles...",
      },
      {
        type: "Gospel",
        citation: "John 2:13-25",
        text: "Since the Passover of the Jews was near, Jesus went up to Jerusalem. He found in the temple area those who sold oxen, sheep, and doves, as well as the money changers seated there...",
      },
    ],
  },
  // Add more sample readings for different dates here
}

export const getFallbackReadings = (date: string) => {
  return (
    sampleReadings[date] || {
      title: "Daily Mass Readings",
      readings: [
        {
          type: "Notice",
          citation: "",
          text: "The readings for this date are not available. Please check a Catholic missal or visit the USCCB website for today's readings.",
        },
      ],
    }
  )
}
