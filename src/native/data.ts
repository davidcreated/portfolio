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
    "Swift / SwiftUI",
    "Kotlin",
    "Go (Golang)",
    "TypeScript",
    "Node.js / Next.js",
    "GraphQL",
    "WebSockets / MQTT",
    "PostgreSQL",
    "Firebase",
    "SQLite / Hive",
    "Clean Architecture",
    "Riverpod / BLoC",
    "CI/CD (Fastlane, Codemagic, GitHub Actions)",
  ],
  hobbies: ["Reading", "Exploring new tech", "Gaming", "Watching football"],
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
      url: "mailto:timifroberts@gmail.com",
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
      href: "http://apps.apple.com/us/app/motobills/id6747974149",
      description:
        "Fintech app for electricity bills, cable TV, and airtime/data top-ups, with biometric authentication and a secure transaction-history dashboard.",
      media:
        "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/a5/48/5a/a5485a8f-991e-b830-6dbd-07ce8b00530a/AppIcon-1x_U007emarketing-0-8-0-85-220-0.png/512x512bb.jpg",
      links: [
        {
          label: "App Store",
          url: "http://apps.apple.com/us/app/motobills/id6747974149",
        },
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
};
