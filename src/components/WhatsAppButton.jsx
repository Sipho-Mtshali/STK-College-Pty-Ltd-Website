import React from 'react';
import { motion } from 'framer-motion';
import { FiMessageCircle } from 'react-icons/fi';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/27763627488"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-colors duration-200"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      title="Chat with us on WhatsApp"
    >
      <FiMessageCircle className="w-6 h-6" />
      <span className="sr-only">WhatsApp</span>
    </motion.a>
  );
};

export default WhatsAppButton;
