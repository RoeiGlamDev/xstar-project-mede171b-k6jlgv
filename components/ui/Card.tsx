import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      style={{
        backdropFilter: ''blur(10px)'',
        backgroundColor: ''rgba(255', 255, 255, 0.8)',
      }}
    >
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <div className="absolute inset-0 bg-orange-500 opacity-30 rounded-lg"></div>
      </div>
      <h3 className="text-xl font-semibold text-orange-600 mt-4">
        {title}
      </h3>
      <p className="text-gray-700 mt-2">
        {description}
      </p>
      <div className="mt-4">
        <button className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-200">
          Shop Now
        </button>
      </div>
    </motion.div>
  );
};

export default Card;