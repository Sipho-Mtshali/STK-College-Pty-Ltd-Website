import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Components
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import MatricRegister from './pages/MatricRegister';
import ITRegister from './pages/ITRegister';
import Staff from './pages/Staff';
import Results from './pages/Results';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('stk-visited');
    
    if (hasVisited) {
      setShowSplash(false);
    } else {
      // Show splash for 4 seconds for first-time visitors
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
              <Navbar />
              
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/matric-register" element={<MatricRegister />} />
                  <Route path="/it-register" element={<ITRegister />} />
                  <Route path="/staff" element={<Staff />} />
                  <Route path="/results" element={<Results />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </main>
              
              <Footer />
              <WhatsAppButton />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;