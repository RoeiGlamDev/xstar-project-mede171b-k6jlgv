import React from 'react';
import { motion } from 'framer-motion';

interface PricingOption {
  title: string;
  price: string;
  description: string;
  features: string[];
}

const pricingOptions: PricingOption[] = [
  {
    title: 'Gold Package',
    price: '$199',
    description: 'Indulge in our luxurious Gold package, offering premium cosmetic services tailored to enhance your natural beauty.',
    features: ['Facial Treatment', 'Makeup Application', 'Skin Consultation', 'Premium Products']
  },
  {
    title: 'Platinum Package',
    price: '$299',
    description: 'Experience the pinnacle of luxury with our Platinum package, designed for those who desire the very best in cosmetic care.',
    features: ['All Gold Package Features', 'Luxury Spa Experience', 'Personalized Skincare Routine', 'Exclusive Product Samples']
  },
  {
    title: 'Diamond Package',
    price: '$399',
    description: 'Our Diamond package is the ultimate indulgence, providing a comprehensive pampering experience that leaves you feeling radiant.',
    features: ['All Platinum Package Features', 'Private Consultation', 'Custom Makeup Kit', 'VIP Event Styling']
  }
];

const FAQ = [
  {
    question: 'What products do you use?',
    answer: 'We use only the highest quality, luxury cosmetics that are cruelty-free and suitable for all skin types.'
  },
  {
    question: 'How can I book an appointment?',
    answer: 'You can book an appointment directly through our website or contact our customer service for personalized assistance.'
  },
  {
    question: 'Do you offer group discounts?',
    answer: 'Yes, we offer exclusive group discounts for parties and events. Please contact us for more details.'
  }
];

const PricingPage: React.FC = () => {
  return (
    <div className="bg-white text-orange-600 p-8">
      <motion.div 
        className="text-4xl font-bold mb-4" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}>
        Pricing for luxury LRP cosmetics
      </motion.h1>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" 
        initial={{ y: -50 }} 
        animate={{ y: 0 }} 
        transition={{ duration: 0.5 }}>
        {pricingOptions.map(option => (
          <div key={option.title} className="border p-5 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold">{option.title}</h2>
            <p className="text-xl font-bold">{option.price}</p>
            <p className="mb-4">{option.description}</p>
            <h3 className="font-semibold">Features:</h3>
            <ul className="list-disc list-inside">
              {option.features.map(feature => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>

      <motion.div 
        className="text-3xl font-bold mb-4" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}>
        Frequently Asked Questions
      </motion.h2>
      
      <div className="space-y-4">
        {FAQ.map(item => (
          <div key={item.question} className="border-b pb-2">
            <h3 className="font-semibold">{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;