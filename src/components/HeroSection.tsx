"use client"
import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"

const HeroSection = () => {
const [currentImageIndex] = useState(0)
const router = useRouter()
const images = [
{ src: "/images/makeup.jpg", alt: "מוצרי איפור" },
]

const colors = [
"from-slate-500 to-yellow-500",
]

const handleScrollToContact = () => {
const contactSection = document.getElementById("contact");
if (contactSection) {
 // If on the same page, scroll directly
 contactSection.scrollIntoView({ behavior: "smooth" });
} else {
 // If on a different page, navigate to homepage with hash
 router.push("/#contact");
}
};

return (
<div className="relative min-h-screen h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] 2xl:h-[100vh] flex items-center justify-center bg-gray-200 overflow-hidden">
 {/* Background Image Slider */}
 <AnimatePresence mode="wait">
   <motion.div
     key={currentImageIndex}
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     exit={{ opacity: 0 }}
     transition={{ duration: 1 }}
     className="absolute inset-0"
   >
     <Image
       src={images[0].src || "/placeholder.svg"}
       alt={images[0].alt}
       layout="fill"
       objectFit="cover"
       quality={100}
     />
   </motion.div>
 </AnimatePresence>

 {/* Overlay with changing colors */}
 <motion.div
   className={`absolute inset-0 bg-gradient-to-br ${colors[0]} opacity-50`}
   initial={{ opacity: 0 }}
   animate={{ opacity: 0.5 }}
   transition={{ duration: 2 }}
 />

 {/* Black Background Overlay for Text */}
 <motion.div 
   className="absolute z-20 inset-0 bg-slate-700 bg-opacity-70 flex flex-col items-center justify-center text-white text-center p-4"
   initial={{ opacity: 0 }}
   animate={{ opacity: 1 }}
   transition={{ duration: 0.5, delay: 0.2 }}
 >
   {/* Image */}
   <motion.div
     animate={{ y: [-5, 5, -5] }}
     transition={{ duration: 3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
     className="w-full md:w-1/2 flex justify-center z-20"
   >
     <Image
       src="/images/lips.svg"
       width={300}
       height={300}
       alt="screen Image"
       className="max-w-full h-auto mx-auto drop-shadow-2xl"
     />
   </motion.div>

   <div>
     <h1 className="text-3xl md:text-5xl font-bold mb-3">
       סדנאות איפור ותסרוקות
     </h1>
     <h2 className="text-lg md:text-xl">
       בואי ללמוד איך לעשות איפור ותסרוקות כמו מקצועניות
     </h2>
     <Button 
       variant="outline" 
       className="my-4 text-sm md:text-base px-4 py-2"
       onClick={handleScrollToContact}
     >
       הזמינו עכשיו
     </Button>
   </div>
 </motion.div>
 <BubbleAnimation/>
</div>
)
}

export default HeroSection

function BubbleAnimation() {
return (
<div className="absolute inset-0 overflow-hidden pointer-events-none">
 {[...Array(5)].map((_, i) => (
   <motion.div
     key={i}
     className="absolute rounded-full opacity-20"
     style={{
       backgroundColor: "rgba(255, 255, 255, 0.15)",
       width: "200px",
       height: "200px",
       left: Math.random() * 70 + "%",
       bottom: Math.random() * 100 + "%",
     }}
     animate={{
       y: ["100%", "-10%"],
       opacity: [0.3, 0.8, 0.3],
     }}
     transition={{
       duration: Math.random() * 5 + 5,
       repeat: Infinity,
       ease: "easeInOut",
       delay: Math.random() * 3,
     }}
   />
 ))}
</div>
);
}