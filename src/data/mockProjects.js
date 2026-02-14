export const mockProjects = [
  {
    title: "ODOP — Multi-Vendor E-Commerce Platform",
    type: "Production-Grade Full-Stack",
    tone: "backend",
    description:
      "A full-stack marketplace inspired by India's One District One Product initiative — connecting artisans with customers through a multi-vendor e-commerce ecosystem with payments, real-time chat, and admin analytics.",
    stack: ["Java 17", "Spring Boot", "MongoDB", "Angular", "Razorpay", "WebSocket", "JWT/RBAC"],
    highlights: [
      "Multi-vendor architecture with 44 MongoDB collections and role-based dashboards (Admin, Vendor, Customer)",
      "Razorpay payment integration — UPI, cards, netbanking, wallet & automated refunds",
      "JWT auth + RBAC + OTP verification (Twilio) + OAuth2 social login (Google/Facebook)",
      "Real-time customer↔vendor chat via WebSocket (STOMP + SockJS)",
      "16-stage shipment tracking pipeline with status webhooks",
      "GST-compliant PDF invoice generation (iText) + Excel analytics export (Apache POI)",
      "Vendor verification workflow with GI tag & document approval system",
    ],
    learnings: [
      "Designing multi-tenant database schemas at scale (44 collections)",
      "Integrating third-party payment, SMS, and cloud storage APIs in production",
      "Building real-time communication systems with WebSocket",
      "Implementing complex role-based access across 3 user types",
    ],
    links: {
      github: "https://github.com/sanket-satpute/odop-backend",
      live: "https://odop-fronend.vercel.app/",
    },
    liveLabel: "Live Demo",
  },
  {
    title: "CodeMate — AI-Powered Code Review Platform",
    type: "Full-Stack · In Development",
    tone: "fullstack",
    description:
      "An AI code review platform with multi-LLM routing (Ollama, HuggingFace, OpenAI, Gemini), auto-fallback, file chunking pipeline, and real-time AI chat — built on a fully reactive, non-blocking architecture.",
    stack: ["Spring WebFlux", "MongoDB", "Redis", "Angular 20", "WebSocket", "Docker", "JWT"],
    highlights: [
      "Multi-LLM routing engine with automatic fallback across 4 AI providers",
      "Fully reactive backend using Spring WebFlux + Project Reactor (Mono/Flux)",
      "File chunking → normalization → aggregation pipeline for large codebase analysis",
      "Redis-backed async job queue with real-time status tracking",
      "WebSocket-powered AI chat for conversational code review per project",
      "Docker + Docker Compose deployment with dev/prod profiles",
    ],
    learnings: [
      "Building non-blocking reactive systems with WebFlux and Project Reactor",
      "Designing fault-tolerant multi-provider AI integration with auto-fallback",
      "Implementing async job processing with Redis as a state store",
      "Architecting file processing pipelines for large-scale code analysis",
    ],
    links: {
      github: "https://github.com/sanket-satpute/codemate-backend",
      live: "",
    },
    liveLabel: "",
  },
  {
    title: "PlayMe — Android Music Player",
    type: "Android · Published on Play Store",
    tone: "android",
    description:
      "A full-featured offline music player published on Google Play Store — with background playback, gamified rewards system, deep UI customization, and Firebase serverless backend.",
    stack: ["Android (Java)", "Firebase", "Firestore", "Material UI", "Glide", "SharedPreferences"],
    highlights: [
      "Published on Google Play Store with real users",
      "User account system with Firebase Auth — sign-up, login, and profile management",
      "Coin wallet & earnings system — users earn money and rewards based on listening time",
      "Background playback via Android Service architecture (BackService)",
      "Deep UI customization: themes, gradients, image backgrounds, multiple player layouts",
      "Firebase Auth + Firestore + Storage + Remote Config (fully serverless backend)",
    ],
    learnings: [
      "End-to-end product delivery: development → Play Store publishing → real users",
      "Android Service lifecycle and background task management",
      "Designing gamification systems for user retention",
      "Working with Firebase as a serverless backend at scale",
    ],
    links: {
      github: "https://github.com/sanket-satpute/play-me-project",
      live: "https://play.google.com/store/apps/details?id=com.sanket_satpute_20.playme&hl=en_IN",
    },
    liveLabel: "Play Store",
  },
  {
    title: "OneFee — Glassmorphism Fee Management System",
    type: "Frontend Architecture & UX",
    tone: "system",
    description:
      "A modern fee management platform for educational institutions with a custom-built Glassmorphism design system. Features role-based dashboards (Student, Clerk, Admin) and a framework-free component architecture.",
    stack: ["Vanilla JS", "Advanced CSS3", "Glassmorphism", "CSS Variables", "Grid/Flexbox"],
    highlights: [
      "Custom Glassmorphism Design System built from scratch (no Bootstrap/Tailwind)",
      "Universal Dashboard Architecture — single layout engine powering 3 distinct roles",
      "Role-based simulated security boundaries for Students, Clerks, and Admins",
      "Instant visual feedback loops (toasts, modals) for payments and data entry",
      "Responsive, accessible UI with semantic HTML5 and fast load times",
    ],
    learnings: [
      "Building scalable design systems with pure CSS variables and modular styles",
      "Architecting framework-agnostic component logic in Vanilla JavaScript",
      "Designing complex role-based interfaces with focus on UX hierarchies",
    ],
    links: {
      github: "https://github.com/sanket-satpute/fee-management-system",
      live: "https://fee-management-system-zeta.vercel.app/",
    },
    liveLabel: "Live Demo",
  },
];
