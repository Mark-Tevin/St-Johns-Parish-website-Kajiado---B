"use client"

import { useState, useEffect } from "react"

export function useScrollSpy(ids: string[], offset = 0) {
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const handler = () => {
      const elements = ids
        .map((id) => document.getElementById(id))
        .filter((element): element is HTMLElement => element !== null)

      const windowHeight = window.innerHeight
      const scrollY = window.scrollY

      let newActiveId = ""
      for (const element of elements) {
        const rect = element.getBoundingClientRect()
        const top = rect.top + scrollY - offset
        if (scrollY >= top) {
          newActiveId = element.id
        }
      }

      setActiveId(newActiveId)
    }

    handler()
    window.addEventListener("scroll", handler)

    return () => {
      window.removeEventListener("scroll", handler)
    }
  }, [ids, offset])

  return activeId
}
