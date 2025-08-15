import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  name: string;
  price: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Essential Glow Package',
    price: '$99',
    features: [
      'Custom Foundation Matching',
      'Luxury Lip Treatment',
      'Professional Makeup Consultation',
      'Complimentary Skincare Sample',
    ],
  },
  {
    name: 'Signature Radiance Package',
    price: '$199',
    features: [
      'All Essential Glow Package Features',
      'Premium Eye Makeup Application',
      'Luxury Facial Treatment',
      'Personalized Skincare Regimen',
    ],
  },
  {
    name: 'Ultimate Glam Experience',
    price: '$299',
    features: [
      'All Signature Radiance Package Features',
      'Exclusive Makeup Masterclass',
      'VIP Access to New Product Launches',
      'Yearly Skincare Subscription Box',
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-4xl font-bold text-orange-600 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Pricing Plans for luxury LRP cosmetics
        </motion.h2>
        <p className="text-lg text-gray-600 mb-12">
          Discover our luxurious packages designed to enhance your beauty experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className="p-6 border-2 border-orange-600 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-orange-600 mb-4">{tier.name}</h3>
              <p className="text-xl font-bold text-gray-800 mb-4">{tier.price}</p>
              <ul className="list-disc list-inside mb-6">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-600">{feature}</li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-block px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg transition-colors hover:bg-orange-500"
              >
                Select Package
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;