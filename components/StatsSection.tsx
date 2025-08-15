import React from 'react';
import { motion } from 'framer-motion';

interface StatsProps {
  achievements: {
    label: string;
    value: number;
  }[];
}

const StatsSection: React.FC<StatsProps> = ({ achievements }) => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-600 mb-8">
          Our Achievements at Luxury LRP Cosmetics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.div className="text-3xl font-semibold text-orange-600">
                {achievement.value}
              </motion.h3>
              <p className="text-lg text-gray-600">{achievement.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;