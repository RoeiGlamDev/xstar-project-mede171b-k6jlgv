import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  photoUrl: string;
  rating: number;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sophia Williams',
    photoUrl: '/images/testimonials/sophia.jpg',
    rating: 5,
    review: 'Luxury LRP cosmetics transformed my skin! The quality is unparalleled and I feel radiant every day.',
  },
  {
    name: 'Isabella Johnson',
    photoUrl: '/images/testimonials/isabella.jpg',
    rating: 5,
    review: 'I absolutely love the luxurious feel of the products. They have become a staple in my beauty routine!',
  },
  {
    name: 'Olivia Brown',
    photoUrl: '/images/testimonials/olivia.jpg',
    rating: 4,
    review: 'The packaging is exquisite, and the performance of the cosmetics is top-notch. Highly recommend!',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-600 mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={testimonial.photoUrl} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-orange-600">{testimonial.name}</h3>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={text-yellow-500 ${i < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'}}>★</span>
                ))}
              </div>
              <p className="text-gray-700">{testimonial.review}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;