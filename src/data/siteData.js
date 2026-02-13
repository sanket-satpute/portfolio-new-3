export const navItems = [
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const skillGroups = [
  {
    title: "Core Backend",
    icon: "⚙️",
    items: ["Java", "Spring Boot", "REST APIs", "MySQL", "JWT", "RBAC"],
    tone: "backend",
    description: "Production-grade backend systems",
  },
  {
    title: "Full-Stack & Mobile",
    icon: "🌐",
    items: ["Angular", "Android (Java)", "React", "PostgreSQL"],
    tone: "fullstack",
    description: "End-to-end delivery across platforms",
  },
  {
    title: "CS Fundamentals",
    icon: "🧠",
    items: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "DBMS",
      "Networking",
      "System Design",
    ],
    tone: "fundamentals",
    description: "Strong theoretical foundations",
  },
  {
    title: "DevOps & Tools",
    icon: "🛠️",
    items: ["Git & GitHub", "Docker (basics)", "Linux", "Postman"],
    tone: "tools",
    description: "Modern development workflow",
  },
];

export const proofPoints = [
  { label: "Flagship Projects", value: "4", icon: "📦" },
  { label: "Core Stack", value: "Java + Spring", icon: "☕" },
  { label: "Auth Expertise", value: "JWT + RBAC", icon: "🔐" },
  { label: "Platforms", value: "Web + Android", icon: "📱" },
];

export const approachPoints = [
  {
    title: "API-First Design",
    desc: "Design backend APIs before frontend or mobile clients",
    icon: "🔌",
  },
  {
    title: "Clean Architecture",
    desc: "Follow separation of concerns and modular design",
    icon: "🏗️",
  },
  {
    title: "Security-First",
    desc: "Prioritize authentication, authorization, and error handling early",
    icon: "🛡️",
  },
  {
    title: "Pragmatic Code",
    desc: "Prefer simple, readable solutions over premature optimization",
    icon: "✨",
  },
];

export const experiences = [
  {
    role: "Lecturer — Information Technology",
    org: "Sardar Patel Mahavidyalaya, Chandrapur",
    duration: "8 Months",
    type: "Teaching",
    icon: "🎓",
    points: [
      "Taught DBMS and Operating Systems to 60+ undergraduate students across 2 semesters",
      "Delivered hands-on lab sessions on SQL queries, normalization, indexing, and transaction management",
      "Conducted lectures on process scheduling, memory management, and file systems",
      "Designed internal assessments and practical exercises to evaluate student proficiency",
      "Strengthened the same CS fundamentals that underpin my backend engineering work",
    ],
  },
  {
    role: "Freelance Backend Developer",
    org: "Remote · Team of 2 Developers",
    duration: "Project-Based",
    type: "Freelance",
    icon: "💻",
    points: [
      "Designed and developed REST APIs using Spring Boot for 2 independent client projects",
      "Implemented JWT-based authentication and role-based access control (RBAC)",
      "Collaborated with a frontend developer to integrate APIs and deliver end-to-end solutions",
      "Handled requirement gathering, iterative development, and deployment workflows",
      "Managed client communication, deadlines, and scope adjustments independently",
    ],
  },
  {
    role: "Software Engineering Job Simulation",
    org: "Forage · Virtual Experience Program",
    duration: "1 Month",
    type: "Simulation",
    icon: "🧪",
    points: [
      "Completed structured engineering tasks simulating real-world development workflows",
      "Practiced code review, refactoring, and feature implementation in a team-simulated environment",
      "Gained exposure to production-level software development lifecycle practices",
    ],
  },
];

export const contactInfo = {
  resume: "https://drive.google.com/uc?export=download&id=1pCrZxmyhuIdeIv7h3gw1GEa6VJLc-oic",
  email: "saptute738@gmail.com",
  linkedin: {
    url: "https://www.linkedin.com/in/sanket-satpute-b1688225a/",
    label: "linkedin.com/in/sanket-satpute",
  },
  github: {
    url: "https://github.com/sanket-satpute",
    label: "github.com/sanket-satpute",
  },
  location: "Chandrapur, MH — India",
};
