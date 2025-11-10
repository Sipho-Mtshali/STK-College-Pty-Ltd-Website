import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiAward, FiArrowUp, FiCalendar,
  FiUser, FiBookOpen, FiStar, FiDownload, FiImage, 
  FiCode, FiDatabase, FiMonitor, FiCpu } from 'react-icons/fi';

const Results = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedProgram, setSelectedProgram] = useState('all');

  // Instructor information mapped to programs
  const instructors = {
    'Python Programming': 'Sipho Mtshali',
    'Java Development': 'Sipho Mtshali',
    'Web Development': 'Sipho Mtshali',
    'AI & Machine Learning': 'STK College AI Team',
    'SQL Database Management': 'Sipho Mtshali',
    'Microsoft Office Suite': 'Sipho Mtshali',
    'Software Development Internship': 'Industry Experts',
    'IT In-Service Training': 'Industry Professionals'
  };

  // Mock results data with IT program focus
  const mockResults = [
    {
      id: '1',
      studentName: 'General Mtshali',
      year: '2024',
      program: 'Python Programming',
      percentage: 92,
      instructor: instructors['Python Programming'],
      testimonial: 'The Python course transformed my career! Mr Mtshali\'s practical approach helped me land a job as a junior developer within 2 months of completing the course.',
      timestamp: '2024-01-15',
      image: '/images/result/python1.jpeg',
      programType: 'Short Course',
      employment: 'Junior Python Developer at Tech Solutions SA'
    },
    {
      id: '2',
      studentName: 'Lerato Smith',
      year: '2024',
      program: 'Java Development',
      percentage: 88,
      instructor: instructors['Java Development'],
      testimonial: 'Excellent Java course with real-world projects. The Spring Framework training was particularly valuable for enterprise development.',
      timestamp: '2024-01-10',
      image: '/images/results/java-certificate.jpg',
      programType: 'Short Course',
      employment: 'Software Developer at Banking Corp'
    },
    {
      id: '3',
      studentName: 'David Brown',
      year: '2023',
      program: 'Web Development',
      percentage: 95,
      instructor: instructors['Web Development'],
      testimonial: 'The React.js and modern web development skills I learned helped me build a portfolio that impressed employers. Got multiple job offers!',
      timestamp: '2023-12-08',
      image: '/images/results/webdev-certificate.jpg',
      programType: 'Short Course',
      employment: 'Frontend Developer at Digital Agency'
    },
    {
      id: '4',
      studentName: 'Nadia Peters',
      year: '2024',
      program: 'AI & Machine Learning',
      percentage: 90,
      instructor: instructors['AI & Machine Learning'],
      testimonial: 'The AI learnership program was intensive but rewarding. Working on real ML projects gave me the confidence to pursue a career in data science.',
      timestamp: '2024-01-20',
      image: '/images/results/ai-certificate.jpg',
      programType: 'Learnership',
      employment: 'AI Research Assistant at University'
    },
    {
      id: '5',
      studentName: 'Mike Johnson',
      year: '2023',
      program: 'SQL Database Management',
      percentage: 87,
      instructor: instructors['SQL Database Management'],
      testimonial: 'Comprehensive database course that covered everything from basic queries to advanced optimization. Essential skills for any backend developer.',
      timestamp: '2023-11-28',
      image: '/images/results/sql-certificate.jpg',
      programType: 'Short Course',
      employment: 'Database Administrator at Retail Chain'
    },
    {
      id: '6',
      studentName: 'Sarah Williams',
      year: '2024',
      program: 'Software Development Internship',
      percentage: 94,
      instructor: instructors['Software Development Internship'],
      testimonial: 'The internship provided hands-on experience with real clients. The mentorship and project work were invaluable for my professional growth.',
      timestamp: '2024-01-18',
      image: '/images/results/internship-certificate.jpg',
      programType: 'Internship',
      employment: 'Full-stack Developer at Startup (Hired after internship)'
    },
    {
      id: '7',
      studentName: 'James Wilson',
      year: '2023',
      program: 'IT In-Service Training',
      percentage: 85,
      instructor: instructors['IT In-Service Training'],
      testimonial: 'The in-service training bridged the gap between theory and practice. Working in a real IT department prepared me for corporate environment.',
      timestamp: '2023-12-12',
      image: '/images/results/training-certificate.jpg',
      programType: 'In-Service Training',
      employment: 'IT Support Specialist at Manufacturing Company'
    },
    {
      id: '8',
      studentName: 'Emma Davis',
      year: '2024',
      program: 'Microsoft Office Suite',
      percentage: 96,
      instructor: instructors['Microsoft Office Suite'],
      testimonial: 'Mastering Office applications boosted my productivity and made me more valuable in the workplace. Highly recommended for office professionals.',
      timestamp: '2024-01-08',
      image: '/images/results/office-certificate.jpg',
      programType: 'Short Course',
      employment: 'Office Administrator at Law Firm'
    },
    {
      id: '9',
      studentName: 'Thomas Miller',
      year: '2023',
      program: 'Python Programming',
      percentage: 89,
      instructor: instructors['Python Programming'],
      testimonial: 'From zero programming knowledge to building web applications in 10 weeks. The project-based learning approach really works!',
      timestamp: '2023-11-30',
      image: '/images/results/python-certificate-2.jpg',
      programType: 'Short Course',
      employment: 'Python Developer at E-commerce Company'
    }
  ];

  const programs = [...new Set(mockResults.map(result => result.program))];
  const years = [...new Set(mockResults.map(result => result.year))];
  const programTypes = [...new Set(mockResults.map(result => result.programType))];

  useEffect(() => {
    const fetchResults = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setResults(mockResults);
      } catch (error) {
        console.error('Error fetching results:', error);
        setResults(mockResults); // Fallback to mock data
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  const filteredResults = results.filter(result => {
    const matchesSearch = result.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         result.program.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = selectedYear === 'all' || result.year === selectedYear;
    const matchesProgram = selectedProgram === 'all' || result.program === selectedProgram;
    
    return matchesSearch && matchesYear && matchesProgram;
  });

  const stats = {
    totalStudents: results.length,
    averagePercentage: results.reduce((acc, result) => acc + result.percentage, 0) / results.length,
    employmentRate: 100, // All students in mock data got employment
    distinctionRate: results.filter(result => result.percentage >= 85).length
  };

  const getProgramIcon = (programType) => {
    switch (programType) {
      case 'Short Course':
        return FiBookOpen;
      case 'Learnership':
        return FiAward;
      case 'Internship':
        return FiCode;
      case 'In-Service Training':
        return FiMonitor;
      default:
        return FiBookOpen;
    }
  };

  const getProgramColor = (programType) => {
    switch (programType) {
      case 'Short Course':
        return 'bg-green-500';
      case 'Learnership':
        return 'bg-purple-500';
      case 'Internship':
        return 'bg-blue-500';
      case 'In-Service Training':
        return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
          <p className="text-gray-300">Loading results...</p>
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            IT Program Results
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Celebrating the success of our students in IT short courses, learnerships, internships, and in-service training programs.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="card-enhanced rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <FiUser className="w-6 h-6 text-green-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-2">{stats.totalStudents}</div>
            <div className="text-gray-300">Graduated Students</div>
          </div>
          <div className="card-enhanced rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <FiArrowUp className="w-6 h-6 text-green-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-2">{Math.round(stats.averagePercentage)}%</div>
            <div className="text-gray-300">Average Score</div>
          </div>
          <div className="card-enhanced rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <FiAward className="w-6 h-6 text-green-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-2">{stats.distinctionRate}</div>
            <div className="text-gray-300">Distinctions</div>
          </div>
          <div className="card-enhanced rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <FiStar className="w-6 h-6 text-green-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-2">{stats.employmentRate}%</div>
            <div className="text-gray-300">Employment Rate</div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="card-enhanced rounded-xl p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search students or programs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Year Filter */}
            <div className="relative">
              <FiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none"
              >
                <option value="all">All Years</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>

            {/* Program Filter */}
            <div className="relative">
              <FiBookOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedProgram}
                onChange={(e) => setSelectedProgram(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none"
              >
                <option value="all">All Programs</option>
                {programs.map(program => (
                  <option key={program} value={program}>{program}</option>
                ))}
              </select>
            </div>

            {/* Download Button */}
            <button className="btn-primary-high-contrast px-6 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center">
              <FiDownload className="w-5 h-5 mr-2" />
              Export Results
            </button>
          </div>
        </motion.div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResults.map((result, index) => {
            const ProgramIcon = getProgramIcon(result.programType);
            return (
              <motion.div
                key={result.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card-enhanced rounded-xl overflow-hidden hover-lift border border-gray-700/50"
              >
                {/* Program Type Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${getProgramColor(result.programType)}`}>
                    {result.programType}
                  </span>
                </div>

                {/* Result Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  {result.image ? (
                    <img 
                      src={result.image} 
                      alt={`${result.studentName}'s certificate`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div 
                    className={`w-full h-full flex items-center justify-center ${result.image ? 'hidden' : 'flex'}`}
                  >
                    <div className="text-center">
                      <ProgramIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-400 text-sm">Certificate of Completion</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-1">{result.studentName}</h3>
                    <p className="text-green-400 font-semibold">{result.program}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm text-gray-400">Year: {result.year}</span>
                      <span className="text-lg font-bold text-white">{result.percentage}%</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2">Instructor:</h4>
                    <p className="text-gray-300">{result.instructor}</p>
                  </div>

                  {result.employment && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-white mb-2">Current Position:</h4>
                      <p className="text-gray-300 text-sm">{result.employment}</p>
                    </div>
                  )}

                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2">Student Testimonial:</h4>
                    <p className="text-gray-300 text-sm italic leading-relaxed">
                      "{result.testimonial}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <span className="text-sm text-gray-500">
                      Completed: {new Date(result.timestamp).toLocaleDateString()}
                    </span>
                    <div className="flex space-x-2">
                      <button 
                        className="text-green-400 hover:text-green-300 transition-colors duration-200"
                        title="View Certificate"
                      >
                        <FiAward className="w-5 h-5" />
                      </button>
                      <button 
                        className="text-green-400 hover:text-green-300 transition-colors duration-200"
                        title="Download Result"
                      >
                        <FiDownload className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredResults.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <FiSearch className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No Results Found</h3>
            <p className="text-gray-400">Try adjusting your search criteria</p>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 card-enhanced rounded-2xl p-8 text-center border border-green-500/20"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Start Your IT Career Journey</h2>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto font-medium">
            Join our successful graduates in launching rewarding careers in technology. 
            Choose from short courses, learnerships, internships, and in-service training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/courses"
              className="btn-secondary-high-contrast px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-200"
            >
              View Programs
            </a>
            <a
              href="/contact"
              className="btn-primary-high-contrast px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Get Started Today
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Results;