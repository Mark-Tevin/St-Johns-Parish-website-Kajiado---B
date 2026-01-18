"use client"

import { type ReactNode, useState, useEffect } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { LoadingScreen } from "@/components/loading-screen"

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  const [isPageLoaded, setIsPageLoaded] = useState(false)

  useEffect(() => {
    setIsPageLoaded(true)
  }, [])

  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {!isPageLoaded && <LoadingScreen />}
      {children}
    </NextThemesProvider>
  )
}
