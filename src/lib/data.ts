export const profile = {
  name: "Maryam Mueen",
  title: "Computer Scientist",
  tagline: "Building AI-powered web experiences, one commit at a time.",
  location: "Lahore, Punjab, Pakistan",
  email: "maryammueen1@gmail.com",
  phone: "+92 312 4933903",
  availability: "Open to On-Site · Remote · Hybrid",
  linkedin: "#",
  github: "#",
  resumeUrl: "/Resume_Maryam.pdf",
  photo: "/maryam.jpg",
  photoAlt: "/maryam-alt.jpg",
};

export const about = {
  bio: `I'm a final-year Computer Science student at the University of Engineering and Technology (UET), Lahore, graduating in 2026. My work sits at the intersection of web development, AI/ML, and information security — with hands-on experience in Django, Python, and cloud deployments on AWS and Vercel.`,
  bio2: `I love turning complex problems into clean, working software. Whether it's fine-tuning an LLM for education, building an end-to-end encrypted chat app, or implementing every data structure in a chess engine from scratch, I enjoy the full journey — from idea to production.`,
  highlights: [
    { value: "5+", label: "Projects Shipped" },
    { value: "2+", label: "Years TA Experience" },
    { value: "2026", label: "Expected Graduation" },
  ],
};

export type SkillCategory = { title: string; items: string[] };

export const skills: SkillCategory[] = [
  {
    title: "Languages",
    items: ["Python", "C++", "C#", "SQL", "Bash"],
  },
  {
    title: "Frameworks & Web",
    items: ["Django", "Flask", "Windows Forms", "PyQt5"],
  },
  {
    title: "AI / ML / NLP",
    items: ["OpenAI API", "WhisperAI", "LLM Fine-tuning", "Kaggle", "Pandas", "Semantic Analysis"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "Vercel", "Docker", "Git", "GitLab", "Selenium"],
  },
  {
    title: "Soft Skills",
    items: ["Problem-solving", "Logical thinking", "Debugging", "Team collaboration"],
  },
];

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  images: string[];
  featured?: boolean;
  repo?: string;
  live?: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "dark-prompt",
    title: "Dark Prompt",
    subtitle: "Final Year Project — LLM Chatbot Platform",
    description:
      "A full-stack web application built as my Final Year Project. Frontend and backend built with Django, while the main LLM-powered chatbot runs on Kaggle for compute-heavy inference. Bridges web engineering with AI infrastructure.",
    tags: ["Django", "LLM", "Kaggle", "Vercel", "Python"],
    images: [
      "/projects/dark-prompt/dp1.jpeg",
      "/projects/dark-prompt/dp2.jpeg",
      "/projects/dark-prompt/dp3.jpeg",
      "/projects/dark-prompt/dp4.jpeg",
      "/projects/dark-prompt/dp5.jpeg",
    ],
    featured: true,
    repo: "#",
    live: "#",
    highlights: [
      "Custom Django frontend + backend",
      "LLM chatbot hosted on Kaggle for scalable inference",
      "Deployed to Vercel with production-ready pipeline",
    ],
  },
  {
    slug: "mind-craft",
    title: "Mind Craft",
    subtitle: "NLP Platform for Education",
    description:
      "An education-focused NLP platform. Fine-tuned an LLM on Twitter chat data for semantic analysis, and built a quiz & exam generator that produces questions from uploaded documents.",
    tags: ["Django", "NLP", "LLM Fine-tuning", "Python"],
    images: [],
    repo: "#",
    highlights: [
      "LLM fine-tuning on real-world conversational data",
      "Document → quiz/exam generation pipeline",
      "Built to make self-study more interactive",
    ],
  },
  {
    slug: "secure-chatting-app",
    title: "Secure Chatting App",
    subtitle: "End-to-End Encrypted Messaging",
    description:
      "An Information Security project featuring end-to-end encrypted chat and file transfer using multiple encryption algorithms.",
    tags: ["Django", "Cryptography", "Security"],
    images: [],
    repo: "#",
    highlights: [
      "E2E encryption for messages and file transfers",
      "Multi-algorithm cryptographic implementation",
      "Built as part of Information Security coursework",
    ],
  },
  {
    slug: "school-management",
    title: "School Management System",
    subtitle: "Full-Stack Admin Platform",
    description:
      "A complete school management web app built for the Software Engineering course — covering students, staff, courses, and administration workflows.",
    tags: ["Django", "PostgreSQL", "Web"],
    images: [],
    repo: "#",
    highlights: [
      "Student, staff, and course management",
      "Role-based admin workflows",
      "Built following full SE lifecycle",
    ],
  },
  {
    slug: "chess",
    title: "Chess Engine with GUI",
    subtitle: "Data Structures from Scratch",
    description:
      "A fully-functional chess game built as a Data Structures project. Every data structure was implemented from scratch — no library shortcuts. Ships with a PyQt5 GUI and a pure-Python backend.",
    tags: ["Python", "PyQt5", "Data Structures"],
    images: [
      "/projects/chess/c1.jpeg",
      "/projects/chess/c2.jpeg",
      "/projects/chess/c3.jpeg",
      "/projects/chess/c4.jpeg",
      "/projects/chess/c5.jpeg",
      "/projects/chess/c6.jpeg",
    ],
    featured: true,
    repo: "#",
    highlights: [
      "Manual implementation of stacks, trees, hash tables",
      "PyQt5 desktop GUI",
      "Full game logic including move validation",
    ],
  },
];

export const experience = [
  {
    role: "Junior Website Developer",
    company: "ppcfly.pk",
    location: "Lahore, Pakistan",
    period: "June 2025 – August 2025",
    points: [
      "Built and shipped web applications using Django.",
      "Deployed multiple application stacks to Vercel and AWS.",
      "Gained hands-on experience with the full deploy pipeline — from local dev to production.",
    ],
  },
  {
    role: "Teaching Assistant",
    company: "Department of Computer Science, UET Lahore",
    location: "Lahore, Pakistan",
    period: "September 2023 – May 2024",
    points: [
      "TA for Object Oriented Programming (OOP) & Programming Fundamentals under Mr. Laiq uz Zaman Khan Niazi.",
      "TA for Information Security under Ms. Ayesha Altaf.",
      "Mentored students on programming assignments, debugging, and core CS concepts.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Computer Science",
  school: "University of Engineering and Technology (UET), Lahore",
  period: "2022 – 2026",
};
