import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  logo: string;
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <motion.div
          className="text-orange-500 font-bold text-2xl cursor-pointer"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <img src={logo} alt="luxury LRP cosmetics logo" className="h-10" />
        </motion.div>
        <nav className="hidden md:flex space-x-8">
          <motion.div
            href="#home"
            className="text-gray-800 hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Home
          </motion.a>
          <motion.div
            href="#about"
            className="text-gray-800 hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            About Us
          </motion.a>
          <motion.div
            href="#products"
            className="text-gray-800 hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Our Products
          </motion.a>
          <motion.div
            href="#contact"
            className="text-gray-800 hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.a>
        </nav>
        <button
          className="md:hidden text-orange-500 focus:outline-none"
          onClick={handleToggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white shadow-lg"
          initial={{ height: 0}}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col p-4">
            <motion.div
              href="#home"
              className="py-2 text-gray-800 hover:text-orange-500 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Home
            </motion.a>
            <motion.div
              href="#about"
              className="py-2 text-gray-800 hover:text-orange-500 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              About Us
            </motion.a>
            <motion.div
              href="#products"
              className="py-2 text-gray-800 hover:text-orange-500 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Our Products
            </motion.a>
            <motion.div
              href="#contact"
              className="py-2 text-gray-800 hover:text-orange-500 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Contact
            </motion.a>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;