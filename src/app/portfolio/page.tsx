"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

// Updated portfolio items with arrays of images
const portfolioItems = [
  {
    id: 1,
    title: "איפור ערב וכלות",
    href:"/makeup",
    images: [
      "/images/portfolio/makeup/image0.jpeg"
    ] 
  },
  {
    id: 2,
    title: "עיצוב שיער",
    href:"/heirStyling",
    images: [
      "/images/portfolio/heirStyling/image0.jpeg",
    ]
  },
  {
    id: 3,
    title: "סדנאות",
    href:"/courses",
    images: [
      "/images/portfolio/courses/image0.jpeg",
    ]
  }
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 px-6 py-12 pt-24">
      <div className="container mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold mb-12 text-center bg-primary bg-clip-text text-transparent"
        >
          גלריה
        </motion.h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group relative overflow-hidden rounded-xl shadow-lg bg-white"
            >
              <h3 className="text-xl md:text-2xl font-semibold p-4 text-center bg-white">
                {item.title}
              </h3>
              <Link href={`portfolio${item.href}`}>
                 <Image width={500} height={500} src={item.images[0]} alt={item.title} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}