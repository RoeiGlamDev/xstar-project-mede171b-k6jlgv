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
        description: 'At luxury LRP cosmetics, we source only the finest ingredients from around the world to ensure your skin receives the luxury it deserves.',
        icon: <i className="fas fa-leaf text-orange-500"></i>,
    },
    {
        title: 'Exclusive Formulations',
        description: 'Our exclusive formulations are designed to enhance your beauty while providing luxurious care and nourishment for your skin.',
        icon: <i className="fas fa-flask text-orange-500"></i>,
    },
    {
        title: 'Elegant Packaging',
        description: 'Experience the luxury of our elegantly designed packaging that reflects the high-end nature of our products.',
        icon: <i className="fas fa-box-open text-orange-500"></i>,
    },
    {
        title: 'Luxury Experience',
        description: 'Indulge in a luxury experience with our personalized services tailored to meet your unique beauty needs.',
        icon: <i className="fas fa-gem text-orange-500"></i>,
    },
];

const FeaturesSection: React.FC = () => {
    return (
        <section className="py-20 bg-white" id="features">
            <div className="container mx-auto text-center">
                <motion.div 
                    className="text-4xl font-bold text-orange-500 mb-10"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Discover Our Features
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {features.map((feature, index) => (
                        <motion.div 
                            key={index} 
                            className="bg-orange-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="text-5xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-orange-500">{feature.title}</h3>
                            <p className="text-gray-700">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;