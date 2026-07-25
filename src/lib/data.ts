export const profile = {
  name: "Maryam Mueen",
  title: "Computer Scientist",
  tagline: "Building AI-powered web experiences, one commit at a time.",
  location: "Lahore, Punjab, Pakistan",
  email: "maryammueen1@gmail.com",
  phone: "+92 312 4933903",
  availability: "Open to On-Site · Remote · Hybrid",
  linkedin: "https://www.linkedin.com/in/maryam-mueen1/",
  github: "#",
  resumeUrl: "/Resume_Maryam.pdf",
  photoHero: "/Prof_hero.png",
  photoAbout: "/Prof_about.jpg",
};

export const about = {
  bio: `I'm a Computer Science graduate from the University of Engineering and Technology (UET), Lahore. My work sits at the intersection of web development, AI/ML, and information security — with production experience in Django, Python, and cloud deployments on AWS and Vercel.`,
  bio2: `I love turning complex problems into clean, working software. From fine-tuning an LLM for education, to building an end-to-end encrypted chat app, to implementing every data structure in a chess engine from scratch — I enjoy the full journey, from idea to production.`,
  highlights: [
    { value: "5+", label: "Projects Shipped" },
    { value: "4", label: "Internships & TA Roles" },
    { value: "2026", label: "CS Graduate" },
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

export type ExperienceItem = {
  role: "Developer" | "Teaching" | "Cybersecurity" | "Networking";
  title: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  points: string[];
  stack: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Networking",
    title: "Networking Assistant Intern",
    company: "H-Tech",
    location: "IT Department · Lahore, Pakistan",
    period: "Jul 2026 – Present",
    isCurrent: true,
    points: [
      "Supporting the IT department with day-to-day networking operations.",
      "Assisting with router / switch configuration, patching, and connectivity troubleshooting.",
      "Documenting network topology and internal IT procedures.",
    ],
    stack: ["Networking", "IT Support", "Routing", "Switching", "Troubleshooting"],
  },
  {
    role: "Cybersecurity",
    title: "Cybersecurity Intern",
    company: "Developers Hub",
    location: "Remote · Pakistan",
    period: "Feb 2026 – May 2026",
    points: [
      "Explored offensive and defensive security through hands-on labs and CTF-style tasks.",
      "Practiced vulnerability assessment, threat modeling, and secure-coding review.",
      "Wrote up findings and remediation notes for internal knowledge sharing.",
    ],
    stack: ["Cybersecurity", "Pen Testing", "Python", "Linux", "OWASP"],
  },
  {
    role: "Developer",
    title: "Junior Website Developer",
    company: "ppcfly.pk",
    location: "Lahore, Pakistan",
    period: "Jun 2025 – Aug 2025",
    points: [
      "Built and shipped production web applications using Django.",
      "Deployed multi-service stacks to Vercel and AWS.",
      "Owned the full pipeline — local dev, staging, and production releases.",
    ],
    stack: ["Django", "Python", "AWS", "Vercel", "PostgreSQL"],
  },
  {
    role: "Teaching",
    title: "Teaching Assistant",
    company: "Department of Computer Science, UET Lahore",
    location: "Lahore, Pakistan",
    period: "Sep 2023 – May 2024",
    points: [
      "TA for Object Oriented Programming & Programming Fundamentals under Mr. Laiq uz Zaman Khan Niazi.",
      "TA for Information Security under Ms. Ayesha Altaf.",
      "Mentored students on assignments, debugging, and core CS concepts.",
    ],
    stack: ["C++", "Python", "OOP", "Info Security"],
  },
];

export const education = {
  degree: "Bachelor of Computer Science",
  school: "University of Engineering and Technology (UET), Lahore",
  period: "2022 – 2026",
  status: "Graduated",
  focusAreas: [
    "Software Engineering",
    "AI / Machine Learning",
    "Information Security",
    "Data Structures & Algorithms",
    "Databases",
    "Web Development",
  ],
  coursework: [
    "Object Oriented Programming",
    "Data Structures",
    "Software Engineering",
    "Operating Systems",
    "Databases",
    "Machine Learning",
    "Information Security",
    "Computer Networks",
  ],
};

export const whoAmI = {
  quickFacts: [
    { label: "Based in", value: "Lahore, Pakistan" },
    { label: "Studied", value: "CS @ UET Lahore" },
    { label: "Graduated", value: "2026" },
    { label: "Focus", value: "Django · AI · Web" },
  ],
};
