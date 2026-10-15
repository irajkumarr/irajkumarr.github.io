export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  workType: string;
  period: string;
  startDate: string;
  endDate: string;
  current?: boolean;
  description: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problemSolved: string;
  highlights: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  badge?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    iconName?: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  affiliation: string;
  location: string;
  period: string;
  status: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Raj Kumar Timalsina",
    shortName: "Raj Kumar",
    headline: "Full-Stack & Flutter Developer",
    subheadline:
      "Crafting scalable cross-platform mobile apps and high-performance backend systems with Clean Architecture.",
    bio: "Full-Stack & Flutter Developer with hands-on experience building production-grade mobile applications and robust backend services. Strong background in Clean Architecture, state management (BLoC, Riverpod, Provider), Spring Boot, Node.js, WebSockets, and Redis. Pursuing B.Sc. CSIT at Tribhuvan University.",
    email: "rajk.timalsina05@gmail.com",
    phone: "+977 9765033186",
    location: "Kathmandu / Hetauda, Nepal",
    domain: "https://rajkumartimalsina.me",
    github: "https://github.com/irajkumarr",
    linkedin: "https://linkedin.com/in/irajkumarr",
    resumeUrl: "/resume.pdf",
    availability: "Available for full-time & contract opportunities",
    yearsOfExperience: "1+ Years Hands-on",
  },

  about: {
    title: "Engineering reliable mobile apps & scalable backend architectures.",
    paragraphs: [
      "I am a software developer with a deep focus on Flutter cross-platform mobile development and backend engineering with Spring Boot and Node.js. I apply Clean Architecture, strict state management patterns, real-time WebSockets, and in-memory Redis caching.",
      "My industry experience includes developing client applications at Supreme IT Solutions and currently building production Flutter mobile features onsite at DevanaSoft Pvt. Ltd., applying BLoC/Cubit, Hive offline caching, FVM, and robust state workflows.",
      "I am currently completing my Bachelor of Science in Computer Science and Information Technology (B.Sc. CSIT) at Birendra Multiple Campus, Tribhuvan University (expected Dec 2026).",
    ],
    technicalStrengths: [
      "Clean Architecture & Separation of Concerns",
      "Advanced Flutter State Management (BLoC/Cubit, Riverpod, Provider)",
      "Real-Time Systems (WebSockets, STOMP, Redis GEO)",
      "Secure REST APIs (Spring Boot, Node.js, Express, Nest.js)",
      "Database Architecture (MongoDB, PostgreSQL, Redis)",
      "Automated CI/CD Pipelines (GitHub Actions, Fastlane, Firebase App Distribution)",
    ],
  },

  experience: [
    {
      id: "devanasoft",
      role: "Flutter Developer Intern",
      company: "DevanaSoft Pvt. Ltd.",
      location: "Kathmandu, Nepal",
      workType: "Onsite",
      period: "August 2026 – Present",
      startDate: "Aug 2026",
      endDate: "Present",
      current: true,
      description: [
        "Developing features for a production networking application using Flutter, Clean Architecture, and BLoC/Cubit.",
        "Implemented local data persistence with Hive to keep core content accessible offline.",
        "Worked with multi-flavor configurations for separate app environments and managed Flutter SDK versions using FVM.",
      ],
      technologies: [
        "Flutter",
        "Dart",
        "BLoC / Cubit",
        "Hive",
        "Clean Architecture",
        "FVM",
        "Git",
      ],
    },
    {
      id: "supreme-it-solutions",
      role: "Flutter Developer Intern",
      company: "Supreme IT Solutions",
      location: "Kathmandu, Nepal",
      workType: "Remote",
      period: "December 2025 – April 2026",
      startDate: "Dec 2025",
      endDate: "Apr 2026",
      current: false,
      description: [
        "Developed cross-platform Flutter features for 3+ client applications using Clean Architecture and BLoC/Cubit.",
        "Integrated REST APIs using Dio and implemented JWT-based authentication flows.",
        "Collaborated with QA engineers and cross-functional team members to build features, resolve issues, and support releases.",
      ],
      technologies: [
        "Flutter",
        "Dart",
        "BLoC / Cubit",
        "Clean Architecture",
        "Dio",
        "REST APIs",
        "JWT Authentication",
        "Git",
        "Postman",
      ],
    },
  ] as ExperienceItem[],

  projects: [
    {
      id: "ride-sharing-platform",
      title: "Ride-Sharing Platform",
      tagline:
        "Full-stack real-time ride-sharing ecosystem with geospatial driver discovery and live tracking",
      description:
        "A full-stack ride-hailing system featuring separate rider and driver Flutter apps backed by a high-concurrency Spring Boot REST API and WebSockets.",
      problemSolved:
        "Solves live geospatial driver matching and stale driver tracking using Redis GEO and Redis Sorted Sets, with background GPS via native Android Foreground Services.",
      highlights: [
        "Built separate rider and driver Flutter applications backed by a Spring Boot REST API, implementing a state-driven ride lifecycle from request to completion.",
        "Developed real-time driver matching using Redis GEO and WebSockets (STOMP), enabling geospatial driver discovery and live location tracking on the rider map.",
        "Used Redis Sorted Sets to manage active drivers and detect stale driver entries.",
        "Implemented continuous background GPS tracking using native Android Foreground Services and Firebase Cloud Messaging (FCM) for instant ride dispatch alerts.",
      ],
      technologies: [
        "Flutter",
        "Dart",
        "Spring Boot",
        "Redis",
        "WebSockets",
        "STOMP",
        "Android Foreground Services",
        "Firebase FCM",
      ],
      githubUrl: "https://github.com/irajkumarr/Ride_Share_Apps",
      featured: true,
      badge: "Real-Time / Full Stack",
    },
    {
      id: "learnify-elearning-app",
      title: "Learnify - E-learning Platform",
      tagline:
        "Full-stack mobile learning ecosystem with automated certification & payments",
      description:
        "A comprehensive cross-platform e-learning application featuring dynamic course catalogs, structured module filtering, interactive progress tracking, and automated PDF certificate generation.",
      problemSolved:
        "Enables frictionless learning and automated course completion validation by integrating secure Stripe payments and Firebase Cloud Messaging for instant notifications.",
      highlights: [
        "Built full-stack e-learning platform with course filtering, progress tracking, and automated PDF certificate generation.",
        "Integrated Stripe payments into a Node.js/Express/MongoDB REST API.",
        "Applied Riverpod state management with Firebase Cloud Messaging (FCM) and optimistic pagination for smooth 60fps UX.",
        "Set up automated CI/CD pipelines using GitHub Actions and Fastlane to build and distribute releases via Firebase App Distribution.",
      ],
      technologies: [
        "Flutter",
        "Dart",
        "NodeJS",
        "Express",
        "MongoDB",
        "Riverpod",
        "Stripe",
        "Firebase FCM",
        "GitHub Actions",
        "Fastlane",
      ],
      githubUrl: "https://github.com/irajkumarr/Learnify-ELearning-App",
      featured: true,
      badge: "Featured Project",
    },
    {
      id: "task-management-api",
      title: "Task Management API",
      tagline:
        "Production-ready REST API for collaborative workspaces, projects & task management",
      description:
        "A scalable backend API built with NestJS and PostgreSQL for collaborative task management, featuring workspaces, members, projects, tasks, comments, attachments, notifications, and activity tracking.",
      problemSolved:
        "Provides teams with a centralized platform for organizing projects and tasks, managing workspace collaboration, tracking activities, and keeping members informed through notifications.",
      highlights: [
        "Built modular REST API with NestJS, TypeORM, and PostgreSQL for scalable task and project management.",
        "Implemented JWT authentication with role-based authorization for secure workspace and resource access.",
        "Developed workspace, member, project, task, comment, and attachment management workflows.",
        "Implemented event-driven notifications and scheduled background jobs for automated application tasks.",
        "Added activity logging to track important workspace, project, and task operations.",
        "Applied request validation, API throttling, structured error handling, and Pino logging for production-ready API reliability.",
      ],
      technologies: [
        "NestJS",
        "TypeScript",
        "PostgreSQL",
        "TypeORM",
        "JWT",
        "Passport",
        "REST API",
        "Pino",
        "Scheduler",
        "Throttler",
      ],
      githubUrl: "https://github.com/irajkumarr/Task-Management-API",
      featured: true,
      badge: "Backend Engineering",
    },
    {
      id: "rojgari-job-seeker",
      title: "Job Portal Application (Rojgari)",
      tagline:
        "High-performance job discovery & applicant matching mobile platform",
      description:
        "A cross-platform mobile application designed for frictionless job search, real-time application updates, and fine-grained categorization.",
      problemSolved:
        "Solves slow search and query bottlenecks by architecting a MongoDB backend with compound indexing, paired with instant category and location filters.",
      highlights: [
        "Architected a Node.js/MongoDB backend with optimized indexing for faster, more scalable search performance.",
        "Built category and location-based filtering with real-time push notification alerts.",
        "Utilized Provider state management to keep the cross-platform UI responsive with live application status updates.",
        "Secured API endpoints and user session lifecycle with robust JWT authentication pipelines.",
      ],
      technologies: [
        "Flutter",
        "NodeJS",
        "Express",
        "MongoDB",
        "JWT",
        "Provider",
      ],
      githubUrl: "https://github.com/irajkumarr/job-seeker-application",
      featured: true,
      badge: "Full Stack",
    },
    {
      id: "chulesi-food-delivery",
      title: "Food Delivery Application (Chulesi)",
      tagline:
        "End-to-end mobile ordering system with live tracking and promo logic",
      description:
        "A responsive on-demand food ordering and restaurant discovery mobile application with secure checkout and live status updates.",
      problemSolved:
        "Streamlines user ordering workflows through modular backend API design, automated promo calculation, and real-time order delivery notifications.",
      highlights: [
        "Designed modular REST APIs with Node.js, Express.js, and MongoDB for order processing, promo logic, and restaurant ratings.",
        "Built intuitive browsing, cart management, and secure checkout flows with JWT-authenticated user sessions.",
        "Enabled real-time order tracking and push notifications through Firebase Cloud Messaging (FCM).",
      ],
      technologies: [
        "Flutter",
        "NodeJS",
        "Express",
        "MongoDB",
        "Firebase FCM",
        "JWT",
      ],
      githubUrl:
        "https://github.com/irajkumarr/chulesi-foodDelivery-app-frontend",
      featured: false,
      badge: "Mobile & Backend",
    },
    {
      id: "service-on-wheels",
      title: "ServiceOnWheels - Maintenance Platform",
      tagline:
        "Doorstep vehicle servicing and maintenance booking platform",
      description:
        "A full-stack mobile platform designed to schedule doorstep vehicle servicing, track service stage progression, and manage maintenance logs with real-time updates.",
      problemSolved:
        "Eliminates scheduling friction between vehicle owners and mechanics with instant slot reservation, service quotation calculations, and transparent progress tracking.",
      highlights: [
        "Developed end-to-end service booking flow with date-time slot selection and vehicle profile management.",
        "Architected REST APIs in Node.js & Express for maintenance categorization, pricing tiers, and booking statuses.",
        "Integrated MongoDB for flexible booking documents and live status transitions.",
        "Built clean, modular Flutter UI with responsive state isolation for smooth customer scheduling experience.",
      ],
      technologies: ["Flutter", "NodeJS", "Express", "MongoDB", "REST APIs"],
      githubUrl: "https://github.com/irajkumarr/servicing_maintenance_app",
      featured: false,
      badge: "Full Stack",
    },
  ] as ProjectItem[],

  skillCategories: [
    {
      category: "Languages",
      description:
        "Core programming languages utilized in production and academic engineering.",
      skills: [
        { name: "Dart", level: "Advanced" },
        { name: "JavaScript", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" },
        { name: "Java", level: "Proficient" },
      ],
    },
    {
      category: "Mobile Development",
      description: "Cross-platform mobile frameworks, state management, and native services.",
      skills: [
        { name: "Flutter", level: "Advanced" },
        { name: "BLoC / Cubit", level: "Advanced" },
        { name: "Riverpod", level: "Advanced" },
        { name: "Provider", level: "Proficient" },
        { name: "Hive (Offline)", level: "Proficient" },
        { name: "Dio", level: "Advanced" },
        { name: "Foreground Services", level: "Proficient" },
      ],
    },
    {
      category: "Backend & Real-Time",
      description: "Scalable backend frameworks, microservices, and live communication.",
      skills: [
        { name: "Spring Boot", level: "Proficient" },
        { name: "Node.js", level: "Advanced" },
        { name: "Express.js", level: "Advanced" },
        { name: "NestJS", level: "Advanced" },
        { name: "WebSockets (STOMP)", level: "Proficient" },
        { name: "RESTful APIs", level: "Advanced" },
      ],
    },
    {
      category: "Databases & Cloud",
      description:
        "In-memory, document, relational, and real-time database management systems.",
      skills: [
        { name: "Redis (GEO, Sorted Sets)", level: "Proficient" },
        { name: "MongoDB", level: "Advanced" },
        { name: "PostgreSQL", level: "Proficient" },
        { name: "Firebase (FCM, Firestore)", level: "Advanced" },
      ],
    },
    {
      category: "DevOps, Tools & Architecture",
      description:
        "Release automation, SDK version management, and architectural standards.",
      skills: [
        { name: "Clean Architecture", level: "Advanced" },
        { name: "Git & GitHub", level: "Advanced" },
        { name: "GitHub Actions", level: "Proficient" },
        { name: "Fastlane", level: "Proficient" },
        { name: "FVM", level: "Proficient" },
        { name: "Postman", level: "Advanced" },
      ],
    },
  ] as SkillCategory[],

  education: [
    {
      degree:
        "Bachelor of Science in Computer Science and Information Technology (B.Sc. CSIT)",
      institution: "Birendra Multiple Campus",
      affiliation: "Tribhuvan University",
      location: "Bharatpur, Chitwan, Nepal",
      period: "2022 – Expected December 2026",
      status: "In Progress",
    },
  ] as EducationItem[],

  navigation: [
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ],

  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/irajkumarr",
      handle: "irajkumarr",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/irajkumarr",
      handle: "in/irajkumarr",
    },
    {
      name: "Email",
      url: "mailto:rajk.timalsina05@gmail.com",
      handle: "rajk.timalsina05@gmail.com",
    },
  ],
};
