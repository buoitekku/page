"use client"

import type React from "react"

import { useEffect, useState, useCallback } from "react"
import { motion, useAnimate } from "framer-motion"
import Image from "next/image"

interface ImageProps {
  src: string
  alt: string
  width: number
  height: number
}

interface FallingImagesProps {
  images: ImageProps[]
  heroHeight: number
}

const FallingImages: React.FC<FallingImagesProps> = ({ images, heroHeight }) => {
  const [randomizedImages, setRandomizedImages] = useState<ImageProps[]>([])
  const [scope, animate] = useAnimate()

  // Randomize images on component mount
  useEffect(() => {
    const shuffled = [...images].sort(() => Math.random() - 0.5)
    setRandomizedImages(shuffled)
  }, [images])

  // Animation function
  const startAnimation = useCallback(() => {
    randomizedImages.forEach((_, index) => {
      animate(
        `#image-${index}`,
        {
          y: [0, heroHeight + 100],
          opacity: [0, 1, 1, 0],
        },
        {
          duration: 8,
          delay: index * 0.5,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: (randomizedImages.length - index - 1) * 0.5,
          times: [0, 0.2, 0.7, 1],
        },
      )
    })
  }, [randomizedImages, heroHeight, animate])

  // Start animation when randomizedImages are set
  useEffect(() => {
    if (randomizedImages.length > 0) {
      startAnimation()
    }
  }, [randomizedImages, startAnimation])

  return (
    <div ref={scope} className="absolute inset-0 overflow-hidden">
      {randomizedImages.map((image, index) => (
        <motion.div
          key={index}
          id={`image-${index}`}
          initial={{ y: 0, opacity: 0 }}
          style={{
            position: "absolute",
            left: `${(index * 20) % 80}%`,
            top: -image.height,
          }}
        >
          <Image src={image.src || "/placeholder.svg"} alt={image.alt} width={image.width} height={image.height} />
        </motion.div>
      ))}
    </div>
  )
}

export default FallingImages

