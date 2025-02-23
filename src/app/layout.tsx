import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Heebo } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const heebo = Heebo({ subsets: ["hebrew"] })

export const metadata: Metadata = {
  title: "קורסי איפור וסירוק שיער",
  description: "למדי איפור וסירוק שיער מקצועי",
  openGraph: {
    title: "קורסי איפור וסירוק שיער",
    description: "למדי איפור וסירוק שיער מקצועי",
    url: 'https://makeup-courses.vercel.app',
    siteName: "קורסי איפור וסירוק שיער",
    images: [
      {
        url: 'https://makeup-courses.vercel.app/images/lips.svg',
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
      </body>
    </html>
  )
}

//https://grok.com/chat/51328093-5634-4637-a507-cfc9c30bbb4c