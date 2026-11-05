import { BeforeAfterData } from "@/components/BeforeAfterSection";

export interface ServicePillar {
  title: string;
  desc: string;
  iconName: string;
  metrics: string;
  tech: string[];
}

export interface ServiceProcessStep {
  phase: string;
  title: string;
  duration: string;
  deliverables: string[];
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  id: string;
  index: string;
  title: string;
  highlightText: string;
  tagline: string;
  category: string;
  image: string;
  sla: string;
  avatarIcon: string;
  badge: string;
  tall?: boolean;
  heroStats: {
    label: string;
    value: string;
    desc: string;
  }[];
  overview: string[];
  specs: string[];
  architecturePillars: ServicePillar[];
  techStack: {
    name: string;
    role: string;
    badge: string;
  }[];
  processSteps: ServiceProcessStep[];
  deliverables: {
    item: string;
    detail: string;
    standard: string;
  }[];
  caseStudy: {
    client: string;
    metric: string;
    desc: string;
    tag: string;
  };
  faqs: ServiceFaq[];
  beforeAfter?: BeforeAfterData;
  // ── Optional content overrides for per-service page customization ──
  metaTitle?: string;
  metaDescription?: string;
  deliverablesCardLabel?: string;
  deliverablesCardDescription?: string;
  deliverablesCtaLabel?: string;
  qualityCardLabel?: string;
  quoteAuthor?: string;
  contactCardLabel?: string;
  contactCardHeading?: string;
  contactCardDescription?: string;
  contactCardHref?: string;
  scopeSectionLabel?: string;
  scopeSectionHeading?: string;
  scopeSectionDescription?: string;
  techStackSectionLabel?: string;
}

export const servicesData: ServiceDetail[] = [
  {
    id: "web-cloud",
    metaTitle: "Custom Website Development Services | RND Technosoft",
    index: "[01]",
    title: "CUSTOM WEB DEVELOPMENT",
    highlightText: "ENGINEERED FOR PERFORMANCE",
    tagline: "Strategy-led design. Engineered for performance. Custom web development built for scale.",
    category: "Web & Cloud",
    image: "/images/service_webdev.jpg",
    sla: "STRATEGY-LED DESIGN",
    avatarIcon: "⚡",
    badge: "CUSTOM WEB DEVELOPMENT",
    tall: true,
    heroStats: [
      { value: "Complete", label: "Source Code & Repository Access", desc: "Full ownership with clean Git history" },
      { value: "Technical", label: "Architecture Documentation", desc: "ADRs & API schemas included" },
      { value: "Testing", label: "Deployment & CI/CD Setup", desc: "Automated workflows ready" },
      { value: "Post-Launch", label: "Support & Maintenance Options", desc: "Ongoing technical assistance" },
    ],
    overview: [
      "Modern businesses need more than a standard website. They need powerful digital platforms that deliver exceptional user experiences, support complex business requirements and evolve with changing demands. RND Technosoft specialises in custom website and web application development, combining modern frontend technologies, robust backend engineering and scalable architecture to transform your business ideas into high-performing digital experiences.",
      "From responsive corporate websites and dynamic web applications to enterprise portals and API-driven platforms, we build tailored solutions using technologies like React, Next.js and Node.js — with a focus on performance, functionality, security and long-term flexibility.",
    ],
    specs: [
      "Modern frontend frameworks: React, Next.js, TypeScript",
      "Robust backend technologies: Node.js, REST APIs",
      "Database design: PostgreSQL, MongoDB",
      "Cloud deployment: AWS, Docker, CI/CD automation",
    ],
    architecturePillars: [
      {
        title: "CUSTOM FRONTEND & NEXT.JS DEVELOPMENT",
        desc: "Build responsive, interactive and high-performance web interfaces using modern frontend frameworks. We focus on intuitive navigation, reusable components and consistent experiences across devices.",
        iconName: "Globe",
        metrics: "Frontend Engineering",
        tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      },
      {
        title: "BACKEND ENGINEERING & API INTEGRATION",
        desc: "Develop the application logic that powers your digital platform. From custom business functionality to REST APIs and third-party integrations, we build reliable connections between your website and essential business systems.",
        iconName: "Server",
        metrics: "Backend Engineering",
        tech: ["Node.js", "Express", "REST APIs", "GraphQL"],
      },
      {
        title: "DATABASE DESIGN & APPLICATION ARCHITECTURE",
        desc: "Structure your application around organised data and maintainable architecture. We design database models, optimise queries and develop application foundations suited to your functional and growth requirements.",
        iconName: "Database",
        metrics: "Data & Architecture",
        tech: ["PostgreSQL", "MongoDB", "Prisma", "Redis"],
      },
      {
        title: "CLOUD DEPLOYMENT, SECURITY & OPTIMISATION",
        desc: "Prepare your website or application for production with suitable hosting, deployment workflows, security practices and performance optimisation. Build a stable foundation for ongoing maintenance and future enhancements.",
        iconName: "Shield",
        metrics: "Deployment & Infrastructure",
        tech: ["AWS", "Docker", "CI/CD", "Security Best Practices"],
      },
    ],
    techStack: [
      { name: "Next.js", role: "Framework", badge: "Core" },
      { name: "React", role: "UI Library", badge: "Frontend" },
      { name: "TypeScript", role: "Type Safety", badge: "Language" },
      { name: "Tailwind CSS", role: "Styling", badge: "CSS Framework" },
      { name: "Node.js", role: "Backend Runtime", badge: "Backend" },
      { name: "PostgreSQL", role: "Primary DB", badge: "Database" },
      { name: "MongoDB", role: "NoSQL Database", badge: "Database" },
      { name: "GraphQL", role: "API Query Language", badge: "API" },
      { name: "Docker", role: "Containerization", badge: "DevOps" },
      { name: "REST APIs", role: "API Architecture", badge: "API" },
    ],
    processSteps: [
      {
        phase: "Phase 01",
        title: "Requirements & Planning",
        duration: "Weeks 1 - 2",
        deliverables: [
          "Project scope definition & feature requirements",
          "Technical architecture blueprint",
          "Database schema & data models",
          "Development timeline & milestones",
        ],
      },
      {
        phase: "Phase 02",
        title: "Design & Prototyping",
        duration: "Weeks 3 - 4",
        deliverables: [
          "Interactive design prototypes",
          "Component library & design system",
          "Responsive layout specifications",
          "UX flow & interaction design",
        ],
      },
      {
        phase: "Phase 03",
        title: "Development & Integration",
        duration: "Weeks 5 - 10",
        deliverables: [
          "Frontend & backend development",
          "API development & third-party integrations",
          "Database implementation",
          "Regular progress demos & reviews",
        ],
      },
      {
        phase: "Phase 04",
        title: "Testing, Deployment & Launch",
        duration: "Weeks 11 - 12",
        deliverables: [
          "Quality assurance & testing",
          "Performance optimization",
          "Production deployment",
          "Post-launch support & maintenance",
        ],
      },
    ],
    deliverables: [
      { item: "Complete Source Code & Repository Access", detail: "Full ownership with clean Git history and repository access", standard: "100% Client IP" },
      { item: "Technical & Architecture Documentation", detail: "Complete technical documentation, architecture decision records and API schemas", standard: "Comprehensive" },
      { item: "Testing, Deployment & CI/CD Setup", detail: "Automated testing workflows, deployment pipelines and CI/CD configuration", standard: "Production-Ready" },
      { item: "Post-Launch Support & Maintenance Options", detail: "Ongoing technical support, updates and maintenance packages", standard: "Available" },
    ],
    caseStudy: {
      client: "Engineering Excellence",
      metric: "Quality Assurance",
      desc: "Every powerful digital experience begins with the right engineering. We combine thoughtful architecture, modern technologies and precision development to build web solutions ready for tomorrow's challenges.",
      tag: "QUALITY ASSURANCE & ENGINEERING APPROACH",
    },
    faqs: [
      {
        question: "What is custom website development, and how is it different from a regular website?",
        answer: "Custom website development involves building a website or web application specifically around your business requirements, functionality and user experience. Unlike template-based websites, custom solutions offer greater flexibility, tailored features and room for future expansion.",
      },
      {
        question: "What types of websites and web applications does RND Technosoft develop?",
        answer: "We develop corporate websites, business websites, e-commerce platforms, custom web applications, enterprise portals, customer dashboards and other tailored digital solutions based on your requirements.",
      },
      {
        question: "Which technologies do you use for custom web development?",
        answer: "Our technology stack includes React.js, Next.js, TypeScript, Tailwind CSS, Node.js, PostgreSQL, MongoDB, GraphQL and Docker. We select the appropriate technologies based on your project's functionality and technical requirements.",
      },
      {
        question: "How long does it take to develop a custom website?",
        answer: "The timeline depends on the project's complexity, design requirements, functionality, integrations and content readiness. After understanding your requirements, we provide an estimated project timeline and development milestones.",
      },
      {
        question: "Can you redesign or upgrade my existing website?",
        answer: "Yes. We can modernise existing websites by improving their design, responsiveness, performance, functionality and overall user experience while considering your existing systems and business requirements.",
      },
      {
        question: "Can you integrate APIs and third-party applications into my website?",
        answer: "Yes. We can integrate suitable third-party services, APIs, payment gateways, CRM platforms and other business systems, subject to technical feasibility and integration requirements.",
      },
      {
        question: "Will my custom website be mobile-friendly and SEO-friendly?",
        answer: "We develop responsive websites that adapt to different screen sizes. We also consider technical SEO foundations, including website structure, metadata, page performance and crawlability during development.",
      },
      {
        question: "Will I receive the source code after project completion?",
        answer: "Source code access, repository handover, technical documentation and intellectual property ownership are defined in the project agreement. We clarify these deliverables before development begins.",
      },
      {
        question: "Do you provide website maintenance and technical support after launch?",
        answer: "Yes. We offer maintenance and support options that can include updates, bug fixes, performance improvements, security maintenance and additional functionality, depending on the agreed service scope.",
      },
      {
        question: "How much does custom website development cost?",
        answer: "The cost depends on the website's size, design complexity, required features, integrations and development scope. Contact our team with your project requirements for a customised quotation.",
      },
    ],
    // beforeAfter: {
    //   badge: "ENTERPRISE CLOUD ARCHITECTURE BENCHMARK",
    //   title: "Full-Stack Web & Cloud",
    //   highlightText: "Transformation",
    //   description: "Direct comparative evaluation between a legacy single-instance monolithic server and our modern Next.js 15 multi-region edge mesh built for high concurrency.",
    //   beforeLabel: "Legacy Monolith (Pre-Migration)",
    //   afterLabel: "RnD Edge Next.js 15 (Post-Migration)",
    //   beforeImage: "/images/about_blank_screen.jpg",
    //   afterImage: "/images/service_webdev.jpg",
    //   beforeTagline: "3.8s TTFB, single-server crash risk, 38 Lighthouse",
    //   afterTagline: "Sub-400ms Edge SSR, 99.99% SLA, 99 Lighthouse Score",
    //   metrics: [
    //     {
    //       label: "Time to First Byte (TTFB)",
    //       before: "3.82s",
    //       after: "0.38s",
    //       improvement: "90% Faster",
    //       subtext: "Global Cloudflare Edge SSR cache",
    //       icon: "zap",
    //     },
    //     {
    //       label: "Mobile Lighthouse Score",
    //       before: "38 / 100",
    //       after: "99 / 100",
    //       improvement: "+161% Score",
    //       subtext: "Zero layout shift & sub-100ms hydration",
    //       icon: "gauge",
    //     },
    //     {
    //       label: "E-Commerce / Conversion Rate",
    //       before: "1.2%",
    //       after: "4.8%",
    //       improvement: "+300% Lift",
    //       subtext: "Fast checkout & tactile micro-interactions",
    //       icon: "trending",
    //     },
    //     {
    //       label: "Max Concurrency Load",
    //       before: "250 Req/sec",
    //       after: "10M+ Req/min",
    //       improvement: "Enterprise Grade",
    //       subtext: "PostgreSQL read-replicas & Redis mesh",
    //       icon: "shield",
    //     },
    //   ],
    //   legacyPoints: [
    //     "Monolithic single-point-of-failure server crashing during flash marketing sales",
    //     "Sluggish 3.8s TTFB causing massive mobile abandonment before initial render",
    //     "Cumulative Layout Shift (CLS > 0.35) frustrating users with jumping UI buttons",
    //     "Opaque manual deployments requiring midnight maintenance downtime windows",
    //   ],
    //   modernPoints: [
    //     "Distributed Next.js 15 edge serverless architecture with auto-healing pods",
    //     "Sub-400ms worldwide Time to First Byte with intelligent stale-while-revalidate",
    //     "Zero layout shift (CLS 0.00) with rock-solid responsive typography tokens",
    //     "Zero-downtime blue/green deployments backed by our 99.99% enterprise SLA",
    //   ],
    // },
  },
  {
    id: "seo-search",
    metaTitle: "SEO Services | Search Engine Optimization | RND Technosoft",
    index: "[02]",
    title: "SEARCH ENGINE OPTIMIZATION",
    highlightText: "GET FOUND. GET CHOSEN. GROW ORGANICALLY",
    tagline: "Your customers are searching for products, services and solutions online. Is your business appearing where it matters?",
    category: "Digital Marketing",
    image: "/images/service_marketing.jpg",
    sla: "ORGANIC GROWTH // TECHNICAL SEO // SEARCH VISIBILITY",
    avatarIcon: "🎯",
    badge: "ORGANIC GROWTH // TECHNICAL SEO // SEARCH VISIBILITY",
    heroStats: [
      { value: "SEO Audit", label: "& Keyword Research", desc: "Understanding your website and search opportunities" },
      { value: "On-Page", label: "& Technical SEO Optimisation", desc: "Website and content improvements" },
      { value: "Content", label: "& Link-Building Strategy", desc: "Authority and relevance building" },
      { value: "SEO", label: "Performance Reports", desc: "Tracking organic visibility growth" },
    ],
    overview: [
      "Your customers are searching for products, services and solutions online. Is your business appearing where it matters? A strong search engine presence helps your brand reach the right audience, build credibility and attract relevant organic traffic.",
      "RND Technosoft delivers strategic SEO services that improve your website's search visibility through technical optimisation, keyword research, on-page improvements and content strategies aligned with your business goals. From website audits and keyword planning to technical SEO, content optimisation, local SEO and link-building strategies, we work on the essential factors that help search engines understand your website and connect your business with relevant searches.",
    ],
    specs: [
      "Technical SEO: crawlability, indexing, sitemaps, website performance",
      "On-page SEO: keyword targeting, meta tags, content optimisation",
      "Keyword research & structured data implementation",
      "Off-page SEO: link building, digital authority strategies",
    ],
    architecturePillars: [
      {
        title: "TECHNICAL SEO & WEBSITE OPTIMISATION",
        desc: "Improve your website's technical foundation through crawlability, indexing, XML sitemaps, robots.txt configuration, URL structure, redirects and website performance optimisation.",
        iconName: "Settings",
        metrics: "Technical SEO & Website Audits",
        tech: ["Google Search Console", "XML Sitemaps", "Robots.txt", "Site Speed"],
      },
      {
        title: "ON-PAGE SEO & CONTENT OPTIMISATION",
        desc: "Improve individual website pages through keyword targeting, title tags, meta descriptions, heading structures, internal linking, image optimisation and relevant content improvements.",
        iconName: "FileText",
        metrics: "On-Page SEO & Content Strategy",
        tech: ["Keyword Research", "Meta Tags", "Content", "Internal Linking"],
      },
      {
        title: "KEYWORD RESEARCH & STRUCTURED DATA",
        desc: "Identify relevant search terms and content opportunities while implementing suitable structured data, schema markup and topic-focused content structures to help search engines understand your website.",
        iconName: "Search",
        metrics: "Keyword Research & Schema Implementation",
        tech: ["SEMrush", "Ahrefs", "Schema.org", "Structured Data"],
      },
      {
        title: "OFF-PAGE SEO & DIGITAL AUTHORITY BUILDING",
        desc: "Strengthen your website's online presence through relevant link-building opportunities, quality backlink strategies, digital PR and brand mentions that support your website's authority.",
        iconName: "Award",
        metrics: "Off-Page SEO & Link Building",
        tech: ["Backlink Analysis", "Digital PR", "Brand Mentions", "Authority Building"],
      },
    ],
    techStack: [
      { name: "SEMrush", role: "Keyword & Competitor Research", badge: "SEO Tool" },
      { name: "Ahrefs", role: "Backlink & SEO Analysis", badge: "Analytics" },
      { name: "Google Search Console", role: "Search Performance Monitoring", badge: "Monitoring" },
      { name: "Google Analytics 4", role: "Website Traffic & User Insights", badge: "Analytics" },
      { name: "Google Tag Manager", role: "Website Tracking & Tag Management", badge: "Tracking" },
    ],
    processSteps: [
      {
        phase: "Phase 01",
        title: "SEO Audit & Analysis",
        duration: "Weeks 1 - 2",
        deliverables: [
          "Technical SEO audit and website analysis",
          "Keyword research and competitor analysis",
          "SEO strategy and recommendations",
          "Project roadmap and priorities",
        ],
      },
      {
        phase: "Phase 02",
        title: "Technical & On-Page Optimisation",
        duration: "Weeks 3 - 6",
        deliverables: [
          "Technical SEO improvements implementation",
          "On-page optimisation and meta tag updates",
          "Content optimisation and keyword targeting",
          "Internal linking structure improvements",
        ],
      },
      {
        phase: "Phase 03",
        title: "Content & Authority Building",
        duration: "Weeks 7 - 10",
        deliverables: [
          "Content strategy and creation",
          "Link-building and digital PR outreach",
          "Local SEO optimisation (if applicable)",
          "Schema markup implementation",
        ],
      },
      {
        phase: "Phase 04",
        title: "Monitoring & Continuous Improvement",
        duration: "Ongoing",
        deliverables: [
          "Monthly SEO performance reports",
          "Keyword ranking tracking",
          "Organic traffic analysis",
          "Ongoing optimisation recommendations",
        ],
      },
    ],
    deliverables: [
      { item: "SEO Audit & Keyword Research", detail: "Comprehensive website analysis and search opportunity identification", standard: "Complete Assessment" },
      { item: "On-Page & Technical SEO Optimisation", detail: "Website improvements and technical enhancements", standard: "Implementation Ready" },
      { item: "Content & Link-Building Strategy", detail: "Content optimisation and authority building approaches", standard: "Strategic Plan" },
      { item: "SEO Performance Reports", detail: "Regular reporting on organic visibility and traffic growth", standard: "Monthly Updates" },
    ],
    caseStudy: {
      client: "RND Technosoft",
      metric: "Search Engine Optimization",
      desc: "Sustainable search visibility starts with understanding your audience, creating relevant content and building a technically sound website. We bring these elements together to support long-term organic growth.",
      tag: "OUR ORGANIC GROWTH APPROACH",
    },
    faqs: [
      {
        question: "How long does it take to see results from SEO?",
        answer: "SEO is a long-term strategy, and results depend on your website's current condition, competition, industry and target keywords. Initial improvements may appear within a few weeks, while meaningful organic traffic and ranking growth often take several months. No agency can guarantee a specific ranking or timeline.",
      },
      {
        question: "What SEO services does RND Technosoft provide?",
        answer: "We offer technical SEO, on-page optimisation, keyword research, content optimisation, local SEO, off-page SEO, backlink strategies and performance tracking. Our approach is tailored to your website and business objectives.",
      },
      {
        question: "Can you improve the SEO of my existing website?",
        answer: "Yes. We can review your existing website, identify technical and content-related issues, analyse keyword opportunities and recommend improvements to strengthen its search engine visibility.",
      },
      {
        question: "Do you provide keyword research and competitor analysis?",
        answer: "Yes. We research relevant search terms based on your products, services, audience and industry. We also analyse competitor websites to identify keyword gaps, content opportunities and areas where your website can improve.",
      },
      {
        question: "Do you follow Google's SEO guidelines?",
        answer: "We follow search engine best practices and focus on useful content, technically sound websites, relevant optimisation and ethical link-building strategies. We avoid keyword stuffing and manipulative SEO techniques.",
      },
      {
        question: "Can SEO help my business generate more enquiries and leads?",
        answer: "SEO can help your business reach people actively searching for your products or services. By targeting relevant keywords and improving website experience and content, we aim to attract qualified organic visitors who are more likely to enquire.",
      },
      {
        question: "Do you provide monthly SEO reports?",
        answer: "Reporting can include keyword performance, organic traffic, search visibility, indexing updates, website health and completed optimisation activities. Reporting frequency and metrics can be agreed upon as part of your SEO engagement.",
      },
      {
        question: "Can you work with an existing website or an in-house marketing team?",
        answer: "Yes. We can work with your existing website, collaborate with your internal marketing team and coordinate with developers or content teams to implement SEO recommendations.",
      },
    ],
  },
  {
    id: "mobile-apps",
    metaTitle: "Mobile App Development Services | RND Technosoft",
    index: "[03]",
    title: "MOBILE APP DEVELOPMENT",
    highlightText: "BUILT TO CONNECT. DESIGNED TO PERFORM",
    tagline: "Custom mobile applications that combine engaging user experiences, practical functionality and modern technologies to help businesses connect with customers, simplify services and create meaningful digital experiences.",
    category: "Technology Solutions",
    image: "/images/service_mobile.jpg",
    sla: "ANDROID // iOS // CROSS-PLATFORM",
    avatarIcon: "📱",
    badge: "ANDROID // iOS // CROSS-PLATFORM DEVELOPMENT",
    heroStats: [
      { value: "Custom", label: "Android & iOS Application", desc: "Built for your business needs" },
      { value: "Mobile", label: "Application Source Code", desc: "Complete ownership" },
      { value: "Testing", label: "& Deployment Support", desc: "Ready for launch" },
      { value: "App Store", label: "Submission Assistance", desc: "Subject to platform requirements" },
    ],
    overview: [
      "Your mobile application is more than a digital product — it's a direct connection between your business and its users. Whether you're launching a new idea or expanding your existing digital ecosystem, you need an application that is intuitive, reliable and built around your goals. RND Technosoft develops custom mobile applications that combine engaging user experiences, practical functionality and modern technologies to help businesses connect with customers, simplify services and create meaningful digital experiences.",
      "From Android and iOS applications to cross-platform solutions, we build feature-rich mobile experiences with secure user authentication, API integrations, payment gateway connectivity, push notifications and business-specific functionality.",
    ],
    specs: [
      "Native & cross-platform development: Android, iOS, Flutter, React Native",
      "Backend connectivity: API integration, authentication, real-time updates",
      "Device features: Camera, GPS, biometric auth, payment gateways",
      "Testing & deployment: Quality assurance, app store submission",
    ],
    architecturePillars: [
      {
        title: "NATIVE & CROSS-PLATFORM APP DEVELOPMENT",
        desc: "Develop applications for Android and iOS using suitable native or cross-platform technologies. Build responsive interfaces, smooth navigation and consistent experiences across mobile devices.",
        iconName: "Smartphone",
        metrics: "Mobile Application Development",
        tech: ["Flutter", "React Native", "Swift", "Kotlin"],
      },
      {
        title: "BACKEND CONNECTIVITY & REAL-TIME FUNCTIONALITY",
        desc: "Connect mobile applications with backend systems, databases and APIs. Implement features such as user authentication, data synchronisation, push notifications and real-time updates based on project requirements.",
        iconName: "RefreshCw",
        metrics: "Backend & API Integration",
        tech: ["Node.js", "Firebase", "REST APIs", "WebSockets"],
      },
      {
        title: "DEVICE FEATURES & THIRD-PARTY INTEGRATIONS",
        desc: "Extend application functionality through device capabilities and external services, including camera access, GPS, biometric authentication, Bluetooth connectivity, payment gateways and location-based features where required.",
        iconName: "Cpu",
        metrics: "Device & Service Integration",
        tech: ["GPS", "Camera", "Biometrics", "Payment Gateways"],
      },
      {
        title: "MOBILE APP TESTING & DEPLOYMENT",
        desc: "Prepare applications for launch through functional testing, device compatibility checks, performance reviews and deployment preparation. Get assistance with Google Play Store and Apple App Store submission processes.",
        iconName: "Shield",
        metrics: "Quality Assurance & App Deployment",
        tech: ["Testing", "App Store", "Google Play", "CI/CD"],
      },
    ],
    techStack: [
      { name: "Flutter", role: "Cross-Platform Framework", badge: "Cross-Platform" },
      { name: "React Native", role: "Native-Like Mobile", badge: "Cross-Platform" },
      { name: "Firebase", role: "Backend Services", badge: "Backend" },
      { name: "TypeScript", role: "Type-Safe Development", badge: "Language" },
      { name: "Node.js", role: "Mobile Backend & APIs", badge: "Backend" },
      { name: "Figma", role: "UI/UX Design", badge: "Design" },
      { name: "PostgreSQL", role: "Database Management", badge: "Database" },
      { name: "Swift", role: "Native iOS", badge: "Native" },
      { name: "Kotlin", role: "Native Android", badge: "Native" },
      { name: "REST APIs", role: "API Integration", badge: "Integration" },
    ],
    processSteps: [
      {
        phase: "Phase 01",
        title: "App Planning & Requirements",
        duration: "Weeks 1 - 3",
        deliverables: [
          "Business requirements & feature specifications",
          "Platform selection & technology recommendations",
          "Mobile UI/UX design & prototyping",
          "Technical architecture & project timeline",
        ],
      },
      {
        phase: "Phase 02",
        title: "Interface Development & Design",
        duration: "Weeks 4 - 6",
        deliverables: [
          "Responsive mobile interface development",
          "Navigation structure & user flow",
          "Component library & design system",
          "Interactive prototype reviews",
        ],
      },
      {
        phase: "Phase 03",
        title: "Feature Development & Integration",
        duration: "Weeks 7 - 11",
        deliverables: [
          "Core feature development & functionality",
          "Backend API integration & connectivity",
          "Device feature integration & services",
          "Regular testing & progress demos",
        ],
      },
      {
        phase: "Phase 04",
        title: "Testing, Deployment & Launch",
        duration: "Weeks 12 - 13",
        deliverables: [
          "Quality assurance & device testing",
          "Performance optimization & bug fixes",
          "App store submission assistance",
          "Launch support & post-deployment monitoring",
        ],
      },
    ],
    deliverables: [
      { item: "Custom Android & iOS Application", detail: "Feature-rich mobile application developed for your business requirements", standard: "Platform Ready" },
      { item: "Mobile Application Source Code", detail: "Complete source code with documentation and repository access", standard: "100% Ownership" },
      { item: "Testing & Deployment Support", detail: "Quality assurance testing and deployment preparation", standard: "Launch Ready" },
      { item: "App Store Submission Assistance", detail: "Support with Google Play Store and Apple App Store submission process", standard: "Subject to Platform Requirements" },
    ],
    caseStudy: {
      client: "RND Technosoft",
      metric: "Mobile App Development",
      desc: "Great mobile applications bring technology and user experience together. We focus on building applications that are easy to use, purposeful in functionality and adaptable to evolving business needs.",
      tag: "OUR MOBILE ENGINEERING APPROACH",
    },
    faqs: [
      {
        question: "Should we choose native app development or cross-platform development?",
        answer: "The right approach depends on your application's functionality, target audience, performance requirements and budget. Native development using Swift for iOS or Kotlin for Android offers platform-specific capabilities, while Flutter and React Native can support development across multiple platforms with a shared codebase.",
      },
      {
        question: "Does RND Technosoft develop applications for both Android and iOS?",
        answer: "Yes. We develop mobile applications for Android and iOS using suitable native or cross-platform technologies. The development approach is selected according to your project requirements and intended user experience.",
      },
      {
        question: "What types of mobile applications can you develop?",
        answer: "We develop business applications, e-commerce apps, service booking applications, customer portals, educational apps, on-demand applications and customised mobile solutions based on business requirements.",
      },
      {
        question: "Will my mobile application work across different devices and screen sizes?",
        answer: "Yes. We consider device compatibility, screen sizes, operating system versions and responsive interface behaviour during development and testing to deliver a consistent experience across supported devices.",
      },
      {
        question: "Can you integrate payment gateways, GPS and push notifications?",
        answer: "Yes. Depending on your requirements, we can integrate payment gateways, location services, push notifications, camera functionality, biometric authentication and other suitable third-party services.",
      },
      {
        question: "Do you assist with Google Play Store and Apple App Store publishing?",
        answer: "Yes. We can assist with app preparation, build configuration, submission requirements and the publishing process for Google Play and Apple App Store. Final approval is subject to each platform's review policies.",
      },
      {
        question: "How do you ensure mobile application security?",
        answer: "We consider security throughout development, including appropriate authentication, access controls, secure API communication, data handling and application testing. Specific security requirements depend on the application's functionality and the data it processes.",
      },
      {
        question: "How long does it take to develop a mobile application?",
        answer: "The timeline depends on the application's complexity, number of features, design requirements, integrations and testing. After reviewing your project scope, we provide an estimated development schedule and milestones.",
      },
      {
        question: "Can you upgrade or add features to an existing mobile application?",
        answer: "Yes. We can assess your existing application and discuss improvements such as UI redesign, new features, API integrations, performance optimisation, bug fixes and compatibility updates.",
      },
      {
        question: "How much does mobile app development cost?",
        answer: "The cost depends on the platform, application complexity, features, integrations, design and development requirements. Share your project brief with our team to receive a customised quotation.",
      },
    ],
  },
  {
    id: "ecommerce-platforms",
    metaTitle: "E-commerce Website Development Services | RND Technosoft",
    index: "[04]",
    title: "E-COMMERCE WEBSITE DEVELOPMENT",
    highlightText: "BUILT TO SELL. DESIGNED TO GROW",
    tagline: "Customised e-commerce websites and online stores designed around your products, customers and business goals. We combine intuitive storefront design, powerful functionality and modern technologies to create engaging digital shopping experiences.",
    category: "Technology Solutions",
    image: "/images/service_ecommerce.jpg",
    sla: "E-COMMERCE // ONLINE STORES // DIGITAL COMMERCE",
    avatarIcon: "🛍️",
    badge: "E-COMMERCE // ONLINE STORES // DIGITAL COMMERCE",
    heroStats: [
      { value: "Custom", label: "E-commerce Storefront", desc: "Tailored to your products and brand" },
      { value: "Product", label: "Catalogue & Shopping Cart", desc: "Complete shopping functionality" },
      { value: "Payment", label: "Gateway & Order Integration", desc: "Secure transaction processing" },
      { value: "Testing", label: "& Deployment Support", desc: "Launch-ready online store" },
    ],
    overview: [
      "Your online store is more than a digital catalogue. It's where customers discover your products, explore your brand and make purchasing decisions. A successful e-commerce website needs to deliver a seamless shopping experience while supporting your business operations. RND Technosoft develops customised e-commerce websites and online stores designed around your products, customers and business goals. We combine intuitive storefront design, powerful functionality and modern technologies to create engaging digital shopping experiences.",
      "From custom e-commerce website development and Shopify-based stores to product catalogues, shopping carts, secure payment gateway integrations and order management systems, we build digital commerce solutions that help businesses establish and expand their online presence.",
    ],
    specs: [
      "Custom e-commerce storefront development with intuitive navigation",
      "Product catalogue & inventory management functionality",
      "Shopping cart & secure checkout with payment gateway integration",
      "Order management & business system integrations",
    ],
    architecturePillars: [
      {
        title: "CUSTOM E-COMMERCE STOREFRONT DEVELOPMENT",
        desc: "Build visually engaging, responsive online stores with intuitive navigation, organised product categories and customised shopping experiences that reflect your brand identity.",
        iconName: "ShoppingBag",
        metrics: "Storefront & UI Development",
        tech: ["Next.js", "React.js", "Tailwind CSS", "TypeScript"],
      },
      {
        title: "PRODUCT CATALOGUE & INVENTORY MANAGEMENT",
        desc: "Organise products, categories, variants, pricing and stock information through structured product management functionality. Create an easier shopping experience for customers and simpler store management for businesses.",
        iconName: "Package",
        metrics: "Product & Inventory Management",
        tech: ["PostgreSQL", "Product APIs", "Inventory Systems"],
      },
      {
        title: "SHOPPING CART & SECURE CHECKOUT INTEGRATION",
        desc: "Develop streamlined shopping carts and checkout experiences with payment gateway integration, shipping calculations, discount management and order confirmation functionality.",
        iconName: "CreditCard",
        metrics: "Checkout & Payment Integration",
        tech: ["Payment Gateways", "Stripe", "Shipping APIs"],
      },
      {
        title: "ORDER MANAGEMENT & BUSINESS INTEGRATIONS",
        desc: "Connect your online store with suitable CRM, ERP, inventory, shipping and third-party business systems. Simplify order processing, fulfilment workflows and essential store operations.",
        iconName: "RefreshCw",
        metrics: "E-commerce Integration & Automation",
        tech: ["CRM", "ERP", "Order Management", "APIs"],
      },
    ],
    techStack: [
      { name: "Shopify Plus", role: "Enterprise E-commerce Platform", badge: "Platform" },
      { name: "Next.js", role: "Modern & Headless Storefronts", badge: "Framework" },
      { name: "React.js", role: "Interactive Shopping", badge: "Frontend" },
      { name: "TypeScript", role: "Structured Development", badge: "Language" },
      { name: "Tailwind CSS", role: "Responsive Storefront UI", badge: "CSS" },
      { name: "Node.js", role: "Backend & E-commerce APIs", badge: "Backend" },
      { name: "PostgreSQL", role: "Product & Order Data", badge: "Database" },
      { name: "Redis", role: "Caching & Sessions", badge: "Cache" },
      { name: "Payment Gateways", role: "Secure Transactions", badge: "Payments" },
      { name: "REST APIs", role: "System Integration", badge: "Integration" },
    ],
    processSteps: [
      {
        phase: "Phase 01",
        title: "E-commerce Planning & Requirements",
        duration: "Weeks 1 - 2",
        deliverables: [
          "Business requirements & store objectives",
          "Product catalogue structure & organization",
          "Platform selection & technology recommendations",
          "Storefront design & user experience planning",
        ],
      },
      {
        phase: "Phase 02",
        title: "Storefront Design & Development",
        duration: "Weeks 3 - 6",
        deliverables: [
          "Custom storefront UI/UX design",
          "Responsive layout & navigation structure",
          "Product page templates & category layouts",
          "Shopping cart & checkout interface",
        ],
      },
      {
        phase: "Phase 03",
        title: "Integration & Functionality Development",
        duration: "Weeks 7 - 10",
        deliverables: [
          "Product catalogue & inventory setup",
          "Payment gateway integration & testing",
          "Shipping & tax calculation configuration",
          "Business system integrations & automation",
        ],
      },
      {
        phase: "Phase 04",
        title: "Testing, Launch & Support",
        duration: "Weeks 11 - 12",
        deliverables: [
          "Comprehensive testing & quality assurance",
          "Performance optimization & security review",
          "Store launch & deployment",
          "Training & post-launch support",
        ],
      },
    ],
    deliverables: [
      { item: "Custom E-commerce Storefront", detail: "Fully functional online store with responsive design and intuitive navigation", standard: "Launch Ready" },
      { item: "Product Catalogue & Shopping Cart", detail: "Complete product management and shopping functionality", standard: "Feature Complete" },
      { item: "Payment Gateway & Order Integration", detail: "Secure payment processing and order management system", standard: "Secure & Tested" },
      { item: "Testing & Deployment Support", detail: "Quality assurance, performance optimization and launch support", standard: "Production Ready" },
    ],
    caseStudy: {
      client: "RND Technosoft",
      metric: "E-commerce Website Development",
      desc: "A great online store makes shopping effortless. We bring design, functionality and technology together to create e-commerce experiences that connect products with people.",
      tag: "OUR DIGITAL COMMERCE APPROACH",
    },
    faqs: [
      {
        question: "Why should we choose headless commerce over a standard Shopify theme?",
        answer: "A standard Shopify theme is suitable for many businesses looking to launch and manage an online store efficiently. Headless commerce separates the storefront from the commerce backend, offering greater flexibility over design, functionality and integrations. The right approach depends on your business requirements, budget and technical needs.",
      },
      {
        question: "Can you migrate our existing online store, products and customer data to a new platform?",
        answer: "Yes. We can assess your existing e-commerce platform and plan the migration of available product information, categories, customer records and order data, depending on the source platform and data access. Migration scope, data mapping and validation are agreed upon before implementation.",
      },
      {
        question: "What e-commerce platforms do you work with?",
        answer: "We can develop e-commerce websites using suitable technologies and platforms such as Shopify, WooCommerce and custom development frameworks. Platform selection depends on your product catalogue, business model, integrations and operational requirements.",
      },
      {
        question: "Can you build a fully customised e-commerce website?",
        answer: "Yes. We develop customised online stores with tailored storefront designs, product pages, category structures, shopping carts, checkout experiences and business-specific functionality to match your brand and requirements.",
      },
      {
        question: "Can you integrate payment gateways into our online store?",
        answer: "Yes. We can integrate suitable payment gateways to support online transactions. The available options depend on your target market, preferred payment methods, platform compatibility and payment provider requirements.",
      },
      {
        question: "Can you integrate inventory, shipping and order management systems?",
        answer: "Yes. We can connect your online store with suitable inventory management, shipping, CRM, ERP and order management systems through available APIs or integration methods. This helps streamline store operations and information flow.",
      },
      {
        question: "Will our e-commerce website be mobile-friendly and SEO-ready?",
        answer: "We develop responsive e-commerce websites designed to work across desktop, tablet and mobile devices. We can also implement SEO-friendly page structures, metadata, product information organisation and technical SEO considerations to support search engine visibility.",
      },
      {
        question: "Can we manage products, prices and orders ourselves after launch?",
        answer: "Yes. We can provide an administrative interface or platform dashboard that allows authorised users to manage products, pricing, inventory, orders, categories and other store information, depending on the selected solution.",
      },
      {
        question: "How long does it take to develop an e-commerce website?",
        answer: "The timeline depends on the platform, number of products, design complexity, required functionality, third-party integrations and content readiness. After understanding your requirements, we provide a project estimate and development milestones.",
      },
      {
        question: "How much does e-commerce website development cost?",
        answer: "The cost depends on the platform, design requirements, product catalogue size, custom features, integrations and overall project scope. Contact our team with your requirements to receive a customised quotation.",
      },
    ],
  },
  {
    id: "brand-identity",
    index: "[05]",
    title: "BUILD A DISTINCTIVE BRAND",
    highlightText: "CREATE A LASTING IMPRESSION",
    tagline: "A strong brand is more than a logo or visual identity. It is the way your business communicates, connects with its audience and stands apart in a competitive marketplace.",
    category: "Branding & Design",
    image: "/images/service_branding.jpg",
    sla: "BRAND STRATEGY // IDENTITY DEVELOPMENT",
    avatarIcon: "✨",
    badge: "BRAND STRATEGY // IDENTITY DEVELOPMENT",
    heroStats: [
      { value: "Brand", label: "Strategy & Positioning", desc: "Clear brand direction and purpose" },
      { value: "Logo", label: "& Visual Identity Design", desc: "Distinctive brand visuals" },
      { value: "Brand Colour", label: "& Typography System", desc: "Consistent visual language" },
      { value: "Brand", label: "Guidelines & Identity Assets", desc: "Complete brand toolkit" },
    ],
    overview: [
      "A strong brand is more than a logo or visual identity. It is the way your business communicates, connects with its audience and stands apart in a competitive marketplace. We help businesses define their identity through thoughtful brand strategy, creative direction and consistent visual communication.",
      "From brand positioning and naming to logo development, visual identity and brand guidelines, RND Technosoft brings strategy and creativity together to build cohesive brand experiences that grow with your business.",
    ],
    specs: [
      "Brand strategy: positioning, personality, target audience analysis",
      "Visual identity: logo design, colour palettes, typography",
      "Brand communication: voice, messaging, tone guidelines",
      "Brand guidelines: usage rules, applications, asset delivery",
    ],
    architecturePillars: [
      {
        title: "BRAND DISCOVERY & POSITIONING",
        desc: "Understand your business, target audience, market landscape and competitors to establish a clear brand direction, personality and positioning strategy.",
        iconName: "Compass",
        metrics: "Brand Strategy & Planning",
        tech: ["Brand Research", "Positioning", "Competitor Analysis", "Strategy"],
      },
      {
        title: "BRAND IDENTITY & LOGO DEVELOPMENT",
        desc: "Create distinctive logo concepts, colour palettes, typography and visual elements that reflect your brand's personality and communicate its values.",
        iconName: "Sparkles",
        metrics: "Visual Identity Design",
        tech: ["Logo Design", "Colour Systems", "Typography", "Visual Elements"],
      },
      {
        title: "BRAND VOICE & COMMUNICATION",
        desc: "Define your brand messaging, tone of voice, core values and communication style to maintain a consistent identity across marketing channels.",
        iconName: "MessageSquare",
        metrics: "Brand Communication",
        tech: ["Brand Messaging", "Tone of Voice", "Communication", "Values"],
      },
      {
        title: "BRAND GUIDELINES & APPLICATIONS",
        desc: "Develop brand guidelines and practical identity assets covering logo usage, typography, colours and visual applications across digital and print materials.",
        iconName: "Book",
        metrics: "Brand Standards & Assets",
        tech: ["Brand Guidelines", "Asset Library", "Applications", "Standards"],
      },
    ],
    techStack: [
      { name: "Adobe Illustrator", role: "Logo & Vector Identity Design", badge: "Design" },
      { name: "Adobe Photoshop", role: "Image Editing & Visual Assets", badge: "Creative" },
      { name: "Figma", role: "Brand Systems & Design Collaboration", badge: "Collaboration" },
      { name: "Adobe InDesign", role: "Brand Guidelines & Editorial Layouts", badge: "Layout" },
      { name: "Canva", role: "Marketing & Brand Collateral", badge: "Templates" },
      { name: "Pinterest", role: "Visual Research & Creative Inspiration", badge: "Research" },
    ],
    processSteps: [
      {
        phase: "Phase 01",
        title: "Brand Discovery & Research",
        duration: "Weeks 1 - 2",
        deliverables: [
          "Business and audience understanding",
          "Competitor and market analysis",
          "Brand positioning and personality definition",
          "Strategic brand direction",
        ],
      },
      {
        phase: "Phase 02",
        title: "Brand Identity Development",
        duration: "Weeks 3 - 5",
        deliverables: [
          "Logo concepts and design exploration",
          "Colour palette and typography selection",
          "Visual identity elements and system",
          "Brand identity refinement",
        ],
      },
      {
        phase: "Phase 03",
        title: "Brand Communication & Voice",
        duration: "Weeks 6 - 7",
        deliverables: [
          "Brand messaging and positioning statements",
          "Tone of voice guidelines",
          "Communication style and values",
          "Brand narrative development",
        ],
      },
      {
        phase: "Phase 04",
        title: "Brand Guidelines & Asset Delivery",
        duration: "Weeks 8 - 9",
        deliverables: [
          "Comprehensive brand guidelines document",
          "Complete brand asset library",
          "Application examples and templates",
          "Brand toolkit and resources",
        ],
      },
    ],
    deliverables: [
      { item: "Brand Strategy & Positioning", detail: "Clear brand direction, positioning and personality definition", standard: "Strategic Foundation" },
      { item: "Logo & Visual Identity Design", detail: "Distinctive logo, colour palette, typography and visual elements", standard: "Complete Identity" },
      { item: "Brand Colour & Typography System", detail: "Coordinated colour palettes and typography guidelines", standard: "Visual Consistency" },
      { item: "Brand Guidelines & Identity Assets", detail: "Comprehensive guidelines document and complete asset library", standard: "Brand Toolkit" },
    ],
    caseStudy: {
      client: "RND Technosoft",
      metric: "Brand Strategy",
      desc: "A successful brand brings together purpose, personality and visual consistency. Our approach combines strategic thinking with creative execution to develop identities that communicate clearly and create meaningful brand recognition.",
      tag: "BRAND QUALITY & DESIGN FRAMEWORK",
    },
    faqs: [
      {
        question: "What is included in brand strategy and development?",
        answer: "Brand strategy includes understanding your business, defining brand positioning, creating visual identity (logo, colours, typography), establishing brand voice and developing comprehensive brand guidelines.",
      },
      {
        question: "How long does brand development take?",
        answer: "A complete brand identity project typically takes 8-10 weeks, depending on the scope, complexity, number of revisions and feedback cycles. Timelines are discussed during project planning.",
      },
      {
        question: "Do you create just logos, or complete brand identities?",
        answer: "We develop complete brand identities including strategy, positioning, logo design, colour systems, typography, brand voice, guidelines and asset libraries. Logo-only services can also be discussed.",
      },
      {
        question: "Can you rebrand an existing business?",
        answer: "Yes. We can refresh existing brands or develop complete rebrands based on your business evolution, market changes or strategic repositioning requirements.",
      },
      {
        question: "What file formats do you provide?",
        answer: "You receive logo files in multiple formats including vector files (AI, EPS, SVG), high-resolution PNG, PDF and source files, suitable for web, print and various applications.",
      },
      {
        question: "Do you provide brand guidelines?",
        answer: "Yes. We create comprehensive brand guidelines covering logo usage, colour specifications, typography, visual applications, tone of voice and examples of correct brand implementation.",
      },
      {
        question: "Can you help with brand naming?",
        answer: "Brand naming services can be discussed as part of the brand strategy phase. This includes name ideation, availability checks and trademark considerations, depending on project scope.",
      },
      {
        question: "How many logo concepts do you present?",
        answer: "We typically present 2-3 distinct logo concepts based on the agreed brand direction. The number of concepts and revision rounds are defined during project scoping.",
      },
    ],
    // ── Per-service page content overrides ──
    metaTitle: "Brand Strategy & Development Services | RND Technosoft",
    metaDescription:
      "Build a memorable brand with RND Technosoft. Explore brand strategy, brand positioning, logo design, visual identity development and brand guidelines.",
    deliverablesCardLabel: "BRAND DEVELOPMENT // DELIVERABLES",
    deliverablesCardDescription:
      "A structured brand development approach that gives your business a clear identity, consistent messaging and a visual direction across customer touchpoints.",
    deliverablesCtaLabel: "REQUEST A BRAND STRATEGY",
    qualityCardLabel: "BRAND QUALITY & DESIGN FRAMEWORK",
    quoteAuthor: "RND Technosoft • Brand Strategy & Development",
    contactCardLabel: "BRAND CONSULTATION",
    contactCardHeading: "SPEAK WITH OUR CREATIVE TEAM",
    contactCardDescription:
      "Let's discuss your brand vision, business positioning and identity development requirements.",
    contactCardHref: "/contact-us?intent=branding",
    scopeSectionLabel: "BRAND IDENTITY // EXECUTION MATRIX",
    scopeSectionHeading: "FROM BRAND VISION TO A DISTINCTIVE IDENTITY.",
    scopeSectionDescription:
      "We combine business understanding, creative direction and visual design to build a brand identity that communicates your value consistently.",
    techStackSectionLabel: "CREATIVE DIRECTION // DESIGN STACK",
  },
  {
    id: "social-media",
    metaTitle: "Social Media Marketing Services | RND Technosoft",
    index: "[06]",
    title: "SOCIAL MEDIA MARKETING",
    highlightText: "STRATEGY & BRAND GROWTH",
    tagline: "Building a strong social media presence takes more than posting regularly. It requires a clear strategy, engaging creatives, consistent communication and content that connects your brand with the right audience.",
    category: "Digital Marketing",
    image: "/images/service_social.jpg",
    sla: "SOCIAL-FIRST // BRAND & COMMUNITY GROWTH",
    avatarIcon: "🌐",
    badge: "SOCIAL-FIRST // BRAND & COMMUNITY GROWTH",
    heroStats: [
      { value: "Social Media", label: "Strategy & Monthly Content Calendar", desc: "Planning and content organization" },
      { value: "Creative", label: "Posts, Reels & Stories", desc: "Engaging visual content" },
      { value: "Platform", label: "Management & Publishing", desc: "Consistent brand presence" },
      { value: "Community", label: "Engagement & Performance Reports", desc: "Audience interaction and insights" },
    ],
    overview: [
      "Building a strong social media presence takes more than posting regularly. It requires a clear strategy, engaging creatives, consistent communication and content that connects your brand with the right audience.",
      "At RND Technosoft, we plan, create and manage social media campaigns across Instagram, Facebook, LinkedIn and other relevant platforms. From content calendars and graphic design to short-form videos, community engagement and performance analysis, we help brands build meaningful digital connections.",
    ],
    specs: [
      "Social media strategy: content planning, platform selection",
      "Creative production: graphics, Reels, Stories, videos",
      "Platform management: publishing, scheduling, monitoring",
      "Community engagement: audience interaction, performance tracking",
    ],
    architecturePillars: [
      {
        title: "SOCIAL MEDIA CONTENT CREATION",
        desc: "Develop engaging social media content through creative graphics, carousels, short-form videos, Reels, Stories and captions aligned with your brand identity and content strategy.",
        iconName: "Image",
        metrics: "Content Planning & Creative Production",
        tech: ["Figma", "Adobe Photoshop", "Canva", "Video Editing"],
      },
      {
        title: "PLATFORM STRATEGY & ACCOUNT MANAGEMENT",
        desc: "Build platform-specific content strategies, monthly calendars and publishing schedules for Instagram, Facebook, LinkedIn and other relevant social channels.",
        iconName: "Calendar",
        metrics: "Social Strategy & Platform Management",
        tech: ["Meta Business Suite", "LinkedIn", "Content Calendars", "Scheduling Tools"],
      },
      {
        title: "COMMUNITY MANAGEMENT & AUDIENCE ENGAGEMENT",
        desc: "Strengthen relationships with your audience through comment and message management, engagement activities, brand interactions and consistent community communication.",
        iconName: "Users",
        metrics: "Audience Engagement & Community Building",
        tech: ["Social Media Monitoring", "Community Management", "Response Systems"],
      },
      {
        title: "PAID SOCIAL CAMPAIGNS & PERFORMANCE ANALYTICS",
        desc: "Plan and manage targeted social media advertising campaigns, monitor campaign performance, analyse audience insights and identify opportunities to improve engagement and conversions.",
        iconName: "BarChart3",
        metrics: "Social Advertising & Performance Tracking",
        tech: ["Meta Ads Manager", "Google Analytics 4", "HubSpot", "Analytics"],
      },
    ],
    techStack: [
      { name: "Meta Ads Manager", role: "Social Media Advertising & Campaign Management", badge: "Advertising" },
      { name: "Figma", role: "Social Media Creative & Visual Design", badge: "Design" },
      { name: "Adobe Photoshop", role: "Graphic Design & Image Editing", badge: "Creative" },
      { name: "Google Analytics 4", role: "Website Traffic & Campaign Performance Analysis", badge: "Analytics" },
      { name: "HubSpot", role: "Lead Management & Marketing Automation", badge: "CRM" },
    ],
    processSteps: [
      {
        phase: "Phase 01",
        title: "Social Media Audit & Strategy",
        duration: "Weeks 1 - 2",
        deliverables: [
          "Social media audit and competitor analysis",
          "Platform and audience strategy",
          "Content pillars and brand voice guidelines",
          "Monthly content calendar planning",
        ],
      },
      {
        phase: "Phase 02",
        title: "Content Creation & Production",
        duration: "Weeks 3 - 4",
        deliverables: [
          "Social media graphics and visual design",
          "Reel and Story concepts and production",
          "Copywriting and caption development",
          "Content approval and revisions",
        ],
      },
      {
        phase: "Phase 03",
        title: "Publishing & Community Management",
        duration: "Ongoing",
        deliverables: [
          "Content scheduling and publishing",
          "Community engagement and interaction",
          "Comment and message management",
          "Real-time content adjustments",
        ],
      },
      {
        phase: "Phase 04",
        title: "Performance Review & Optimization",
        duration: "Monthly",
        deliverables: [
          "Monthly performance reports",
          "Audience insights and engagement analysis",
          "Content strategy refinements",
          "Campaign optimization recommendations",
        ],
      },
    ],
    deliverables: [
      { item: "Social Media Strategy & Monthly Content Calendar", detail: "Structured content planning and publishing schedule", standard: "Monthly Planning" },
      { item: "Creative Posts, Reels & Stories", detail: "Engaging visual content and social media creatives", standard: "Regular Production" },
      { item: "Platform Management & Publishing", detail: "Consistent content publishing and account management", standard: "Ongoing Management" },
      { item: "Community Engagement & Performance Reports", detail: "Audience interaction and monthly performance insights", standard: "Monthly Reporting" },
    ],
    caseStudy: {
      client: "RND Technosoft",
      metric: "Social Media Strategy",
      desc: "Great social media is not just about being seen. It's about creating content that makes people stop, connect, engage and remember your brand.",
      tag: "OUR SOCIAL MEDIA APPROACH",
    },
    faqs: [
      {
        question: "Do you create social media content, or do we need to provide it?",
        answer: "We can handle content planning and creative production, including graphics, carousels, captions, Reels and Stories. We can also work with photographs, videos and brand assets supplied by your team.",
      },
      {
        question: "Which social media platforms do you manage?",
        answer: "We provide social media management for platforms such as Instagram, Facebook and LinkedIn. The platform selection depends on your business type, target audience and marketing objectives.",
      },
      {
        question: "Do you create Reels and short-form videos?",
        answer: "Yes. We can assist with Reel concepts, scripting, creative direction, editing and short-form video production. Filming arrangements can be discussed based on your requirements and project scope.",
      },
      {
        question: "How often will you post on our social media accounts?",
        answer: "Posting frequency depends on your selected package and content strategy. We develop a monthly content calendar outlining planned posts, Reels, Stories and publishing schedules.",
      },
      {
        question: "Can you manage comments, messages and audience engagement?",
        answer: "Yes. Community management can include monitoring comments, managing interactions and supporting audience engagement. The scope and response timings are agreed upon before the engagement begins.",
      },
      {
        question: "Do you provide paid social media advertising?",
        answer: "Yes. We can plan and manage paid campaigns through platforms such as Meta Ads. Advertising objectives, audience targeting, campaign budgets and performance reporting are discussed according to your business goals. Ad spend is separate from management fees unless agreed otherwise.",
      },
      {
        question: "How do you measure social media marketing performance?",
        answer: "We track relevant performance indicators such as reach, impressions, engagement, follower trends, profile visits, website traffic and campaign results. Reports help evaluate performance and identify opportunities for improvement.",
      },
      {
        question: "How long does it take to see results from social media marketing?",
        answer: "Results depend on your industry, audience, content quality, consistency, competition and advertising budget. Building brand awareness and an engaged audience takes time. We continuously review performance and refine the strategy based on insights.",
      },
    ],
  },
  {
    id: "ppc-advertising",
    metaTitle: "PPC & Paid Advertising Services | RND Technosoft",
    index: "[07]",
    title: "PERFORMANCE PPC & PAID ADVERTISING",
    highlightText: "BUILT FOR GROWTH",
    tagline: "Every advertising investment should have a clear objective. We create data-driven paid advertising campaigns designed to reach the right audience, attract qualified prospects and turn clicks into meaningful business opportunities.",
    category: "Digital Marketing",
    image: "/images/service_marketing.jpg",
    sla: "PAID MEDIA // PERFORMANCE MARKETING",
    avatarIcon: "📊",
    badge: "PAID MEDIA // PERFORMANCE MARKETING",
    heroStats: [
      { value: "Paid Campaign", label: "Strategy & Setup", desc: "Campaign planning and configuration" },
      { value: "Audience", label: "Targeting & Segmentation", desc: "Reaching relevant prospects" },
      { value: "Ad Creatives", label: "& Copy Development", desc: "Compelling ad content" },
      { value: "Conversion", label: "Tracking & Performance Reports", desc: "Data-driven insights" },
    ],
    overview: [
      "Every advertising investment should have a clear objective. We create data-driven paid advertising campaigns designed to reach the right audience, attract qualified prospects and turn clicks into meaningful business opportunities.",
      "From Google Search and Display Ads to Meta campaigns and remarketing, we manage the complete advertising journey — including campaign strategy, audience segmentation, creative development, budget planning and performance optimization.",
    ],
    specs: [
      "Campaign strategy: Google Ads, Meta Ads, platform-specific planning",
      "Audience targeting: demographic, geographic, behavioural segmentation",
      "Creative development: ad copy, graphics, video concepts",
      "Performance tracking: conversion monitoring, ROAS optimization",
    ],
    architecturePillars: [
      {
        title: "STRATEGIC CAMPAIGN ARCHITECTURE",
        desc: "Build structured advertising campaigns around business objectives, customer intent, keyword research, audience insights and platform-specific strategies.",
        iconName: "Target",
        metrics: "Campaign Strategy & Planning",
        tech: ["Google Ads", "Meta Ads Manager", "Campaign Planning", "Strategy"],
      },
      {
        title: "PRECISION AUDIENCE TARGETING",
        desc: "Reach relevant audiences through demographic, geographic, interest-based and behavioural targeting, supported by custom and remarketing audiences.",
        iconName: "Users",
        metrics: "Audience Targeting & Segmentation",
        tech: ["Audience Insights", "Custom Audiences", "Remarketing", "Segmentation"],
      },
      {
        title: "HIGH-CONVERTING AD CREATIVES",
        desc: "Develop compelling ad copy, graphics, video concepts and calls to action that communicate your value proposition and encourage audience engagement.",
        iconName: "Image",
        metrics: "Creative Development & Copywriting",
        tech: ["Canva", "Adobe", "Copywriting", "Video Production"],
      },
      {
        title: "CONVERSION TRACKING & ROAS OPTIMIZATION",
        desc: "Monitor campaign performance through conversion tracking, analytics and reporting. Identify improvement opportunities and optimize campaigns based on available performance data.",
        iconName: "BarChart3",
        metrics: "Performance Tracking & Optimization",
        tech: ["Google Analytics 4", "Conversion Tracking", "Performance Analysis"],
      },
    ],
    techStack: [
      { name: "Google Ads", role: "Search, Display & YouTube Advertising", badge: "Advertising" },
      { name: "Meta Ads Manager", role: "Facebook & Instagram Campaigns", badge: "Social Ads" },
      { name: "Google Analytics 4", role: "Website Traffic & Conversion Analysis", badge: "Analytics" },
      { name: "Google Tag Manager", role: "Conversion & Event Tracking", badge: "Tracking" },
      { name: "Google Looker Studio", role: "Campaign Performance Dashboards", badge: "Reporting" },
      { name: "Canva / Adobe", role: "Advertising Creative Development", badge: "Creative" },
    ],
    processSteps: [
      {
        phase: "Phase 01",
        title: "Campaign Strategy & Planning",
        duration: "Weeks 1 - 2",
        deliverables: [
          "Business objectives and advertising goals analysis",
          "Target audience research and segmentation",
          "Platform selection and campaign strategy",
          "Budget planning and bidding approach",
        ],
      },
      {
        phase: "Phase 02",
        title: "Campaign Setup & Creative Development",
        duration: "Weeks 3 - 4",
        deliverables: [
          "Campaign structure and ad group creation",
          "Keyword research and audience targeting setup",
          "Ad copy, creative assets and landing page review",
          "Conversion tracking and analytics configuration",
        ],
      },
      {
        phase: "Phase 03",
        title: "Campaign Launch & Monitoring",
        duration: "Ongoing",
        deliverables: [
          "Campaign activation and initial monitoring",
          "Performance tracking and data collection",
          "Bid adjustments and budget management",
          "A/B testing and creative optimization",
        ],
      },
      {
        phase: "Phase 04",
        title: "Performance Review & Optimization",
        duration: "Monthly",
        deliverables: [
          "Monthly performance reports and insights",
          "Campaign refinements and optimization",
          "Audience expansion or refinement",
          "Strategic recommendations for growth",
        ],
      },
    ],
    deliverables: [
      { item: "Paid Campaign Strategy & Setup", detail: "Structured advertising campaigns aligned with business goals", standard: "Strategic Planning" },
      { item: "Audience Targeting & Segmentation", detail: "Targeted audience configurations and remarketing strategies", standard: "Precision Targeting" },
      { item: "Ad Creatives & Copy Development", detail: "Compelling ad copy, graphics and creative assets", standard: "Creative Production" },
      { item: "Conversion Tracking & Performance Reports", detail: "Analytics setup and monthly performance insights", standard: "Data-Driven Reporting" },
    ],
    caseStudy: {
      client: "RND Technosoft",
      metric: "Performance Marketing",
      desc: "Every campaign is built around measurable objectives, continuous performance monitoring and data-led optimization — helping businesses make informed advertising decisions.",
      tag: "PERFORMANCE & OPTIMIZATION FRAMEWORK",
    },
    faqs: [
      {
        question: "Which advertising platforms do you manage?",
        answer: "We manage campaigns across Google Ads (Search, Display, YouTube), Meta Ads (Facebook, Instagram) and other relevant platforms based on your business type, target audience and advertising objectives.",
      },
      {
        question: "How much should I budget for paid advertising?",
        answer: "Advertising budgets depend on your industry, competition, target audience, campaign objectives and expected return on investment. We can discuss appropriate budget ranges based on your specific requirements and goals.",
      },
      {
        question: "Do you create ad copy and creative assets?",
        answer: "Yes. We can develop ad copy, graphics, video concepts and creative assets for your campaigns. We can also work with creative materials provided by your team or coordinate with your designers.",
      },
      {
        question: "How do you measure campaign success?",
        answer: "We track relevant metrics such as impressions, clicks, conversions, cost per click (CPC), cost per acquisition (CPA), return on ad spend (ROAS) and other KPIs aligned with your campaign objectives.",
      },
      {
        question: "Can you manage advertising for e-commerce businesses?",
        answer: "Yes. We can create and manage campaigns for e-commerce businesses, including product ads, shopping campaigns, dynamic remarketing and conversion-focused strategies designed to drive online sales.",
      },
      {
        question: "Do advertising costs include the ad spend budget?",
        answer: "No. Our service fees cover campaign strategy, management, optimization and reporting. The advertising spend (budget paid to Google, Meta, etc.) is separate and paid directly to the advertising platforms.",
      },
      {
        question: "How long does it take to see results from paid advertising?",
        answer: "Paid advertising can generate traffic quickly, often within days of campaign launch. Meaningful conversion data and optimization insights typically develop within 4-8 weeks as campaigns gather performance data.",
      },
      {
        question: "Can you help with landing page optimization?",
        answer: "We can review landing pages and provide recommendations to improve conversion rates. Landing page development and technical implementation can be discussed based on your requirements and existing website setup.",
      },
    ],
  },
  {
    id: "content-strategy",
    metaTitle: "Content Marketing Services | RND Technosoft",
    index: "[08]",
    title: "CONTENT MARKETING & STRATEGIC STORYTELLING",
    highlightText: "THAT BUILDS BRAND AUTHORITY",
    tagline: "Great content does more than fill a website or social media feed. It communicates your expertise, answers customer questions and builds meaningful connections between your brand and its audience.",
    category: "Digital Marketing",
    image: "/images/service_marketing.jpg",
    sla: "CONTENT STRATEGY // BRAND STORYTELLING",
    avatarIcon: "✍️",
    badge: "CONTENT STRATEGY // BRAND STORYTELLING",
    heroStats: [
      { value: "Content", label: "Strategy & Editorial Planning", desc: "Structured content approach" },
      { value: "SEO", label: "Website Copy & Blog Writing", desc: "Search-focused content" },
      { value: "Brand", label: "Messaging & Storytelling", desc: "Consistent brand voice" },
      { value: "Content", label: "Performance & Optimization", desc: "Quality refinement" },
    ],
    overview: [
      "Great content does more than fill a website or social media feed. It communicates your expertise, answers customer questions and builds meaningful connections between your brand and its audience.",
      "At RND Technosoft, we create strategic, SEO-focused content that supports your digital presence and business goals. From website copy and blogs to articles, landing pages and brand storytelling, every piece is developed with purpose, consistency and audience intent.",
    ],
    specs: [
      "Content strategy: audience research, editorial planning, brand positioning",
      "SEO content: website pages, blogs, articles, landing pages",
      "Brand storytelling: messaging, narratives, marketing content",
      "Content optimization: quality review, performance analysis",
    ],
    architecturePillars: [
      {
        title: "STRATEGIC CONTENT PLANNING",
        desc: "Develop content strategies based on business objectives, audience interests, search intent, industry trends and brand positioning.",
        iconName: "FileText",
        metrics: "Content Strategy & Planning",
        tech: ["Content Strategy", "Editorial Planning", "Audience Research", "SEO"],
      },
      {
        title: "SEO CONTENT & WEBSITE COPYWRITING",
        desc: "Create search-focused website pages, blogs, articles, landing pages and service descriptions that balance keyword relevance with natural, engaging communication.",
        iconName: "Search",
        metrics: "SEO Writing & Content Creation",
        tech: ["SEO Writing", "Blog Content", "Website Copy", "Landing Pages"],
      },
      {
        title: "BRAND STORYTELLING & CREATIVE CONTENT",
        desc: "Shape a consistent brand voice through compelling narratives, product descriptions, campaign messaging, newsletters and marketing content.",
        iconName: "Book",
        metrics: "Brand Voice & Storytelling",
        tech: ["Brand Storytelling", "Creative Writing", "Marketing Content", "Messaging"],
      },
      {
        title: "CONTENT OPTIMIZATION & PERFORMANCE",
        desc: "Review content quality, readability, search relevance and audience engagement. Refine existing content to improve clarity, relevance and overall effectiveness.",
        iconName: "TrendingUp",
        metrics: "Content Quality & Performance",
        tech: ["Content Optimization", "Performance Analysis", "Quality Review", "Refinement"],
      },
    ],
    techStack: [
      { name: "Google Trends", role: "Search interest & topic discovery", badge: "Research" },
      { name: "Semrush", role: "Keyword & competitor research", badge: "SEO" },
      { name: "Google Search Console", role: "Organic search performance", badge: "Analytics" },
      { name: "Grammarly", role: "Writing clarity & proofreading", badge: "Writing" },
      { name: "Google Docs", role: "Content collaboration", badge: "Collaboration" },
      { name: "WordPress", role: "Content publishing & management", badge: "CMS" },
      { name: "Canva", role: "Visual content development", badge: "Design" },
    ],
    processSteps: [
      {
        phase: "Phase 01",
        title: "Content Discovery & Strategy",
        duration: "Weeks 1 - 2",
        deliverables: [
          "Content audit and gap analysis",
          "Audience research and persona development",
          "Keyword research and topic identification",
          "Editorial calendar and content plan",
        ],
      },
      {
        phase: "Phase 02",
        title: "Content Creation & Development",
        duration: "Weeks 3 - 6",
        deliverables: [
          "SEO-optimized website copy and blog articles",
          "Brand messaging and storytelling content",
          "Landing pages and service descriptions",
          "Content review and revisions",
        ],
      },
      {
        phase: "Phase 03",
        title: "Content Publishing & Promotion",
        duration: "Ongoing",
        deliverables: [
          "Content publishing and scheduling",
          "Social media promotion and distribution",
          "Internal linking and content optimization",
          "Performance tracking and monitoring",
        ],
      },
      {
        phase: "Phase 04",
        title: "Content Review & Optimization",
        duration: "Monthly",
        deliverables: [
          "Monthly content performance reports",
          "Content refinement and updates",
          "Topic ideation for upcoming content",
          "Strategic recommendations for growth",
        ],
      },
    ],
    deliverables: [
      { item: "Content Strategy & Editorial Planning", detail: "Structured content approach with editorial calendar", standard: "Strategic Planning" },
      { item: "SEO Website Copy & Blog Writing", detail: "Search-optimized content for website and blog", standard: "SEO-Focused" },
      { item: "Brand Messaging & Storytelling", detail: "Consistent brand voice across marketing content", standard: "Brand Consistency" },
      { item: "Content Performance & Optimization", detail: "Quality review and ongoing content refinement", standard: "Continuous Improvement" },
    ],
    caseStudy: {
      client: "RND Technosoft",
      metric: "Content Strategy",
      desc: "Every piece of content starts with a clear purpose — to inform, engage and move your audience closer to your brand. We combine audience research, brand positioning and SEO best practices to create content that works beyond the first click.",
      tag: "CONTENT QUALITY & EDITORIAL FRAMEWORK",
    },
    faqs: [
      {
        question: "What types of content do you create?",
        answer: "We create website copy, blog articles, landing pages, service descriptions, product descriptions, brand storytelling content, marketing copy, newsletters and other written content based on your requirements.",
      },
      {
        question: "Do you write SEO-optimized content?",
        answer: "Yes. We research relevant keywords and create content that balances search engine optimization with natural, readable communication focused on your target audience.",
      },
      {
        question: "Can you help with content for an existing website?",
        answer: "Yes. We can audit your existing content, identify gaps and opportunities, and create new content or refine existing pages to improve clarity, relevance and search visibility.",
      },
      {
        question: "How do you ensure content matches our brand voice?",
        answer: "We begin by understanding your brand positioning, target audience, tone preferences and communication style. We develop initial content samples for review and refinement before proceeding with larger content projects.",
      },
      {
        question: "Do you provide content for social media?",
        answer: "Our content services focus primarily on website content, blogs and long-form marketing content. Social media captions and posts can be discussed as part of a social media management engagement.",
      },
      {
        question: "Can you help with content strategy and planning?",
        answer: "Yes. We can develop content strategies based on your business goals, audience needs, keyword opportunities and content gaps. This includes editorial calendars, topic ideation and content roadmaps.",
      },
      {
        question: "How long does content creation take?",
        answer: "Timelines depend on content type, volume, research requirements and revision cycles. A blog article typically takes 1-2 weeks from briefing to final delivery, while larger projects require longer timelines.",
      },
      {
        question: "Do you publish content directly to our website?",
        answer: "We can coordinate with your team on content publishing. Direct publishing access depends on your website platform, permissions and preferred workflow.",
      },
    ],
  },
  {
    id: "logo-design",
    metaTitle: "Logo & Brand Identity Design Services | RND Technosoft",
    index: "[10]",
    title: "LOGO DESIGN & BRAND IDENTITY DEVELOPMENT",
    highlightText: "",
    tagline: "Your logo is often the first visual connection customers make with your business. We create distinctive, thoughtful logo designs that capture your brand's personality, communicate its values and make it recognisable in a competitive marketplace.",
    category: "Branding & Design",
    image: "/images/service_branding.jpg",
    sla: "VISUAL IDENTITY // BRAND RECOGNITION",
    avatarIcon: "🎨",
    badge: "VISUAL IDENTITY // BRAND RECOGNITION",
    heroStats: [
      { value: "Custom", label: "Logo Design & Variations", desc: "Original logo concepts" },
      { value: "Brand", label: "Colour Palette & Typography", desc: "Visual identity system" },
      { value: "Visual", label: "Identity Elements & Assets", desc: "Complete brand assets" },
      { value: "Brand", label: "Guidelines & Source Files", desc: "Usage documentation" },
    ],
    overview: [
      "Your logo is often the first visual connection customers make with your business. We create distinctive, thoughtful logo designs that capture your brand's personality, communicate its values and make it recognisable in a competitive marketplace.",
      "From custom logo creation and colour selection to typography, brand elements and complete identity systems, RND Technosoft develops cohesive visual identities that maintain consistency across websites, social media, packaging, print and marketing materials.",
    ],
    specs: [
      "Logo design: concept development, variations, adaptations",
      "Colour systems: coordinated palettes, specifications",
      "Typography: font selection, usage guidelines",
      "Visual identity: supporting elements, applications",
    ],
    architecturePillars: [
      {
        title: "LOGO CONCEPT & CREATION",
        desc: "Develop original logo concepts based on your business, audience, industry and brand personality. Explore suitable logo styles, symbols, typography and compositions.",
        iconName: "Pen Tool",
        metrics: "Logo Design & Development",
        tech: ["Adobe Illustrator", "Logo Design", "Concept Development", "Vector"],
      },
      {
        title: "BRAND COLOURS & TYPOGRAPHY",
        desc: "Establish a coordinated colour palette and typography system that reflects your brand character and creates visual consistency.",
        iconName: "Palette",
        metrics: "Colour & Type Systems",
        tech: ["Colour Theory", "Typography", "Brand Systems", "Design"],
      },
      {
        title: "VISUAL IDENTITY ELEMENTS",
        desc: "Create supporting graphics, icons, patterns, brand elements and logo variations for different digital and print applications.",
        iconName: "Layers",
        metrics: "Identity Assets & Elements",
        tech: ["Graphic Design", "Icons", "Patterns", "Brand Elements"],
      },
      {
        title: "BRAND GUIDELINES & ASSET DELIVERY",
        desc: "Provide organised brand assets and usage guidelines covering logo placement, colour specifications, typography and visual consistency.",
        iconName: "Book",
        metrics: "Guidelines & Asset Library",
        tech: ["Brand Guidelines", "Asset Management", "Documentation"],
      },
    ],
    techStack: [
      { name: "Adobe Illustrator", role: "Logo & Vector Design", badge: "Design" },
      { name: "Adobe Photoshop", role: "Image Editing & Brand Assets", badge: "Creative" },
      { name: "Figma", role: "Visual Identity Systems", badge: "Collaboration" },
      { name: "Adobe InDesign", role: "Brand Guidelines & Layouts", badge: "Layout" },
      { name: "Canva", role: "Brand Applications & Marketing Creatives", badge: "Templates" },
    ],
    processSteps: [
      {
        phase: "Phase 01",
        title: "Logo Brief & Research",
        duration: "Week 1",
        deliverables: [
          "Business and brand understanding",
          "Target audience and industry research",
          "Logo style and direction exploration",
          "Creative brief development",
        ],
      },
      {
        phase: "Phase 02",
        title: "Logo Concept Development",
        duration: "Weeks 2 - 3",
        deliverables: [
          "Initial logo concept presentations",
          "Logo refinement and revisions",
          "Colour palette development",
          "Typography selection",
        ],
      },
      {
        phase: "Phase 03",
        title: "Identity System Creation",
        duration: "Week 4",
        deliverables: [
          "Logo variations and applications",
          "Supporting visual elements",
          "Brand identity assets",
          "File format preparations",
        ],
      },
      {
        phase: "Phase 04",
        title: "Guidelines & Final Delivery",
        duration: "Week 5",
        deliverables: [
          "Brand guidelines document",
          "Complete file package delivery",
          "Usage examples and templates",
          "Final asset library",
        ],
      },
    ],
    deliverables: [
      { item: "Custom Logo Design & Variations", detail: "Original logo with multiple format variations", standard: "Multiple Formats" },
      { item: "Brand Colour Palette & Typography", detail: "Coordinated colour system and typography guidelines", standard: "Complete System" },
      { item: "Visual Identity Elements & Assets", detail: "Supporting graphics and brand elements", standard: "Asset Library" },
      { item: "Brand Guidelines & Source Files", detail: "Usage guidelines and all source files", standard: "Complete Package" },
    ],
    caseStudy: {
      client: "RND Technosoft",
      metric: "Logo Design",
      desc: "Great logo design goes beyond aesthetics. It creates recognition, communicates brand personality and gives every customer touchpoint a consistent visual language.",
      tag: "DESIGN QUALITY & IDENTITY FRAMEWORK",
    },
    faqs: [
      {
        question: "What is included in logo design services?",
        answer: "Logo design includes concept development, revisions, colour palette, typography selection, logo variations, brand guidelines and final files in multiple formats suitable for web, print and various applications.",
      },
      {
        question: "How many logo concepts do you present?",
        answer: "We typically present 2-3 logo concepts based on the agreed brand direction. The number of concepts and revision rounds are defined during project scoping and can be adjusted based on requirements.",
      },
      {
        question: "What file formats do you provide?",
        answer: "You receive logo files in vector formats (AI, EPS, SVG), high-resolution PNG with transparent backgrounds, PDF and JPEG suitable for different applications including web, print, social media and signage.",
      },
      {
        question: "Can you create a logo without full brand strategy?",
        answer: "Yes. We can develop logo designs as standalone services. However, we recommend considering brand positioning and identity to ensure the logo effectively represents your business and resonates with your audience.",
      },
      {
        question: "Do you provide trademarking services?",
        answer: "We do not provide legal trademarking services. We can guide you on logo uniqueness and suggest trademark searches, but formal trademark registration requires consultation with a trademark attorney.",
      },
      {
        question: "Can you redesign an existing logo?",
        answer: "Yes. We can refresh or redesign existing logos based on your evolving business needs, market changes or rebranding objectives while considering brand recognition and equity.",
      },
    ],
  },
  {
    id: "graphic-design",
    metaTitle: "Graphic Design Services | RND Technosoft",
    index: "[11]",
    title: "GRAPHIC DESIGN & CREATIVE VISUAL COMMUNICATION",
    highlightText: "",
    tagline: "Powerful visuals make brands easier to recognise, remember and connect with. At RND Technosoft, we create visually engaging graphic designs that transform ideas and messages into clear, compelling brand communication.",
    category: "Branding & Design",
    image: "/images/service_branding.jpg",
    sla: "CREATIVE VISUALS // GRAPHIC DESIGN",
    avatarIcon: "🎨",
    badge: "CREATIVE VISUALS // GRAPHIC DESIGN",
    heroStats: [
      { value: "Social Media", label: "& Digital Creatives", desc: "Engaging visual content" },
      { value: "Brochures", label: "& Marketing Collateral", desc: "Professional materials" },
      { value: "Advertising", label: "Banners & Campaign Graphics", desc: "Campaign visuals" },
      { value: "Print-Ready", label: "& Digital Design Files", desc: "Production-ready assets" },
    ],
    overview: [
      "Powerful visuals make brands easier to recognise, remember and connect with. At RND Technosoft, we create visually engaging graphic designs that transform ideas and messages into clear, compelling brand communication.",
      "From social media creatives and advertising banners to brochures, business presentations, packaging and marketing collateral, we design cohesive visual assets that align with your brand identity and support your marketing goals.",
    ],
    specs: [
      "Social media: posts, stories, banners, promotional creatives",
      "Marketing materials: brochures, flyers, catalogues, presentations",
      "Campaign creatives: advertisements, banners, promotional graphics",
      "Print design: packaging, labels, posters, business stationery",
    ],
    architecturePillars: [
      {
        title: "SOCIAL MEDIA & DIGITAL GRAPHICS",
        desc: "Create engaging posts, stories, banners, promotional creatives and digital graphics designed for different platforms and audience interactions.",
        iconName: "Image",
        metrics: "Social & Digital Design",
        tech: ["Social Media Design", "Digital Graphics", "Canva", "Photoshop"],
      },
      {
        title: "MARKETING COLLATERAL & BROCHURES",
        desc: "Design professional brochures, flyers, catalogues, company profiles, presentations and promotional materials that communicate your offerings clearly.",
        iconName: "FileText",
        metrics: "Marketing Materials",
        tech: ["Brochure Design", "InDesign", "Print Design", "Layouts"],
      },
      {
        title: "ADVERTISING & CAMPAIGN CREATIVES",
        desc: "Develop eye-catching campaign visuals, digital advertisements, promotional banners and creative assets that support marketing initiatives.",
        iconName: "Megaphone",
        metrics: "Campaign & Ad Design",
        tech: ["Advertisement Design", "Banners", "Campaign Graphics", "Digital Ads"],
      },
      {
        title: "PRINT & PACKAGING DESIGN",
        desc: "Create business stationery, product labels, packaging layouts, posters and print-ready artwork that maintain consistency with your brand identity.",
        iconName: "Box",
        metrics: "Print & Packaging",
        tech: ["Packaging Design", "Print Production", "Labels", "Stationery"],
      },
    ],
    techStack: [
      { name: "Adobe Photoshop", role: "Image Editing & Digital Graphics", badge: "Creative" },
      { name: "Adobe Illustrator", role: "Vector Graphics & Illustrations", badge: "Design" },
      { name: "Adobe InDesign", role: "Brochures & Editorial Layouts", badge: "Layout" },
      { name: "Figma", role: "Digital Design & Creative Layouts", badge: "Digital" },
      { name: "Canva", role: "Marketing & Social Media Creatives", badge: "Templates" },
    ],
    processSteps: [
      {
        phase: "Phase 01",
        title: "Design Brief & Requirements",
        duration: "Week 1",
        deliverables: [
          "Project requirements and objectives",
          "Target audience and platform analysis",
          "Brand guidelines review",
          "Creative direction discussion",
        ],
      },
      {
        phase: "Phase 02",
        title: "Concept Development",
        duration: "Weeks 2 - 3",
        deliverables: [
          "Initial design concepts",
          "Layout and composition development",
          "Content integration",
          "Design refinements and revisions",
        ],
      },
      {
        phase: "Phase 03",
        title: "Production & Finalization",
        duration: "Week 4",
        deliverables: [
          "Final design production",
          "Format preparations",
          "Print-ready or digital files",
          "Asset delivery",
        ],
      },
      {
        phase: "Phase 04",
        title: "Review & Delivery",
        duration: "As needed",
        deliverables: [
          "Final quality review",
          "File format delivery",
          "Usage guidelines (if required)",
          "Source files and assets",
        ],
      },
    ],
    deliverables: [
      { item: "Social Media & Digital Creatives", detail: "Engaging visual content for digital platforms", standard: "Platform-Ready" },
      { item: "Brochures & Marketing Collateral", detail: "Professional printed and digital materials", standard: "Print & Digital" },
      { item: "Advertising Banners & Campaign Graphics", detail: "Eye-catching promotional visuals", standard: "Campaign-Ready" },
      { item: "Print-Ready & Digital Design Files", detail: "Production-ready files in required formats", standard: "Multiple Formats" },
    ],
    caseStudy: {
      client: "RND Technosoft",
      metric: "Graphic Design",
      desc: "Effective graphic design is more than making things look good. It turns ideas into visual communication that captures attention and makes brands memorable.",
      tag: "CREATIVE QUALITY // VISUAL CONSISTENCY",
    },
    faqs: [
      {
        question: "What types of graphic design do you create?",
        answer: "We create social media graphics, brochures, flyers, advertisements, presentations, business cards, packaging, posters, banners and other marketing materials for digital and print applications.",
      },
      {
        question: "Do you follow our existing brand guidelines?",
        answer: "Yes. If you have established brand guidelines, we follow them to ensure visual consistency. If not, we can help develop guidelines or work with your preferred design direction.",
      },
      {
        question: "Can you design for both digital and print?",
        answer: "Yes. We design for both digital platforms (websites, social media, digital ads) and print materials (brochures, business cards, posters, packaging) with appropriate specifications.",
      },
      {
        question: "What file formats do you provide?",
        answer: "We provide files suitable for your requirements, including PDF, PNG, JPEG, AI, EPS and print-ready formats with correct colour profiles and specifications.",
      },
      {
        question: "Can you help with packaging design?",
        answer: "Yes. We can create packaging concepts, labels, box designs and product packaging layouts. Print production and manufacturing coordination depend on project scope.",
      },
      {
        question: "Do you provide print production services?",
        answer: "We provide print-ready design files. Printing coordination and vendor management can be discussed based on your requirements and location.",
      },
    ],
  },
  {
    id: "marketing-collateral",
    index: "[12]",
    title: "MARKETING COLLATERAL DESIGN & BRAND COMMUNICATION",
    highlightText: "",
    tagline: "Every business has a story to tell. The right marketing materials help you communicate it with clarity, professionalism and visual impact.",
    category: "Branding & Design",
    image: "/images/service_branding.jpg",
    sla: "BRAND COMMUNICATION // MARKETING COLLATERAL",
    avatarIcon: "📄",
    badge: "BRAND COMMUNICATION // MARKETING COLLATERAL",
    heroStats: [
      { value: "Company", label: "Profiles & Corporate Brochures", desc: "Professional business materials" },
      { value: "Product", label: "Catalogues & Service Flyers", desc: "Product presentations" },
      { value: "Business", label: "Presentations & Pitch Decks", desc: "Communication tools" },
      { value: "Print-Ready", label: "& Digital Marketing Materials", desc: "Production-ready assets" },
    ],
    overview: [
      "Every business has a story to tell. The right marketing materials help you communicate it with clarity, professionalism and visual impact. RND Technosoft designs compelling marketing collateral that presents your brand, products and services in a way that connects with your audience.",
      "From company profiles and product catalogues to brochures, flyers, presentations and business stationery, we create cohesive digital and print materials that strengthen your brand presence and support your marketing efforts.",
    ],
    specs: [
      "Corporate materials: company profiles, brochures, business documents",
      "Product presentations: catalogues, flyers, service brochures",
      "Business presentations: pitch decks, sales presentations",
      "Stationery: business cards, letterheads, folders, promotional materials",
    ],
    architecturePillars: [
      {
        title: "CORPORATE PROFILES & BROCHURES",
        desc: "Design professional company profiles, corporate brochures and business documents that introduce your organisation, capabilities, services and value proposition.",
        iconName: "Building",
        metrics: "Corporate Communications",
        tech: ["InDesign", "Corporate Design", "Brochures", "Profiles"],
      },
      {
        title: "PRODUCT CATALOGUES & SERVICE FLYERS",
        desc: "Create organised product catalogues, service brochures, flyers and promotional sheets that showcase your offerings through clear layouts and engaging visuals.",
        iconName: "Package",
        metrics: "Product Presentations",
        tech: ["Catalogue Design", "Product Layouts", "Flyers", "Promotional Materials"],
      },
      {
        title: "PRESENTATIONS & PITCH DECKS",
        desc: "Develop visually consistent business presentations, sales decks, corporate presentations and pitch materials that make information easier to understand and communicate.",
        iconName: "Presentation",
        metrics: "Business Presentations",
        tech: ["Presentation Design", "Pitch Decks", "Slides", "Business Communication"],
      },
      {
        title: "BUSINESS STATIONERY & PROMOTIONAL MATERIALS",
        desc: "Design business cards, letterheads, envelopes, folders, posters, banners and other branded materials for professional business communication.",
        iconName: "FileText",
        metrics: "Business Stationery",
        tech: ["Stationery Design", "Business Cards", "Letterheads", "Print Materials"],
      },
    ],
    techStack: [
      { name: "Adobe InDesign", role: "Brochures, Catalogues & Editorial Layouts", badge: "Layout" },
      { name: "Adobe Illustrator", role: "Vector Graphics & Print Design", badge: "Design" },
      { name: "Adobe Photoshop", role: "Image Editing & Visual Assets", badge: "Creative" },
      { name: "Figma", role: "Digital Layouts & Presentation Design", badge: "Digital" },
      { name: "Canva", role: "Marketing Materials & Promotional Designs", badge: "Templates" },
    ],
    processSteps: [
      {
        phase: "Phase 01",
        title: "Content & Requirements Gathering",
        duration: "Week 1",
        deliverables: [
          "Project requirements and objectives",
          "Content collection and organization",
          "Brand guidelines review",
          "Design direction planning",
        ],
      },
      {
        phase: "Phase 02",
        title: "Layout & Design Development",
        duration: "Weeks 2 - 3",
        deliverables: [
          "Layout structure and design concepts",
          "Content integration and formatting",
          "Visual element development",
          "Design refinements and revisions",
        ],
      },
      {
        phase: "Phase 03",
        title: "Production & Finalization",
        duration: "Week 4",
        deliverables: [
          "Final design production",
          "Print-ready file preparation",
          "Digital format delivery",
          "Quality assurance review",
        ],
      },
      {
        phase: "Phase 04",
        title: "Delivery & Support",
        duration: "As needed",
        deliverables: [
          "Final file delivery",
          "Print specifications (if applicable)",
          "Source files and editable templates",
          "Usage guidance",
        ],
      },
    ],
    deliverables: [
      { item: "Company Profiles & Corporate Brochures", detail: "Professional business documents and corporate materials", standard: "Print & Digital" },
      { item: "Product Catalogues & Service Flyers", detail: "Organized product presentations and promotional materials", standard: "Complete Materials" },
      { item: "Business Presentations & Pitch Decks", detail: "Engaging presentation materials and sales decks", standard: "Presentation-Ready" },
      { item: "Print-Ready & Digital Marketing Materials", detail: "Production-ready files in multiple formats", standard: "Multiple Formats" },
    ],
    caseStudy: {
      client: "RND Technosoft",
      metric: "Marketing Collateral",
      desc: "Every brochure, presentation and promotional asset is an opportunity to communicate your brand's value. We make every design purposeful, consistent and memorable.",
      tag: "DESIGN QUALITY // BRAND CONSISTENCY",
    },
    faqs: [
      {
        question: "What marketing materials can you design?",
        answer: "We design company profiles, brochures, product catalogues, flyers, presentations, business cards, letterheads, folders, posters, banners and other business communication materials.",
      },
      {
        question: "Do you provide copywriting for marketing materials?",
        answer: "We can work with content you provide or coordinate with our content team for copywriting services. Content development can be discussed based on project requirements.",
      },
      {
        question: "Can you design presentations and pitch decks?",
        answer: "Yes. We design business presentations, sales pitch decks, corporate presentations and investment presentations with visually consistent layouts and professional templates.",
      },
      {
        question: "What file formats do you deliver?",
        answer: "We provide print-ready PDF files, editable source files (AI, INDD, PPTX where applicable), and digital formats (PNG, JPEG) suitable for web and email distribution.",
      },
      {
        question: "Can you help coordinate printing?",
        answer: "We provide print-ready files with specifications. Printing vendor coordination and management can be discussed based on your location, quantities and project requirements.",
      },
      {
        question: "How long does collateral design take?",
        answer: "Timelines depend on material complexity, page count, content readiness and revision cycles. A brochure typically takes 3-4 weeks, while simpler materials may be faster.",
      },
    ],
    // ── Per-service page content overrides ──
    metaTitle: "Marketing Collateral Design Services | RND Technosoft",
    metaDescription:
      "Get professional marketing collateral design from RND Technosoft, including company profiles, brochures, product catalogues, flyers, presentations and business stationery.",
    deliverablesCardLabel: "BRAND COMMUNICATION // DESIGN DELIVERABLES",
    deliverablesCardDescription:
      "Professionally designed marketing materials that keep your brand communication consistent across every customer touchpoint.",
    deliverablesCtaLabel: "REQUEST A DESIGN QUOTE",
    qualityCardLabel: "DESIGN QUALITY // BRAND CONSISTENCY",
    quoteAuthor: "RND Technosoft • Marketing Collateral Design",
    contactCardLabel: "CREATIVE CONSULTATION",
    contactCardHeading: "SPEAK WITH OUR DESIGN TEAM",
    contactCardDescription:
      "Need professional marketing materials for your business? Let's create designs that communicate your value.",
    contactCardHref: "/contact-us?intent=branding",
    scopeSectionLabel: "BRAND COMMUNICATION // DESIGN EXECUTION",
    scopeSectionHeading: "TURN YOUR BUSINESS STORY INTO POWERFUL BRAND MATERIALS.",
    scopeSectionDescription:
      "We transform business information, product details and marketing messages into professionally structured visual materials that inform, engage and support business growth.",
    techStackSectionLabel: "CREATIVE PRODUCTION // DESIGN TOOLS",
  },
  {
    id: "commercial-media",
    metaTitle: "Professional Videography Services | RND Technosoft",
    index: "[13]",
    title: "COMMERCIAL FILM &",
    highlightText: "STUDIO PHOTOGRAPHY",
    tagline: "High-end 8K commercial video production, industrial cinematography, studio photography, color grading, and CGI product reveals.",
    category: "Media",
    image: "/images/service_media.jpg",
    sla: "8K Cinema Spec",
    avatarIcon: "🎬",
    badge: "CINEMATOGRAPHY // 8K PRODUCTION",
    heroStats: [
      { value: "8K RAW", label: "Capture Quality", desc: "Cinema-grade RED & ARRI digital cinema sensors" },
      { value: "100%", label: "In-House Set", desc: "Sound stages, studio lighting and grip packages" },
      { value: "Dolby", label: "Mastering Spec", desc: "Dolby Atmos sound design & HDR color grading" },
      { value: "Multi", label: "Format Delivery", desc: "Simultaneous 16:9 widescreen and 9:16 vertical cuts" },
    ],
    overview: [
      "Nothing commands immediate market authority like premium cinematic visuals. Our Commercial Film & Media Production arm delivers broadcast-grade commercials, corporate documentaries, and luxury studio product photography.",
      "From initial scriptwriting and storyboard conception to set design, drone cinematography, and DaVinci Resolve color mastering, we create compelling visual assets that elevate your brand narrative into high art.",
    ],
    specs: [
      "RED V-Raptor and ARRI Alexa cinema cameras with anamorphic lenses",
      "Full studio lighting rigs (Aputure, ARRI SkyPanels, Profoto strobes)",
      "DaVinci Resolve Studio color grading calibrated to ACES standards",
      "Original score composition and 5.1 surround / Dolby Atmos sound mix",
    ],
    architecturePillars: [
      {
        title: "Commercial Film Direction",
        desc: "Scriptwriting, casting, location scouting, and multi-camera production for national broadcast and digital ad campaigns.",
        iconName: "Award",
        metrics: "Broadcast Spec",
        tech: ["ARRI Alexa", "RED V-Raptor", "Anamorphic"],
      },
      {
        title: "High-End Studio Product Photography",
        desc: "Macro optical captures, tabletop motorized motion control, and high-fashion model shoots with flawless retouching.",
        iconName: "Sparkles",
        metrics: "100MP Resolution",
        tech: ["Hasselblad", "Profoto", "Capture One"],
      },
      {
        title: "DaVinci Color & Visual Effects (VFX)",
        desc: "Precision color grading on calibrated OLED master monitors with seamless CGI extensions and clean-up.",
        iconName: "Layers",
        metrics: "ACES Color Pipeline",
        tech: ["DaVinci Resolve", "Blender 3D", "Nuke"],
      },
      {
        title: "Sound Design & Audio Engineering",
        desc: "Commercial sound design, foley recording, voiceover casting, and master audio mixing for pristine immersion.",
        iconName: "Zap",
        metrics: "Dolby Mastered",
        tech: ["Pro Tools", "Dolby Atmos", "Custom Scoring"],
      },
    ],
    techStack: [
      { name: "RED / ARRI", role: "Cinema Cameras", badge: "Hardware" },
      { name: "DaVinci Resolve", role: "Color Grading", badge: "Post" },
      { name: "Capture One Pro", role: "Studio Tethering", badge: "Photo" },
      { name: "Pro Tools", role: "Audio Mixing", badge: "Audio" },
      { name: "Blender 3D", role: "CGI & Motion", badge: "VFX" },
    ],
    processSteps: [
      {
        phase: "Phase 01",
        title: "Concept Development & Pre-Production",
        duration: "Weeks 1 - 2",
        deliverables: [
          "Director's Treatment, Script & Visual Storyboards",
          "Location Scouting, Permits & Talent Casting",
          "Production Design & Prop Sourcing Plan",
        ],
      },
      {
        phase: "Phase 02",
        title: "Principal Photography & Studio Shoot",
        duration: "Week 3",
        deliverables: [
          "On-location or in-studio multi-camera film shoot",
          "Live wireless client video monitoring feeds",
          "Daily secure backup verification (3-2-1 rule)",
        ],
      },
      {
        phase: "Phase 03",
        title: "Editorial Post-Production & Color",
        duration: "Weeks 4 - 5",
        deliverables: [
          "Offline narrative rough cut and pacing review",
          "ACES-compliant DaVinci Resolve color master",
          "Visual effects, motion graphics, and title cards",
        ],
      },
      {
        phase: "Phase 04",
        title: "Sound Design & Master Delivery",
        duration: "Week 6",
        deliverables: [
          "Dolby Atmos audio master and sound effect foley",
          "Multi-aspect ratio exports (16:9, 9:16, 1:1, 4:5)",
          "Archival ProRes 4444 and high-bitrate Web masters",
        ],
      },
    ],
    deliverables: [
      { item: "Broadcast Commercial Master", detail: "Full 8K / 4K ProRes 4444 master with clean audio stems", standard: "Broadcast Ready" },
      { item: "Social Cutdowns Package", detail: "Optimized vertical 9:16 cuts with burnt-in captions", standard: "All Formats" },
      { item: "Retouched Product Still Gallery", detail: "High-resolution RAW & TIFF product photography", standard: "Print Ready" },
    ],
    caseStudy: {
      client: "Solari Hypercars",
      metric: "Over 8.4M Views",
      desc: "Produced a cinematic 8K reveal film shot in the Swiss Alps, resulting in full vehicle allocation pre-orders within 48 hours of premiere.",
      tag: "LUXURY COMMERCIAL FILM",
    },
    faqs: [
      {
        question: "Can we review the shoot live if our executives cannot travel to the set?",
        answer: "Yes, we set up encrypted real-time video streaming with low-latency client monitors so your team can approve shots in real-time from anywhere in the world.",
      },
      {
        question: "Do you handle commercial music licensing and voiceover talent contracts?",
        answer: "We handle 100% of talent releases, music synchronization licenses, and SAG-AFTRA or non-union contracts, ensuring complete commercial indemnity.",
      },
    ],
  },
  {
    id: "dedicated-squads",
    metaTitle: "Creative Media Production Services | RND Technosoft",
    index: "[08]",
    title: "DEDICATED AGENCY SQUADS &",
    highlightText: "ENTERPRISE RETAINERS",
    tagline: "Dedicated cross-functional teams of principal engineers, UI/UX designers, and technical product managers embedded directly into your organization.",
    category: "Web & Cloud",
    image: "/images/agency_team_studio.jpg",
    sla: "Guaranteed SLA",
    avatarIcon: "👥",
    badge: "TEAM EMBEDDING // AGILE VELOCITY",
    heroStats: [
      { value: "2 Weeks", label: "Sprint Cycles", desc: "Transparent bi-weekly sprint demos and deployments" },
      { value: "100%", label: "IP Ownership", desc: "All created code, docs, and assets belong to you" },
      { value: "0 HR", label: "Recruiting Overhead", desc: "Pre-vetted senior engineers ready to deploy in 5 days" },
      { value: "<2 Hours", label: "Direct Support SLA", desc: "Direct Slack channel connection to tech leads" },
    ],
    overview: [
      "Scaling internal engineering and design capacity can take months of expensive recruiting, interviewing, and onboarding. Our Dedicated Squads model provides turnkey, high-velocity engineering pods that integrate seamlessly into your existing workflows.",
      "Whether you need an entire team to build a new SaaS product from scratch or specialized senior engineers to accelerate your core roadmap, we provide transparent, battle-tested talent with guaranteed sprint velocity.",
    ],
    specs: [
      "Senior full-stack developers (Next.js, React, Node.js, Python, Go, Rust)",
      "Lead UI/UX designers, design system engineers, and product strategists",
      "Dedicated Scrum Master / Agile Project Manager providing weekly burndown metrics",
      "Direct Slack/Teams integration with synchronized working timezones",
    ],
    architecturePillars: [
      {
        title: "Turnkey Cross-Functional Pods",
        desc: "Complete pods consisting of 1 Product Manager, 2-4 Full-Stack Engineers, 1 UI/UX Designer, and 1 QA Automation Lead.",
        iconName: "Users",
        metrics: "Ready in 5 Days",
        tech: ["Agile Pods", "Jira", "GitHub"],
      },
      {
        title: "Transparent Velocity & Burndown",
        desc: "Full visibility into sprint boards, committed story points, cycle times, and bi-weekly release milestones.",
        iconName: "BarChart3",
        metrics: "94% Sprint Completion",
        tech: ["Jira Software", "Linear", "Confluence"],
      },
      {
        title: "Direct Real-Time Collaboration",
        desc: "No intermediaries. Your technical leaders collaborate directly with our engineers via shared Slack channels and daily standups.",
        iconName: "Terminal",
        metrics: "Shared Channels",
        tech: ["Slack Connect", "Microsoft Teams", "Zoom"],
      },
      {
        title: "Elastic Team Scaling",
        desc: "Ramp up or ramp down squad size flexibly as your roadmap demands evolve without hiring or severance friction.",
        iconName: "RefreshCw",
        metrics: "Flexible Retainers",
        tech: ["Monthly Cadence", "Transparent Invoicing"],
      },
    ],
    techStack: [
      { name: "Jira / Linear", role: "Agile Project Mgmt", badge: "Agile" },
      { name: "GitHub Enterprise", role: "Version Control", badge: "DevOps" },
      { name: "Slack Connect", role: "Real-time Comms", badge: "Collab" },
      { name: "Figma", role: "Design Collaboration", badge: "Design" },
      { name: "Notion / Confluence", role: "Documentation", badge: "Docs" },
    ],
    processSteps: [
      {
        phase: "Phase 01",
        title: "Roadmap Alignment & Squad Tailoring",
        duration: "Week 1",
        deliverables: [
          "Technical Stack & Development Environment Assessment",
          "Pod Member Selection & Role Matching",
          "Access Provisioning (GitHub, Jira, AWS, Slack)",
        ],
      },
      {
        phase: "Phase 02",
        title: "Backlog Refinement & Sprint 0 Setup",
        duration: "Week 2",
        deliverables: [
          "User Story Mapping & Backlog Grooming Session",
          "CI/CD Pipeline Setup & Local Dev Environment Config",
          "Definition of Done (DoD) Agreement & Branching Strategy",
        ],
      },
      {
        phase: "Phase 03",
        title: "Continuous Agile Sprint Execution",
        duration: "Ongoing (2-Week Sprints)",
        deliverables: [
          "Daily async/sync standups and Jira board updates",
          "Bi-weekly live demo of completed production features",
          "Sprint retrospective and continuous velocity improvement",
        ],
      },
      {
        phase: "Phase 04",
        title: "Quarterly Executive Review & Roadmap Planning",
        duration: "Quarterly",
        deliverables: [
          "Quarterly technical velocity and output retrospective",
          "Technical debt audit and refactoring recommendations",
          "Strategic roadmap alignment for upcoming quarters",
        ],
      },
    ],
    deliverables: [
      { item: "Dedicated Engineering Pod", detail: "Full-time senior engineers and designers dedicated exclusively to your product", standard: "Full-Time" },
      { item: "Continuous Code Releases", detail: "Tested, documented, and reviewed PRs merged directly to your repository", standard: "Bi-Weekly" },
      { item: "Sprint Reporting & Metrics", detail: "Clear burndown charts, velocity tracking, and roadmap forecasts", standard: "Transparent" },
    ],
    caseStudy: {
      client: "FinGrid Cloud Solutions",
      metric: "14-Month Retainer Partnership",
      desc: "Embedded a 6-person dedicated engineering and design squad, accelerating their roadmap by 9 months and shipping their v2.0 enterprise cloud product ahead of schedule.",
      tag: "LONG-TERM SQUAD EMBED",
    },
    faqs: [
      {
        question: "How quickly can a dedicated squad be onboarded and coding?",
        answer: "Our pre-vetted senior engineers can be onboarded, access-provisioned, and actively pushing pull requests into your codebase within 5 to 7 business days.",
      },
      {
        question: "Can we adjust the squad size or skill mix as priorities change?",
        answer: "Yes. Our retainer agreements offer monthly flexibility to add specialized talent (such as security specialists, 3D WebGL artists, or mobile engineers) as your roadmap demands evolve.",
      },
    ],
  },
  {
    id: "enterprise-software",
    metaTitle: "Custom Software Development Services | RND Technosoft",
    index: "[05]",
    title: "CUSTOM SOFTWARE DEVELOPMENT",
    highlightText: "& BUSINESS AUTOMATION SOLUTIONS",
    tagline: "Every business has unique processes, operational challenges and growth ambitions. We develop custom software solutions designed around your business requirements.",
    category: "Technology Solutions",
    image: "/images/nebula_cloud_os_3d.jpg",
    sla: "STRATEGY-LED DESIGN",
    avatarIcon: "💼",
    badge: "CUSTOM SOFTWARE // ERP // CRM // BUSINESS AUTOMATION",
    heroStats: [
      { value: "Custom-Built", label: "Software Application", desc: "Tailored to your business processes" },
      { value: "Source Code", label: "& Repository Handover", desc: "Complete ownership and access" },
      { value: "Technical", label: "Documentation & Testing", desc: "Comprehensive guides included" },
      { value: "Deployment", label: "& Maintenance Options", desc: "Full support available" },
    ],
    overview: [
      "Every business has unique processes, operational challenges and growth ambitions. Generic software doesn't always provide the flexibility or functionality needed to manage them effectively. RND Technosoft develops custom software solutions designed around your business requirements, helping you streamline operations, simplify workflows and bring essential business functions together through technology.",
      "From enterprise applications and ERP systems to CRM platforms, inventory management and workflow automation, we engineer practical digital solutions that connect your processes, organise information and support your business as it evolves.",
    ],
    specs: [
      "Custom business applications: ERP, CRM, management tools",
      "Backend development: API integration, business logic",
      "Database management: PostgreSQL, MongoDB, reporting systems",
      "Testing & deployment: Quality assurance, security, cloud hosting",
    ],
    architecturePillars: [
      {
        title: "CUSTOM BUSINESS APPLICATIONS & ERP SYSTEMS",
        desc: "Develop tailored business applications that bring essential operations into one organised platform. From ERP systems to employee portals and business management tools, we build software around your workflows.",
        iconName: "Briefcase",
        metrics: "Business Application Development",
        tech: ["React", "Node.js", "TypeScript", "PostgreSQL"],
      },
      {
        title: "BACKEND DEVELOPMENT & API INTEGRATION",
        desc: "Build the application logic that powers your software. Develop custom backend functionality, connect third-party platforms and integrate business systems through suitable APIs.",
        iconName: "Server",
        metrics: "Backend & Integration Engineering",
        tech: ["Node.js", "Express", "REST APIs", "GraphQL"],
      },
      {
        title: "DATABASE MANAGEMENT & BUSINESS INTELLIGENCE",
        desc: "Structure and manage business information through well-designed databases, reporting systems and interactive dashboards. Make important operational data easier to organise and access.",
        iconName: "Database",
        metrics: "Data Management & Reporting",
        tech: ["PostgreSQL", "MongoDB", "Redis", "Dashboards"],
      },
      {
        title: "SOFTWARE TESTING, SECURITY & DEPLOYMENT",
        desc: "Prepare your software for reliable business use through functional testing, access controls, security considerations and structured deployment. Support future improvements through planned maintenance.",
        iconName: "Shield",
        metrics: "Quality & Deployment",
        tech: ["Testing", "Security", "AWS", "CI/CD"],
      },
    ],
    techStack: [
      { name: "React", role: "Frontend Framework", badge: "Frontend" },
      { name: "Node.js", role: "Backend Runtime", badge: "Backend" },
      { name: "TypeScript", role: "Type Safety", badge: "Language" },
      { name: "PostgreSQL", role: "Primary Database", badge: "Database" },
      { name: "MongoDB", role: "NoSQL Database", badge: "Database" },
      { name: "Express", role: "API Framework", badge: "API" },
      { name: "Docker", role: "Containerization", badge: "DevOps" },
      { name: "Redis", role: "Caching Layer", badge: "Cache" },
      { name: "REST APIs", role: "API Architecture", badge: "Integration" },
      { name: "GraphQL", role: "Query Language", badge: "API" },
      { name: "AWS", role: "Cloud Platform", badge: "Cloud" },
      { name: "CI/CD", role: "Deployment", badge: "Automation" },
    ],
    processSteps: [
      {
        phase: "Phase 01",
        title: "Requirements Analysis & Planning",
        duration: "Weeks 1 - 2",
        deliverables: [
          "Business process analysis & requirements gathering",
          "Technical architecture & system design",
          "Database schema & data modeling",
          "Project timeline & development milestones",
        ],
      },
      {
        phase: "Phase 02",
        title: "Design & Prototyping",
        duration: "Weeks 3 - 4",
        deliverables: [
          "Application interface design & prototypes",
          "User experience flow & navigation structure",
          "Component library & design system",
          "Approval & design finalization",
        ],
      },
      {
        phase: "Phase 03",
        title: "Development & Integration",
        duration: "Weeks 5 - 10",
        deliverables: [
          "Custom application development",
          "Backend logic & API development",
          "Third-party system integrations",
          "Regular demos & progress reviews",
        ],
      },
      {
        phase: "Phase 04",
        title: "Testing, Deployment & Support",
        duration: "Weeks 11 - 12",
        deliverables: [
          "Functional testing & quality assurance",
          "Security testing & performance optimization",
          "Production deployment & training",
          "Post-launch support & maintenance",
        ],
      },
    ],
    deliverables: [
      { item: "Custom-Built Software Application", detail: "Tailored software developed specifically around your business processes and requirements", standard: "Fully Customized" },
      { item: "Source Code & Repository Handover", detail: "Complete source code access with clean repository structure and documentation", standard: "100% Ownership" },
      { item: "Technical Documentation & Testing", detail: "Comprehensive technical documentation, user guides and quality assurance testing", standard: "Complete Documentation" },
      { item: "Deployment & Maintenance Options", detail: "Production deployment setup with ongoing maintenance and support packages available", standard: "Full Support" },
    ],
    caseStudy: {
      client: "RND Technosoft",
      metric: "Custom Software Development",
      desc: "We believe great software starts with understanding how your business works. Our approach combines technology, functionality and thoughtful engineering to build solutions around your goals.",
      tag: "OUR SOFTWARE ENGINEERING APPROACH",
    },
    faqs: [
      {
        question: "What is custom software development, and why does my business need it?",
        answer: "Custom software development involves building applications specifically around your business processes and requirements. It helps businesses manage unique workflows, automate repetitive tasks, organise information and create solutions that standard software may not fully support.",
      },
      {
        question: "What types of custom software does RND Technosoft develop?",
        answer: "We develop custom ERP and CRM systems, business management applications, inventory management software, HR and employee management systems, customer portals, workflow automation tools, dashboards and enterprise applications.",
      },
      {
        question: "Can you develop software tailored to our existing business processes?",
        answer: "Absolutely. We begin by understanding your current workflows, operational challenges and business objectives. Based on these requirements, we plan and develop software with features and functionality suited to the way your organisation operates.",
      },
      {
        question: "What is the difference between custom software and ready-made software?",
        answer: "Ready-made software offers predefined features for general business requirements. Custom software is developed specifically for your organisation, giving you greater flexibility over functionality, integrations, workflows and future enhancements.",
      },
      {
        question: "Can you integrate custom software with our existing applications?",
        answer: "Yes. We can assess your existing systems and develop suitable API integrations to connect applications, share information and streamline business workflows, depending on technical feasibility and third-party access.",
      },
      {
        question: "Can you develop ERP and CRM software for our organisation?",
        answer: "Yes. We can build customised ERP and CRM applications to support business activities such as customer management, sales tracking, inventory, employee management, reporting and other operational requirements.",
      },
      {
        question: "How long does custom software development take?",
        answer: "The development timeline depends on the project's complexity, number of modules, required integrations, design and testing requirements. After reviewing your project scope, we provide an estimated timeline and development milestones.",
      },
      {
        question: "Will we receive the source code and ownership of the software?",
        answer: "Source code access, intellectual property ownership, repository handover and technical documentation are defined in the project agreement. All applicable ownership and handover terms are discussed before development begins.",
      },
      {
        question: "Do you provide software maintenance and support after deployment?",
        answer: "Yes. We offer maintenance and support options that can include bug fixes, software updates, performance improvements, technical assistance and additional features based on the agreed support arrangement.",
      },
      {
        question: "How much does custom software development cost?",
        answer: "The cost depends on the software's functionality, complexity, number of modules, integrations and development timeline. Contact our team with your requirements to receive a customised project estimate.",
      },
    ],
  },
  {
    id: "ecommerce-platforms",
    index: "[06]",
    title: "E-COMMERCE WEBSITE DEVELOPMENT",
    highlightText: "BUILT TO SELL. DESIGNED TO GROW",
    tagline: "Your online store is more than a digital catalogue. It's where customers discover your products, explore your brand and make purchasing decisions.",
    category: "Technology Solutions",
    image: "/images/service_ecommerce.jpg",
    sla: "E-COMMERCE // ONLINE STORES // DIGITAL COMMERCE",
    avatarIcon: "🛒",
    badge: "E-COMMERCE // ONLINE STORES // DIGITAL COMMERCE",
    heroStats: [
      { value: "Custom", label: "E-commerce Storefront", desc: "Engaging online store design" },
      { value: "Product", label: "Catalogue & Shopping Cart", desc: "Complete product management" },
      { value: "Payment", label: "Gateway & Order Integration", desc: "Secure checkout functionality" },
      { value: "Testing", label: "& Deployment Support", desc: "Launch assistance included" },
    ],
    overview: [
      "Your online store is more than a digital catalogue. It's where customers discover your products, explore your brand and make purchasing decisions. A successful e-commerce website needs to deliver a seamless shopping experience while supporting your business operations.",
      "RND Technosoft develops customised e-commerce websites and online stores designed around your products, customers and business goals. We combine intuitive storefront design, powerful functionality and modern technologies to create engaging digital shopping experiences. From custom e-commerce website development and Shopify-based stores to product catalogues, shopping carts, secure payment gateway integrations and order management systems, we build digital commerce solutions that help businesses establish and expand their online presence.",
    ],
    specs: [
      "E-commerce platforms: Shopify Plus, WooCommerce, custom solutions",
      "Frontend technologies: Next.js, React.js, TypeScript",
      "Payment integration: Secure gateway integration & checkout",
      "Backend & integrations: CRM, ERP, inventory, shipping systems",
    ],
    architecturePillars: [
      {
        title: "CUSTOM E-COMMERCE STOREFRONT DEVELOPMENT",
        desc: "Build visually engaging, responsive online stores with intuitive navigation, organised product categories and customised shopping experiences that reflect your brand identity.",
        iconName: "ShoppingBag",
        metrics: "Storefront & UI Development",
        tech: ["Next.js", "React.js", "Tailwind CSS", "TypeScript"],
      },
      {
        title: "PRODUCT CATALOGUE & INVENTORY MANAGEMENT",
        desc: "Organise products, categories, variants, pricing and stock information through structured product management functionality. Create an easier shopping experience for customers and simpler store management for businesses.",
        iconName: "Package",
        metrics: "Product & Inventory Management",
        tech: ["PostgreSQL", "MongoDB", "Product APIs", "Admin Panels"],
      },
      {
        title: "SHOPPING CART & SECURE CHECKOUT INTEGRATION",
        desc: "Develop streamlined shopping carts and checkout experiences with payment gateway integration, shipping calculations, discount management and order confirmation functionality.",
        iconName: "CreditCard",
        metrics: "Checkout & Payment Integration",
        tech: ["Stripe", "PayPal", "Razorpay", "Payment Gateways"],
      },
      {
        title: "ORDER MANAGEMENT & BUSINESS INTEGRATIONS",
        desc: "Connect your online store with suitable CRM, ERP, inventory, shipping and third-party business systems. Simplify order processing, fulfilment workflows and essential store operations.",
        iconName: "Truck",
        metrics: "E-commerce Integration & Automation",
        tech: ["CRM Integration", "ERP Systems", "Shipping APIs", "Webhooks"],
      },
    ],
    techStack: [
      { name: "Shopify Plus", role: "Enterprise E-commerce Platform", badge: "Platform" },
      { name: "Next.js", role: "Modern & Headless Storefronts", badge: "Framework" },
      { name: "React.js", role: "Interactive Shopping Experiences", badge: "Frontend" },
      { name: "TypeScript", role: "Structured Application Development", badge: "Language" },
      { name: "Tailwind CSS", role: "Responsive Storefront UI Design", badge: "CSS Framework" },
      { name: "Node.js", role: "Backend & E-commerce APIs", badge: "Backend" },
      { name: "PostgreSQL", role: "Product & Order Data Management", badge: "Database" },
      { name: "Redis", role: "Caching & Session Management", badge: "Cache" },
    ],
    processSteps: [
      {
        phase: "Phase 01",
        title: "E-commerce Planning & Requirements",
        duration: "Weeks 1 - 2",
        deliverables: [
          "Business requirements & product catalogue analysis",
          "Platform selection & technical recommendations",
          "E-commerce design & storefront prototyping",
          "Payment gateway & integration planning",
        ],
      },
      {
        phase: "Phase 02",
        title: "Storefront Design & Development",
        duration: "Weeks 3 - 5",
        deliverables: [
          "Responsive storefront UI development",
          "Product page layouts & category structures",
          "Shopping cart & checkout interface",
          "Brand identity integration",
        ],
      },
      {
        phase: "Phase 03",
        title: "E-commerce Feature Development",
        duration: "Weeks 6 - 10",
        deliverables: [
          "Product catalogue & inventory management",
          "Shopping cart & checkout functionality",
          "Payment gateway & order processing integration",
          "CRM, ERP & shipping system connections",
        ],
      },
      {
        phase: "Phase 04",
        title: "Testing, Launch & Store Support",
        duration: "Weeks 11 - 12",
        deliverables: [
          "E-commerce functionality testing",
          "Payment & checkout security testing",
          "Store launch & deployment",
          "Post-launch monitoring & support",
        ],
      },
    ],
    deliverables: [
      { item: "Custom E-commerce Storefront", detail: "Fully responsive online store with engaging design and intuitive navigation", standard: "Mobile-Ready" },
      { item: "Product Catalogue & Shopping Cart", detail: "Complete product management system with shopping cart and checkout functionality", standard: "Fully Functional" },
      { item: "Payment Gateway & Order Integration", detail: "Secure payment processing with order management and confirmation system", standard: "Secure & Reliable" },
      { item: "Testing & Deployment Support", detail: "Quality assurance testing, launch assistance and post-deployment monitoring", standard: "Launch Ready" },
    ],
    caseStudy: {
      client: "RND Technosoft",
      metric: "E-commerce Development",
      desc: "A great online store makes shopping effortless. We bring design, functionality and technology together to create e-commerce experiences that connect products with people.",
      tag: "OUR DIGITAL COMMERCE APPROACH",
    },
    faqs: [
      {
        question: "Why should we choose headless commerce over a standard Shopify theme?",
        answer: "A standard Shopify theme is suitable for many businesses looking to launch and manage an online store efficiently. Headless commerce separates the storefront from the commerce backend, offering greater flexibility over design, functionality and integrations. The right approach depends on your business requirements, budget and technical needs.",
      },
      {
        question: "Can you migrate our existing online store, products and customer data to a new platform?",
        answer: "Yes. We can assess your existing e-commerce platform and plan the migration of available product information, categories, customer records and order data, depending on the source platform and data access. Migration scope, data mapping and validation are agreed upon before implementation.",
      },
      {
        question: "What e-commerce platforms do you work with?",
        answer: "We can develop e-commerce websites using suitable technologies and platforms such as Shopify, WooCommerce and custom development frameworks. Platform selection depends on your product catalogue, business model, integrations and operational requirements.",
      },
      {
        question: "Can you build a fully customised e-commerce website?",
        answer: "Yes. We develop customised online stores with tailored storefront designs, product pages, category structures, shopping carts, checkout experiences and business-specific functionality to match your brand and requirements.",
      },
      {
        question: "Can you integrate payment gateways into our online store?",
        answer: "Yes. We can integrate suitable payment gateways to support online transactions. The available options depend on your target market, preferred payment methods, platform compatibility and payment provider requirements.",
      },
      {
        question: "Can you integrate inventory, shipping and order management systems?",
        answer: "Yes. We can connect your online store with suitable inventory management, shipping, CRM, ERP and order management systems through available APIs or integration methods. This helps streamline store operations and information flow.",
      },
      {
        question: "Will our e-commerce website be mobile-friendly and SEO-ready?",
        answer: "We develop responsive e-commerce websites designed to work across desktop, tablet and mobile devices. We can also implement SEO-friendly page structures, metadata, product information organisation and technical SEO considerations to support search engine visibility.",
      },
      {
        question: "Can we manage products, prices and orders ourselves after launch?",
        answer: "Yes. We can provide an administrative interface or platform dashboard that allows authorised users to manage products, pricing, inventory, orders, categories and other store information, depending on the selected solution.",
      },
      {
        question: "How long does it take to develop an e-commerce website?",
        answer: "The timeline depends on the platform, number of products, design complexity, required functionality, third-party integrations and content readiness. After understanding your requirements, we provide a project estimate and development milestones.",
      },
      {
        question: "How much does e-commerce website development cost?",
        answer: "The cost depends on the platform, design requirements, product catalogue size, custom features, integrations and overall project scope. Contact our team with your requirements to receive a customised quotation.",
      },
    ],
  },
  {
    id: "professional-videography",
    index: "[14]",
    title: "PROFESSIONAL VIDEOGRAPHY & CREATIVE VIDEO PRODUCTION",
    highlightText: "",
    tagline:
      "Every brand has a story worth showing. Professional videography transforms your ideas, products and experiences into compelling visual stories that capture attention and leave a lasting impression.",
    category: "Media Production",
    image: "/images/service_media.jpg",
    sla: "VISUAL STORYTELLING // VIDEO PRODUCTION",
    avatarIcon: "🎬",
    badge: "VISUAL STORYTELLING // VIDEO PRODUCTION",
    heroStats: [
      { value: "Corporate", label: "& Brand Videos", desc: "Professional business video production" },
      { value: "Product", label: "& Promotional Videos", desc: "Engaging product showcases" },
      { value: "Business", label: "& Event Coverage", desc: "Event and activity documentation" },
      { value: "Edited", label: "Videos for Digital Platforms", desc: "Platform-ready content" },
    ],
    overview: [
      "Every brand has a story worth showing. Professional videography transforms your ideas, products and experiences into compelling visual stories that capture attention and leave a lasting impression.",
      "From corporate films and promotional videos to product showcases, brand campaigns and social media content, RND Technosoft creates engaging video experiences through thoughtful planning, professional filming and creative execution.",
    ],
    specs: [
      "Corporate videos: company films, brand stories, business presentations",
      "Product videos: showcases, demonstrations, promotional content",
      "Event coverage: corporate events, launches, conferences, exhibitions",
      "Social media: short-form videos, reels, behind-the-scenes content",
    ],
    architecturePillars: [
      {
        title: "CORPORATE & BRAND VIDEOGRAPHY",
        desc: "Create corporate films, company introduction videos, brand stories and business presentations that showcase your organisation, people, culture and capabilities.",
        iconName: "Building",
        metrics: "Corporate Video Production",
        tech: ["Corporate Films", "Brand Stories", "Company Videos", "Business Presentations"],
      },
      {
        title: "PRODUCT & PROMOTIONAL VIDEOGRAPHY",
        desc: "Capture your products, services and offerings through engaging product showcases, promotional videos, demonstrations and campaign visuals.",
        iconName: "Package",
        metrics: "Product Video Production",
        tech: ["Product Showcases", "Promotional Videos", "Demos", "Campaign Visuals"],
      },
      {
        title: "EVENT & BUSINESS COVERAGE",
        desc: "Document corporate events, launches, conferences, exhibitions, business activities and special occasions through professional video coverage.",
        iconName: "Calendar",
        metrics: "Event Video Coverage",
        tech: ["Event Coverage", "Launches", "Conferences", "Corporate Activities"],
      },
      {
        title: "CREATIVE & SOCIAL MEDIA VIDEOGRAPHY",
        desc: "Produce short-form videos, reels, behind-the-scenes footage, promotional clips and platform-ready video content designed for digital engagement.",
        iconName: "Video",
        metrics: "Social Media Video Production",
        tech: ["Short-Form Videos", "Reels", "Behind-the-Scenes", "Digital Content"],
      },
    ],
    techStack: [
      { name: "Adobe Premiere Pro", role: "Professional Video Editing", badge: "Editing" },
      { name: "Adobe After Effects", role: "Motion Graphics & Visual Effects", badge: "VFX" },
      { name: "DaVinci Resolve", role: "Colour Grading & Post-Production", badge: "Post" },
      { name: "Adobe Audition", role: "Audio Editing & Enhancement", badge: "Audio" },
      { name: "Cinema 4D", role: "3D Visuals & Motion Design", badge: "3D" },
    ],
    processSteps: [
      {
        phase: "Phase 01",
        title: "Concept & Planning",
        duration: "Week 1",
        deliverables: [
          "Creative concept and video direction",
          "Storyboard and shot planning",
          "Production schedule and logistics",
          "Location and talent coordination",
        ],
      },
      {
        phase: "Phase 02",
        title: "Filming & Production",
        duration: "Week 2",
        deliverables: [
          "Professional video filming",
          "Multi-angle coverage",
          "Audio recording",
          "Behind-the-scenes capture",
        ],
      },
      {
        phase: "Phase 03",
        title: "Editing & Post-Production",
        duration: "Weeks 3 - 4",
        deliverables: [
          "Video editing and assembly",
          "Colour correction and grading",
          "Motion graphics and visual effects",
          "Audio mixing and enhancement",
        ],
      },
      {
        phase: "Phase 04",
        title: "Delivery & Formats",
        duration: "Week 5",
        deliverables: [
          "Final video delivery in required formats",
          "Platform-ready versions",
          "Source files and project assets",
          "Usage guidance",
        ],
      },
    ],
    deliverables: [
      { item: "Corporate & Brand Videos", detail: "Professional corporate films, brand stories and business videos", standard: "HD & 4K" },
      { item: "Product & Promotional Videos", detail: "Engaging product showcases and promotional video content", standard: "Multi-Format" },
      { item: "Business & Event Coverage", detail: "Professional video coverage of corporate events and activities", standard: "Full Coverage" },
      { item: "Edited Videos for Digital Platforms", detail: "Platform-ready edited videos for social media and digital channels", standard: "Platform-Ready" },
    ],
    caseStudy: {
      client: "RND Technosoft",
      metric: "Professional Videography",
      desc: "A powerful video does more than capture a moment. It communicates a story, creates an experience and brings your brand closer to its audience.",
      tag: "PRODUCTION QUALITY // CREATIVE EXECUTION",
    },
    faqs: [
      {
        question: "What types of videos does RND Technosoft produce?",
        answer: "We produce corporate films, brand videos, product showcases, promotional videos, event coverage, social media content, reels and other business video content tailored to your requirements.",
      },
      {
        question: "Do you handle the complete production process?",
        answer: "Yes. We manage the full production workflow including concept development, planning, filming, editing, colour grading, audio enhancement and final delivery in the required formats.",
      },
      {
        question: "Can you film at our office, factory or event location?",
        answer: "Yes. We can film on-location at your premises, events, studios or other suitable locations. Travel, permits and logistics are discussed during project planning.",
      },
      {
        question: "What video formats do you deliver?",
        answer: "We deliver videos in formats suitable for web, social media, presentations and broadcast. This can include MP4, MOV and other formats based on your requirements.",
      },
      {
        question: "Can you create short-form videos for social media?",
        answer: "Yes. We produce short-form videos, reels and platform-ready content designed for Instagram, Facebook, LinkedIn, YouTube and other social media channels.",
      },
      {
        question: "How long does video production take?",
        answer: "Timelines depend on the video type, complexity, filming requirements and editing scope. A typical corporate video takes 2-4 weeks. We provide a project timeline after understanding your requirements.",
      },
    ],
    // ── Per-service page content overrides ──
    metaTitle: "Professional Videography Services | RND Technosoft",
    metaDescription:
      "RND Technosoft offers professional videography services, including corporate films, product videos, promotional videos, event coverage and social media video production.",
    deliverablesCardLabel: "VIDEO PRODUCTION // PROJECT DELIVERABLES",
    deliverablesCardDescription:
      "Professionally produced video content tailored to your brand, audience and communication objectives.",
    deliverablesCtaLabel: "REQUEST A VIDEO PRODUCTION QUOTE",
    qualityCardLabel: "PRODUCTION QUALITY // CREATIVE EXECUTION",
    quoteAuthor: "RND Technosoft • Professional Videography",
    contactCardLabel: "PRODUCTION CONSULTATION",
    contactCardHeading: "SPEAK WITH OUR CREATIVE TEAM",
    contactCardDescription:
      "Have a video concept in mind? Let's plan and produce something worth watching.",
    contactCardHref: "/contact-us?intent=media",
    scopeSectionLabel: "VIDEO PRODUCTION // CREATIVE EXECUTION",
    scopeSectionHeading: "FROM CONCEPT TO CAMERA. BRING YOUR STORY TO LIFE.",
    scopeSectionDescription:
      "We combine creative direction, production planning and professional filming to create videos that present your brand, products and experiences with clarity and impact.",
    techStackSectionLabel: "PRODUCTION WORKFLOW // CREATIVE TOOLS",
  },
  {
    id: "professional-photography",
    index: "[15]",
    title: "PROFESSIONAL PHOTOGRAPHY & VISUAL BRAND STORYTELLING",
    highlightText: "",
    tagline:
      "Great photography gives your brand a powerful visual identity. From showcasing products and capturing business environments to documenting people and experiences, professional photography helps communicate your brand's story through impactful imagery.",
    category: "Media Production",
    image: "/images/showreel_thumb.jpg",
    sla: "VISUAL STORYTELLING // PROFESSIONAL PHOTOGRAPHY",
    avatarIcon: "📸",
    badge: "VISUAL STORYTELLING // PROFESSIONAL PHOTOGRAPHY",
    heroStats: [
      { value: "Product", label: "& Commercial Photography", desc: "Professional product visuals" },
      { value: "Corporate", label: "& Professional Portraits", desc: "Business headshots and team photos" },
      { value: "Lifestyle", label: "& Brand Photography", desc: "Brand storytelling imagery" },
      { value: "Edited", label: "High-Resolution Images", desc: "Production-ready visual assets" },
    ],
    overview: [
      "Great photography gives your brand a powerful visual identity. From showcasing products and capturing business environments to documenting people and experiences, professional photography helps communicate your brand's story through impactful imagery.",
      "RND Technosoft creates visually compelling photographs for businesses, brands and marketing campaigns. Whether you need product photography, corporate portraits, lifestyle shoots, architectural images or promotional visuals, we focus on capturing every detail with creativity and purpose.",
    ],
    specs: [
      "Product photography: product shots, catalogue images, commercial photography",
      "Corporate photography: headshots, team portraits, workplace environments",
      "Lifestyle & brand photography: brand campaigns, lifestyle imagery, promotional visuals",
      "Architectural & event photography: interiors, commercial spaces, events, exhibitions",
    ],
    architecturePillars: [
      {
        title: "PRODUCT & COMMERCIAL PHOTOGRAPHY",
        desc: "Showcase products through professional product shots, detailed close-ups, catalogue photography and promotional images designed for websites, e-commerce platforms and marketing campaigns.",
        iconName: "Package",
        metrics: "Product Photography",
        tech: ["Product Shots", "Catalogue Photography", "Commercial Photography", "Promotional Images"],
      },
      {
        title: "CORPORATE & BUSINESS PHOTOGRAPHY",
        desc: "Capture professional headshots, team portraits, workplace environments, corporate activities and business events to present your organisation authentically.",
        iconName: "Users",
        metrics: "Corporate Photography",
        tech: ["Headshots", "Team Portraits", "Workplace Photography", "Corporate Events"],
      },
      {
        title: "LIFESTYLE & BRAND PHOTOGRAPHY",
        desc: "Create storytelling-driven lifestyle images, brand campaigns and promotional visuals that communicate your brand personality, products and customer experiences.",
        iconName: "Camera",
        metrics: "Brand Photography",
        tech: ["Lifestyle Photography", "Brand Campaigns", "Promotional Visuals", "Storytelling"],
      },
      {
        title: "ARCHITECTURAL & EVENT PHOTOGRAPHY",
        desc: "Photograph interiors, commercial spaces, buildings, exhibitions, conferences, launches and business events with attention to composition and detail.",
        iconName: "Building",
        metrics: "Architectural & Event Photography",
        tech: ["Interior Photography", "Commercial Spaces", "Event Photography", "Exhibitions"],
      },
    ],
    techStack: [
      { name: "Adobe Lightroom", role: "Photo Editing & Colour Correction", badge: "Editing" },
      { name: "Adobe Photoshop", role: "Retouching & Image Enhancement", badge: "Retouching" },
      { name: "Capture One", role: "Professional Photo Processing", badge: "Processing" },
      { name: "Adobe Bridge", role: "Image Organisation & Asset Management", badge: "Management" },
      { name: "Adobe Camera Raw", role: "RAW Image Processing", badge: "RAW" },
    ],
    processSteps: [
      {
        phase: "Phase 01",
        title: "Planning & Creative Direction",
        duration: "Week 1",
        deliverables: [
          "Shoot concept and creative direction",
          "Shot list and planning",
          "Location and styling coordination",
          "Props and requirements planning",
        ],
      },
      {
        phase: "Phase 02",
        title: "Photography Session",
        duration: "Week 2",
        deliverables: [
          "Professional photography session",
          "Multiple angles and compositions",
          "Lighting and set management",
          "On-site review and adjustments",
        ],
      },
      {
        phase: "Phase 03",
        title: "Editing & Post-Production",
        duration: "Weeks 3 - 4",
        deliverables: [
          "Image selection and curation",
          "Colour correction and editing",
          "Retouching and enhancement",
          "Format preparation",
        ],
      },
      {
        phase: "Phase 04",
        title: "Delivery & Handover",
        duration: "Week 5",
        deliverables: [
          "High-resolution image delivery",
          "Web-optimised versions",
          "Edited and retouched final images",
          "Usage guidance",
        ],
      },
    ],
    deliverables: [
      { item: "Product & Commercial Photography", detail: "Professional product shots and commercial photography for marketing and e-commerce", standard: "High-Resolution" },
      { item: "Corporate & Professional Portraits", detail: "Professional headshots, team portraits and corporate photography", standard: "Professional Grade" },
      { item: "Lifestyle & Brand Photography", detail: "Brand storytelling lifestyle images and promotional campaign photography", standard: "Campaign-Ready" },
      { item: "Edited High-Resolution Images", detail: "Professionally edited and retouched high-resolution images", standard: "Production-Ready" },
    ],
    caseStudy: {
      client: "RND Technosoft",
      metric: "Professional Photography",
      desc: "Every photograph tells a story. We capture the details, emotions and experiences that make your brand visually distinctive and memorable.",
      tag: "VISUAL QUALITY // CREATIVE EXECUTION",
    },
    faqs: [
      {
        question: "What types of photography does RND Technosoft offer?",
        answer: "We offer product photography, corporate portraits, lifestyle and brand photography, architectural photography, event coverage and commercial photography services tailored to your business needs.",
      },
      {
        question: "Can you photograph at our office, studio or event location?",
        answer: "Yes. We can photograph on-location at your premises, studio, events or other suitable locations. Travel, logistics and setup requirements are discussed during project planning.",
      },
      {
        question: "Do you provide product photography for e-commerce?",
        answer: "Yes. We create professional product photography suitable for e-commerce platforms, websites, catalogues and marketing materials with consistent lighting and clean backgrounds.",
      },
      {
        question: "What image formats do you deliver?",
        answer: "We deliver high-resolution edited images in JPEG, PNG and TIFF formats. We can also provide web-optimised versions and specific sizes based on your requirements.",
      },
      {
        question: "Can you handle both photography and videography for our project?",
        answer: "Yes. We can combine photography and videography services for a single project. This is often more efficient and ensures consistent visual direction across both formats.",
      },
      {
        question: "How long does a photography session take?",
        answer: "Session duration depends on the scope, number of subjects, locations and creative requirements. We provide a detailed schedule after understanding your project requirements.",
      },
    ],
    // ── Per-service page content overrides ──
    metaTitle: "Professional Photography Services | RND Technosoft",
    metaDescription:
      "Explore professional photography services by RND Technosoft, including product photography, corporate portraits, lifestyle photography, brand shoots and event coverage.",
    deliverablesCardLabel: "PHOTOGRAPHY PRODUCTION // PROJECT DELIVERABLES",
    deliverablesCardDescription:
      "Professionally captured and edited photographs tailored to your brand, products and creative requirements.",
    deliverablesCtaLabel: "REQUEST A PHOTOGRAPHY QUOTE",
    qualityCardLabel: "VISUAL QUALITY // CREATIVE EXECUTION",
    quoteAuthor: "RND Technosoft • Professional Photography",
    contactCardLabel: "CREATIVE CONSULTATION",
    contactCardHeading: "SPEAK WITH OUR CREATIVE TEAM",
    contactCardDescription:
      "Planning a product shoot, corporate photoshoot or brand campaign? Let's create visuals that make an impression.",
    contactCardHref: "/contact-us?intent=media",
    scopeSectionLabel: "PHOTOGRAPHY PRODUCTION // CREATIVE EXECUTION",
    scopeSectionHeading: "CAPTURE THE DETAILS. COMMUNICATE THE STORY.",
    scopeSectionDescription:
      "We combine creative direction, thoughtful composition and professional photography techniques to create images that represent your brand with clarity and visual impact.",
    techStackSectionLabel: "VISUAL PRODUCTION // CREATIVE TOOLS",
  },
];

export function getServiceById(id: string): ServiceDetail | undefined {
  return servicesData.find((s) => s.id === id);
}
