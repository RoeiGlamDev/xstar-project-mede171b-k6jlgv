import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  contactReason: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    contactReason: '',
  });
  
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    if (!formData.contactReason) newErrors.contactReason = 'Please select a contact reason';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission (e.g., send to API)
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', message: '', contactReason: '' });
      setErrors({});
    }
  };

  return (
    <section className="bg-white text-orange-500 py-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-8">Contact luxury LRP cosmetics</h2>
        <p className="text-lg text-center mb-4">We would love to hear from you! Please fill out the form below for any inquiries regarding our luxury cosmetics products.</p>
        <form onSubmit={handleSubmit} className="bg-orange-100 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className={w-full p-2 border rounded ${errors.name ? 'border-red-500' : 'border-orange-300'}}
              placeholder="Your Name"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={w-full p-2 border rounded ${errors.email ? 'border-red-500' : 'border-orange-300'}}
              placeholder="Your Email"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="contactReason">Reason for Contact</label>
            <select
              name="contactReason"
              id="contactReason"
              value={formData.contactReason}
              onChange={handleChange}
              className={w-full p-2 border rounded ${errors.contactReason ? 'border-red-500' : 'border-orange-300'}}
            >
              <option value="">Select a reason</option>
              <option value="Product Inquiry">Product Inquiry</option>
              <option value="Order Status">Order Status</option>
              <option value="Feedback">Feedback</option>
              <option value="Other">Other</option>
            </select>
            {errors.contactReason && <p className="text-red-500 text-xs mt-1">{errors.contactReason}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className={w-full p-2 border rounded ${errors.message ? 'border-red-500' : 'border-orange-300'}}
              placeholder="Your Message"
              rows={4}
            />
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-2 rounded hover:bg-orange-600 transition duration-200"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-center">
          <h3 className="text-lg font-bold">luxury LRP cosmetics</h3>
          <p>Location: 123 Luxury St, Elegance City, CA 12345</p>
          <p>Business Hours: Mon-Fri, 9 AM - 5 PM</p>
          <p>Email: contact@luxurylrpcosmetics.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;