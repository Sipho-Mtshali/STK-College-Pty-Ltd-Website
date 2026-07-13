import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiBookOpen, FiUsers, FiClock, FiStar, FiUser, FiMail, FiPhone,
  FiCode, FiCpu, FiBriefcase, FiAward, FiArrowRight, FiChevronDown,
  FiChevronUp, FiGithub, FiLinkedin, FiGlobe, FiMonitor, FiDatabase,
  FiCheckCircle, FiGrid, FiList
} from 'react-icons/fi';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import { organizationSchema, breadcrumbSchema } from '../data/schema';

// ─── Animation variants ───
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const Staff = () => {
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [expandedId, setExpandedId] = useState(null);

  // ─── Data ──────────────────────────────────────────
  const mockStaff = [
    {
      id: '1',
      name: 'Sipho Mtshali',
      position: 'Senior IT Instructor & Developer',
      department: 'Programming & Development',
      experience: '4+ years',
      qualifications: 'Java Development, Python Programming, Web Development, Database Management',
      email: 'simphiwesipho55@gmail.com',
      phone: '+27763627488',
      bio: 'Passionate software developer and educator with extensive experience in programming and IT training. Specializes in Java, Python, web development, and database systems. Committed to helping students launch successful tech careers.',
      subjects: ['Java', 'Python', 'Web Dev', 'Database', 'Software Engineering'],
      rating: 4.9,
      image: '/images/staff/crop.jpg',
      programs: ['Python Programming', 'Java Development', 'Web Development', 'SQL Database Management'],
      social: {
        linkedin: 'https://www.linkedin.com/in/sipho-mtshali-377784236/',
        github: 'https://github.com/Sipho-Mtshali'
      }
    },
    {
      id: '2',
      name: 'Thandeka Nkosi',
      position: 'Program Coordinator & Finance Manager',
      department: 'Administration & Finance',
      experience: '3+ years',
      qualifications: 'Program Management, Educational Funding, Student Support',
      email: 'thandekan736@gmail.com',
      phone: '+27735787190',
      bio: 'Ensures smooth program operations and manages funding opportunities including MICT SETA applications. Dedicated to supporting students throughout their learning journey.',
      subjects: ['Program Coordination', 'Funding', 'Student Support', 'Administration'],
      rating: 4.8,
      image: '/images/staff/thandeka.png',
      programs: ['All Program Administration', 'Funding Applications', 'Student Services'],
      social: {
        linkedin: 'https://www.linkedin.com/in/thandeka-nkosi-40a23b217/'
      }
    },
    {
      id: '3',
      name: 'SM Mkhwanazi',
      position: 'Microsoft Office Facilitator',
      department: 'Software Applications',
      experience: '3+ years',
      qualifications: 'Microsoft Office Suite, Business Applications, Office Technology',
      email: 'smmkhwanazi@stkcollege.co.za',
      bio: 'Expert in Microsoft Office applications with practical business experience. Specializes in helping students master Word, Excel, PowerPoint, and Teams for professional environments.',
      subjects: ['Word', 'Excel', 'PowerPoint', 'Teams', 'Office Automation'],
      rating: 4.7,
      image: '/images/staff/Mkhanazi.jpeg',
      programs: ['Microsoft Office Complete Suite', 'Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint', 'Microsoft Teams'],
      social: {}
    },
    {
      id: '4',
      name: 'N Ntuli',
      position: 'Administrative Support',
      department: 'Administration',
      experience: '2+ years',
      qualifications: 'Administrative Management, Student Services, Office Operations',
      email: 'admin@stkcollege.co.za',
      bio: 'Provides comprehensive administrative support to ensure smooth operations and excellent student experience. Manages enrollments, scheduling, and student communications.',
      subjects: ['Enrollment', 'Scheduling', 'Support', 'Customer Service'],
      rating: 4.7,
      image: '/images/staff/PS Teacher.jpeg',
      programs: ['All Program Support', 'Enrollment Services', 'Student Communications'],
      social: {}
    },
    {
      id: '5',
      name: 'STK College AI Team',
      position: 'AI & Machine Learning Specialists',
      department: 'Artificial Intelligence',
      experience: '3+ years',
      qualifications: 'Machine Learning, Deep Learning, Neural Networks, Data Science',
      email: 'ai@stkcollege.co.za',
      bio: 'Our AI team consists of experienced data scientists and machine learning engineers with expertise in modern AI technologies. They provide cutting-edge instruction in AI and machine learning applications.',
      subjects: ['ML', 'Deep Learning', 'Neural Networks', 'Data Science', 'AI'],
      rating: 4.9,
      image: '/images/staff/AI image.jpeg',
      programs: ['AI & Machine Learning Learnership', 'Data Science Fundamentals'],
      social: {}
    },
    {
      id: '6',
      name: 'Industry Experts',
      position: 'Internship & Training Mentors',
      department: 'Professional Development',
      experience: '5+ years',
      qualifications: 'Industry Experience, Project Management, Professional Mentoring',
      email: 'internships@stkcollege.co.za',
      bio: 'Our network of industry professionals provides real-world mentorship and guidance during internship and in-service training programs. They bring current industry practices and career insights.',
      subjects: ['Software Dev', 'Project Management', 'Best Practices', 'Career Guidance'],
      rating: 4.8,
      image: '/images/staff/LS Teacher.jpeg',
      programs: ['Software Development Internship', 'IT In-Service Training'],
      social: {}
    }
  ];

  const departments = ['All', ...new Set(mockStaff.map(m => m.department))];

  useEffect(() => {
    const timer = setTimeout(() => {
      setStaff(mockStaff);
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const filteredStaff = selectedDepartment === 'All'
    ? staff
    : staff.filter(m => m.department === selectedDepartment);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  if (loading) {
    return (
      <>
        <SEO title="Loading Staff" description="Loading our team..." />
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#F4C542] mx-auto mb-4"></div>
            <p className="text-gray-600">Loading our team...</p>
          </div>
        </div>
      </>
    );
  }

  const getDeptIcon = (dept) => {
    const map = {
      'Programming & Development': FiCode,
      'Artificial Intelligence': FiCpu,
      'Software Applications': FiMonitor,
      'Professional Development': FiBriefcase,
      'Administration & Finance': FiUsers,
      'Administration': FiUser,
    };
    return map[dept] || FiBookOpen;
  };

  const getDeptColor = (dept) => {
    const map = {
      'Programming & Development': 'bg-blue-600',
      'Artificial Intelligence': 'bg-purple-600',
      'Software Applications': 'bg-green-600',
      'Professional Development': 'bg-orange-600',
      'Administration & Finance': 'bg-indigo-600',
      'Administration': 'bg-gray-600',
    };
    return map[dept] || 'bg-[#F4C542]';
  };

  const stats = [
    { number: staff.length, label: 'Team Members', icon: FiUsers },
    { number: departments.length - 1, label: 'Departments', icon: FiGrid },
    { number: '5+', label: 'Avg. Experience', icon: FiClock },
    { number: '4.8', label: 'Avg. Rating', icon: FiStar }
  ];

  return (
    <>
      <SEO
        title="Our Team"
        description="Meet the experienced IT instructors, program coordinators, and AI specialists at STK College who are dedicated to your success."
        canonical="https://stkcollege.org/staff"
        keywords="STK College staff, IT instructors, programming teachers, AI specialists, South Africa"
      />
      <StructuredData schema={organizationSchema} />
      <StructuredData
        schema={breadcrumbSchema([
          { name: 'Home', url: 'https://stkcollege.org/' },
          { name: 'Staff', url: 'https://stkcollege.org/staff' },
        ])}
      />

      <div className="bg-white text-gray-800">
        {/* ─── HERO ─── */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-[#0F2B5B]">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/gallery/labs/java.JPEG"
              alt="STK College team"
              className="w-full h-full object-cover opacity-20"
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
                Meet Our <span className="text-[#F4C542]">IT Team</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                Dedicated professionals committed to delivering industry-relevant IT education and mentorship.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ─── STATISTICS ─── */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 bg-[#F4C542]/20 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#F4C542]" />
                      </div>
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-[#0F2B5B]">{stat.number}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── FILTER & GRID ─── */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-2 mb-12"
            >
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    selectedDepartment === dept
                      ? 'bg-[#F4C542] text-[#0F2B5B] shadow-md'
                      : 'bg-white text-gray-600 hover:bg-[#F4C542]/10 border border-gray-200'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {filteredStaff.map((member) => {
                  const IconDept = getDeptIcon(member.department);
                  const deptColor = getDeptColor(member.department);
                  const isExpanded = expandedId === member.id;

                  return (
                    <motion.div
                      key={member.id}
                      layout
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 group"
                    >
                      <div className={`relative h-48 ${deptColor} overflow-hidden`}>
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNMzAgMTBhMjAgMjAgMCAxIDAgMCA0MCAyMCAyMCAwIDAgMCAwLTQweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=')] bg-repeat opacity-20"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          {member.image ? (
                            <img 
                              src={member.image} 
                              alt={member.name}
                              loading="lazy"
                              className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-2xl transform transition-transform group-hover:scale-105"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=F4C542&color=0F2B5B&size=128`;
                              }}
                            />
                          ) : (
                            <div className="w-28 h-28 bg-white/20 rounded-full flex items-center justify-center border-4 border-white shadow-2xl">
                              <FiUser className="w-14 h-14 text-white" />
                            </div>
                          )}
                        </div>

                        <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium flex items-center gap-1">
                          <FiStar className="w-4 h-4 text-yellow-400 fill-current" />
                          {member.rating}
                        </div>
                        <div className="absolute bottom-4 left-4 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs font-medium flex items-center gap-1">
                          <IconDept className="w-4 h-4" />
                          {member.department}
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold text-[#0F2B5B] group-hover:text-[#F4C542] transition-colors">
                          {member.name}
                        </h3>
                        <p className="text-[#F4C542] font-semibold text-sm mb-2">{member.position}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                          <FiClock className="w-4 h-4" />
                          <span>{member.experience} experience</span>
                        </div>

                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                          {member.bio}
                        </p>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-4 space-y-3 border-t border-gray-100 pt-4"
                            >
                              <div>
                                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Expertise</h4>
                                <div className="flex flex-wrap gap-2 mt-1">
                                  {member.subjects.map((s, i) => (
                                    <span key={i} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full border border-blue-100">
                                      {s}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Programs</h4>
                                <div className="flex flex-wrap gap-2 mt-1">
                                  {member.programs.map((p, i) => (
                                    <span key={i} className="px-2 py-1 bg-[#F4C542]/10 text-[#0F2B5B] text-xs rounded-full border border-[#F4C542]/20">
                                      {p}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-500">
                                <FiMail className="w-4 h-4" />
                                <a href={`mailto:${member.email}`} className="hover:text-[#F4C542] transition-colors">
                                  {member.email}
                                </a>
                              </div>
                              {member.phone && (
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                  <FiPhone className="w-4 h-4" />
                                  <span>{member.phone}</span>
                                </div>
                              )}
                              {member.social && Object.keys(member.social).length > 0 && (
                                <div className="flex gap-3 pt-1">
                                  {member.social.linkedin && (
                                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#F4C542] transition-colors">
                                      <FiLinkedin className="w-5 h-5" />
                                    </a>
                                  )}
                                  {member.social.github && (
                                    <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#F4C542] transition-colors">
                                      <FiGithub className="w-5 h-5" />
                                    </a>
                                  )}
                                </div>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <div className="mt-4 flex items-center justify-between">
                          <button
                            onClick={() => toggleExpand(member.id)}
                            className="text-sm font-medium text-[#F4C542] hover:text-[#e0b03a] transition-colors flex items-center gap-1"
                          >
                            {isExpanded ? 'Show Less' : 'View Details'}
                            {isExpanded ? <FiChevronUp className="w-4 h-4" /> : <FiChevronDown className="w-4 h-4" />}
                          </button>
                          <a
                            href={`mailto:${member.email}`}
                            className="bg-[#F4C542] hover:bg-[#e0b03a] text-[#0F2B5B] font-bold px-4 py-2 rounded-lg text-sm transition-all duration-300 inline-flex items-center"
                          >
                            Contact
                            <FiArrowRight className="ml-1 w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>

            {filteredStaff.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No team members found in this department.</p>
              </div>
            )}
          </div>
        </section>

        {/* ─── VALUES ─── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B5B] mb-4">
                Our <span className="text-[#F4C542]">Values</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                The principles that guide our team and shape the STK experience.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: FiAward, title: 'Excellence', desc: 'We strive for the highest standards in education and mentorship.' },
                { icon: FiUsers, title: 'Collaboration', desc: 'We work together to create a supportive learning community.' },
                { icon: FiGlobe, title: 'Innovation', desc: 'We embrace emerging technologies and forward-thinking approaches.' }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
                  >
                    <div className="w-16 h-16 bg-[#F4C542]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-[#F4C542]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0F2B5B] mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="relative py-16 bg-[#0F2B5B] overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/images/gallery/labs/java.JPEG"
              className="w-full h-full object-cover opacity-10"
              alt=""
            />
          </div>
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Join Our <span className="text-[#F4C542]">Team</span>
              </h2>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
                Are you passionate about technology education? We're always looking for experienced 
                IT professionals and educators to join us in shaping the next generation of tech talent.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:stkcollege@gmail.com"
                  className="bg-white/10 border border-white/30 hover:bg-white/20 px-8 py-3 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
                >
                  Send Your CV
                </a>
                <Link
                  to="/contact"
                  className="bg-[#F4C542] hover:bg-[#e0b03a] text-[#0F2B5B] font-bold px-8 py-3 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
                >
                  Contact Us
                  <FiArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Staff;