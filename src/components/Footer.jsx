import { Link } from 'react-router-dom';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiFacebook, 
  FiTwitter, 
  FiInstagram, 
  FiLinkedin,
  FiArrowUp
} from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Registration', path: '/it-register' },
    { name: 'Contact', path: '/contact' }
  ];

  const programs = [
    { name: 'IT Short course', path: '/it-register' },
    { name: 'Internships', path: '/it-register' },
    { name: 'In-Service Training', path: '/it-register' },
    { name: 'AI Learnership', path: '/it-register' }
  ];

  const contactInfo = [
    { icon: FiPhone, text: '+27 76 362 7488' },
    { icon: FiPhone, text: '+27 73 578 7190' },
    { icon: FiMail, text: 'stkcollege@gmail.com' },
    { icon: FiMapPin, text: '511 Griffiths Mxenge Hwy, Durban, 4031' }
  ];

  const socialLinks = [
    { icon: FiFacebook, href: 'https://www.facebook.com/share/1CCmHaTpaj/?mibextid=wwXIfr', name: 'Facebook', active: true },
    { icon: FiTwitter, href: '#', name: 'Twitter', active: false },
    { icon: FiInstagram, href: 'https://www.instagram.com/stk_college?igsh=dWlpY3pzaTU3ZDly', name: 'Instagram', active: true },
    { icon: FiLinkedin, href: '#', name: 'LinkedIn', active: false }
  ];

  return (
    <footer className="bg-white text-[#0F2B5B] border-t border-gray-100 shadow-[0_-4px_20px_rgba(15,43,91,0.04)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center overflow-hidden w-14 h-14">
                <img 
                  src="/images/campus/STKLogo2.png" 
                  alt="STK Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0F2B5B] tracking-tight">STK College</h3>
                <p className="text-[#F4C542] text-sm font-semibold tracking-wide uppercase">
                  Shape the Future With Us
                </p>
              </div>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm">
              Empowering careers through quality IT education, professional training, and industry-relevant skills development. 
              Your tech career success is our mission.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      social.active
                        ? 'bg-[#0F2B5B] text-white hover:bg-[#F4C542] hover:text-[#0F2B5B] shadow-sm hover:shadow-md transform hover:-translate-y-0.5'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed opacity-50'
                    }`}
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    {...(!social.active && { onClick: (e) => e.preventDefault() })}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-[#0F2B5B] uppercase tracking-wider mb-5 relative">
              Quick Links
              <span className="block w-8 h-0.5 bg-[#F4C542] mt-2"></span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-[#F4C542] transition-colors duration-200 flex items-center group text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F4C542] mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-sm font-bold text-[#0F2B5B] uppercase tracking-wider mb-5 relative">
              Programs
              <span className="block w-8 h-0.5 bg-[#F4C542] mt-2"></span>
            </h4>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <Link
                    to={program.path}
                    className="text-gray-600 hover:text-[#F4C542] transition-colors duration-200 flex items-center group text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F4C542] mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold text-[#0F2B5B] uppercase tracking-wider mb-5 relative">
              Contact Info
              <span className="block w-8 h-0.5 bg-[#F4C542] mt-2"></span>
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <li key={index} className="flex items-start space-x-3 text-sm">
                    <Icon className="w-5 h-5 text-[#F4C542] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{contact.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm text-center md:text-left">
            <p>
              STK College is a registered CIPC, preparing for QCTO accreditation and future MICT SETA funding opportunities. 
              Current student numbers and program details are for demonstration purposes as we build toward full operation.
            </p>
            <p className="mt-2">
              &copy; {currentYear} STK College (Pty) Ltd. All rights reserved.
            </p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-[#0F2B5B] text-white hover:bg-[#F4C542] hover:text-[#0F2B5B] transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-xl transform hover:-translate-y-0.5"
            aria-label="Scroll to top"
          >
            <FiArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;