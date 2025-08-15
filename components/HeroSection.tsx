import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-gradient-to-b from-orange-500 to-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/path/to/luxury-background.jpg')] bg-cover bg-center opacity-30"></div>
      <div className="relative z-10 text-center text-white px-6">
        <motion.div
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, translateY: -50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to <span className="text-orange-500">luxury LRP cosmetics</span>
        </motion.h1>
        <motion.div
          className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Discover our exquisite range of high-end cosmetics designed to elevate your beauty regimen with elegance and sophistication.
        </motion.p>
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <a
            href="/products"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
          >
            Shop Now
          </a>
          <a
            href="/about"
            className="border-2 border-white hover:bg-white hover:text-orange-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;