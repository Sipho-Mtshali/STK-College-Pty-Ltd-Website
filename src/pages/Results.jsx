import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase/config';
import { 
  FiSearch, 
  FiFilter, 
  FiAward, 
  FiArrowUp,
  FiCalendar,
  FiUser,
  FiBookOpen,
  FiStar,
  FiDownload,
  FiImage
} from 'react-icons/fi';

const Results = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedSubject, setSelectedSubject] = useState('all');

  // Teacher information mapped to subjects
  const teachers = {
    'Mathematics': 'Mr S Mbatha',
    'Technical Maths': 'Mr S Mbatha',
    'English Home Language': 'Ms T Nkosi',
    'Physical Sciences': 'Ms N Ntuli',
    'Life Sciences': 'Ms N Dlamini',
    'Computer': 'Mr S Mtshali',
    'Computer Applications': 'Mr S Mtshali',
    'Business Studies': 'Ms T Nkosi',
    'Accounting': 'Ms T Nkosi',
    'Geography': 'Ms KK Mtshali',
    'History': 'Ms KK Mtshali',
    'Agriculture': 'Ms KK Mtshali',
    'Mathematical Literacy': 'Mr S Mbatha'
  };

  // Mock results data with actual student names and teacher assignments
  const mockResults = [
    {
      id: '1',
      studentName: 'Thobani Mbatha',
      year: '2023',
      subject: 'Mathematics',
      percentage: 87,
      teacher: teachers['Mathematics'],
      testimonial: 'STK College helped me improve my mathematics grade significantly. Mr Mbatha\'s teaching methods made complex concepts easy to understand!',
      timestamp: '2023-12-15',
      image: '/images/result/statement2.jpg'
    },
    {
      id: '2',
      studentName: 'Lindokuhle Buthelezi',
      year: '2023',
      subject: 'Physical Sciences',
      percentage: 92,
      teacher: teachers['Physical Sciences'],
      testimonial: 'The science program at STK is outstanding. Ms Ntuli\'s practical approach helped me achieve my best results ever in physics and chemistry!',
      timestamp: '2023-12-10',
      image: '/images/result/statement3.webp'
    },
    {
      id: '3',
      studentName: 'Simphiwe Mhembu',
      year: '2023',
      subject: 'English',
      percentage: 78,
      teacher: teachers['English Home Language'],
      testimonial: 'Great improvement in my English skills. Ms Nkosi\'s personalized approach really helped me with writing and communication.',
      timestamp: '2023-12-08',
      image: '/images/result/statement4.jfif'
    },
    {
      id: '4',
      studentName: 'Mxolisi Mbatha',
      year: '2022',
      subject: 'Business Studies',
      percentage: 89,
      teacher: teachers['Business Studies'],
      testimonial: 'The business studies course prepared me well for university. Ms Nkosi\'s real-world examples made the subject come alive. Highly recommended!',
      timestamp: '2022-12-20',
      image: '/images/result/statement5.jfif'
    },
    {
      id: '5',
      studentName: 'Mzwakhe Mtshali',
      year: '2023',
      subject: 'Computer Applications',
      percentage: 94,
      teacher: teachers['Computer Applications'],
      testimonial: 'Excellent IT program. I learned practical programming skills from Mr Mtshali that are valuable in the workplace. The hands-on projects were amazing!',
      timestamp: '2023-12-05',
      image: '/images/result/statement6.png'
    },
    {
      id: '6',
      studentName: 'Ayanda Zulu',
      year: '2022',
      subject: 'Life Sciences',
      percentage: 81,
      teacher: teachers['Life Sciences'],
      testimonial: 'The biology course was challenging but very rewarding. Ms Dlamini\'s teaching methods and lab demonstrations made learning enjoyable.',
      timestamp: '2022-12-18',
      image: '/images/result/statement7.jfif'
    },
    {
      id: '7',
      studentName: 'Ntokozo Zuma',
      year: '2023',
      subject: 'Technical Maths',
      percentage: 85,
      teacher: teachers['Technical Maths'],
      testimonial: 'Mr Mbatha\'s approach to technical mathematics helped me understand practical applications. The improvement in my problem-solving skills was remarkable!',
      timestamp: '2023-11-28',
      image: '/images/result/statement8.jfif'
    },
    {
      id: '8',
      studentName: 'Sipho Ndlovu',
      year: '2023',
      subject: 'Accounting',
      percentage: 79,
      teacher: teachers['Accounting'],
      testimonial: 'Ms Nkosi made accounting principles clear and understandable. The step-by-step guidance helped me master complex financial concepts.',
      timestamp: '2023-12-12',
      image: '/images/result/statement9.jfif'
    },
    {
      id: '9',
      studentName: 'Nomvula Khumalo',
      year: '2022',
      subject: 'Geography',
      percentage: 88,
      teacher: teachers['Geography'],
      testimonial: 'Ms Mtshali\'s geography lessons were engaging and informative. The field trips and practical assignments made the subject come alive for me.',
      timestamp: '2022-11-30',
      image: '/images/result/statement1.avif'
    }
  ];

  const subjects = [...new Set(mockResults.map(result => result.subject))];
  const years = [...new Set(mockResults.map(result => result.year))];

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
                         result.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = selectedYear === 'all' || result.year === selectedYear;
    const matchesSubject = selectedSubject === 'all' || result.subject === selectedSubject;
    
    return matchesSearch && matchesYear && matchesSubject;
  });

  const stats = {
    totalStudents: results.length,
    averagePercentage: results.reduce((acc, result) => acc + result.percentage, 0) / results.length,
    topPerformers: results.filter(result => result.percentage >= 85).length,
    passRate: 100 // Mock data shows all students passed
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading results...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Student Results
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The following student results are sample data for demonstration purposes only.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <FiUser className="w-6 h-6 text-primary" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">{stats.totalStudents}</div>
            <div className="text-gray-600">Students Tracked</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <FiArrowUp className="w-6 h-6 text-primary" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">{Math.round(stats.averagePercentage)}%</div>
            <div className="text-gray-600">Average Score</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <FiAward className="w-6 h-6 text-primary" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">{stats.topPerformers}</div>
            <div className="text-gray-600">Top Performers</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <FiStar className="w-6 h-6 text-primary" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">{stats.passRate}%</div>
            <div className="text-gray-600">Pass Rate</div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search students or subjects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Year Filter */}
            <div className="relative">
              <FiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white"
              >
                <option value="all">All Years</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>

            {/* Subject Filter */}
            <div className="relative">
              <FiBookOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white"
              >
                <option value="all">All Subjects</option>
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>

            {/* Download Button */}
            <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
              <FiDownload className="w-5 h-5 mr-2" />
              Export Results
            </button>
          </div>
        </motion.div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResults.map((result, index) => (
            <motion.div
              key={result.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
            >
              {/* Result Image */}
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                {result.image ? (
                  <img 
                    src={result.image} 
                    alt={`${result.studentName}'s result`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div 
                  className={`w-full h-full flex items-center justify-center bg-gray-100 ${result.image ? 'hidden' : 'flex'}`}
                >
                  <FiImage className="w-12 h-12 text-gray-400" />
                  <span className="sr-only">No image available</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{result.studentName}</h3>
                  <p className="text-primary font-semibold">{result.subject}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm text-gray-600">Year: {result.year}</span>
                    <span className="text-lg font-bold text-gray-900">{result.percentage}%</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Teacher:</h4>
                  <p className="text-gray-600">{result.teacher}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Student Testimonial:</h4>
                  <p className="text-gray-600 text-sm italic leading-relaxed">
                    "{result.testimonial}"
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-sm text-gray-500">
                    Completed: {new Date(result.timestamp).toLocaleDateString()}
                  </span>
                  <div className="flex space-x-2">
                    <button 
                      className="text-primary hover:text-blue-700 transition-colors duration-200"
                      title="View Certificate"
                    >
                      <FiAward className="w-5 h-5" />
                    </button>
                    <button 
                      className="text-primary hover:text-blue-700 transition-colors duration-200"
                      title="Download Result"
                    >
                      <FiDownload className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredResults.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <FiSearch className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Results Found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-primary text-white rounded-xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Be Our Next Success Story</h2>
          <p className="text-white mb-6 max-w-2xl mx-auto font-medium">
            Join hundreds of students who have achieved their academic goals with STK College. 
            Your success story could be next!
          </p>
          <button className="bg-secondary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200">
            Start Your Journey
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Results;