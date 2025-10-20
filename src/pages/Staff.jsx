import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import { 
  FiBookOpen,
  FiAward,
  FiUsers,
  FiClock,
  FiStar,
  FiUser,
  FiMail,
  FiPhone
} from 'react-icons/fi';

const Staff = () => {
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);

  // Actual STK College team members
  const mockStaff = [
    {
      id: '1',
      name: 'Mr S Mtshali',
      position: 'Founder',
      department: 'Management',
      experience: '5+ years',
      qualifications: 'School Development, Website and Software Development',
      email: 'simphiwesipho55@gmail.com',
      phone: '+27763627488',
      bio: 'Passionate about upgrading schools and creating better learning environments for all students.',
      subjects: ['School Development', 'Education Reform', 'Website and software-development'],
      rating: 4.9,
      image: '/images/staff/SM3.png',
      social: {
        linkedin: 'https://www.linkedin.com/in/sipho-mtshali-377784236/',
        github: 'https://github.com/Sipho-Mtshali'
      }
    },
    {
      id: '2',
      name: 'Ms T Nkosi',
      position: 'Finance',
      department: 'Finance',
      experience: '3+ years',
      qualifications: 'Budget Management, Educational Funding',
      email: 'thandekan736@gmail.com',
      phone: '+27735787190',
      bio: 'Ensures every cent supports school improvements and student success.',
      subjects: ['Budget Management', 'Educational Funding', 'Project Finance'],
      rating: 4.8,
      image: '/images/staff/thandeka.png',
      social: {
        linkedin: 'https://www.linkedin.com/in/thandeka-nkosi-40a23b217/?trk=contact-info'
      }
    },
    {
      id: '3',
      name: 'Ms KK Mtshali',
      position: 'Admin',
      department: 'Administration',
      experience: '2+ years',
      qualifications: 'Administrative Support, Educational Management',
      email: 'sanele.mtshali@STKCollege.com',
      phone: '+27123456789',
      bio: 'Keeps everything running smoothly to support school upgrades and academic progress.',
      subjects: ['School Coordination', 'Administrative Support', 'Educational Management'],
      rating: 4.7,
      image: '/Images/default-avatar.png',
      social: {}
    },
    {
      id: '4',
      name: 'Ms N Dlamini',
      position: 'Life Science Teacher',
      department: 'Sciences',
      experience: '4+ years',
      qualifications: 'Biology Education, Classroom Management',
      email: 'sanele.mtshali@STKCollege.com',
      phone: '+27123456789',
      bio: 'Passionate Life Science educator dedicated to inspiring learners through engaging lessons on biology, the environment, and the human body. Committed to academic excellence and learner growth.',
      subjects: ['Biology Education', 'Classroom Management', 'Student Mentoring', 'Science Communication'],
      rating: 4.8,
      image: '/images/staff/LS Teacher.jpeg',
      social: {}
    },
    {
      id: '5',
      name: 'Mr S Mbatha',
      position: 'Mathematics Teacher',
      department: 'Mathematics',
      experience: '3+ years',
      qualifications: 'Mathematics Education, Community Engagement',
      email: 'sanele.mbatha@STKCollege.com',
      phone: '+27123456789',
      bio: 'Eager to contribute fresh ideas to enhance school facilities and student experiences.',
      subjects: ['Community Engagement', 'Project Assistance', 'School Support'],
      rating: 4.6,
      image: '/images/staff/office2.jpg',
      social: {}
    },
    {
      id: '6',
      name: 'Ms N Ntuli',
      position: 'Physical Science Teacher',
      department: 'Sciences',
      experience: '4+ years',
      qualifications: 'Physics & Chemistry Instruction, Laboratory Experimentation',
      email: 'sanele.ntuli@STKCollege.com',
      phone: '+27123456789',
      bio: 'Dedicated Physical Science teacher passionate about helping students understand the principles of physics and chemistry. Focused on creating hands-on experiments, fostering analytical thinking, and promoting scientific curiosity in the classroom.',
      subjects: ['Physics & Chemistry Instruction', 'Laboratory Experimentation', 'Problem-Solving Skills'],
      rating: 4.7,
      image: '/images/staff/PS Teacher.jpeg',
      social: {}
    },
    {
      id: '7',
      name: 'Mr G Mtshali',
      position: 'Administrator',
      department: 'Administration',
      experience: '5 years',
      qualifications: 'Business Administration',
      email: 'gmtshali@stkcollege.com',
      phone: '+27123456789',
      bio: 'Keeps everything running smoothly to support school upgrades and academic progress. Dedicated to ensuring students and staff have the resources they need.',
      subjects: ['School Coordination', 'Administrative Support', 'Educational Management'],
      rating: 4.7,
      image: '/images/staff/S.Mtshali.jpeg',
      social: {}
    },
    {
      id: '8',
      name: 'STK College AI',
      position: 'Virtual Assistant & IT Tutor',
      department: 'Technology',
      experience: '24/7',
      qualifications: 'Matric subject Support, Java & Web Tutoring',
      email: 'ai@stkcollege.com',
      phone: 'https://wa.me/ais/2539971289716097?s=5',
      bio: 'STK College AI is an intelligent virtual assistant designed to support students in Matric upgrades, programming, and web development. Available 24/7, it helps learners with Java, HTML, CSS, and JavaScript, while also guiding parents through college services.',
      subjects: ['Matric subject Support', 'Java & Web Tutoring', '24/7 Availability'],
      rating: 4.9,
      image: '/images/staff/LS Teahcer.jpeg',
      social: {}
    }
  ];

  const departments = [...new Set(mockStaff.map(member => member.department))];

  useEffect(() => {
    // In a real app, you would fetch from Firebase
    // For now, we'll use mock data
    const fetchStaff = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setStaff(mockStaff);
      } catch (error) {
        console.error('Error fetching staff:', error);
        setStaff(mockStaff); // Fallback to mock data
      } finally {
        setLoading(false);
      }
    };

    fetchStaff();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
          <p className="text-gray-300">Loading staff information...</p>
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
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Our dedicated team of educators and support staff are committed to providing 
            the best learning experience for every student at STK College.
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
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FiUsers className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-green-400 mb-2">{staff.length}</div>
            <div className="text-white font-medium">Staff Members</div>
          </div>
          <div className="card-enhanced rounded-2xl p-6 text-center hover-lift">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FiBookOpen className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-yellow-400 mb-2">{departments.length}</div>
            <div className="text-white font-medium">Departments</div>
          </div>
          <div className="card-enhanced rounded-2xl p-6 text-center hover-lift">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FiClock className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-blue-400 mb-2">10+</div>
            <div className="text-white font-medium">Years Avg. Experience</div>
          </div>
          <div className="card-enhanced rounded-2xl p-6 text-center hover-lift">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FiStar className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-green-400 mb-2">4.8</div>
            <div className="text-white font-medium">Average Rating</div>
          </div>
        </motion.div>

        {/* Staff Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staff.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="card-enhanced rounded-2xl overflow-hidden hover-lift"
            >
              {/* Profile Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-600 to-blue-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  {member.image && member.image !== '/Images/default-avatar.png' ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-white/20"
                    />
                  ) : (
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                      <FiUser className="w-12 h-12 text-white" />
                    </div>
                  )}
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                  <div className="flex items-center space-x-1">
                    <FiStar className="w-4 h-4 text-yellow-400" />
                    <span className="text-white text-sm font-medium">{member.rating}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-green-400 font-semibold mb-2">{member.position}</p>
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <FiBookOpen className="w-4 h-4" />
                    <span>{member.department}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <FiBookOpen className="w-4 h-4" />
                    <span>{member.qualifications}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <FiClock className="w-4 h-4" />
                    <span>{member.experience} experience</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <FiMail className="w-4 h-4" />
                    <span className="truncate">{member.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <FiPhone className="w-4 h-4" />
                    <span>{member.phone}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.subjects.map((subject, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full font-medium border border-green-500/30"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full btn-primary-high-contrast py-3 px-4 rounded-lg font-semibold transition-all duration-200">
                  Contact {member.name.split(' ')[0]}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 card-enhanced rounded-2xl p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Team</h2>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Are you passionate about education? We're always looking for dedicated 
            educators to join our team and make a difference in students' lives.
          </p>
          <button className="btn-secondary-high-contrast px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105">
            View Open Positions
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Staff;