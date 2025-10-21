// src/pages/Testimonials.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiStar, 
  FiUser, 
  FiAward,
  FiMessageSquare,
  FiTrendingUp,
  FiBookOpen,
  FiCode,
  FiMail
} from 'react-icons/fi';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Lilitha Mhle',
      course: 'Technical Programming',
      rating: 5,
      text: 'I\'m Lilitha Mhle grateful for the guidance and support of my amazing tutor, Sipho Mtshali which helped me achieve a Distinction in Technical Programming. Thank you so much.',
      image: '/images/students/mhle.jpeg',
      status: 'Second year student - Programmer',
      achievement: 'Distinction'
    },
    {
      id: 2,
      name: 'Minenhle Mabuyakhulu',
      course: 'Technical Programming I',
      rating: 4.5,
      text: 'I\'m truly honored to express my gratitude for the incredible help that enabled me to achieve a Distinction in Technical Programming I with flying colors. I deeply appreciate my tutor\'s hard work. Thank you!',
      image: '/images/students/vegy.jpeg',
      status: 'Student - Software Developer',
      achievement: 'Distinction'
    },
    {
      id: 3,
      name: 'Dlamini Akhona',
      course: 'Programming Module',
      rating: 5,
      text: 'Hello Mr Mtshali! I just wanted to say thank you for believing in me. I\'m proud to say that I\'ve passed the module you tutored me in with distinction. Your guidance and support made all the difference!',
      image: '/images/students/Akhona.jpeg',
      status: 'Final year student - Software Engineer',
      achievement: 'Distinction'
    },
    {
      id: 4,
      name: 'Ntombela Minenhle',
      course: 'Programming',
      rating: 5,
      text: 'I am truly grateful for your support and lessons, Mr. Mtshali. Your guidance helped me overcome challenges I thought were impossible, improving from 22% to passing the module with 60%. Thank you so much!"',
      image: '/images/students/minenhle.jpeg',
      status: 'Second year student - Software Developer',
      achievement: 'Pass'
    },
    {
      id: 5,
      name: 'Blessings',
      course: 'SQL Database',
      rating: 5,
      text: 'I want to sincerely thank you for your exceptional guidance in SQL. Your teaching made complex concepts easy to understand, and I feel confident in my ability to work with databases now. Your dedication truly made a difference in my learning journey!',
      image: '/images/students/Blessings.jpeg',
      status: 'Database Student',
      achievement: 'Distinction'
    },
    {
      id: 6,
      name: 'Sibisi Michael',
      course: 'Technical Programming',
      rating: 5,
      text: 'STK College staff, I hope you\'re all doing well. Your contribution in helping us with TP has been invaluable. You\'ve laid a strong foundation for us to grasp more in programming. Keep on supporting other students. We\'re grateful for your efforts. Wishing you all the best!',
      image: '/images/students/sibisi.jpeg',
      status: 'Programming Student',
      achievement: 'Pass'
    },
    {
      id: 7,
      name: 'Mbuyazi Mzamo',
      course: 'Programming',
      rating: 5,
      text: 'Your teaching methods made complex programming concepts easy to understand. The practical approach helped me grasp real-world applications quickly.',
      image: '/images/students/mzamo.jpeg',
      status: 'Programming Student',
      achievement: 'Distinction'
    },
    {
      id: 8,
      name: 'Magingxa Yolisa',
      course: 'Technical Programming',
      rating: 5,
      text: 'I\'m Yolisa Magingxa. Mr. Mtshali\'s dedication and exceptional teaching skills were truly inspiring. His guidance and support helped me excel in the module and boosted my confidence in technical programming and database development.',
      image: '/images/students/Yolisa.jpeg',
      status: 'Software Development Student',
      achievement: 'Distinction'
    }
  ];

  const stats = [
    {
      number: '90%',
      label: 'Pass Rate',
      icon: FiTrendingUp,
      color: 'text-green-400'
    },
    {
      number: '75%',
      label: 'Distinction Rate',
      icon: FiAward,
      color: 'text-yellow-400'
    },
    {
      number: '105+',
      label: 'Successful Students',
      icon: FiUser,
      color: 'text-blue-400'
    },
    {
      number: '4.8/5',
      label: 'Average Rating',
      icon: FiStar,
      color: 'text-purple-400'
    }
  ];

  // Function to get badge color based on achievement
  const getAchievementColor = (achievement) => {
    switch (achievement) {
      case 'Distinction':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Pass':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-green-500/20 text-green-400 border-green-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Student Testimonials
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Hear from our successful students across IT programming and Matric upgrade programs
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="card-enhanced rounded-2xl p-6 text-center hover-lift"
              >
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-white font-medium text-sm">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="card-enhanced rounded-2xl p-6 hover-lift"
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <FiMessageSquare className="w-8 h-8 text-green-400 opacity-50" />
                <span className={`px-3 py-1 rounded-full text-sm font-bold border ${getAchievementColor(testimonial.achievement)}`}>
                  {testimonial.achievement}
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-600'
                    }`}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-200 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Student Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-green-400 text-sm">{testimonial.status}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 card-enhanced rounded-2xl p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Future?
          </h2>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Join hundreds of successful students who have achieved their academic goals through our 
            comprehensive IT programming courses and Matric upgrade programs. Your success story starts here!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/matric-register"
              className="btn-secondary-high-contrast px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <FiBookOpen className="w-5 h-5 mr-2" />
              Matric Registration
            </Link>
            <Link
              to="/it-register"
              className="btn-blue-high-contrast px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <FiCode className="w-5 h-5 mr-2" />
              IT Course Registration
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:bg-white/20 border border-white/20 flex items-center justify-center"
            >
              <FiMail className="w-5 h-5 mr-2" />
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;