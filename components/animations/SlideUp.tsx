import React from 'react';
import { motion } from 'framer-motion';

interface SlideUpProps {
  children: React.ReactNode;
  delay?: number;
}

const SlideUp: React.FC<SlideUpProps> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-lg shadow-lg p-6 mb-6 transform transition-transform hover:scale-105"
      role="presentation"
    >
      {children}
    </motion.div>
  );
};

const LuxuryCosmeticsSection: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-orange-100">
      <h2 className="text-4xl font-bold text-center text-orange-600 mb-8">
        Welcome to luxury LRP cosmetics
      </h2>
      <SlideUp>
        <p className="text-lg text-gray-700">
          Discover our exquisite range of high-end cosmetics, designed to elevate your beauty routine. At luxury LRP cosmetics, we believe in the power of luxury and quality, which is why our products are crafted from the finest ingredients.
        </p>
      </SlideUp>
      <SlideUp delay={0.2}>
        <p className="text-lg text-gray-700">
          Indulge in our luxurious lipsticks, velvety foundations, and shimmering highlighters that will enhance your natural beauty. Each product is meticulously designed to provide a flawless finish while ensuring a sensory experience like no other.
        </p>
      </SlideUp>
      <SlideUp delay={0.4}>
        <p className="text-lg text-gray-700">
          Experience the difference with luxury LRP cosmetics—where elegance meets performance. Join us in redefining beauty standards and embrace your unique allure today.
        </p>
      </SlideUp>
    </section>
  );
};

export default LuxuryCosmeticsSection;