import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiUsers, FiClock, FiStar,
  FiUser, FiMail, FiPhone, FiCode, FiDatabase, 
  FiMonitor, FiCpu, FiBriefcase, FiAward } from 'react-icons/fi';

const Staff = () => {
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);

  // Updated STK College IT program team members
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
      subjects: ['Java Programming', 'Python Development', 'Web Development', 'Database Design', 'Software Engineering'],
      rating: 4.9,
      image: '/images/staff/SM3.png',
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
      subjects: ['Program Coordination', 'Funding Management', 'Student Support', 'Administrative Services'],
      rating: 4.8,
      image: '/images/staff/thandeka.png',
      programs: ['All Program Administration', 'Funding Applications', 'Student Services'],
      social: {
        linkedin: 'https://www.linkedin.com/in/thandeka-nkosi-40a23b217/?trk=contact-info'
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
      subjects: ['Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint', 'Microsoft Teams', 'Office Automation'],
      rating: 4.7,
      image: '/images/staff/Mkhanazi.jpeg',
      programs: ['Microsoft Office Complete Suite', 'Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint', 'Microsoft Teams'],
      social: {}
    },
    {
      id: '4',
      name: 'KK Mtshali',
      position: 'Administrative Support',
      department: 'Administration',
      experience: '2+ years',
      qualifications: 'Administrative Management, Student Services, Office Operations',
      email: 'admin@stkcollege.co.za',
      bio: 'Provides comprehensive administrative support to ensure smooth operations and excellent student experience. Manages enrollments, scheduling, and student communications.',
      subjects: ['Student Enrollment', 'Schedule Management', 'Administrative Support', 'Customer Service'],
      rating: 4.7,
      image: '/images/staff/default-admin.png',
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
      subjects: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'Data Science', 'AI Applications'],
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
      subjects: ['Software Development', 'Project Management', 'Industry Best Practices', 'Career Guidance'],
      rating: 4.8,
      image: '/images/staff/industry-experts.png',
      programs: ['Software Development Internship', 'IT In-Service Training'],
      social: {}
    }
  ];

  const departments = [...new Set(mockStaff.map(member => member.department))];

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setStaff(mockStaff);
      } catch (error) {
        console.error('Error fetching staff:', error);
        setStaff(mockStaff);
      } finally {
        setLoading(false);
      }
    };

    fetchStaff();
  }, []);

  const getDepartmentIcon = (department) => {
    switch (department) {
      case 'Programming & Development':
        return FiCode;
      case 'Artificial Intelligence':
        return FiCpu;
      case 'Software Applications':
        return FiMonitor;
      case 'Professional Development':
        return FiBriefcase;
      case 'Administration & Finance':
        return FiUsers;
      case 'Administration':
        return FiUser;
      default:
        return FiBookOpen;
    }
  };

  const getDepartmentColor = (department) => {
    switch (department) {
      case 'Programming & Development':
        return 'from-blue-500 to-blue-600';
      case 'Artificial Intelligence':
        return 'from-purple-500 to-purple-600';
      case 'Software Applications':
        return 'from-green-500 to-green-600';
      case 'Professional Development':
        return 'from-orange-500 to-orange-600';
      case 'Administration & Finance':
        return 'from-indigo-500 to-indigo-600';
      case 'Administration':
        return 'from-gray-500 to-gray-600';
      default:
        return 'from-green-500 to-blue-500';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto mb-4"></div>
          <p className="text-gray-300">Loading team information...</p>
        </div>
      </div>
    );
  }

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
            Meet Our IT Team
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Our dedicated team of IT professionals and educators are committed to providing 
            industry-relevant training in programming, software development, and technology applications.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="card-enhanced rounded-2xl p-6 text-center hover-lift">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FiUsers className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-yellow-400 mb-2">{staff.length}</div>
            <div className="text-white font-medium">Team Members</div>
          </div>
          <div className="card-enhanced rounded-2xl p-6 text-center hover-lift">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FiBookOpen className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-yellow-400 mb-2">{departments.length}</div>
            <div className="text-white font-medium">Specialized Departments</div>
          </div>
          <div className="card-enhanced rounded-2xl p-6 text-center hover-lift">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FiClock className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-yellow-400 mb-2">5+</div>
            <div className="text-white font-medium">Years Avg. Experience</div>
          </div>
          <div className="card-enhanced rounded-2xl p-6 text-center hover-lift">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FiAward className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-yellow-400 mb-2">4.8</div>
            <div className="text-white font-medium">Average Rating</div>
          </div>
        </motion.div>

        {/* Staff Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staff.map((member, index) => {
            const DepartmentIcon = getDepartmentIcon(member.department);
            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card-enhanced rounded-2xl overflow-hidden hover-lift border border-gray-700/50"
              >
                {/* Profile Header */}
                <div className={`relative h-32 bg-gradient-to-br ${getDepartmentColor(member.department)}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-white/20"
                      />
                    ) : (
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                        <FiUser className="w-10 h-10 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="flex items-center space-x-1">
                      <FiStar className="w-4 h-4 text-yellow-400" />
                      <span className="text-white text-sm font-medium">{member.rating}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                      <DepartmentIcon className="w-4 h-4 text-white" />
                      <span className="text-white text-sm font-medium">{member.department}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-yellow-400 font-semibold mb-2">{member.position}</p>
                    <div className="flex items-center space-x-2 text-sm text-gray-300 mb-3">
                      <FiClock className="w-4 h-4" />
                      <span>{member.experience} experience</span>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Programs:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.programs.map((program, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded font-medium border border-blue-500/30"
                        >
                          {program}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.subjects.slice(0, 3).map((subject, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded font-medium border border-yellow-500/30"
                        >
                          {subject}
                        </span>
                      ))}
                      {member.subjects.length > 3 && (
                        <span className="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded">
                          +{member.subjects.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-300">
                      <FiMail className="w-4 h-4" />
                      <span className="truncate">{member.email}</span>
                    </div>
                    {member.phone && (
                      <div className="flex items-center space-x-2 text-sm text-gray-300">
                        <FiPhone className="w-4 h-4" />
                        <span>{member.phone}</span>
                      </div>
                    )}
                  </div>

                  <a 
                    href={`mailto:${member.email}`}
                    className="w-full btn-primary-high-contrast py-3 px-4 rounded-lg font-semibold transition-all duration-200 block text-center hover:no-underline hover:scale-105"
                  >
                    Contact {member.name.split(' ')[0]}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 card-enhanced rounded-2xl p-8 text-center border border-yellow-500/20"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Join Our IT Training Team</h2>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Are you passionate about technology education? We're always looking for experienced 
            IT professionals and educators to join our team and help shape the next generation of tech talent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:stkcollege@gmail.com"
              className="btn-secondary-high-contrast px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105"
            >
              Send Your CV
            </a>
            <a
              href="/contact"
              className="btn-primary-high-contrast px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Staff;