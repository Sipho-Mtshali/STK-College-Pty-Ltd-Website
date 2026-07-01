import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { registrationService } from '../firebase/firestoreService';
import { 
  FiUser, FiMail, FiPhone, FiCheckCircle, FiAlertCircle, FiSend, 
  FiCode, FiAward, FiBriefcase, FiFileText, FiPlay, FiTarget,
  FiAward as FiCertificate, FiDollarSign, FiClock, FiArrowRight,
  FiMapPin, FiCalendar, FiUserCheck, FiHome, FiGlobe, FiInfo
} from 'react-icons/fi';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import { organizationSchema, breadcrumbSchema } from '../data/schema';

const ITRegister = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState({
    cv: null,
    transcript: null,
    idCopy: null
  });
  
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();

  const programType = watch('programType');
  const isInternship = programType === 'in-service training-internship' || programType === 'internship-only';
  const isShortCourse = programType === 'short-course';
  const isLearnership = programType === 'learnership';

  const educationLevels = [
    'Select Education Level',
    'Matric Certificate',
    'Diploma',
    'Bachelor\'s Degree',
    'Post Graduate',
    'Other',
    'No Formal Qualification'
  ];

  const experienceLevels = [
    'Select Experience Level',
    'Beginner (No experience)',
    'Intermediate (Some programming knowledge)',
    'Advanced (Experienced programmer)'
  ];

  const programTypes = [
    {
      value: 'short-course',
      label: 'Short Course Registration',
      description: 'Register for individual IT and digital skills modules',
      icon: '📚',
      color: 'yellow'
    },
    {
      value: 'learnership',
      label: 'AI & Tech Learnership (Planned)',
      description: 'Structured learnership pathway aligned to future MICT SETA opportunities',
      icon: '🤖',
      color: 'purple'
    },
    {
      value: 'in-service training-internship',
      label: 'In-Service Training & Internship',
      description: 'Classroom training followed by workplace exposure opportunities',
      icon: '💼',
      color: 'blue'
    }
  ];

  const itCourses = [
    {
      id: 'python',
      name: 'Python Programming',
      category: 'Programming',
      price: 'R3,500',
      duration: '12 Weeks',
      level: 'Beginner to Intermediate',
      funding: {
        available: false,
        planned: true,
        description: 'Future funding opportunities planned'
      },
      popular: true
    },
    {
      id: 'java',
      name: 'Java Development',
      category: 'Programming',
      price: 'R3,800',
      duration: '12 Weeks',
      level: 'Intermediate',
      funding: null,
      popular: false
    },
    {
      id: 'word',
      name: 'Microsoft Word (Beginner - Intermediate)',
      category: 'Microsoft Office',
      price: 'R1,200',
      duration: '6 Weeks',
      level: 'Beginner to Intermediate',
      funding: null,
      popular: true
    },
    {
      id: 'excel',
      name: 'Microsoft Excel (Beginner - Intermediate)',
      category: 'Microsoft Office',
      price: 'R1,500',
      duration: '8 Weeks',
      level: 'Beginner to Intermediate',
      funding: null,
      popular: true
    },
    {
      id: 'powerpoint',
      name: 'Microsoft PowerPoint (Beginner - Intermediate)',
      category: 'Microsoft Office',
      price: 'R1,200',
      duration: '5 Weeks',
      level: 'Beginner to Intermediate',
      funding: null,
      popular: false
    },
    {
      id: 'teams',
      name: 'Microsoft Teams',
      category: 'Microsoft Office',
      price: 'R900',
      duration: '2 Weeks',
      level: 'Beginner',
      funding: null,
      popular: true
    },
    {
      id: 'sql',
      name: 'SQL Database Management',
      category: 'Database',
      price: 'R3,500',
      duration: '10 Weeks',
      level: 'Intermediate',
      funding: null,
      popular: true
    },
    {
      id: 'webdev',
      name: 'Website Development',
      category: 'Web Development',
      price: 'R3,500',
      duration: '8 Weeks',
      level: 'Intermediate',
      funding: null,
      popular: true
    },
    {
      id: 'ai',
      name: 'AI & Machine Learning',
      category: 'AI & Machine Learning',
      price: 'R4,500',
      duration: '12 Weeks',
      level: 'Advanced',
      funding: {
        available: false,
        planned: true,
        description: 'Future funding opportunities planned'
      },
      popular: false
    },
    {
      id: 'office-suite',
      name: 'Microsoft Office Complete Suite',
      category: 'Microsoft Office',
      price: 'R3,000',
      duration: '10 Weeks',
      level: 'Beginner to Advanced',
      funding: null,
      popular: true
    },
    {
      id: 'Cybersecurity',
      name: 'Cybersecurity',
      category: 'Cybersecurity',
      price: 'R4,000',
      duration: '10 Weeks',
      level: 'Beginner to Advanced',
      funding: null,
      popular: true
    }
  ];

  const handleFileChange = (field, event) => {
    const file = event.target.files[0];
    if (file) {
      const validTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
      if (!validTypes.includes(file.type)) {
        alert('Please upload a PDF or image file (JPEG, JPG, PNG)');
        event.target.value = '';
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        event.target.value = '';
        return;
      }
      setSelectedFiles(prev => ({
        ...prev,
        [field]: file
      }));
    }
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const registrationData = {
        ...data,
        registrationType: 'it',
        programType: data.programType || 'short-course',
        isInternshipApplication: isInternship,
        isLearnershipApplication: isLearnership,
        isShortCourse: isShortCourse || !data.programType,
        timestamp: new Date().toISOString(),
        status: 'pending',
        selectedCourses: Array.isArray(data.itCourses) ? data.itCourses : [data.itCourses],
        files: {
          cv: selectedFiles.cv ? {
            name: selectedFiles.cv.name,
            type: selectedFiles.cv.type,
            size: selectedFiles.cv.size
          } : null,
          transcript: selectedFiles.transcript ? {
            name: selectedFiles.transcript.name,
            type: selectedFiles.transcript.type,
            size: selectedFiles.transcript.size
          } : null,
          idCopy: selectedFiles.idCopy ? {
            name: selectedFiles.idCopy.name,
            type: selectedFiles.idCopy.type,
            size: selectedFiles.idCopy.size
          } : null
        }
      };

      const result = await registrationService.createRegistration(registrationData);
      
      if (result.success) {
        setSubmitStatus('success');
        reset();
        setSelectedFiles({ cv: null, transcript: null, idCopy: null });
        document.querySelectorAll('input[type="file"]').forEach(input => input.value = '');
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      console.error('Error submitting registration:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const allRequiredFilesUploaded = isInternship || isLearnership
    ? selectedFiles.cv && selectedFiles.transcript && selectedFiles.idCopy
    : true;

  return (
    <>
      <SEO
        title="IT & AI Program Registration"
        description="Register for STK College's IT short courses, AI learnerships, internships, and in-service training programmes."
        canonical="https://stkcollege.org/it-register"
        keywords="IT registration South Africa, programming courses enrollment, AI learnership application, STK College registration"
      />
      <StructuredData schema={organizationSchema} />
      <StructuredData
        schema={breadcrumbSchema([
          { name: 'Home', url: 'https://stkcollege.org/' },
          { name: 'Register', url: 'https://stkcollege.org/it-register' },
        ])}
      />

      <div className="bg-white text-gray-800">
        {/* ─── HERO ─── */}
        <section className="relative min-h-[45vh] flex items-center overflow-hidden bg-[#0F2B5B]">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/gallery/labs/java.JPEG"
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
                Student <span className="text-[#F4C542]">Registration</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Complete the registration form below to apply for one or more of our IT and Digital Skills programmes. 
                Upon successful completion of programme requirements, students will receive an official Certificate of Completion from STK College.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ─── CONTENT ─── */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-2"
              >
                {/* ─── PROGRAMME INFORMATION CARD ─── */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="mb-8 bg-white rounded-2xl shadow-md border border-gray-100 p-6"
                >
                  <h3 className="text-xl font-bold text-[#0F2B5B] mb-4 flex items-center">
                    <FiInfo className="w-5 h-5 text-[#F4C542] mr-2" />
                    Programme Information
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Duration</span>
                      <p className="font-medium text-[#0F2B5B]">3 Months</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Award</span>
                      <p className="font-medium text-[#0F2B5B]">Certificate of Completion</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Delivery Mode</span>
                      <p className="font-medium text-[#0F2B5B]">Contact-Based Training</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Campus</span>
                      <p className="font-medium text-[#0F2B5B]">STK College</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Language</span>
                      <p className="font-medium text-[#0F2B5B]">English</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Entry Requirements</span>
                      <p className="font-medium text-[#0F2B5B]">Basic computer literacy is recommended</p>
                    </div>
                    <div className="col-span-2">
                      <span className="text-gray-500">Class Size</span>
                      <p className="font-medium text-[#0F2B5B]">Limited intake per cohort</p>
                    </div>
                  </div>
                </motion.div>

                <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-2xl font-bold text-[#0F2B5B] mb-6">
                    Student Information
                  </h2>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        <FiUser className="inline w-4 h-4 mr-2 text-[#F4C542]" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        {...register('fullName', { 
                          required: 'Full name is required',
                          minLength: { value: 2, message: 'Name must be at least 2 characters' }
                        })}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F4C542] focus:border-transparent transition-all duration-200"
                        placeholder="Enter your full name"
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-sm text-red-500 flex items-center">
                          <FiAlertCircle className="w-4 h-4 mr-1" />
                          {errors.fullName.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        <FiMail className="inline w-4 h-4 mr-2 text-[#F4C542]" />
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

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        <FiPhone className="inline w-4 h-4 mr-2 text-[#F4C542]" />
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
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F4C542] focus:border-transparent transition-all duration-200"
                        placeholder="Enter your phone number"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-500 flex items-center">
                          <FiAlertCircle className="w-4 h-4 mr-1" />
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        <FiUser className="inline w-4 h-4 mr-2 text-[#F4C542]" />
                        South African ID Number / Passport Number
                      </label>
                      <input
                        type="text"
                        {...register('idNumber')}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F4C542] focus:border-transparent transition-all duration-200"
                        placeholder="Enter your ID or passport number"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        <FiCalendar className="inline w-4 h-4 mr-2 text-[#F4C542]" />
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        {...register('dob')}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#F4C542] focus:border-transparent transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        <FiUserCheck className="inline w-4 h-4 mr-2 text-[#F4C542]" />
                        Gender
                      </label>
                      <select
                        {...register('gender')}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#F4C542] focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        <option value="prefer-not">Prefer not to say</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        <FiHome className="inline w-4 h-4 mr-2 text-[#F4C542]" />
                        Residential Address
                      </label>
                      <input
                        type="text"
                        {...register('address')}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F4C542] focus:border-transparent transition-all duration-200"
                        placeholder="Street address"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        <FiMapPin className="inline w-4 h-4 mr-2 text-[#F4C542]" />
                        City
                      </label>
                      <input
                        type="text"
                        {...register('city')}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F4C542] focus:border-transparent transition-all duration-200"
                        placeholder="Enter your city"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        <FiGlobe className="inline w-4 h-4 mr-2 text-[#F4C542]" />
                        Province
                      </label>
                      <input
                        type="text"
                        {...register('province')}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F4C542] focus:border-transparent transition-all duration-200"
                        placeholder="Enter your province"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        <FiAward className="inline w-4 h-4 mr-2 text-[#F4C542]" />
                        Highest Education Level
                      </label>
                      <select
                        {...register('educationLevel')}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#F4C542] focus:border-transparent transition-all duration-200"
                      >
                        {educationLevels.map(level => (
                          <option key={level} value={level}>{level}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        <FiCode className="inline w-4 h-4 mr-2 text-[#F4C542]" />
                        Programming Experience Level
                      </label>
                      <select
                        {...register('experienceLevel')}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#F4C542] focus:border-transparent transition-all duration-200"
                      >
                        {experienceLevels.map(level => (
                          <option key={level} value={level}>{level}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <FiBriefcase className="inline w-4 h-4 mr-2 text-[#F4C542]" />
                        Programme Type *
                      </label>
                      <p className="text-sm text-gray-500 mb-3">
                        Select the programme you wish to apply for.
                      </p>
                      <div className="space-y-3">
                        {programTypes.map((program) => (
                          <label key={program.value} className={`flex items-start space-x-3 p-4 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 cursor-pointer transition-all duration-200 border-l-4 ${program.color === 'yellow' ? 'border-l-[#F4C542]' : program.color === 'purple' ? 'border-l-purple-500' : 'border-l-blue-500'}`}>
                            <input
                              type="radio"
                              value={program.value}
                              {...register('programType')}
                              className="w-4 h-4 text-[#F4C542] border-gray-300 bg-white focus:ring-[#F4C542] mt-1"
                            />
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-1">
                                <span className="text-xl">{program.icon}</span>
                                <span className="font-semibold text-[#0F2B5B]">{program.label}</span>
                              </div>
                              <p className="text-sm text-gray-600">{program.description}</p>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <FiCode className="inline w-4 h-4 mr-2 text-[#F4C542]" />
                        Select Courses/Modules *
                      </label>
                      <p className="text-sm text-gray-500 mb-3">
                        Choose the courses you're interested in (select at least one)
                      </p>
                      <div className="grid grid-cols-1 gap-3 max-h-96 overflow-y-auto bg-gray-50 border border-gray-200 rounded-lg p-4">
                        {itCourses.map((course) => (
                          <label key={course.id} className="flex items-start space-x-3 p-3 bg-white rounded-lg hover:bg-gray-100 transition-all duration-200 border border-gray-100 shadow-sm">
                            <input
                              type="checkbox"
                              value={course.id}
                              {...register('itCourses', { required: 'Please select at least one course' })}
                              className="w-4 h-4 text-[#F4C542] border-gray-300 bg-white rounded focus:ring-[#F4C542] mt-1"
                            />
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-1">
                                <span className="text-sm font-medium text-[#0F2B5B]">{course.name}</span>
                                <div className="flex items-center space-x-2">
                                  {course.funding?.planned && (
                                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold">
                                      Future MICT SETA
                                    </span>
                                  )}
                                  {course.popular && (
                                    <span className="bg-[#F4C542] text-[#0F2B5B] px-2 py-1 rounded text-xs font-bold">
                                      Popular
                                    </span>
                                  )}
                                </div>
                              </div>
                              <div className="flex items-center space-x-4 text-xs text-gray-600">
                                <div className="flex items-center">
                                  <FiClock className="w-3 h-3 mr-1 text-[#F4C542]" />
                                  {course.duration}
                                </div>
                                <div className="flex items-center">
                                  <FiAward className="w-3 h-3 mr-1 text-[#F4C542]" />
                                  {course.level}
                                </div>
                                <div className="flex items-center">
                                  <span className="w-3 h-3 mr-1 flex items-center justify-center font-bold text-xs"></span>
                                  {course.price}
                                </div>
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>
                      {errors.itCourses && (
                        <p className="mt-1 text-sm text-red-500 flex items-center">
                          <FiAlertCircle className="w-4 h-4 mr-1" />
                          {errors.itCourses.message}
                        </p>
                      )}
                    </div>

                    {(isInternship || isLearnership) && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-4">
                          <FiFileText className="inline w-4 h-4 mr-2 text-[#F4C542]" />
                          Required Documents (PDF or image format) *
                        </label>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                              Curriculum Vitae (CV) *
                            </label>
                            <input
                              type="file"
                              accept=".pdf,.jpg,.jpeg,.png"
                              onChange={(e) => handleFileChange('cv', e)}
                              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-[#F4C542] file:text-[#0F2B5B] hover:file:bg-[#e0b03a] transition-all duration-200"
                            />
                            {selectedFiles.cv && (
                              <div className="bg-[#F4C542]/10 border border-[#F4C542] rounded-lg p-3">
                                <p className="text-[#0F2B5B] text-sm">
                                  <strong>Selected:</strong> {selectedFiles.cv.name} 
                                  ({Math.round(selectedFiles.cv.size / 1024)} KB)
                                </p>
                              </div>
                            )}
                            <p className="text-sm text-gray-500">Upload your updated CV/Resume</p>
                          </div>

                          <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                              Academic Transcript *
                            </label>
                            <input
                              type="file"
                              accept=".pdf,.jpg,.jpeg,.png"
                              onChange={(e) => handleFileChange('transcript', e)}
                              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-[#F4C542] file:text-[#0F2B5B] hover:file:bg-[#e0b03a] transition-all duration-200"
                            />
                            {selectedFiles.transcript && (
                              <div className="bg-[#F4C542]/10 border border-[#F4C542] rounded-lg p-3">
                                <p className="text-[#0F2B5B] text-sm">
                                  <strong>Selected:</strong> {selectedFiles.transcript.name} 
                                  ({Math.round(selectedFiles.transcript.size / 1024)} KB)
                                </p>
                              </div>
                            )}
                            <p className="text-sm text-gray-500">Latest academic records/transcript</p>
                          </div>

                          <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                              ID Copy *
                            </label>
                            <input
                              type="file"
                              accept=".pdf,.jpg,.jpeg,.png"
                              onChange={(e) => handleFileChange('idCopy', e)}
                              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-[#F4C542] file:text-[#0F2B5B] hover:file:bg-[#e0b03a] transition-all duration-200"
                            />
                            {selectedFiles.idCopy && (
                              <div className="bg-[#F4C542]/10 border border-[#F4C542] rounded-lg p-3">
                                <p className="text-[#0F2B5B] text-sm">
                                  <strong>Selected:</strong> {selectedFiles.idCopy.name} 
                                  ({Math.round(selectedFiles.idCopy.size / 1024)} KB)
                                </p>
                              </div>
                            )}
                            <p className="text-sm text-gray-500">Clear copy of your ID document</p>
                          </div>

                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <p className="text-blue-700 text-sm">
                              <strong>Important:</strong> Documents can be previewed but will not be uploaded to our servers. 
                              Please bring physical copies or email them to stkcollege@gmail.com after registration.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Previous IT Experience
                      </label>
                      <textarea
                        {...register('experience')}
                        rows={4}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F4C542] focus:border-transparent transition-all duration-200"
                        placeholder="Describe any previous experience with computers, programming, or IT..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Career Goals
                      </label>
                      <textarea
                        {...register('goals')}
                        rows={4}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F4C542] focus:border-transparent transition-all duration-200"
                        placeholder="What do you hope to achieve with this course? What are your career aspirations?"
                      />
                    </div>

                    {/* ─── IMPORTANT NOTICE ─── */}
                    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-lg">
                      <h4 className="font-bold text-amber-800 flex items-center">
                        <FiAlertCircle className="w-5 h-5 mr-2" />
                        Important
                      </h4>
                      <ul className="mt-2 text-sm text-amber-700 space-y-1 list-disc pl-5">
                        <li>This is a private training programme offered by STK College.</li>
                        <li>Successful students who meet all requirements will receive a Certificate of Completion.</li>
                        <li>Submission of this registration form does not guarantee admission.</li>
                        <li>Admission is subject to availability and verification of submitted information.</li>
                      </ul>
                    </div>

                    {/* ─── DECLARATION ─── */}
                    <div className="space-y-3 bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="font-bold text-[#0F2B5B]">Declaration</h4>
                      <label className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          {...register('declaration1', { required: 'You must agree to the declaration' })}
                          className="w-4 h-4 text-[#F4C542] border-gray-300 rounded focus:ring-[#F4C542] mt-1"
                        />
                        <span className="text-sm text-gray-700">I declare that the information provided in this application is true and correct.</span>
                      </label>
                      {errors.declaration1 && (
                        <p className="text-sm text-red-500">{errors.declaration1.message}</p>
                      )}
                      <label className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          {...register('declaration2', { required: 'You must agree to the declaration' })}
                          className="w-4 h-4 text-[#F4C542] border-gray-300 rounded focus:ring-[#F4C542] mt-1"
                        />
                        <span className="text-sm text-gray-700">I understand that submission of this registration form does not guarantee admission into any programme.</span>
                      </label>
                      {errors.declaration2 && (
                        <p className="text-sm text-red-500">{errors.declaration2.message}</p>
                      )}
                      <label className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          {...register('declaration3', { required: 'You must agree to the declaration' })}
                          className="w-4 h-4 text-[#F4C542] border-gray-300 rounded focus:ring-[#F4C542] mt-1"
                        />
                        <span className="text-sm text-gray-700">I consent to being contacted by STK College regarding my application and programme updates.</span>
                      </label>
                      {errors.declaration3 && (
                        <p className="text-sm text-red-500">{errors.declaration3.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || ((isInternship || isLearnership) && !allRequiredFilesUploaded)}
                      className="w-full bg-[#F4C542] hover:bg-[#e0b03a] text-[#0F2B5B] font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-xl"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#0F2B5B] mr-2"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <FiSend className="w-5 h-5 mr-2" />
                          Submit Registration
                        </>
                      )}
                    </button>

                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-start p-4 bg-green-50 border border-green-200 rounded-lg text-green-700"
                      >
                        <FiCheckCircle className="w-5 h-5 mr-3 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Your registration has been successfully submitted.</p>
                          <p className="text-sm mt-1">Our Admissions Office will review your application and contact you within 2–5 working days regarding the next steps.</p>
                        </div>
                      </motion.div>
                    )}

                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center p-4 bg-red-50 border border-red-200 rounded-lg text-red-700"
                      >
                        <FiAlertCircle className="w-5 h-5 mr-3 text-red-500" />
                        <span>Error submitting registration. Please try again.</span>
                      </motion.div>
                    )}
                  </form>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="space-y-6"
              >
                {/* ─── WHY STUDY AT STK COLLEGE ─── */}
                <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-[#0F2B5B] mb-4 flex items-center">
                    <FiPlay className="w-5 h-5 text-[#F4C542] mr-2" />
                    Why Study at STK College
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <FiCheckCircle className="w-5 h-5 text-[#F4C542] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Practical, industry-focused training</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheckCircle className="w-5 h-5 text-[#F4C542] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Small class sizes for individual attention</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheckCircle className="w-5 h-5 text-[#F4C542] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Curriculum aligned to workplace skills needs</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheckCircle className="w-5 h-5 text-[#F4C542] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Official Certificate of Completion upon success</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheckCircle className="w-5 h-5 text-[#F4C542] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Experienced facilitators and mentors</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheckCircle className="w-5 h-5 text-[#F4C542] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Career guidance and support</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheckCircle className="w-5 h-5 text-[#F4C542] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Job readiness preparation</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheckCircle className="w-5 h-5 text-[#F4C542] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Supportive learning environment</span>
                    </li>
                  </ul>
                </div>

                {/* ─── CERTIFICATE OF COMPLETION CARD ─── */}
                <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-[#0F2B5B] mb-4 flex items-center">
                    <FiCertificate className="w-5 h-5 text-[#F4C542] mr-2" />
                    Certificate of Completion
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Students who successfully complete their selected programme and meet all assessment requirements will be awarded an official STK College Certificate of Completion.
                  </p>
                </div>

                {/* ─── TUITION FEES ─── */}
                <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-[#0F2B5B] mb-4 flex items-center">
                    <FiDollarSign className="w-5 h-5 text-[#F4C542] mr-2" />
                    Tuition Fees
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="text-gray-600">Registration Fee</span>
                      <span className="font-bold text-[#0F2B5B]">R500</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Remaining balance payable before course commencement.
                    </p>
                    <p className="text-sm text-gray-600">
                      Payment plans may be available upon request.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-[#0F2B5B] mb-4 flex items-center">
                    <span className="text-2xl mr-2">🤖</span>
                    AI & Tech Learnership
                  </h3>
                  
                  <div className="mb-4">
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 mb-4">
                      <p className="text-purple-700 text-sm font-semibold">
                        🎓 Planned Learnership Opportunities
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Duration:</span>
                        <span className="text-[#0F2B5B] font-semibold">12-24 Months (Planned)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Status:</span>
                        <span className="text-[#0F2B5B] font-semibold">In Development</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Certification:</span>
                        <span className="text-[#0F2B5B] font-semibold">Future QCTO Accreditation</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#F4C542] mb-3">Programme Plans Include:</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <FiCheckCircle className="w-4 h-4 text-[#F4C542] mr-2" />
                        <span>Python Programming & AI Fundamentals</span>
                      </div>
                      <div className="flex items-center">
                        <FiCheckCircle className="w-4 h-4 text-[#F4C542] mr-2" />
                        <span>Machine Learning & Data Science</span>
                      </div>
                      <div className="flex items-center">
                        <FiCheckCircle className="w-4 h-4 text-[#F4C542] mr-2" />
                        <span>Industry Projects & Portfolio Building</span>
                      </div>
                      <div className="flex items-center">
                        <FiCheckCircle className="w-4 h-4 text-[#F4C542] mr-2" />
                        <span>Workplace Experience Opportunities</span>
                      </div>
                      <div className="flex items-center">
                        <FiCheckCircle className="w-4 h-4 text-[#F4C542] mr-2" />
                        <span>Career Placement Support</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-[#0F2B5B] mb-4">
                    Current Status
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <FiCheckCircle className="w-4 h-4 text-[#F4C542] mr-2" />
                      Registered Company
                    </li>
                    <li className="flex items-center">
                      <FiCheckCircle className="w-4 h-4 text-[#F4C542] mr-2" />
                      Private Skills Development Provider
                    </li>
                    <li className="flex items-center">
                      <FiCheckCircle className="w-4 h-4 text-[#F4C542] mr-2" />
                      Issuing Certificate of Completion
                    </li>
                    <li className="flex items-center">
                      <FiCheckCircle className="w-4 h-4 text-[#F4C542] mr-2" />
                      Industry-Based Practical Training Delivery
                    </li>
                    <li className="flex items-center">
                      <FiCheckCircle className="w-4 h-4 text-[#F4C542] mr-2" />
                      Preparing for Future QCTO Accreditation
                    </li>
                    <li className="flex items-center">
                      <FiCheckCircle className="w-4 h-4 text-[#F4C542] mr-2" />
                      Exploring Future MICT SETA Partnerships
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-[#0F2B5B] mb-4">
                    Questions?
                  </h3>
                  <p className="text-gray-600 mb-4 font-medium">
                    Our team is here to help you learn about our programmes.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Phone:</strong> +27 76 362 7488</p>
                    <p><strong>Alt Phone:</strong> +27 73 578 7190</p>
                    <p><strong>Email:</strong> stkcollege@gmail.com</p>
                    <p><strong>Hours:</strong> Mon-Fri 8AM-5PM</p>
                    <p><strong>Hours:</strong> Sat-Sun 9AM-12PM</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITRegister;