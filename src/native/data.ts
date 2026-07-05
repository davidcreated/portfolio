import { PortfolioData } from "./types";

const avatar = "https://github.com/davidcreated.png";

export const DATA: PortfolioData = {
  name: "David-Paul Folorunsho-Roberts",
  headline: "David-Paul Folorunsho-Roberts - Software Engineer",
  description: "Software Engineer · Mobile & Backend",
  location: "Nigeria (Open to Remote)",
  avatar: { uri: avatar },
  resumeUrl:
    "https://drive.google.com/file/d/1CVzdThqP2sIT4ceZe4NXH6SarOyktBh5/view?usp=drive_link",
  summary:
    "Software Engineer with 6+ years building scalable, high-performance mobile and backend systems across fintech, telehealth, e-commerce, IoT, and logistics. Specializes in cross-platform and native mobile development (Flutter, Swift, Kotlin) backed by Go microservices and real-time, offline-first architectures.\n\nHas shipped production apps serving 20,000+ active users, led engineering teams, and championed clean-architecture and CI/CD practices.",
  skills: [
    "Flutter",
    "React Native",
    "Swift",
    "Kotlin",
    "Go",
    "TypeScript",
    "Node.js",
    "Next.js",
    "GraphQL",
    "WebSockets",
    "MQTT",
    "PostgreSQL",
    "Firebase",
    "SQLite",
    "Hive",
    "Clean Architecture",
    "Riverpod",
    "BLoC",
    "Fastlane",
    "Codemagic",
    "GitHub Actions",
  ],
  contact: [
    {
      display: "davidcreated",
      label: "GitHub",
      url: "https://github.com/davidcreated",
    },
    {
      display: "david-paul-f-198650214",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/david-paul-f-198650214",
    },
    {
      display: "timifroberts@gmail.com",
      label: "Email",
      url: "mailto:timifroberts@gmail.com?subject=Hello%20from%20your%20portfolio",
    },
    {
      display: "+234 803 565 1233",
      label: "WhatsApp",
      url: "https://wa.me/2348035651233",
    },
  ],
  navbar: [
    { label: "Home", url: "/" },
    { label: "GitHub", url: "https://github.com/davidcreated" },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/david-paul-f-198650214",
    },
    { label: "Email", url: "mailto:timifroberts@gmail.com" },
    { label: "WhatsApp", url: "https://wa.me/2348035651233" },
  ],
  work: [
    {
      company: "Escrow-Tech (Carbon-Adjust®)",
      description:
        "Lead architecture of an offline-first Flutter app for the Carbon-Adjust® Clearing Platform, a real-time energy marketplace connecting households and businesses to grid-balancing opportunities. Engineered resilient real-time communication with WebSockets and MQTT, optimized for low-bandwidth and unstable 2G/3G networks, and integrated IoT device registration and energy-flexibility scheduling. Implemented offline-first persistence with SQLite and Hive, including background sync, conflict resolution, and reconciliation on reconnect, with state managed via Riverpod and BLoC. Built secure API layers with Dio (token refresh, retry, failure handling) and owned CI/CD across Fastlane, Codemagic, and GitHub Actions.",
      employmentType: "Full-time",
      location: "United Kingdom",
      locationType: "Remote",
      logoText: "CA",
      role: "Software Engineer, Mobile",
      url: "",
    },
    {
      company: "Icheta",
      description:
        "Led development of a next-generation social-commerce platform combining e-commerce, real-time interaction, and AI-driven shopping, built with React Native and Go. Integrated AI features such as personalized recommendations, smart search, and voice interactions localized for Igbo, Hausa, Yoruba, and Pidgin, alongside AR-based product previews. Designed high-performance API integrations optimized for low-bandwidth devices, cutting load times and data consumption while lifting engagement, on a modular clean-architecture codebase.",
      employmentType: "Full-time",
      location: "Lagos, Nigeria",
      locationType: "Remote",
      logoText: "IC",
      role: "Software Engineer, Mobile & Backend",
      url: "",
    },
    {
      company: "Sujimoto Group",
      description:
        "Led mobile engineering for MotoBills and MotoPay (bill-payment and merchant fintech) and Plenti (e-commerce), shipping production-grade Flutter applications. Architected secure wallet, transaction, and payment pipelines integrated with Java, PHP, and Laravel backends, and built real-time transaction monitoring, webhook handling, and error-recovery systems. Integrated third-party payments, KYC identity verification, notifications, and analytics, achieving high crash-free rates and production stability for financial operations.",
      employmentType: "Full-time",
      location: "Lagos, Nigeria",
      locationType: "Remote",
      logoText: "SJ",
      role: "Software Engineer, Mobile",
      url: "",
    },
    {
      company: "Healio",
      description:
        "Led end-to-end React Native development of a telemedicine platform spanning teleconsultation booking, e-prescriptions, lab management, medication scheduling, and IoT health-device integration. Built secure infrastructure with Firebase and RESTful APIs covering authentication, role-based access control, and encrypted data flows, meeting healthcare-grade security standards. Designed a modular, scalable architecture and optimized real-time synchronization between mobile, backend, and IoT devices.",
      employmentType: "Full-time",
      location: "Thorofare, New Jersey, USA",
      locationType: "Remote",
      logoText: "HE",
      role: "Software Engineer, Mobile",
      url: "",
    },
    {
      company: "NexaHealth",
      description:
        "Architected and led mobile engineering for an enterprise real-time teleconsultation platform using Swift and Go, supporting 20,000+ active users. Integrated IoT health-tracking with secure PostgreSQL databases and built real-time video-consultation workflows between clinicians and patients. Implemented CI/CD via GitHub Actions and Firebase App Distribution, reducing deployment time by 40% and sustaining a 99.5% crash-free rate and 4.7+ App Store rating.",
      employmentType: "Full-time",
      location: "Nigeria",
      locationType: "Remote",
      logoText: "NH",
      role: "Software Engineer, Mobile & Backend",
      url: "",
    },
    {
      company: "Respawn Technologies",
      description:
        "Built and shipped 8+ cross-platform applications (Swift, Go, MongoDB) plus backend services supporting high-concurrency, real-time interactions. Co-developed a proprietary analytics SDK adopted across 5 production projects, improving user engagement by 35%, and delivered push-notification systems for tournaments, live events, and social features.",
      employmentType: "Full-time",
      location: "Lagos, Nigeria",
      locationType: "Remote",
      logoText: "RT",
      role: "Software Engineer, Mobile",
      url: "",
    },
    {
      company: "Andela",
      description:
        "Built scalable Kotlin and Swift modules for U.S. and European clients across fintech, logistics, and enterprise products, integrating complex REST APIs and PostgreSQL. Delivered feature-complete releases 30% faster through agile delivery, clean architecture, and CI/CD pipelines with globally distributed teams.",
      employmentType: "Full-time",
      location: "United States",
      locationType: "Remote",
      logoText: "AN",
      role: "Software Engineer, Mobile",
      url: "https://andela.com",
    },
  ],
  education: [
    {
      degree: "M.Sc. Software Engineering (in progress)",
      period: "2026 - Present",
      school: "Miva University",
      url: "",
    },
    {
      degree: "Postgraduate Diploma, Software Engineering",
      period: "2024 - 2025",
      school: "University of Uyo",
      url: "",
    },
    {
      degree: "B.Sc. Agriculture",
      period: "2019 - 2024",
      school: "Landmark University",
      url: "https://lmu.edu.ng",
    },
  ],
  projects: [
    {
      title: "Trippicker",
      href: "https://apps.apple.com/us/app/trippicker-web3-mobility/id6748451455",
      description:
        "Web3 ride-hailing app live on the App Store, with real-time GPS tracking, fare estimation, in-app payments, and driver-passenger matching.",
      media:
        "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/39/55/67/3955672f-5e6d-5ed9-fb47-50234c7fef56/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg",
      kind: "first-party",
      architecture:
        "Flutter ride-hailing app with real-time GPS tracking and Google Maps SDK integration, plus a Web3 layer that rewards riders with an on-chain token for completed trips.",
      techStack: ["Flutter", "Firebase"],
      highlights: [
        "Real-time GPS tracking, fare estimation, and driver-passenger matching",
        "In-app payments and a Web3 rewards layer (on-chain token per trip)",
      ],
      links: [
        {
          label: "App Store",
          url: "https://apps.apple.com/us/app/trippicker-web3-mobility/id6748451455",
        },
      ],
    },
    {
      title: "Carbon-Adjust",
      href: "https://play.google.com/store/apps/details?id=com.carbonadjust.mobile&pcampaignid=web_share",
      description:
        "Offline-first Flutter app for the Carbon-Adjust® Clearing Platform, a real-time energy marketplace connecting households and businesses to grid-balancing opportunities.",
      media:
        "https://play-lh.googleusercontent.com/oaKGM9OO4Fa7PC-c0tWn8C22v4XJ2p3E2BhvWJ11kFm8kEXgyKIwS61bW1Jdgg2_d173PG9RbEslMuFEFE8B2A",
      kind: "first-party",
      role: "Software Engineer, Mobile (Architecture Lead)",
      architecture:
        "Offline-first, clean-architecture Flutter app: Riverpod and BLoC for state management, SQLite and Hive for local persistence with background sync and conflict resolution, and a Dio-based API layer with token refresh and retry handling.",
      techStack: [
        "Flutter",
        "Riverpod",
        "BLoC",
        "SQLite",
        "Hive",
        "WebSockets",
        "MQTT",
        "Fastlane",
        "Codemagic",
        "GitHub Actions",
      ],
      highlights: [
        "Engineered resilient real-time communication (WebSockets + MQTT) optimized for low-bandwidth, unstable 2G/3G networks",
        "Integrated IoT device registration and energy-flexibility scheduling",
        "Built offline-first persistence with background sync, conflict resolution, and reconciliation on reconnect",
        "Owned CI/CD across Fastlane, Codemagic, and GitHub Actions",
      ],
      links: [
        {
          label: "Google Play",
          url: "https://play.google.com/store/apps/details?id=com.carbonadjust.mobile&pcampaignid=web_share",
        },
      ],
    },
    {
      title: "TripAdvisor",
      href: "https://apps.apple.com/us/app/tripadvisor-plan-book-trips/id284876795",
      description:
        "Contributed to TripAdvisor, a global travel discovery and booking platform.",
      media:
        "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/03/0a/a6/030aa6d9-3ecd-1851-4171-6873c20e3a06/AppIcon-0-0-1x_U007epad-0-1-sRGB-85-220.png/512x512bb.jpg",
      links: [
        {
          label: "App Store",
          url: "https://apps.apple.com/us/app/tripadvisor-plan-book-trips/id284876795",
        },
      ],
    },
    {
      title: "MotoBills",
      href: "https://apps.apple.com/us/app/motobills/id6747974149",
      description:
        "Fintech app for electricity bills, cable TV, and airtime/data top-ups, with biometric authentication and a secure transaction-history dashboard.",
      media:
        "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/a5/48/5a/a5485a8f-991e-b830-6dbd-07ce8b00530a/AppIcon-1x_U007emarketing-0-8-0-85-220-0.png/512x512bb.jpg",
      kind: "first-party",
      role: "Software Engineer, Mobile",
      architecture:
        "Production-grade Flutter fintech app with biometric authentication, integrating secure wallet and payment pipelines against Java/PHP/Laravel backends, with real-time transaction monitoring and webhook handling.",
      techStack: ["Flutter", "Firebase"],
      highlights: [
        "Architected secure wallet, transaction, and payment pipelines integrated with Java, PHP, and Laravel backends",
        "Built real-time transaction monitoring, webhook handling, and error-recovery systems",
        "Integrated third-party payments, KYC identity verification, notifications, and analytics",
      ],
      links: [
        {
          label: "App Store",
          url: "https://apps.apple.com/us/app/motobills/id6747974149",
        },
      ],
    },
    {
      title: "MotoBites",
      href: "https://play.google.com/store/apps/details?id=com.motobites",
      description:
        "Food-delivery app where customers browse kitchens, order meals, track delivery in real time, and manage wallets and rewards. Live on Google Play.",
      media:
        "https://play-lh.googleusercontent.com/-IbdtwN09iixcENbshURZyBh2cs3Z4WJ-PYHFZGnH3GMQEGAqCsZR7FXQlZ7BqK-RVEqZ5pjsaWRzgWi1A0_=w480",
      kind: "first-party",
      role: "Software Engineer, Mobile",
      architecture:
        "Flutter customer app on a clean-architecture, Riverpod-based foundation with staging/production flavors, group-order support, wallet and rewards, real-time delivery tracking, and CI-signed Android/iOS releases.",
      techStack: ["Flutter", "Riverpod", "GitHub Actions"],
      highlights: [
        "Built kitchen browsing, cart, checkout, and real-time delivery tracking",
        "Implemented in-app wallet, rewards, and group-order flows",
        "Shipped multi-flavor builds (staging/production) with CI-signed releases",
      ],
      links: [
        {
          label: "Google Play",
          url: "https://play.google.com/store/apps/details?id=com.motobites",
        },
      ],
    },
    {
      title: "Plenti Nigeria",
      href: "https://apps.apple.com/us/app/plenti-nigeria/id6759972919",
      description:
        "E-commerce app shipped while leading mobile engineering at Sujimoto Group, built with production-grade Flutter.",
      media:
        "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/6d/5c/cb/6d5ccb46-0f06-40be-55e6-8bfdbdecefb7/AppIcon-1x_U007emarketing-0-11-0-85-220-0.png/512x512bb.jpg",
      kind: "first-party",
      role: "Software Engineer, Mobile",
      architecture:
        "Flutter e-commerce app built on the same clean-architecture foundation used across Sujimoto Group's mobile products, integrated with third-party payments and analytics.",
      techStack: ["Flutter", "Firebase"],
      highlights: [
        "Shipped a production-grade Flutter e-commerce app while leading mobile engineering at Sujimoto Group",
        "Integrated third-party payments, notifications, and analytics",
      ],
      links: [
        {
          label: "App Store",
          url: "https://apps.apple.com/us/app/plenti-nigeria/id6759972919",
        },
      ],
    },
    {
      title: "Navega · Rent Your Boat",
      href: "https://apps.apple.com/us/app/navega-rent-your-boat/id6742487553",
      description:
        "Boat rental marketplace app connecting owners and renters, with booking and listing management.",
      media:
        "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/6b/fc/12/6bfc125a-f76d-44e2-4ea2-6293e785a02e/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
      links: [
        {
          label: "App Store",
          url: "https://apps.apple.com/us/app/navega-rent-your-boat/id6742487553",
        },
      ],
    },
    {
      title: "AfroIntroductions",
      href: "https://apps.apple.com/us/app/afrointroductions-afro-dating/id1597869513",
      description:
        "Afro dating platform connecting singles across the African diaspora.",
      media:
        "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/54/41/5a/54415a07-f117-b988-6d6e-0e9ed5a917e2/AfroIntroductions-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg",
      links: [
        {
          label: "App Store",
          url: "https://apps.apple.com/us/app/afrointroductions-afro-dating/id1597869513",
        },
      ],
    },
    {
      title: "Respawn",
      href: "https://play.google.com/store/apps/details?id=com.nek12.respawn&pcampaignid=web_share",
      description:
        "Cross-platform app built at Respawn Technologies, featuring push-notification systems for tournaments, live events, and social features.",
      media:
        "https://play-lh.googleusercontent.com/p8YsLjOC_WX9HnjPbngSIDYO7ixMDOIHb8SeMRpApPCHGLelWd-ppcTLk4h7ws2iRcqPigpGgIxaxb9PNMnmIGM",
      links: [
        {
          label: "Google Play",
          url: "https://play.google.com/store/apps/details?id=com.nek12.respawn&pcampaignid=web_share",
        },
      ],
    },
    {
      title: "AI Calorie Tracker",
      href: "https://github.com/davidcreated/AI-Powered-Calorie-Tracker-app.git",
      description:
        "Computer-vision nutrition app that estimates calories and macros from a food photo via an LLM pipeline, with local-first storage.",
      media:
        "https://opengraph.githubassets.com/1/davidcreated/AI-Powered-Calorie-Tracker-app",
      kind: "first-party",
      role: "Personal Project",
      architecture:
        "Flutter app using BLoC/Cubit for state management on a clean-architecture foundation, with an LLM-based computer-vision pipeline for food recognition and local-first storage.",
      techStack: ["Flutter", "BLoC", "Clean Architecture"],
      highlights: [
        "Computer-vision pipeline estimates calories and macros from a single food photo via an LLM",
        "Local-first storage keeps user data on-device",
      ],
      links: [
        {
          label: "Source",
          url: "https://github.com/davidcreated/AI-Powered-Calorie-Tracker-app.git",
        },
      ],
    },
    {
      title: "Stellar Bridge Watch",
      href: "https://github.com/davidcreated/Bridge-Watch.git",
      description:
        "Open-source monitoring platform for cross-chain asset bridges, DEX liquidity, and bridged asset health on the Stellar network, with real-time analytics and automated alerts.",
      media: "https://opengraph.githubassets.com/1/davidcreated/Bridge-Watch",
      kind: "first-party",
      role: "Creator & Maintainer",
      architecture:
        "Five-layer architecture: on-chain data collection via Stellar Horizon/Soroban RPC and Ethereum RPC, a real-time processing engine, PostgreSQL/TimescaleDB + Redis storage, a REST/WebSocket API layer, and a React dashboard. Soroban (Rust) smart contracts handle on-chain monitoring components.",
      techStack: [
        "TypeScript",
        "Node.js",
        "React",
        "PostgreSQL",
        "Redis",
        "Rust",
        "Docker",
        "GitHub Actions",
      ],
      highlights: [
        "Backend built with Node.js, TypeScript, and Fastify, using PostgreSQL with TimescaleDB for time-series data and Redis for caching",
        "Integrates Stellar Horizon API, Soroban RPC, and Ethers.js for cross-chain bridge and DEX monitoring",
        "React + TypeScript dashboard with real-time charts and configurable alerts",
        "Containerized with Docker and Docker Compose, CI/CD via GitHub Actions",
      ],
      links: [
        { label: "Source", url: "https://github.com/davidcreated/Bridge-Watch.git" },
      ],
    },
    {
      title: "Healio",
      href: "https://github.com/davidcreated/Healio-Private.git",
      description:
        "Telemedicine platform spanning teleconsultation booking, e-prescriptions, lab management, and IoT health-device integration, built at Healio.",
      media: "https://opengraph.githubassets.com/1/davidcreated/Healio-Private",
      kind: "first-party",
      role: "Software Engineer, Mobile",
      architecture:
        "Modular React Native telemedicine app with Firebase-backed auth/RBAC, RESTful APIs, and real-time sync across mobile, backend, and IoT health devices.",
      techStack: ["React Native", "Firebase"],
      highlights: [
        "Led end-to-end React Native development spanning teleconsultation booking, e-prescriptions, lab management, medication scheduling, and IoT health-device integration",
        "Built secure infrastructure with Firebase and RESTful APIs covering authentication, role-based access control, and encrypted data flows",
        "Designed a modular, scalable architecture with optimized real-time synchronization between mobile, backend, and IoT devices",
      ],
      links: [
        { label: "Source", url: "https://github.com/davidcreated/Healio-Private.git" },
      ],
    },
    {
      title: "go-ethereum",
      href: "https://github.com/ethereum/go-ethereum",
      description:
        "Contributor to Geth, the Go implementation of the Ethereum protocol.",
      media: "https://opengraph.githubassets.com/1/ethereum/go-ethereum",
      links: [
        { label: "Source", url: "https://github.com/ethereum/go-ethereum" },
      ],
    },
    {
      title: "FastLED",
      href: "https://github.com/FastLED/FastLED",
      description:
        "Contributor to FastLED, a widely used C++ LED-animation library for embedded systems.",
      media: "https://opengraph.githubassets.com/1/FastLED/FastLED",
      links: [{ label: "Source", url: "https://github.com/FastLED/FastLED" }],
    },
  ],
  showcase: [
    {
      title: "Trippicker",
      tagline: "Web3 ride-hailing",
      description:
        "A Web3 ride-hailing app with real-time GPS tracking, fare estimation, in-app payments, and driver-passenger matching, plus an on-chain rewards layer that pays riders for completed trips. Live on the App Store.",
      href: "https://apps.apple.com/us/app/trippicker-web3-mobility/id6748451455",
      aspectRatio: 0.4614,
      screenshots: [
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/8f/ae/6c/8fae6c2c-27df-54c4-d2e1-2f437830468a/Rider_1.png/460x0w.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/9f/14/b6/9f14b6ba-18ea-992a-fce3-5296b693cc33/Rider_2.png/460x0w.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/bf/86/86/bf8686c6-0a1e-1203-3ffb-8ee7cdcb500e/Rider_3.png/460x0w.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/fe/d0/c6/fed0c6a4-285e-8a5e-2c5e-3bdb15ce453b/Rider_4.png/460x0w.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/9b/c6/12/9bc6122a-21c7-d5c1-8426-e9bfff9d8813/Rider_5.png/460x0w.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/9f/09/7b/9f097bbf-de6c-02ed-4fd6-878bd037cf12/Rider_6.png/460x0w.jpg",
      ],
    },
    {
      title: "Carbon-Adjust",
      tagline: "Real-time energy marketplace",
      description:
        "An offline-first Flutter app that connects households and businesses to real-time grid-balancing opportunities, with IoT device registration, an energy marketplace, and low-bandwidth-friendly sync.",
      href: "https://play.google.com/store/apps/details?id=com.carbonadjust.mobile",
      aspectRatio: 0.5625,
      screenshots: [
        "https://play-lh.googleusercontent.com/8ClXgcDKxJ2G6BfEJDye8VRlzAVpcnD3CHC6fLsdJ2jHiCD9nel3rKJza0jfGglOCyo8N46CmgeAubCd4zAWY1s=w480",
        "https://play-lh.googleusercontent.com/Mzue5927f5kuV0-SW59D-YCeaYpJA9B7ndw6mhGm9tidrrPA143NsTluoMWO9dldxcPtHAU0BUNLqB3Q18geG04=w480",
        "https://play-lh.googleusercontent.com/RrFHoaDRc0x9Y2qbLqvuPOegcVy5ZaD7v5lvKBt6nswVfZkyYVPkLr9Ol3dXoHLkYh8iU0B8ziKbIf3ItnbGPQ=w480",
        "https://play-lh.googleusercontent.com/WYFxdsJAqFJq7LgqL7n05AXziTJJOTx4InkejC2K0NFPzmdbIib6YNxA7MHYOA7IsrapvhhK0PEhkHXnt3uQXA4=w480",
        "https://play-lh.googleusercontent.com/YChXtnu-_pbuTwfucaDX9RCCUhe6W3b4h3_kAhygQbD3msoGYnFVlXWeABYX6Sej38IKzYHdfPvpNXU7PQjOfrY=w480",
        "https://play-lh.googleusercontent.com/kkctSjbLwZ9hoHRD5Z8J2xhnjSf1yohTb599VftjPLf3NlFGxOPv6ECkWn0VHPdknVpjulh1LZyVGShRb1Q8=w480",
      ],
    },
    {
      title: "MotoBills",
      tagline: "Utility-payments fintech",
      description:
        "A fintech app for airtime, data, electricity, cable TV, and bill payments, with biometric authentication, a secure wallet, and a real-time transaction-history dashboard. Live on the App Store.",
      href: "https://apps.apple.com/us/app/motobills/id6747974149",
      aspectRatio: 0.4614,
      screenshots: [
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/2c/68/17/2c681763-cdd2-6ff7-8bd9-e3af1793478d/IMG_2349.png/460x0w.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ef/03/4e/ef034e50-5c43-fa9e-c53a-d41603d7e256/IMG_2350.png/460x0w.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/4f/7b/11/4f7b11ce-e5f6-b083-756e-06b4e832749c/IMG_2351.png/460x0w.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/6d/82/0b/6d820bee-aac5-60b8-2c0b-68f4c3c0cca2/IMG_2353.png/460x0w.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ce/e6/b8/cee6b863-ec1d-36ab-a2ac-defdea439ef6/IMG_2354.png/460x0w.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/cc/7b/bf/cc7bbf8e-1ce9-7193-ce18-c041c79e53ed/IMG_2355.png/460x0w.jpg",
      ],
    },
    {
      title: "MotoBites",
      tagline: "Food delivery, end to end",
      description:
        "A Flutter food-delivery app where customers browse kitchens, order meals, track delivery in real time, and manage in-app wallets and rewards. Live on Google Play with multi-flavor, CI-signed releases.",
      href: "https://play.google.com/store/apps/details?id=com.motobites",
      aspectRatio: 0.4615,
      screenshots: [
        "https://play-lh.googleusercontent.com/5_NxlptanEf1tdqsW782-oDe-Ap9utB0QyRY3RKWyp3q73v4uJCrBPnhGb1_KykvplEn611PWYlbtOkIPFv2Jg=w480",
        "https://play-lh.googleusercontent.com/GuHhVVsIPF4VaYu26L06c1PnnlV-UeWVYMfbFkxYDya4yBbOz6YSaN2uSdSBHK_74qle2suWe3T9r15sMNYAVQ=w480",
        "https://play-lh.googleusercontent.com/OkQmhn21Mibv9DCDass9EV1tYRVuHXsKbfKx4pKKuNmoTvd1qSe8Pd5nhSogtNJOsE-ukFGNLblzAr0xlhkOTKY=w480",
        "https://play-lh.googleusercontent.com/h4k9ZF0ogbQ5aHsd392r-By15p2TZqPIJjkrOsyo4lWUhDxEvwOiRtCnfOLeFVTGckvzO0rkgH8oo5WTA9sM6g=w480",
        "https://play-lh.googleusercontent.com/jHZZOpTuVesbFbp3sxBIcMpqaVlzz3zvc1mvLgResdAdib6wONEFRuRHj3Q8YD0tQAFVRaM0L7TY4_17wouS=w480",
        "https://play-lh.googleusercontent.com/pjHvDl9n82H1kSoUShJZjOdhNOwU8O8WRRyDV4K8RcI5vAv0IXW3zlzdblKtIL3ltmAVSRZUIEMguSTSWJwSP60=w480",
      ],
    },
    {
      title: "Plenti Nigeria",
      tagline: "Everyday e-commerce",
      description:
        "A Flutter e-commerce app for everyday food and household products, with product discovery, category browsing, deals, and a streamlined checkout. Live on the App Store.",
      href: "https://apps.apple.com/us/app/plenti-nigeria/id6759972919",
      aspectRatio: 0.4614,
      screenshots: [
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/0c/5b/03/0c5b0393-81e7-09ac-fa4e-f5fcf4db5eaa/9.png/460x0w.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/92/c8/06/92c8069e-a85c-5bbc-e68f-10a4971175eb/10.png/460x0w.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/3a/d7/49/3ad749c8-acdc-1b08-3f18-b2dda29995f0/11.png/460x0w.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/23/e3/24/23e32420-67d2-58e7-2766-8a0f99e98378/12.png/460x0w.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/c9/3d/45/c93d4577-4e29-49bd-b3b1-90147710cabb/13.png/460x0w.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/97/8f/03/978f03e5-5820-5180-470a-9819caa5b457/14.png/460x0w.jpg",
      ],
    },
  ],
};
