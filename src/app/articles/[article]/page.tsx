"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

// Course content based on route
type CoursePaths =  "/articles/studio" | "/articles/makeup" | "/articles/hairstyling";

const courseContent: Record<CoursePaths, { title: string; intro: string; sections: { title: string; text: string; image: string; }[] }> = {
  "/articles/studio":{
    title: "הסטודיו שלי",
    intro: "סטודיו לאיפור וסירוק שיער בלב הכפר!",
    sections: [
      { 
        title: "מה אנחנו מציעים?",
        text: "בסטודיו שלנו תוכלי לקבל שירותי איפור וסירוק שיער מקצועיים לכל אירוע. נשמח לארח אותך ביום החתונה, בבן מצווה או בכל אירוע מיוחד אחר!",     
        image: "/images/articles/studio/image1.jpeg"
      },
      {
        title: "מה יש בסטודיו?",
        text: "בסטודיו תמצאי את כל השירותים שתצטרכי: איפור וסירוק שיער, ומקום נעים ומזמין להתארגנות ולהתכונן לאירוע.",
        image: "/images/articles/studio/image2.jpeg"
      },
      {
        title: "צור קשר",
        text: "לתיאום פגישה או לשאלות נוספות, צרי קשר בפאלפון 053-622-0137  או בוואטסאפ.",
        image: "/images/articles/studio/image3.jpeg"
      }
    ]
  },
  "/articles/makeup": {
    title: "קורס איפור מקצועי",
    intro: "למדי את אמנות האיפור המקצועי והפכי למאפרת מובילה בתחום!",
    sections: [
      {
        title: "מה תלמדי בקורס?",
        text: "בקורס האיפור שלנו תרכשי מיומנויות מגוונות: החל מאיפור יומיומי טבעי, דרך איפור ערב דרמטי ועד לאיפור כלות מושלם. נלמד טכניקות מתקדמות, שימוש בצבעים, והתאמת איפור לסוגי עור ותווי פנים.",
        image: "/images/articles/makeup/image1.jpeg"
      },
      {
        title: "למי מתאים הקורס?",
        text: "הקורס מיועד למתחילות שרוצות להיכנס לעולם האיפור ולמקצועיות שמעוניינות לשדרג את כישוריהן. אין צורך בידע מוקדם - רק תשוקה ליופי ויצירתיות!",
        image: "/images/articles/makeup/image2.jpeg"
      },
      {
        title: "מה מקבלים בסיום?",
        text: "נסיון באיפור,ערכת טאצ' אפ מתנה לכל משתתפת, וכלים להתחיל לאפר לבד בכוחות עצמך.",
        image: "/images/articles/makeup/image3.jpeg"
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
        image: "/images/articles/hairstyling/image1.jpeg"
      },
      {
        title: "למי מתאים הקורס?",
        text: "מתאים למתחילות עם חלום לעצב שיער ולמספרות שרוצות להתמקצע בתסרוקות מתקדמות. כל אחת עם ידיים טובות וחוש אסתטי מוזמנת!",
        image: "/images/articles/hairstyling/image2.jpeg"
      },
      {
        title: "מה תקבלי בסיום?",
        text: "נסיון מעשי ויכולת לעשות תסרוקות מקצועיות לבד או אפילו לפתוח עסק עצמאי.",
        image: "/images/articles/hairstyling/image3.jpeg"
      }
    ]
  }
}
export default function ArticlePage() {
  const pathname = usePathname()

  // Get content based on route, fallback to default if route not found
  let currentContent = {
    title: "השרותים שלנו",
    intro: "בחרי שירות וגלי עולם של יופי ויצירתיות!",
    sections: [
      {
        title: "לא נמצא שירות",
        text: "נראה שהגעת לכתובת לא נכונה. בחרי שירות או קורס איפור או עיצוב שיער מהתפריט.",
        image: "/logo.jpeg"
      }
    ]
  }

  currentContent = courseContent[pathname as CoursePaths] || currentContent;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 px-4 sm:px-6 lg:px-8 py-12 pt-24 lg:pt-32">
      <div className="container mx-auto max-w-5xl">
        {/* Header section - Enhanced spacing and typography */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-primary bg-clip-text text-transparent tracking-tight">
            {currentContent.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {currentContent.intro}
          </p>
        </motion.div>
  
        {/* Article sections - Improved grid layout and hover effects */}
        <div className="space-y-20">
          {currentContent.sections.map((section: { title: string; text: string; image: string }, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-10 lg:gap-12`}
            >
       
            {/* Image container - הקטנת התמונה במסכי מחשב */}
            <div className="w-full lg:w-5/12 group"> {/* שינוי מ- lg:w-1/2 ל- lg:w-5/12 */}
              <Image
                src={section.image}
                alt={section.title}
                width={400} // הקטנת הרוחב מ-600 ל-400
                height={267} // שמירה על יחס גובה-רוחב (400 / 600 * 400 ≈ 267)
                className="rounded-2xl shadow-xl object-cover w-full h-auto transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
  
              {/* Text content with improved spacing and styling */}
              <div className="w-full lg:w-1/2 space-y-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 leading-tight">
                  {section.title}
                </h2>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  {section.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
  
        {/* Optional: Add subtle divider */}
        <div className="mt-20 border-t border-gray-200" />
      </div>
    </div>
  );
}