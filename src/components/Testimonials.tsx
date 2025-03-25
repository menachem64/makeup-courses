import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const testimonials = [
  { id: 1, image: '/images/Feedback/image1.jpeg' },
  { id: 2, image: '/images/Feedback/image2.jpeg' },
  { id: 3, image: '/images/Feedback/image3.jpeg' },
  { id: 4, image: '/images/Feedback/image4.jpeg' },
  { id: 5, image: '/images/Feedback/image5.jpeg' },
  { id: 6, image: '/images/Feedback/image6.jpeg' },
  { id: 7, image: '/images/Feedback/image7.jpeg' },
  { id: 8, image: '/images/Feedback/image1.jpeg' },
  { id: 9, image: '/images/Feedback/image9.jpeg' },
  { id: 10, image: '/images/Feedback/image10.jpeg' },
  { id: 11, image: '/images/Feedback/image11.jpeg' },
  { id: 12, image: '/images/Feedback/image12.jpeg' },
];

export default function Testimonials() {
  const controls = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const getVisibleTestimonials = () => {
    const start = currentIndex % testimonials.length;
    const end = start + 3;
    if (end <= testimonials.length) {
      return testimonials.slice(start, end);
    }
    return [...testimonials.slice(start), ...testimonials.slice(0, end - testimonials.length)];
  };

  useEffect(() => {
    const animate = async () => {
      // Immediate transition without delay
      await controls.start({
        opacity: [1, 0], // Quick fade out
        y: [0, 20],
        transition: { duration: 0.3, ease: 'easeOut' }
      });
      
      setCurrentIndex((prev) => (prev + 3) % testimonials.length);
      
      await controls.start({
        opacity: [0, 1], // Immediate fade in
        y: [20, 0],
        transition: { duration: 0.3, ease: 'easeIn' }
      });
    };

    // Initial animation
    controls.start({ opacity: 1, y: 0 });

    const interval = setInterval(animate, 5000); // Reduced to 5s for better testing, adjust as needed
    return () => clearInterval(interval);
  }, [controls]);

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 px-6 py-16">
      <div className="container mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold mb-12 text-center bg-primary bg-clip-text text-transparent"
        >
          המלצות
        </motion.h1>

        <div className="overflow-hidden">
          <motion.div
            animate={controls}
            initial={{ opacity: 0, y: 20 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 m-2"
          >
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="relative shadow-md bg-white rounded-3xl overflow-hidden h-auto w-auto flex items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-3xl"
              >
                <Image
                  src={testimonial.image}
                  alt="פידבק"
                  width={250}
                  height={250}
                  className="object-cover w-auto h-auto rounded-xl"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}