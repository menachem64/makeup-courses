"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react"
import { User } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "שירה כהן",
    text: "הקורס היה מדהים! למדתי כל כך הרבה טכניקות חדשות ואני מרגישה הרבה יותר בטוחה באיפור שלי.",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    id: 2,
    name: "מיכל לוי",
    text: "המורה היתה מקצועית ומאוד סבלנית. אני ממליצה בחום על הקורס הזה לכל מי שרוצה ללמוד איפור.",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    id: 3,
    name: "רותם אברהם",
    text: "קורס הסירוק היה מעולה! למדתי טכניקות חדשות ומגניבות שאני כבר מיישמת בעבודה שלי。",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    id: 4,
    name: "ליאור נחום",
    text: "הקורס שינה לי את החיים! התחלתי לעבוד כמאפרת עצמאית בזכות הכלים שקיבלתי כאן.",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    id: 5,
    name: "טליה שמיר",
    text: "השילוב של תרגול מעשי והסברים תיאורטיים היה מושלם. ממליצה לכל חובבת עיצוב שיער!",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    id: 6,
    name: "נועה גולדברג",
    text: "הצוות היה מדהים והקורס נתן לי בסיס חזק להתחיל קריירה בתחום האיפור והסירוק.",
    image: "/placeholder.svg?height=100&width=100"
  }
]

export default function Testimonials() {
  const controls = useAnimation()
  const [currentIndex, setCurrentIndex] = useState(0)

  // Function to get the current set of 3 testimonials
  const getVisibleTestimonials = () => {
    const start = currentIndex % testimonials.length
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (start + i) % testimonials.length
      visible.push(testimonials[index])
    }
    return visible
  }

  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({
        opacity: 0,
        y: 50,
        transition: { duration: 0.5, ease: "easeInOut" },
      }).then(() => {
        setCurrentIndex((prev) => prev + 3) // Move to next set of 3
        controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeInOut" },
        })
      })
    }, 7000) // Change every 7 seconds

    return () => clearInterval(interval)
  }, [controls])

  const visibleTestimonials = getVisibleTestimonials()

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 px-6 py-12">
      <div className="container mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold mb-12 text-center bg-[#FF69B4] bg-clip-text text-transparent"
        >
          המלצות
        </motion.h1>
        
        <div className="overflow-hidden">
          <motion.div 
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {visibleTestimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="m-2 bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <User className="h-6 w-6 text-gray-600" />
                  <h3 className="mr-3 text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{testimonial.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}