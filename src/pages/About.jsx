import { motion } from 'framer-motion';
import { FiTarget, FiEye, FiUsers, FiAward, FiBookOpen, FiCheckCircle,
         FiCode, FiBriefcase, FiZap, FiTrendingUp } from 'react-icons/fi';

const About = () => {
  const programs = [
    {
      icon: FiBookOpen,
      title: 'Short Courses',
      description: 'Focused IT training in programming, Microsoft Office, and web development',
      features: ['Python, Java, SQL', 'Microsoft Office Suite', 'Web Development', 'Flexible Scheduling']
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
      features: ['Future MICT SETA Opportunities', 'Industry Projects', 'Career Placement', 'Advanced Training']
    }
  ];

  const achievements = [
    { 
      icon: FiCode, 
      title: '10+ Courses', 
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
      title: "Practical Learning",
      description: "Hands-on projects and real-world scenarios to build practical skills",
      icon: "💻"
    },
    {
      title: "Expert Instructors",
      description: "Industry professionals with years of experience in IT and AI",
      icon: "👨‍🏫"
    },
    {
      title: "Flexible Programs",
      description: "Full-time, part-time, and online options to suit your schedule",
      icon: "⏰"
    },
    {
      title: "Career Support",
      description: "Job placement assistance and career guidance services",
      icon: "🎯"
    },
    {
      title: "Modern Curriculum",
      description: "Up-to-date content reflecting current industry trends and technologies",
      icon: "📊"
    },
    {
      title: "Future Funding",
      description: "Preparing for QCTO accreditation and future funding opportunities",
      icon: "💰"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-gray-900 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800/20 to-gray-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold">
              About STK College
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Building Future Tech Leaders Through Innovative IT Education
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="card-enhanced p-8 rounded-xl hover-lift"
            >
              <div className="w-16 h-16 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-6">
                <FiTarget className="w-8 h-8 text-yellow-400" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-lg text-gray-200 leading-relaxed">
                To provide cutting-edge IT education and training that equips students with 
                practical skills for the digital economy. We are building the foundation to 
                bridge the gap between academic learning and industry requirements through 
                our comprehensive programs in programming, AI, and technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="card-enhanced p-8 rounded-xl hover-lift"
            >
              <div className="w-16 h-16 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-6">
                <FiEye className="w-8 h-8 text-yellow-400" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-lg text-gray-200 leading-relaxed">
                To become a leading provider of IT education and AI training in South Africa, 
                recognized for producing job-ready professionals who drive innovation and 
                digital transformation across industries through accredited programs and 
                future funding opportunities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Building the Future of IT Education
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto font-medium">
              Preparing to bridge the gap between academic learning and industry demands through practical, 
              career-focused IT training programs.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-200 text-lg leading-relaxed space-y-6"
            >
              <div className="text-center mb-8">
                <img src="/images/campus/STKLogo2.png" alt="STK College Logo" className="w-40 h-40 mx-auto" />
              </div>
              
              <p>
                STK College is a specialized IT training initiative dedicated to preparing students 
                for successful careers in technology. Our programs are designed to meet the growing 
                demand for skilled IT professionals in South Africa and beyond.
              </p>
              
              <p>
                We are currently preparing for QCTO accreditation and future MICT SETA funding opportunities. 
                Our curriculum is being developed to reflect the latest industry trends and technologies, 
                with current student numbers and program details serving as demonstration models as we 
                build toward full operation.
              </p>
              
              <p>
                As a registered CIPC and NPO initiative, we are building partnerships with industry leaders 
                to ensure that our graduates will be well-prepared for the workforce once full accreditation 
                is achieved.
              </p>

              <div className="bg-yellow-500/20 border border-yellow-500 rounded-xl p-6 mt-6">
                <h3 className="text-xl font-bold text-white mb-3">Our Current Status</h3>
                <ul className="space-y-2 text-gray-200">
                  <li>• Registered CIPC and NPO initiative</li>
                  <li>• Preparing for QCTO accreditation</li>
                  <li>• Planning future MICT SETA funding opportunities</li>
                  <li>• Industry-relevant curriculum under development</li>
                  <li>• Facilities ready for future training operations</li>
                  <li>• Building industry partnerships</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Planned Programs
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto font-medium">
              Comprehensive IT training pathways being developed for career success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card-enhanced p-6 rounded-xl hover-lift border-l-4 border-l-yellow-500"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {program.title}
                      </h3>
                      <p className="text-gray-200 mb-4">
                        {program.description}
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {program.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <FiCheckCircle className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
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

      {/* Features */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Learn With Us
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto font-medium">
              Experience the difference with our student-centered approach to IT education
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card-enhanced p-6 rounded-xl text-center hover-lift"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-200">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Commitment
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto font-medium">
              Building a reputation for excellence in IT education and training
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="card-enhanced p-6 rounded-xl text-center hover-lift"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-200">
                    {achievement.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="card-enhanced p-12 rounded-2xl border border-yellow-500/30"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your IT Career?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join STK College and gain the skills you need to succeed in the rapidly evolving tech industry. 
              Choose from our planned short courses, in-service training, internships, or AI learnership programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/courses"
                className="btn-primary-high-contrast px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
                View All Courses
              </a>
              <a
                href="/it-register"
                className="btn-secondary-high-contrast px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Apply Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;