"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

// Course content based on route
type CoursePaths = "/articles/makeup" | "/articles/hairstyling";

const courseContent: Record<CoursePaths, { title: string; intro: string; sections: { title: string; text: string; image: string; }[] }> = {
  "/articles/makeup": {
    title: "קורס איפור מקצועי",
    intro: "למדי את אמנות האיפור המקצועי והפכי למאפרת מובילה בתחום!",
    sections: [
      {
        title: "מה תלמדי בקורס?",
        text: "בקורס האיפור שלנו תרכשי מיומנויות מגוונות: החל מאיפור יומיומי טבעי, דרך איפור ערב דרמטי ועד לאיפור כלות מושלם. נלמד טכניקות מתקדמות, שימוש בצבעים, והתאמת איפור לסוגי עור ותווי פנים.",
        image: "/images/articles/makeup/image1.jpg"
      },
      {
        title: "למי מתאים הקורס?",
        text: "הקורס מיועד למתחילות שרוצות להיכנס לעולם האיפור ולמקצועיות שמעוניינות לשדרג את כישוריהן. אין צורך בידע מוקדם - רק תשוקה ליופי ויצירתיות!",
        image: "/images/articles/makeup/image2.webp"
      },
      {
        title: "מה תקבלי בסיום?",
        text: "תעודת הסמכה מקצועית, תיק עבודות מרשים וכלים להתחיל קריירה כמאפרת עצמאית או בסטודיו מוביל.",
        image: "/images/articles/makeup/image3.jpg"
      }
    ]
  },
  "/articles/hairstyling": {
    title: "קורס עיצוב שיער",
    intro: "גלי את סודות עיצוב השיער והפכי למעצבת שיער מבוקשת!",
    sections: [
      {
        title: "מה תלמדי בקורס?",
        text: "תלמדי טכניקות תספורת, צביעה, תסרוקות ערב וכלה, וטיפול בשיער. הקורס כולל עבודה מעשית עם כל סוגי השיער והכרת מוצרים מקצועיים.",
        image: "/images/articles/hairstyling/image1.jpg"
      },
      {
        title: "למי מתאים הקורס?",
        text: "מתאים למתחילות עם חלום לעצב שיער ולמספרות שרוצות להתמקצע בתסרוקות מתקדמות. כל אחת עם ידיים טובות וחוש אסתטי מוזמנת!",
        image: "/images/articles/hairstyling/image2.jpg"
      },
      {
        title: "מה תקבלי בסיום?",
        text: "תעודה מקצועית, ניסיון מעשי ויכולת לעבוד במספרות מובילות או לפתוח עסק עצמאי.",
        image: "/images/articles/hairstyling/image3.jpg"
      }
    ]
  }
}
export default function ArticlePage() {
  const pathname = usePathname()

  // Get content based on route, fallback to default if route not found
  let currentContent = {
    title: "קורסים שלנו",
    intro: "בחרי קורס וגלי עולם של יופי ויצירתיות!",
    sections: [
      {
        title: "לא נמצא קורס",
        text: "נראה שהגעת לכתובת לא נכונה. בחרי קורס איפור או עיצוב שיער מהתפריט.",
        image: "/placeholder.svg?height=400&width=600&text=Not+Found"
      }
    ]
  }

  currentContent = courseContent[pathname as CoursePaths] || currentContent;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 px-6 py-12 pt-28">
      <div className="container mx-auto">
        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-primary bg-clip-text text-transparent">
            {currentContent.title}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            {currentContent.intro}
          </p>
        </motion.div>

        {/* Article sections with text and images */}
        <div className="space-y-16">
          {currentContent.sections.map((section: { title: string; text: string; image: string }, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}
            >
              <div className="w-full md:w-1/2">
                <Image
                  src={section.image}
                  alt={section.title}
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg object-cover w-full h-auto"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-600 text-lg">
                  {section.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}