import type { ReactNode } from "react"
import { useLazyLoad } from "@/hooks/useLazyLoad"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface LazySectionProps {
  children: ReactNode
  className?: string
  title?: string
  linkTo?: string
}

export function LazySection({ children, className = "", title, linkTo }: LazySectionProps) {
  const [ref, isIntersecting] = useLazyLoad()

  return (
    <section
      ref={ref}
      className={`transition-opacity duration-500 ${
        isIntersecting ? "opacity-100" : "opacity-0"
      } ${className} bg-gradient-to-r from-gray-100 via-white to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 border border-gray-200/50 dark:border-gray-700/50 shadow-sm backdrop-blur-sm rounded-lg p-4 md:p-6`}
    >
      <div className="relative z-10 overflow-hidden">
        {title && (
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-100">
              {title}
            </h2>
            {linkTo && (
              <Button variant="link" asChild className="group transition-all duration-300 hover:scale-105">
                <Link href={linkTo} className="flex items-center">
                  Read more
                  <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </Button>
            )}
          </div>
        )}
        <div className="transition-all duration-300 hover:translate-y-[-2px]">{children}</div>
      </div>
    </section>
  )
}
