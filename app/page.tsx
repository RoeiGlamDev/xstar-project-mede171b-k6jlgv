import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
}

const features: Feature[] = [
  {
    title: 'Premium Ingredients',
    description: 'Our products are formulated with the finest ingredients, ensuring quality and luxury in every application.',
    icon: <span className="text-4xl text-orange-600">💎</span>,
  },
  {
    title: 'Elegant Packaging',
    description: 'Each product is designed with exquisite packaging that embodies the luxury of luxury LRP cosmetics.',
    icon: <span className="text-4xl text-orange-600">📦</span>,
  },
  {
    title: 'Luxurious Experience',
    description: 'Indulge in a sensory experience that transforms your beauty routine into a lavish ritual.',
    icon: <span className="text-4xl text-orange-600">✨</span>,
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      <header className="flex items-center justify-between p-6 bg-orange-600 text-white">
        <h1 className="text-3xl font-bold">luxury LRP cosmetics</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#features" className="hover:underline">Features</a></li>
            <li><a href="#products" className="hover:underline">Products</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero bg-orange-500 text-white h-screen flex items-center justify-center">
        <motion.div
          className="text-5xl font-bold"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to luxury LRP cosmetics
        </motion.h2>
      </section>

      <section id="features" className="py-12 px-4">
        <h2 className="text-4xl font-bold text-center text-orange-600 mb-8">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <footer id="contact" className="bg-orange-600 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} luxury LRP cosmetics. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;