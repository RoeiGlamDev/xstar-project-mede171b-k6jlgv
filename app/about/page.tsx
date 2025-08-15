import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Turner',
    position: 'Founder & CEO',
    bio: 'With over a decade of experience in the cosmetics industry, Sophia is dedicated to creating luxurious products that empower individuals.',
    image: '/images/sophia.jpg',
  },
  {
    name: 'James Carter',
    position: 'Chief Marketing Officer',
    bio: 'James brings a wealth of marketing expertise, ensuring that luxury LRP cosmetics reaches beauty enthusiasts around the globe.',
    image: '/images/james.jpg',
  },
  {
    name: 'Emma Li',
    position: 'Product Development Lead',
    bio: 'Emma oversees product innovation, combining the latest trends with high-quality ingredients to create exceptional cosmetics.',
    image: '/images/emma.jpg',
  },
];

const About: React.FC = () => {
  return (
    <div className="bg-white text-orange-600 px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-8">About luxury LRP cosmetics</h1>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our History</h2>
          <p className="text-lg leading-relaxed">
            Founded in 2020, luxury LRP cosmetics emerged from a passion for providing high-end beauty products that blend elegance and efficacy. Our mission is to elevate the beauty experience for our customers by offering a curated selection of luxurious cosmetics that embody sophistication and quality.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-lg leading-relaxed">
            <li>Quality: We prioritize the highest quality ingredients and craftsmanship in all our products.</li>
            <li>Innovation: We continuously seek to innovate and improve our offerings to meet the evolving needs of our customers.</li>
            <li>Empowerment: We believe in empowering individuals to express their unique beauty through our luxurious cosmetics.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                className="bg-orange-100 rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img src={member.image} alt={member.name} className="rounded-full w-24 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-center">{member.name}</h3>
                <p className="text-lg text-center italic">{member.position}</p>
                <p className="text-md leading-relaxed text-center mt-2">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default About;