"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function About() {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-10 text-center text-primary"
      >
        עליי
      </motion.h1>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2 flex justify-center"
        >
          <Image
            src="/images/me.jpg"
            alt="תמונה שלי"
            width={200} // Default width for mobile
            height={190} // Default height for mobile
            className="rounded-lg shadow-lg md:w-[400px] md:h-[250px] w-[300px] h-[190px]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:w-1/2 space-y-6"
        >
          <p className="text-lg leading-relaxed text-gray-700">
            שלום, אני חיה. אני מאפרת ומעצבת שיער מקצועית עם ניסיון של למעלה מ-10 שנים בתעשייה.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            התשוקה שלי היא לעזור לאנשים להרגיש ולהיראות הכי טוב שהם יכולים. דרך הקורסים שלי, אני מעבירה את הידע והניסיון
            שצברתי לתלמידים שלי.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            אני מאמינה שכל אחד יכול ללמוד את אמנות האיפור והסירוק, ואני כאן כדי להדריך אותך בכל צעד בדרך.
          </p>
        </motion.div>
      </div>
    </div>
  )
}