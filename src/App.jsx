// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Components
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';   // <-- new import
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import ITRegister from './pages/ITRegister';
import Staff from './pages/Staff';
import CampusLife from './pages/CampusLife';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import Testimonials from './pages/Testimonials';
import CourseDetail from './pages/CourseDetail';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem('stk-visited');
    if (hasVisited) {
      setShowSplash(false);
    } else {
      const timer = setTimeout(() => {
        setShowSplash(false);
        localStorage.setItem('stk-visited', 'true');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    localStorage.setItem('stk-visited', 'true');
  };

  return (
    <Router>
      <div className="min-h-screen bg-background">
        <AnimatePresence>
          {showSplash ? (
            <SplashScreen key="splash" onComplete={handleSplashComplete} />
          ) : (
            <motion.div
              key="main-app"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col min-h-screen"
            >
              <ScrollToTop />
              <TopBar />           {/* ← Top bar placed here */}
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/staff" element={<Staff />} />
                  <Route path="/testimonials" element={<Testimonials />} />
                  <Route path="/it-register" element={<ITRegister />} />
                  <Route path="/campus-life" element={<CampusLife />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/course/:id" element={<CourseDetail />} />
                </Routes>
              </main>
              <Footer />
              <ChatBot />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;