"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export const AnimatedButton = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative overflow-hidden rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ width: "200px", height: "50px" }}
      animate={{
        width: isHovered ? "300px" : "200px",
        height: isHovered ? "100px" : "50px",
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center bg-red-600 text-white font-bold"
        initial={{ opacity: 1 }}
        animate={{ opacity: isHovered ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      >
        Sprawdź produkty
      </motion.div>
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Obszar%20roboczy%201-EYbLnkumMS1W8VULQhSeO8CLHEvYBn.png"
          alt="WONDERLAND banner"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </motion.div>
    </motion.div>
  )
}

