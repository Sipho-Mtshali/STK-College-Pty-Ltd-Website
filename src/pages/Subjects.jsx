// src/pages/Subjects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCode } from 'react-icons/fi';

const Subjects = () => {
  const matricSubjects = [
    {
      icon: 'fas fa-language',
      title: 'English Home Language',
      description: 'Improve your reading, writing, and communication skills with comprehensive English language training.'
    },
    {
      icon: 'fas fa-square-root-alt',
      title: 'Technical Maths',
      description: 'Develop advanced problem-solving skills through practical mathematics applications.'
    },
    {
      icon: 'fas fa-desktop',
      title: 'Computer',
      description: 'Explore computing fundamentals, programming, and essential digital skills.'
    },
    {
      icon: 'fas fa-seedling',
      title: 'Agriculture',
      description: 'Learn about farming practices, crop production, and sustainable agriculture.'
    },
    {
      icon: 'fas fa-globe-africa',
      title: 'Geography',
      description: 'Study Earth\'s features, environments, and human interactions.'
    },
    {
      icon: 'fas fa-calculator',
      title: 'Mathematics',
      description: 'Master mathematical concepts, problem-solving techniques, and analytical thinking skills.'
    },
    {
      icon: 'fas fa-percent',
      title: 'Mathematical Literacy',
      description: 'Develop practical mathematical skills for real-world applications and everyday problem-solving.'
    },
    {
      icon: 'fas fa-atom',
      title: 'Physical Sciences',
      description: 'Explore physics and chemistry concepts to understand how the world works at a fundamental level.'
    },
    {
      icon: 'fas fa-dna',
      title: 'Life Sciences',
      description: 'Study biology, ecology, and life processes to understand living organisms and their environments.'
    },
    {
      icon: 'fas fa-landmark',
      title: 'History',
      description: 'Learn about historical events, cultures, and civilizations to understand the past and its impact on today.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Accounting',
      description: 'Master financial principles, bookkeeping, and business accounting for career advancement.'
    },
    {
      icon: 'fas fa-briefcase',
      title: 'Business Studies',
      description: 'Understand business operations, management, marketing, and entrepreneurship principles.'
    }
  ];

  const programmingCourses = [
    {
      icon: 'devicon-java-plain',
      title: 'Java Programming',
      level: 'BEGINNER TO ADVANCED',
      description: 'Learn object-oriented programming with Java. Build desktop applications, understand data structures, and master core programming concepts.',
      features: ['Object Oriented Programming', 'Data Structures & Algorithms', 'GUI Development with Swing', 'Database Connectivity']
    },
    {
      icon: 'devicon-html5-plain',
      title: 'HTML5',
      level: 'BEGINNER FRIENDLY',
      description: 'Master the foundation of web development. Learn semantic HTML, forms, multimedia, and modern HTML5 features for creating structured web content.',
      features: ['Semantic HTML Structure', 'Forms & Input Elements', 'Multimedia Integration', 'Accessibility Best Practices']
    },
    {
      icon: 'devicon-css3-plain',
      title: 'CSS3 & Styling',
      level: 'BEGINNER TO INTERMEDIATE',
      description: 'Create beautiful, responsive websites with modern CSS. Learn Flexbox, Grid, animations, and advanced styling techniques.',
      features: ['Responsive Design', 'Flexbox & CSS Grid', 'Animations & Transitions', 'CSS Frameworks']
    },
    {
      icon: 'devicon-javascript-plain',
      title: 'JavaScript',
      level: 'BEGINNER TO ADVANCED',
      description: 'Bring websites to life with interactive JavaScript. Learn DOM manipulation, ES6+ features, and modern development practices.',
      features: ['DOM Manipulation', 'Event Handling', 'ES6+ Modern JavaScript', 'Asynchronous Programming']
    },
    {
      icon: 'devicon-firebase-plain',
      title: 'Firebase',
      level: 'INTERMEDIATE',
      description: 'Build scalable web applications with Google\'s Firebase platform. Learn real-time databases, authentication, and hosting.',
      features: ['Firestore Database', 'User Authentication', 'Cloud Storage', 'Real-time Updates']
    },
    {
      icon: 'devicon-mysql-plain',
      title: 'MySQL Database',
      level: 'BEGINNER TO INTERMEDIATE',
      description: 'Master database management with MySQL. Learn SQL queries, database design, and integration with web applications.',
      features: ['SQL Query Writing', 'Database Design', 'Data Relationships', 'Performance Optimization']
    },
    {
      icon: 'devicon-python-plain',
      title: 'Python Programming',
      level: 'BEGINNER TO ADVANCED',
      description: 'Learn the versatile Python language for web development, data science, automation, and AI. Build powerful applications with clean, readable code.',
      features: ['Web Development with Django/Flask', 'Data Analysis & Visualization', 'Automation & Scripting', 'Machine Learning Basics']
    },
    {
      icon: 'devicon-csharp-plain',
      title: 'C# Programming',
      level: 'BEGINNER TO ADVANCED',
      description: 'Master Microsoft\'s powerful C# language for desktop, web, and mobile applications. Learn .NET framework development and modern programming practices.',
      features: ['Object-Oriented Programming', 'Windows Forms & WPF', '.NET Framework & Core', 'Desktop Application Development']
    },
    {
      icon: 'devicon-dotnetcore-plain',
      title: 'ASP.NET MVC',
      level: 'INTERMEDIATE TO ADVANCED',
      description: 'Build robust web applications using the Model-View-Controller pattern. Learn ASP.NET MVC framework for scalable enterprise web development.',
      features: ['MVC Architecture Pattern', 'Razor View Engine', 'Entity Framework', 'Web API Development']
    },
    {
      icon: 'devicon-react-original',
      title: 'React.js',
      level: 'INTERMEDIATE TO ADVANCED',
      description: 'Create dynamic, interactive user interfaces with React. Learn component-based development, hooks, and modern frontend architecture.',
      features: ['Component-Based Architecture', 'React Hooks & State Management', 'JSX & Virtual DOM', 'Modern Frontend Development']
    },
    {
      icon: 'devicon-postgresql-plain',
      title: 'PostgreSQL Database',
      level: 'BEGINNER TO ADVANCED',
      description: 'Master advanced database management with PostgreSQL. Learn complex queries, data modeling, and enterprise-level database solutions.',
      features: ['Advanced SQL Queries', 'Database Administration', 'Performance Optimization', 'Data Modeling & Design']
    },
    {
      icon: 'fas fa-exchange-alt',
      title: 'API Development',
      level: 'INTERMEDIATE TO ADVANCED',
      description: 'Design and build powerful APIs for web and mobile applications. Learn REST principles, authentication, and modern API development practices.',
      features: ['RESTful API Design', 'API Authentication & Security', 'Documentation & Testing', 'Integration Patterns']
    }
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
            Our Subjects & Languages
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Comprehensive learning opportunities in both academic subjects and professional IT skills
          </p>
        </motion.div>

        {/* Matric Subjects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Matric Upgrade Subjects
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Improve your high school results with our comprehensive subject offerings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {matricSubjects.map((subject, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card-enhanced rounded-xl p-6 text-center hover-lift group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${subject.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                  {subject.title}
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  {subject.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Programming Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <FiCode className="w-8 h-8 text-blue-400 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Programming & Development Languages
              </h2>
            </div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Master modern programming languages and technologies with hands-on projects and expert guidance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {programmingCourses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card-enhanced rounded-xl p-6 hover-lift group border border-blue-500/30"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className={`${course.icon} text-xl text-white`}></i>
                  </div>
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold border border-green-500/30 uppercase tracking-wide">
                    {course.level}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {course.title}
                </h3>
                
                <p className="text-gray-200 mb-4 leading-relaxed text-sm">
                  {course.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {course.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <FiAward className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full mt-4 btn-primary-high-contrast py-3 px-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
                  Enroll Now
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 card-enhanced rounded-2xl p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Whether you're upgrading your matric subjects or starting your IT career, 
            we have the perfect learning path for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-secondary-high-contrast px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105">
              Matric Registration
            </button>
            <button className="btn-blue-high-contrast px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105">
              IT Course Registration
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Subjects;