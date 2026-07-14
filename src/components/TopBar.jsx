import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';

const TopBar = () => {
  return (
    <div className="bg-[#0F2B5B] border-b border-[#F4C542]/20 text-white h-14 flex items-center sticky top-0 z-50">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2">
        {/* Left: Contact Info */}
        <div className="flex flex-wrap items-center gap-4 text-sm md:text-base">
          <a href="mailto:stkcollege@gmail.com" className="flex items-center gap-2 hover:text-[#F4C542] transition-colors">
            <FiMail className="w-5 h-5" />
            <span className="hidden sm:inline">stkcollege@gmail.com</span>
            <span className="sm:hidden">Email</span>
          </a>
          <a href="tel:+27763627488" className="flex items-center gap-2 hover:text-[#F4C542] transition-colors">
            <FiPhone className="w-5 h-5" />
            <span>+27 76 362 7488</span>
          </a>
          <span className="hidden md:flex items-center gap-2 text-gray-300">
            <FiMapPin className="w-5 h-5" />
            <span>511 Griffiths Mxenge Hwy, Durban</span>
          </span>
        </div>

        {/* Right: Social + CTA */}
        <div className="flex items-center gap-4">
          <div className="flex gap-3 text-gray-300">
            <a href="https://www.facebook.com/share/1CCmHaTpaj/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-[#F4C542] transition-colors">
              <FiFacebook className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/stk_college?igsh=dWlpY3pzaTU3ZDly" target="_blank" rel="noopener noreferrer" className="hover:text-[#F4C542] transition-colors">
              <FiInstagram className="w-5 h-5" />
            </a>
          </div>
          <Link
            to="/it-register"
            className="bg-[#F4C542] hover:bg-[#e0b03a] text-[#0F2B5B] font-bold px-5 py-1.5 rounded-md text-sm transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;