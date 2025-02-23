"use client"

import HeroSection from "@/components/HeroSection"
import About from "@/components/About"
import Courses from "@/components/Courses"
import Portfolio from "@/components/Portfolio"
import Testimonials from "@/components/Testimonials"
import Faq from "@/components/Faq"
import Contact from "@/components/Contact"

export default function Home() {


  return (
    <div >
      <HeroSection/>
      <About/>
      <Courses/>
      <Portfolio/>
      <Testimonials/>
      <div id='contact'>
        <Contact />
      </div>
      <Faq/>
    </div>
      
  )
}

