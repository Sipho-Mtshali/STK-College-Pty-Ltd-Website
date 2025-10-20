// Updated Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiMenu, 
  FiX, 
  FiBookOpen, 
  FiUsers, 
  FiFileText, 
  FiDollarSign, 
  FiInfo, 
  FiPhone,
  FiBook,
  FiChevronDown
} from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: FiBookOpen },
    { 
      name: 'About', 
      href: '/about', 
      icon: FiInfo,
      children: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Staff', href: '/staff' }
      ]
    },
    { name: 'Subjects', href: '/subjects', icon: FiBook },
    { name: 'Matric Reg', href: '/matric-register', icon: FiFileText },
    { name: 'IT Reg', href: '/it-register', icon: FiUsers },
    { name: 'Results', href: '/results', icon: FiFileText },
    { name: 'Pricing', href: '/pricing', icon: FiDollarSign },
    { name: 'Contact', href: '/contact', icon: FiPhone },
  ];

  const isAboutActive = location.pathname === '/about' || location.pathname === '/staff';

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
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="/images/campus/STKLogo.png" 
                  alt="STK College Logo" 
                  className="w-8 h-8 object-contain"
                />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              
              if (item.children) {
                return (
                  <div key={item.name} className="relative">
                    <button
                      onClick={() => setIsAboutOpen(!isAboutOpen)}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                        isAboutActive
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'text-gray-300 hover:text-green-400 hover:bg-gray-800'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
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
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-300 hover:text-green-400 hover:bg-gray-800'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
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
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              
              if (item.children) {
                return (
                  <div key={item.name} className="space-y-1">
                    <div className="flex items-center space-x-2 px-3 py-2 text-base font-medium text-gray-300">
                      <Icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </div>
                    <div className="ml-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm transition-all duration-200 ${
                            location.pathname === child.href
                              ? 'bg-blue-600 text-white'
                              : 'text-gray-300 hover:text-green-400 hover:bg-gray-800'
                          }`}
                        >
                          <span>{child.name}</span>
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
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-300 hover:text-green-400 hover:bg-gray-800'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
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