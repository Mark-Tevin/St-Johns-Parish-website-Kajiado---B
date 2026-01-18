"use client"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"
import { useLazyLoad } from "@/hooks/useLazyLoad"

interface LazyImageProps extends Omit<ImageProps, "src"> {
  src: string
  fallbackSrc?: string
}

export function LazyImage({ src, fallbackSrc = "/placeholder.svg", ...props }: LazyImageProps) {
  const [imgSrc, setImgSrc] = useState(fallbackSrc)
  const [ref, isIntersecting] = useLazyLoad()

  useEffect(() => {
    if (isIntersecting) {
      setImgSrc(src)
    }
  }, [isIntersecting, src])

  return (
    <div ref={ref} className="relative overflow-hidden">
      <Image
        {...props}
        src={imgSrc || "/placeholder.svg"}
        alt={props.alt}
        className={`transition-opacity duration-300 ${isIntersecting ? "opacity-100" : "opacity-0"} ${props.className}`}
        onError={() => setImgSrc(fallbackSrc)}
      />
    </div>
  )
}
