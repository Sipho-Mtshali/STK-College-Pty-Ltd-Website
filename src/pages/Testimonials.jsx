import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiStar, FiUser, FiAward, FiMessageSquare, FiTrendingUp, 
  FiBookOpen, FiMail, FiUserPlus, FiArrowRight, FiCheckCircle,
  FiClock, FiBriefcase
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

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Lilitha Mhle',
      course: 'Technical Programming',
      rating: 5,
      text: 'I\'m grateful for the guidance and support of my amazing tutor, Sipho Mtshali, which helped me achieve a Distinction in Technical Programming. Thank you so much.',
      image: '/images/students/mhle.jpeg',
      status: 'Second year student - Programmer',
      achievement: 'Distinction'
    },
    {
      id: 2,
      name: 'Minenhle Mabuyakhulu',
      course: 'Technical Programming I',
      rating: 4.5,
      text: 'I\'m truly honored to express my gratitude for the incredible help that enabled me to achieve a Distinction in Technical Programming I with flying colors. I deeply appreciate my tutor\'s hard work. Thank you!',
      image: '/images/students/vegy.jpeg',
      status: 'Student - Software Developer',
      achievement: 'Distinction'
    },
    {
      id: 3,
      name: 'Dlamini Akhona',
      course: 'Programming Module',
      rating: 5,
      text: 'I just wanted to say thank you for believing in me. I\'m proud to say that I\'ve passed the module you tutored me in with distinction. Your guidance and support made all the difference!',
      image: '/images/students/Akhona.jpeg',
      status: 'Final year student - Software Engineer',
      achievement: 'Distinction'
    },
    {
      id: 4,
      name: 'Ntombela Minenhle',
      course: 'Programming',
      rating: 5,
      text: 'I am truly grateful for your support and lessons, Mr. Mtshali. Your guidance helped me overcome challenges I thought were impossible, improving from 22% to passing the module with 60%. Thank you so much!',
      image: '/images/students/minenhle.jpeg',
      status: 'Second year student - Software Developer',
      achievement: 'Pass'
    },
    {
      id: 5,
      name: 'Blessings',
      course: 'SQL Database',
      rating: 5,
      text: 'I want to sincerely thank you for your exceptional guidance in SQL. Your teaching made complex concepts easy to understand, and I feel confident in my ability to work with databases now.',
      image: '/images/students/Blessings.jpeg',
      status: 'Database Student',
      achievement: 'Distinction'
    },
    {
      id: 6,
      name: 'Sibisi Michael',
      course: 'Technical Programming',
      rating: 5,
      text: 'STK College staff, your contribution in helping us with TP has been invaluable. You\'ve laid a strong foundation for us to grasp more in programming. Keep supporting other students. We\'re grateful!',
      image: '/images/students/sibisi.jpeg',
      status: 'Programming Student',
      achievement: 'Pass'
    },
    {
      id: 7,
      name: 'Mbuyazi Mzamo',
      course: 'Programming',
      rating: 5,
      text: 'Your teaching methods made complex programming concepts easy to understand. The practical approach helped me grasp real-world applications quickly.',
      image: '/images/students/mzamo.jpeg',
      status: 'Programming Student',
      achievement: 'Distinction'
    },
    {
      id: 8,
      name: 'Magingxa Yolisa',
      course: 'Technical Programming',
      rating: 5,
      text: 'Mr. Mtshali\'s dedication and exceptional teaching skills were truly inspiring. His guidance and support helped me excel in the module and boosted my confidence in technical programming.',
      image: '/images/students/Yolisa.jpeg',
      status: 'Software Development Student',
      achievement: 'Distinction'
    }
  ];

  const stats = [
    { number: '90%', label: 'Pass Rate', icon: FiTrendingUp },
    { number: '75%', label: 'Distinction Rate', icon: FiAward },
    { number: '105+', label: 'Successful Students', icon: FiUser },
    { number: '4.8/5', label: 'Average Rating', icon: FiStar }
  ];

  const getAchievementColor = (achievement) => {
    return achievement === 'Distinction' 
      ? 'bg-[#F4C542]/20 text-[#F4C542] border-[#F4C542]/30'
      : 'bg-blue-500/20 text-blue-400 border-blue-500/30';
  };

  return (
    <>
      <SEO
        title="Testimonials"
        description="Read success stories from STK College students who have completed IT courses, programming programs, and AI learnerships."
        canonical="https://stkcollege.org/testimonials"
        keywords="student testimonials, IT training reviews, programming course feedback, STK College success stories"
      />
      <StructuredData schema={organizationSchema} />
      <StructuredData
        schema={breadcrumbSchema([
          { name: 'Home', url: 'https://stkcollege.org/' },
          { name: 'Testimonials', url: 'https://stkcollege.org/testimonials' },
        ])}
      />

      <div className="bg-white text-gray-800">
        {/* ─── HERO ─── */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-[#0F2B5B]">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/gallery/labs/java.JPEG"
              alt="Student success"
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
                Student <span className="text-[#F4C542]">Testimonials</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                Hear from our successful students across IT programming, short courses, and professional training programs.
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

        {/* ─── TESTIMONIALS GRID ─── */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B5B] mb-4">
                What Our <span className="text-[#F4C542]">Students Say</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Real stories from real students who transformed their careers with STK College.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  variants={fadeUp}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 hover:border-[#F4C542]/30 group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <FiMessageSquare className="w-8 h-8 text-[#F4C542] opacity-40" />
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getAchievementColor(testimonial.achievement)}`}>
                      {testimonial.achievement}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating
                            ? 'text-[#F4C542] fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed italic mb-5">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0F2B5B] text-sm">{testimonial.name}</h4>
                      <p className="text-[#F4C542] text-xs font-medium">{testimonial.course}</p>
                      <p className="text-gray-500 text-xs">{testimonial.status}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── CALL TO ACTION ─── */}
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
                Ready to Transform <span className="text-[#F4C542]">Your Future</span>?
              </h2>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
                Join hundreds of successful students who have launched their tech careers through our 
                comprehensive IT programs, in-service training, internships, and AI learnerships.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/courses"
                  className="bg-white/10 border border-white/30 hover:bg-white/20 px-8 py-3 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
                >
                  <FiBookOpen className="mr-2 w-5 h-5" />
                  View Programs
                </Link>
                <Link
                  to="/it-register"
                  className="bg-[#F4C542] hover:bg-[#e0b03a] text-[#0F2B5B] font-bold px-8 py-3 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
                >
                  <FiUserPlus className="mr-2 w-5 h-5" />
                  Register Now
                </Link>
                <a
                  href="mailto:stkcollege@gmail.com"
                  className="bg-white/10 border border-white/30 hover:bg-white/20 px-8 py-3 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
                >
                  <FiMail className="mr-2 w-5 h-5" />
                  Email Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Testimonials;