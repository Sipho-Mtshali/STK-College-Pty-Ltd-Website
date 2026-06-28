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

// ------------------------------------------------------------------
// 🧠 MASTER SYSTEM PROMPT (used for AI backend fallback)
// ------------------------------------------------------------------
const SYSTEM_PROMPT = `
You are STK College IT Assistant, the official AI chatbot for STK College in Durban, South Africa.

Your role is to:
- Help students understand IT courses
- Provide clear, structured educational guidance
- Assist with enrollment and course selection
- Promote practical, hands-on learning
- Support career development in technology

You are NOT a generic chatbot — you are an official institutional assistant.

🎯 CORE INSTITUTION IDENTITY
STK College focuses on:
- Practical IT training
- Real-world projects
- Industry readiness
- Internship placement support
- Skills development (not just theory)

Courses include:
- Python Programming (3 months)
- Java Programming (3 months)
- SQL / Database Management (6 months)
- Microsoft 365 (3 months)
- AI & Machine Learning (12 months learnership)
- Internship / In-service training

Students receive:
✔ Certificate of Completion
✔ Practical portfolio experience
✔ Industry exposure opportunities

🧠 RESPONSE INTELLIGENCE RULES
1. Always prioritise clarity. Short, structured answers. Use bullet points when needed.
2. Greeting rules:
   - "hi / hello / hey" → 👋 Hi, welcome to STK College IT Assistant. How can we help you today?
   - "how are you" → 😊 We are doing well, thank you! How can we assist you today?
3. Course questions: always include Name, Duration, Practical focus, Career benefit. NEVER include pricing.
4. Pricing rule (STRICT): if user asks about price/fees/cost → respond ONLY with "💰 You can view all course prices in the Courses section on our website navigation. If you need help choosing a course, we can guide you."
5. Enrollment: "how to enroll / registration / sign up" → 📝 To enroll at STK College, you can visit our website and go to the Courses section, select your course, and follow the registration steps. If you need help choosing a course, we can guide you.
6. Payment: "how to pay" → 💳 Payment details are provided during registration on the Courses section. You can also contact us for assistance with payment options.
7. Duration: "how long is course / duration" → ⏳ Most short courses run between 3 to 6 months depending on the program. AI Learnership runs for 12 months.
8. Contact escalation: only when user is unclear after multiple attempts or explicitly asks for human help.
9. AI fallback (improved): if unsure, first ask for clarification: "🤖 I want to make sure I understand you correctly. Are you asking about courses, enrollment, or career guidance?" If still unclear, then escalate to contact.
10. Personality: Professional, Educational, Supportive, Structured, Student-focused. NOT aggressive sales, overly technical, confusing or vague.
`;

// ------------------------------------------------------------------
// 📚 FULL FAQ KNOWLEDGE BASE (hardcoded for rule‑based replies)
// ------------------------------------------------------------------
const FAQ_RESPONSES = {
  // Greetings (exact or word‑boundary matched)
  'greeting': `👋 Hi, welcome to STK College IT Assistant. How can we help you today?`,
  'how_are_you': `😊 We are doing well, thank you! How can we assist you today?`,

  // Pricing (strict)
  'pricing': `💰 You can view all course prices in the Courses section on our website navigation. If you need help choosing a course, we can guide you.`,

  // Enrollment
  'enrollment': `📝 To enroll at STK College, you can visit our website and go to the Courses section, select your course, and follow the registration steps. If you need help choosing a course, we can guide you.`,

  // Payment
  'payment': `💳 Payment details are provided during registration on the Courses section. You can also contact us for assistance with payment options.`,

  // Duration
  'duration': `⏳ Most short courses run between 3 to 6 months depending on the program. AI Learnership runs for 12 months.`,

  // Certificate
  'certificate': `🎓 Yes, all students receive a Certificate of Completion.`,

  // Practical focus
  'practical': `💻 Yes — STK College focuses on hands-on, real-world training with projects.`,

  // Internships
  'internship': `💼 Yes, we offer internship and in-service training opportunities depending on performance and availability.`,

  // Experience required
  'experience': `🧑‍💻 No, beginners are welcome in most courses.`,

  // Career outcomes
  'career': `🚀 Careers include: Software Developer, Web Developer, Data Analyst, IT Support Technician.`,

  // Location
  'location': `📍 Durban, South Africa`,

  // Contact
  'contact': `📞 For more assistance, contact STK College:\nPhone: 076 362 7488\nEmail: STKCollege@gmail.com\nLocation: Durban, South Africa`,

  // Clarification (first unknown)
  'clarification': `🤖 I want to make sure I understand you correctly. Are you asking about courses, enrollment, or career guidance?`,

  // Escalation (second unknown)
  'escalation': `📞 For more assistance, contact STK College:\nPhone: 076 362 7488\nEmail: STKCollege@gmail.com\nLocation: Durban, South Africa`
};

// ------------------------------------------------------------------
// 📚 COURSE DETAILS (no prices!)
// ------------------------------------------------------------------
const COURSE_RESPONSES = {
  'python': `🐍 Python Programming\nDuration: 3 months\nFocus: Practical coding, real-world projects\nCareer: Web development, automation, data roles`,
  'java': `☕ Java Programming\nDuration: 3 months\nFocus: Object-oriented programming, Spring Framework, database integration\nCareer: Enterprise and Android development`,
  'microsoft': `💼 Microsoft 365 Mastery\nDuration: 3 months\nFocus: Advanced Word, Excel, PowerPoint, Outlook, Teams, automation\nCareer: Office productivity and administrative roles`,
  'sql': `🗄️ SQL Database Course\nDuration: 6 months\nFocus: Database design, SQL queries, stored procedures, data analysis\nCareer: Database expert, data-driven roles`,
  'learnership': `🤖 AI Learnership\nDuration: 12 months\nFocus: Python for AI, Machine Learning, Neural Networks, Data Science, AI projects\nCareer: Cutting-edge AI roles\nFunded opportunities available!`,
  'short_courses': `🚀 IT Short Courses at STK College:\n• Python Programming (3 months)\n• Java Programming (3 months)\n• Microsoft 365 (3 months)\n• SQL Database (6 months)\n\nAll courses include certificates, portfolio projects, and industry-focused training.`,
  'internship_program': `💻 Internship Program\nDuration: 6-month intensive training\nFocus: Real client projects with C#, MVC.NET, SQL Server, mentorship\nCareer: Build a professional portfolio, job placement assistance`,
  'services': `🎨 Additional Services\n• Portfolio Creation\n• Website Development (HTML, React, Tailwind)\n• Mobile App Development (React Native)\n• Custom Software Solutions\n\nTurn your ideas into reality with our expert team.`
};

// ------------------------------------------------------------------
// 🧠 HELPER: word‑boundary regex matching
// ------------------------------------------------------------------
const hasWord = (text, word) => new RegExp(`\\b${word}\\b`, 'i').test(text);
const hasPhrase = (text, phrase) => text.toLowerCase().includes(phrase.toLowerCase()); // for multi-word phrases

// ------------------------------------------------------------------
// 🧠 HYBRID LOGIC: Rule‑based + AI fallback (with clarification flow)
// ------------------------------------------------------------------
const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [clarificationCount, setClarificationCount] = useState(0); // track unknown attempts
  const messagesEndRef = useRef(null);

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
        text: "👋 Hi, welcome to STK College IT Assistant. How can we help you today?\n\nI can tell you about:\n• Python, Java, SQL, Microsoft 365\n• Internships & Learnerships\n• Development services\n• Enrollment, duration, certificates, and more.\n\nLet's build your tech career! 🚀",
        sender: 'bot'
      }]);
      setClarificationCount(0);
    }
  }, [isOpen, messages.length]);

  // ------------------------------------------------------------------
  // STEP 1: Rule‑based response (hardcoded, fast)
  // ------------------------------------------------------------------
  const getRuleBasedResponse = (message) => {
    const lower = message.toLowerCase().trim();

    // --- Greetings (exact / phrase) ---
    if (hasWord(message, 'hi') || hasWord(message, 'hello') || hasWord(message, 'hey')) {
      return FAQ_RESPONSES.greeting;
    }
    if (hasPhrase(message, 'how are you')) {
      return FAQ_RESPONSES.how_are_you;
    }

    // --- Pricing (strict) ---
    if (hasWord(message, 'price') || hasWord(message, 'fees') || hasWord(message, 'cost')) {
      return FAQ_RESPONSES.pricing;
    }

    // --- Enrollment ---
    if (hasWord(message, 'enroll') || hasWord(message, 'registration') || hasWord(message, 'register') || hasPhrase(message, 'sign up')) {
      return FAQ_RESPONSES.enrollment;
    }

    // --- Payment ---
    if (hasWord(message, 'pay') || hasWord(message, 'payment')) {
      return FAQ_RESPONSES.payment;
    }

    // --- Duration ---
    if (hasWord(message, 'duration') || hasPhrase(message, 'how long')) {
      return FAQ_RESPONSES.duration;
    }

    // --- Certificate ---
    if (hasWord(message, 'certificate') || hasWord(message, 'certification')) {
      return FAQ_RESPONSES.certificate;
    }

    // --- Practical / hands-on ---
    if (hasWord(message, 'practical') || hasPhrase(message, 'hands on') || hasPhrase(message, 'real world')) {
      return FAQ_RESPONSES.practical;
    }

    // --- Internship ---
    if (hasWord(message, 'internship') || hasPhrase(message, 'in-service')) {
      return FAQ_RESPONSES.internship;
    }

    // --- Experience required ---
    if (hasWord(message, 'experience') || hasWord(message, 'beginner') || hasWord(message, 'background')) {
      return FAQ_RESPONSES.experience;
    }

    // --- Career ---
    if (hasWord(message, 'career') || hasWord(message, 'job') || hasWord(message, 'work')) {
      return FAQ_RESPONSES.career;
    }

    // --- Location ---
    if (hasWord(message, 'location') || hasWord(message, 'where')) {
      return FAQ_RESPONSES.location;
    }

    // --- Contact (explicit) ---
    if (hasWord(message, 'contact') || hasWord(message, 'phone') || hasWord(message, 'email')) {
      return FAQ_RESPONSES.contact;
    }

    // --- Course specific (Python, Java, SQL, Microsoft, AI, etc.) ---
    if (hasWord(message, 'python')) return COURSE_RESPONSES.python;
    if (hasWord(message, 'java')) return COURSE_RESPONSES.java;
    if (hasWord(message, 'microsoft') || hasWord(message, 'office') || hasWord(message, '365')) return COURSE_RESPONSES.microsoft;
    if (hasWord(message, 'sql') || hasWord(message, 'database')) return COURSE_RESPONSES.sql;
    if (hasWord(message, 'learnership') || (hasWord(message, 'ai') || hasWord(message, 'machine') && hasWord(message, 'learning'))) {
      return COURSE_RESPONSES.learnership;
    }
    if (hasWord(message, 'internship') && !hasWord(message, 'about')) return COURSE_RESPONSES.internship_program; // but we already caught above, so this is redundant
    if (hasWord(message, 'service') || hasWord(message, 'portfolio') || hasWord(message, 'website') || hasWord(message, 'app')) {
      return COURSE_RESPONSES.services;
    }
    if (hasWord(message, 'short') || hasWord(message, 'courses') || hasWord(message, 'course')) {
      return COURSE_RESPONSES.short_courses;
    }

    // No match
    return null;
  };

  // ------------------------------------------------------------------
  // STEP 2: AI fallback (placeholder – call real backend here)
  // ------------------------------------------------------------------
  const getAIResponse = async (userMessage) => {
    // Example: fetch('/api/chat', { method: 'POST', body: JSON.stringify({ message: userMessage, system: SYSTEM_PROMPT }) })
    // For now, we simulate a clarification or escalation based on clarificationCount.
    // In production, replace with actual API call.
    return null; // we'll handle fallback in the main flow
  };

  // ------------------------------------------------------------------
  // Main message handler with clarification flow
  // ------------------------------------------------------------------
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

    // 1. Try rule‑based response
    let botReply = getRuleBasedResponse(messageToSend);

    // 2. If no rule matched, handle fallback with clarification logic
    if (!botReply) {
      // If we already asked for clarification once, escalate
      if (clarificationCount >= 1) {
        botReply = FAQ_RESPONSES.escalation;
        setClarificationCount(0); // reset after escalation
      } else {
        // First unknown: ask clarification and increment counter
        botReply = FAQ_RESPONSES.clarification;
        setClarificationCount(prev => prev + 1);
      }
    } else {
      // Reset clarification counter when a rule matches
      setClarificationCount(0);
    }

    // Simulate typing delay
    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        text: botReply,
        sender: 'bot'
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 600);
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

  // ------------------------------------------------------------------
  // Render (UI remains largely unchanged, only logic updated)
  // ------------------------------------------------------------------
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
            {/* Header */}
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
              
              <div className="flex items-center space-x-1 flex-shrink-0">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-gray-300 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/10"
                  aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}
                >
                  {isMinimized ? <FiMaximize2 className="w-4 h-4" /> : <FiMinimize2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setClarificationCount(0); // reset on close
                  }}
                  className="text-gray-300 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/10 bg-white/5"
                  aria-label="Close chat"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>
            </div>

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
                        <div className="whitespace-pre-line">{message.text}</div>
                      </div>
                    </div>
                  ))}

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
                      placeholder="Ask about Python, Java, enrollment..."
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