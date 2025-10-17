import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiCheck, 
  FiX, 
  FiStar, 
  FiUsers, 
  FiBookOpen,
  FiClock,
  FiAward,
  FiDollarSign,
  FiArrowRight,
  FiInfo
} from 'react-icons/fi';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly'); // monthly or yearly

  const matricPricing = [
    {
      name: 'Registration Fee',
      price: { monthly: 2000, yearly: 2000 },
      originalPrice: { monthly: 2000, yearly: 2000 },
      description: 'One-time registration fee to secure your spot',
      features: [
        'Subject selection',
        'Initial assessment',
        'Study materials included',
        'Access to platform',
        'Student support'
      ],
      popular: false
    },
    {
      name: 'Complete Programme',
      price: { monthly: 6700, yearly: 6700 },
      originalPrice: { monthly: 6700, yearly: 6700 },
      description: 'Full programme cost for comprehensive support',
      features: [
        'All subjects available',
        'Expert tutoring',
        'Comprehensive materials',
        'Practice tests',
        'Exam preparation',
        'Progress tracking',
        'Certificate upon completion'
      ],
      popular: true
    },
    {
      name: 'Monthly Payment',
      price: { monthly: 700, yearly: 700 },
      originalPrice: { monthly: 700, yearly: 700 },
      description: 'Per month after registration fee',
      features: [
        'Flexible payment plan',
        'No additional interest',
        'Monthly progress reviews',
        'Continuous support',
        'Easy payment methods'
      ],
      popular: false
    }
  ];

  const itPricing = [
    {
      name: 'Software Development',
      duration: '12 months',
      price: 15000,
      originalPrice: 18000,
      description: 'Full-stack web and mobile development',
      features: [
        'HTML, CSS, JavaScript',
        'React and Node.js',
        'Database management',
        'Mobile app development',
        'Project portfolio',
        'Industry certification',
        'Job placement support'
      ],
      popular: true
    },
    {
      name: 'Computer Networking',
      duration: '10 months',
      price: 12000,
      originalPrice: 15000,
      description: 'Network administration and security',
      features: [
        'Network fundamentals',
        'Security protocols',
        'Cisco certification prep',
        'Practical labs',
        'Industry certification',
        'Job placement support'
      ],
      popular: false
    },
    {
      name: 'Database Management',
      duration: '8 months',
      price: 10000,
      originalPrice: 12000,
      description: 'Database design and administration',
      features: [
        'SQL fundamentals',
        'Database design',
        'Performance optimization',
        'Data security',
        'Industry certification',
        'Job placement support'
      ],
      popular: false
    },
    {
      name: 'Cybersecurity',
      duration: '14 months',
      price: 18000,
      originalPrice: 22000,
      description: 'Information security and ethical hacking',
      features: [
        'Security fundamentals',
        'Ethical hacking',
        'Risk assessment',
        'Incident response',
        'Industry certification',
        'Job placement support'
      ],
      popular: false
    }
  ];

  const features = [
    {
      icon: FiUsers,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with years of experience'
    },
    {
      icon: FiBookOpen,
      title: 'Comprehensive Materials',
      description: 'All study materials and resources included in the price'
    },
    {
      icon: FiClock,
      title: 'Flexible Schedule',
      description: 'Choose from various time slots that fit your schedule'
    },
    {
      icon: FiAward,
      title: 'Certification',
      description: 'Receive industry-recognized certificates upon completion'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pricing & Fees
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Affordable education that delivers exceptional value. Choose the plan that works best for your goals.
          </p>
          
          {/* Billing Toggle for Matric */}
          <div className="flex items-center justify-center space-x-4 bg-white rounded-lg p-1 shadow-lg inline-flex">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md font-medium transition-colors duration-200 ${
                billingCycle === 'monthly'
                  ? 'bg-primary text-white'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-md font-medium transition-colors duration-200 ${
                billingCycle === 'yearly'
                  ? 'bg-primary text-white'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              Yearly
              <span className="ml-2 bg-secondary text-primary text-xs px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </motion.div>

        {/* Matric Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Matric Upgrade Courses
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Flexible payment options for matric subject upgrades. All prices include study materials and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {matricPricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white rounded-xl shadow-lg p-8 ${
                  plan.popular ? 'ring-2 ring-primary transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {plan.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary">
                      R{plan.price[billingCycle]}
                    </span>
                    <span className="text-gray-600 ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 line-through">
                    R{plan.originalPrice[billingCycle]}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <FiCheck className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/matric-register"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                    plan.popular
                      ? 'bg-primary text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Choose Plan
                  <FiArrowRight className="inline w-5 h-5 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* IT Course Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              IT Professional Courses
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive IT courses designed to launch your career in technology. 
              One-time payment with lifetime access to course materials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {itPricing.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white rounded-xl shadow-lg p-6 ${
                  course.popular ? 'ring-2 ring-primary transform scale-105' : ''
                }`}
              >
                {course.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {course.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {course.description}
                  </p>
                  <div className="text-sm text-gray-500 mb-4">
                    Duration: {course.duration}
                  </div>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-primary">
                      R{course.price}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 line-through">
                    R{course.originalPrice}
                  </div>
                </div>

                <ul className="space-y-2 mb-6 text-sm">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <FiCheck className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/it-register"
                  className={`w-full block text-center py-3 px-4 rounded-lg font-semibold text-sm transition-colors duration-200 ${
                    course.popular
                      ? 'bg-primary text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Enroll Now
                  <FiArrowRight className="inline w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Payment Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Payment Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiDollarSign className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Flexible Payment
              </h3>
              <p className="text-gray-600 text-sm">
                Pay monthly or yearly for matric courses. IT courses offer one-time payment with installment options.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiInfo className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No Hidden Fees
              </h3>
              <p className="text-gray-600 text-sm">
                All prices include study materials, resources, and support. No additional charges or surprise fees.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiAward className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Money-Back Guarantee
              </h3>
              <p className="text-gray-600 text-sm">
                30-day money-back guarantee if you're not satisfied with the quality of education.
              </p>
            </div>
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-primary text-white rounded-xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">
            Questions About Pricing?
          </h2>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            Our team is here to help you choose the right course and payment plan for your needs. 
            Contact us for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-secondary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200"
            >
              Contact Us
            </Link>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-200">
              Schedule Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
