import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiUsers, FiBookOpen, FiSearch, FiStar, FiZap, FiArrowRight } from 'react-icons/fi';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import { organizationSchema, breadcrumbSchema } from '../data/schema';
// Import the unified data source
import { allCourses } from '../data/coursesData';

const Courses = () => {
  const courseCategories = [
    'All Courses',
    'Programming',
    'Microsoft Office',
    'Database',
    'Web Development',
    'AI & Machine Learning',
    'Cybersecurity',
    'Computer Literacy'
  ];

  // Use the imported data directly
  const courses = allCourses;

  const [selectedCategory, setSelectedCategory] = useState('All Courses');
  const [searchTerm, setSearchTerm] = useState('');
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'All Courses' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Close lightbox with Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setLightboxImage(null);
    };
    if (lightboxImage) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [lightboxImage]);

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
    <>
      <SEO
        title="Courses"
        description="Explore STK College's comprehensive IT training programs including Python, Java, Microsoft Office, SQL, Web Development, and AI learnerships."
        canonical="https://stkcollege.org/courses"
        keywords="IT courses South Africa, programming courses, Python training, Java course, Microsoft Office training, AI learnerships"
      />
      <StructuredData schema={organizationSchema} />
      <StructuredData
        schema={breadcrumbSchema([
          { name: 'Home', url: 'https://stkcollege.org/' },
          { name: 'Courses', url: 'https://stkcollege.org/courses' },
        ])}
      />

      <div className="bg-white text-gray-800">
        {/* ─── HERO ─── */}
        <section className="relative min-h-[45vh] flex items-center overflow-hidden bg-[#0F2B5B]">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/gallery/labs/java.JPEG"
              alt="STK College courses"
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
                Our <span className="text-[#F4C542]">Courses</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Discover our comprehensive IT training programs designed to launch your tech career. 
                Preparing for future accreditation and funding opportunities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ─── CONTENT ─── */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Future Opportunities Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-12"
            >
              <div className="bg-[#0F2B5B] rounded-2xl p-6 shadow-md border border-[#F4C542]/30 relative overflow-hidden">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center md:justify-start">
                      <FiZap className="w-6 h-6 mr-2 text-[#F4C542]" />
                      Future Opportunities
                    </h3>
                    <p className="text-gray-200">
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
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {courseCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        selectedCategory === category
                          ? 'bg-[#F4C542] text-[#0F2B5B] shadow-md'
                          : 'bg-white text-gray-600 hover:bg-[#F4C542]/10 border border-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                <div className="relative w-full lg:w-96">
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search courses or instructors..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F4C542] focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>
            </motion.div>

            {/* Results Count */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-6"
            >
              <p className="text-gray-600">
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
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
                >
                  <div 
                    className="relative h-48 bg-gray-100 overflow-hidden cursor-pointer"
                    onClick={() => setLightboxImage(course.image)}
                  >
                    <img 
                      src={course.image} 
                      alt={course.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#F4C542] text-[#0F2B5B] px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                        {course.category}
                      </span>
                    </div>
                    {course.popular && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-[#F4C542] text-[#0F2B5B] px-2 py-1 rounded text-xs font-bold shadow-lg">
                          🔥 Popular
                        </span>
                      </div>
                    )}
                    {course.funding?.planned && (
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-[#F4C542] text-[#0F2B5B] px-3 py-1 rounded text-sm font-bold shadow-lg flex items-center">
                          Future Funding Planned
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-[#0F2B5B] mb-2 group-hover:text-[#F4C542] transition-colors duration-300 line-clamp-2">
                        {course.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <p className="text-gray-600 text-sm">
                          by {course.instructor}
                        </p>
                        <div className="flex items-center text-[#F4C542]">
                          <FiStar className="w-4 h-4 fill-current" />
                          <span className="text-sm font-medium ml-1">{course.rating}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                      {course.description}
                    </p>

                    <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
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

                    <div className="mb-6">
                      {course.funding?.planned ? (
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="text-2xl font-bold text-[#F4C542]">
                                {course.price}
                              </span>
                            </div>
                            <span className="text-sm text-[#F4C542] font-semibold bg-[#F4C542]/20 px-2 py-1 rounded">
                              Future MICT SETA
                            </span>
                          </div>
                          <div className="text-xs text-gray-500">
                            {course.funding.description}
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-[#F4C542]">
                            {course.price}
                          </span>
                          {course.originalPrice && (
                            <span className="text-sm text-gray-400 line-through">
                              {course.originalPrice}
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="flex space-x-3">
                      <Link
                        to={`/course/${course.id}`}
                        className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg text-sm font-medium text-center hover:bg-gray-200 transition-all duration-200 border border-gray-200"
                      >
                        View Details
                      </Link>
                      <Link
                        to="/it-register"
                        className="flex-1 bg-[#F4C542] hover:bg-[#e0b03a] text-[#0F2B5B] font-bold py-3 px-4 rounded-lg text-sm text-center transition-all duration-300 shadow-md hover:shadow-xl"
                      >
                        Enroll Now
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filteredCourses.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiSearch className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-semibold text-[#0F2B5B] mb-4">No Courses Found</h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
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
                  className="bg-[#F4C542] hover:bg-[#e0b03a] text-[#0F2B5B] font-bold px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl"
                >
                  View All Courses
                </button>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16 bg-white rounded-2xl shadow-md p-8 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-3xl font-bold text-[#0F2B5B] mb-4">
                Need Help Choosing a Course?
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-lg leading-relaxed">
                Our career advisors can help you select the perfect course based on your goals, 
                experience level, and career aspirations. Get personalized guidance today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-[#F4C542] hover:bg-[#e0b03a] text-[#0F2B5B] font-bold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-xl"
                >
                  <FiUsers className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </Link>
                <a
                  href="https://wa.me/27763627488"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-xl"
                >
                  <WhatsAppIcon />
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* ─── LIGHTBOX MODAL ─── */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-lg shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200"
              aria-label="Close fullscreen image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={lightboxImage}
              alt="Full view"
              className="w-full h-full object-contain max-h-[90vh]"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Courses;