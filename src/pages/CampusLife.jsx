import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import { organizationSchema, breadcrumbSchema } from '../data/schema';

const CampusLife = () => {
  // ─── State for Photo Gallery filtering ───
  const [selectedCategory, setSelectedCategory] = useState('All');

  // ─── Updated Gallery Items with placeholder images ───
  const galleryItems = [
    { title: 'Computer Literacy Workshop', category: 'Workshops', span: 'col-span-2 row-span-2', media: '/images/gallery/classroom/p10_isiqalo_25-05-2026.jpeg', isVideo: false },
    { title: 'Java Coding Session', category: 'Workshops', media: '/images/gallery/labs/java.JPEG', isVideo: false },
    { title: 'Computer Lab Session', category: 'Labs', media: '/images/gallery/labs/instructor2.jpeg', isVideo: false },
    { title: 'Student Collaboration', category: 'Labs', media: '/images/gallery/labs/studentCollaborate.jpeg', isVideo: false },
    { title: 'Graduation Ceremony 2026', category: 'Graduation', span: 'col-span-2', media: '/images/gallery/gallery/AllStudents.jpg', isVideo: false },
    { title: 'Certificate Handover', category: 'Certificates', media: '/images/gallery/gallery/handOver.JPG', isVideo: false },
    { title: 'Student Project Showcase', category: 'Projects', media: '/images/gallery/gallery/calculator.png', isVideo: false },
    { title: 'Awards Ceremony', category: 'Events', media: '/images/gallery/gallery/FoundersInBanners.jpg', isVideo: false },
    { title: 'Hackathon Competition', category: 'Competitions', media: '/images/gallery/gallery/hackathon_competition.png', isVideo: false },
    { title: 'Microsoft Office Training', category: 'Workshops', media: '/images/gallery/classroom/facilitatorExcel.jpeg', isVideo: false },
    { title: 'Graduation Celebration', category: 'Graduation', media: '/images/gallery/gallery/AllStudents.jpg', isVideo: false },
    { title: 'Industry Guest Speaker', category: 'Events', media: '/images/gallery/gallery/Mtshali.jpg', isVideo: false }
  ];

  const filteredGallery = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const categories = ['All', 'Workshops', 'Labs', 'Graduation', 'Events', 'Certificates', 'Projects', 'Competitions'];

  const MediaItem = ({ media, isVideo, title, className = "w-full h-full object-cover" }) => {
    const videoRef = useRef(null);

    const handlePlayVideo = () => {
      const video = videoRef.current;
      if (video) {
        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
          video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
          video.msRequestFullscreen();
        }
        video.play();
      }
    };

    if (isVideo) {
      return (
        <div className="relative w-full h-full">
          <video 
            ref={videoRef}
            src={media}
            className={className}
            muted
            loop
            playsInline
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div 
            className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/30 hover:bg-black/10 transition duration-300"
            onClick={handlePlayVideo}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#F4C542] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition duration-300">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-[#0F2B5B] ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-3 left-3">
            <span className="px-2 py-1 bg-black/70 text-white text-xs rounded flex items-center">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Click to play full screen
            </span>
          </div>
        </div>
      );
    }

    return (
      <img 
        src={media} 
        alt={title}
        loading="lazy"
        className={className}
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'flex';
        }}
      />
    );
  };

  return (
    <>
      <SEO
        title="Campus Life"
        description="Explore the vibrant learning environment at STK College – workshops, computer labs, student projects, and campus events."
        canonical="https://stkcollege.org/campus-life"
        keywords="campus life, STK College facilities, computer labs, workshops, student events"
      />
      <StructuredData schema={organizationSchema} />
      <StructuredData
        schema={breadcrumbSchema([
          { name: 'Home', url: 'https://stkcollege.org/' },
          { name: 'Campus Life', url: 'https://stkcollege.org/campus-life' },
        ])}
      />

      <div className="bg-white text-gray-800">
        {/* ─── HERO ─── */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-[#0F2B5B]">
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
                Campus <span className="text-[#F4C542]">Life</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
                Discover the vibrant learning environment at STK College where students gain practical experience through workshops, coding sessions, competitions, projects, and industry-focused training.
              </p>
              <button className="bg-[#F4C542] hover:bg-[#e0b03a] text-[#0F2B5B] font-bold px-8 py-3 rounded-lg transition duration-300 shadow-lg hover:shadow-xl text-base">
                Explore Our Journey
              </button>
            </motion.div>
          </div>
        </section>

        {/* ─── WORKSHOP GALLERY ─── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B5B] mb-3">
                Our Workshops &amp; <span className="text-[#F4C542]">Training</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Practical, hands-on training in computer literacy, coding, and professional IT skills
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Computer Literacy',
                  description: 'Our most popular program. Master essential computer skills from basics to advanced software applications.',
                  date: 'Enroll Now',
                  type: 'Most Popular',
                  media: '/images/gallery/classroom/v1_26-05-2026.mp4',
                  isVideo: true
                },
                {
                  title: 'Java Programming',
                  description: 'Learn Java from beginner to advanced with real-world projects and applications.',
                  date: 'Enroll Now',
                  type: 'Coding',
                  media: '/images/gallery/labs/java.JPEG',
                  isVideo: false
                },
                {
                  title: 'Web Development',
                  description: 'Build modern websites using the latest technologies and industry best practices.',
                  date: 'Coming Soon',
                  type: 'Coding',
                  media: '/images/gallery/gallery/webbackground.png',
                  isVideo: false
                },
                {
                  title: 'Microsoft Office Suite',
                  description: 'Master Word, Excel, PowerPoint, and Outlook for professional workplace productivity.',
                  date: 'Enroll Now',
                  type: 'Popular',
                  media: '/images/gallery/labs/groupOf4.mp4',
                  isVideo: true
                },
                {
                  title: 'Database Training',
                  description: 'Learn SQL, database design, and data management for real-world applications.',
                  date: 'Coming Soon',
                  type: 'IT',
                  media: '/images/gallery/gallery/databasebackground.png',
                  isVideo: false
                },
                {
                  title: 'AI & Machine Learning',
                  description: 'Explore artificial intelligence with practical, hands-on ML model building.',
                  date: 'Coming Soon',
                  type: 'Advanced',
                  media: '/images/courses/ai.png',
                  isVideo: false
                }
              ].map((workshop, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
                >
                  <div className="relative h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                    <MediaItem 
                      media={workshop.media} 
                      isVideo={workshop.isVideo} 
                      title={workshop.title}
                    />
                    <div className="absolute inset-0 flex items-center justify-center hidden">
                      <div className="text-center">
                        <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        <p className="text-gray-400 text-sm">Media Unavailable</p>
                      </div>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                        workshop.type === 'Most Popular' ? 'bg-[#F4C542] text-[#0F2B5B]' :
                        workshop.type === 'Popular' ? 'bg-blue-600 text-white' :
                        'bg-gray-600 text-white'
                      }`}>
                        {workshop.type}
                      </span>
                    </div>
                    {workshop.isVideo && (
                      <div className="absolute bottom-3 right-3">
                        <span className="px-2 py-1 bg-black/70 text-white text-[10px] rounded flex items-center">
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
                      <h3 className="text-xl font-bold text-[#0F2B5B]">{workshop.title}</h3>
                      <span className={`text-sm font-semibold ${workshop.date === 'Coming Soon' ? 'text-gray-400' : 'text-[#F4C542]'}`}>
                        {workshop.date}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{workshop.description}</p>
                    <button className="text-[#F4C542] hover:text-[#e0b03a] font-semibold text-sm transition duration-200 flex items-center">
                      View Details
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── COMPUTER LAB ─── */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B5B] mb-3">
                Our Learning <span className="text-[#F4C542]">Environment</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Modern facilities, hands-on practice, and expert guidance for every student
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Computer Literacy Lab',
                  description: 'Dedicated lab for computer literacy training. Perfect for beginners and those building foundational skills.',
                  type: 'Most Popular',
                  media: '/images/gallery/classroom/v1_26-05-2026.mp4',
                  isVideo: true
                },
                {
                  title: 'Practical Training',
                  description: 'Real-world training sessions with hands-on exercises, guided by experienced instructors.',
                  type: 'Interactive',
                  media: '/images/gallery/labs/instructor2.jpeg',
                  isVideo: false
                },
                {
                  title: 'Student Collaboration',
                  description: 'Group learning and collaborative projects that prepare students for the modern workplace.',
                  type: 'Team-Based',
                  media: '/images/gallery/labs/studentCollaborate.jpeg',
                  isVideo: false
                }
              ].map((lab, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
                >
                  <div className="relative h-56 bg-gray-100 flex items-center justify-center overflow-hidden">
                    <MediaItem 
                      media={lab.media} 
                      isVideo={lab.isVideo} 
                      title={lab.title}
                    />
                    <div className="absolute inset-0 flex items-center justify-center hidden">
                      <div className="text-center">
                        <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <p className="text-gray-400 text-sm">Media Unavailable</p>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                        lab.type === 'Most Popular' ? 'bg-[#F4C542] text-[#0F2B5B]' :
                        'bg-blue-600 text-white'
                      }`}>
                        {lab.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#0F2B5B] mb-2">{lab.title}</h3>
                    <p className="text-gray-600 text-sm">{lab.description}</p>
                    <div className="mt-3 flex items-center text-sm text-[#F4C542]">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span>{lab.isVideo ? 'Click video to play full screen' : 'Interactive learning environment'}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CLASSROOM EXPERIENCE ─── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B5B] mb-3">
                Classroom <span className="text-[#F4C542]">Experience</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Interactive learning environments where students gain practical skills and confidence
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Computer Literacy Classes',
                  description: 'Hands-on computer training from basics to advanced skills. Our computer literacy program has successfully trained hundreds of students.',
                  type: 'Most Popular',
                  media: '/images/gallery/classroom/studentInExcel.mp4',
                  isVideo: true
                },
                {
                  title: 'Practical Training Sessions',
                  description: 'Students practice real-world skills in our modern classrooms with expert instructor guidance.',
                  type: 'Interactive',
                  media: '/images/gallery/classroom/studentInter.mp4',
                  isVideo: true
                }
              ].map((classroom, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
                >
                  <div className="relative h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
                    <MediaItem 
                      media={classroom.media} 
                      isVideo={classroom.isVideo} 
                      title={classroom.title}
                    />
                    <div className="absolute inset-0 flex items-center justify-center hidden">
                      <div className="text-center">
                        <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <p className="text-gray-400 text-sm">Media Unavailable</p>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 bg-[#F4C542] text-[#0F2B5B] text-xs font-bold rounded-full">
                        {classroom.type}
                      </span>
                    </div>
                    {classroom.isVideo && (
                      <div className="absolute bottom-3 right-3">
                        <span className="px-2 py-1 bg-black/70 text-white text-[10px] rounded flex items-center">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                          Video
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#0F2B5B] mb-2">{classroom.title}</h3>
                    <p className="text-gray-600 text-sm">{classroom.description}</p>
                    <div className="mt-3 flex items-center text-sm text-[#F4C542]">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span>{classroom.isVideo ? 'Click video to play full screen' : 'Interactive learning environment'}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── AWARDS & RECOGNITION ─── */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B5B] mb-3">
                Awards &amp; <span className="text-[#F4C542]">Recognition</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Celebrating excellence, achievement, and the success of our students and staff
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Student of the Year',
                  description: 'Awarded to outstanding students who have demonstrated exceptional academic performance and commitment to their studies.',
                  year: '2026',
                  media: '/images/gallery/gallery/student-of-the-year.JPG',
                  isVideo: false
                },
                {
                  title: 'Best Computer Literacy Graduate',
                  description: 'Recognizing excellence in our flagship Computer Literacy program with top-performing students.',
                  year: '2026',
                  media: '/images/gallery/gallery/computer-literacy-award.jpg',
                  isVideo: false
                },
                {
                  title: 'Certification Ceremony',
                  description: 'Celebrating our graduates as they receive their completion certificates in a formal ceremony.',
                  year: '2026',
                  media: '/images/gallery/gallery/certification-ceremony.mp4',
                  isVideo: true
                },
                {
                  title: 'Academic Excellence Award',
                  description: 'Awarded to students with outstanding academic achievement across all programs.',
                  year: '2023',
                  media: '/images/gallery/gallery/academic-excellence.jpg',
                  isVideo: false
                },
                {
                  title: 'Most Improved Student',
                  description: 'Recognizing students who have shown remarkable progress and dedication to their learning journey.',
                  year: '2026',
                  media: '/images/gallery/gallery/improved.JPG',
                  isVideo: false
                },
                {
                  title: 'Graduation Ceremony',
                  description: 'Celebrating the achievements of all graduates with a formal graduation ceremony and certificate handover.',
                  year: '2024',
                  media: '/images/gallery/gallery/graduation-ceremony.mp4',
                  isVideo: true
                }
              ].map((award, index) => {
                const videoRef = useRef(null);
                const handlePlayVideo = () => {
                  const video = videoRef.current;
                  if (video) {
                    if (video.requestFullscreen) {
                      video.requestFullscreen();
                    } else if (video.webkitRequestFullscreen) {
                      video.webkitRequestFullscreen();
                    } else if (video.msRequestFullscreen) {
                      video.msRequestFullscreen();
                    }
                    video.play();
                  }
                };

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 * index }}
                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
                  >
                    <div className="relative h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                      {award.isVideo ? (
                        <div className="relative w-full h-full cursor-pointer" onClick={handlePlayVideo}>
                          <video 
                            ref={videoRef}
                            src={award.media}
                            className="w-full h-full object-cover"
                            muted
                            loop
                            playsInline
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/10 transition duration-300">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      ) : (
                        <img 
                          src={award.media} 
                          alt={award.title}
                          loading="lazy"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      )}
                      <div className="absolute inset-0 flex items-center justify-center hidden">
                        <div className="text-center">
                          <svg className="w-16 h-16 text-yellow-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                          <p className="text-gray-400 text-sm">Media Unavailable</p>
                        </div>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="px-3 py-1 bg-[#F4C542] text-[#0F2B5B] text-xs font-bold rounded-full">
                          {award.year}
                        </span>
                      </div>
                      {award.isVideo && (
                        <div className="absolute bottom-3 right-3">
                          <span className="px-2 py-1 bg-black/70 text-white text-[10px] rounded flex items-center">
                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                            Video
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-[#0F2B5B] mb-2">{award.title}</h3>
                      <p className="text-gray-600 text-sm">{award.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── STUDENT PROJECTS ─── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B5B] mb-3">
                Student <span className="text-[#F4C542]">Projects</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Practical projects that demonstrate the skills and creativity of our students
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Computer Literacy Portfolio',
                  description: 'Students showcase their mastery of Microsoft Office, file management, and essential computer skills.',
                  technology: 'Microsoft Office',
                  category: 'Computer Literacy',
                  media: '/images/gallery/gallery/computerPortfolio.png',
                  isVideo: false
                },
                {
                  title: 'Student Database System',
                  description: 'A fully functional student management system built with SQL and Java for data management.',
                  technology: 'Java, SQL',
                  category: 'Database',
                  media: '/images/gallery/gallery/JavaProject.png',
                  isVideo: false
                },
                {
                  title: 'Personal Website Project',
                  description: 'Students design and build their own professional portfolio websites using modern web technologies.',
                  technology: 'HTML, CSS, JavaScript',
                  category: 'Web Development',
                  media: '/images/gallery/gallery/studentWebsite.png',
                  isVideo: false
                },
                {
                  title: 'Digital Presentation',
                  description: 'Professional presentations created using PowerPoint to demonstrate business communication skills.',
                  technology: 'PowerPoint, Design',
                  category: 'Business Skills',
                  media: '/images/gallery/projects/digital-presentation.mp4',
                  isVideo: true
                },
                {
                  title: 'Data Analysis Project',
                  description: 'Real-world data analysis using spreadsheets, formulas, and data visualization techniques.',
                  technology: 'Excel, Data Analysis',
                  category: 'Data Skills',
                  media: '/images/gallery/gallery/studentExcelProject.png',
                  isVideo: false
                },
                {
                  title: 'IT Support Simulation',
                  description: 'Students solve real-world technical support scenarios and document their troubleshooting process.',
                  technology: 'IT Support, Troubleshooting',
                  category: 'Technical Skills',
                  media: '/images/gallery/gallery/IT-Support.png',
                  isVideo: false
                }
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
                >
                  <div className="relative h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                    <MediaItem 
                      media={project.media} 
                      isVideo={project.isVideo} 
                      title={project.title}
                    />
                    <div className="absolute inset-0 flex items-center justify-center hidden">
                      <div className="text-center">
                        <svg className="w-12 h-12 text-blue-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        <p className="text-gray-400 text-sm">Media Unavailable</p>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                        {project.category}
                      </span>
                    </div>
                    {project.isVideo && (
                      <div className="absolute bottom-3 right-3">
                        <span className="px-2 py-1 bg-black/70 text-white text-[10px] rounded flex items-center">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                          Video
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#0F2B5B] mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#F4C542] font-medium">{project.technology}</span>
                      <button className="text-gray-400 hover:text-[#F4C542] transition duration-200">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── EVENTS TIMELINE ─── */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B5B] mb-3">
                Upcoming &amp; Past <span className="text-[#F4C542]">Events</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Stay connected with our workshops, seminars, and special events throughout the year
              </p>
            </motion.div>

            <div className="space-y-6 max-w-4xl mx-auto">
              {[
                {
                  title: 'Computer Literacy Graduation Ceremony',
                  description: 'Celebrating the success of our Computer Literacy graduates with certificates and awards.',
                  date: 'July 2026',
                  type: 'Graduation',
                  media: '/images/gallery/gallery/AllStudents.jpg',
                  isVideo: true
                },
                {
                  title: 'Java Bootcamp Workshop',
                  description: 'Intensive 2-day Java programming workshop for beginners and intermediate learners.',
                  date: 'November 2025',
                  type: 'Workshop',
                  media: '/images/gallery/labs/java.JPEG',
                  isVideo: false
                },
                {
                  title: 'Career Guidance Seminar',
                  description: 'Expert advice on career paths, job opportunities, and professional development in IT.',
                  date: 'October 2025',
                  type: 'Seminar',
                  media: '/images/gallery/gallery/Goniwe.jpg',
                  isVideo: false
                },
                {
                  title: 'Guest Speaker: Industry Expert',
                  description: 'Special guest from the tech industry sharing insights on emerging technologies and trends.',
                  date: 'June 2026',
                  type: 'Guest Speaker',
                  media: '/images/staff/crop.jpg',
                  isVideo: false
                },
                {
                  title: 'Microsoft Office Certification Day',
                  description: 'Students complete their Microsoft Office certification exams in our dedicated lab.',
                  date: 'August 2024',
                  type: 'Certification',
                  media: '/images/gallery/events/office-certification.jpg',
                  isVideo: false
                },
                {
                  title: 'STK College Annual Awards',
                  description: 'Recognizing outstanding students, staff, and achievements across all programs.',
                  date: 'July 2024',
                  type: 'Awards',
                  media: '/images/gallery/events/annual-awards.mp4',
                  isVideo: true
                }
              ].map((event, index) => {
                const videoRef = useRef(null);

                const handlePlayVideo = () => {
                  const video = videoRef.current;
                  if (video) {
                    if (video.requestFullscreen) {
                      video.requestFullscreen();
                    } else if (video.webkitRequestFullscreen) {
                      video.webkitRequestFullscreen();
                    } else if (video.msRequestFullscreen) {
                      video.msRequestFullscreen();
                    }
                    video.play();
                  }
                };

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="relative pl-8 border-l-2 border-[#F4C542]/50 hover:border-[#F4C542] transition duration-300"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-[#F4C542] rounded-full"></div>
                    <div className="bg-white rounded-2xl p-6 ml-4 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-xl bg-gray-100 overflow-hidden flex-shrink-0">
                            {event.isVideo ? (
                              <div className="relative w-full h-full cursor-pointer" onClick={handlePlayVideo}>
                                <video 
                                  ref={videoRef}
                                  src={event.media}
                                  className="w-full h-full object-cover"
                                  muted
                                  loop
                                  playsInline
                                  onError={(e) => {
                                    e.target.style.display = 'none';
                                  }}
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/10 transition duration-300">
                                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                  </svg>
                                </div>
                              </div>
                            ) : (
                              <img 
                                src={event.media} 
                                alt={event.title}
                                loading="lazy"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                }}
                              />
                            )}
                          </div>
                          <h3 className="text-xl font-bold text-[#0F2B5B]">{event.title}</h3>
                        </div>
                        <span className={`px-3 py-1 text-xs font-bold rounded-full mt-2 md:mt-0 inline-block w-fit ${
                          event.type === 'Graduation' ? 'bg-[#F4C542] text-[#0F2B5B]' :
                          event.type === 'Workshop' ? 'bg-blue-600 text-white' :
                          event.type === 'Seminar' ? 'bg-purple-600 text-white' :
                          event.type === 'Guest Speaker' ? 'bg-green-600 text-white' :
                          event.type === 'Certification' ? 'bg-orange-600 text-white' :
                          'bg-red-600 text-white'
                        }`}>
                          {event.type}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{event.description}</p>
                      <div className="flex items-center text-sm text-[#F4C542]">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{event.date}</span>
                        {event.isVideo && (
                          <span className="ml-3 px-2 py-0.5 bg-black/70 text-white text-[10px] rounded flex items-center">
                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                            Video
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── STATISTICS ─── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B5B] mb-3">
                STK College <span className="text-[#F4C542]">By The Numbers</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Our impact in numbers – real results from real students
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                {
                  number: '452+',
                  label: 'Students Trained',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )
                },
                {
                  number: '5+',
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
                  number: '15+',
                  label: 'Projects Completed',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  )
                },
                {
                  number: '72%',
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
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gray-50 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className="w-14 h-14 bg-[#F4C542]/20 rounded-full flex items-center justify-center mx-auto mb-3 text-[#F4C542]">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-[#0F2B5B] mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PHOTO GALLERY ─── */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B5B] mb-3">
                Photo <span className="text-[#F4C542]">Gallery</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                A glimpse into the vibrant learning community at STK College
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition duration-200 ${
                    selectedCategory === category 
                      ? 'bg-[#F4C542] text-[#0F2B5B] shadow-md' 
                      : 'bg-white text-gray-600 hover:bg-[#F4C542]/10 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredGallery.map((photo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.05 * index }}
                  className={`relative group overflow-hidden rounded-xl bg-gray-100 ${photo.span || ''}`}
                  style={{ height: photo.span ? 'auto' : '200px' }}
                >
                  <div className="w-full h-full overflow-hidden">
                    {photo.isVideo ? (
                      <div className="relative w-full h-full">
                        <video 
                          src={photo.media}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          muted
                          loop
                          playsInline
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                          <svg className="w-12 h-12 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    ) : (
                      <img 
                        src={photo.media} 
                        alt={photo.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    )}
                    <div className="w-full h-full flex items-center justify-center hidden">
                      <div className="text-center p-4">
                        <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-gray-400 text-sm">{photo.title}</p>
                        <span className="inline-block mt-1 px-2 py-0.5 bg-[#F4C542]/20 text-[#F4C542] text-xs rounded-full">
                          {photo.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-2">
                      <svg className="w-8 h-8 text-[#F4C542] mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <p className="text-white text-xs font-medium">{photo.title}</p>
                      <span className="inline-block mt-1 px-2 py-0.5 bg-[#F4C542]/30 text-[#F4C542] text-xs rounded-full">
                        {photo.category}
                      </span>
                      {photo.isVideo && (
                        <span className="inline-block mt-1 ml-1 px-2 py-0.5 bg-black/70 text-white text-xs rounded-full">
                          Video
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-10">
              <button className="border-2 border-[#F4C542] text-[#F4C542] hover:bg-[#F4C542] hover:text-[#0F2B5B] font-semibold px-8 py-3 rounded-lg transition duration-300 text-base">
                View Full Gallery
              </button>
            </div>
          </div>
        </section>

        {/* ─── FINAL CALL TO ACTION ─── */}
        <section className="relative py-20 bg-[#0F2B5B] overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/images/gallery/labs/java.JPEG"
              className="w-full h-full object-cover opacity-20"
              alt=""
            />
          </div>
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Become Our Next <br />
                <span className="text-[#F4C542]">Success Story</span>
              </h2>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
                Join hundreds of students who have transformed their careers through our practical, hands-on training programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/registration"
                  className="bg-[#F4C542] hover:bg-[#e0b03a] text-[#0F2B5B] font-bold px-10 py-4 rounded-lg text-lg transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  Register Now
                </a>
                <a
                  href="/courses"
                  className="border border-white/30 hover:bg-white/10 px-10 py-4 rounded-lg text-lg transition-all duration-300 inline-flex items-center justify-center"
                >
                  Explore Courses
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CampusLife;