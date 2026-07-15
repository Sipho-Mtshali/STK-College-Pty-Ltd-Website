// src/data/coursesData.js

export const coursesData = {
  "1": {
    id: 1,
    title: "Python Programming",
    instructor: "Sipho Mtshali",
    category: "Programming",
    lessons: 15,
    students: 0,
    price: "R3,500",
    originalPrice: "R4,800",
    image: "/images/gallery/gallery/pythonbackground.png",
    rating: 4.8,
    description: "Master Python programming from basics to advanced concepts including web development and data analysis.",
    features: ["Python Fundamentals", "Django Web Framework", "Data Analysis", "Automation Scripting"],
    popular: true,
    funding: { available: false, planned: true, provider: "MICT SETA", description: "Future funding opportunities planned" },
    level: "Beginner to Intermediate",
    duration: "10 Weeks",
    longDescription: "This comprehensive Python course takes you from absolute beginner to a confident programmer. You'll learn the fundamentals of Python, then move on to web development with Django, data analysis with Pandas, and automation scripting. The course includes hands-on projects and real-world scenarios to solidify your learning.",
    whatYouLearn: [
      "Write Python scripts and programs",
      "Work with data structures and algorithms",
      "Build web applications with Django",
      "Analyze data using Pandas and Matplotlib",
      "Automate repetitive tasks"
    ],
    requirements: [
      "No prior programming experience required",
      "A computer with internet access",
      "Willingness to learn and practice"
    ],
    curriculum: [
      { week: "Week 1", title: "Introduction & Setup", topics: ["What is Python", "Installing Python", "Writing 'Hello, World!'", "Running Python code"] },
      { week: "Week 2", title: "Variables, Types & Basic Operations", topics: ["Strings and numbers", "Lists, tuples, dictionaries", "Basic operations", "Data type manipulation"] },
      { week: "Week 3", title: "Control Flow & Loops", topics: ["if, elif, else statements", "for loops", "while loops", "Loop control statements"] },
      { week: "Week 4", title: "Functions & Modules", topics: ["Defining functions", "Parameters and return values", "Importing modules", "Building small functions"] },
      { week: "Week 5", title: "Data Structures & Comprehensions", topics: ["Lists and dictionaries", "Sets and tuples", "List/dict comprehensions", "Data manipulation"] },
      { week: "Week 6", title: "File Handling & Errors", topics: ["Opening/reading/writing files", "Exception handling", "try/except blocks", "File operations"] },
      { week: "Week 7", title: "Working with Libraries & Simple Projects", topics: ["Standard libraries (os, sys, json)", "Project: log file processor", "Library integration", "Practical applications"] },
      { week: "Week 8", title: "Object-Oriented Python", topics: ["Classes and objects", "Methods and attributes", "Inheritance in Python", "OOP principles"] },
      { week: "Week 9", title: "Mini Project", topics: ["CLI student manager", "Data processor application", "Combining previous topics", "Project development"] },
      { week: "Week 10", title: "Review & Extend", topics: ["Review all topics", "Advanced topics exploration", "Pandas or web scraping", "Integration with other technologies"] }
    ]
  },
  "2": {
    id: 2,
    title: "Java Development",
    instructor: "Sipho Mtshali",
    category: "Programming",
    lessons: 18,
    students: 0,
    price: "R3,800",
    originalPrice: "R5,200",
    image: "/images/gallery/gallery/javabackground.png",
    rating: 4.6,
    description: "Comprehensive Java programming and enterprise application development.",
    features: ["OOP Principles", "Spring Framework", "Database Integration", "Project Development"],
    popular: false,
    funding: null,
    level: "Intermediate",
    duration: "12 Weeks",
    longDescription: "Dive into Java, one of the most widely used programming languages. This course covers core Java, object-oriented programming, the Spring framework, and database integration. By the end, you'll be able to build robust enterprise applications.",
    whatYouLearn: [
      "Understand Java syntax and OOP concepts",
      "Develop applications with Spring Boot",
      "Integrate databases with JDBC and JPA",
      "Build RESTful APIs",
      "Deploy applications to the cloud"
    ],
    requirements: [
      "Basic programming knowledge (any language)",
      "A computer with at least 4GB RAM",
      "Internet connection"
    ],
    curriculum: [
      { week: "Week 1", title: "Introduction, Setup & Syntax", topics: ["Introduction to Java", "Installing JDK/IDE", "Writing your first main class/program", "W3Schools Java Tutorial"] },
      { week: "Week 2", title: "Variables, Data Types & Operators", topics: ["Primitive types", "Reference types", "Casting", "Arithmetic/logical operators"] },
      { week: "Week 3", title: "Control Flow", topics: ["if, else statements", "switch statements", "for, while, do-while loops", "W3Schools Control Flow"] },
      { week: "Week 4", title: "Arrays & Strings", topics: ["Using arrays", "2D arrays", "String class and methods", "String manipulation"] },
      { week: "Week 5", title: "Methods & Recursion", topics: ["Define methods", "Parameters and return values", "Recursion basics", "Method overloading"] },
      { week: "Week 6", title: "Classes & Objects (OOP)", topics: ["Create classes and objects", "Constructors", "this keyword", "Static vs instance members"] },
      { week: "Week 7", title: "Inheritance & Polymorphism", topics: ["extends keyword", "super keyword", "Method overriding", "Dynamic binding"] },
      { week: "Week 8", title: "Exception Handling & Collections", topics: ["try/catch/finally", "Common exceptions", "ArrayList usage", "HashMap and collections"] },
      { week: "Week 9", title: "File I/O & Practical Project", topics: ["Read/write files", "File handling", "Student-management console app", "Practical implementation"] },
      { week: "Week 10", title: "Review & Mini Project", topics: ["Review all topics", "Mini-project development", "Combining concepts", "Final project presentation"] }
    ]
  },
  "3": {
    id: 3,
    title: "Computer Literacy Fundamentals",
    instructor: "Sipho Mtshali",
    category: "Computer Literacy",
    lessons: 25,
    students: 0,
    price: "R2,500",
    originalPrice: "R3,200",
    image: "/images/gallery/gallery/computerliteracybackground.png",
    rating: 4.9,
    description: "A complete computer literacy course designed to develop essential digital skills, covering Microsoft Word, Excel, and PowerPoint for everyday academic, personal, and workplace use.",
    features: ["Microsoft Word Basics", "Microsoft Excel Fundamentals", "PowerPoint Presentations", "Computer Essentials"],
    popular: true,
    funding: null,
    level: "Beginner",
    duration: "8 Weeks",
    longDescription: "This course is your gateway to digital literacy. You'll learn the essentials of using a computer, managing files, and mastering the core Microsoft Office applications – Word, Excel, and PowerPoint. Perfect for students, job seekers, and anyone who wants to become proficient in everyday computing tasks.",
    whatYouLearn: [
      "Navigate Windows and manage files",
      "Create and format documents in Word",
      "Build spreadsheets with formulas and charts in Excel",
      "Design engaging presentations in PowerPoint",
      "Use email and the internet effectively"
    ],
    requirements: [
      "No previous computer experience needed",
      "A computer with Windows or Mac",
      "Microsoft Office installed (or free online version)"
    ],
    curriculum: [
      { week: "Week 1", title: "Introduction & Setup", topics: ["Overview", "Installation", "First Steps"] },
      { week: "Week 2", title: "Core Concepts", topics: ["Fundamentals", "Basic Operations"] },
      { week: "Week 3", title: "Intermediate Topics", topics: ["Advanced Techniques", "Best Practices"] },
      { week: "Week 4", title: "Practical Applications", topics: ["Real-world Scenarios", "Case Studies"] },
      { week: "Week 5", title: "Project Work", topics: ["Project Planning", "Initial Development"] },
      { week: "Week 6", title: "Advanced Features", topics: ["Deep Dive", "Optimization"] },
      { week: "Week 7", title: "Integration", topics: ["Combining Tools", "APIs"] },
      { week: "Week 8", title: "Testing & Debugging", topics: ["Unit Testing", "Debugging Techniques"] },
      { week: "Week 9", title: "Final Project", topics: ["Project Completion", "Review"] },
      { week: "Week 10", title: "Wrap-up", topics: ["Final Review", "Next Steps"] }
    ]
  },
  "4": {
    id: 4,
    title: "Microsoft Word (Beginner - Intermediate)",
    instructor: "Sipho Mtshali",
    category: "Microsoft Office",
    lessons: 12,
    students: 0,
    price: "R1,200",
    originalPrice: "R1,700",
    image: "/images/courses/word-intermediate.jpg",
    rating: 4.7,
    description: "Complete Word training from basic document creation to advanced formatting and collaboration.",
    features: ["Document Creation", "Advanced Formatting", "Mail Merge", "Collaboration Tools"],
    popular: true,
    funding: null,
    level: "Beginner to Intermediate",
    duration: "6 Weeks",
    longDescription: "Become a Word power user! This course covers everything from creating your first document to using advanced formatting, mail merge, and collaboration features. You'll learn to produce professional reports, letters, and flyers with ease.",
    whatYouLearn: [
      "Create and save documents",
      "Apply styles and themes",
      "Insert tables, images, and SmartArt",
      "Use mail merge for bulk communications",
      "Track changes and collaborate with others"
    ],
    requirements: [
      "Basic computer skills",
      "Microsoft Word installed"
    ],
    curriculum: [
      { week: "Week 1", title: "Introduction & Setup", topics: ["Overview", "Installation", "First Steps"] },
      { week: "Week 2", title: "Core Concepts", topics: ["Fundamentals", "Basic Operations"] },
      { week: "Week 3", title: "Intermediate Topics", topics: ["Advanced Techniques", "Best Practices"] },
      { week: "Week 4", title: "Practical Applications", topics: ["Real-world Scenarios", "Case Studies"] },
      { week: "Week 5", title: "Project Work", topics: ["Project Planning", "Initial Development"] },
      { week: "Week 6", title: "Advanced Features", topics: ["Deep Dive", "Optimization"] },
      { week: "Week 7", title: "Integration", topics: ["Combining Tools", "APIs"] },
      { week: "Week 8", title: "Testing & Debugging", topics: ["Unit Testing", "Debugging Techniques"] },
      { week: "Week 9", title: "Final Project", topics: ["Project Completion", "Review"] },
      { week: "Week 10", title: "Wrap-up", topics: ["Final Review", "Next Steps"] }
    ]
  },
  "5": {
    id: 5,
    title: "Microsoft Excel (Beginner - Intermediate)",
    instructor: "Sipho Mtshali",
    category: "Microsoft Office",
    lessons: 15,
    students: 0,
    price: "R1,500",
    originalPrice: "R2,100",
    image: "/images/courses/excel.jpg",
    rating: 4.8,
    description: "Master Excel from basic spreadsheets to advanced formulas, charts, and data analysis.",
    features: ["Formulas & Functions", "Charts & Graphs", "Data Analysis", "Pivot Tables"],
    popular: true,
    funding: null,
    level: "Beginner to Intermediate",
    duration: "6 Weeks",
    longDescription: "Excel is a crucial tool for any professional. This course takes you from the basics of navigating spreadsheets to using advanced formulas, creating dynamic charts, and performing data analysis with PivotTables.",
    whatYouLearn: [
      "Navigate and format worksheets",
      "Write formulas and use built-in functions",
      "Create professional charts and graphs",
      "Analyze data with PivotTables and slicers",
      "Use data validation and conditional formatting"
    ],
    requirements: [
      "Basic computer literacy",
      "Microsoft Excel installed"
    ],
    curriculum: [
      { week: "Week 1", title: "Introduction & Setup", topics: ["Overview", "Installation", "First Steps"] },
      { week: "Week 2", title: "Core Concepts", topics: ["Fundamentals", "Basic Operations"] },
      { week: "Week 3", title: "Intermediate Topics", topics: ["Advanced Techniques", "Best Practices"] },
      { week: "Week 4", title: "Practical Applications", topics: ["Real-world Scenarios", "Case Studies"] },
      { week: "Week 5", title: "Project Work", topics: ["Project Planning", "Initial Development"] },
      { week: "Week 6", title: "Advanced Features", topics: ["Deep Dive", "Optimization"] },
      { week: "Week 7", title: "Integration", topics: ["Combining Tools", "APIs"] },
      { week: "Week 8", title: "Testing & Debugging", topics: ["Unit Testing", "Debugging Techniques"] },
      { week: "Week 9", title: "Final Project", topics: ["Project Completion", "Review"] },
      { week: "Week 10", title: "Wrap-up", topics: ["Final Review", "Next Steps"] }
    ]
  },
  "6": {
    id: 6,
    title: "Microsoft PowerPoint (Beginner - Intermediate)",
    instructor: "Sipho Mtshali",
    category: "Microsoft Office",
    lessons: 10,
    students: 0,
    price: "R1,200",
    originalPrice: "R1,700",
    image: "/images/courses/powepoint.png",
    rating: 4.6,
    description: "Create professional presentations with animations, transitions, and multimedia integration.",
    features: ["Slide Design", "Animations", "Multimedia Integration", "Presentation Skills"],
    popular: false,
    funding: null,
    level: "Beginner to Intermediate",
    duration: "5 Weeks",
    longDescription: "Learn to create stunning presentations that captivate your audience. This course covers slide design, animations, transitions, and embedding multimedia. You'll also gain tips for delivering compelling presentations.",
    whatYouLearn: [
      "Design impactful slides",
      "Apply animations and transitions",
      "Insert videos, audio, and images",
      "Use slide masters and templates",
      "Deliver presentations with confidence"
    ],
    requirements: [
      "Basic computer skills",
      "PowerPoint installed"
    ],
    curriculum: [
      { week: "Week 1", title: "Introduction & Setup", topics: ["Overview", "Installation", "First Steps"] },
      { week: "Week 2", title: "Core Concepts", topics: ["Fundamentals", "Basic Operations"] },
      { week: "Week 3", title: "Intermediate Topics", topics: ["Advanced Techniques", "Best Practices"] },
      { week: "Week 4", title: "Practical Applications", topics: ["Real-world Scenarios", "Case Studies"] },
      { week: "Week 5", title: "Project Work", topics: ["Project Planning", "Initial Development"] },
      { week: "Week 6", title: "Advanced Features", topics: ["Deep Dive", "Optimization"] },
      { week: "Week 7", title: "Integration", topics: ["Combining Tools", "APIs"] },
      { week: "Week 8", title: "Testing & Debugging", topics: ["Unit Testing", "Debugging Techniques"] },
      { week: "Week 9", title: "Final Project", topics: ["Project Completion", "Review"] },
      { week: "Week 10", title: "Wrap-up", topics: ["Final Review", "Next Steps"] }
    ]
  },
  "7": {
    id: 7,
    title: "Microsoft Teams",
    instructor: "Sipho Mtshali",
    category: "Microsoft Office",
    lessons: 6,
    students: 0,
    price: "R900",
    originalPrice: "R1,300",
    image: "/images/courses/teams.jpg",
    rating: 4.8,
    description: "Master Microsoft Teams for effective collaboration and communication in modern workplaces.",
    features: ["Team Management", "Meetings & Calls", "File Sharing", "Integration"],
    popular: true,
    funding: null,
    level: "Beginner",
    duration: "3 Weeks",
    longDescription: "Microsoft Teams is the hub for teamwork. In this course, you'll learn how to set up teams, schedule and conduct meetings, share files, and integrate with other Office 365 apps. Perfect for remote or hybrid teams.",
    whatYouLearn: [
      "Create and manage teams and channels",
      "Schedule and run online meetings",
      "Share and collaborate on files",
      "Use apps and bots within Teams",
      "Manage notifications and settings"
    ],
    requirements: [
      "Basic computer literacy",
      "Microsoft Teams account (free or paid)"
    ],
    curriculum: [
      { week: "Week 1", title: "Introduction & Setup", topics: ["Overview", "Installation", "First Steps"] },
      { week: "Week 2", title: "Core Concepts", topics: ["Fundamentals", "Basic Operations"] },
      { week: "Week 3", title: "Intermediate Topics", topics: ["Advanced Techniques", "Best Practices"] },
      { week: "Week 4", title: "Practical Applications", topics: ["Real-world Scenarios", "Case Studies"] },
      { week: "Week 5", title: "Project Work", topics: ["Project Planning", "Initial Development"] },
      { week: "Week 6", title: "Advanced Features", topics: ["Deep Dive", "Optimization"] },
      { week: "Week 7", title: "Integration", topics: ["Combining Tools", "APIs"] },
      { week: "Week 8", title: "Testing & Debugging", topics: ["Unit Testing", "Debugging Techniques"] },
      { week: "Week 9", title: "Final Project", topics: ["Project Completion", "Review"] },
      { week: "Week 10", title: "Wrap-up", topics: ["Final Review", "Next Steps"] }
    ]
  },
  "8": {
    id: 8,
    title: "SQL Database Management",
    instructor: "Sipho Mtshali",
    category: "Database",
    lessons: 20,
    students: 0,
    price: "R3,500",
    originalPrice: "R4,800",
    image: "/images/gallery/gallery/databasebackground.png",
    rating: 4.9,
    description: "Comprehensive database management and SQL programming course.",
    features: ["Database Design", "Advanced Queries", "Stored Procedures", "Performance Tuning"],
    popular: true,
    funding: null,
    level: "Intermediate",
    duration: "10 Weeks",
    longDescription: "Databases are at the heart of most applications. This course covers relational database design, writing complex SQL queries, creating stored procedures, and optimizing performance. You'll work with real datasets to build practical skills.",
    whatYouLearn: [
      "Design normalized databases",
      "Write complex SELECT, INSERT, UPDATE, DELETE queries",
      "Create views, stored procedures, and functions",
      "Optimize query performance with indexing",
      "Manage user permissions and security"
    ],
    requirements: [
      "Basic understanding of data concepts",
      "A computer with a database installed (e.g., MySQL, PostgreSQL)"
    ],
    curriculum: [
      { week: "Week 1", title: "Introduction & Setup", topics: ["Overview", "Installation", "First Steps"] },
      { week: "Week 2", title: "Core Concepts", topics: ["Fundamentals", "Basic Operations"] },
      { week: "Week 3", title: "Intermediate Topics", topics: ["Advanced Techniques", "Best Practices"] },
      { week: "Week 4", title: "Practical Applications", topics: ["Real-world Scenarios", "Case Studies"] },
      { week: "Week 5", title: "Project Work", topics: ["Project Planning", "Initial Development"] },
      { week: "Week 6", title: "Advanced Features", topics: ["Deep Dive", "Optimization"] },
      { week: "Week 7", title: "Integration", topics: ["Combining Tools", "APIs"] },
      { week: "Week 8", title: "Testing & Debugging", topics: ["Unit Testing", "Debugging Techniques"] },
      { week: "Week 9", title: "Final Project", topics: ["Project Completion", "Review"] },
      { week: "Week 10", title: "Wrap-up", topics: ["Final Review", "Next Steps"] }
    ]
  },
  "9": {
    id: 9,
    title: "Website Development",
    instructor: "Sipho Mtshali",
    category: "Web Development",
    lessons: 16,
    students: 0,
    price: "R3,500",
    originalPrice: "R4,800",
    image: "/images/gallery/gallery/webbackground.png",
    rating: 4.7,
    description: "Modern web development with React.js and related technologies.",
    features: ["React Components", "Hooks & State", "API Integration", "Deployment"],
    popular: true,
    funding: null,
    level: "Intermediate",
    duration: "10 Weeks",
    longDescription: "Build modern, responsive web applications using React.js. You'll learn about components, state management, hooks, routing, and API integration. The course also covers deployment strategies to get your apps online.",
    whatYouLearn: [
      "Create reusable React components",
      "Manage state with hooks and context",
      "Implement client-side routing",
      "Fetch and display data from REST APIs",
      "Deploy applications to Netlify or Vercel"
    ],
    requirements: [
      "Basic HTML, CSS, and JavaScript knowledge",
      "Node.js installed",
      "A code editor"
    ],
    curriculum: [
      { week: "Week 1", title: "Introduction & Setup", topics: ["Overview", "Installation", "First Steps"] },
      { week: "Week 2", title: "Core Concepts", topics: ["Fundamentals", "Basic Operations"] },
      { week: "Week 3", title: "Intermediate Topics", topics: ["Advanced Techniques", "Best Practices"] },
      { week: "Week 4", title: "Practical Applications", topics: ["Real-world Scenarios", "Case Studies"] },
      { week: "Week 5", title: "Project Work", topics: ["Project Planning", "Initial Development"] },
      { week: "Week 6", title: "Advanced Features", topics: ["Deep Dive", "Optimization"] },
      { week: "Week 7", title: "Integration", topics: ["Combining Tools", "APIs"] },
      { week: "Week 8", title: "Testing & Debugging", topics: ["Unit Testing", "Debugging Techniques"] },
      { week: "Week 9", title: "Final Project", topics: ["Project Completion", "Review"] },
      { week: "Week 10", title: "Wrap-up", topics: ["Final Review", "Next Steps"] }
    ]
  },
  "10": {
    id: 10,
    title: "AI & Machine Learning",
    instructor: "STK College AI",
    category: "AI & Machine Learning",
    lessons: 30,
    students: 0,
    price: "R4,500",
    originalPrice: "R6,000",
    image: "/images/courses/ai.png",
    rating: 4.9,
    description: "Comprehensive AI and Machine Learning program with hands-on projects.",
    features: ["Machine Learning", "Neural Networks", "Deep Learning", "Real Projects"],
    popular: false,
    funding: { available: false, planned: true, provider: "MICT SETA", description: "Future learnership opportunities planned" },
    level: "Advanced",
    duration: "14 Weeks",
    longDescription: "Dive into the exciting world of artificial intelligence and machine learning. This course covers classical ML algorithms, neural networks, deep learning, and real-world applications. You'll build projects that solve actual problems, from image recognition to natural language processing.",
    whatYouLearn: [
      "Understand core ML concepts (supervised, unsupervised learning)",
      "Build and evaluate models using scikit-learn",
      "Design neural networks with TensorFlow/Keras",
      "Implement deep learning for computer vision and NLP",
      "Deploy ML models as APIs"
    ],
    requirements: [
      "Solid understanding of Python programming",
      "Basic knowledge of linear algebra and calculus",
      "A computer with at least 8GB RAM and a GPU recommended"
    ],
    curriculum: [
      { week: "Week 1", title: "Introduction & Setup", topics: ["Overview", "Installation", "First Steps"] },
      { week: "Week 2", title: "Core Concepts", topics: ["Fundamentals", "Basic Operations"] },
      { week: "Week 3", title: "Intermediate Topics", topics: ["Advanced Techniques", "Best Practices"] },
      { week: "Week 4", title: "Practical Applications", topics: ["Real-world Scenarios", "Case Studies"] },
      { week: "Week 5", title: "Project Work", topics: ["Project Planning", "Initial Development"] },
      { week: "Week 6", title: "Advanced Features", topics: ["Deep Dive", "Optimization"] },
      { week: "Week 7", title: "Integration", topics: ["Combining Tools", "APIs"] },
      { week: "Week 8", title: "Testing & Debugging", topics: ["Unit Testing", "Debugging Techniques"] },
      { week: "Week 9", title: "Final Project", topics: ["Project Completion", "Review"] },
      { week: "Week 10", title: "Wrap-up", topics: ["Final Review", "Next Steps"] }
    ]
  },
  "11": {
    id: 11,
    title: "Microsoft Office Complete Suite",
    instructor: "Sipho Mtshali",
    category: "Microsoft Office",
    lessons: 35,
    students: 0,
    price: "R3,000",
    originalPrice: "R4,200",
    image: "/images/gallery/gallery/msofficebackground.png",
    rating: 4.9,
    description: "Complete Microsoft Office training covering Word, Excel, PowerPoint, and Teams.",
    features: ["Word Mastery", "Excel Expertise", "PowerPoint Skills", "Teams Collaboration"],
    popular: true,
    funding: null,
    level: "Beginner to Advanced",
    duration: "12 Weeks",
    longDescription: "Get comprehensive training in the entire Microsoft Office suite. This course combines our Word, Excel, PowerPoint, and Teams courses into one package. You'll become a power user of Office tools for any professional environment.",
    whatYouLearn: [
      "Create, format, and manage documents in Word",
      "Analyze data and create dashboards in Excel",
      "Design professional presentations in PowerPoint",
      "Collaborate and communicate using Teams",
      "Integrate Office apps for maximum productivity"
    ],
    requirements: [
      "Basic computer literacy",
      "Microsoft Office 365 subscription (or free web versions)"
    ],
    curriculum: [
      { week: "Week 1", title: "Introduction & Setup", topics: ["Overview", "Installation", "First Steps"] },
      { week: "Week 2", title: "Core Concepts", topics: ["Fundamentals", "Basic Operations"] },
      { week: "Week 3", title: "Intermediate Topics", topics: ["Advanced Techniques", "Best Practices"] },
      { week: "Week 4", title: "Practical Applications", topics: ["Real-world Scenarios", "Case Studies"] },
      { week: "Week 5", title: "Project Work", topics: ["Project Planning", "Initial Development"] },
      { week: "Week 6", title: "Advanced Features", topics: ["Deep Dive", "Optimization"] },
      { week: "Week 7", title: "Integration", topics: ["Combining Tools", "APIs"] },
      { week: "Week 8", title: "Testing & Debugging", topics: ["Unit Testing", "Debugging Techniques"] },
      { week: "Week 9", title: "Final Project", topics: ["Project Completion", "Review"] },
      { week: "Week 10", title: "Wrap-up", topics: ["Final Review", "Next Steps"] }
    ]
  },
  "12": {
    id: 12,
    title: "Cybersecurity",
    instructor: "Sipho Mtshali",
    category: "Cybersecurity",
    lessons: 18,
    students: 0,
    price: "R4,000",
    originalPrice: "R5,500",
    image: "/images/courses/cybersecurity.jpg",
    rating: 4.6,
    description: "Comprehensive cybersecurity training covering threat detection, defensive security, ethical hacking, and secure enterprise application development.",
    features: ["Network Security Fundamentals", "Ethical Hacking Techniques", "Incident Detection & Response", "Secure Application Development"],
    popular: false,
    funding: null,
    level: "Intermediate",
    duration: "10 Weeks",
    longDescription: "Protect organizations from cyber threats. This course covers network security, ethical hacking, incident response, and secure coding practices. You'll learn to think like an attacker and defend like a pro.",
    whatYouLearn: [
      "Understand network security fundamentals",
      "Perform ethical hacking and vulnerability assessments",
      "Detect and respond to security incidents",
      "Develop secure applications (OWASP Top 10)",
      "Implement security policies and best practices"
    ],
    requirements: [
      "Basic networking knowledge",
      "Familiarity with operating systems (Windows/Linux)",
      "A computer with virtualization capability"
    ],
    curriculum: [
      { week: "Week 1", title: "Introduction & Setup", topics: ["Overview", "Installation", "First Steps"] },
      { week: "Week 2", title: "Core Concepts", topics: ["Fundamentals", "Basic Operations"] },
      { week: "Week 3", title: "Intermediate Topics", topics: ["Advanced Techniques", "Best Practices"] },
      { week: "Week 4", title: "Practical Applications", topics: ["Real-world Scenarios", "Case Studies"] },
      { week: "Week 5", title: "Project Work", topics: ["Project Planning", "Initial Development"] },
      { week: "Week 6", title: "Advanced Features", topics: ["Deep Dive", "Optimization"] },
      { week: "Week 7", title: "Integration", topics: ["Combining Tools", "APIs"] },
      { week: "Week 8", title: "Testing & Debugging", topics: ["Unit Testing", "Debugging Techniques"] },
      { week: "Week 9", title: "Final Project", topics: ["Project Completion", "Review"] },
      { week: "Week 10", title: "Wrap-up", topics: ["Final Review", "Next Steps"] }
    ]
  }
};

// Also export an array for easy listing
export const allCourses = Object.values(coursesData);

// Export curriculumData if needed elsewhere (optional)
export const curriculumData = {
  "Python Programming": coursesData["1"].curriculum,
  "Java Development": coursesData["2"].curriculum
};