"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface CyclingImageProps {
    images: string[];
    alt: string;
  }
  
  export default function CyclingImage({ images, alt }: CyclingImageProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % images.length
        )
      }, 3000)
  
      return () => clearInterval(interval)
    }, [images.length])
  
    return (
      <Image
        src={images[currentImageIndex]}
        alt={alt}
        width={300}
        height={300}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
    )
  }
  