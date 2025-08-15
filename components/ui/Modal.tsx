import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, description }) => {return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md">
          <motion.div 
            className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full"
            initial={{ scale: 0}}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-orange-600 mb-4 text-center">
              {title}
            </h2>
            <p className="text-gray-700 mb-6 text-center">
              {description}
            </p>
            <div className="flex justify-center">
              <button 
                onClick={onClose} 
                className="bg-orange-600 text-white px-4 py-2 rounded-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Modal;