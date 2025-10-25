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

  // Simple responses
  const responses = {
    'matric': `🎓 Matric Upgrade Program

We help improve high school results:

• Expert tutoring
• Flexible scheduling  
• Small classes
• 90% pass rate

Fees:
Registration: R2,000
Complete: R6,700

Contact admissions for details.`,
    
    'it program': `💻 IT Professional Courses

Courses available:
• Software Development
• Web Development
• Database Management
• Cybersecurity

Duration: 8-14 months
Registration: R3,000

Contact IT department.`,
    
    'admission': `📝 Admission Process

1. Choose program
2. Pay registration
3. Complete form
4. Start learning!

Contact admissions for help.`,
    
    'fee': `💰 Fees & Payment

Matric Upgrade:
Registration: R2,000
Complete: R6,700

IT Courses:
Registration: R3,000
Flexible plans

Contact finance for options.`,
    
    'contact': `📞 Contact STK College

Phone: +27 76 362 7488
Email: stkcollege@gmail.com
Location: Durban, 4031

Visit campus for a tour!`,
    
    'default': `Need more detailed information?

Contact our team for:
• Program details
• Career guidance  
• Pricing & payments
• Campus tours

They'll provide personalized help! 🎓`
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
        text: "👋 Hello! I'm STK College Assistant\n\nI can help with:\n• Matric Upgrade Programs\n• IT Courses\n• Admissions\n• Fees\n• Contact Info\n\nFor detailed help, contact our team!",
        sender: 'bot'
      }]);
    }
  }, [isOpen]);

  // Find response
  const findResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('matric') || lowerMessage.includes('upgrade')) {
      return responses.matric;
    } else if (lowerMessage.includes('it') || lowerMessage.includes('computer')) {
      return responses['it program'];
    } else if (lowerMessage.includes('admission') || lowerMessage.includes('apply')) {
      return responses.admission;
    } else if (lowerMessage.includes('fee') || lowerMessage.includes('price')) {
      return responses.fee;
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
        className="fixed bottom-4 right-4 z-50 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 sm:bottom-6 sm:right-6 sm:p-4"
        style={{ zIndex: 10000 }}
      >
        <FiMessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Simple Chat Window */}
      {isOpen && (
        <div 
          className="fixed z-50 bg-gray-900 rounded-lg shadow-xl border border-green-500 overflow-hidden"
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
          <div className="bg-green-600 text-white p-3 flex justify-between items-center border-b border-green-500">
            <div className="flex items-center space-x-2">
              <FiMessageCircle className="w-5 h-5" />
              <span className="font-bold text-sm">STK College Assistant</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-green-200 transition-colors p-1"
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
                      ? 'bg-green-600 text-white rounded-br-none'
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
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          <div className="p-2 border-t border-gray-700 bg-gray-900">
            <div className="flex flex-wrap gap-1">
              {['Matric', 'IT Programs', 'Admissions', 'Contact'].map((reply) => (
                <button
                  key={reply}
                  onClick={() => handleQuickReply(reply)}
                  className="px-2 py-1 bg-gray-700 hover:bg-green-600 text-white text-xs rounded border border-green-500 transition-colors"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="p-2 border-t border-gray-700 bg-green-600/20">
            <div className="text-center">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-xs font-semibold transition-colors w-full justify-center"
              >
                Contact Our Team
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
                placeholder="Ask about courses, fees..."
                className="flex-1 bg-gray-800 border border-gray-600 rounded px-2 py-1 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 text-sm"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputMessage.trim()}
                className="bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white p-2 rounded transition-colors"
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