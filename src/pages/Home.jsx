import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  FiArrowRight, FiUsers, FiBookOpen, FiBriefcase, FiAward, FiClock, 
  FiCheckCircle, FiStar, FiCalendar, FiTrendingUp, FiMapPin, FiMail,
  FiUser, FiMonitor, FiCpu, FiGlobe, FiServer, FiLayers
} from 'react-icons/fi';
import { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import { organizationSchema, websiteSchema, breadcrumbSchema } from '../data/schema';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const Home = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  // ─── Carousel data ───
  const originalImages = [
    {
      src: '/images/gallery/classroom/p2_isiqalo_25-05-2026.jpeg',
      alt: 'Java programming class at STK College'
    },
    {
      src: '/images/gallery/classroom/p10_isiqalo_25-05-2026.jpeg',
      alt: 'Python programming session at STK College'
    },
    {
      src: '/images/gallery/labs/instructor1.jpeg',
      alt: 'Web development workshop at STK College'
    },
    {
      src: '/images/gallery/labs/java.JPEG',
      alt: 'Database management training at STK College'
    },
    {
      src: '/images/gallery/classroom/facilitatorComputer.jpeg',
      alt: 'Computer workshop at STK College'
    },
    {
      src: '/images/gallery/classroom/facilitatorExcel.jpeg',
      alt: 'Excel workshop at STK College'
    }
  ];

  const slides = [
    originalImages[originalImages.length - 1],
    ...originalImages,
    originalImages[0]
  ];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setCurrentIndex((prev) => prev + 1);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [isTransitioning]);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex === 0) {
      setCurrentIndex(originalImages.length);
    } else if (currentIndex === slides.length - 1) {
      setCurrentIndex(1);
    }
  };

  const goToSlide = (index) => {
    setCurrentIndex(index + 1);
  };

  const nextSlide = () => {
    if (!isTransitioning) {
      setCurrentIndex((prev) => prev + 1);
      setIsTransitioning(true);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setCurrentIndex((prev) => prev - 1);
      setIsTransitioning(true);
    }
  };

  return (
    <>
      <SEO
        title="Home"
        description="STK College offers practical IT training, programming courses, AI learnerships, and career-focused education in South Africa."
        canonical="https://stkcollege.org/"
        keywords="IT training South Africa, programming courses, AI learnerships, STK College, tech education"
      />
      <StructuredData schema={organizationSchema} />
      <StructuredData schema={websiteSchema} />
      <StructuredData
        schema={breadcrumbSchema([
          { name: 'Home', url: 'https://stkcollege.org/' },
        ])}
      />

      <div className="bg-white text-gray-800">
        {/* ─── HERO ─── */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0F2B5B]">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/gallery/labs/java.JPEG"
              alt="STK College campus background"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F2B5B]/90 via-[#0F2B5B]/70 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="space-y-6 text-white"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Shape Your Future <br />
                  <span className="text-[#F4C542]">in Technology</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-lg leading-relaxed">
                  STK College offers practical, industry‑aligned IT training that prepares you for a rewarding career in the digital economy.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    to="/it-register"
                    className="bg-[#F4C542] hover:bg-[#e0b03a] text-[#0F2B5B] font-bold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center"
                  >
                    Apply Now
                    <FiArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    to="/courses"
                    className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg transition-all duration-300 inline-flex items-center"
                  >
                    Explore Courses
                  </Link>
                </div>
                <div className="flex flex-wrap gap-6 pt-6 text-sm text-gray-300">
                  <span className="flex items-center gap-2">
                    <FiCheckCircle className="text-[#F4C542] w-4 h-4" /> Registered CIPC
                  </span>
                  <span className="flex items-center gap-2">
                    <FiCheckCircle className="text-[#F4C542] w-4 h-4" /> Practical Training
                  </span>
                  <span className="flex items-center gap-2">
                    <FiCheckCircle className="text-[#F4C542] w-4 h-4" /> Career Focused
                  </span>
                </div>
              </motion.div>

              {/* Carousel */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden lg:block"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
                  <div className="relative w-full h-full overflow-hidden">
                    <div 
                      className="flex transition-transform duration-1000 ease-in-out h-full"
                      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                      onTransitionEnd={handleTransitionEnd}
                    >
                      {slides.map((img, idx) => (
                        <div key={idx} className="w-full flex-shrink-0 h-full">
                          <img 
                            src={img.src} 
                            alt={img.alt}
                            loading="lazy"
                            className="w-full h-full object-cover transition-filter duration-500 group-hover:grayscale"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={prevSlide}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#0F2B5B] rounded-full w-10 h-10 flex items-center justify-center text-2xl font-light opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg z-10"
                    aria-label="Previous slide"
                  >
                    ‹
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#0F2B5B] rounded-full w-10 h-10 flex items-center justify-center text-2xl font-light opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg z-10"
                    aria-label="Next slide"
                  >
                    ›
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    {originalImages.map((_, index) => {
                      let isActive = false;
                      if (currentIndex === 0) isActive = index === originalImages.length - 1;
                      else if (currentIndex === slides.length - 1) isActive = index === 0;
                      else isActive = currentIndex - 1 === index;
                      return (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            isActive 
                              ? 'bg-white scale-125 shadow-lg' 
                              : 'bg-white/50 hover:bg-white/80'
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── STATISTICS ─── */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: 250, label: 'Students Trained', icon: FiUsers, suffix: '+' },
                { number: 5, label: 'Courses', icon: FiBookOpen, suffix: '+' },
                { number: 64, label: 'Employment Rate', icon: FiBriefcase, suffix: '%' },
                { number: 4, label: 'Years of Excellence', icon: FiAward, suffix: '+' }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="text-center"
                  >
                    <Icon className="w-10 h-10 text-[#F4C542] mx-auto mb-3" />
                    <motion.div 
                      className="text-4xl md:text-5xl font-bold text-[#0F2B5B]"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
                    >
                      {stat.number}{stat.suffix}
                    </motion.div>
                    <div className="text-gray-600 text-lg mt-1">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── ABOUT ─── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="rounded-2xl overflow-hidden shadow-xl"
              >
                <img 
                  src="/images/gallery/gallery/AllStudents.jpg"
                  alt="STK College campus"
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B5B] mb-4">
                  About <span className="text-[#F4C542]">STK College</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-lg">
                  STK College is a registered IT training provider dedicated to preparing students for successful careers in technology through practical, hands-on education.
                </p>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-[#0F2B5B]">Our Mission</h4>
                    <p className="text-gray-600">To bridge the skills gap by delivering industry‑ready IT training that empowers individuals to thrive in the digital world.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0F2B5B]">Our Vision</h4>
                    <p className="text-gray-600">To become a leading provider of IT education in South Africa, producing graduates who drive innovation and digital transformation.</p>
                  </div>
                </div>
                <Link
                  to="/about"
                  className="inline-flex items-center text-[#F4C542] hover:text-[#e0b03a] font-semibold"
                >
                  Learn More
                  <FiArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── COURSES ─── */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B5B] mb-4">
                Featured <span className="text-[#F4C542]">Courses</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Practical, industry‑aligned programs to launch your tech career.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Computer Literacy',
                  description: 'Essential computer skills for the modern workplace.',
                  duration: '3 Months',
                  certificate: 'Yes',
                  image:"/images/gallery/gallery/computerliteracybackground.png",
                },
                {
                  title: 'Python Programming',
                  description: 'Build real-world applications with Python.',
                  duration: '4 Months',
                  certificate: 'Yes',
                  image:"/images/gallery/gallery/pythonbackground.png",
                },
                {
                  title: 'Web Development',
                  description: 'Create modern websites with HTML, CSS, and React.',
                  duration: '5 Months',
                  certificate: 'Yes',
                  image:"/images/gallery/gallery/webbackground.png",
                },
                {
                  title: 'Database Management',
                  description: 'Master SQL and database design for business.',
                  duration: '3 Months',
                  certificate: 'Yes',
                  image:"/images/gallery/gallery/databasebackground.png",
                }
              ].map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => e.target.src = 'https://via.placeholder.com/600x400?text=Course'}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#0F2B5B] mb-2 group-hover:text-[#F4C542] transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">{course.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">⏱ {course.duration}</span>
                      <span className="text-[#F4C542] font-semibold">✓ Certificate</span>
                    </div>
                    <div className="mt-4">
                      <Link
                        to="/courses"
                        className="text-[#F4C542] hover:text-[#e0b03a] font-semibold inline-flex items-center"
                      >
                        View Course
                        <FiArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHY CHOOSE ─── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B5B] mb-4">
                Why Students <span className="text-[#F4C542]">Choose STK</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Discover what makes STK College the right choice for your future.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: FiMonitor, title: 'Practical Training', desc: 'Learn by doing with hands-on projects and real-world scenarios.' },
                { icon: FiUsers, title: 'Experienced Lecturers', desc: 'Learn from industry professionals with years of practical experience.' },
                { icon: FiCpu, title: 'Modern Computer Labs', desc: 'State-of-the-art facilities equipped with the latest technology.' },
                { icon: FiBriefcase, title: 'Career Support', desc: 'Job placement assistance and professional development guidance.' },
                { icon: FiAward, title: 'Completion Certificates', desc: 'Receive recognised certifications that add value to your CV.' },
                { icon: FiClock, title: 'Flexible Learning', desc: 'Full-time, part-time, and online options to suit your schedule.' }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#F4C542] group"
                  >
                    <div className="w-16 h-16 bg-[#F4C542]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#F4C542] transition-colors">
                      <Icon className="w-8 h-8 text-[#F4C542] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0F2B5B] mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── CAMPUS ─── */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B5B] mb-4">
                Campus <span className="text-[#F4C542]">Experience</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                A glimpse into the vibrant learning environment at STK College.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-min">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-md"
              >
                <img 
                  src="/images/gallery/labs/java.JPEG"
                  alt="Computer Lab at STK College"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-2xl overflow-hidden shadow-md"
              >
                <img 
                  src="/images/gallery/labs/instructor2.jpeg"
                  alt="Instructor at STK College"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-2xl overflow-hidden shadow-md"
              >
                <img 
                  src="/images/gallery/classroom/class.jpeg"
                  alt="Classroom session at STK College"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="rounded-2xl overflow-hidden shadow-md"
              >
                <img 
                  src="/images/gallery/labs/studentCollaborate2.jpeg"
                  alt="Students collaborating at STK College"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="rounded-2xl overflow-hidden shadow-md"
              >
                <img 
                  src="/images/gallery/classroom/groupOf5.jpeg"
                  alt="Group of students at STK College"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── STUDENT SUCCESS ─── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="rounded-2xl overflow-hidden shadow-xl"
              >
                <img 
                  src="/images/gallery/gallery/FoundersInBanners.jpg"
                  alt="Graduate of STK College"
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="bg-gray-50 rounded-2xl p-8 shadow-md border border-gray-100">
                  <div className="flex items-center gap-1 text-[#F4C542] mb-4">
                    {[...Array(5)].map((_, i) => <FiStar key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <blockquote className="text-xl text-gray-700 italic mb-4">
                    "The practical training at STK College gave me the confidence and skills to land my first internship. I'm now working as a junior developer."
                  </blockquote>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-bold text-[#0F2B5B] text-lg">Lilitha Mhle</p>
                    <p className="text-gray-600">Technical Programming Graduate</p>
                    <p className="text-[#F4C542] font-semibold">Software Development Intern at DUT AppFactory</p>
                  </div>
                </div>
                <div className="mt-6">
                  <Link
                    to="/testimonials"
                    className="inline-flex items-center text-[#F4C542] hover:text-[#e0b03a] font-semibold"
                  >
                    Read More Success Stories
                    <FiArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── ADMISSION ─── */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B5B] mb-4">
                Admission <span className="text-[#F4C542]">Process</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Your journey to a successful tech career starts here.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                { step: 'Apply', icon: FiUser, desc: 'Complete your online application.' },
                { step: 'Register', icon: FiBookOpen, desc: 'Enrol in your chosen programme.' },
                { step: 'Study', icon: FiMonitor, desc: 'Learn practical skills with expert guidance.' },
                { step: 'Graduate', icon: FiAward, desc: 'Earn your certificate and celebrate.' },
                { step: 'Get Hired', icon: FiBriefcase, desc: 'Launch your career with our support.' }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative text-center"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-[#0F2B5B] rounded-full flex items-center justify-center text-white text-xl font-bold mb-3">
                        {index + 1}
                      </div>
                      <Icon className="w-8 h-8 text-[#F4C542] mb-2" />
                      <h4 className="font-bold text-[#0F2B5B] text-lg">{item.step}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                    {index < 4 && (
                      <div className="hidden md:block absolute top-10 left-3/4 w-full h-0.5 bg-[#F4C542]/30"></div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── NEWS ─── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B5B] mb-4">
                Latest <span className="text-[#F4C542]">News & Events</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Stay updated with what's happening at STK College.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Certificate Handover Ceremony 2026',
                  date: 'July 03, 2026',
                  description: 'Celebrating learners who successfully completed their skills training through our partnership with Isiqalo Institute and received Certificates of Completion.',
                  image: '/images/gallery/gallery/AllStudents.jpg'
                },
                {
                  title: 'New Computer Lab Opening',
                  date: 'June 05, 2026',
                  description: 'State-of-the-art facility equipped with the latest technology.',
                  image: '/images/gallery/labs/computerLab.jpeg'
                },
                {
                  title: 'Industry Guest Speaker Series',
                  date: 'October 10, 2025',
                  description: 'Leading tech professionals share their insights with students.',
                  image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#0F2B5B] mb-2">{item.title}</h3>
                    <div className="flex items-center text-gray-500 text-sm mb-2">
                      <FiCalendar className="mr-2" /> {item.date}
                    </div>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                    <Link to="/news" className="text-[#F4C542] hover:text-[#e0b03a] font-semibold text-sm inline-flex items-center mt-3">
                      Read More
                      <FiArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PARTNERS ─── */}
        <section className="py-16 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl font-bold text-[#0F2B5B] mb-2">
                Our <span className="text-[#F4C542]">Partners</span>
              </h2>
              <p className="text-gray-600">We collaborate with leading organisations to deliver quality education.</p>
            </motion.div>

            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
              <div className="flex items-center">
                <img 
                  src="/images/gallery/gallery/openEDG.png" 
                  alt="OpenEDG Partner"
                  loading="lazy"
                  className="h-20 w-auto object-contain md:h-24 lg:h-28"
                  onError={(e) => e.target.src = 'https://via.placeholder.com/200x80?text=OpenEDG'}
                />
              </div>
              <div className="flex items-center">
                <img 
                  src="/images/gallery/gallery/isiqalo.jpg" 
                  alt="Isiqalo Partner"
                  loading="lazy"
                  className="h-20 w-auto object-contain md:h-24 lg:h-28"
                  onError={(e) => e.target.src = 'https://via.placeholder.com/200x80?text=Isiqalo'}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="relative py-20 bg-[#0F2B5B] overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/images/gallery/labs/java.JPEG"
              alt=""
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Ready to Start <br />
                <span className="text-[#F4C542]">Your Journey</span>?
              </h2>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
                Take the first step towards a rewarding career in technology. Apply today and join our community of successful graduates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/it-register"
                  className="bg-[#F4C542] hover:bg-[#e0b03a] text-[#0F2B5B] font-bold px-10 py-4 rounded-lg text-lg transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  Apply Now
                  <FiArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="border border-white/30 hover:bg-white/10 px-10 py-4 rounded-lg text-lg transition-all duration-300 inline-flex items-center justify-center"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;