import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { registrationService } from '../firebase/firestoreService';
import { 
  FiUser, FiMail, FiPhone, FiCheckCircle, FiAlertCircle, FiSend, 
  FiCode, FiAward, FiBriefcase, FiFileText, FiPlay, FiTarget,
  FiAward as FiCertificate, FiDollarSign, FiClock, FiArrowRight
} from 'react-icons/fi';

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
      label: 'Short Course Only',
      description: 'Individual IT modules and programming courses',
      icon: '📚',
      color: 'yellow'
    },
    {
      value: 'learnership',
      label: 'AI & Tech Learnership',
      description: 'Future learnership programs with planned MICT SETA funding opportunities',
      icon: '🤖',
      color: 'purple'
    },
    {
      value: 'in-service training-internship',
      label: 'In-Service + Internship',
      description: 'Training followed by internship opportunity',
      icon: '💼',
      color: 'blue'
    }
  ];

  // Updated courses to match the new courses data
  const itCourses = [
    {
      id: 'python',
      name: 'Python Programming',
      category: 'Programming',
      price: 'R10,500',
      duration: '10 Weeks',
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
      price: 'R12,000',
      duration: '12 Weeks',
      level: 'Intermediate',
      funding: null,
      popular: false
    },
    {
      id: 'word',
      name: 'Microsoft Word (Beginner - Intermediate)',
      category: 'Microsoft Office',
      price: 'R4,500',
      duration: '6 Weeks',
      level: 'Beginner to Intermediate',
      funding: null,
      popular: true
    },
    {
      id: 'excel',
      name: 'Microsoft Excel (Beginner - Intermediate)',
      category: 'Microsoft Office',
      price: 'R6,500',
      duration: '8 Weeks',
      level: 'Beginner to Intermediate',
      funding: null,
      popular: true
    },
    {
      id: 'powerpoint',
      name: 'Microsoft PowerPoint (Beginner - Intermediate)',
      category: 'Microsoft Office',
      price: 'R3,000',
      duration: '5 Weeks',
      level: 'Beginner to Intermediate',
      funding: null,
      popular: false
    },
    {
      id: 'teams',
      name: 'Microsoft Teams',
      category: 'Microsoft Office',
      price: 'R1,000',
      duration: '2 Weeks',
      level: 'Beginner',
      funding: null,
      popular: true
    },
    {
      id: 'sql',
      name: 'SQL Database Management',
      category: 'Database',
      price: 'R20,500',
      duration: '10 Weeks',
      level: 'Intermediate',
      funding: null,
      popular: true
    },
    {
      id: 'webdev',
      name: 'Website Development',
      category: 'Web Development',
      price: 'R10,500',
      duration: '8 Weeks',
      level: 'Intermediate',
      funding: null,
      popular: true
    },
    {
      id: 'ai',
      name: 'AI & Machine Learning',
      category: 'AI & Machine Learning',
      price: 'R25,000',
      duration: '12 Weeks',
      level: 'Advanced',
      funding: {
        available: false,
        planned: true,
        description: 'Future learnership opportunities planned'
      },
      popular: false
    },
    {
      id: 'office-suite',
      name: 'Microsoft Office Complete Suite',
      category: 'Microsoft Office',
      price: 'R20,000',
      duration: '10 Weeks',
      level: 'Beginner to Advanced',
      funding: null,
      popular: true
    }
  ];

  const handleFileChange = (field, event) => {
    const file = event.target.files[0];
    if (file) {
      // Check file type
      const validTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
      if (!validTypes.includes(file.type)) {
        alert('Please upload a PDF or image file (JPEG, JPG, PNG)');
        event.target.value = '';
        return;
      }
      
      // Check file size (5MB max)
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
      // Prepare registration data
      const registrationData = {
        ...data,
        registrationType: 'it',
        programType: data.programType || 'short-course',
        isInternshipApplication: isInternship,
        isLearnershipApplication: isLearnership,
        isShortCourse: isShortCourse || !data.programType,
        timestamp: new Date().toISOString(),
        status: 'pending',
        // Convert courses array to string for better querying
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

      // Save to Firebase using the service
      const result = await registrationService.createRegistration(registrationData);
      
      if (result.success) {
        setSubmitStatus('success');
        reset();
        setSelectedFiles({ cv: null, transcript: null, idCopy: null });
        // Reset file inputs
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
              IT & AI Programs <span className="text-[#F4C542]">Registration</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Express interest in our future short courses, AI learnerships, or comprehensive internship programs
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── CONTENT ─── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* ── Registration Form ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-[#0F2B5B] mb-6">
                  Student Information
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Full Name */}
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

                  {/* Student Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <FiUser className="inline w-4 h-4 mr-2 text-[#F4C542]" />
                      Student Number
                    </label>
                    <input
                      type="text"
                      {...register('studentNumber')}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F4C542] focus:border-transparent transition-all duration-200"
                      placeholder="Enter your student number (if applicable)"
                    />
                  </div>

                  {/* Email */}
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

                  {/* Phone */}
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

                  {/* Highest Education Level */}
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

                  {/* Programming Experience Level */}
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

                  {/* Program Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FiBriefcase className="inline w-4 h-4 mr-2 text-[#F4C542]" />
                      Program Type *
                    </label>
                    <p className="text-sm text-gray-500 mb-3">
                      Select one of the options you want to apply for.
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

                  {/* IT Courses Selection */}
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

                  {/* Required Documents for Internship & Learnership */}
                  {(isInternship || isLearnership) && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-4">
                        <FiFileText className="inline w-4 h-4 mr-2 text-[#F4C542]" />
                        Required Documents (PDF or image format) *
                      </label>
                      <div className="space-y-4">
                        {/* CV Upload */}
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

                        {/* Academic Transcript Upload */}
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

                        {/* ID Copy Upload */}
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

                  {/* Previous Experience */}
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

                  {/* Goals */}
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

                  {/* Submit Button */}
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

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center p-4 bg-green-50 border border-green-200 rounded-lg text-green-700"
                    >
                      <FiCheckCircle className="w-5 h-5 mr-3 text-green-500" />
                      <span>Registration submitted successfully! We'll contact you when programs become available.</span>
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

            {/* ── Sidebar ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Short Course Card */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-[#0F2B5B] mb-4 flex items-center">
                  <FiPlay className="w-5 h-5 text-[#F4C542] mr-2" />
                  Short Courses - How It Works
                </h3>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-[#F4C542] mb-3 flex items-center">
                    <FiTarget className="w-4 h-4 mr-2" />
                    Simple 3-Step Process:
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-[#F4C542] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-[#0F2B5B] text-sm font-bold">1</span>
                      </div>
                      <div>
                        <p className="text-[#0F2B5B] font-medium">Select Your Courses</p>
                        <p className="text-gray-600 text-sm">Choose from 10+ IT courses and programming languages</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-[#F4C542] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-[#0F2B5B] text-sm font-bold">2</span>
                      </div>
                      <div>
                        <p className="text-[#0F2B5B] font-medium">Register & Express Interest</p>
                        <p className="text-gray-600 text-sm">Complete this form to express interest in our programs</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-[#F4C542] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-[#0F2B5B] text-sm font-bold">3</span>
                      </div>
                      <div>
                        <p className="text-[#0F2B5B] font-medium">Get Started When Available</p>
                        <p className="text-gray-600 text-sm">We'll contact you when programs become operational</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-[#F4C542] mb-3 flex items-center">
                    <FiCertificate className="w-4 h-4 mr-2" />
                    Key Benefits:
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <FiCheckCircle className="w-5 h-5 text-[#F4C542] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-[#0F2B5B] font-medium">Learn Specific Skills</p>
                        <p className="text-gray-600 text-sm">Focus only on technologies you need for your career goals</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <FiCheckCircle className="w-5 h-5 text-[#F4C542] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-[#0F2B5B] font-medium">Flexible Schedule</p>
                        <p className="text-gray-600 text-sm">Study at your own pace with 24/7 access to materials</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <FiCheckCircle className="w-5 h-5 text-[#F4C542] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-[#0F2B5B] font-medium">No Prerequisites</p>
                        <p className="text-gray-600 text-sm">Start learning immediately without formal qualifications</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Learnership Card */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-[#0F2B5B] mb-4 flex items-center">
                  <span className="text-2xl mr-2">🤖</span>
                  AI & Tech Learnership
                </h3>
                
                <div className="mb-4">
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 mb-4">
                    <p className="text-purple-700 text-sm font-semibold">
                      🎓 Future MICT SETA Opportunities Planned
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
                  <h4 className="font-semibold text-[#F4C542] mb-3">Program Plans Include:</h4>
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

              {/* Current Status */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-[#0F2B5B] mb-4">
                  Current Status
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <FiCheckCircle className="w-4 h-4 text-[#F4C542] mr-2" />
                    Registered CIPC
                  </li>
                  <li className="flex items-center">
                    <FiCheckCircle className="w-4 h-4 text-[#F4C542] mr-2" />
                    Preparing for QCTO accreditation
                  </li>
                  <li className="flex items-center">
                    <FiCheckCircle className="w-4 h-4 text-[#F4C542] mr-2" />
                    Planning future MICT SETA funding
                  </li>
                  <li className="flex items-center">
                    <FiCheckCircle className="w-4 h-4 text-[#F4C542] mr-2" />
                    Facilities ready for training
                  </li>
                  <li className="flex items-center">
                    <FiCheckCircle className="w-4 h-4 text-[#F4C542] mr-2" />
                    Industry partnerships in development
                  </li>
                </ul>
              </div>

              {/* Contact Card */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-[#0F2B5B] mb-4">
                  Questions?
                </h3>
                <p className="text-gray-600 mb-4 font-medium">
                  Our team is here to help you learn about our future programs.
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
  );
};

export default ITRegister;