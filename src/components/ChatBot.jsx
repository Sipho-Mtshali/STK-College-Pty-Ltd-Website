// src/components/ChatBot.jsx
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// Simple icons - no external dependencies
import { 
  FiMessageCircle, 
  FiX, 
  FiSend, 
  FiArrowRight
} from 'react-icons/fi';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  // Scroll to bottom
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

  // Find response
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

  // Handle sending messages
  const handleSendMessage = async (message = null) => {
    const messageToSend = message || inputMessage.trim();
    
    if (!messageToSend) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: messageToSend,
      sender: 'user'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate typing delay
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

  // Handle quick reply
  const handleQuickReply = (reply) => {
    handleSendMessage(reply);
  };

  // Handle key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Simple Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 bg-yellow-500 hover:bg-yellow-600 text-gray-900 p-3 rounded-full shadow-lg transition-all duration-200 sm:bottom-6 sm:right-6 sm:p-4"
        style={{ zIndex: 10000 }}
      >
        <FiMessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Simple Chat Window */}
      {isOpen && (
        <div 
          className="fixed z-50 bg-gray-900 rounded-lg shadow-xl border border-yellow-500 overflow-hidden"
          style={{
            bottom: '80px',
            right: '16px',
            width: 'calc(100vw - 32px)',
            maxWidth: '400px',
            height: '500px',
            maxHeight: '70vh',
            zIndex: 10000
          }}
        >
          {/* Header - Always visible */}
          <div className="bg-yellow-500 text-gray-900 p-3 flex justify-between items-center border-b border-yellow-600">
            <div className="flex items-center space-x-2">
              <FiMessageCircle className="w-5 h-5" />
              <span className="font-bold text-sm">STK IT Assistant</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-900 hover:text-gray-700 transition-colors p-1"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div 
            className="p-3 space-y-2 overflow-y-auto bg-gray-800"
            style={{ height: 'calc(100% - 180px)' }}
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === 'user'
                      ? 'bg-yellow-500 text-gray-900 rounded-br-none'
                      : 'bg-gray-700 text-white rounded-bl-none'
                  }`}
                >
                  <div className="whitespace-pre-line text-sm">
                    {message.text}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-700 text-white rounded-lg rounded-bl-none p-3 max-w-[80%]">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          <div className="p-2 border-t border-gray-700 bg-gray-900">
            <div className="flex flex-wrap gap-1">
              {['Python', 'Java', 'SQL', 'Internship', 'Pricing'].map((reply) => (
                <button
                  key={reply}
                  onClick={() => handleQuickReply(reply)}
                  className="px-2 py-1 bg-gray-700 hover:bg-yellow-500 text-white text-xs rounded border border-yellow-500 transition-colors"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="p-2 border-t border-gray-700 bg-yellow-500/20">
            <div className="text-center">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-3 py-1 rounded text-xs font-semibold transition-colors w-full justify-center"
              >
                Free Career Consultation
                <FiArrowRight className="ml-1 w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-2 border-t border-gray-700 bg-gray-900">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about Python, Java, internships..."
                className="flex-1 bg-gray-800 border border-gray-600 rounded px-2 py-1 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 text-sm"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputMessage.trim()}
                className="bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-600 text-gray-900 p-2 rounded transition-colors"
              >
                <FiSend className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;