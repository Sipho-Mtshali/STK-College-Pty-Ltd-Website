import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCode, FiUsers, FiAward, 
  FiBriefcase, FiCheckCircle, FiTrendingUp,
  FiLayers, FiSmartphone, FiGlobe } from 'react-icons/fi';

const Home = () => {
  // Update the services section to:
  const services = [
    {
      icon: FiCode,
      title: 'Short Courses',
      description: '3-6 month intensive programs in Python, Java, SQL, and Microsoft 365'
    },
    {
      icon: FiUsers,
      title: 'In-Service Training',
      description: 'Hands-on C# and MVC.NET training with real-world projects'
    },
    {
      icon: FiBriefcase,
      title: 'Internships',
      description: 'Professional internships in software development and web technologies'
    },
    {
      icon: FiTrendingUp,
      title: 'AI Learnerships',
      description: 'Future learnership programs in Artificial Intelligence and Machine Learning'
    }
  ];

  const developmentServices = [
    {
      icon: FiGlobe,
      title: 'Website Development',
      description: 'Professional websites using HTML, React, and Tailwind CSS'
    },
    {
      icon: FiSmartphone,
      title: 'Mobile Apps',
      description: 'Cross-platform mobile applications with React Native'
    },
    {
      icon: FiLayers,
      title: 'Portfolio Creation',
      description: 'Stunning portfolios to showcase your skills and projects'
    },
    {
      icon: FiAward,
      title: 'Career Services',
      description: 'CV writing, interview prep, and job placement support'
    }
  ];

  const stats = [
    { number: '200+', label: 'Students Trained' },
    { number: '95%', label: 'Success Rate' },
    { number: '50+', label: 'Projects Completed' },
    { number: '12+', label: 'Technologies' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-gray-900 to-blue-800 text-white overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800/20 to-gray-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h1 className="text-4xl md:text-7xl font-bold leading-tight">
                <span className="flex items-center mb-4">
                  <img 
                    src="/images/campus/STKLogo2.png" 
                    alt="STK Logo" 
                    className="w-[95px] h-[95px] mr-6 object-contain"
                  />
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                    STK College
                  </span>
                </span>
                <span className="block text-lg md:text-2xl text-yellow-400 text-center mb-6">
                  Code Your Future With Us
                </span>
                <span className="block text-2xl md:text-4xl mt-4 text-gray-100">
                  Premier IT Training & Development Services
                </span>
              </h1>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed mt-4 max-w-3xl font-medium">
                Transform your career with our comprehensive IT programs, from short courses to professional internships and AI learnerships.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 mt-8">
                <Link
                  to="/courses"
                  className="btn-primary-high-contrast inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <span className="mr-3">Explore Courses</span>
                  <FiArrowRight className="w-6 h-6" />
                </Link>
                <Link
                  to="/services"
                  className="bg-white/10 backdrop-blur-md inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-2xl text-white hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
                >
                  Our Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="card-enhanced backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-white">Why Choose STK Tech?</h3>
                  <ul className="space-y-4">
                    {[
                     'Industry-relevant curriculum',
                     'Hands-on project experience',
                     'Expert instructors with real-world experience',
                     'Career support and job placement',
                     'Flexible learning options',
                     'Latest technologies and tools',
                     'Portfolio development',
                     'Professional certification preparation',
                     'Networking opportunities'
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <FiCheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                        <span className="text-gray-200">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card-enhanced rounded-2xl p-8 text-center card-hover"
              >
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-3">
                  {stat.number}
                </div>
                <div className="text-white text-lg font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Training Programs
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-medium">
              Comprehensive IT training designed to launch and advance your tech career
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card-enhanced rounded-2xl p-8 text-center card-hover group"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Icon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed text-lg font-medium">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Development Services */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Development Services
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto font-medium">
              Professional development services to bring your ideas to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card-enhanced p-6 rounded-xl text-center hover-lift"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-200">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Start Your Tech Journey?
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto font-medium">
              Join successful graduates who have launched their careers in technology with STK College
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/courses"
                className="btn-primary-high-contrast inline-flex items-center justify-center px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-200"
              >
                <FiTrendingUp className="mr-2 w-5 h-5" />
                View All Courses
              </Link>
              <Link
                to="/contact"
                className="btn-secondary-high-contrast inline-flex items-center justify-center px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-200"
              >
                <FiBriefcase className="mr-2 w-5 h-5" />
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;