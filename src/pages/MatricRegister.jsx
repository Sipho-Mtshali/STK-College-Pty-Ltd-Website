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
  FiHome,
  FiMapPin,
  FiUpload,
  FiDollarSign
} from 'react-icons/fi';

const MatricRegister = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const subjects = [
    'English Home Language',
    'Technical Maths',
    'Computer',
    'Agriculture',
    'Geography',
    'Mathematics',
    'Mathematical Literacy',
    'Physical Sciences',
    'Life Sciences',
    'History',
    'Accounting',
    'Business Studies'
  ];

  const paymentPlans = [
    {
      value: 'registration-only',
      label: 'Registration Fee Only (R2,000)',
      amount: 2000
    },
    {
      value: 'full-payment',
      label: 'Full Payment (R6,700)',
      amount: 6700
    },
    {
      value: 'monthly-installments',
      label: 'Monthly Installments (R4,700)',
      amount: 4700
    }
  ];

  const currentYear = new Date().getFullYear();
  const matricYears = Array.from({ length: 20 }, (_, i) => currentYear - i);

  const handleFileChange = (event) => {
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
      
      setSelectedFile(file);
    }
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Prepare registration data
      const registrationData = {
        ...data,
        registrationType: 'matric',
        programType: 'matric-upgrade',
        timestamp: new Date().toISOString(),
        status: 'pending',
        fileName: selectedFile ? selectedFile.name : null,
        fileType: selectedFile ? selectedFile.type : null,
        fileSize: selectedFile ? selectedFile.size : null,
        // Convert subjects array to string for better querying
        selectedSubjects: Array.isArray(data.subjects) ? data.subjects : [data.subjects],
        paymentAmount: paymentPlans.find(plan => plan.value === data.paymentPlan)?.amount || 0
      };

      // Save to Firebase using the service
      const result = await registrationService.createRegistration(registrationData);
      
      if (result.success) {
        setSubmitStatus('success');
        reset();
        setSelectedFile(null);
        // Reset file input
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput) fileInput.value = '';
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
            Matric Registration
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Register for matric upgrade courses and take the next step towards your academic goals
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
                Personal Information
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

                {/* ID Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    <FiUser className="inline w-4 h-4 mr-2" />
                    ID Number *
                  </label>
                  <input
                    type="text"
                    {...register('idNumber', { 
                      required: 'ID number is required',
                      pattern: {
                        value: /^[0-9]{13}$/,
                        message: 'ID number must be 13 digits'
                      }
                    })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your 13-digit ID number"
                  />
                  {errors.idNumber && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                      <FiAlertCircle className="w-4 h-4 mr-1 text-red-500" />
                      {errors.idNumber.message}
                    </p>
                  )}
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

                {/* Home Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    <FiHome className="inline w-4 h-4 mr-2" />
                    Home Address *
                  </label>
                  <textarea
                    {...register('homeAddress', { 
                      required: 'Home address is required',
                      minLength: { value: 10, message: 'Address must be at least 10 characters' }
                    })}
                    rows={3}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your complete home address"
                  />
                  {errors.homeAddress && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                      <FiAlertCircle className="w-4 h-4 mr-1 text-red-500" />
                      {errors.homeAddress.message}
                    </p>
                  )}
                </div>

                {/* Previous School */}
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    <FiMapPin className="inline w-4 h-4 mr-2" />
                    Previous School *
                  </label>
                  <input
                    type="text"
                    {...register('previousSchool', { 
                      required: 'Previous school is required'
                    })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter the name of your previous school"
                  />
                  {errors.previousSchool && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                      <FiAlertCircle className="w-4 h-4 mr-1 text-red-500" />
                      {errors.previousSchool.message}
                    </p>
                  )}
                </div>

                {/* Year Completed Matric */}
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    <FiBookOpen className="inline w-4 h-4 mr-2" />
                    Year Completed Matric *
                  </label>
                  <select
                    {...register('matricYear', { required: 'Please select the year you completed matric' })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select Year</option>
                    {matricYears.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                  {errors.matricYear && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                      <FiAlertCircle className="w-4 h-4 mr-1 text-red-500" />
                      {errors.matricYear.message}
                    </p>
                  )}
                </div>

                {/* Payment Plan */}
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    <FiDollarSign className="inline w-4 h-4 mr-2" />
                    Payment Plan *
                  </label>
                  <select
                    {...register('paymentPlan', { required: 'Please select a payment plan' })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select Payment Plan</option>
                    {paymentPlans.map(plan => (
                      <option key={plan.value} value={plan.value}>
                        {plan.label}
                      </option>
                    ))}
                  </select>
                  {errors.paymentPlan && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                      <FiAlertCircle className="w-4 h-4 mr-1 text-red-500" />
                      {errors.paymentPlan.message}
                    </p>
                  )}
                </div>

                {/* Upload Proof of Payment */}
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    <FiUpload className="inline w-4 h-4 mr-2" />
                    Upload Proof of Payment (PDF/Image) *
                  </label>
                  <div className="space-y-3">
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={handleFileChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-green-500 file:text-white hover:file:bg-green-600 transition-all duration-200"
                    />
                    {selectedFile && (
                      <div className="bg-green-500/20 border border-green-500 rounded-lg p-3">
                        <p className="text-green-400 text-sm">
                          <strong>Selected file:</strong> {selectedFile.name} 
                          ({Math.round(selectedFile.size / 1024)} KB)
                        </p>
                      </div>
                    )}
                    <p className="text-sm text-gray-400">
                      <strong>Note:</strong> Details only stored. Please share your payslip or proof of payment via WhatsApp or bring it to the office.
                    </p>
                  </div>
                </div>

                {/* Subjects */}
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    <FiBookOpen className="inline w-4 h-4 mr-2" />
                    Subjects to Upgrade *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-48 overflow-y-auto bg-gray-800 border border-gray-600 rounded-lg p-4">
                    {subjects.map((subject) => (
                      <label key={subject} className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          value={subject}
                          {...register('subjects', { required: 'Please select at least one subject' })}
                          className="w-4 h-4 text-green-500 border-gray-600 bg-gray-700 rounded focus:ring-green-500"
                        />
                        <span className="text-sm text-gray-300">{subject}</span>
                      </label>
                    ))}
                  </div>
                  {errors.subjects && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                      <FiAlertCircle className="w-4 h-4 mr-1 text-red-500" />
                      {errors.subjects.message}
                    </p>
                  )}
                </div>

                {/* Additional Information */}
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    {...register('additionalInfo')}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="Any additional information or special requirements..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || !selectedFile}
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
            {/* Info Card */}
            <div className="card-enhanced rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">
                Registration Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FiCheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Registration Fee: R2,000</h4>
                    <p className="text-sm text-gray-300">One-time payment to secure your spot</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FiCheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Full Payment: R6,700</h4>
                    <p className="text-sm text-gray-300">Complete programme cost</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FiCheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Monthly Installments: R4,700</h4>
                    <p className="text-sm text-gray-300">Flexible payment plan</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FiCheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Study Materials</h4>
                    <p className="text-sm text-gray-300">All resources included</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="card-enhanced rounded-xl p-6 border border-green-500/30">
              <h3 className="text-xl font-bold text-white mb-4">
                Need Help?
              </h3>
              <p className="text-gray-200 mb-4 font-medium">
                Our team is here to assist you with the registration process.
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

export default MatricRegister;