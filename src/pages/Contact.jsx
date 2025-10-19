import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { 
  FiMapPin, 
  FiPhone, 
  FiMail, 
  FiClock,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiMessageCircle,
  FiUser,
  FiMail as FiMailIcon
} from 'react-icons/fi';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Add timestamp
      const contactData = {
        ...data,
        timestamp: new Date().toISOString(),
        status: 'unread'
      };

      // Save to Firebase
      await addDoc(collection(db, 'contacts'), contactData);
      
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FiPhone,
      title: 'Phone',
      details: [
        'Call us for immediate assistance',
        '+27 76 362 7488',
        '+27 71 578 7280'
      ]
    },
    {
      icon: FiMail,
      title: 'Email',
      details: [
        'Send us your questions',
        'STKCollege@gmail.com'
      ]
    },
    {
      icon: FiMapPin,
      title: 'Location',
      details: [
        'Visit our campus',
        '511 Griffiths Mxenge Hwy',
        'Durban, KwaZulu-Natal',
        'South Africa, 4031'
      ]
    },
    {
      icon: FiClock,
      title: 'Office Hours',
      details: [
        'We\'re here to help',
        'Mon - Fri: 8:00 AM - 17:00 PM',
        'Sat: 9:00 AM - 12:00 PM',
        'Sun: 9:00 AM - 12:00 PM'
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: FiFacebook, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: '#', icon: FiTwitter, color: 'hover:text-blue-300' },
    { name: 'Instagram', href: '#', icon: FiInstagram, color: 'hover:text-pink-400' },
    { name: 'LinkedIn', href: '#', icon: FiLinkedin, color: 'hover:text-blue-400' }
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
            Contact Us
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-medium">
            Get in touch with us. We're here to help you with any questions about our courses, 
            admissions, or support services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="card-enhanced rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    <FiUser className="inline w-4 h-4 mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    {...register('name', { 
                      required: 'Name is required',
                      minLength: { value: 2, message: 'Name must be at least 2 characters' }
                    })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                      <FiAlertCircle className="w-4 h-4 mr-1 text-red-500" />
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    <FiMailIcon className="inline w-4 h-4 mr-2" />
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

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    <FiMessageCircle className="inline w-4 h-4 mr-2" />
                    Subject *
                  </label>
                  <select
                    {...register('subject', { required: 'Please select a subject' })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="matric-registration">Matric Registration</option>
                    <option value="it-training">IT Training & Internships</option>
                    <option value="general-inquiry">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                      <FiAlertCircle className="w-4 h-4 mr-1 text-red-500" />
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    <FiMessageCircle className="inline w-4 h-4 mr-2" />
                    Message *
                  </label>
                  <textarea
                    rows="6"
                    {...register('message', { 
                      required: 'Message is required',
                      minLength: { value: 10, message: 'Message must be at least 10 characters' }
                    })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-vertical"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                      <FiAlertCircle className="w-4 h-4 mr-1 text-red-500" />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary-high-contrast w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400"
                  >
                    <FiCheckCircle className="w-5 h-5 mr-2" />
                    Thank you! Your message has been sent successfully.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400"
                  >
                    <FiAlertCircle className="w-5 h-5 mr-2" />
                    Sorry, there was an error sending your message. Please try again.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="card-enhanced p-6 rounded-xl"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {item.title}
                        </h3>
                        {item.details.map((detail, idx) => (
                          <p
                            key={idx}
                            className={`text-gray-200 ${idx === 0 ? 'text-sm opacity-75' : ''}`}
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="card-enhanced p-6 rounded-xl"
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 transition-all duration-200 hover:bg-gray-700 ${social.color} transform hover:scale-110`}
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="card-enhanced p-6 rounded-xl"
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                Visit Our Campus
              </h3>
              <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789012345678!2d31.000000000000004!3d-29.000000000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDAwJzAwLjAiUyAzMcKwMDAnMDAuMCJF!5e0!3m2!1sen!2sza!4v1234567890123!5m2!1sen!2sza"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: '8px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="STK College Location"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;