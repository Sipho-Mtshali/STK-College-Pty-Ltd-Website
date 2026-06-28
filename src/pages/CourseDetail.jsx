// src/pages/CourseDetail.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { FiClock, FiUsers, FiAward, FiCheckCircle, FiBookOpen, FiArrowLeft, 
         FiStar, FiShare2, FiHeart, FiUser, FiMail } from 'react-icons/fi';
import { coursesData, allCourses } from '../data/coursesData';

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = coursesData[id];
  const [activeTab, setActiveTab] = useState('Overview');

  if (!course) {
    return (
      <div className="min-h-screen bg-white text-gray-800 flex items-center justify-center py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#0F2B5B] mb-4">Course Not Found</h1>
          <p className="text-gray-600 mb-8">The course you're looking for doesn't exist.</p>
          <Link 
            to="/courses" 
            className="bg-[#F4C542] hover:bg-[#e0b03a] text-[#0F2B5B] font-bold px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
          >
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  // Curriculum data for Java and Python
  const curriculumData = {
    java: [
      {
        week: 'Week 1',
        title: 'Introduction, Setup & Syntax',
        topics: [
          'Introduction to Java',
          'Installing JDK/IDE',
          'Writing your first main class/program',
          'W3Schools Java Tutorial'
        ]
      },
      {
        week: 'Week 2',
        title: 'Variables, Data Types & Operators',
        topics: [
          'Primitive types',
          'Reference types',
          'Casting',
          'Arithmetic/logical operators'
        ]
      },
      {
        week: 'Week 3',
        title: 'Control Flow',
        topics: [
          'if, else statements',
          'switch statements',
          'for, while, do-while loops',
          'W3Schools Control Flow'
        ]
      },
      {
        week: 'Week 4',
        title: 'Arrays & Strings',
        topics: [
          'Using arrays',
          '2D arrays',
          'String class and methods',
          'String manipulation'
        ]
      },
      {
        week: 'Week 5',
        title: 'Methods & Recursion',
        topics: [
          'Define methods',
          'Parameters and return values',
          'Recursion basics',
          'Method overloading'
        ]
      },
      {
        week: 'Week 6',
        title: 'Classes & Objects (OOP)',
        topics: [
          'Create classes and objects',
          'Constructors',
          'this keyword',
          'Static vs instance members'
        ]
      },
      {
        week: 'Week 7',
        title: 'Inheritance & Polymorphism',
        topics: [
          'extends keyword',
          'super keyword',
          'Method overriding',
          'Dynamic binding'
        ]
      },
      {
        week: 'Week 8',
        title: 'Exception Handling & Collections',
        topics: [
          'try/catch/finally',
          'Common exceptions',
          'ArrayList usage',
          'HashMap and collections'
        ]
      },
      {
        week: 'Week 9',
        title: 'File I/O & Practical Project',
        topics: [
          'Read/write files',
          'File handling',
          'Student-management console app',
          'Practical implementation'
        ]
      },
      {
        week: 'Week 10',
        title: 'Review & Mini Project',
        topics: [
          'Review all topics',
          'Mini-project development',
          'Combining concepts',
          'Final project presentation'
        ]
      }
    ],
    python: [
      {
        week: 'Week 1',
        title: 'Introduction & Setup',
        topics: [
          'What is Python',
          'Installing Python',
          'Writing "Hello, World!"',
          'Running Python code'
        ]
      },
      {
        week: 'Week 2',
        title: 'Variables, Types & Basic Operations',
        topics: [
          'Strings and numbers',
          'Lists, tuples, dictionaries',
          'Basic operations',
          'Data type manipulation'
        ]
      },
      {
        week: 'Week 3',
        title: 'Control Flow & Loops',
        topics: [
          'if, elif, else statements',
          'for loops',
          'while loops',
          'Loop control statements'
        ]
      },
      {
        week: 'Week 4',
        title: 'Functions & Modules',
        topics: [
          'Defining functions',
          'Parameters and return values',
          'Importing modules',
          'Building small functions'
        ]
      },
      {
        week: 'Week 5',
        title: 'Data Structures & Comprehensions',
        topics: [
          'Lists and dictionaries',
          'Sets and tuples',
          'List/dict comprehensions',
          'Data manipulation'
        ]
      },
      {
        week: 'Week 6',
        title: 'File Handling & Errors',
        topics: [
          'Opening/reading/writing files',
          'Exception handling',
          'try/except blocks',
          'File operations'
        ]
      },
      {
        week: 'Week 7',
        title: 'Working with Libraries & Simple Projects',
        topics: [
          'Standard libraries (os, sys, json)',
          'Project: log file processor',
          'Library integration',
          'Practical applications'
        ]
      },
      {
        week: 'Week 8',
        title: 'Object-Oriented Python',
        topics: [
          'Classes and objects',
          'Methods and attributes',
          'Inheritance in Python',
          'OOP principles'
        ]
      },
      {
        week: 'Week 9',
        title: 'Mini Project',
        topics: [
          'CLI student manager',
          'Data processor application',
          'Combining previous topics',
          'Project development'
        ]
      },
      {
        week: 'Week 10',
        title: 'Review & Extend',
        topics: [
          'Review all topics',
          'Advanced topics exploration',
          'Pandas or web scraping',
          'Integration with other technologies'
        ]
      }
    ]
  };

  // Get appropriate curriculum based on course
  const getCurriculum = () => {
    if (course.title.toLowerCase().includes('java')) {
      return curriculumData.java;
    } else if (course.title.toLowerCase().includes('python')) {
      return curriculumData.python;
    }
    return course.curriculum || [];
  };

  const currentCurriculum = getCurriculum();

  // Instructor data
  const instructorData = {
    'Sipho Mtshali': {
      name: 'Sipho Mtshali',
      role: 'Senior IT Instructor & Developer',
      bio: 'Sipho Mtshali is an experienced IT professional with over 4 years of experience in software development and IT training. He specializes in Java, Python, and full-stack web development.',
      expertise: ['Java Development', 'Python Programming', 'Web Development', 'Database Management'],
      experience: '4+ years',
      email: 'sipho@stkcollege.co.za',
      courses: 10,
      rating: 4.8,
      students: 500
    },
    'STK College AI': {
      name: 'STK College AI Team',
      role: 'AI & Machine Learning Specialists',
      bio: 'Our AI team consists of experienced data scientists and machine learning engineers with expertise in modern AI technologies and practical implementation.',
      expertise: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'Data Science'],
      experience: '3+ years',
      email: 'ai@stkcollege.co.za',
      courses: 3,
      rating: 4.9,
      students: 200
    }
  };

  const instructor = instructorData[course.instructor] || {
    name: course.instructor,
    role: 'IT Instructor',
    bio: 'Experienced instructor specializing in IT and software development.',
    expertise: ['Programming', 'Software Development'],
    experience: '5+ years',
    email: 'instructor@stkcollege.co.za',
    courses: 5,
    rating: 4.7,
    students: 300
  };

  // Reviews data
  const reviews = [
    {
      id: 1,
      student: 'Thando Nkosi',
      course: 'Python Programming',
      rating: 5,
      date: '2024-01-15',
      comment: 'Excellent course! The instructor explained complex concepts in a way that was easy to understand. The hands-on projects were very helpful.',
      avatar: '/images/avatars/student1.jpg'
    },
    {
      id: 2,
      student: 'Lerato Smith',
      course: 'Java Development',
      rating: 4,
      date: '2024-01-10',
      comment: 'Great content and well-structured curriculum. The W3Schools integration made learning much easier.',
      avatar: '/images/avatars/student2.jpg'
    },
    {
      id: 3,
      student: 'David Brown',
      course: 'Web Development',
      rating: 5,
      date: '2024-01-08',
      comment: 'Practical approach with real-world examples. I landed a job as a junior developer after completing this course!',
      avatar: '/images/avatars/student3.jpg'
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Curriculum':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#0F2B5B] mb-6">Course Curriculum</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentCurriculum.map((week, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 p-6">
                  <div className="flex flex-col sm:flex-row items-start mb-4">
                    <div className="bg-[#F4C542] text-[#0F2B5B] px-3 py-1 rounded-lg font-bold mr-4 mb-2 sm:mb-0">
                      {week.week}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-[#0F2B5B] mb-2">
                        {week.title}
                      </h4>
                      <div className="space-y-2">
                        {week.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="flex items-center text-gray-600 text-sm">
                            <FiCheckCircle className="w-4 h-4 text-[#F4C542] mr-2 flex-shrink-0" />
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'Instructor':
        return (
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <div className="w-32 h-32 bg-[#F4C542]/20 rounded-full flex items-center justify-center">
                  <FiUser className="w-16 h-16 text-[#F4C542]" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold text-[#0F2B5B] mb-2">{instructor.name}</h3>
                <p className="text-[#F4C542] text-lg mb-4">{instructor.role}</p>
                <p className="text-gray-600 leading-relaxed mb-6">{instructor.bio}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                    <div className="text-2xl font-bold text-[#0F2B5B]">{instructor.experience}</div>
                    <div className="text-gray-500 text-sm">Experience</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                    <div className="text-2xl font-bold text-[#0F2B5B]">{instructor.courses}</div>
                    <div className="text-gray-500 text-sm">Courses</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                    <div className="text-2xl font-bold text-[#0F2B5B]">{instructor.rating}</div>
                    <div className="text-gray-500 text-sm">Rating</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                    <div className="text-2xl font-bold text-[#0F2B5B]">{instructor.students}+</div>
                    <div className="text-gray-500 text-sm">Students</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-[#0F2B5B] mb-4">Areas of Expertise</h4>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {instructor.expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-white text-[#0F2B5B] px-4 py-2 rounded-lg font-medium border border-[#F4C542]/30 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h4 className="text-xl font-bold text-[#0F2B5B] mb-4">Contact Instructor</h4>
              <div className="flex items-center justify-center md:justify-start text-gray-600">
                <FiMail className="w-5 h-5 mr-3 text-[#F4C542]" />
                <span>{instructor.email}</span>
              </div>
            </div>
          </div>
        );

      case 'Reviews':
        return (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-[#0F2B5B] mb-2">Student Reviews</h3>
                <div className="flex items-center justify-center md:justify-start">
                  <div className="flex items-center text-[#F4C542] mr-4">
                    <FiStar className="w-6 h-6 fill-current" />
                    <span className="ml-1 text-xl font-bold text-[#0F2B5B]">{course.rating}</span>
                  </div>
                  <span className="text-gray-500">Based on {reviews.length} reviews</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 p-6">
                  <div className="flex flex-col sm:flex-row items-start justify-between mb-4">
                    <div className="flex items-center mb-4 sm:mb-0">
                      <div className="w-12 h-12 bg-[#F4C542]/20 rounded-full flex items-center justify-center mr-4">
                        <FiUser className="w-6 h-6 text-[#F4C542]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#0F2B5B]">{review.student}</h4>
                        <p className="text-gray-500 text-sm">{review.course}</p>
                      </div>
                    </div>
                    <div className="text-left sm:text-right">
                      <div className="flex items-center text-[#F4C542] mb-1 justify-center sm:justify-end">
                        {[...Array(5)].map((_, i) => (
                          <FiStar
                            key={i}
                            className={`w-4 h-4 ${i < review.rating ? 'fill-current' : ''}`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-400 text-sm">{review.date}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{review.comment}</p>
                </div>
              ))}
            </div>

            {/* Add Review Form */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 p-6 mt-8">
              <h4 className="text-xl font-bold text-[#0F2B5B] mb-4">Leave a Review</h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Your Rating</label>
                  <div className="flex items-center space-x-1 justify-center md:justify-start">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        className="text-[#F4C542] hover:text-[#e0b03a] transition-colors duration-200"
                      >
                        <FiStar className="w-6 h-6" />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Your Review</label>
                  <textarea
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F4C542] focus:border-transparent transition-all duration-200"
                    rows="4"
                    placeholder="Share your experience with this course..."
                  ></textarea>
                </div>
                <button className="bg-[#F4C542] hover:bg-[#e0b03a] text-[#0F2B5B] font-bold px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 w-full md:w-auto">
                  Submit Review
                </button>
              </div>
            </div>
          </div>
        );

      default: // Overview
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#0F2B5B] mb-4">Course Description</h3>
              <div className="text-gray-600 leading-relaxed space-y-4">
                {course.longDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#0F2B5B] mb-4">What You'll Learn</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {course.whatYouLearn.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <FiCheckCircle className="w-5 h-5 text-[#F4C542] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#0F2B5B] mb-4">Requirements</h3>
              <div className="space-y-2">
                {course.requirements.map((requirement, index) => (
                  <div key={index} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-[#F4C542] rounded-full mr-3"></div>
                    <span>{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
    }
  };

  const handleEnrollClick = () => {
    navigate('/it-register');
  };

  return (
    <div className="bg-white text-gray-800">

      {/* ─── HERO ─── */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden bg-[#0F2B5B]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=80"
            alt="STK College campus"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F2B5B]/90 to-[#0F2B5B]/70"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 w-full">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-gray-200 hover:text-white transition-colors duration-200 mb-6"
          >
            <FiArrowLeft className="w-5 h-5 mr-2" />
            Back to Courses
          </button>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{course.title}</h1>
            <p className="text-xl text-gray-200 max-w-3xl leading-relaxed">{course.description}</p>
          </motion.div>
        </div>
      </section>

      {/* ─── CONTENT ─── */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Course Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
          >
            {/* Course Image and Basic Info */}
            <div>
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden mb-6">
                <div className="relative h-64 sm:h-80 bg-gray-100">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/800x400?text=Course+Image';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="bg-[#F4C542] text-[#0F2B5B] px-3 py-1 rounded-full text-sm font-semibold">
                      {course.category}
                    </span>
                    {course.popular && (
                      <span className="bg-[#F4C542] text-[#0F2B5B] px-3 py-1 rounded-full text-sm font-bold">
                        🔥 Popular
                      </span>
                    )}
                    {course.funding?.available && (
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        MICT SETA Funded
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 p-4 text-center">
                  <FiClock className="w-6 h-6 text-[#F4C542] mx-auto mb-2" />
                  <div className="text-sm text-gray-500">Duration</div>
                  <div className="font-semibold text-[#0F2B5B]">{course.duration}</div>
                </div>
                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 p-4 text-center">
                  <FiBookOpen className="w-6 h-6 text-[#F4C542] mx-auto mb-2" />
                  <div className="text-sm text-gray-500">Lessons</div>
                  <div className="font-semibold text-[#0F2B5B]">{course.lessons}</div>
                </div>
                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 p-4 text-center">
                  <FiAward className="w-6 h-6 text-[#F4C542] mx-auto mb-2" />
                  <div className="text-sm text-gray-500">Level</div>
                  <div className="font-semibold text-[#0F2B5B]">{course.level}</div>
                </div>
                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 p-4 text-center">
                  <FiUsers className="w-6 h-6 text-[#F4C542] mx-auto mb-2" />
                  <div className="text-sm text-gray-500">Students</div>
                  <div className="font-semibold text-[#0F2B5B]">{course.students}</div>
                </div>
              </div>
            </div>

            {/* Course Details and Enrollment */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 p-6 lg:p-8">
              <div className="mb-6">
                <h1 className="text-3xl lg:text-4xl font-bold text-[#0F2B5B] mb-4 text-center lg:text-left">{course.title}</h1>
                <p className="text-gray-600 text-lg leading-relaxed text-center lg:text-left">{course.description}</p>
              </div>

              {/* Rating and Instructor */}
              <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
                <div className="flex items-center">
                  <div className="flex items-center text-[#F4C542] mr-4">
                    <FiStar className="w-5 h-5 fill-current" />
                    <span className="ml-1 font-semibold text-[#0F2B5B]">{course.rating}</span>
                  </div>
                  <div className="text-gray-600">
                    Instructor: <span className="text-[#0F2B5B] font-semibold">{course.instructor}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-[#F4C542] transition-colors duration-200">
                    <FiHeart className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-[#F4C542] transition-colors duration-200">
                    <FiShare2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Pricing */}
              <div className="mb-6">
                {course.funding?.available ? (
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                      <div className="text-center sm:text-left">
                        <span className="text-3xl font-bold text-[#F4C542]">
                          {course.funding.fundedPrice}
                        </span>
                        <span className="text-lg text-gray-400 line-through ml-3">
                          {course.price}
                        </span>
                      </div>
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        MICT SETA
                      </span>
                    </div>
                    <p className="text-blue-600 text-sm text-center sm:text-left">
                      {course.funding.description}
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span className="text-3xl font-bold text-[#F4C542]">
                      {course.price}
                    </span>
                    {course.originalPrice && (
                      <span className="text-lg text-gray-400 line-through">
                        {course.originalPrice}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-4 mb-6">
                <button
                  onClick={handleEnrollClick}
                  className="w-full bg-[#F4C542] hover:bg-[#e0b03a] text-[#0F2B5B] font-bold py-4 rounded-xl text-lg transition-all duration-300 shadow-md hover:shadow-xl"
                >
                  Enroll Now
                </button>
              </div>

              {/* Course Features */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-[#0F2B5B] mb-4 text-center lg:text-left">This course includes:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-600">
                      <FiCheckCircle className="w-4 h-4 text-[#F4C542] mr-2" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Course Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 p-6 lg:p-8 mb-8"
          >
            <div className="border-b border-gray-200 mb-6 overflow-x-auto">
              <nav className="flex space-x-4 md:space-x-8 min-w-max">
                {['Overview', 'Curriculum', 'Instructor', 'Reviews'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-4 px-1 border-b-2 font-medium text-lg transition-colors duration-200 whitespace-nowrap ${
                      activeTab === tab
                        ? 'border-[#F4C542] text-[#0F2B5B]'
                        : 'border-transparent text-gray-500 hover:text-[#0F2B5B]'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
              {renderTabContent()}
            </div>
          </motion.div>

          {/* Related Courses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 p-6 lg:p-8"
          >
            <h2 className="text-3xl font-bold text-[#0F2B5B] mb-8 text-center">
              Related Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allCourses
                .filter(c => c.id !== course.id && c.category === course.category)
                .slice(0, 3)
                .map(relatedCourse => (
                  <div key={relatedCourse.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden group">
                    <div className="h-48 bg-gray-100 relative overflow-hidden">
                      <img 
                        src={relatedCourse.image} 
                        alt={relatedCourse.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/600x400?text=Course';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-[#0F2B5B] mb-2">{relatedCourse.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relatedCourse.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-[#F4C542] font-bold">{relatedCourse.price}</span>
                        <Link
                          to={`/course/${relatedCourse.id}`}
                          className="text-[#F4C542] hover:text-[#e0b03a] text-sm font-semibold transition-colors duration-200 inline-flex items-center"
                        >
                          View Details
                          <FiArrowLeft className="w-4 h-4 ml-1 rotate-180" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default CourseDetail;