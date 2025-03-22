"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import Link from "next/link"

// Content for different routes
type PageContent = {
  [key: string]: {
    title: string;
    intro: string;
    images?: { id: number; category: string; title: string; image: string; description: string }[];
  };
};

const pageContent: PageContent = {
  "/portfolio/makeup": { 
    title: "גלריית איפור", 
    intro: "מבחר עבודות של איפור ערב וכלות - יופי קלאסי ליום המיוחד שלך." ,
    images: [
      { id: 1, category: "makeup", title: "איפור ערב ", image: "/images/portfolio/makeup/image1.jpeg", description: "איפור מושלם לערב המיוחד" },
      { id: 2, category: "makeup", title: "איפור ערב ", image: "/images/portfolio/makeup/image2.jpeg", description: "איפור מושלם לערב המיוחד" },
      { id: 3, category: "makeup", title: "איפור כלה ", image: "/images/portfolio/makeup/image3.jpeg", description: "איפור מושלם לערב המיוחד" },
      { id: 4, category: "makeup", title: "איפור ערב ", image: "/images/portfolio/makeup/image4.jpeg", description: "איפור מושלם לערב המיוחד" },
      { id: 5, category: "makeup", title: "איפור ערב ", image: "/images/portfolio/makeup/image5.jpeg", description: "איפור מושלם לערב המיוחד" },
      { id: 6, category: "makeup", title: "איפור ערב ", image: "/images/portfolio/makeup/image6.jpeg", description: "איפור מושלם לערב המיוחד" },
      { id: 7, category: "makeup", title: "איפור כלה ", image: "/images/portfolio/makeup/image7.jpeg", description: "איפור מושלם לערב המיוחד" },
      { id: 8, category: "makeup", title: "איפור כלה ", image: "/images/portfolio/makeup/image8.jpeg", description: "איפור מושלם לערב המיוחד" },
      { id: 9, category: "makeup", title: "איפור ערב ", image: "/images/portfolio/makeup/image9.jpeg", description: "איפור מושלם לערב המיוחד" },
    ]
  },
  "/portfolio/heirStyling": {
     title: "עיצוב שיער",
     intro: "עיצובים מרהיבים ומיוחדים לכל אירוע - תסרוקות מושלמות לכל סוגי השיער.",
     images: [
      { id: 1, category: "heirStyling", title: "עיצוב שיער", image: "/images/portfolio/heirStyling/image1.jpeg", description: "עיצוב שיער מושלם לכל אירוע" },
      { id: 2, category: "heirStyling", title: "עיצוב שיער", image: "/images/portfolio/heirStyling/image2.jpeg", description: "עיצוב שיער מושלם לכל אירוע" }, 
      { id: 3, category: "heirStyling", title: "עיצוב שיער", image: "/images/portfolio/heirStyling/image3.jpeg", description: "עיצוב שיער מושלם לכל אירוע" },
     ]
  },
  "/portfolio/courses": { 
    title: "סדנאות", 
    intro: "מראות רעננים וקלילים ליום יום - יופי טבעי במיטבו.",
    images: [
      { id: 1, category: "courses", title: "סדנאות", image: "/images/portfolio/courses/image1.jpeg", description: "סדנאות יופי ואיפור" },
      { id: 2, category: "courses", title: "סדנאות", image: "/images/portfolio/courses/image2.jpeg", description: "סדנאות יופי ואיפור" },
      { id: 3, category: "courses", title: "סדנאות", image: "/images/portfolio/courses/image3.jpeg", description: "סדנאות יופי ואיפור" },
      { id: 4, category: "courses", title: "סדנאות", image: "/images/portfolio/courses/image4.jpeg", description: "סדנאות יופי ואיפור" },
      { id: 5, category: "courses", title: "סדנאות", image: "/images/portfolio/courses/image5.jpeg", description: "סדנאות יופי ואיפור" },
      { id: 6, category: "courses", title: "סדנאות", image: "/images/portfolio/courses/image6.jpeg", description: "סדנאות יופי ואיפור" },
    ]
  },
}

export default function GalleryPage() {
  const pathname = usePathname()
  
  // Get content based on route, fallback to default if route not found
  const currentContent = pageContent[pathname] || {
    title: "הגלריה שלנו",
    intro: "כאן תוכלו להתרשם מהעבודות שלנו - שילוב של יצירתיות, מקצועיות ותשוקה ליופי."
  }

  // Filter gallery items based on route
  const category = pathname.split("/")[2] // Extract category from route (e.g., "bridal" from "/portfolio/bridal")

  // Breadcrumbs logic
  const breadcrumbs = [
    { label: "דף הבית", href: "/" },
    { label: "גלריה", href: "/portfolio" },
  ]
  if (category && pageContent[pathname]) {
    breadcrumbs.push({ label: currentContent.title, href: pathname })
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 px-6 py-12 pt-24">
      <div className="container mx-auto">
        {/* Breadcrumbs */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-sm md:text-base"
          aria-label="Breadcrumb"
        >
          <ol className="flex items-center gap-2 flex-wrap">
            {breadcrumbs.map((crumb, index) => (
              <li key={index} className="flex items-center">
                {index < breadcrumbs.length - 1 ? (
                  <>
                    <Link href={crumb.href} className="text-gray-600 hover:text-primary transition-colors">
                      {crumb.label}
                    </Link>
                    <span className="mx-2 text-gray-400">/</span>
                  </>
                ) : (
                  <span className="text-gray-800 font-semibold">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </motion.nav>

        {/* Header section with dynamic title and text */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center justify-center min-h-[50vh] mb-0"
        >
          <h1 className="text-5xl text-center md:text-6xl font-bold bg-primary bg-clip-text text-transparent">
            {currentContent.title}
          </h1>
          <p className="mt-4 text-center text-lg md:text-xl text-gray-700 max-w-2xl">
            {currentContent.intro}
          </p>
        </motion.div>

        {/* Check if filteredItems is empty */}
        {currentContent.images?.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center border-2 border-dashed border-gray-300 rounded-lg p-8 mt-8"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              הקטגוריה המבוקשת לא נמצאה
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              נראה שהקטגוריה שבחרת אינה קיימת. אנא נסה קטגוריה אחרת או חזור לדף הגלריה הראשי.
            </p>
            <Link href="/portfolio" className="inline-block text-primary hover:text-primary/80 underline text-lg font-semibold transition-colors">
              חזור לדף הגלריה הראשי
            </Link>
          </motion.div>
        ) : (
          /* Gallery grid with filtered items */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentContent.images?.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="group relative overflow-hidden rounded-xl shadow-lg bg-white"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent flex items-end justify-center md:opacity-0 md:group-hover:opacity-90 opacity-90 transition-opacity duration-300">
                  <div className="text-white p-4 transform md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300 translate-y-0">
                    <h3 className="text-xl text-center md:text-2xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-sm  text-center mt-1 hidden md:group-hover:block">
                      {item.description}
                    </p>
                  </div>
                </div> */}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}