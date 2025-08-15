import React from 'react';
import { motion } from 'framer-motion';

interface ContactFormProps {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="bg-white text-orange-600 p-8 md:p-16">
      <motion.div
        className="text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact luxury LRP cosmetics
      </motion.h1>

      <motion.div
        className="bg-orange-100 p-8 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <label className="block mb-4">
          <span className="font-medium">Name</span>
          <input
            type="text"
            required
            className="mt-1 block w-full border border-orange-300 rounded-md p-2"
            placeholder="Your Name"
          />
        </label>

        <label className="block mb-4">
          <span className="font-medium">Email</span>
          <input
            type="email"
            required
            className="mt-1 block w-full border border-orange-300 rounded-md p-2"
            placeholder="Your Email"
          />
        </label>

        <label className="block mb-4">
          <span className="font-medium">Message</span>
          <textarea
            required
            className="mt-1 block w-full border border-orange-300 rounded-md p-2"
            placeholder="Your Message"
            rows={4}
          />
        </label>

        <button
          type="submit"
          className="w-full bg-orange-600 text-white font-bold py-2 rounded-md hover:bg-orange-500 transition duration-300"
        >
          Send Message
        </button>
      </motion.form>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold">Visit Us</h2>
        <p className="mt-2">123 Luxury Lane, Glamour City, CA 90210</p>
        <p className="mt-2">Business Hours: Mon - Fri, 9 AM - 6 PM</p>
      </motion.div>
    </div>
  );
};

export default ContactPage;