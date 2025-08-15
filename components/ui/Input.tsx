import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ label, type, placeholder, value, onChange, required }) => {const [isFocused, setIsFocused] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    setIsFocused(false);
    if (required && !value) {
      setIsError(true);} else {
      setIsError(false);
    }
  };

  return (
    <div className="mb-6">
      <label className={block text-orange-500 text-lg font-semibold mb-2 ${isFocused || value ? 'transform -translate-y-4 scale-75' : ''}}>
        {label}
      </label>
      <motion.div
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={w-full p-3 border-2 rounded-lg transition duration-300 ease-in-out 
          ${isError ? 'border-red-500' : 'border-orange-300'} 
          ${isFocused ? 'border-orange-500 shadow-lg' : 'border-white'} 
          ${isError ? 'bg-red-50' : 'bg-white'} focus:outline-none focus:ring-2 focus:ring-orange-400}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.02 }}
        whileFocus={{ scale: 1.02 }}
      />
      {isError && <p className="mt-1 text-red-500 text-sm">This field is required.</p>}
    </div>
  );
};

export default Input;