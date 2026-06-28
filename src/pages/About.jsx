import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiTarget, FiEye, FiUsers, FiAward, FiBookOpen, FiCheckCircle,
  FiCode, FiBriefcase, FiZap, FiTrendingUp, FiMonitor, FiClock,
  FiCpu, FiGlobe, FiArrowRight
} from 'react-icons/fi';

// ─── Animation variants ───
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const About = () => {
  const programs = [
    {
      icon: FiBookOpen,
      title: 'Short Courses',
      description: 'Focused IT training in programming, Microsoft Office, and web development',
      features: ['Python, Java, SQL, Cybersecurity', 'Microsoft Office Suite', 'Web Development', 'Flexible Scheduling']
    },
    {
      icon: FiUsers,
      title: 'In-Service Training',
      description: 'Comprehensive IT training programs with practical experience',
      features: ['Hands-on Projects', 'Industry Mentors', 'Portfolio Building', 'Career Preparation']
    },
    {
      icon: FiBriefcase,
      title: 'Internship Programs',
      description: 'Real workplace experience for IT students and graduates',
      features: ['Industry Placement', 'Professional Development', 'Networking', 'Work Experience']
    },
    {
      icon: FiZap,
      title: 'AI Learnership',
      description: 'Future learnership programs in Artificial Intelligence and Machine Learning',
      features: ['Industry Projects', 'Career Placement', 'Advanced Training']
    }
  ];

  const achievements = [
    { 
      icon: FiCode, 
      title: '5+ Courses', 
      description: 'Comprehensive IT and AI programs available' 
    },
    { 
      icon: FiUsers, 
      title: 'Registered Provider', 
      description: 'CIPC registered initiative preparing for accreditation' 
    },
    { 
      icon: FiAward, 
      title: 'Industry Focused', 
      description: 'Programs designed to meet current industry demands' 
    },
    { 
      icon: FiTrendingUp, 
      title: 'Future Ready', 
      description: 'Preparing students for emerging tech opportunities' 
    }
  ];

  const features = [
    {
      title: 'Practical Learning',
      description: 'Hands-on projects and real-world scenarios to build practical skills.',
      icon: FiMonitor
    },
    {
      title: 'Expert Instructors',
      description: 'Industry professionals with years of experience in IT and AI.',
      icon: FiUsers
    },
    {
      title: 'Flexible Programs',
      description: 'Full-time, part-time, and online options to suit your schedule.',
      icon: FiClock
    },
    {
      title: 'Career Support',
      description: 'Job placement assistance and career guidance services.',
      icon: FiBriefcase
    },
    {
      title: 'Modern Curriculum',
      description: 'Up-to-date content reflecting current industry trends and technologies.',
      icon: FiCpu
    },
    {
      title: 'Future Funding',
      description: 'Preparing for QCTO accreditation and future funding opportunities.',
      icon: FiTrendingUp
    }
  ];

  return (
    <div className="bg-white text-gray-800">

      {/* ──────────────────────────────────────────────
          HERO SECTION (Dark Blue with Overlay)
          ────────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#0F2B5B]">
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
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              About <span className="text-[#F4C542]">STK College</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Building Future Tech Leaders Through Innovative IT Education
            </p>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          MISSION & VISION (Two‑column)
          ────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-[#F4C542]/20 rounded-full flex items-center justify-center mb-6">
                <FiTarget className="w-8 h-8 text-[#F4C542]" />
              </div>
              <h2 className="text-3xl font-bold text-[#0F2B5B] mb-4">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide cutting-edge IT education and training that equips students with 
                practical skills for the digital economy. We are building the foundation to 
                bridge the gap between academic learning and industry requirements through 
                our comprehensive programs in programming, AI, and technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-[#F4C542]/20 rounded-full flex items-center justify-center mb-6">
                <FiEye className="w-8 h-8 text-[#F4C542]" />
              </div>
              <h2 className="text-3xl font-bold text-[#0F2B5B] mb-4">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To become a leading provider of IT education and AI training in South Africa, 
                recognized for producing job-ready professionals who drive innovation and 
                digital transformation across industries through accredited programs and 
                future funding opportunities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          OUR STORY (Split layout)
          ────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B5B] mb-6">
                Our <span className="text-[#F4C542]">Story</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  STK College is a specialized IT training initiative dedicated to preparing students 
                  for successful careers in technology. Our programs are designed to meet the growing 
                  demand for skilled IT professionals in South Africa and beyond.
                </p>
                <p>
                  We are currently preparing for QCTO accreditation and future MICT SETA funding opportunities. 
                  Our curriculum is being developed to reflect the latest industry trends and technologies.
                </p>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h4 className="font-bold text-[#0F2B5B] mb-2">Current Status</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center gap-2"><FiCheckCircle className="text-[#F4C542]" /> Registered CIPC</li>
                    <li className="flex items-center gap-2"><FiCheckCircle className="text-[#F4C542]" /> Preparing for QCTO accreditation</li>
                    <li className="flex items-center gap-2"><FiCheckCircle className="text-[#F4C542]" /> Industry‑relevant curriculum</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          PLANNED PROGRAMS (Card grid)
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
              Our <span className="text-[#F4C542]">Planned Programs</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive IT training pathways being developed for career success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-l-[#F4C542]"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#F4C542]/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#F4C542]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0F2B5B] mb-2">{program.title}</h3>
                      <p className="text-gray-600 mb-3">{program.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {program.features.map((feature, fi) => (
                          <div key={fi} className="flex items-center text-sm text-gray-700">
                            <FiCheckCircle className="w-4 h-4 text-[#F4C542] mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          WHY LEARN WITH US (Feature Grid)
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
              Why <span className="text-[#F4C542]">Learn With Us</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience the difference with our student-centered approach to IT education.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow text-center"
                >
                  <div className="w-16 h-16 bg-[#F4C542]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-[#F4C542]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F2B5B] mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          ACHIEVEMENTS (Stats Cards)
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
              Our <span className="text-[#F4C542]">Commitment</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Building a reputation for excellence in IT education and training.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-[#F4C542] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0F2B5B] mb-2">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          FINAL CTA (Dark Blue)
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
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Ready to Start <br />
              <span className="text-[#F4C542]">Your IT Career</span>?
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
              Join STK College and gain the skills you need to succeed in the rapidly evolving tech industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/courses"
                className="bg-[#F4C542] hover:bg-[#e0b03a] text-[#0F2B5B] font-bold px-10 py-4 rounded-lg text-lg transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                View All Courses
                <FiArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/it-register"
                className="border border-white/30 hover:bg-white/10 px-10 py-4 rounded-lg text-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;