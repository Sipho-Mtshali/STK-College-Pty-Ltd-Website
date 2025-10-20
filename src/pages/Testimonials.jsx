// src/pages/Testimonials.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiStar, 
  FiUser, 
  FiAward,
  FiMessageSquare
} from 'react-icons/fi';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      course: 'Mathematics Upgrade',
      rating: 5,
      text: 'STK College helped me improve my mathematics grade from 45% to 87%. The teachers are incredibly dedicated and the study materials are comprehensive.',
      image: '/images/testimonials/john.jpg',
      improvement: '+42%'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      course: 'Physical Sciences',
      rating: 5,
      text: 'The science program transformed my understanding of physics and chemistry. I went from failing to achieving 92% in my final exams!',
      image: '/images/testimonials/sarah.jpg',
      improvement: '+35%'
    },
    {
      id: 3,
      name: 'Mike Chen',
      course: 'Software Development',
      rating: 5,
      text: 'The IT course gave me practical skills that landed me a job immediately after completion. The hands-on projects were invaluable.',
      image: '/images/testimonials/mike.jpg',
      improvement: 'Job Ready'
    },
    {
      id: 4,
      name: 'Emily Davis',
      course: 'English & Business Studies',
      rating: 4,
      text: 'The personalized attention and small class sizes made all the difference. I improved my overall average by 28%.',
      image: '/images/testimonials/emily.jpg',
      improvement: '+28%'
    },
    {
      id: 5,
      name: 'David Brown',
      course: 'Computer Networking',
      rating: 5,
      text: 'The networking course provided real-world skills that are directly applicable in the industry. The instructors are industry professionals.',
      image: '/images/testimonials/david.jpg',
      improvement: 'Certified'
    },
    {
      id: 6,
      name: 'Lisa Williams',
      course: 'Multiple Subject Upgrade',
      rating: 5,
      text: 'I upgraded 4 subjects and improved my university entrance score significantly. STK College gave me a second chance at my dreams.',
      image: '/images/testimonials/lisa.jpg',
      improvement: '+31%'
    }
  ];

  const stats = [
    {
      number: '95%',
      label: 'Student Satisfaction'
    },
    {
      number: '400+',
      label: 'Successful Graduates'
    },
    {
      number: '89%',
      label: 'Average Improvement'
    },
    {
      number: '4.8/5',
      label: 'Average Rating'
    }
  ];

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
            Hear from our students about their transformative experiences at STK College
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="card-enhanced rounded-2xl p-6 text-center hover-lift"
            >
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                {stat.number}
              </div>
              <div className="text-white font-medium">
                {stat.label}
              </div>
            </div>
          ))}
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
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-bold">
                  {testimonial.improvement}
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
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <FiUser className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-green-400 text-sm">{testimonial.course}</p>
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
            Ready to Create Your Success Story?
          </h2>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Join hundreds of successful students who have transformed their academic 
            and professional lives with STK College.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-secondary-high-contrast px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105">
              Start Your Journey
            </button>
            <button className="btn-blue-high-contrast px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105">
              Contact Admissions
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;