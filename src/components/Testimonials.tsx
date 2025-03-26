'use client';

import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useMedia } from 'react-use';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const isMobile = useMedia('(max-width: 1024px)', false);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: isMobile ? 'center' : 'start',
    loop: true,
    direction: 'rtl',
    slidesToScroll: 1,
    containScroll: 'trimSnaps',
    duration: 30,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  useEffect(() => {
    const interval = setInterval(() => {
      emblaApi?.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  const testimonials = [
    { id: 1, image: '/images/Feedback/image1.jpeg' },
    { id: 2, image: '/images/Feedback/image2.jpeg' },
    { id: 3, image: '/images/Feedback/image3.jpeg' },
    { id: 4, image: '/images/Feedback/image4.jpeg' },
    { id: 5, image: '/images/Feedback/image5.jpeg' },
    { id: 6, image: '/images/Feedback/image6.jpeg' },
    { id: 7, image: '/images/Feedback/image7.jpeg' },
    { id: 8, image: '/images/Feedback/image8.jpeg' },
    { id: 9, image: '/images/Feedback/image9.jpeg' },
    { id: 10, image: '/images/Feedback/image10.jpeg' },
    { id: 11, image: '/images/Feedback/image11.jpeg' },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-200 text-gray-900 px-6 py-16">
      <div className="container mx-auto relative">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-12 text-center bg-primary bg-clip-text text-transparent drop-shadow-md">
          המלצות
        </h1>
        <div className="relative px-4">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6 px-4">
              {testimonials.map((item) => (
                <TestimonialsCard key={item.id} {...item} />
              ))}
            </div>
          </div>
          {/* <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-1.5 rounded transition-all duration-300 ${
                  selectedIndex === index
                    ? 'w-8 bg-primary'
                    : 'w-4 bg-gray-400 opacity-70'
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div> */}

          {!isMobile && (
            <>
              <button
                onClick={() => emblaApi?.scrollPrev()}
                className="absolute top-1/2 right-4 -translate-y-1/2 z-10 p-3 bg-primary text-white shadow-lg rounded-full transition-all duration-300 hover:scale-110 focus:outline-none"
              >
                <ChevronRight size={24} />
              </button>
              <button
                onClick={() => emblaApi?.scrollNext()}
                className="absolute top-1/2 left-4 -translate-y-1/2 z-10 p-3 bg-primary text-white shadow-lg rounded-full transition-all duration-300 hover:scale-110 focus:outline-none"
              >
                <ChevronLeft size={24} />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

interface TestimonialsCardProps {
  image: string;
}

function TestimonialsCard({ image }: TestimonialsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative flex-[0_0_90%] sm:flex-[0_0_45%] md:flex-[0_0_30%] lg:flex-[0_0_23%] p-2"
    >
      <div className="relative overflow-hidden rounded-xl shadow-xl bg-white transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <Image
          src={image}
          alt="testimonial"
          width={300}
          height={500}
          className="rounded-xl object-cover"
        />
      </div>
    </motion.div>
  );
}