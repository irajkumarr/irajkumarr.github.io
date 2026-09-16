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
    bio: "Full-Stack & Flutter Developer with hands-on experience building production-grade mobile applications and robust REST APIs. Strong background in Clean Architecture, state management (BLoC, Riverpod, Provider), JWT authentication, and cloud messaging. Pursuing B.Sc. CSIT at Tribhuvan University.",
    email: "rajk.timalsina05@gmail.com",
    phone: "+977 9765033186",
    location: "Hetauda / Kathmandu, Nepal",
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
      "I am a software developer with a deep focus on Flutter cross-platform mobile development and Node.js backend engineering. I enjoy architecting systems from first principles — applying Clean Architecture, strict state management patterns, and performant database indexing.",
      "My industry experience includes developing client applications at Supreme IT Solutions, where I delivered scalable features using BLoC/Cubit, integrated secure REST APIs via Dio, and implemented JWT-based authentication pipelines.",
      "I am currently completing my Bachelor of Science in Computer Science and Information Technology (B.Sc. CSIT) at Birendra Multiple Campus, Tribhuvan University, deepening my understanding of data structures, algorithms, database systems, and distributed computing.",
    ],
    technicalStrengths: [
      "Clean Architecture & Separation of Concerns",
      "Advanced Flutter State Management (BLoC/Cubit, Riverpod, Provider)",
      "Secure REST API & Microservice Design (Node.js, Express, Nest.js)",
      "Database Architecture & Index Optimization (MongoDB, PostgreSQL)",
      "Automated CI/CD Pipelines (GitHub Actions, Fastlane, Firebase App Distribution)",
      "Real-time Push Notifications (Firebase Cloud Messaging)",
    ],
  },

  experience: [
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
        "Built cross-platform Flutter features using Clean Architecture and BLoC/Cubit for 3+ client applications.",
        "Collaborated with cross-functional teams and QA engineers to design, develop, and implement new features, ensuring high-quality releases.",
        "Implemented JWT-based authentication and REST API integration with Dio, hardening app-level security.",
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
      id: "e-learning-platform",
      title: "E-Learning Platform",
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
        "Riverpod",
        "Node.js",
        "Express.js",
        "MongoDB",
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
      id: "job-portal-application",
      title: "Job Portal Application",
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
      ],
      technologies: [
        "Flutter",
        "Dart",
        "Provider",
        "Node.js",
        "MongoDB",
        "REST APIs",
        "Firebase",
      ],
      githubUrl: "https://github.com/irajkumarr/job-seeker-application",
      featured: true,
      badge: "Full Stack",
    },
    {
      id: "food-delivery-application",
      title: "Food Delivery Application",
      tagline:
        "End-to-end mobile ordering system with live tracking and promo logic",
      description:
        "A responsive on-demand food ordering and restaurant discovery mobile application with secure checkout and live status updates.",
      problemSolved:
        "Streamlines user ordering workflows through modular backend API design, automated promo calculation, and real-time order delivery notifications.",
      highlights: [
        "Designed modular REST APIs for order processing, promo logic, and restaurant ratings.",
        "Built intuitive browsing, cart management, and secure checkout flows with JWT-authenticated user sessions.",
        "Enabled real-time order tracking and push notifications through Firebase Cloud Messaging (FCM).",
      ],
      technologies: [
        "Flutter",
        "Dart",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase FCM",
        "JWT",
      ],
      githubUrl:
        "https://github.com/irajkumarr/chulesi-foodDelivery-app-frontend",
      featured: false,
      badge: "Mobile App",
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
      ],
    },
    {
      category: "Frameworks & Libraries",
      description: "Cross-platform mobile and backend application frameworks.",
      skills: [
        { name: "Flutter", level: "Advanced" },
        { name: "Node.js", level: "Advanced" },
        { name: "Express.js", level: "Advanced" },
        { name: "Nest.js", level: "Advanced" },
      ],
    },
    {
      category: "Databases & Cloud",
      description:
        "Relational, document, and real-time database management systems.",
      skills: [
        { name: "MongoDB", level: "Advanced" },
        { name: "PostgreSQL", level: "Proficient" },
        { name: "Firebase (Firestore)", level: "Advanced" },
      ],
    },
    {
      category: "Development Tools & CI/CD",
      description:
        "Tooling for version control, testing, API design, and automated release pipelines.",
      skills: [
        { name: "Git & GitHub", level: "Advanced" },
        { name: "Postman", level: "Advanced" },
        { name: "VS Code", level: "Advanced" },
        { name: "Android Studio", level: "Advanced" },
        { name: "GitHub Actions", level: "Proficient" },
        { name: "Fastlane", level: "Proficient" },
      ],
    },
    {
      category: "Core Competencies & Architecture",
      description:
        "Architectural paradigms and software engineering best practices.",
      skills: [
        { name: "Clean Architecture" },
        { name: "BLoC / Cubit" },
        { name: "Riverpod" },
        { name: "Provider" },
        { name: "RESTful API Development" },
        { name: "JWT / OAuth2 Security" },
        { name: "Cross-Platform Development" },
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
      period: "2022 – Present",
      status: "In Progress",
    },
  ] as EducationItem[],

  navigation: [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Resume", href: "#resume" },
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
