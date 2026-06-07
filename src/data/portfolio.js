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
    "Building production-grade web applications, AI-powered tools, and scalable digital experiences.",
  intro:
    "CSE student with full-stack oriented experience building and deploying production-grade web applications. Skilled in React, Node.js, MongoDB, REST APIs, DSA, OOP, cloud deployment, and AI-powered application workflows.",
};

export const stackGroups = [
  { label: "Languages", items: ["JavaScript", "Python", "Java", "C++", "C", "SQL", "HTML", "CSS"] },
  { label: "Frontend", items: ["React", "Vite", "Tailwind CSS", "Chart.js", "Leaflet"] },
  { label: "Backend", items: ["Node.js", "Express.js", "FastAPI", "REST API", "SSE"] },
  { label: "Databases", items: ["MongoDB", "Mongoose", "ChromaDB", "File I/O"] },
  { label: "Cloud & Tools", items: ["Git/GitHub", "Vercel", "Render", "CI/CD"] },
  { label: "AI", items: ["RAG", "Whisper", "SentenceTransformers", "Gemini 1.5 Flash", "Vector Embeddings"] },
];

export const projects = [
  {
    name: "VideoIQ",
    subtitle: "AI Powered Video Performance Auditor",
    live: "https://videoiq-rag-chatbot.vercel.app/",
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
  { group: "Frameworks & Tools", items: ["React", "Vite", "Node.js", "Express.js", "FastAPI", "Tailwind CSS", "Chart.js", "Leaflet", "Pygame", "Git/GitHub", "Vercel", "Render"] },
  { group: "Backend", items: ["Node.js", "Express.js", "FastAPI"] },
  { group: "Databases", items: ["MongoDB", "Mongoose", "ChromaDB", "File I/O"] },
  { group: "AI & ML", items: ["RAG Pipelines", "OpenAI Whisper", "SentenceTransformers", "Gemini 1.5 Flash", "Vector Embeddings", "BAAI/bge-small-en"] },
  { group: "Concepts", items: ["REST API", "SSE Streaming", "JWT Auth", "DSA", "OOP", "DBMS", "OS", "AI/ML", "IoT", "CI/CD", "Cybersecurity"] },
  { group: "Soft Skills", items: ["Leadership", "Team Collaboration", "Critical Problem Solving", "Creative Thinking", "Time Management"] },
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
