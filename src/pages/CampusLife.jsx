import { motion } from 'framer-motion';

const CampusLife = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 py-16 px-4 bg-gradient-to-br from-blue-900/50 to-blue-800/30 rounded-2xl border border-yellow-500/20"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Campus Life
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Discover the vibrant learning environment at STK College where students gain practical experience through workshops, coding sessions, competitions, projects, and industry-focused training.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold px-8 py-3 rounded-lg transition duration-300 shadow-lg hover:shadow-yellow-500/25">
            Explore Our Journey
          </button>
        </motion.div>

        {/* Workshop Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Our Workshops & Training
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Practical, hands-on training in computer literacy, coding, and professional IT skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Computer Literacy',
                description: 'Our most popular program. Master essential computer skills from basics to advanced software applications.',
                date: 'Enroll Now',
                type: 'Most Popular',
                video: true
              },
              {
                title: 'Python Programming',
                description: 'Learn Python from beginner to advanced with real-world projects and applications.',
                date: 'Coming Soon',
                type: 'Coding',
                video: false
              },
              {
                title: 'Web Development',
                description: 'Build modern websites using the latest technologies and industry best practices.',
                date: 'Coming Soon',
                type: 'Coding',
                video: false
              },
              {
                title: 'Microsoft Office Suite',
                description: 'Master Word, Excel, PowerPoint, and Outlook for professional workplace productivity.',
                date: 'Enroll Now',
                type: 'Popular',
                video: true
              },
              {
                title: 'Database Training',
                description: 'Learn SQL, database design, and data management for real-world applications.',
                date: 'Coming Soon',
                type: 'IT',
                video: false
              },
              {
                title: 'AI & Machine Learning',
                description: 'Explore artificial intelligence with practical, hands-on ML model building.',
                date: 'Coming Soon',
                type: 'Advanced',
                video: false
              }
            ].map((workshop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="card-enhanced rounded-xl overflow-hidden hover-lift border border-gray-700/50"
              >
                <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  {workshop.video && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition duration-300 cursor-pointer">
                        <svg className="w-7 h-7 text-blue-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}
                  {!workshop.video && (
                    <div className="text-center">
                      <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      <p className="text-gray-400 text-sm">Workshop Image</p>
                    </div>
                  )}
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                      workshop.type === 'Most Popular' ? 'bg-yellow-500 text-blue-900' :
                      workshop.type === 'Popular' ? 'bg-blue-500 text-white' :
                      'bg-gray-600 text-gray-300'
                    }`}>
                      {workshop.type}
                    </span>
                  </div>
                  {workshop.video && (
                    <div className="absolute bottom-3 right-3">
                      <span className="px-2 py-1 bg-black/70 text-white text-xs rounded flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        Video
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{workshop.title}</h3>
                    <span className="text-sm text-yellow-400 font-semibold">{workshop.date}</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{workshop.description}</p>
                  <button className="text-yellow-400 hover:text-yellow-300 font-semibold text-sm transition duration-200 flex items-center">
                    View Details
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Computer Lab */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Our Learning Environment
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Modern facilities, hands-on practice, and expert guidance for every student
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Computer Literacy Lab',
                description: 'Dedicated lab for computer literacy training. Perfect for beginners and those building foundational skills.',
                type: 'Most Popular'
              },
              {
                title: 'Practical Training',
                description: 'Real-world training sessions with hands-on exercises, guided by experienced instructors.',
                type: 'Interactive'
              },
              {
                title: 'Student Collaboration',
                description: 'Group learning and collaborative projects that prepare students for the modern workplace.',
                type: 'Team-Based'
              }
            ].map((lab, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="card-enhanced rounded-xl overflow-hidden hover-lift border border-gray-700/50"
              >
                <div className="relative h-56 bg-gradient-to-br from-blue-900/50 to-gray-800 flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition duration-300 cursor-pointer">
                      <svg className="w-8 h-8 text-blue-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                      lab.type === 'Most Popular' ? 'bg-yellow-500 text-blue-900' :
                      'bg-blue-500 text-white'
                    }`}>
                      {lab.type}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm absolute bottom-4">Click to play video</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{lab.title}</h3>
                  <p className="text-gray-300 text-sm">{lab.description}</p>
                  <div className="mt-4 flex items-center text-sm text-yellow-400">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>Watch class clip</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Classroom Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Classroom Experience
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Interactive learning environments where students gain practical skills and confidence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Computer Literacy Classes',
                description: 'Hands-on computer training from basics to advanced skills. Our computer literacy program has successfully trained hundreds of students.',
                type: 'Most Popular'
              },
              {
                title: 'Practical Training Sessions',
                description: 'Students practice real-world skills in our modern classrooms with expert instructor guidance.',
                type: 'Interactive'
              }
            ].map((classroom, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="card-enhanced rounded-xl overflow-hidden hover-lift border border-gray-700/50"
              >
                <div className="relative h-64 bg-gradient-to-br from-blue-800/50 to-gray-800 flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition duration-300 cursor-pointer">
                      <svg className="w-8 h-8 text-blue-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-yellow-500 text-blue-900 text-xs font-bold rounded-full">
                      {classroom.type}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm absolute bottom-4">Click to play video</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{classroom.title}</h3>
                  <p className="text-gray-300 text-sm">{classroom.description}</p>
                  <div className="mt-4 flex items-center text-sm text-yellow-400">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>Watch class clip</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Awards & Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Awards & Recognition
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Celebrating excellence, achievement, and the success of our students and staff
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Student of the Year',
                description: 'Awarded to outstanding students who have demonstrated exceptional academic performance and commitment to their studies.',
                year: '2024'
              },
              {
                title: 'Best Computer Literacy Graduate',
                description: 'Recognizing excellence in our flagship Computer Literacy program with top-performing students.',
                year: '2024'
              },
              {
                title: 'Certification Ceremony',
                description: 'Celebrating our graduates as they receive their completion certificates in a formal ceremony.',
                year: '2024'
              },
              {
                title: 'Academic Excellence Award',
                description: 'Awarded to students with outstanding academic achievement across all programs.',
                year: '2023'
              },
              {
                title: 'Most Improved Student',
                description: 'Recognizing students who have shown remarkable progress and dedication to their learning journey.',
                year: '2023'
              },
              {
                title: 'Graduation Ceremony',
                description: 'Celebrating the achievements of all graduates with a formal graduation ceremony and certificate handover.',
                year: '2024'
              }
            ].map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="card-enhanced rounded-xl overflow-hidden hover-lift border border-gray-700/50"
              >
                <div className="relative h-48 bg-gradient-to-br from-yellow-900/30 to-gray-800 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-yellow-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <p className="text-gray-400 text-sm">Award Image</p>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-yellow-500 text-blue-900 text-xs font-bold rounded-full">
                      {award.year}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{award.title}</h3>
                  <p className="text-gray-300 text-sm">{award.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Student Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Student Projects
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Practical projects that demonstrate the skills and creativity of our students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Computer Literacy Portfolio',
                description: 'Students showcase their mastery of Microsoft Office, file management, and essential computer skills.',
                technology: 'Microsoft Office',
                category: 'Computer Literacy'
              },
              {
                title: 'Student Database System',
                description: 'A fully functional student management system built with SQL and Python for data management.',
                technology: 'Python, SQL',
                category: 'Database'
              },
              {
                title: 'Personal Website Project',
                description: 'Students design and build their own professional portfolio websites using modern web technologies.',
                technology: 'HTML, CSS, JavaScript',
                category: 'Web Development'
              },
              {
                title: 'Digital Presentation',
                description: 'Professional presentations created using PowerPoint to demonstrate business communication skills.',
                technology: 'PowerPoint, Design',
                category: 'Business Skills'
              },
              {
                title: 'Data Analysis Project',
                description: 'Real-world data analysis using spreadsheets, formulas, and data visualization techniques.',
                technology: 'Excel, Data Analysis',
                category: 'Data Skills'
              },
              {
                title: 'IT Support Simulation',
                description: 'Students solve real-world technical support scenarios and document their troubleshooting process.',
                technology: 'IT Support, Troubleshooting',
                category: 'Technical Skills'
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="card-enhanced rounded-xl overflow-hidden hover-lift border border-gray-700/50"
              >
                <div className="relative h-48 bg-gradient-to-br from-blue-900/50 to-gray-800 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-12 h-12 text-blue-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <p className="text-gray-400 text-sm">Project Preview</p>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-yellow-400 font-medium">{project.technology}</span>
                    <button className="text-gray-400 hover:text-yellow-400 transition duration-200">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Events Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Upcoming & Past Events
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Stay connected with our workshops, seminars, and special events throughout the year
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: 'Computer Literacy Graduation Ceremony',
                description: 'Celebrating the success of our Computer Literacy graduates with certificates and awards.',
                date: 'December 2024',
                type: 'Graduation'
              },
              {
                title: 'Python Bootcamp Workshop',
                description: 'Intensive 2-day Python programming workshop for beginners and intermediate learners.',
                date: 'November 2024',
                type: 'Workshop'
              },
              {
                title: 'Career Guidance Seminar',
                description: 'Expert advice on career paths, job opportunities, and professional development in IT.',
                date: 'October 2024',
                type: 'Seminar'
              },
              {
                title: 'Guest Speaker: Industry Expert',
                description: 'Special guest from the tech industry sharing insights on emerging technologies and trends.',
                date: 'September 2024',
                type: 'Guest Speaker'
              },
              {
                title: 'Microsoft Office Certification Day',
                description: 'Students complete their Microsoft Office certification exams in our dedicated lab.',
                date: 'August 2024',
                type: 'Certification'
              },
              {
                title: 'STK College Annual Awards',
                description: 'Recognizing outstanding students, staff, and achievements across all programs.',
                date: 'July 2024',
                type: 'Awards'
              }
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="relative pl-8 border-l-2 border-yellow-500/50 hover:border-yellow-400 transition duration-300"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-yellow-500 rounded-full"></div>
                <div className="card-enhanced rounded-xl p-6 ml-4 hover-lift border border-gray-700/50">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">{event.title}</h3>
                    <span className={`px-3 py-1 text-xs font-bold rounded-full mt-2 md:mt-0 ${
                      event.type === 'Graduation' ? 'bg-yellow-500 text-blue-900' :
                      event.type === 'Workshop' ? 'bg-blue-500 text-white' :
                      event.type === 'Seminar' ? 'bg-purple-500 text-white' :
                      event.type === 'Guest Speaker' ? 'bg-green-500 text-white' :
                      event.type === 'Certification' ? 'bg-orange-500 text-white' :
                      'bg-red-500 text-white'
                    }`}>
                      {event.type}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm mb-2">{event.description}</p>
                  <div className="flex items-center text-sm text-yellow-400">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{event.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              STK College By The Numbers
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our impact in numbers – real results from real students
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                number: '600+',
                label: 'Students Trained',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )
              },
              {
                number: '40+',
                label: 'Workshops Hosted',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                )
              },
              {
                number: '250+',
                label: 'Certificates Awarded',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                number: '120+',
                label: 'Projects Completed',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                )
              },
              {
                number: '95%',
                label: 'Student Satisfaction',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                )
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="card-enhanced rounded-xl p-6 text-center border border-gray-700/50"
              >
                <div className="w-14 h-14 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-3 text-yellow-400">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Photo Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Photo Gallery
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A glimpse into the vibrant learning community at STK College
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['All', 'Workshops', 'Labs', 'Graduation', 'Events', 'Certificates', 'Projects', 'Competitions'].map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition duration-200 ${
                  index === 0 
                    ? 'bg-yellow-500 text-blue-900' 
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Masonry Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { title: 'Computer Literacy Workshop', category: 'Workshops', span: 'col-span-2 row-span-2' },
              { title: 'Python Coding Session', category: 'Workshops' },
              { title: 'Computer Lab Session', category: 'Labs' },
              { title: 'Student Collaboration', category: 'Labs' },
              { title: 'Graduation Ceremony 2024', category: 'Graduation', span: 'col-span-2' },
              { title: 'Certificate Handover', category: 'Certificates' },
              { title: 'Student Project Showcase', category: 'Projects' },
              { title: 'Awards Ceremony', category: 'Events' },
              { title: 'Hackathon Competition', category: 'Competitions' },
              { title: 'Microsoft Office Training', category: 'Workshops' },
              { title: 'Graduation Celebration', category: 'Graduation' },
              { title: 'Industry Guest Speaker', category: 'Events' }
            ].map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                className={`relative group overflow-hidden rounded-xl bg-gradient-to-br from-blue-900/30 to-gray-800 ${photo.span || ''}`}
                style={{ height: photo.span ? 'auto' : '200px' }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-4">
                    <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-gray-400 text-xs">{photo.title}</p>
                    <span className="inline-block mt-1 px-2 py-0.5 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">
                      {photo.category}
                    </span>
                  </div>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-8 h-8 text-yellow-400 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <p className="text-white text-xs font-medium">{photo.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-8">
            <button className="border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-blue-900 font-semibold px-8 py-3 rounded-lg transition duration-300">
              View Full Gallery
            </button>
          </div>
        </motion.div>
        {/* Final Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mb-8"
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900 to-blue-800 p-8 md:p-12 text-center border border-yellow-500/30">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Become Our Next Success Story
              </h2>
              <p className="text-gray-200 text-lg max-w-2xl mx-auto mb-8">
                Join hundreds of students who have transformed their careers through our practical, hands-on training programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/registration"
                  className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold px-8 py-3 rounded-lg transition duration-300 shadow-lg hover:shadow-yellow-500/25"
                >
                  Register Now
                </a>
                <a
                  href="/courses"
                  className="border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-blue-900 font-bold px-8 py-3 rounded-lg transition duration-300"
                >
                  Explore Courses
                </a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default CampusLife;