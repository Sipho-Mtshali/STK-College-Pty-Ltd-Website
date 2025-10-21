// src/pages/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { contactService } from '../firebase/firestoreService';
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
      // Save to Firebase using the service
      const result = await contactService.createContact({
        ...data,
        timestamp: new Date().toISOString(),
      });
      
      if (result.success) {
        setSubmitStatus('success');
        reset();
      } else {
        throw new Error(result.error);
      }
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
        '+27 73 578 7190'
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

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    <FiPhone className="inline w-4 h-4 mr-2" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    {...register('phone')}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your phone number (optional)"
                  />
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
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400"
                  >
                    <FiAlertCircle className="w-5 h-5 mr-2" />
                    Sorry, there was an error sending your message. Please try again or contact us directly.
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
                    className="card-enhanced p-6 rounded-xl hover-lift"
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
                            className={`text-gray-200 ${idx === 0 ? 'text-sm opacity-75 mb-1' : ''} ${idx > 0 ? 'font-medium' : ''}`}
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
              className="card-enhanced p-6 rounded-xl hover-lift"
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                Follow Us
              </h3>
              <p className="text-gray-200 mb-4">
                Stay connected with STK College for the latest updates, news, and announcements.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 transition-all duration-200 hover:bg-gray-700 ${social.color} transform hover:scale-110 border border-gray-700`}
                      aria-label={social.name}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Response Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="card-enhanced p-6 rounded-xl border border-blue-500/30 hover-lift"
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <FiClock className="w-5 h-5 text-blue-400 mr-2" />
                Quick Response Guarantee
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <FiCheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Response within 24 hours</p>
                    <p className="text-gray-300 text-sm">We guarantee to respond to all inquiries within one business day</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FiCheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Expert Assistance</p>
                    <p className="text-gray-300 text-sm">Get answers from our experienced academic advisors</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FiCheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Multiple Contact Options</p>
                    <p className="text-gray-300 text-sm">Choose your preferred method of communication</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="card-enhanced p-6 rounded-xl hover-lift"
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                Visit Our Campus
              </h3>
              <p className="text-gray-200 mb-4">
                Come visit us at our campus in Durban. We'd love to show you around and discuss your educational goals.
              </p>
              <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-lg overflow-hidden border border-gray-600">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789012345678!2d31.000000000000004!3d-29.000000000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDAwJzAwLjAiUyAzMcKwMDAnMDAuMCJF!5e0!3m2!1sen!2sza!4v1234567890123!5m2!1sen!2sza"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: '8px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="STK College Location"
                  className="w-full h-64"
                ></iframe>
              </div>
              <div className="mt-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
                <h4 className="text-white font-semibold mb-2">Campus Visit Hours</h4>
                <div className="text-sm text-gray-300 space-y-1">
                  <p><strong>Weekdays:</strong> 8:00 AM - 5:00 PM</p>
                  <p><strong>Weekends:</strong> 9:00 AM - 12:00 PM</p>
                  <p><strong>Holidays:</strong> Please call ahead to confirm</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Emergency Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mt-16 card-enhanced rounded-2xl p-8 border border-yellow-500/30"
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center justify-center">
              <FiPhone className="w-6 h-6 text-yellow-400 mr-2" />
              Need Immediate Assistance?
            </h2>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              For urgent inquiries or immediate support, call our direct line. We're here to help you with any pressing questions about admissions, courses, or support.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+27763627488"
                className="btn-secondary-high-contrast px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 flex items-center hover:scale-105"
              >
                <FiPhone className="w-5 h-5 mr-2" />
                Call Now: +27 76 362 7488
              </a>
              <a
                href="https://wa.me/27763627488"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 flex items-center hover:scale-105"
              >
                <FiMessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;