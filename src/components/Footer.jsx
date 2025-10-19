import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FiFacebook, 
  FiTwitter, 
  FiInstagram, 
  FiLinkedin, 
  FiMail, 
  FiPhone, 
  FiMapPin,
  FiBookOpen,
  FiUsers,
  FiFileText,
  FiDollarSign,
  FiInfo
} from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/', icon: FiBookOpen },
    { name: 'About Us', href: '/about', icon: FiInfo },
    { name: 'Matric Registration', href: '/matric-register', icon: FiFileText },
    { name: 'IT Registration', href: '/it-register', icon: FiUsers },
    { name: 'Staff', href: '/staff', icon: FiUsers },
    { name: 'Results', href: '/results', icon: FiFileText },
    { name: 'Pricing', href: '/pricing', icon: FiDollarSign },
    { name: 'Contact', href: '/contact', icon: FiFileText },
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: FiFacebook },
    { name: 'Twitter', href: '#', icon: FiTwitter },
    { name: 'Instagram', href: '#', icon: FiInstagram },
    { name: 'LinkedIn', href: '#', icon: FiLinkedin },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">STK</span>
              </div>
              <span className="text-xl font-bold text-white">Education</span>
            </div>
            <p className="text-white text-sm leading-relaxed">
              Empowering students through quality education and innovative learning approaches. 
              Your success is our mission.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.slice(0, 4).map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="flex items-center space-x-2 text-white hover:text-blue-300 transition-colors duration-200 text-sm"
                    >
                      <Icon className="w-4 h-4 text-white" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* More Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">More Links</h3>
            <ul className="space-y-2">
              {quickLinks.slice(4).map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="flex items-center space-x-2 text-white hover:text-blue-300 transition-colors duration-200 text-sm"
                    >
                      <Icon className="w-4 h-4 text-white" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FiMapPin className="w-5 h-5 text-blue-300 mt-0.5" />
                <div>
                  <p className="text-white text-sm">
                    511 Griffiths Mxenge Hwy<br />
                    Durban, KwaZulu-Natal<br />
                    South Africa, 4031
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FiPhone className="w-5 h-5 text-blue-300" />
                <span className="text-white text-sm">+27 76 362 7488</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiMail className="w-5 h-5 text-blue-300" />
                <span className="text-white text-sm">STKCollege@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white text-sm">
              © {currentYear} STK College. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-white hover:text-blue-300 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white hover:text-blue-300 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-white hover:text-blue-300 transition-colors duration-200">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;