// src/components/ChatBot.jsx
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import { 
  FiMessageCircle, 
  FiX, 
  FiSend, 
  FiArrowRight,
  FiMinimize2,
  FiMaximize2
} from 'react-icons/fi';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Updated responses for IT focus
  const responses = {
    'short courses': `🚀 IT Short Courses

• Python Programming (3 months) - R4,500
• Java Programming (3 months) - R4,500  
• Microsoft 365 Suite (3 months) - R3,800
• SQL Database (6 months) - R6,200

All courses include certificates and portfolio projects!`,

    'python': `🐍 Python Programming Course

Duration: 3 months
Price: R4,500
Funding: Available through MICT SETA

Learn:
• Python fundamentals
• Data structures
• Web development with Django
• Data analysis
• Real-world projects

Perfect for beginners!`,

    'java': `☕ Java Programming Course

Duration: 3 months  
Price: R4,500

Learn:
• Core Java concepts
• Object-oriented programming
• Spring Framework
• Database integration
• Build practical applications

Start your programming career!`,

    'microsoft': `💼 Microsoft 365 Mastery

Duration: 3 months
Price: R3,800

Master:
• Word (Advanced)
• Excel (Formulas, PivotTables)
• PowerPoint (Professional presentations)
• Outlook & Teams
• Office automation

Boost your office skills!`,

    'sql': `🗄️ SQL Database Course

Duration: 6 months
Price: R6,200

Learn:
• Database design
• SQL queries
• Stored procedures
• Data analysis
• MySQL & PostgreSQL

Become a database expert!`,

    'internship': `💻 Internship Program

Technologies: C#, MVC.NET, SQL Server

• 6-month intensive training
• Real client projects
• Mentorship from seniors
• Portfolio development
• Job placement assistance

Transform from learner to professional!`,

    'learnership': `🤖 AI Learnership

Duration: 12 months
Focus: Artificial Intelligence & Machine Learning

• Python for AI
• Machine Learning algorithms
• Neural Networks
• Data Science
• AI project development

Funded opportunities available!`,

    'services': `🎨 Additional Services

• Portfolio Creation - R2,500
• Website Development (HTML, React, Tailwind) - From R5,000
• Mobile App Development (React Native) - From R7,000
• Custom Software Solutions - Quote based

Turn your ideas into reality!`,

    'pricing': `💰 Course Pricing

SHORT COURSES:
Python - R4,500
Java - R4,500
Microsoft 365 - R3,800
SQL - R6,200

SERVICES:
Portfolio - R2,500
Website - From R5,000
Mobile App - From R7,000

Payment plans available!`,

    'contact': `📞 Contact STK College IT

Phone: +27 76 362 7488
Email: stkcollege@gmail.com
Location: Durban, 4031

Visit for a free career consultation!`,

    'default': `Need more detailed information?

Contact our IT department for:
• Course details & syllabus
• Career guidance  
• Payment plans
• Funding options (MICT SETA)
• Portfolio reviews

We'll help you start your tech career! 🚀`
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize with welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        id: 1,
        text: "👋 Hello! I'm STK College IT Assistant\n\nI can help with:\n• Short Courses (Python, Java, SQL, Microsoft)\n• Internships (C#, MVC.NET)\n• Learnerships (AI)\n• Development Services\n• Pricing & Funding\n\nLet's build your tech career!",
        sender: 'bot'
      }]);
    }
  }, [isOpen]);

  const findResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('python')) {
      return responses.python;
    } else if (lowerMessage.includes('java')) {
      return responses.java;
    } else if (lowerMessage.includes('microsoft') || lowerMessage.includes('office') || lowerMessage.includes('365')) {
      return responses.microsoft;
    } else if (lowerMessage.includes('sql') || lowerMessage.includes('database')) {
      return responses.sql;
    } else if (lowerMessage.includes('short') || lowerMessage.includes('course')) {
      return responses['short courses'];
    } else if (lowerMessage.includes('internship')) {
      return responses.internship;
    } else if (lowerMessage.includes('learnership') || lowerMessage.includes('ai')) {
      return responses.learnership;
    } else if (lowerMessage.includes('service') || lowerMessage.includes('portfolio') || lowerMessage.includes('website') || lowerMessage.includes('app')) {
      return responses.services;
    } else if (lowerMessage.includes('price') || lowerMessage.includes('fee') || lowerMessage.includes('cost')) {
      return responses.pricing;
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('phone')) {
      return responses.contact;
    } else {
      return responses.default;
    }
  };

  const handleSendMessage = async (message = null) => {
    const messageToSend = message || inputMessage.trim();
    
    if (!messageToSend) return;

    const userMessage = {
      id: Date.now(),
      text: messageToSend,
      sender: 'user'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const response = findResponse(messageToSend);
      
      const botMessage = {
        id: Date.now() + 1,
        text: response,
        sender: 'bot'
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 800);
  };

  const handleQuickReply = (reply) => {
    handleSendMessage(reply);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-[#F4C542] hover:bg-[#e0b03a] text-[#0F2B5B] p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        style={{ zIndex: 10000 }}
      >
        <FiMessageCircle className="w-6 h-6" />
        <span className="sr-only">Chat with STK Assistant</span>
        <span className="absolute -inset-1 rounded-full border-2 border-[#F4C542]/30 animate-ping"></span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed z-50 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col"
            style={{
              bottom: '90px',
              right: '20px',
              width: 'calc(100vw - 40px)',
              maxWidth: '420px',
              height: isMinimized ? 'auto' : '580px',
              maxHeight: isMinimized ? 'auto' : '80vh',
              zIndex: 10000,
              boxShadow: '0 20px 60px rgba(15, 43, 91, 0.25)'
            }}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {/* Header - Always visible with prominent X button */}
            <div className="bg-gradient-to-r from-[#0F2B5B] to-[#1a3f7a] text-white px-5 py-3.5 flex justify-between items-center flex-shrink-0">
              <div className="flex items-center space-x-3 min-w-0">
                <div className="w-9 h-9 bg-[#F4C542]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <FiMessageCircle className="w-5 h-5 text-[#F4C542]" />
                </div>
                <div className="truncate">
                  <span className="font-bold text-white text-sm block truncate">STK IT Assistant</span>
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2 h-2 bg-green-400 rounded-full inline-block animate-pulse"></span>
                    <span className="text-[10px] text-gray-300">Online</span>
                  </div>
                </div>
              </div>
              
              {/* Header Actions - Always visible */}
              <div className="flex items-center space-x-1 flex-shrink-0">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-gray-300 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/10"
                  aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}
                >
                  {isMinimized ? (
                    <FiMaximize2 className="w-4 h-4" />
                  ) : (
                    <FiMinimize2 className="w-4 h-4" />
                  )}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/10 bg-white/5"
                  aria-label="Close chat"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Chat content - hidden when minimized */}
            {!isMinimized && (
              <>
                {/* Messages Area */}
                <div 
                  className="px-5 py-4 space-y-3 overflow-y-auto bg-gray-50 flex-1"
                  style={{ height: 'calc(100% - 200px)' }}
                >
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                          message.sender === 'user'
                            ? 'bg-[#F4C542] text-[#0F2B5B] rounded-br-none'
                            : 'bg-white text-gray-700 rounded-bl-none shadow-sm border border-gray-100'
                        }`}
                      >
                        <div className="whitespace-pre-line">
                          {message.text}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-white text-gray-700 rounded-2xl rounded-bl-none px-4 py-2.5 shadow-sm border border-gray-100">
                        <div className="flex space-x-1.5">
                          <div className="w-2.5 h-2.5 bg-[#F4C542] rounded-full animate-bounce"></div>
                          <div className="w-2.5 h-2.5 bg-[#F4C542] rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></div>
                          <div className="w-2.5 h-2.5 bg-[#F4C542] rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Replies */}
                <div className="px-4 py-2.5 border-t border-gray-100 bg-white flex-shrink-0">
                  <div className="flex flex-wrap gap-1.5">
                    {['Python', 'Java', 'SQL', 'Internship', 'Pricing'].map((reply) => (
                      <button
                        key={reply}
                        onClick={() => handleQuickReply(reply)}
                        className="px-3 py-1.5 bg-gray-50 hover:bg-[#F4C542] hover:text-[#0F2B5B] text-gray-600 text-xs font-medium rounded-full border border-gray-200 hover:border-[#F4C542] transition-all duration-200"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contact CTA */}
                <div className="px-4 py-2.5 border-t border-gray-100 bg-gray-50 flex-shrink-0">
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center justify-center w-full bg-[#F4C542] hover:bg-[#e0b03a] text-[#0F2B5B] font-bold px-4 py-2.5 rounded-lg text-sm transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Free Career Consultation
                    <FiArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>

                {/* Input Area */}
                <div className="p-3 border-t border-gray-100 bg-white flex-shrink-0">
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask about Python, Java, internships..."
                      className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F4C542] focus:border-transparent transition-all duration-200"
                    />
                    <button
                      onClick={() => handleSendMessage()}
                      disabled={!inputMessage.trim()}
                      className="bg-[#F4C542] hover:bg-[#e0b03a] disabled:bg-gray-200 text-[#0F2B5B] p-2.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg disabled:shadow-none disabled:cursor-not-allowed"
                    >
                      <FiSend className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;