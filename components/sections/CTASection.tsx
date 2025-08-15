import React from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const CTASection: React.FC<CTASectionProps> = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <section className="bg-white p-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-orange-600 mb-4">{title}</h2>
        <p className="text-lg text-gray-700 mb-8">{subtitle}</p>
        <motion.div
          href={buttonLink}
          className="inline-block bg-orange-600 text-white py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {buttonText}
        </motion.a>
      </motion.div>
    </section>
  );
};

export default CTASection;