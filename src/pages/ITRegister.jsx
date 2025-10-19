import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { 
  FiUser, 
  FiMail, 
  FiPhone,  
  FiBookOpen, 
  FiCheckCircle,
  FiAlertCircle,
  FiSend,
  FiCode,
  FiMonitor,
  FiDatabase
} from 'react-icons/fi';

const ITRegister = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const courses = [
    {
      id: 'software-dev',
      name: 'Software Development',
      description: 'Full-stack web and mobile application development',
      icon: FiCode,
      duration: '12 months'
    },
    {
      id: 'networking',
      name: 'Computer Networking',
      description: 'Network administration and security fundamentals',
      icon: FiMonitor,
      duration: '10 months'
    },
    {
      id: 'database',
      name: 'Database Management',
      description: 'Database design, administration, and optimization',
      icon: FiDatabase,
      duration: '8 months'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      description: 'Information security and ethical hacking',
      icon: FiMonitor,
      duration: '14 months'
    }
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Add timestamp
      const registrationData = {
        ...data,
        registrationType: 'it',
        timestamp: new Date().toISOString(),
        status: 'pending'
      };

      // Save to Firebase
      await addDoc(collection(db, 'registrations'), registrationData);
      
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error submitting registration:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            IT Student Registration
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Launch your career in technology with our comprehensive IT courses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Registration Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="card-enhanced rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Student Information
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    <FiUser className="inline w-4 h-4 mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    {...register('fullName', { 
                      required: 'Full name is required',
                      minLength: { value: 2, message: 'Name must be at least 2 characters' }
                    })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                      <FiAlertCircle className="w-4 h-4 mr-1 text-red-500" />
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                {/* Student Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    <FiUser className="inline w-4 h-4 mr-2" />
                    Student Number
                  </label>
                  <input
                    type="text"
                    {...register('studentNumber')}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your student number (if applicable)"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    <FiMail className="inline w-4 h-4 mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                      <FiAlertCircle className="w-4 h-4 mr-1 text-red-500" />
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    <FiPhone className="inline w-4 h-4 mr-2" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    {...register('phone', { 
                      required: 'Phone number is required',
                      pattern: {
                        value: /^[0-9+\-\s()]{10,}$/,
                        message: 'Invalid phone number'
                      }
                    })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                      <FiAlertCircle className="w-4 h-4 mr-1 text-red-500" />
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Course Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    <FiBookOpen className="inline w-4 h-4 mr-2" />
                    Select Course *
                  </label>
                  <div className="space-y-3">
                    {courses.map((course) => {
                      const Icon = course.icon;
                      return (
                        <label key={course.id} className="flex items-start space-x-3 p-4 bg-gray-800 border border-gray-600 rounded-lg hover:bg-gray-700 cursor-pointer transition-all duration-200">
                          <input
                            type="radio"
                            value={course.id}
                            {...register('course', { required: 'Please select a course' })}
                            className="w-4 h-4 text-green-500 border-gray-600 bg-gray-700 focus:ring-green-500 mt-1"
                          />
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <Icon className="w-5 h-5 text-green-400" />
                              <span className="font-semibold text-white">{course.name}</span>
                              <span className="text-sm text-gray-400">({course.duration})</span>
                            </div>
                            <p className="text-sm text-gray-300">{course.description}</p>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                  {errors.course && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                      <FiAlertCircle className="w-4 h-4 mr-1 text-red-500" />
                      {errors.course.message}
                    </p>
                  )}
                </div>

                {/* Previous Experience */}
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Previous IT Experience
                  </label>
                  <textarea
                    {...register('experience')}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="Describe any previous experience with computers, programming, or IT..."
                  />
                </div>

                {/* Goals */}
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Career Goals
                  </label>
                  <textarea
                    {...register('goals')}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="What do you hope to achieve with this course? What are your career aspirations?"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary-high-contrast py-4 px-6 rounded-xl font-bold transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <FiSend className="w-5 h-5 mr-2" />
                      Submit Registration
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-500/20 border border-green-500 rounded-lg p-4 flex items-center"
                  >
                    <FiCheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-green-400">
                      Registration submitted successfully! We'll contact you soon.
                    </span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-500/20 border border-red-500 rounded-lg p-4 flex items-center"
                  >
                    <FiAlertCircle className="w-5 h-5 text-red-400 mr-3" />
                    <span className="text-red-400">
                      Error submitting registration. Please try again.
                    </span>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Course Info */}
            <div className="card-enhanced rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">
                Course Benefits
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FiCheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Industry-Relevant Skills</h4>
                    <p className="text-sm text-gray-300">Learn current technologies and practices</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FiCheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Hands-On Learning</h4>
                    <p className="text-sm text-gray-300">Practical projects and real-world experience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FiCheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Certification</h4>
                    <p className="text-sm text-gray-300">Industry-recognized certificates</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FiCheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Career Support</h4>
                    <p className="text-sm text-gray-300">Job placement assistance and career guidance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Requirements */}
            <div className="card-enhanced rounded-xl p-6 border border-blue-500/30">
              <h3 className="text-xl font-bold text-white mb-4">
                Requirements
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Basic computer literacy</li>
                <li>• Grade 12 certificate (preferred)</li>
                <li>• Access to a computer</li>
                <li>• Internet connection</li>
                <li>• Motivation to learn</li>
              </ul>
            </div>

            {/* Contact Card */}
            <div className="card-enhanced rounded-xl p-6 border border-green-500/30">
              <h3 className="text-xl font-bold text-white mb-4">
                Questions?
              </h3>
              <p className="text-gray-200 mb-4 font-medium">
                Our IT department is here to help you choose the right course.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-gray-300">
                  <strong>Phone:</strong> +27 21 123 4567
                </p>
                <p className="text-sm text-gray-300">
                  <strong>Email:</strong> it@stkeducation.co.za
                </p>
                <p className="text-sm text-gray-300">
                  <strong>Hours:</strong> Mon-Fri 8AM-5PM
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ITRegister;