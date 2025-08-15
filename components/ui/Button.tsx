import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  label: string;
  onClick?: () => void;
}

const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
  tap: { scale: 0.95 }
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', label, onClick }) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-bold focus:outline-none transition-all duration-300 ease-in-out';
  const primaryClasses = 'bg-orange-500 text-white hover:bg-orange-600';
  const secondaryClasses = 'bg-white text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white';
  
  const variantClasses = variant === 'primary' ? primaryClasses : secondaryClasses;

  return (
    <motion.div
      className={`${baseClasses`} ${variantClasses}}
      onClick={onClick}
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      aria-label={label}
    >
      {label}
    </motion.button>
  );
};

export default Button;