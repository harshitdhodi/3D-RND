import { BeforeAfterData } from "@/components/BeforeAfterSection";

export type PortfolioCategory =
  | "Website & Web Application Projects"
  | "Mobile App Projects"
  | "Digital Marketing Projects"
  | "Branding & Graphic Design"
  | "Videography & Photography";

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  "Website & Web Application Projects",
  "Mobile App Projects",
  "Digital Marketing Projects",
  "Branding & Graphic Design",
  "Videography & Photography",
];

export interface ProjectResult {
  metric: string;
  label: string;
  verifiedBy?: string;
}

export interface RelatedLink {
  name: string;
  href: string;
}

export interface PortfolioProjectDetail {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  summary: string;
  tagline: string;
  category: PortfolioCategory;
  projectType: string;
  industry: string;
  services: RelatedLink[];
  industries: RelatedLink[];
  image: string;
  galleryImages: string[];
  videoUrl?: string;
  client: string;
  clientApproved?: boolean;
  projectDate: string;
  year: string;
  duration: string;
  sla: string;
  badge: string;
  tags: string[];
  brief: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  results?: ProjectResult[];
  overview: string[];
  quote?: {
    text: string;
    author: string;
  };
  scope: {
    number: string;
    title: string;
    desc: string;
    iconName?: string;
  }[];
  techStack: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  beforeAfter?: BeforeAfterData;
  isFeatured?: boolean;
  published: boolean;
  order: number;
}

export const portfolioData: PortfolioProjectDetail[] = [
  // =========================================================================
  // CATEGORY 1: Website & Web Application Projects
  // =========================================================================
  // {
  //   id: "kailua",
  //   index: "01",
  //   title: "Ace Packaging Digital Platform",
  //   subtitle: "Custom Packaging Web Experience & Product Showcase",
  //   summary:
  //     "A modern, high-performance web platform for Ace Packaging, showcasing premium food container box solutions with dynamic product catalogs and automated lead inquiries.",
  //   tagline:
  //     "Engineered responsive web experience highlighting premium food container packaging innovation with modern design and fast browsing.",
  //   category: "Website & Web Application Projects",
  //   projectType: "Packaging Web Platform & Catalog",
  //   industry: "Manufacturing & Industrial",
  //   services: [
  //     { name: "Custom Web Development", href: "/services" },
  //     { name: "E-Commerce Engineering", href: "/technology-solution" },
  //     { name: "Cloud & DevOps", href: "/technology-solution" },
  //   ],
  //   industries: [
  //     { name: "Manufacturing & Industrial", href: "/industries/manufacturing" },
  //     { name: "Food & FMCG", href: "/industries/food-fmcg" },
  //   ],
  //   image: "/webdevalopment/webdev1.png",
  //   galleryImages: [
  //     "/webdevalopment/webdev1.png",
  //     "/webdevalopment/webdev4.png",
  //   ],
  //   videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
  //   client: "Ace Packaging Pvt. Ltd.",
  //   clientApproved: true,
  //   projectDate: "Q1 2026",
  //   year: "2026",
  //   duration: "10 Weeks",
  //   sla: "99.99% Uptime",
  //   badge: "CUSTOM WEB PLATFORM // PACKAGING",
  //   tags: ["Next.js 15", "Web Development", "UI/UX Design", "Tailwind CSS"],
  //   brief:
  //     "Ace Packaging partnered with RnD Technosoft to engineer their brand website, highlighting their position as pioneers in premium food container boxes with responsive, high-speed UX.",
  //   challenge:
  //     "Presenting extensive product catalog lines for food packaging containers with high visual fidelity while maintaining instant page loads across all mobile and desktop devices.",
  //   solution:
  //     "Engineered an ultra-fast Next.js web platform featuring interactive container showcases, detailed material specifications, and streamlined distributor inquiry funnels.",
  //   deliverables: [
  //     "Custom responsive corporate web application",
  //     "Interactive packaging product catalog with category filters",
  //     "Dynamic quote inquiry and specification download system",
  //     "Mobile-optimized B2B buyer customer journey",
  //   ],
  //   results: [
  //     { metric: "+340%", label: "Product Inquiries Lift", verifiedBy: "Web Telemetry" },
  //     { metric: "0.8s", label: "Largest Contentful Paint (LCP)", verifiedBy: "Google Lighthouse" },
  //     { metric: "100%", label: "Mobile Responsive Score", verifiedBy: "Google Mobile Test" },
  //     { metric: "99.99%", label: "Production Uptime SLA", verifiedBy: "Cloudflare Analytics" },
  //   ],
  //   overview: [
  //     "Ace Packaging commissioned RnD Technosoft to engineer their corporate digital flagship, replacing traditional static brochures with a modern high-performance web experience.",
  //     "The result is a clean, accessible showcase that elevated market perception and customer inquiries significantly.",
  //   ],
  //   quote: {
  //     text: "RnD Technosoft transformed our product presentation into our strongest digital sales and inquiry generator. The design is modern, professional and fast.",
  //     author: "Management • Ace Packaging",
  //   },
  //   scope: [
  //     { number: "01", title: "Modern Brand Experience Architecture", desc: "Next.js frontend with edge rendering for instantaneous navigation across product lines." },
  //     { number: "02", title: "Interactive Food Container Catalog", desc: "Detailed product categorizations, capacity specifications, and high-resolution imagery." },
  //     { number: "03", title: "Automated Distributor Inquiry Funnel", desc: "Direct inquiry routing connecting prospective buyers with regional sales reps." },
  //   ],
  //   techStack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Edge Caching"],
  //   faqs: [
  //     {
  //       question: "How does the custom web platform help food packaging buyers?",
  //       answer: "Buyers can easily filter container capacities, materials, and certifications to request immediate bulk quotes.",
  //     },
  //   ],
  //   isFeatured: true,
  //   published: true,
  //   order: 1,
  // },
  {
    id: "nebula-cloud",
    index: "02",
    title: "Inject Care Parenterals Web Platform",
    subtitle: "EU GMP & PIC/S Compliant Pharma Manufacturer Web Experience",
    summary:
      "An authoritative corporate web portal for India's largest EU GMP and PIC/S compliant medical injection manufacturer, showcasing sterile manufacturing facilities and global certifications.",
    tagline:
      "Modern pharmaceutical manufacturing web presence highlighting global certifications, sterile facilities, and international compliance.",
    category: "Website & Web Application Projects",
    projectType: "Pharmaceutical Web Portal",
    industry: "Healthcare & Dental",
    services: [
      { name: "Custom Web Development", href: "/services" },
      { name: "Enterprise Software Solutions", href: "/technology-solution" },
    ],
    industries: [
      { name: "Healthcare & Dental", href: "/industries/healthcare" },
      { name: "Manufacturing & Industrial", href: "/industries/manufacturing" },
    ],
    image: "/webdevalopment/webdev2.png",
    galleryImages: [
      "/webdevalopment/webdev2.png",
      "/webdevalopment/webdev3.png",
    ],
    videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    client: "Inject Care Parenterals LLP",
    clientApproved: true,
    projectDate: "December 2025",
    year: "2025",
    duration: "12 Weeks",
    sla: "99.999% Resilience",
    badge: "PHARMA WEB PLATFORM // EU GMP",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Pharma"],
    brief:
      "Inject Care Parenterals required a sophisticated digital portal reflecting their world-class sterile manufacturing standards, global regulatory compliance, and multi-facility capabilities.",
    challenge:
      "Communicating complex regulatory certifications (EU GMP, PIC/S), facility accreditations, and high-volume sterile injection lines to international pharmaceutical auditors and partners.",
    solution:
      "Engineered an authoritative corporate portal with interactive facility overviews, certified product line indices, and compliance documentation repositories.",
    deliverables: [
      "Enterprise pharmaceutical corporate portal",
      "Interactive facility and regulatory certification showcase",
      "Standard operating procedure and product catalog indices",
      "Secure partner contact and audit inquiry portal",
    ],
    results: [
      { metric: "100%", label: "Global Compliance Presentation", verifiedBy: "Regulatory Audit" },
      { metric: "45+", label: "International Markets Reached", verifiedBy: "Web Analytics" },
      { metric: "0.9s", label: "Global Page Load Speed", verifiedBy: "Lighthouse" },
    ],
    overview: [
      "Inject Care Parenterals trusted RnD Technosoft to create an institutional web platform presenting India's largest EU GMP medical injection facilities to global pharma leaders.",
      "The web experience provides international clients with verified regulatory transparency and streamlined collaboration.",
    ],
    scope: [
      { number: "01", title: "Institutional Digital Architecture", desc: "Rigorous corporate presentation meeting international pharmaceutical compliance." },
      { number: "02", title: "Facility & Production Line Showcase", desc: "Visual storytelling highlighting sterile cleanrooms, lyophilization lines, and QC labs." },
      { number: "03", title: "Global Partnership Inquiries", desc: "Dedicated regulatory and institutional contract manufacturing request pipelines." },
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    faqs: [
      {
        question: "Can international partners request regulatory audits through the portal?",
        answer: "Yes, dedicated inquiry forms streamline audit requests, technical dossiers, and institutional partnerships.",
      },
    ],
    isFeatured: true,
    published: true,
    order: 2,
  },
  {
    id: "synapse-digital",
    index: "03",
    title: "Prakash Steelage Industrial Web Portal",
    subtitle: "Precision Stainless Steel Manufacturing & Global Inventory Showcase",
    summary:
      "A heavy-industrial corporate web platform engineered for Prakash Steelage, featuring comprehensive inventory specifications for stainless steel sheets, plates, and pipes with global inquiry integration.",
    tagline:
      "Heavy-industrial web platform showcasing precision stainless steel engineering, mill specifications, and international supply infrastructure.",
    category: "Website & Web Application Projects",
    projectType: "Industrial Web Portal & Mill Catalog",
    industry: "Manufacturing & Industrial",
    services: [
      { name: "Enterprise Software Solutions", href: "/technology-solution" },
      { name: "Custom Web Development", href: "/services" },
    ],
    industries: [
      { name: "Manufacturing & Industrial", href: "/industries/manufacturing" },
      { name: "Real Estate & Construction", href: "/industries/real-estate-construction" },
    ],
    image: "/webdevalopment/webdev3.png",
    galleryImages: [
      "/webdevalopment/webdev3.png",
      "/webdevalopment/webdev1.png",
    ],
    client: "Prakash Steelage Ltd.",
    clientApproved: true,
    projectDate: "November 2025",
    year: "2025",
    duration: "10 Weeks",
    sla: "100% IP Ownership",
    badge: "HEAVY INDUSTRIAL // STAINLESS STEEL",
    tags: ["Next.js", "React", "Industrial UI", "Tailwind CSS"],
    brief:
      "Prakash Steelage commissioned RnD Technosoft to develop an industrial-grade website to showcase precision stainless steel products, technical mill specifications, and global supply capacity.",
    challenge:
      "Organizing vast technical metallurgical data sheets, steel grades, dimensional charts, and coil specifications into an intuitive, accessible layout for procurement engineers.",
    solution:
      "Designed a modern industrial portal featuring structured specification tables, instant grade search, and quick quotation request tools for global buyers.",
    deliverables: [
      "Industrial corporate website and metallurgical catalog",
      "Dynamic grade and dimension specification tables",
      "Global procurement quote calculator and inquiry pipeline",
      "Full mobile responsiveness for on-site engineers and buyers",
    ],
    results: [
      { metric: "+210%", label: "B2B Export Inquiries", verifiedBy: "CRM Analytics" },
      { metric: "100+", label: "Product Specifications Indexed", verifiedBy: "Portal Catalog" },
      { metric: "1.0s", label: "Average Page Response", verifiedBy: "Google Lighthouse" },
    ],
    overview: [
      "Prakash Steelage partnered with RnD Technosoft to modernize their web presence, highlighting precision in stainless steel manufacturing and global supply reliability.",
      "The platform empowers global procurement teams to quickly locate steel grades and request mill-direct quotations.",
    ],
    scope: [
      { number: "01", title: "Heavy-Industrial Visual Architecture", desc: "High-contrast industrial design aesthetic reflecting stainless steel manufacturing strength." },
      { number: "02", title: "Technical Metallurgical Catalog", desc: "Seamless navigation across stainless coils, plates, sheets, and welded pipes." },
      { number: "03", title: "Instant RFQ Engine", desc: "Automated RFQ submission connecting buyers directly with the mill sales desk." },
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    faqs: [
      {
        question: "Can buyers filter products by steel grade and dimension?",
        answer: "Yes, the catalog enables instant filtering across grades 304, 316L, duplex steels, and custom mill tolerances.",
      },
    ],
    isFeatured: true,
    published: true,
    order: 3,
  },
  {
    id: "vbott-storefront",
    index: "04",
    title: "VBŌTT E-Commerce Flagship Storefront",
    subtitle: "Direct-to-Consumer E-Commerce Experience & Product Showcase",
    summary:
      "A feature-rich e-commerce storefront for VBŌTT hydration products, delivering an intuitive shopping experience, product variant customizers, and high-converting checkout flows.",
    tagline:
      "High-speed D2C e-commerce platform with responsive shopping UX, promotional campaign banners, and automated inventory management.",
    category: "Website & Web Application Projects",
    projectType: "E-Commerce Website & Storefront",
    industry: "Retail & E-Commerce",
    services: [
      { name: "Custom Web Development", href: "/services" },
      { name: "E-Commerce Engineering", href: "/technology-solution" },
    ],
    industries: [
      { name: "Retail & E-Commerce", href: "/industries/retail-ecommerce" },
      { name: "Food & FMCG", href: "/industries/food-fmcg" },
    ],
    image: "/webdevalopment/webdev4.png",
    galleryImages: [
      "/webdevalopment/webdev4.png",
      "/webdevalopment/webdev1.png",
    ],
    videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    client: "VBŌTT Hydration",
    clientApproved: true,
    projectDate: "Q1 2026",
    year: "2026",
    duration: "8 Weeks",
    sla: "99.9% Uptime",
    badge: "D2C E-COMMERCE // SHOPIFY & NEXT.JS",
    tags: ["E-Commerce", "Next.js", "Shopify", "Tailwind CSS"],
    brief:
      "VBŌTT required an engaging direct-to-consumer digital storefront that effectively presents their premium hydration bottles with promotional discount engines and seamless multi-device purchasing.",
    challenge:
      "Creating a mobile-first e-commerce experience capable of handling high peak-traffic sales events while maintaining sub-second catalog navigation and instant search.",
    solution:
      "Engineered a responsive Next.js storefront with dynamic product collections, promotional discount timers, and rapid mobile checkout integrations.",
    deliverables: [
      "Custom responsive D2C e-commerce storefront",
      "Dynamic product collection and variant customizer",
      "Integrated promotional banner and discount management",
      "Secure payment gateway and order tracking pipeline",
    ],
    results: [
      { metric: "+280%", label: "Online Sales Growth", verifiedBy: "Storefront Analytics" },
      { metric: "1.1s", label: "Page Load Speed", verifiedBy: "Lighthouse" },
      { metric: "65%", label: "Mobile Checkout Ratio", verifiedBy: "Checkout Telemetry" },
    ],
    overview: [
      "VBŌTT commissioned RnD Technosoft to build their flagship online store, bringing high-aesthetic presentation to their lifestyle hydration product line.",
      "The platform achieved substantial conversion improvements and established a strong digital presence for the brand.",
    ],
    quote: {
      text: "The new digital storefront built by RnD Technosoft perfectly captures our brand identity and elevated our online customer conversions immediately.",
      author: "Marketing Lead • VBŌTT",
    },
    scope: [
      { number: "01", title: "Modern E-Commerce Storefront Architecture", desc: "Next.js frontend with rapid responsive layouts across all mobile and desktop devices." },
      { number: "02", title: "Dynamic Product Showcase & Variants", desc: "Interactive bottle collections, colorway selection, and real-time inventory visibility." },
      { number: "03", title: "Seamless Checkout & Conversion Optimization", desc: "Simplified multi-step cart with one-click payment integration." },
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shopify Engine"],
    faqs: [
      {
        question: "Is the store optimized for mobile shopping?",
        answer: "Yes, over 65% of transactions occur on mobile devices, and the entire shopping funnel is engineered for effortless one-thumb checkout.",
      },
    ],
    isFeatured: true,
    published: true,
    order: 4,
  },

  // =========================================================================
  // CATEGORY 2: Mobile App Projects
  // =========================================================================
  {
    id: "quantum-mobile-os",
    index: "04",
    title: "Quantum Mobile Wealth",
    subtitle: "Cross-Platform iOS & Android Neo-Banking Suite",
    summary:
      "A next-generation mobile banking and institutional wealth application featuring hardware enclave biometric authentication, offline-first transaction queues, and 60 FPS haptic interactions.",
    tagline:
      "Institutional-grade cross-platform mobile suite with real-time biometric cryptography, offline WatermelonDB sync, and fluid Skia graphics.",
    category: "Mobile App Projects",
    projectType: "iOS & Android Cross-Platform Mobile",
    industry: "Fintech & Banking",
    services: [
      { name: "Custom Web Development", href: "/services" },
      { name: "UI/UX & Digital Product Design", href: "/services" },
    ],
    industries: [
      { name: "Fintech & Banking", href: "/industries/startups-professional-services" },
    ],
    image: "/images/service_mobile_color.jpg",
    galleryImages: [
      "/images/service_mobile_color.jpg",
      "/images/project_it_fintech.jpg",
      "/images/service_mobile.jpg",
    ],
    videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    client: "Quantum Capital AG",
    clientApproved: true,
    projectDate: "February 2026",
    year: "2026",
    duration: "16 Weeks",
    sla: "60 FPS Native",
    badge: "REACT NATIVE // HARDWARE ENCLAVE",
    tags: ["React Native", "TypeScript", "Skia 2D", "iOS", "Android", "WatermelonDB"],
    brief:
      "Quantum Capital wanted to engineer a private wealth management app that rivals Swiss private banking standards with modern fintech fluidity and real-time portfolio rebalancing.",
    challenge:
      "Managing complex real-time crypto and fiat pricing graphs at 60 FPS on mobile while guaranteeing hardware-backed biometric security on both iOS and Android.",
    solution:
      "Developed a custom React Native architecture utilizing Shopify Skia for hardware-accelerated 2D charts, WatermelonDB for local encryption, and FaceID / TouchID biometric keys.",
    deliverables: [
      "iOS and Android production builds released on App Store and Google Play",
      "Hardware-accelerated Skia portfolio visualization graph engine",
      "Instant multi-currency transfer with biometric authorization",
      "Offline-first synchronization with automated conflict resolution",
    ],
    results: [
      { metric: "60 FPS", label: "Consistent Interaction Frame Rate", verifiedBy: "Xcode Instruments" },
      { metric: "4.9/5", label: "App Store User Rating", verifiedBy: "Apple App Store" },
      { metric: "$850M+", label: "Total Assets Under Management (AUM)", verifiedBy: "Quantum AG" },
    ],
    overview: [
      "Quantum Mobile Wealth blends Swiss private banking security with consumer fintech elegance.",
    ],
    quote: {
      text: "The haptic micro-interactions and instant biometric execution set a new benchmark for private mobile banking.",
      author: "Marc Thorensen • Head of Product, Quantum AG",
    },
    scope: [
      { number: "01", title: "Fabric Native Architecture", desc: "Bridgeless React Native setup with direct C++ TurboModule invocations." },
      { number: "02", title: "Biometric Hardware Enclave", desc: "Private key encryption locked to device Secure Enclave and Android Keystore." },
      { number: "03", title: "Tactile Haptic Feedback", desc: "Fine-grained linear resonant actuator vibrations on key user actions." },
    ],
    techStack: ["React Native", "TypeScript", "Shopify Skia", "WatermelonDB", "Fastlane", "Node.js"],
    faqs: [
      {
        question: "Does the app support offline mode?",
        answer: "Yes, our local-first WatermelonDB sync mesh allows users to review portfolios and queue trades securely without an internet connection.",
      },
    ],
    isFeatured: true,
    published: true,
    order: 4,
  },
  {
    id: "nomadiq-health",
    index: "05",
    title: "Nomadiq Telehealth Mobile",
    subtitle: "Real-Time Biometric Sensor Sync & Teleconsultation",
    summary:
      "A HIPAA-compliant mobile telemedicine suite connecting patients directly with clinical specialists via HD WebRTC video, Apple HealthKit integration, and automated prescription routing.",
    tagline:
      "Native mobile healthcare application with Bluetooth medical sensor telemetry, WebRTC video consultation, and instant pharmacy integration.",
    category: "Mobile App Projects",
    projectType: "Native iOS & Android App",
    industry: "Healthcare & Life Sciences",
    services: [
      { name: "Custom Web Development", href: "/services" },
      { name: "Enterprise Software Solutions", href: "/technology-solution" },
    ],
    industries: [
      { name: "Healthcare & Life Sciences", href: "/industries/healthcare" },
    ],
    image: "/images/industry_medtech.jpg",
    galleryImages: [
      "/images/industry_medtech.jpg",
      "/images/service_mobile_color.jpg",
      "/images/nebula_cloud_os_3d.jpg",
    ],
    client: "Nomadiq Health Technologies",
    clientApproved: true,
    projectDate: "October 2025",
    year: "2025",
    duration: "14 Weeks",
    sla: "Zero Data Leakage",
    badge: "HEALTHKIT // WEBRTC HD",
    tags: ["iOS", "Android", "WebRTC", "HealthKit", "Bluetooth LE"],
    brief:
      "Nomadiq needed an accessible mobile application for remote patient monitoring that captures vitals from consumer wearables and transmits them directly to attending cardiologists.",
    challenge:
      "Unifying Bluetooth Low Energy (BLE) sensor telemetry across hundreds of Android device models while guaranteeing encrypted HD video on erratic 4G/5G connections.",
    solution:
      "Engineered an adaptive WebRTC video pipeline paired with background BLE services that buffer telemetry offline and synchronize upon connection stabilization.",
    deliverables: [
      "Native iOS and Android apps with Apple HealthKit & Google Health Connect sync",
      "End-to-end encrypted WebRTC audio/video consultation module",
      "Bluetooth LE automated glucose, pulse-ox, and blood pressure pairing",
      "Compliant electronic prescription fulfillment workflow",
    ],
    results: [
      { metric: "99.8%", label: "Video Call Connection Success Rate", verifiedBy: "Twilio Telemetry" },
      { metric: "450k+", label: "Remote Biometric Packets Processed", verifiedBy: "Nomadiq Ops" },
      { metric: "<200ms", label: "Bluetooth Pairing Latency", verifiedBy: "Hardware Benchmarks" },
    ],
    overview: [
      "Nomadiq Health bridges clinical oversight and everyday mobile convenience for thousands of chronically managed patients.",
    ],
    scope: [
      { number: "01", title: "BLE Peripheral Protocol", desc: "Automated background handshake with FDA-cleared biometric monitors." },
      { number: "02", title: "Encrypted Video Mesh", desc: "Adaptive bitrate WebRTC streaming with zero in-transit packet recording." },
      { number: "03", title: "Emergency Telemetry Alerts", desc: "High-priority push notifications triggered by anomalous vital signs." },
    ],
    techStack: ["Flutter", "Dart", "WebRTC", "Bluetooth LE", "HealthKit", "Firebase FCM", "Node.js"],
    faqs: [
      {
        question: "How are patient consultations kept confidential?",
        answer: "All video and audio streams are encrypted end-to-end with ephemeral DTLS-SRTP keys that expire immediately after the call terminates.",
      },
    ],
    isFeatured: false,
    published: true,
    order: 5,
  },
  {
    id: "tastecraft-delivery",
    index: "06",
    title: "TasteCraft On-Demand Delivery",
    subtitle: "Hyper-Local Real-Time Food Delivery & Courier Fleet App",
    summary:
      "A dynamic culinary marketplace and driver fleet orchestration app delivering sub-20-minute gourmet meals with live Mapbox GPS tracking and automated dispatch balancing.",
    tagline:
      "Real-time food delivery app with dynamic courier routing, 1-click Apple Pay checkout, and live temperature sensor telemetry.",
    category: "Mobile App Projects",
    projectType: "On-Demand Delivery Mobile Suite",
    industry: "Food & FMCG",
    services: [
      { name: "Custom Web Development", href: "/services" },
      { name: "Cloud Infrastructure & DevOps", href: "/technology-solution" },
    ],
    industries: [
      { name: "Food & FMCG", href: "/industries/food-fmcg" },
      { name: "Retail & E-Commerce", href: "/industries/retail-ecommerce" },
    ],
    image: "/images/project_lifestyle.jpg",
    galleryImages: [
      "/images/project_lifestyle.jpg",
      "/images/service_mobile.jpg",
      "/images/project_it_spatial.jpg",
    ],
    client: "TasteCraft Hospitality Group",
    clientApproved: true,
    projectDate: "January 2026",
    year: "2026",
    duration: "12 Weeks",
    sla: "<1.2s Order Dispatch",
    badge: "MAPBOX GL // FLEET MESH",
    tags: ["React Native", "Mapbox GL", "Stripe Terminal", "WebSockets", "Node.js"],
    brief:
      "TasteCraft wanted to disrupt high third-party delivery commissions by launching their own premium direct-to-consumer delivery app for their network of 40+ gourmet restaurants.",
    challenge:
      "Orchestrating live driver routing through congested metropolitan traffic while maintaining precise delivery time estimates within 60 seconds.",
    solution:
      "Built a custom React Native mobile app with Mapbox navigation, real-time WebSocket vehicle updates, and automated order batching algorithms.",
    deliverables: [
      "Customer ordering app with interactive menu carousels and instant payment",
      "Courier fleet mobile app with automated turn-by-turn navigation",
      "Kitchen display system (KDS) tablet app with live prep timers",
      "Central dispatch web console with live driver heatmaps",
    ],
    results: [
      { metric: "18.4 Min", label: "Average Order-to-Door Delivery Time", verifiedBy: "Fleet Telemetry" },
      { metric: "+82%", label: "Repeat Customer 30-Day Retention", verifiedBy: "TasteCraft Analytics" },
      { metric: "$3.8M", label: "Commissions Saved in Year 1", verifiedBy: "CFO Report" },
    ],
    overview: [
      "TasteCraft transformed culinary logistics, turning proprietary mobile apps into their highest margin revenue channel.",
    ],
    scope: [
      { number: "01", title: "Mapbox Vector Tile Engine", desc: "Smooth 60 FPS live driver GPS movement with predictive interpolation." },
      { number: "02", title: "Intelligent Dispatch Heuristics", desc: "Automated route optimization grouping nearby orders to reduce driver mileage." },
      { number: "03", title: "Instant Mobile Checkout", desc: "Zero-friction Apple Pay and Google Pay integration via Stripe." },
    ],
    techStack: ["React Native", "Mapbox GL", "WebSockets", "Node.js", "Redis", "PostgreSQL", "Stripe"],
    faqs: [
      {
        question: "Can restaurants update menus in real time during service?",
        answer: "Yes, 86-ing items or adjusting prep times reflects instantaneously on customer devices via WebSocket push events.",
      },
    ],
    isFeatured: false,
    published: true,
    order: 6,
  },

  // =========================================================================
  // CATEGORY 3: Digital Marketing Projects
  // =========================================================================
  {
    id: "omnigrowth-analytics",
    index: "07",
    title: "OmniGrowth Performance Engine",
    subtitle: "Programmatic SEO, Multi-Touch Attribution & PPC Scale",
    summary:
      "A comprehensive digital marketing acquisition engine that generated 4.2 million organic visits and scaled paid customer acquisition at a 420% return on ad spend (ROAS).",
    tagline:
      "High-intent performance marketing pipeline featuring server-side attribution modeling, programmatic SEO architecture, and automated ad creative testing.",
    category: "Digital Marketing Projects",
    projectType: "Full-Funnel Growth & Performance Engine",
    industry: "Retail & E-Commerce",
    services: [
      { name: "Digital Marketing & SEO", href: "/services" },
      { name: "Custom Web Development", href: "/services" },
    ],
    industries: [
      { name: "Retail & E-Commerce", href: "/industries/retail-ecommerce" },
      { name: "Startups & Professional Services", href: "/industries/startups-professional-services" },
    ],
    image: "/Digital Marketing/DM1.png",
    galleryImages: [
      "/Digital Marketing/DM1.png",
      "/images/service_marketing.jpg",
      "/images/Digi market.png",
    ],
    client: "OmniGrowth Global Direct",
    clientApproved: true,
    projectDate: "Q4 2025",
    year: "2025",
    duration: "Continuous (6 Mo Sprints)",
    sla: ">400% Target ROAS",
    badge: "PROGRAMMATIC SEO // ATTRIBUTION",
    tags: ["SEO", "Google Ads", "Meta Ads", "Server-Side Tracking", "Looker Studio"],
    brief:
      "OmniGrowth wanted to diversify away from expensive paid customer acquisition by scaling an evergreen programmatic organic search footprint while modernizing server-side attribution.",
    challenge:
      "Apple's iOS privacy updates severely impaired client ad tracking, causing CAC to spike by 65% while organic search traffic remained flat.",
    solution:
      "Deployed Meta Conversions API (CAPI) on Cloudflare Workers for 99.4% attribution accuracy, combined with a Next.js programmatic SEO matrix generating 1,200+ high-ranking long-tail landing pages.",
    deliverables: [
      "Server-side Meta and Google Ads Conversions API (CAPI) pipeline",
      "Programmatic SEO matrix covering 1,200+ transactional keywords",
      "Dynamic creative optimization (DCO) testing engine for Meta & TikTok",
      "Custom Looker Studio executive attribution and cohort dashboard",
    ],
    results: [
      { metric: "+420%", label: "Return on Ad Spend (ROAS)", verifiedBy: "Third-Party Attribution" },
      { metric: "4.2M", label: "Organic Search Visits Generated", verifiedBy: "Google Search Console" },
      { metric: "-48%", label: "Blended Customer Acquisition Cost (CAC)", verifiedBy: "OmniGrowth Analytics" },
      { metric: "#1-3", label: "Rankings for 340+ High-Intent Keywords", verifiedBy: "Ahrefs" },
    ],
    overview: [
      "OmniGrowth transformed digital marketing from an unpredictable cost center into a predictable, compound growth engine.",
    ],
    quote: {
      text: "RnD's programmatic SEO and server-side tracking gave us unprecedented visibility into our acquisition spend. Our ROAS quadrupled in six months.",
      author: "David Sterling • VP of Growth, OmniGrowth",
    },
    scope: [
      { number: "01", title: "CAPI Server-Side Data Layer", desc: "First-party cookie resolution bypassing ad-blockers and browser restrictions." },
      { number: "02", title: "Programmatic Landing Architecture", desc: "Sub-second static generated pages with itemized schema markups." },
      { number: "03", title: "Algorithmic Ad Budget Allocation", desc: "Automated scaling of winning ad creatives across Meta, Google, and YouTube." },
    ],
    techStack: ["Cloudflare Workers", "Google Tag Manager", "Meta CAPI", "Google Ads", "Looker Studio", "Next.js 15"],
    faqs: [
      {
        question: "How long before programmatic SEO generates measurable traffic?",
        answer: "With our optimized crawl budgets and edge Next.js indexing, initial indexing begins within 14 days with meaningful traffic compounding by month 3.",
      },
    ],
    isFeatured: true,
    published: true,
    order: 7,
  },
  {
    id: "zenith-social",
    index: "08",
    title: "Zenith Social Omnichannel Growth",
    subtitle: "Creator Network Seeding, Viral Video & TikTok Spark Ads",
    summary:
      "A high-velocity social media growth and creator partnership campaign driving 85M+ verified impressions, 1.4M community engagements, and unprecedented brand recognition.",
    tagline:
      "Algorithmic short-form video production, creator influencer seeding, and paid amplification engine generating exponential viral reach.",
    category: "Digital Marketing Projects",
    projectType: "Social Media & Creator Marketing",
    industry: "Startups & Professional Services",
    services: [
      { name: "Digital Marketing & Growth", href: "/services" },
      { name: "Commercial Media & Motion", href: "/services" },
    ],
    industries: [
      { name: "Food & FMCG", href: "/industries/food-fmcg" },
      { name: "Startups & Professional Services", href: "/industries/startups-professional-services" },
    ],
    image: "/Digital Marketing/DM2.png",
    galleryImages: [
      "/Digital Marketing/DM2.png",
      "/images/social.png",
      "/images/service_media.jpg",
    ],
    client: "Zenith Beverage Collective",
    clientApproved: true,
    projectDate: "December 2025",
    year: "2025",
    duration: "16 Weeks",
    sla: "Zero Fluff Reporting",
    badge: "CREATOR SEEDING // VIRAL REACH",
    tags: ["TikTok", "Instagram Reels", "YouTube Shorts", "Creator Partnerships", "Spark Ads"],
    brief:
      "Zenith needed to build immediate cultural cachet and retail shelf velocity for their sparkling adaptogenic tonic through authentic vertical video storytelling.",
    challenge:
      "Generic sponsored posts were experiencing declining consumer trust and low click-through rates among Gen-Z audiences.",
    solution:
      "Mobilized an organic cohort of 120+ micro-creators, paired with in-house studio-crafted comedic skits and whitelisted Spark Ads amplifying top-performing organic hooks.",
    deliverables: [
      "240+ bespoke vertical video assets for TikTok, Instagram Reels, and Shorts",
      "Negotiated contracts and rights management with 120+ vetted niche creators",
      "Automated community engagement engine responding to 100% of top comments",
      "Targeted Spark Ad amplification campaigns driving direct retail locator traffic",
    ],
    results: [
      { metric: "85M+", label: "Total Verified Video Views", verifiedBy: "TikTok & Meta Ads Manager" },
      { metric: "+310%", label: "Spike in Whole Foods Store Velocity", verifiedBy: "SPINS Retail Data" },
      { metric: "1.4M", label: "Direct Engagements & Shares", verifiedBy: "Zenith Analytics" },
    ],
    overview: [
      "Zenith Social turned digital culture into physical retail sales across 2,400+ nationwide grocery doors.",
    ],
    scope: [
      { number: "01", title: "Creative Hook Ideation", desc: "Scripting and producing 20+ viral concept variations per week." },
      { number: "02", title: "Creator Seeding Engine", desc: "Automated gifting and brief dissemination to high-affinity micro-influencers." },
      { number: "03", title: "Paid Whitelisting & Retargeting", desc: "Running paid ads directly through creator handles for maximum credibility." },
    ],
    techStack: ["TikTok Ads Manager", "Meta Business Suite", "CapCut Pro", "Grin Influencer CRM", "Looker Studio"],
    faqs: [
      {
        question: "Do clients retain ownership of creator content?",
        answer: "Yes, our bilateral creator contracts secure full digital ad usage and whitelisting rights for 12 months minimum.",
      },
    ],
    isFeatured: false,
    published: true,
    order: 8,
  },
  {
    id: "apex-fintech",
    index: "09",
    title: "Apex Enterprise ABM Acquisition",
    subtitle: "High-Ticket B2B Account-Based Marketing & Paid LinkedIn Ads",
    summary:
      "A laser-targeted enterprise pipeline engine that generated $28M in qualified B2B pipeline across Fortune 500 manufacturing and aerospace buying committees.",
    tagline:
      "Precision B2B Account-Based Marketing engine with IP-based intent targeting, custom thought-leadership content, and SDR pipeline orchestration.",
    category: "Digital Marketing Projects",
    projectType: "B2B Performance & Account-Based Marketing",
    industry: "Manufacturing & Robotics",
    services: [
      { name: "Digital Marketing & Growth", href: "/services" },
      { name: "Enterprise Software Solutions", href: "/technology-solution" },
    ],
    industries: [
      { name: "Manufacturing & Robotics", href: "/industries/manufacturing" },
    ],
    image: "/Digital Marketing/DM3.png",
    galleryImages: [
      "/Digital Marketing/DM3.png",
      "/images/project_it_cyber.jpg",
      "/images/agency_team_studio.jpg",
    ],
    client: "Apex Industrial Automation",
    clientApproved: true,
    projectDate: "Q3 2025",
    year: "2025",
    duration: "20 Weeks",
    sla: "Verified SQL Guarantee",
    badge: "ENTERPRISE ABM // LINKEDIN ADS",
    tags: ["LinkedIn Ads", "HubSpot ABM", "Demandbase", "Content Marketing", "Cold Email"],
    brief:
      "Apex Industrial wanted to close multi-million dollar automation contracts by targeting C-suite leaders and VPs of Engineering across 250 named enterprise accounts.",
    challenge:
      "Broad digital ads produced low-quality leads while decision-makers ignored cold outbound emails from standard SDR teams.",
    solution:
      "Orchestrated a multichannel ABM campaign combining Bombora intent data, personalized LinkedIn Thought Leader ads, bespoke executive whitepapers, and direct SDR outreach.",
    deliverables: [
      "Tier-1 list of 250 qualified enterprise accounts mapped to 2,000+ key stakeholders",
      "Executive whitepapers and ROI calculators tailored to manufacturing VPs",
      "Hyper-targeted LinkedIn InMail and dynamic feed ad campaigns",
      "Automated HubSpot lead scoring and SDR alert workflows",
    ],
    results: [
      { metric: "$28M", label: "Qualified Pipeline Generated", verifiedBy: "HubSpot CRM Data" },
      { metric: "68%", label: "Target Account Engagement Rate", verifiedBy: "Demandbase" },
      { metric: "14", label: "Closed Enterprise Deals ($1M+ ACV)", verifiedBy: "Apex Executive Board" },
    ],
    overview: [
      "Apex Performance proved how targeted account marketing drives outsized returns for high-ticket industrial technologies.",
    ],
    scope: [
      { number: "01", title: "Intent Signal Mapping", desc: "Scraping surge intent topics to identify accounts actively researching robotics." },
      { number: "02", title: "Custom Account Experiences", desc: "Deploying personalized landing pages displaying the prospect's company logo and ROI." },
      { number: "03", title: "Executive Sales Enablement", desc: "Arming internal sales teams with rich intelligence dossiers on active accounts." },
    ],
    techStack: ["HubSpot Enterprise", "LinkedIn Campaign Manager", "Demandbase", "Bombora", "Clearbit", "Next.js 15"],
    faqs: [
      {
        question: "How are accounts selected for ABM targeting?",
        answer: "We analyze firmographic size, tech stack compatibility, and third-party buyer intent signals to rank high-propensity accounts.",
      },
    ],
    isFeatured: false,
    published: true,
    order: 9,
  },

  // =========================================================================
  // CATEGORY 4: Branding & Graphic Design
  // =========================================================================
  {
    id: "balaji-multipack",
    index: "01",
    title: "Balaji Multipack Brand Identity",
    subtitle: "Corporate Visual Identity & Sustainable Packaging Architecture",
    summary:
      "A comprehensive corporate visual identity system, brand guidelines, and packaging design suite engineered for Balaji Multipack, featuring custom typography, stationery, and tactile product boxing.",
    tagline:
      "End-to-end industrial packaging brand system with cohesive corporate stationery, packaging guidelines, and distinctive green mark identity.",
    category: "Branding & Graphic Design",
    projectType: "Corporate Brand Identity & Packaging Design",
    industry: "Manufacturing & Industrial",
    services: [
      { name: "Branding & Graphic Design", href: "/services" },
      { name: "UI/UX & Digital Product Design", href: "/services" },
    ],
    industries: [
      { name: "Manufacturing & Industrial", href: "/industries/manufacturing" },
      { name: "Retail & E-Commerce", href: "/industries/retail-ecommerce" },
    ],
    image: "/Branding/B1.png",
    galleryImages: [
      "/Branding/B1.png",
      "/Branding/B2.png",
    ],
    videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    client: "Balaji Multipack Pvt. Ltd.",
    clientApproved: true,
    projectDate: "January 2026",
    year: "2026",
    duration: "8 Weeks",
    sla: "Zero Ambiguity Guidelines",
    badge: "BRAND SYSTEM // PACKAGING",
    tags: ["Brand Identity", "Packaging Design", "Stationery", "Corporate Kit", "Brand Guidelines"],
    brief:
      "Balaji Multipack commissioned RnD Technosoft to create an authoritative, recognizable corporate identity and complete brand ecosystem that reflects their leadership in high-grade industrial packaging.",
    challenge:
      "Unifying diverse packaging product lines and corporate touchpoints into a cohesive brand hierarchy that resonates with enterprise procurement directors across national and international markets.",
    solution:
      "Designed a distinctive geometric mark symbolizing precision and quality, supported by a modern typography system, complete stationery suite, customized brand book, and physical packaging prototypes.",
    deliverables: [
      "Primary, secondary, and badge logotypes with comprehensive usage guidelines",
      "Executive stationery suite: letterheads, envelopes, and dual-sided business cards",
      "Official 120-page Brand Identity Guidelines Bible and typography scale",
      "Custom branded product packaging boxes and merchandise collateral",
    ],
    results: [
      { metric: "100%", label: "Brand Asset Consistency", verifiedBy: "Corporate Audit" },
      { metric: "+320%", label: "Brand Recall Among Enterprise B2B Buyers", verifiedBy: "Market Research" },
      { metric: "45+", label: "Branded Collateral Touchpoints Delivered", verifiedBy: "Design Repository" },
    ],
    overview: [
      "Balaji Multipack established a commanding brand presence through a unified visual language engineered for scale and enterprise trust.",
      "The identity reinforces their position as pioneers in high-durability packaging solutions.",
    ],
    quote: {
      text: "RnD Technosoft delivered an exceptional brand identity that elevated our market presence and established our authority across international industrial trade fairs.",
      author: "Managing Director • Balaji Multipack",
    },
    scope: [
      { number: "01", title: "Brandmark & Visual Hierarchy", desc: "Crafting a memorable symbol representing manufacturing precision and dependability." },
      { number: "02", title: "Corporate Stationery & Merchandise", desc: "Unified executive business cards, letterheads, branded apparel, and signage." },
      { number: "03", title: "Packaging Systems & Dielines", desc: "Production-ready packaging dielines, carton graphics, and box architecture." },
    ],
    techStack: ["Adobe Illustrator", "Photoshop", "InDesign", "Figma", "KeyShot 3D"],
    faqs: [
      {
        question: "Are vector files and print-ready formats provided for all collateral?",
        answer: "Yes, all assets are provided in CMYK print-ready vector formats (AI, EPS, PDF) alongside RGB digital tokens for web and screen use.",
      },
    ],
    isFeatured: true,
    published: true,
    order: 10,
  },
  {
    id: "magnum-pack",
    index: "02",
    title: "Magnum Pack Visual Identity System",
    subtitle: "Modern Packaging Enterprise Brand & Executive Collateral",
    summary:
      "An authoritative, cohesive brand system for Magnum Pack featuring deep violet brand tokens, premium stationery, custom merchandising, and executive packaging collateral.",
    tagline:
      "Modern corporate brand identity with custom typography, executive notebooks, stationery suite, and branded apparel touchpoints.",
    category: "Branding & Graphic Design",
    projectType: "Corporate Brand Identity & Stationery System",
    industry: "Manufacturing & Packaging",
    services: [
      { name: "Branding & Graphic Design", href: "/services" },
      { name: "UI/UX & Digital Product Design", href: "/services" },
    ],
    industries: [
      { name: "Manufacturing & Industrial", href: "/industries/manufacturing" },
      { name: "Startups & Professional Services", href: "/industries/startups-professional-services" },
    ],
    image: "/Branding/B2.png",
    galleryImages: [
      "/Branding/B2.png",
      "/Branding/B1.png",
    ],
    client: "Magnum Pack Industries",
    clientApproved: true,
    projectDate: "November 2025",
    year: "2025",
    duration: "6 Weeks",
    sla: "Executive Quality Standard",
    badge: "CORPORATE IDENTITY // SYSTEM",
    tags: ["Brand Identity", "Stationery", "Corporate Kit", "Merchandising", "Figma"],
    brief:
      "Magnum Pack engaged RnD Technosoft to develop an elite, modern corporate identity that portrays sophistication, reliability, and progressive packaging engineering.",
    challenge:
      "Designing a signature color palette and minimalist brandmark that stands out in industrial sectors while looking executive on high-end stationery and digital media.",
    solution:
      "Engineered a distinctive deep violet and clean white identity system with custom lowercase logotype typography, debossed notebooks, premium envelopes, and apparel.",
    deliverables: [
      "Modern corporate logotype with leaf accent detail and color codes",
      "Executive stationery: spiral pads, hardcover notebooks, and formal letterheads",
      "Corporate presentation folders, envelopes, and business cards",
      "Branded merchandise: embroidered caps, pin badges, and office collateral",
    ],
    results: [
      { metric: "100%", label: "Cohesive Corporate Touchpoint Alignment", verifiedBy: "Brand Audit" },
      { metric: "+240%", label: "Executive Client Inquiries Growth", verifiedBy: "CRM Analytics" },
      { metric: "35+", label: "Print & Digital Assets Engineered", verifiedBy: "Design Assets" },
    ],
    overview: [
      "Magnum Pack's new corporate identity delivers a sleek, modern visual expression that elevates client perception at every touchpoint.",
    ],
    scope: [
      { number: "01", title: "Custom Logotype Engineering", desc: "Crafting bespoke letterforms with clean geometric lines and organic accents." },
      { number: "02", title: "Executive Stationery Architecture", desc: "Detailed specifications for paper stocks, soft-touch coatings, and foil stamping." },
      { number: "03", title: "Digital & Physical Brand Guidelines", desc: "Comprehensive rules ensuring consistent application across all channels." },
    ],
    techStack: ["Adobe Illustrator", "InDesign", "Photoshop", "Figma"],
    faqs: [
      {
        question: "Can external vendors reproduce colors accurately using the guidelines?",
        answer: "Yes, our brand manuals provide exact Pantone PMS, CMYK, RGB, and HEX formulas for flawless multi-vendor reproduction.",
      },
    ],
    isFeatured: true,
    published: true,
    order: 11,
  },
  {
    id: "weton-lifestyle",
    index: "03",
    title: "Weton® Product & Packaging Design",
    subtitle: "Modern Lifestyle Hydration Brand Architecture & Cylindrical Canisters",
    summary:
      "Sleek minimalist product branding, cylindrical protective canister packaging, and modern consumer unboxing experience for the Weton® premium insulated drinkware collection.",
    tagline:
      "Minimalist lifestyle product branding with custom cylindrical canister packaging, modern unboxing architecture, and tactile finishes.",
    category: "Branding & Graphic Design",
    projectType: "Product Branding & Structural Packaging",
    industry: "Retail & E-Commerce",
    services: [
      { name: "Branding & Graphic Design", href: "/services" },
      { name: "3D CGI & Spatial Experiences", href: "/services" },
    ],
    industries: [
      { name: "Retail & E-Commerce", href: "/industries/retail-ecommerce" },
      { name: "Food & FMCG", href: "/industries/food-fmcg" },
    ],
    image: "/Branding/B3.png",
    galleryImages: [
      "/Branding/B3.png",
      "/Branding/B4.png",
    ],
    client: "Weton® Hydration Gear",
    clientApproved: true,
    projectDate: "December 2025",
    year: "2025",
    duration: "8 Weeks",
    sla: "Premium Retail Standard",
    badge: "PRODUCT BRANDING // PACKAGING",
    tags: ["Product Branding", "Packaging Design", "Canister Architecture", "Lifestyle", "Unboxing"],
    brief:
      "Weton® partnered with RnD Technosoft to create an unforgettable product branding system and premium retail packaging for their insulated bottle lineup.",
    challenge:
      "Designing packaging that protects the bottle during global shipping while delivering an aspirational, gift-grade unboxing experience for design-conscious consumers.",
    solution:
      "Crafted a bold minimalist brandmark with distinctive red ligature, paired with cylindrical kraft canisters, silver-rimmed tin lids, and matte black presentation gift boxes.",
    deliverables: [
      "Registered brandmark design with distinctive typographic monogram",
      "Rigid cylindrical tube canister packaging dielines with foil accent rings",
      "Matte black presentation gift box with debossed brand logo",
      "Textured premium business card and unboxing insert collateral",
    ],
    results: [
      { metric: "+380%", label: "Retail Shelf Visibility & Pre-Orders", verifiedBy: "Sales Telemetry" },
      { metric: "100%", label: "Eco-Friendly Recyclable Packaging Dielines", verifiedBy: "Packaging Audit" },
      { metric: "4.9/5", label: "Customer Unboxing Experience Rating", verifiedBy: "Consumer Reviews" },
    ],
    overview: [
      "Weton® achieved instant brand recognition in the competitive lifestyle hydration category through refined product branding and sculptural packaging.",
    ],
    scope: [
      { number: "01", title: "Product Identity & Typography", desc: "Distinctive lowercase typography with red ligature detail signifying thermal control." },
      { number: "02", title: "Cylindrical Tube Engineering", desc: "Rigid kraft tubes with curled metal rims for structural protection and luxury feel." },
      { number: "03", title: "Retail Unboxing Architecture", desc: "Multi-layered unboxing flow including gift boxes, care cards, and warranty certificates." },
    ],
    techStack: ["Adobe Illustrator", "Photoshop", "KeyShot", "Rhino 3D"],
    faqs: [
      {
        question: "Are the canister dielines ready for volume manufacturing?",
        answer: "Yes, precision vector dielines with exact bleed, crease, and debossing layers were handed off directly to international tube packaging manufacturers.",
      },
    ],
    isFeatured: true,
    published: true,
    order: 12,
  },
  {
    id: "shah-finserv",
    index: "04",
    title: "Shah Finserv Financial Identity",
    subtitle: "Premium Wealth Advisory Visual Identity, Executive Kit & Collateral",
    summary:
      "A distinguished corporate identity and executive welcome suite for Shah Finserv, incorporating sharp geometric monogram lockups, premium matte black stationery, and digital presence.",
    tagline:
      "Institutional financial brand identity featuring geometric SF monogram, matte black executive welcome box, and corporate merchandise.",
    category: "Branding & Graphic Design",
    projectType: "Financial Brand Identity & Corporate Kit",
    industry: "Financial Services",
    services: [
      { name: "Branding & Graphic Design", href: "/services" },
      { name: "UI/UX & Digital Product Design", href: "/services" },
    ],
    industries: [
      { name: "Startups & Professional Services", href: "/industries/startups-professional-services" },
    ],
    image: "/Branding/B4.png",
    galleryImages: [
      "/Branding/B4.png",
      "/Branding/B3.png",
    ],
    videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    client: "Shah Finserv Capital",
    clientApproved: true,
    projectDate: "October 2025",
    year: "2025",
    duration: "6 Weeks",
    sla: "Zero Compromise Standards",
    badge: "FINANCIAL BRANDING // MONOGRAM",
    tags: ["Financial Services", "Monogram", "Brand Identity", "Executive Kit", "Stationery"],
    brief:
      "Shah Finserv engaged RnD Technosoft to create an institutional, high-trust brand identity that appeals to high-net-worth investors and corporate wealth management clients.",
    challenge:
      "Developing a logo and visual language that projects financial stability, modern digital agility, and prestige without looking generic or dated.",
    solution:
      "Constructed a dynamic geometric 'SF' monogram symbolizing forward momentum, integrated into a luxury matte black and silver aesthetic across luxury corporate gifts and physical assets.",
    deliverables: [
      "Geometric 'SF' monogram and dual-tone corporate wordmark",
      "Executive client onboarding box with magnetic closure",
      "Branded merchandise: ceramic mug, executive metallic pen, and ID lanyard",
      "Mobile screen brand assets and formal corporate correspondence letterheads",
    ],
    results: [
      { metric: "+410%", label: "High-Net-Worth Account Inquiries Lift", verifiedBy: "Advisory Analytics" },
      { metric: "100%", label: "Executive Brand Presentation Score", verifiedBy: "Stakeholder Survey" },
      { metric: "25+", label: "Physical & Digital Collateral Formats Delivered", verifiedBy: "Design Assets" },
    ],
    overview: [
      "Shah Finserv now commands an elite financial presence that instills immediate confidence in prospective wealth management and corporate advisory clients.",
    ],
    scope: [
      { number: "01", title: "Monogram & Geometry Construction", desc: "Precision grid-constructed 'SF' monogram with aerodynamic winged terminals." },
      { number: "02", title: "Executive Welcome Packaging", desc: "Custom foam inserts, foil debossing, and magnetic packaging for new client onboarding." },
      { number: "03", title: "Digital Brand System", desc: "Mobile application splash screens, social graphics, and pitch deck templates." },
    ],
    techStack: ["Adobe Illustrator", "Photoshop", "InDesign", "Figma"],
    faqs: [
      {
        question: "Is the logo scalable for small digital touchpoints like app icons and favicons?",
        answer: "Yes, the monogram was specifically tested and optimized down to 16x16 pixels to retain crisp legibility on smart devices and digital dashboards.",
      },
    ],
    isFeatured: true,
    published: true,
    order: 13,
  },

  // =========================================================================
  // CATEGORY 5: Videography & Photography
  // =========================================================================
  {
    id: "mission-ops",
    index: "13",
    title: "Vanguard High-Altitude Commercial",
    subtitle: "8K Cinema Commercial & High-Altitude Drone Cinematography",
    summary:
      "An award-winning commercial film captured across extreme sub-zero mountain environments in the Swiss Alps, featuring custom FPV drone footage, Dolby Atmos sound mastering, and DaVinci color grading.",
    tagline:
      "High-speed cinematic 8K brand film blending high-altitude FPV aerials, raw macro cinematography, and spatial Dolby Atmos sound design.",
    category: "Videography & Photography",
    projectType: "Commercial Cinematography & Video",
    industry: "Travel & Tourism",
    services: [
      { name: "Commercial Media & Motion", href: "/services" },
      { name: "Branding & Graphic Design", href: "/services" },
    ],
    industries: [
      { name: "Travel & Tourism", href: "/industries/travel-tourism" },
      { name: "Retail & E-Commerce", href: "/industries/retail-ecommerce" },
    ],
    image: "/images/project_forest_film.jpg",
    galleryImages: [
      "/images/project_forest_film.jpg",
      "/images/service_media.jpg",
      "/images/showreel_thumb.jpg",
    ],
    videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    client: "Vanguard Mountain Gear",
    clientApproved: true,
    projectDate: "Q4 2025",
    year: "2025",
    duration: "6 Weeks",
    sla: "Broadcast Grade 8K",
    badge: "CINEMA 8K // DOLBY ATMOS",
    tags: ["Cinematography", "FPV Drones", "8K Film", "Color Grading", "Sound Design"],
    brief:
      "Vanguard needed an emotionally arresting brand film for their winter expedition launch that proves their technical apparel can endure the harshest alpine environments on Earth.",
    challenge:
      "Operating high-draw cinema cameras and lithium drone batteries in minus 25°C blizzards at 3,800 meters altitude with zero margin for equipment failure.",
    solution:
      "Deployed a specialized 4-person alpine camera squad equipped with RED V-Raptor 8K cameras, custom heated FPV drone rigs, and portable satellite data offloaders.",
    deliverables: [
      "90-second hero cinema commercial delivered in 8K DCI and 4K UHD",
      "Suite of 15, 30, and 60-second broadcast cuts with social aspect ratios (9:16, 1:1)",
      "Bespoke Dolby Atmos 7.1.4 spatial audio mix and orchestral sound score",
      "High-resolution still photography library of 180+ commercial campaign stills",
    ],
    results: [
      { metric: "14.8M", label: "Global Organic Broadcast & Web Views", verifiedBy: "Vanguard Media Analytics" },
      { metric: "Cannes Lion", label: "Shortlisted for Craft Cinematography", verifiedBy: "Festival Registry" },
      { metric: "+46%", label: "Spike in Winter Expedition Pre-Orders", verifiedBy: "E-Commerce Revenue Data" },
    ],
    overview: [
      "Vanguard Mountain Gear's commercial film captured the raw spirit of alpine survival with unmatched visual fidelity.",
    ],
    quote: {
      text: "RnD's film crew risked literal blizzards to capture footage that gave our entire global executive board chills.",
      author: "Lars Lindqvist • VP Marketing, Vanguard Global",
    },
    scope: [
      { number: "01", title: "Alpine Production & High-Altitude Logistics", desc: "Helicopter drop-offs and mountain guide safety protocols." },
      { number: "02", title: "FPV Aerial Dynamics", desc: "Proximity mountain flying capturing skiers descending 50-degree couloirs." },
      { number: "03", title: "DaVinci Resolve ACES Color Science", desc: "Custom film-emulation LUTs preserving shadow details in bright snowfields." },
    ],
    techStack: ["RED V-Raptor 8K", "Custom FPV Drones", "DaVinci Resolve Studio", "Pro Tools HD", "Dolby Atmos"],
    faqs: [
      {
        question: "What deliverables are provided for social and television broadcast?",
        answer: "We deliver ProRes 4444 XQ master files, Rec.709 and HDR10 deliverables, and full social cutdowns tailored for TikTok and Instagram.",
      },
    ],
    isFeatured: true,
    published: true,
    order: 13,
  },
  {
    id: "astrafilm-studios",
    index: "14",
    title: "AstraFilm Virtual Production",
    subtitle: "Unreal Engine LED Stage & In-Camera VFX Commercial Production",
    summary:
      "Cutting-edge virtual commercial production utilizing a 180-degree LED volume stage powered by Unreal Engine 5.4, delivering real-time photorealistic environments with zero post-production greenscreen latency.",
    tagline:
      "Next-generation virtual production studio combining Unreal Engine 5, camera tracking, and cinema lighting for commercial product spots.",
    category: "Videography & Photography",
    projectType: "Virtual Production & Commercial Film",
    industry: "Manufacturing & Robotics",
    services: [
      { name: "Commercial Media & Motion", href: "/services" },
      { name: "Spatial & 3D Web Experiences", href: "/services" },
    ],
    industries: [
      { name: "Manufacturing & Robotics", href: "/industries/manufacturing" },
      { name: "Travel & Tourism", href: "/industries/travel-tourism" },
    ],
    image: "/images/service_media.jpg",
    galleryImages: [
      "/images/service_media.jpg",
      "/images/project_forest_film.jpg",
      "/images/agency_team_studio.jpg",
    ],
    videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    client: "Astra Automotive Group",
    clientApproved: true,
    projectDate: "Q3 2025",
    year: "2025",
    duration: "4 Weeks",
    sla: "Zero Post Greenscreen",
    badge: "UNREAL ENGINE 5 // ICVFX",
    tags: ["Virtual Production", "Unreal Engine 5", "LED Volume", "In-Camera VFX", "Automotive"],
    brief:
      "Astra needed to shoot their concept electric vehicle across futuristic neon cyber-cities, desert flats, and mountain tunnels in a single shooting day without leaving our studio stage.",
    challenge:
      "Achieving photorealistic reflections on curved vehicle paint and chrome surfaces that react dynamically to camera movements in real time.",
    solution:
      "Engineered photorealistic 3D Unreal Engine 5 environments mapped to a 40-foot curved LED wall synchronized with OptiTrack camera tracking sensors.",
    deliverables: [
      "3 bespoke 3D Unreal Engine 5.4 virtual environments with interactive lighting controls",
      "Full 1-day shoot resulting in 4 commercial broadcast spots",
      "Real-time in-camera color grading and vehicle lighting synchronization",
      "Final 4K commercial masters delivered within 72 hours of wrap",
    ],
    results: [
      { metric: "-60%", label: "Total Commercial Production Cost", verifiedBy: "Astra Production Audit" },
      { metric: "72 Hours", label: "Shoot Wrap to Final Broadcast Master", verifiedBy: "Studio Telemetry" },
      { metric: "100%", label: "Photorealistic In-Camera Reflections", verifiedBy: "Lead VFX Supervisor" },
    ],
    overview: [
      "AstraFilm Studios proved how virtual production eliminates costly location travel while amplifying creative control.",
    ],
    scope: [
      { number: "01", title: "Unreal Engine 5 Virtual Environments", desc: "Procedural geometry with Nanite and Lumen real-time global illumination." },
      { number: "02", title: "OptiTrack Camera Frustum Tracking", desc: "Sub-millimeter lens position syncing with real-time parallax on the LED wall." },
      { number: "03", title: "Dynamic DMX Studio Light Rigging", desc: "Studio spotlights driven automatically by environment light values." },
    ],
    techStack: ["Unreal Engine 5.4", "OptiTrack", "ARRI Alexa Mini LF", "DaVinci Resolve", "DMX Lighting"],
    faqs: [
      {
        question: "How does virtual production compare in budget to on-location shoots?",
        answer: "By removing flights, hotels, permits, and weather delays, clients typically save 50% to 65% compared to multi-location international film shoots.",
      },
    ],
    isFeatured: false,
    published: true,
    order: 14,
  },
  {
    id: "aura-creative",
    index: "15",
    title: "Aura Botanical Macro Commercial",
    subtitle: "High-Speed Macro Food & Beverage Commercial Cinematography",
    summary:
      "A sensory culinary commercial film combining 1,000 FPS Phantom Flex4K high-speed liquid cinematography, probe macro lenses, and vibrant organic styling for luxury gastronomy.",
    tagline:
      "High-speed 1,000 FPS culinary cinematography capturing the tactile poetry of flavor, liquid collisions, and sensory indulgence.",
    category: "Videography & Photography",
    projectType: "Culinary & Commercial Product Film",
    industry: "Food & FMCG",
    services: [
      { name: "Commercial Media & Motion", href: "/services" },
      { name: "Branding & Graphic Design", href: "/services" },
    ],
    industries: [
      { name: "Food & FMCG", href: "/industries/food-fmcg" },
      { name: "Hospitality & Dining", href: "/industries/hospitality" },
    ],
    image: "/images/project_lifestyle.jpg",
    galleryImages: [
      "/images/project_lifestyle.jpg",
      "/images/service_media.jpg",
      "/images/showreel_thumb.jpg",
    ],
    client: "Aura Organic Botanicals",
    clientApproved: true,
    projectDate: "September 2025",
    year: "2025",
    duration: "5 Weeks",
    sla: "1000 FPS High Speed",
    badge: "PHANTOM 4K // HIGH-SPEED MACRO",
    tags: ["High-Speed Film", "Phantom Flex4K", "Food Styling", "Macro Cinema", "Commercial"],
    brief:
      "Aura required an appetite-whetting sensory commercial that highlights the purity, viscosity, and natural sparkle of their botanical cold-pressed extracts.",
    challenge:
      "Triggering robotic arm movements and high-pressure liquid droplets with millisecond precision under intense studio lighting without wilting fresh botanical ingredients.",
    solution:
      "Utilized a Bolt high-speed camera robot synchronized with a Phantom Flex4K shooting at 1,000 frames per second, paired with low-heat LED continuous fresnels.",
    deliverables: [
      "60-second national TV spot with Dolby 5.1 surround sound",
      "10 micro-cut commercial loops for social media ads and programmatic video",
      "Pack of 75 ultra-high-resolution macro food photography campaign hero stills",
      "Behind-the-scenes documentary short for brand PR distribution",
    ],
    results: [
      { metric: "1,000 FPS", label: "Ultra Slow-Motion Fluid Clarity", verifiedBy: "Phantom Telemetry" },
      { metric: "+240%", label: "Online Store DTC Sales Velocity", verifiedBy: "Aura Financials" },
      { metric: "9.2M", label: "Earned Social Video Impressions", verifiedBy: "Campaign Report" },
    ],
    overview: [
      "Aura Botanical proved that cinematic macro details trigger immense visceral appetite appeal that drives conversions.",
    ],
    scope: [
      { number: "01", title: "Pneumatic Fluid Trigger Engineering", desc: "Microcontroller solenoids timing droplet collisions within 1/1000th of a second." },
      { number: "02", title: "Bolt Cinebot Motion Control", desc: "Repeatable high-speed camera moves tracking splashing liquids in mid-air." },
      { number: "03", title: "Sensory Color Chemistry", desc: "Vibrant organic color grading accentuating fresh botanicals and citrus zest." },
    ],
    techStack: ["Phantom Flex4K", "Bolt High-Speed Cinebot", "Laowa Probe Lenses", "DaVinci Resolve Studio"],
    faqs: [
      {
        question: "Can these high-speed commercials be adapted for digital billboards?",
        answer: "Yes, we export in uncompressed 4K resolution at custom aspect ratios matching Times Square and Piccadilly Circus LED screens.",
      },
    ],
    isFeatured: false,
    published: true,
    order: 15,
  },
];

export function getPortfolioById(id: string): PortfolioProjectDetail | undefined {
  return portfolioData.find(
    (p) =>
      p.id === id ||
      (id === "apex-performance" && p.id === "apex-fintech") ||
      (id === "lumen-sal" && p.id === "balaji-multipack") ||
      (id === "toma-nota" && p.id === "magnum-pack") ||
      (id === "pantone-identity" && p.id === "weton-lifestyle")
  );
}

export function getPublishedPortfolios(): PortfolioProjectDetail[] {
  return portfolioData
    .filter((p) => p.published !== false)
    .sort((a, b) => (a.order || 99) - (b.order || 99));
}

export function getFeaturedPortfolios(): PortfolioProjectDetail[] {
  return portfolioData
    .filter((p) => p.isFeatured && p.published !== false)
    .sort((a, b) => (a.order || 99) - (b.order || 99));
}

export function getPortfoliosByCategory(category: PortfolioCategory): PortfolioProjectDetail[] {
  return portfolioData
    .filter((p) => p.category === category && p.published !== false)
    .sort((a, b) => (a.order || 99) - (b.order || 99));
}

export function getRelatedPortfolios(currentId: string, limit = 3): PortfolioProjectDetail[] {
  const current = getPortfolioById(currentId);
  if (!current) return [];

  const others = portfolioData.filter((p) => p.id !== currentId && p.published !== false);

  // Prioritize same category, then same industry
  const sameCategory = others.filter((p) => p.category === current.category);
  const sameIndustry = others.filter((p) => p.industry === current.industry && p.category !== current.category);
  const remaining = others.filter((p) => p.category !== current.category && p.industry !== current.industry);

  return [...sameCategory, ...sameIndustry, ...remaining].slice(0, limit);
}
