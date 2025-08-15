import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0 }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const fadeInVariants = {
    hidden: { opacity: 0, translateY: 20 },
    visible: { opacity: 1, translateY: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={fadeInVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.6, delay: delay }}
      className="my-8"
    >
      {children}
    </motion.div>
  );
};

const LuxuryLRPCosmetics: React.FC = () => {
  return (
    <div className="bg-white text-orange-600 min-h-screen p-10">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">luxury LRP cosmetics</h1>
        <p className="text-lg mt-4">Elevate Your Beauty with Our Exquisite Range</p>
      </header>

      <FadeIn>
        <section className="flex justify-center items-center">
          <div className="max-w-lg p-6 bg-orange-500 text-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold">Our Signature Collection</h2>
            <p className="mt-4">
              Discover the luxurious textures and vibrant shades of our premium cosmetics, crafted for the discerning individual.
            </p>
            <button className="mt-6 px-4 py-2 bg-white text-orange-600 font-bold rounded hover:bg-orange-300 transition duration-300">
              Shop Now
            </button>
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.2}>
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-center mb-6">Why Choose luxury LRP cosmetics?</h2>
          <ul className="list-disc list-inside text-lg">
            <li>Premium Ingredients for Unmatched Quality</li>
            <li>Innovative Formulations that Enhance Your Natural Beauty</li>
            <li>Luxurious Packaging that Reflects Elegance</li>
            <li>Eco-Friendly Practices for a Sustainable Future</li>
          </ul>
        </section>
      </FadeIn>

      <footer className="mt-12 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} luxury LRP cosmetics. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LuxuryLRPCosmetics;