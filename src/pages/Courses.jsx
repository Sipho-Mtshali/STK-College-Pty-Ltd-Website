import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiUsers, FiBookOpen, FiSearch, FiStar, FiZap } from 'react-icons/fi';

const Courses = () => {
  const courseCategories = [
    'All Courses',
    'Programming',
    'Microsoft Office',
    'Database',
    'Web Development',
    'AI & Machine Learning'
  ];

  const courses = [
    {
      id: 1,
      title: 'Python Programming',
      instructor: 'Sipho Mtshali',
      category: 'Programming',
      lessons: 15,
      students: 0,
      price: 'R10,500',
      originalPrice: 'R16,000',
      image: '/images/courses/python.jpg',
      rating: 4.8,
      description: 'Master Python programming from basics to advanced concepts including web development and data analysis.',
      features: ['Python Fundamentals', 'Django Web Framework', 'Data Analysis', 'Automation Scripting'],
      popular: true,
      funding: {
        available: false,
        planned: true,
        provider: 'MICT SETA',
        description: 'Future funding opportunities planned'
      }
    },
    {
      id: 2,
      title: 'Java Development',
      instructor: 'Sipho Mtshali',
      category: 'Programming',
      lessons: 18,
      students: 0,
      price: 'R12,000',
      originalPrice: 'R16,500',
      image: '/images/courses/java.jpg',
      rating: 4.6,
      description: 'Comprehensive Java programming and enterprise application development.',
      features: ['OOP Principles', 'Spring Framework', 'Database Integration', 'Project Development'],
      popular: false,
      funding: null
    },
    {
      id: 3,
      title: 'Microsoft Word (Beginner - Intermediate)',
      instructor: 'Sipho Mtshali',
      category: 'Microsoft Office',
      lessons: 12,
      students: 0,
      price: 'R4,500',
      originalPrice: 'R8,500',
      image: '/images/courses/word-intermediate.jpg',
      rating: 4.7,
      description: 'Complete Word training from basic document creation to advanced formatting and collaboration.',
      features: ['Document Creation', 'Advanced Formatting', 'Mail Merge', 'Collaboration Tools'],
      popular: true,
      funding: null
    },
    {
      id: 4,
      title: 'Microsoft Excel (Beginner - Intermediate)',
      instructor: 'Sipho Mtshali',
      category: 'Microsoft Office',
      lessons: 15,
      students: 0,
      price: 'R6,500',
      originalPrice: 'R10,800',
      image: '/images/courses/excel.jpg',
      rating: 4.8,
      description: 'Master Excel from basic spreadsheets to advanced formulas, charts, and data analysis.',
      features: ['Formulas & Functions', 'Charts & Graphs', 'Data Analysis', 'Pivot Tables'],
      popular: true,
      funding: null
    },
    {
      id: 5,
      title: 'Microsoft PowerPoint (Beginner - Intermediate)',
      instructor: 'Sipho Mtshali',
      category: 'Microsoft Office',
      lessons: 10,
      students: 0,
      price: 'R3,000',
      originalPrice: 'R8,300',
      image: '/images/courses/powepoint.png',
      rating: 4.6,
      description: 'Create professional presentations with animations, transitions, and multimedia integration.',
      features: ['Slide Design', 'Animations', 'Multimedia Integration', 'Presentation Skills'],
      popular: false,
      funding: null
    },
    {
      id: 6,
      title: 'Microsoft Teams',
      instructor: 'Sipho Mtshali',
      category: 'Microsoft Office',
      lessons: 6,
      students: 0,
      price: 'R1,000',
      originalPrice: 'R3,000',
      image: '/images/courses/teams.jpg',
      rating: 4.8,
      description: 'Master Microsoft Teams for effective collaboration and communication in modern workplaces.',
      features: ['Team Management', 'Meetings & Calls', 'File Sharing', 'Integration'],
      popular: true,
      funding: null
    },
    {
      id: 7,
      title: 'SQL Database Management',
      instructor: 'Sipho Mtshali',
      category: 'Database',
      lessons: 20,
      students: 0,
      price: 'R20,500',
      originalPrice: 'R30,000',
      image: '/images/courses/sql-dbms.jpg',
      rating: 4.9,
      description: 'Comprehensive database management and SQL programming course.',
      features: ['Database Design', 'Advanced Queries', 'Stored Procedures', 'Performance Tuning'],
      popular: true,
      funding: null
    },
    {
      id: 8,
      title: 'Website Development',
      instructor: 'Sipho Mtshali',
      category: 'Web Development',
      lessons: 16,
      students: 0,
      price: 'R10,500',
      originalPrice: 'R15,000',
      image: '/images/courses/webdev.jpg',
      rating: 4.7,
      description: 'Modern web development with React.js and related technologies.',
      features: ['React Components', 'Hooks & State', 'API Integration', 'Deployment'],
      popular: true,
      funding: null
    },
    {
      id: 9,
      title: 'AI & Machine Learning',
      instructor: 'STK College AI',
      category: 'AI & Machine Learning',
      lessons: 30,
      students: 0,
      price: 'R25,000',
      image: '/images/courses/ai.png',
      rating: 4.9,
      description: 'Comprehensive AI and Machine Learning program with hands-on projects.',
      features: ['Machine Learning', 'Neural Networks', 'Deep Learning', 'Real Projects'],
      popular: false,
      funding: {
        available: false,
        planned: true,
        provider: 'MICT SETA',
        description: 'Future learnership opportunities planned'
      }
    },
    {
      id: 10,
      title: 'Microsoft Office Complete Suite',
      instructor: 'Sipho Mtshali',
      category: 'Microsoft Office',
      lessons: 35,
      students: 0,
      price: 'R20,000',
      originalPrice: 'R25,000',
      image: '/images/courses/ms office.png',
      rating: 4.9,
      description: 'Complete Microsoft Office training covering Word, Excel, PowerPoint, and Teams.',
      features: ['Word Mastery', 'Excel Expertise', 'PowerPoint Skills', 'Teams Collaboration'],
      popular: true,
      funding: null
    }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All Courses');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'All Courses' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // WhatsApp Icon Component (since React Icons doesn't have WhatsApp)
  const WhatsAppIcon = () => (
    <svg 
      className="w-5 h-5 mr-2" 
      fill="currentColor" 
      viewBox="0 0 24 24"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.18-1.24-6.169-3.495-8.424"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Courses
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive IT training programs designed to launch your tech career. 
            Preparing for future accreditation and funding opportunities.
          </p>
        </motion.div>

        {/* Future Opportunities Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-2xl p-6 border border-yellow-500/30 relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center md:justify-start">
                  <FiZap className="w-6 h-6 mr-2 text-yellow-400" />
                  Future Opportunities
                </h3>
                <p className="text-yellow-100">
                  We are preparing for QCTO accreditation and future MICT SETA funding opportunities. 
                  Join us as we build toward becoming an accredited training provider.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filters and Search - Reversed Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filter - Now on left */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {courseCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-yellow-500 text-gray-900 shadow-lg shadow-yellow-500/25'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search Bar - Now on right */}
            <div className="relative w-full lg:w-96">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search courses or instructors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-6"
        >
          <p className="text-gray-400">
            Showing {filteredCourses.length} of {courses.length} courses
            {selectedCategory !== 'All Courses' && ` in ${selectedCategory}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card-enhanced rounded-xl overflow-hidden hover-lift group border border-gray-700/50 hover:border-yellow-500/30 transition-all duration-300"
            >
              {/* Course Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                
                {/* Course Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {course.category}
                  </span>
                </div>
                
                {/* Popular Badge */}
                {course.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-yellow-500 text-gray-900 px-2 py-1 rounded text-xs font-bold shadow-lg">
                      🔥 Popular
                    </span>
                  </div>
                )}
                
                {/* Future Funding Badge */}
                {course.funding?.planned && (
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded text-sm font-bold shadow-lg flex items-center">
                      Future Funding Planned
                    </span>
                  </div>
                )}
              </div>

              {/* Course Content */}
              <div className="p-6">
                {/* Course Title and Instructor */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300 line-clamp-2">
                    {course.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-400 text-sm">
                      by {course.instructor}
                    </p>
                    <div className="flex items-center text-yellow-400">
                      <FiStar className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium ml-1">{course.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Course Description */}
                <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-2">
                  {course.description}
                </p>

                {/* Course Stats */}
                <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <FiBookOpen className="w-4 h-4 mr-1" />
                      <span>{course.lessons} Lessons</span>
                    </div>
                    <div className="flex items-center">
                      <FiUsers className="w-4 h-4 mr-1" />
                      <span>{course.students}</span>
                    </div>
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  {course.funding?.planned ? (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-yellow-400">
                            {course.price}
                          </span>
                        </div>
                        <span className="text-sm text-yellow-400 font-semibold bg-yellow-500/20 px-2 py-1 rounded">
                          Future MICT SETA
                        </span>
                      </div>
                      <div className="text-xs text-gray-400">
                        {course.funding.description}
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-yellow-400">
                        {course.price}
                      </span>
                      {course.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          {course.originalPrice}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Link
                    to={`/course/${course.id}`}
                    className="flex-1 bg-gray-800 text-gray-300 py-3 px-4 rounded-lg text-sm font-medium text-center hover:bg-gray-700 hover:text-white transition-all duration-200 border border-gray-600 hover:border-gray-500"
                  >
                    View Details
                  </Link>
                  <Link
                    to="/it-register"
                    className="flex-1 btn-primary-high-contrast py-3 px-4 rounded-lg text-sm font-medium text-center transition-all duration-200 transform hover:scale-105"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiSearch className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">No Courses Found</h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              {searchTerm 
                ? `No courses found matching "${searchTerm}". Try adjusting your search terms.`
                : `No courses available in "${selectedCategory}". Try selecting a different category.`
              }
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All Courses');
                setSearchTerm('');
              }}
              className="btn-secondary-high-contrast px-6 py-3 rounded-lg font-medium"
            >
              View All Courses
            </button>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 card-enhanced rounded-2xl p-8 text-center border border-yellow-500/20"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help Choosing a Course?
          </h2>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Our career advisors can help you select the perfect course based on your goals, 
            experience level, and career aspirations. Get personalized guidance today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-primary-high-contrast px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <FiUsers className="w-5 h-5 mr-2" />
              Get Free Consultation
            </Link>
            <a
              href="https://wa.me/27763627488"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <WhatsAppIcon />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Courses;