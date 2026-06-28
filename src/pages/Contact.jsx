import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { contactService } from '../firebase/firestoreService';
import { 
  FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiCheckCircle, 
  FiAlertCircle, FiFacebook, FiInstagram, FiLinkedin,
  FiMessageCircle, FiBookOpen, FiBriefcase, FiTarget, FiAward,
  FiArrowRight
} from 'react-icons/fi';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
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
      title: 'Phone & WhatsApp',
      details: [
        'Call or WhatsApp for immediate assistance',
        '+27 76 362 7488 (Primary)',
        '+27 73 578 7190 (Secondary)'
      ],
      action: {
        type: 'whatsapp',
        number: '+27763627488',
        label: 'WhatsApp Now'
      }
    },
    {
      icon: FiMail,
      title: 'Email',
      details: [
        'Send us your questions and inquiries',
        'stkcollege@gmail.com',
        'Response within 24 hours'
      ],
      action: {
        type: 'email',
        address: 'stkcollege@gmail.com',
        label: 'Send Email'
      }
    },
    {
      icon: FiMapPin,
      title: 'Campus Location',
      details: [
        'Visit our campus in Durban',
        '511 Griffiths Mxenge Hwy',
        'Durban, KwaZulu-Natal',
        'South Africa, 4031'
      ],
      action: {
        type: 'map',
        label: 'View on Map'
      }
    },
    {
      icon: FiClock,
      title: 'Office Hours',
      details: [
        'We\'re here to help you',
        'Mon - Fri: 8:00 AM - 17:00 PM',
        'Sat: 9:00 AM - 12:00 PM',
        'Sun: 9:00 AM - 12:00 PM'
      ]
    }
  ];

  const programOptions = [
    { value: 'python-programming', label: 'Python Programming', icon: FiBookOpen },
    { value: 'java-development', label: 'Java Development', icon: FiBookOpen },
    { value: 'web-development', label: 'Web Development', icon: FiBookOpen },
    { value: 'ai-ml-learnership', label: 'AI & ML Learnership', icon: FiTarget },
    { value: 'short-courses', label: 'Short Courses', icon: FiAward },
    { value: 'in-service-training', label: 'In-Service Training', icon: FiBriefcase },
    { value: 'internship', label: 'Internship Programs', icon: FiBriefcase },
    { value: 'ms-office', label: 'Microsoft Office Suite', icon: FiBookOpen },
    { value: 'sql-database', label: 'SQL Database Management', icon: FiBookOpen }
  ];

  const socialLinks = [
    { 
      name: 'Facebook', 
      href: 'https://www.facebook.com/share/1CCmHaTpaj/?mibextid=wwXIfr', 
      icon: FiFacebook, 
      color: 'hover:bg-blue-500 hover:text-white',
      active: true
    },
    { 
      name: 'Instagram', 
      href: '#', 
      icon: FiInstagram, 
      color: 'hover:bg-pink-500 hover:text-white',
      active: false
    },
    { 
      name: 'LinkedIn', 
      href: '#', 
      icon: FiLinkedin, 
      color: 'hover:bg-blue-600 hover:text-white',
      active: false
    }
  ];

  const WhatsAppIcon = () => (
    <svg 
      className="w-5 h-5" 
      fill="currentColor" 
      viewBox="0 0 24 24"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.18-1.24-6.169-3.495-8.424"/>
    </svg>
  );

  return (
    <div className="bg-white text-gray-800">

      {/* ─── HERO ─── */}
      <section className="relative min-h-[45vh] flex items-center overflow-hidden bg-[#0F2B5B]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=80"
            alt="STK College campus"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F2B5B]/90 to-[#0F2B5B]/70"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Get In <span className="text-[#F4C542]">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Ready to start your IT career journey? Contact us today for information about our 
              short courses, learnerships, internships, and in-service training programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── CONTENT ─── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* ── Form ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#F4C542]/20 rounded-lg flex items-center justify-center">
                    <FiMessageCircle className="w-6 h-6 text-[#F4C542]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#0F2B5B]">
                      Send us a Message
                    </h2>
                    <p className="text-gray-600 text-sm">
                      We'll get back to you within 24 hours
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      {...register('name', { 
                        required: 'Name is required',
                        minLength: { value: 2, message: 'Name must be at least 2 characters' }
                      })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F4C542] focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500 flex items-center">
                        <FiAlertCircle className="w-4 h-4 mr-1" />
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
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
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F4C542] focus:border-transparent transition-all duration-200"
                      placeholder="Enter your email address"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500 flex items-center">
                        <FiAlertCircle className="w-4 h-4 mr-1" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      {...register('phone')}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F4C542] focus:border-transparent transition-all duration-200"
                      placeholder="Enter your phone number (optional)"
                    />
                  </div>

                  {/* Program Interest */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Program Interest *
                    </label>
                    <select
                      {...register('program', { required: 'Please select a program' })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#F4C542] focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select a program</option>
                      {programOptions.map((program) => (
                        <option key={program.value} value={program.value}>
                          {program.label}
                        </option>
                      ))}
                      <option value="other">Other Program</option>
                    </select>
                    {errors.program && (
                      <p className="mt-1 text-sm text-red-500">{errors.program.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      rows="5"
                      {...register('message', { 
                        required: 'Message is required',
                        minLength: { value: 10, message: 'Message must be at least 10 characters' }
                      })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F4C542] focus:border-transparent transition-all duration-200 resize-vertical"
                      placeholder="Tell us about your goals and how we can help you..."
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#F4C542] hover:bg-[#e0b03a] text-[#0F2B5B] font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#0F2B5B] mr-2"></div>
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
                      className="flex items-center p-4 bg-green-50 border border-green-200 rounded-lg text-green-700"
                    >
                      <FiCheckCircle className="w-5 h-5 mr-2 text-green-500" />
                      Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center p-4 bg-red-50 border border-red-200 rounded-lg text-red-700"
                    >
                      <FiAlertCircle className="w-5 h-5 mr-2 text-red-500" />
                      Sorry, there was an error sending your message. Please try again or contact us directly.
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* ── Contact Info ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-6"
            >
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#F4C542]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-[#F4C542]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-[#0F2B5B] mb-2">
                          {item.title}
                        </h3>
                        {item.details.map((detail, idx) => (
                          <p
                            key={idx}
                            className={`text-gray-600 ${idx === 0 ? 'text-sm opacity-75 mb-1' : 'font-medium'}`}
                          >
                            {detail}
                          </p>
                        ))}
                        {item.action && (
                          <a
                            href={
                              item.action.type === 'whatsapp' 
                                ? `https://wa.me/${item.action.number}`
                                : item.action.type === 'email'
                                ? `mailto:${item.action.address}`
                                : '#'
                            }
                            target={item.action.type === 'whatsapp' ? '_blank' : undefined}
                            rel={item.action.type === 'whatsapp' ? 'noopener noreferrer' : undefined}
                            className="inline-flex items-center mt-3 text-[#F4C542] hover:text-[#e0b03a] font-semibold text-sm transition-colors"
                          >
                            {item.action.label}
                            <FiArrowRight className="ml-1 w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Commitment Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="bg-white rounded-2xl p-6 shadow-md border border-[#F4C542]/30 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-lg font-bold text-[#0F2B5B] mb-4 flex items-center">
                  <FiCheckCircle className="w-5 h-5 text-[#F4C542] mr-2" />
                  Our Commitment
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="w-4 h-4 text-[#F4C542] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-[#0F2B5B] font-medium">24-Hour Response</p>
                      <p className="text-gray-600 text-sm">We guarantee to respond to all inquiries within one business day</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="w-4 h-4 text-[#F4C542] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-[#0F2B5B] font-medium">Expert Guidance</p>
                      <p className="text-gray-600 text-sm">Get personalized advice from our experienced academic team</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="w-4 h-4 text-[#F4C542] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-[#0F2B5B] font-medium">Flexible Communication</p>
                      <p className="text-gray-600 text-sm">Choose your preferred contact method - call, WhatsApp, or email</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── URGENT ASSISTANCE ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-16 h-16 bg-[#F4C542]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiPhone className="w-8 h-8 text-[#F4C542]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F2B5B] mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              For urgent inquiries about admissions, course availability, or immediate support, 
              contact us directly. We're here to help you start your IT career journey.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+27763627488"
                className="bg-[#F4C542] hover:bg-[#e0b03a] text-[#0F2B5B] font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 flex items-center shadow-md hover:shadow-xl"
              >
                <FiPhone className="w-5 h-5 mr-2" />
                Call: +27 76 362 7488
              </a>
              <a
                href="https://wa.me/27763627488"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 flex items-center shadow-md hover:shadow-xl"
              >
                <WhatsAppIcon />
                <span className="ml-2">WhatsApp Now</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Contact;