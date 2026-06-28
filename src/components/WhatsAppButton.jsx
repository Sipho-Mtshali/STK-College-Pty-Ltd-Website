import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageCircle } from 'react-icons/fi';

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
      {/* Tooltip / Badge (appears on hover) */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="mb-3 px-4 py-2 bg-[#0F2B5B] text-white text-sm font-medium rounded-lg shadow-lg border border-white/10"
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <span className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>Chat with us on WhatsApp</span>
            </span>
            {/* Small triangle */}
            <div className="absolute -bottom-1.5 right-4 w-3 h-3 bg-[#0F2B5B] rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main WhatsApp Button */}
      <motion.a
        href="https://wa.me/27763627488"
        target="_blank"
        rel="noopener noreferrer"
        className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center group"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 300, damping: 20 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat with us on WhatsApp"
      >
        <FiMessageCircle className="w-7 h-7" />
        
        {/* Subtle notification pulse ring */}
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white animate-pulse ring-2 ring-white/50">
          1
        </span>

        {/* Outer ring animation */}
        <span className="absolute inset-0 rounded-full border-2 border-green-400/30 animate-ping"></span>
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;