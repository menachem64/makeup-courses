"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const features = [
  { href: "/makeup", title: "קורסי איפור", description: "למדי טכניקות איפור מתקדמות", image: "/images/makeupCourse.webp" },
  { href: "/hairstyling", title: "קורסי סירוק שיער", description: "גלי את סודות הסירוק המקצועי", image: "/images/heirStylingCourse.jpg" },
];

export default function Courses() {
  const router = useRouter()
  
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
            className="relative group overflow-hidden rounded-2xl shadow-lg h-[450px]"
          >
            {/* תמונה */}
            <Image
              src={feature.image}
              alt={feature.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 group-hover:scale-105"
            />
            {/* שכבת טקסט */}
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center p-6 text-white">
              <h3 className="text-3xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-lg mb-4">{feature.description}</p>
                <Button 
                   variant="logo" 
                   className=""
                   onClick={() => router.push(`/articles${feature.href}`)}
                  >
                  מידע נוסף
                </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
