import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { registrationService } from '../firebase/firestoreService';
import { 
  FiUser, 
  FiMail, 
  FiPhone,  
  FiBookOpen, 
  FiCheckCircle,
  FiAlertCircle,
  FiSend,
  FiCode,
  FiAward,
  FiBriefcase,
  FiFileText,
  FiUpload,
  FiPlay,
  FiTarget,
  FiAward as FiCertificate
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
      description: 'Individual IT modules and programming courses'
    },
    {
      value: 'in-service training-only',
      label: 'In-Service Training Program',
      description: 'Comprehensive IT training without internship'
    },
    {
      value: 'in-service training-internship',
      label: 'In-Service + Internship',
      description: 'Training followed by internship opportunity'
    },
    {
      value: 'internship-only',
      label: 'Internship Only',
      description: 'In-service training for current IT students'
    }
  ];

  const itModules = [
    {
      id: 'java',
      name: 'Java Programming',
      category: 'Programming'
    },
    {
      id: 'html5',
      name: 'HTML5',
      category: 'Web Development'
    },
    {
      id: 'css3',
      name: 'CSS3 & Styling',
      category: 'Web Development'
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      category: 'Web Development'
    },
    {
      id: 'firebase',
      name: 'Firebase',
      category: 'Backend'
    },
    {
      id: 'mysql',
      name: 'MySQL Database',
      category: 'Database'
    },
    {
      id: 'python',
      name: 'Python Programming',
      category: 'Programming'
    },
    {
      id: 'csharp',
      name: 'C# Programming',
      category: 'Programming'
    },
    {
      id: 'aspnet',
      name: 'ASP.NET MVC',
      category: 'Web Development'
    },
    {
      id: 'react',
      name: 'React.js',
      category: 'Frontend'
    },
    {
      id: 'postgresql',
      name: 'PostgreSQL Database',
      category: 'Database'
    },
    {
      id: 'api',
      name: 'API Development',
      category: 'Backend'
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
        isShortCourse: isShortCourse || !data.programType,
        timestamp: new Date().toISOString(),
        status: 'pending',
        // Convert modules array to string for better querying
        selectedModules: Array.isArray(data.itModules) ? data.itModules : [data.itModules],
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

  const allRequiredFilesUploaded = isInternship 
    ? selectedFiles.cv && selectedFiles.transcript && selectedFiles.idCopy
    : true;

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
            Choose from individual courses, comprehensive training, or internship programs
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

                {/* Highest Education Level */}
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    <FiAward className="inline w-4 h-4 mr-2" />
                    Highest Education Level
                  </label>
                  <select
                    {...register('educationLevel')}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  >
                    {educationLevels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>

                {/* Programming Experience Level */}
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    <FiCode className="inline w-4 h-4 mr-2" />
                    Programming Experience Level
                  </label>
                  <select
                    {...register('experienceLevel')}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  >
                    {experienceLevels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>

                {/* Program Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    <FiBriefcase className="inline w-4 h-4 mr-2" />
                    Program Type *
                  </label>
                  <p className="text-sm text-gray-400 mb-3">
                    Select one of the options you want to apply for.
                  </p>
                  <div className="space-y-3">
                    {programTypes.map((program) => (
                      <label key={program.value} className="flex items-start space-x-3 p-4 bg-gray-800 border border-gray-600 rounded-lg hover:bg-gray-700 cursor-pointer transition-all duration-200">
                        <input
                          type="radio"
                          value={program.value}
                          {...register('programType')}
                          className="w-4 h-4 text-green-500 border-gray-600 bg-gray-700 focus:ring-green-500 mt-1"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-semibold text-white">{program.label}</span>
                          </div>
                          <p className="text-sm text-gray-300">{program.description}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* IT Modules Selection - Required */}
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    <FiCode className="inline w-4 h-4 mr-2" />
                    Select IT Modules/Courses *
                  </label>
                  <p className="text-sm text-gray-400 mb-3">
                    Choose the programming languages and technologies you want to learn (select at least one)
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-64 overflow-y-auto bg-gray-800 border border-gray-600 rounded-lg p-4">
                    {itModules.map((module) => (
                      <label key={module.id} className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          value={module.id}
                          {...register('itModules', { required: 'Please select at least one IT module/course' })}
                          className="w-4 h-4 text-green-500 border-gray-600 bg-gray-700 rounded focus:ring-green-500"
                        />
                        <span className="text-sm text-gray-300">{module.name}</span>
                      </label>
                    ))}
                  </div>
                  {errors.itModules && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                      <FiAlertCircle className="w-4 h-4 mr-1 text-red-500" />
                      {errors.itModules.message}
                    </p>
                  )}
                </div>

                {/* Required Documents - Only for Internship */}
                {isInternship && (
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-4">
                      <FiFileText className="inline w-4 h-4 mr-2" />
                      Required Documents for Internship (PDF or image format) *
                    </label>
                    <div className="space-y-4">
                      {/* CV Upload */}
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-200">
                          Curriculum Vitae (CV) *
                        </label>
                        <input
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => handleFileChange('cv', e)}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-green-500 file:text-white hover:file:bg-green-600 transition-all duration-200"
                        />
                        {selectedFiles.cv && (
                          <div className="bg-green-500/20 border border-green-500 rounded-lg p-3">
                            <p className="text-green-400 text-sm">
                              <strong>Selected:</strong> {selectedFiles.cv.name} 
                              ({Math.round(selectedFiles.cv.size / 1024)} KB)
                            </p>
                          </div>
                        )}
                        <p className="text-sm text-gray-400">Upload your updated CV/Resume</p>
                      </div>

                      {/* Academic Transcript Upload */}
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-200">
                          Academic Transcript *
                        </label>
                        <input
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => handleFileChange('transcript', e)}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-green-500 file:text-white hover:file:bg-green-600 transition-all duration-200"
                        />
                        {selectedFiles.transcript && (
                          <div className="bg-green-500/20 border border-green-500 rounded-lg p-3">
                            <p className="text-green-400 text-sm">
                              <strong>Selected:</strong> {selectedFiles.transcript.name} 
                              ({Math.round(selectedFiles.transcript.size / 1024)} KB)
                            </p>
                          </div>
                        )}
                        <p className="text-sm text-gray-400">Latest academic records/transcript</p>
                      </div>

                      {/* ID Copy Upload */}
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-200">
                          ID Copy *
                        </label>
                        <input
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => handleFileChange('idCopy', e)}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-green-500 file:text-white hover:file:bg-green-600 transition-all duration-200"
                        />
                        {selectedFiles.idCopy && (
                          <div className="bg-green-500/20 border border-green-500 rounded-lg p-3">
                            <p className="text-green-400 text-sm">
                              <strong>Selected:</strong> {selectedFiles.idCopy.name} 
                              ({Math.round(selectedFiles.idCopy.size / 1024)} KB)
                            </p>
                          </div>
                        )}
                        <p className="text-sm text-gray-400">Clear copy of your ID document</p>
                      </div>

                      <div className="bg-blue-500/20 border border-blue-500 rounded-lg p-4">
                        <p className="text-blue-400 text-sm">
                          <strong>Important:</strong> Documents can be previewed but will not be uploaded to our servers. 
                          Please bring physical copies or email them to STKCollege@gmail.com after registration.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

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
                  disabled={isSubmitting || (isInternship && !allRequiredFilesUploaded)}
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
            {/* Enhanced Short Course Card */}
            <div className="card-enhanced rounded-xl p-6 border border-yellow-500/30">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <FiPlay className="w-5 h-5 text-yellow-400 mr-2" />
                Short Courses - How It Works
              </h3>
              
              {/* Procedure */}
              <div className="mb-6">
                <h4 className="font-semibold text-yellow-400 mb-3 flex items-center">
                  <FiTarget className="w-4 h-4 mr-2" />
                  Simple 3-Step Process:
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-black text-sm font-bold">1</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Select Your Courses</p>
                      <p className="text-gray-300 text-sm">Choose from 12+ programming languages and technologies</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-black text-sm font-bold">2</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Register & Start Learning</p>
                      <p className="text-gray-300 text-sm">Complete this form and begin your training immediately</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-black text-sm font-bold">3</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Get Certified</p>
                      <p className="text-gray-300 text-sm">Receive industry-recognized certificates upon completion</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="font-semibold text-yellow-400 mb-3 flex items-center">
                  <FiCertificate className="w-4 h-4 mr-2" />
                  Key Benefits:
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <FiCheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Learn Specific Skills</p>
                      <p className="text-gray-300 text-sm">Focus only on technologies you need for your career goals</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FiCheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Flexible Schedule</p>
                      <p className="text-gray-300 text-sm">Study at your own pace with 24/7 access to materials</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FiCheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">No Prerequisites</p>
                      <p className="text-gray-300 text-sm">Start learning immediately without formal qualifications</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FiCheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Practical Projects</p>
                      <p className="text-gray-300 text-sm">Build real-world applications and portfolio projects</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FiCheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Expert Support</p>
                      <p className="text-gray-300 text-sm">Get guidance from experienced IT professionals</p>
                    </div>
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
                <li>• Access to a computer</li>
                <li>• Internet connection</li>
                <li>• Motivation to learn</li>
                {isInternship && (
                  <>
                    <li>• Updated CV/Resume</li>
                    <li>• Academic transcripts</li>
                    <li>• ID document copy</li>
                  </>
                )}
              </ul>
            </div>

            {/* Contact Card */}
            <div className="card-enhanced rounded-xl p-6 border border-green-500/30">
              <h3 className="text-xl font-bold text-white mb-4">
                Questions?
              </h3>
              <p className="text-gray-200 mb-4 font-medium">
                Our IT department is here to help you choose the right program.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-gray-300">
                  <strong>Phone:</strong> +27 76 362 7488
                </p>
                <p className="text-sm text-gray-300">
                  <strong>Alt Phone:</strong> +27 73 578 7190
                </p>
                <p className="text-sm text-gray-300">
                  <strong>Email:</strong> STKCollege@gmail.com
                </p>
                <p className="text-sm text-gray-300">
                  <strong>Hours:</strong> Mon-Fri 8AM-5PM
                </p>
                <p className="text-sm text-gray-300">
                  <strong>Hours:</strong> Sat-Sun 9AM-12PM
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