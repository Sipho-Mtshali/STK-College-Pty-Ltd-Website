import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiCode, 
  FiBook, 
  FiCpu, 
  FiGlobe,
  FiAward,
  FiBriefcase
} from 'react-icons/fi';

const SplashScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  // Animated floating icons (educational/tech symbols)
  const floatingIcons = [
    { Icon: FiCode, x: '10%', y: '20%', delay: 0 },
    { Icon: FiBook, x: '85%', y: '15%', delay: 0.3 },
    { Icon: FiCpu, x: '90%', y: '70%', delay: 0.6 },
    { Icon: FiGlobe, x: '5%', y: '80%', delay: 0.9 },
    { Icon: FiAward, x: '50%', y: '5%', delay: 1.2 },
    { Icon: FiBriefcase, x: '70%', y: '90%', delay: 1.5 },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 600);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-[#0F2B5B]"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {/* ─── Animated Background Pattern ─── */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F4C542" strokeWidth="0.5" />
                <circle cx="0" cy="0" r="1" fill="#F4C542" />
              </pattern>
            </defs>
            <rect width="800" height="800" fill="url(#grid)" />
          </svg>
          {/* Additional subtle radial glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#F4C542]/5 rounded-full blur-3xl"></div>
        </div>

        {/* ─── Floating Icons ─── */}
        {floatingIcons.map(({ Icon, x, y, delay }, index) => (
          <motion.div
            key={index}
            className="absolute text-[#F4C542]/20"
            style={{ left: x, top: y }}
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 4 + index * 0.5,
              repeat: Infinity,
              delay: delay,
              ease: 'easeInOut',
            }}
          >
            <Icon className="w-12 h-12 md:w-16 md:h-16" />
          </motion.div>
        ))}

        {/* ─── Central Content ─── */}
        <motion.div
          className="relative z-10 flex flex-col items-center text-center px-6"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          {/* Logo / Brand Mark */}
          <motion.div
            className="mb-6 relative"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex items-center justify-center space-x-4">
              <div className="w-20 h-20 md:w-28 md:h-28 bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center border border-white/20 shadow-2xl">
                <img 
                  src="/images/campus/STKLogo2.png" 
                  alt="STK College" 
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                />
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-none">
                  STK
                </h1>
                <p className="text-lg md:text-xl text-[#F4C542] font-medium tracking-wider uppercase">
                  College
                </p>
              </div>
            </div>
            <motion.div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#F4C542] to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-gray-300 text-sm md:text-base max-w-sm mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Building future tech leaders through innovative IT education and practical training.
          </motion.p>

          {/* Loading Bar Container */}
          <motion.div
            className="w-64 sm:w-80 bg-white/10 rounded-full h-1.5 overflow-hidden backdrop-blur-sm mb-2"
            initial={{ width: 0 }}
            animate={{ width: '20rem' }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-[#F4C542] to-yellow-400 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </motion.div>

          {/* Progress Percentage */}
          <motion.p
            className="text-white/60 text-xs font-mono tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {progress}% · Loading
          </motion.p>

          {/* Animated Dots (more subtle) */}
          <motion.div
            className="flex space-x-2 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-1.5 h-1.5 bg-[#F4C542]/50 rounded-full"
                animate={{
                  scale: [1, 1.6, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* ─── Footer / Copyright ─── */}
        <motion.div
          className="absolute bottom-8 left-0 right-0 text-center text-white/30 text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          © {new Date().getFullYear()} STK College · Shaping the Future
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;