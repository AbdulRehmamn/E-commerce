import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    title: "Fall Collection 2025",
    subtitle: "Effortless style for the modern wardrobe",
    buttonText: "Shop Now",
    buttonLink: "/products?category=new-arrivals",
    image: "https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    title: "Premium Essentials",
    subtitle: "Timeless pieces crafted to last",
    buttonText: "Explore",
    buttonLink: "/products?category=essentials",
    image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    title: "The Autumn Edit",
    subtitle: "Curated looks for the season ahead",
    buttonText: "Discover",
    buttonLink: "/products",
    image: "https://images.pexels.com/photos/9558563/pexels-photo-9558563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div
            className="absolute inset-0 w-full h-full bg-black/30"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30" />
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              className="max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                {slide.title}
              </h1>
              <p className="text-xl text-white/90 mb-8">
                {slide.subtitle}
              </p>
              <Link
                to={slide.buttonLink}
                className="inline-block bg-white text-gray-900 px-8 py-4 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                {slide.buttonText}
              </Link>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-8 left-4 md:left-1/2 md:-translate-x-1/2 flex space-x-3">
            {slides.map((s, index) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                } transition-all duration-300`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
