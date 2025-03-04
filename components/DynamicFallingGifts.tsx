"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface GiftProps {
  id: number
  left: number
  delay: number
  duration: number
  src: string
  alt: string
  width: number
  height: number
}

interface DynamicFallingGiftsProps {
  images: Array<{ src: string; alt: string; width: number; height: number }>
  containerHeight: number
}

const DynamicFallingGifts: React.FC<DynamicFallingGiftsProps> = ({ images, containerHeight }) => {
  const [gifts, setGifts] = useState<GiftProps[]>([])
  const nextId = useRef(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newGift: GiftProps = {
        id: nextId.current++,
        left: Math.random() * 100, // Random horizontal position (0-100%)
        delay: Math.random() * 2, // Random delay (0-2 seconds)
        duration: 6 + Math.random() * 6, // Random duration (6-12 seconds)
        ...images[Math.floor(Math.random() * images.length)], // Random image from the provided array
      }

      setGifts((prevGifts) => [...prevGifts, newGift])

      // Remove the gift after animation completes
      setTimeout(
        () => {
          setGifts((prevGifts) => prevGifts.filter((gift) => gift.id !== newGift.id))
        },
        (newGift.delay + newGift.duration) * 1000,
      )
    }, 1000) // Add new gift every 1 second

    return () => clearInterval(intervalId)
  }, [images])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <AnimatePresence>
        {gifts.map((gift) => (
          <motion.div
            key={gift.id}
            initial={{ y: -gift.height, opacity: 0 }}
            animate={{
              y: containerHeight + gift.height,
              opacity: [0, 1, 1, 0],
              transition: {
                y: { delay: gift.delay, duration: gift.duration, ease: "linear" },
                opacity: { delay: gift.delay, duration: gift.duration, times: [0, 0.1, 0.9, 1] },
              },
            }}
            exit={{ opacity: 0 }}
            style={{
              position: "absolute",
              left: `${gift.left}%`,
            }}
          >
            <Image src={gift.src || "/placeholder.svg"} alt={gift.alt} width={gift.width} height={gift.height} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default DynamicFallingGifts

