import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Martinez',
    role: 'Founder & CEO',
    description: 'With over a decade of experience in the cosmetics industry, Sophia leads luxury LRP cosmetics with a vision of elegance and sophistication.',
  },
  {
    name: 'Ethan Johnson',
    role: 'Creative Director',
    description: 'Ethan brings innovative design concepts to life, ensuring every product embodies luxury and aesthetic appeal.',
  },
  {
    name: 'Isabella Chen',
    role: 'Head of Product Development',
    description: 'Isabella is dedicated to formulating high-quality, luxurious cosmetics that meet the needs of our discerning clientele.',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white text-orange-600 py-12 px-6">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-center mb-8">Our Story</h2>
        <p className="text-lg text-center mb-6">
          At luxury LRP cosmetics, we believe that beauty should be a celebration of individuality and sophistication. Founded in 2022, our journey began with a passion for creating luxurious cosmetics that empower individuals to express their unique beauty. Our formulations are crafted with the finest ingredients, ensuring that every product delivers an exquisite experience.
        </p>
        <h3 className="text-3xl font-semibold text-center mb-6">Our Mission</h3>
        <p className="text-lg text-center mb-8">
          Our mission at luxury LRP cosmetics is to elevate the cosmetics experience by providing high-quality, luxurious products that inspire confidence and enhance natural beauty. We strive to set new standards in the cosmetics industry with innovation, elegance, and sustainability at the forefront of our efforts.
        </p>
        <h3 className="text-3xl font-semibold text-center mb-6">Meet Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-xl font-bold mb-2">{member.name}</h4>
              <h5 className="text-md font-semibold mb-2">{member.role}</h5>
              <p className="text-sm">{member.description}</p>
            </motion.div>
          ))}
        </div>
        <h3 className="text-3xl font-semibold text-center mt-12 mb-6">Our Values</h3>
        <p className="text-lg text-center mb-6">
          At luxury LRP cosmetics, we are committed to quality, sustainability, and inclusivity. We celebrate diversity and strive to create products that cater to all skin types and tones. Our dedication to excellence drives us to continuously innovate and improve our offerings.
        </p>
        <h3 className="text-3xl font-semibold text-center mb-6">Achievements</h3>
        <p className="text-lg text-center">
          Since our inception, luxury LRP cosmetics has received numerous awards for our product formulations and packaging design, solidifying our position as a leader in the luxury cosmetics market.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;