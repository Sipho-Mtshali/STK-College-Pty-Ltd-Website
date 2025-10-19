import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiTarget, 
  FiEye, 
  FiHeart, 
  FiUsers, 
  FiAward, 
  FiBookOpen,
  FiCheckCircle,
  FiArrowUp
} from 'react-icons/fi';

const About = () => {
  const values = [
    {
      icon: FiTarget,
      title: 'Excellence',
      description: 'We strive for the highest standards in education and student outcomes.'
    },
    {
      icon: FiUsers,
      title: 'Community',
      description: 'Building a supportive learning community where every student thrives.'
    },
    {
      icon: FiHeart,
      title: 'Passion',
      description: 'Our educators are passionate about teaching and student success.'
    },
    {
      icon: FiAward,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our interactions.'
    }
  ];

  const achievements = [
    {
      icon: FiCheckCircle,
      title: '95% Pass Rate',
      description: 'Consistently high matric pass rates over the past 5 years'
    },
    {
      icon: FiUsers,
      title: '500+ Students',
      description: 'Successfully graduated students across various programs'
    },
    {
      icon: FiAward,
      title: '15+ Years',
      description: 'Decades of experience in quality education delivery'
    },
    {
      icon: FiArrowUp,
      title: 'Growing Impact',
      description: 'Expanding our reach and improving student outcomes yearly'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-gray-900 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800/20 to-gray-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold">
              About STK College
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Empowering students through quality education and innovative learning approaches
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="card-enhanced p-8 rounded-xl hover-lift"
            >
              <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
                <FiTarget className="w-8 h-8 text-green-400" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-lg text-gray-200 leading-relaxed">
                To provide accessible, high-quality education that empowers students 
                to reach their full potential. We are committed to creating an 
                inclusive learning environment where every student can thrive 
                academically and personally.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="card-enhanced p-8 rounded-xl hover-lift"
            >
              <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
                <FiEye className="w-8 h-8 text-green-400" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-lg text-gray-200 leading-relaxed">
                To be the leading educational institution that transforms lives 
                through innovative teaching methods, personalized learning experiences, 
                and a commitment to excellence that prepares students for success 
                in the modern world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Story
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto font-medium">
              Founded with a passion for education and a commitment to student success
            </p>
          </motion.div>

            <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-200 text-lg leading-relaxed space-y-6"
            >
              <div className="text-center mb-8">
                <div className="card-enhanced inline-block p-6 rounded-2xl">
                  <img src="/Images/campus/STKLogo.png" alt="STK College Logo" className="w-40 h-40 mx-auto" />
                </div>
              </div>
              
              <p>
                STK College is a specialized educational institution dedicated to helping students upgrade their high school subjects while also providing valuable opportunities for IT students seeking practical experience.
              </p>
              
              <p>
                Our experienced educators work with students to improve their understanding and performance in key subjects like English, Technical Maths, Mathematics, Physics, Life Sciences, Computer, Agriculture, Geography, History, Accounting, Business Studies, and Mathematical Literacy.
              </p>
              
              <p>
                We also offer in-service training and internship opportunities for IT students, providing real-world experience in educational technology, web development, and systems administration.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto font-medium">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card-enhanced p-6 rounded-xl text-center hover-lift"
                >
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-200">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto font-medium">
              Numbers that reflect our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="card-enhanced p-6 rounded-xl text-center hover-lift"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-200">
                    {achievement.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;