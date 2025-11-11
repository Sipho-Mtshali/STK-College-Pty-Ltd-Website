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
    { icon: FiFacebook, href: 'https://www.facebook.com/share/1CCmHaTpaj/?mibextid=wwXIfr', name: 'Facebook' },
    { icon: FiTwitter, href: '#', name: 'Twitter' },
    { icon: FiInstagram, href: '#', name: 'Instagram' },
    { icon: FiLinkedin, href: '#', name: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden border-t border-gray-700">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center">
                <img src="/images/campus/STKLogo2.png" alt="STK Logo" className="w-12 h-12" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">STK College</h3>
                <p className="text-green-400 text-sm font-medium">Shape the Future With Us</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering careers through quality IT education, professional training, and industry-relevant skills development. 
              Your tech career success is our mission.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-green-500 hover:text-white transition-all duration-200 transform hover:scale-110 border border-gray-700 ${social.name !== 'Facebook' ? 'pointer-events-none opacity-50' : ''}`}
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Programs</h3>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <Link
                    to={program.path}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Info</h3>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <li key={index} className="flex items-start space-x-3">
                    <Icon className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{contact.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 mb-4 md:mb-0">
            <p>STK College is a registered CIPC and NPO initiative, preparing for DHET accreditation. Some info is for planning purposes only.
            <br></br>&copy; {currentYear} STK College (Pty) Ltd. All rights reserved.</p>
          </div>
          
          <div className="flex items-center space-x-6">
            {/*<Link to="/privacy" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm">
              Terms of Service
            </Link>*/}
            <button
              onClick={scrollToTop}
              className="btn-primary-high-contrast w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:shadow-lg"
              aria-label="Scroll to top"
            >
              <FiArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;