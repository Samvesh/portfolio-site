export const contact = {
  email: "samveshsaini@gmail.com",
  phone: "+91 9914109971",
  location: "Khanauri, Sangrur, Punjab",
  github: "https://github.com/Samvesh",
  linkedin: "https://www.linkedin.com/in/samvesh-saini-aa10ba249/",
  linkedinLabel: "https://linkedin.com/in/samvesh-saini",
  resume: "/Samvesh-Saini-Resume.pdf",
};

export const profile = {
  name: "Samvesh Saini",
  title: "Full Stack Developer & AI Application Developer",
  tagline:
    "Building AI-powered products, RAG systems, APIs, and scalable web applications that transform complex problems into intuitive digital experiences.",
  intro:
    "CSE student with full-stack oriented experience building and deploying production-grade web applications. Skilled in React, Node.js, MongoDB, REST APIs, DSA, OOP, cloud deployment, and AI-powered application workflows.\n\n Passionate about solving real-world problems with clean, scalable, and efficient code. I enjoy building AI-integrated tools, working with data, and creating seamless user experiences that make an impact.\n\n Always learning, always building. Currently exploring advanced AI models, RAG systems, cloud-native architectures, and modern backend workflows to deliver smarter and more intelligent digital solutions.",
};

export const stackGroups = [
  { label: "Languages", items: ["JavaScript", "Python", "Java", "C++", "C", "SQL", "HTML", "CSS"] },
  { label: "Frontend", items: ["React", "Vite", "Tailwind CSS", "Bootstrap", "Chart.js", "Leaflet"] },
  { label: "Backend", items: ["Node.js", "Express.js", "FastAPI", "Spring Framework", "REST API", "SSE"] },
  { label: "Databases", items: ["MongoDB", "Mongoose", "ChromaDB", "File I/O"] },
  { label: "Cloud & Tools", items: ["Git/GitHub", "Vercel", "Render", "CI/CD"] },
  { label: "AI & Data", items: ["RAG", "Whisper", "SentenceTransformers", "Gemini 1.5 Flash", "Vector Embeddings", "EDA", "Data Cleaning"] },
];

export const projects = [
  {
    name: "VideoIQ",
    subtitle: "AI Powered Video Performance Auditor",
    live: "https://videoiq-rag-chatbot.vercel.app/",
    image: "/projects/videoiq.png",
    featured: true,
    tech: [
      "React",
      "Vite",
      "FastAPI",
      "ChromaDB",
      "RAG",
      "SSE",
      "Apify",
      "YouTube API",
      "Embeddings",
      "Gemini",
      "Render",
      "Vercel",
    ],
    problem:
      "Creators often know which video performed better, but not why it won. VideoIQ solves that by enabling side-by-side YouTube versus Instagram Reel audits.",
    how:
      "The app concurrently fetches metadata through YouTube Data API v3 and Apify, indexes analysis context into a persistent ChromaDB vector store using BAAI/bge-small-en embeddings, and streams cited RAG answers through SSE.",
    value:
      "The platform helps creators understand performance gaps and turn raw content metrics into actionable improvement suggestions.",
    features: [
      "YouTube metadata extraction",
      "Instagram Reel analysis",
      "RAG-powered chatbot",
      "Vector database retrieval",
      "Streaming AI responses",
      "Engagement rate calculations",
      "Source-based responses",
      "Persistent vector storage",
      "Real-time content comparison",
    ],
    deployment:
      "Frontend deployed on Vercel with the FastAPI backend on Render, including fallback systems for YouTube cloud restrictions.",
  },
  {
    name: "Fruitora",
    subtitle: "Full Stack Nutrition Platform",
    live: "https://fruitoria.vercel.app/",
    image: "/projects/fruitora.png",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS", "Chart.js", "Leaflet"],
    problem:
      "Healthy eating decisions are easier when nutrition data, recipes, analytics, and location-aware interfaces live in one product.",
    how:
      "Fruitora combines protected user flows, a live USDA nutrition API, Chart.js graphs, Leaflet maps, recipe recommendations, REST APIs, and an admin analytics dashboard.",
    value:
      "It gives users nutritional insights and helps them build healthier eating habits through data-driven recommendations.",
    features: [
      "JWT Authentication",
      "Nutrition search",
      "USDA API integration",
      "Charts and analytics",
      "Recipe recommendations",
      "Interactive maps",
      "Admin dashboard",
      "Protected routes",
    ],
    deployment: "Deployed on Vercel and Render with CI/CD through GitHub auto-deployment.",
  },
  {
    name: "Binance Futures Testnet Trading Bot",
    subtitle: "Python CLI Trading Bot",
    live: "https://github.com/Samvesh/Binance-bot",
    image: "/projects/binance-logo.svg",
    tech: ["Python", "python-binance", "CLI", ".env", "Logging", "Validation"],
    problem:
      "Crypto order workflows need strict validation, clean failure messages, and safe credential handling before API requests are sent.",
    how:
      "The bot is a production-quality Python CLI application for Binance Futures Testnet that loads credentials from a .env file, validates command input, places MARKET, LIMIT, and STOP_LIMIT orders, and records API activity in logs.",
    value:
      "It demonstrates practical API integration, error handling, logging, modular CLI architecture, and safe testnet-only trading automation without hardcoded secrets.",
    features: [
      "BUY and SELL orders",
      "MARKET, LIMIT, and STOP_LIMIT support",
      "Binance Futures Testnet base URL",
      "Symbol, side, type, quantity, price, and stop-price validation",
      ".env credentials with no hardcoded secrets",
      "API request, response, validation, network, Binance API, and exception logging",
      "Separated client, order service, validator, logging, and CLI modules",
    ],
    deployment:
      "Designed for local Python 3.11+ execution with virtual environment setup, requirements installation, .env credentials, and log review through logs/trading_bot.log.",
  },
  {
    name: "TaskPulse",
    subtitle: "Task Management App with REST API",
    tech: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "bcryptjs", "Axios", "Swagger UI"],
    problem:
      "TaskPulse helps users manage personal work while giving admins a broader task-management view across the system.",
    how:
      "The app combines a Node.js and Express backend with MongoDB via Mongoose, JWT-protected routes, bcryptjs password hashing, auth rate limiting, Swagger UI API documentation, and a dark React/Vite frontend with Axios API calls.",
    value:
      "It demonstrates a clean full-stack architecture with separated routes, controllers, middleware, and models, making the system easier to extend with new role-based task features.",
    features: [
      "User signup and login",
      "JWT-protected task routes",
      "Role-based user and admin access",
      "Kanban-style Todo, In Progress, and Done dashboard",
      "bcryptjs password hashing",
      "express-rate-limit protection on auth routes",
      "Swagger UI interactive API documentation",
      "Seed script for automatic admin account creation",
    ],
    deployment:
      "Runs locally with a backend .env file for MongoDB connection string, JWT secret, and port, plus separate backend and frontend development servers.",
  },
  {
    name: "Bitcoin Sentiment x Hyperliquid Trader Performance Analysis",
    subtitle: "Data Science Trading Behaviour Analysis",
    tech: ["Python", "Jupyter Notebook", "Data Cleaning", "EDA", "Sentiment Analysis", "Visualization", "CSV Analysis"],
    problem:
      "The analysis investigates how Bitcoin Fear & Greed sentiment regimes connect with real Hyperliquid perpetual futures trader performance.",
    how:
      "The notebook loads and cleans Bitcoin Fear & Greed Index data and 211,224 Hyperliquid trade records, computes Net PnL, merges sentiment by date, and analyzes average PnL, win rate, volume, top coins, directional bias, and daily PnL overlays.",
    value:
      "It surfaces trading-behaviour patterns from real data, including how fear, greed, volume, directional bias, and PnL magnitude relate across 2024 Hyperliquid activity.",
    features: [
      "211,224 real Hyperliquid trades analyzed",
      "Bitcoin Fear & Greed Index merged with trade data",
      "Date parsing, dtype fixes, null handling, and Net PnL computation",
      "Sentiment distribution and PnL distribution analysis",
      "Average PnL, win rate, and volume by sentiment",
      "BUY/SELL directional bias by sentiment",
      "Daily Net PnL overlaid with Fear & Greed index",
      "10 generated charts covering sentiment, PnL, volume, top coins, and boxplots",
    ],
    deployment:
      "Delivered as a local Jupyter Notebook workflow using analysis.ipynb, requirements.txt, fear_greed_index.csv, and historical_data.csv.",
  },
  {
    name: "Bank Management System",
    subtitle: "Java Desktop Banking Simulation",
    tech: ["Java", "OOP", "File I/O"],
    problem:
      "Core banking operations need consistent account state, transaction handling, and durable records even in a compact desktop simulation.",
    how:
      "The system models accounts and banking operations using Java OOP principles with File I/O for persistence.",
    value:
      "It demonstrates practical implementation of banking workflows and object-oriented programming concepts.",
    features: [
      "Account creation",
      "Deposits",
      "Withdrawals",
      "Balance tracking",
      "Interest calculations",
      "Multi-account management",
    ],
    concepts: ["Encapsulation", "Inheritance", "Polymorphism", "File I/O"],
  },
  {
    name: "Bank Management System C++",
    subtitle: "C++ Banking Simulation",
    tech: ["C++", "OOP", "File I/O"],
    problem:
      "The C++ banking system implements the same banking workflow as the Java version: account creation, deposits, withdrawals, balance tracking, interest calculations, and multi-account management.",
    how:
      "It is different from the Java banking system because the implementation is built around C++ compilation, standard library file streams, and closer control over data structures and type behavior instead of Java's JVM-based object model.",
    value:
      "It shows how the same banking feature set can be modeled in a lower-level compiled language while still applying OOP concepts and durable file-based persistence.",
    features: [
      "Account creation",
      "Deposits",
      "Withdrawals",
      "Balance tracking",
      "Interest calculations",
      "Multi-account management",
    ],
    concepts: ["C++ OOP", "File I/O", "Compiled execution", "Data structure control"],
  },
  {
    name: "Plane Shooting Simulation",
    subtitle: "Python Pygame Arcade Project",
    tech: ["Python", "Pygame"],
    problem:
      "Arcade games depend on responsive movement, collision handling, progressive challenge, and a stable game loop.",
    how:
      "The project uses Python and Pygame to run a 2D shooting game with enemy spawning, scoring, animations, and difficulty progression.",
    value:
      "It demonstrates event-driven gameplay, collision detection, and game loop architecture in a playable simulation.",
    features: [
      "Collision detection",
      "Enemy spawning",
      "Score system",
      "Difficulty progression",
      "Smooth animations",
      "Game loop architecture",
    ],
  },
];

export const experiences = [
  {
    company: "Chandigarh University",
    role: "Summer Intern",
    duration: "May 2025 – Jul 2025 · 3 Months",
    location: "On-site",
    details: [
      "Developed responsive web applications using React.js, JavaScript, HTML5, and CSS3 with reusable components",
      "Strengthened DSA by solving problems on LeetCode covering arrays, linked lists, stacks, queues, trees, sorting, searching, recursion, and dynamic programming",
      "Designed and built multiple interactive web pages and mini-projects focused on clean UI, responsiveness, and performance",
      "Worked extensively with SQL including complex queries, joins, subqueries, aggregate functions, normalization, and database design",
      "Gained hands-on React experience with components, props, state management, hooks, event handling, routing, and API integration",
      "Collaborated on practical assignments and project-based learning in an intensive software development training environment",
      "Applied frontend best practices including responsive design, semantic HTML, CSS Flexbox/Grid, and JavaScript ES6+ features",
    ],
  },
  {
    company: "IMUN Virtual Internship Program",
    role: "Intern",
    location: "Remote",
    details: [
      "Coordinated with 15+ peers and mentors",
      "Managed outreach campaigns with 100% on-time delivery across assigned responsibilities",
      "Applied CRM basics with LeadSquared for student lead tracking",
      "Supported pipeline management and nurture outreach",
      "Contributed to customer-facing communication campaigns",
      "Improved response rates and engagement",
    ],
  },
  {
    company: "InAmigo",
    role: "Web Development Intern",
    duration: "1 Month",
    details: [
      "Designed webpages for the company",
      "Reviewed existing website pages",
      "Identified UI and UX issues",
      "Suggested improvements",
      "Built new webpage layouts based on company requirements",
      "Worked on responsive design improvements",
      "Contributed to website quality enhancement",
    ],
  },
];

export const skills = [
  { group: "Languages", items: ["JavaScript", "Python", "Java", "C++", "C", "SQL", "HTML", "CSS"] },
  { group: "Frameworks & Tools", items: ["React", "Vite", "Node.js", "Express.js", "FastAPI", "Spring Framework", "Tailwind CSS", "Bootstrap", "Chart.js", "Leaflet", "Pygame", "Git/GitHub", "Vercel", "Render"] },
  { group: "Databases", items: ["MongoDB", "Mongoose", "ChromaDB", "File I/O"] },
  { group: "AI & ML", items: ["RAG Pipelines", "OpenAI Whisper", "SentenceTransformers", "Gemini 1.5 Flash", "Vector Embeddings"] },
  { group: "Concepts", items: ["REST API", "SSE Streaming", "JWT Auth", "DSA", "OOP", "DBMS", "OS", "AI/ML", "IoT", "CI/CD"] },
];

export const education = {
  items: [
    {
      institute: "Chandigarh University",
      degree: "B.E Computer Science & Engineering",
      year: "2026",
      result: "CGPA: 7.8",
    },
    {
      institute: "Helix Oxford Smart School",
      degree: "Higher Secondary",
      year: "2022",
      result: "PCM: 77%",
    },
    {
      institute: "Ganga International School",
      degree: "Secondary School",
      year: "2020",
      result: "75%",
    },
  ],
};

export const certificationFilters = [
  "All",
  "AI & Data",
  "Security",
  "Marketing",
  "Software Development",
  "IoT",
];

export const certifications = [
  {
    name: "Java Full Stack Developer",
    organization: "Coursera",
    category: "Software Development",
    description:
      "Covered full stack development concepts connected to building application interfaces, backend services, and complete Java-based software workflows.",
  },
  {
    name: "Big Data Analytics",
    organization: "Coursera",
    category: "AI & Data",
    description:
      "Focused on analyzing large-scale data, understanding data processing workflows, and using analytics thinking to extract useful patterns from data.",
  },
  {
    name: "Developing Industrial Internet Of Things",
    organization: "Coursera",
    category: "IoT",
    description:
      "Explored industrial IoT systems, connected devices, sensor-driven data flows, and how IoT solutions support operational environments.",
  },
  {
    name: "Network Security And Administration",
    organization: "Coursera",
    category: "Security",
    description:
      "Studied network administration fundamentals, security practices, and the operational thinking needed to protect and manage networked systems.",
  },
  {
    name: "Social Media Marketing",
    organization: "Coursera",
    category: "Marketing",
    description:
      "Learned social media marketing strategy, audience communication, and campaign-oriented thinking for digital engagement.",
  },
  {
    name: "Engagement And Nurture Marketing Strategies",
    organization: "Coursera",
    category: "Marketing",
    description:
      "Focused on engagement planning, nurture journeys, and communication strategies that help build stronger audience relationships.",
  },
  {
    name: "Internet of Things",
    organization: "NPTEL",
    category: "IoT",
    result: "78%",
    description:
      "Built understanding of IoT architecture, connected devices, communication patterns, and system-level thinking for smart environments.",
  },
  {
    name: "Cloud IoT Edge ML",
    organization: "NPTEL",
    category: "IoT",
    result: "70%",
    description:
      "Studied how cloud platforms, edge computing, and machine learning connect inside IoT systems for distributed intelligence.",
  },
  {
    name: "Multi-Core Architecture",
    organization: "NPTEL",
    category: "Software Development",
    result: "68%",
    description:
      "Covered multi-core computing concepts, parallel execution, and architectural ideas behind modern processor performance.",
  },
  {
    name: "Foundations of Cryptography",
    organization: "NPTEL",
    category: "Security",
    result: "70%",
    description:
      "Learned foundational cryptographic principles used to reason about secure communication, data protection, and trust in systems.",
  },
  {
    name: "Critical Thinking And Problem Solving",
    organization: "LinkedIn Learning",
    category: "Software Development",
    description:
      "Strengthened structured problem solving, analytical reasoning, and decision-making habits useful in engineering work.",
  },
  {
    name: "Thinking Creatively",
    organization: "LinkedIn Learning",
    category: "Software Development",
    description:
      "Focused on creative thinking techniques for generating better ideas, exploring alternatives, and approaching problems with flexibility.",
  },
];
