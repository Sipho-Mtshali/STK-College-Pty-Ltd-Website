import { FiMail } from 'react-icons/fi';
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiArrowRight, 
  FiBookOpen, 
  FiUsers, 
  FiAward, 
  FiTarget,
  FiCheckCircle,
  FiArrowUp
} from 'react-icons/fi';

const Home = () => {
  const features = [
    {
      icon: FiCheckCircle,
      title: 'Register',
      description: 'Pay R2,000 registration fee and choose your subjects. Quick and easy enrollment process for matric upgrades.'
    },
    {
      icon: FiBookOpen,
      title: 'Study',
      description: 'Get expert tutoring and comprehensive study materials for your chosen subjects.'
    },
    {
      icon: FiAward,
      title: 'Upgrade',
      description: 'Improve your marks and open doors to better opportunities and career prospects.'
    }
  ];

  const itFeatures = [
    {
      icon: FiUsers,
      title: 'In-Service Training',
      description: 'Are you studying IT and need in-service training? We welcome IT students seeking practical experience in web, systems, and platform development.'
    },
    {
      icon: FiTarget,
      title: 'Internships',
      description: 'Gain hands-on experience by joining our internship program where you can apply your knowledge in real educational projects.'
    },
    {
      icon: FiMail,
      title: 'Apply',
      description: 'Use our Contact page to express interest in in-service or internship opportunities. Upload your CV and specify your focus area.'
    }
  ];

  const stats = [
    { number: '90%', label: 'Pass Rate' },
    { number: '400+', label: 'Students' },
    { number: '2', label: 'Years Experience' },
    { number: '10+', label: 'Subjects Offered' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-gray-900 to-blue-800 text-white overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800/20 to-gray-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
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
                  <div className="w-[95px] h-[95px] bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg overflow-hidden">
                    <img src="/images/campus/STKLogo2.png" alt="STK Logo" className="w-full h-full object-cover"/>
                  </div>
                  <span className="bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
                    STK College
                  </span>
                </span>

                {/* Centered slogan */}
                <span className="block text-lg md:text-2xl text-yellow-400 text-center mb-6">
                  Shape the Future With Us
                </span>

                {/* Slightly smaller main tagline */}
                <span className="block text-2xl md:text-4xl mt-4 text-gray-100">
                  Upgrade Your High School Subjects & IT Opportunities
                </span>
              </h1>

              {/* Smaller descriptive paragraph */}
              <p className="text-base md:text-lg text-gray-300 leading-relaxed mt-6 max-w-3xl font-medium">
                Get a second chance to improve your high school results and unlock better opportunities for your future. 
                We also welcome IT students seeking practical experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 mt-8">
              <Link
                to="/matric-register"
                className="btn-secondary-high-contrast inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="mr-3">Register Now</span>
                <FiArrowRight className="w-6 h-6" />
              </Link>
              <Link
                to="/about"
                className="bg-white/10 backdrop-blur-md inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-2xl text-white hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
              >
                Learn More
              </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="card-enhanced backdrop-blur-sm rounded-2xl p-8 border border-green-500/20">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-white">Why Choose STK?</h3>
                  <ul className="space-y-4">
                    {[
                      'Expert teachers with years of experience',
                      'Small class sizes for personalized attention',
                      'Modern facilities and learning resources',
                      'Flexible scheduling options',
                      'Proven track record of success'
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
                <div className="text-4xl md:text-5xl font-bold text-green-400 mb-3">
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

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose STK College?
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-medium">
              Our proven process helps students upgrade their results and achieve their academic goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card-enhanced rounded-2xl p-8 text-center card-hover group"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Icon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed text-lg font-medium">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IT Opportunities Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Opportunities for IT Students
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto font-medium">
              Join our comprehensive IT training program with hands-on experience and internship opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {itFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card-enhanced p-6 rounded-xl text-center hover-lift"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                  </div>
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-200">
                    {feature.description}
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto font-medium">
              Join hundreds of successful students who have achieved their goals 
              with STK College. Your future starts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/matric-register"
                className="btn-secondary-high-contrast inline-flex items-center justify-center px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-200"
              >
                <FiArrowUp className="mr-2 w-5 h-5" />
                Matric Registration
              </Link>
              <Link
                to="/it-register"
                className="btn-blue-high-contrast inline-flex items-center justify-center px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-200"
              >
                <FiBookOpen className="mr-2 w-5 h-5" />
                IT Course Registration
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;