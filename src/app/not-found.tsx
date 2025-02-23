"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button" // Assuming you have a Button component

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex items-center justify-center px-6 py-12">
      <div className="container mx-auto text-center">
        {/* Animated 404 Illustration */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Image
            src="/placeholder.svg?height=300&width=300&text=404"
            alt="404 Illustration"
            width={300}
            height={300}
            className="mx-auto"
          />
        </motion.div> */}

        {/* Title and Message */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold bg-primary bg-clip-text text-transparent mb-4"
        >
          404 - עמוד לא נמצא
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-700 max-w-md mx-auto mb-8"
        >
          נראה שהלכתם לאיבוד... העמוד שאתם מחפשים לא קיים או הוסר. בואו נחזור למסלול!
        </motion.p>

        {/* Back to Home Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/">
            <Button
              variant="outline"
              className="transition-all"
            >
              חזרה לדף הבית
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}