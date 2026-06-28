import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  FiArrowRight, FiUsers, FiBookOpen, FiBriefcase, FiAward, FiClock, 
  FiCheckCircle, FiStar, FiCalendar, FiTrendingUp, FiMapPin, FiMail,
  FiUser, FiMonitor, FiCpu, FiGlobe, FiServer, FiLayers
} from 'react-icons/fi';
import { useState, useEffect } from 'react';

// ─── Animation variants ───
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const Home = () => {
  // For parallax effect on hero image (optional)
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  // ─── Carousel state ───
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of images to slide through
  const heroImages = [
    {
      src: '/images/gallery/classroom/p2_isiqalo_25-05-2026.jpeg',
      alt: 'Java programming class'
    },
    {
      src: '/images/gallery/classroom/p10_isiqalo_25-05-2026.jpeg',
      alt: 'Python programming session'
    },
    {
      src: '/images/gallery/labs/instructor1.jpeg',
      alt: 'Web development workshop'
    },
    {
      src: '/images/gallery/labs/java.JPEG',
      alt: 'Database management training'
    }
  ];

  // Auto-slide every 6 seconds (matching Google Sites example)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Manual navigation
  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-white text-gray-800">
      
      {/* ──────────────────────────────────────────────
          SECTION 1 — HERO
          ────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0F2B5B]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/gallery/labs/java.JPEG"
            alt="STK College campus"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F2B5B]/90 via-[#0F2B5B]/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
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
              {/* Trust Badges */}
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

            {/* ─── RIGHT: AUTO-SLIDING CAROUSEL ─── */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
                {/* Slide Container */}
                <div className="relative w-full h-full overflow-hidden">
                  <div 
                    className="flex transition-transform duration-700 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                  >
                    {heroImages.map((img, idx) => (
                      <div key={idx} className="w-full flex-shrink-0 h-full">
                        <img 
                          src={img.src} 
                          alt={img.alt} 
                          className="w-full h-full object-cover transition-filter duration-500 group-hover:grayscale"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* ─── Navigation Arrows (hidden by default, show on hover) ─── */}
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#0F2B5B] rounded-full w-10 h-10 flex items-center justify-center text-2xl font-light opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg z-10"
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#0F2B5B] rounded-full w-10 h-10 flex items-center justify-center text-2xl font-light opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg z-10"
                  aria-label="Next image"
                >
                  ›
                </button>

                {/* ─── Dot Indicators (hidden by default, show on hover) ─── */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentImageIndex === index 
                          ? 'bg-white scale-125 shadow-lg' 
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                {/* ─── Image Counter (subtle, always visible) ─── */}
                <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full z-10 font-medium">
                  {currentImageIndex + 1} / {heroImages.length}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          SECTION 2 — STATISTICS
          ────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: 250, label: 'Students Trained', icon: FiUsers, suffix: '+' },
              { number: 12, label: 'Courses', icon: FiBookOpen, suffix: '+' },
              { number: 95, label: 'Employment Rate', icon: FiBriefcase, suffix: '%' },
              { number: 5, label: 'Years of Excellence', icon: FiAward, suffix: '+' }
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

      {/* ──────────────────────────────────────────────
          SECTION 3 — ABOUT STK
          ────────────────────────────────────────────── */}
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
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80"
                alt="STK College campus"
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

      {/* ──────────────────────────────────────────────
          SECTION 4 — FEATURED COURSES
          ────────────────────────────────────────────── */}
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
                image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80'
              },
              {
                title: 'Database Management',
                description: 'Master SQL and database design for business.',
                duration: '3 Months',
                certificate: 'Yes',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80'
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

      {/* ──────────────────────────────────────────────
          SECTION 5 — WHY CHOOSE STK (3×2 Feature Cards)
          ────────────────────────────────────────────── */}
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
              { icon: FiAward, title: 'Accredited Certificates', desc: 'Receive recognised certifications that add value to your CV.' },
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

      {/* ──────────────────────────────────────────────
          SECTION 6 — CAMPUS EXPERIENCE (Masonry Gallery)
          ────────────────────────────────────────────── */}
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
            {/* Larger image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-md"
            >
              <img 
                src= "/images/gallery/labs/java.JPEG"
                alt="Computer Lab"
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
                src= "/images/gallery/labs/instructor2.jpeg"
                alt="Graduation"
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
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80"
                alt="Workshops"
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
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80"
                alt="Students"
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
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80"
                alt="Campus"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          SECTION 7 — STUDENT SUCCESS
          ────────────────────────────────────────────── */}
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
                src= "/images/staff/S.Mtshali.jpeg"
                alt="Graduate"
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
                  <p className="text-[#F4C542] font-semibold">Junior Developer at TechCorp</p>
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

      {/* ──────────────────────────────────────────────
          SECTION 8 — ADMISSION PROCESS (Horizontal Timeline)
          ────────────────────────────────────────────── */}
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

      {/* ──────────────────────────────────────────────
          SECTION 9 — LATEST NEWS & EVENTS
          ────────────────────────────────────────────── */}
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
              Stay updated with what’s happening at STK College.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Graduation Ceremony 2024',
                date: 'December 15, 2024',
                description: 'Celebrating the achievements of our latest graduates.',
                image: 'https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=600&q=80'
              },
              {
                title: 'New Computer Lab Opening',
                date: 'November 20, 2024',
                description: 'State-of-the-art facility equipped with the latest technology.',
                image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80'
              },
              {
                title: 'Industry Guest Speaker Series',
                date: 'October 10, 2024',
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

      {/* ──────────────────────────────────────────────
          SECTION 10 — PARTNERS & ACCREDITATION (Scrolling Logos)
          ────────────────────────────────────────────── */}
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

          {/* Scrolling Logo Strip */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-16 items-center whitespace-nowrap"
              animate={{ x: ['0%', '-100%'] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            >
              {/* Duplicate for seamless loop */}
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-16 items-center">
                  <span className="text-4xl font-bold text-gray-300">Logo 1</span>
                  <span className="text-4xl font-bold text-gray-300">Logo 2</span>
                  <span className="text-4xl font-bold text-gray-300">Logo 3</span>
                  <span className="text-4xl font-bold text-gray-300">Logo 4</span>
                  <span className="text-4xl font-bold text-gray-300">Logo 5</span>
                </div>
              ))}
            </motion.div>
          </div>
          <p className="text-center text-gray-400 text-sm mt-4">(Partner logos will be displayed here)</p>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          SECTION 11 — FINAL CTA
          ────────────────────────────────────────────── */}
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
  );
};

export default Home;