import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Heebo } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { WhatsAppButton } from "@/components/WhatsAppButton"
import Script from "next/script"

const heebo = Heebo({ subsets: ["hebrew"] })

export const metadata: Metadata = {
  title: "Chaya LIPsker",
  description: "סטודיו וקורסים לאיפור וסירוק שיער",
  icons: {
    icon: '/favicon.ico'
  },
  openGraph: {
    title: "קורסי איפור וסירוק שיער",
    description: "למדי איפור וסירוק שיער מקצועי",
    url: 'https://makeup-courses.vercel.app',
    siteName: "קורסי איפור וסירוק שיער",
    images: [
      {
        url: 'https://makeup-courses.vercel.app/logo.jpeg',
        width: 1200,
        height: 630,
        alt:  "קורסי איפור וסירוק שיער",
      },
    ],
    locale: 'he_IL',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${heebo.className} bg-gray-50 text-gray-900`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <Script
                src="https://cdn.enable.co.il/licenses/enable-L361602skdupxwgi-0125-67407/init.js"
                strategy="afterInteractive" // טוען את הסקריפט אחרי שהעמוד הופך לאינטראקטיבי
        />
      </body>
    </html>
  )
}

