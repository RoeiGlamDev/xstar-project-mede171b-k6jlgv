import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSectionProps {
  title: string;
  description: string;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({ title, description }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the email submission (e.g., send to an API)
    setSubmitted(true);
  };

  return (
    <div className="bg-white py-10 px-6 lg:px-20">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-orange-600 mb-4">{title}</h2>
        <p className="text-lg text-gray-700 mb-6">{description}</p>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-lg p-2 mr-2 focus:outline-none focus:border-orange-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <motion.div
              type="submit"
              className="bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 hover:bg-orange-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </form>
        ) : (
          <div className="mt-4 text-lg text-orange-600">
            Thank you for subscribing to luxury LRP cosmetics! Stay tuned for exclusive offers and updates.
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default NewsletterSection;