// Updated Navbar.jsx - Words Only
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiMenu, 
  FiX, 
  FiChevronDown
} from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'About', 
      href: '/about',
      children: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Staff', href: '/staff' },
        { name: 'Testimonials', href: '/testimonials' }
      ]
    },
    { name: 'Subjects', href: '/subjects' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Results', href: '/results' },
    { name: 'Matric Registration', href: '/matric-register' },
    { name: 'IT Registration', href: '/it-register' },
    { name: 'Contact', href: '/contact' },
  ];

  const isAboutActive = location.pathname === '/about' || location.pathname === '/staff' || location.pathname === '/testimonials';

  return (
    <nav className="bg-gray-900 shadow-lg sticky top-0 z-40 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center overflow-hidden">
                <img 
                  src="/images/campus/STKLogo2.png" 
                  alt="STK College Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="text-white font-bold text-lg hidden sm:block">
                STK College
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              
              if (item.children) {
                return (
                  <div key={item.name} className="relative">
                    <button
                      onClick={() => setIsAboutOpen(!isAboutOpen)}
                      className={`flex items-center space-x-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                        isAboutActive
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'text-gray-300 hover:text-green-400 hover:bg-gray-800'
                      }`}
                    >
                      <span>{item.name}</span>
                      <FiChevronDown className={`w-4 h-4 transition-transform duration-200 ${isAboutOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isAboutOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute left-0 mt-2 w-48 rounded-lg shadow-lg bg-gray-800 ring-1 ring-gray-700 z-50"
                      >
                        <div className="py-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              className={`flex items-center px-4 py-2 text-sm transition-colors duration-200 ${
                                location.pathname === child.href
                                  ? 'bg-blue-600 text-white'
                                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                              }`}
                              onClick={() => setIsAboutOpen(false)}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                );
              }
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-300 hover:text-green-400 hover:bg-gray-800'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-green-400 focus:outline-none focus:text-green-400 transition-colors duration-200"
            >
              {isOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          className="lg:hidden bg-gray-900 border-t border-gray-700"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              
              if (item.children) {
                return (
                  <div key={item.name} className="space-y-1">
                    <div className="px-3 py-2 text-base font-medium text-gray-300">
                      {item.name}
                    </div>
                    <div className="ml-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          onClick={() => setIsOpen(false)}
                          className={`block px-3 py-2 rounded-md text-sm transition-all duration-200 ${
                            location.pathname === child.href
                              ? 'bg-blue-600 text-white'
                              : 'text-gray-300 hover:text-green-400 hover:bg-gray-800'
                          }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-300 hover:text-green-400 hover:bg-gray-800'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;