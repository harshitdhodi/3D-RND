import { LucideIcon, Code, TrendingUp, Palette, Video } from "lucide-react";

export interface CategorySubItem {
  index: string;
  title: string;
  tagline: string;
  desc: string;
  tags: string[];
  sla: string;
  badge?: string;
  href: string;
  image: string;
  featured?: boolean;
}

export interface CategoryStat {
  val: string;
  label: string;
  sub: string;
}

export interface CategoryFaq {
  q: string;
  a: string;
}

export interface CategoryPageData {
  slug: string;
  bannerTitle: string;
  bannerSubtitle: string;
  bannerImage: string;
  breadcrumb: string;
  divisionLabel: string;
  divisionNumber: string;
  heroTitle: string;
  heroHighlight: string;
  heroDesc: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  stats: CategoryStat[];
  subcategories: CategorySubItem[];
  disciplineHeading: string;
  disciplineDesc: string;
  faqs: CategoryFaq[];
  iconName: "Code" | "TrendingUp" | "Palette" | "Video";
}

export const categoryPagesData: Record<string, CategoryPageData> = {
  "technology-solution": {
    slug: "technology-solution",
    bannerTitle: "TECHNOLOGY SOLUTIONS",
    bannerSubtitle: "ENTERPRISE ENGINEERING & CLOUD PLATFORMS",
    bannerImage: "/banner/technology.png",
    breadcrumb: "Technology Solutions",
    divisionLabel: "SERVICE CATEGORY // DIVISION 01",
    divisionNumber: "01",
    iconName: "Code",
    heroTitle: "ENTERPRISE SOFTWARE &",
    heroHighlight: "CLOUD ENGINEERING",
    heroDesc:
      "We architect fault-tolerant digital foundations designed to process millions of transactions with sub-second response times. From enterprise Next.js platforms to autonomous cloud microservices, we build software engineered to scale without bottlenecks.",
    primaryCtaLabel: "EXPLORE WEB DEV SPEC",
    primaryCtaHref: "/technology-solution/web-development",
    stats: [
      { val: "99.99%", label: "Production SLA", sub: "Multi-region edge failover" },
      { val: "<380ms", label: "Global Edge TTFB", sub: "Sub-second render speeds" },
      { val: "150+", label: "Enterprise Deployments", sub: "Across 18 global industries" },
      { val: "100%", label: "Source IP Ownership", sub: "Full code repository ownership" },
    ],
    disciplineHeading: "SELECT A SPECIALIZED DISCIPLINE",
    disciplineDesc:
      "Explore dedicated architecture specifications, tech stacks, and production SLAs across our specialized technology disciplines.",
    subcategories: [
      {
        index: "01.1",
        title: "Custom Web Development",
        tagline: "Next.js 15, React 19 & High-Performance Web Applications",
        desc: "Full-stack enterprise web platforms engineered with Next.js 15 App Router, React 19 Server Components, 90+ Core Web Vitals, and dynamic 60 FPS spatial micro-interactions.",
        sla: "99.99% UPTIME SLA",
        badge: "MOST POPULAR",
        tags: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "REST/GraphQL"],
        href: "/technology-solution/web-development",
        image: "/images/service_webdev.jpg",
        featured: true,
      },
      {
        index: "01.2",
        title: "Cloud Infrastructure & DevOps",
        tagline: "Kubernetes Orchestration, Multi-Region Mesh & Zero-Trust Cloud",
        desc: "Production-grade cloud architecture on AWS and GCP with automated CI/CD pipelines, blue/green deployments, Terraform IaC, and 24/7 telemetry monitoring.",
        sla: "<15m INCIDENT RESPONSE",
        badge: "ENTERPRISE GRADE",
        tags: ["Docker", "Kubernetes", "Terraform", "AWS / GCP", "GitHub Actions"],
        href: "/technology-solution/cloud-infrastructure-devops",
        image: "/images/service_cloud_color.jpg",
      },
      {
        index: "01.3",
        title: "Enterprise Software Solutions",
        tagline: "Custom SaaS Engines, Internal ERP & Mission-Critical Systems",
        desc: "Bespoke SaaS architectures, high-load distributed backends, internal operations software, and relational database partitioning engineered for long-term scalability.",
        sla: "100% IP OWNERSHIP",
        badge: "SOC2 COMPLIANT",
        tags: ["Microservices", "PostgreSQL", "Node.js / Go", "SOC2"],
        href: "/technology-solution/enterprise-software-solutions",
        image: "/images/nebula_cloud_os_3d.jpg",
      },
      {
        index: "01.4",
        title: "E-Commerce Platform Engineering",
        tagline: "Headless Shopify Plus & High-Volume Transaction Engines",
        desc: "Headless commerce storefronts, custom checkout engines, and real-time inventory synchronization optimized for high-volume flash sales and compounding conversions.",
        sla: "1.2s CHECKOUT SPEED",
        badge: "SHOPIFY PLUS",
        tags: ["Headless Shopify", "Stripe API", "Next.js Edge", "Algolia Search"],
        href: "/technology-solution/ecommerce-platform-engineering",
        image: "/images/service_ecommerce_color.jpg",
      },
      {
        index: "01.5",
        title: "Mobile Application Development",
        tagline: "Native iOS & Android Engineering with 60 FPS Fluidity",
        desc: "High-performance cross-platform and native mobile apps built with Flutter and React Native, featuring offline-first data sync and biometric security.",
        sla: "60 FPS NATIVE",
        tags: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase"],
        href: "/technology-solution/mobile-applications",
        image: "/images/service_webdev.jpg",
      },
      {
        index: "01.6",
        title: "Distributed Microservices & APIs",
        tagline: "Event-Driven gRPC, Kafka Queues & High-Throughput APIs",
        desc: "Decoupled distributed services communicating via high-throughput gRPC and Kafka event streams, protected by rate-limited API gateways and Redis caching meshes.",
        sla: "10K+ QPS PER NODE",
        tags: ["Golang", "Node.js", "Apache Kafka", "gRPC", "Redis Cluster"],
        href: "/technology-solution/microservices-api-mesh",
        image: "/images/project_ai.jpg",
      },
    ],
    faqs: [
      {
        q: "What makes RnD's Technology Solutions division different from traditional web agencies?",
        a: "Unlike traditional agencies that deploy cookie-cutter templates, RnD operates as a high-performance software engineering lab. We author bespoke, edge-rendered Next.js 15 platforms, distributed cloud microservices, and reactive data architectures engineered to handle millions of concurrent users with sub-second response times and 100% intellectual property ownership.",
      },
      {
        q: "How do you ensure our web applications scale effortlessly during flash traffic surges?",
        a: "We utilize edge SSR caching, multi-region serverless endpoints, Redis cluster meshes, and containerized Kubernetes auto-scaling. Static assets and cached data are delivered via global CDN points of presence within 50ms, offloading up to 90% of traffic from the primary database.",
      },
      {
        q: "Who owns the source code, design systems, and cloud configurations?",
        a: "You own 100% of all intellectual property, source code, Git repositories, Terraform scripts, and design tokens from day one. Everything is hosted directly inside your company's GitHub and cloud accounts with zero vendor lock-in.",
      },
      {
        q: "Can we start with Custom Web Development and expand to Cloud DevOps later?",
        a: "Yes. Our modular engagement model allows you to deploy a targeted squad for Custom Web Development first, and seamlessly layer on Cloud DevOps, Enterprise Software, or Mobile Applications as your product roadmap expands.",
      },
      {
        q: "What is your incident response SLA for production systems?",
        a: "We offer guaranteed SLAs up to 99.99% uptime with direct lead engineer access and under 15-minute critical incident response times for enterprise tier partners.",
      },
    ],
  },

  "digital-marketing": {
    slug: "digital-marketing",
    bannerTitle: "DIGITAL",
    bannerSubtitle: "MARKETING",
    bannerImage: "/banner/digital-marketing.png",
    breadcrumb: "Digital Marketing",
    divisionLabel: "SERVICE CATEGORY // DIVISION 02",
    divisionNumber: "02",
    iconName: "TrendingUp",
    heroTitle: "PERFORMANCE GROWTH &",
    heroHighlight: "SEARCH DOMINANCE",
    heroDesc:
      "Data-engineered customer acquisition models. We replace guesswork with algorithmic precision, deploying multi-channel performance funnels, technical backlink graphs, and behavioral CRO that consistently drive predictable revenue expansion.",
    primaryCtaLabel: "EXPLORE SEO SPEC",
    primaryCtaHref: "/digital-marketing/technical-seo-dominance",
    stats: [
      { val: "+180%", label: "Avg Traffic Surge", sub: "90-day programmatic SEO" },
      { val: "8.4x", label: "Avg ROAS", sub: "Across all paid channels" },
      { val: "94%+", label: "Attribution Accuracy", sub: "Server-side CAPI tracking" },
      { val: "60 Days", label: "First Results", sub: "Measurable SERP movement" },
    ],
    disciplineHeading: "SELECT A SPECIALIZED DISCIPLINE",
    disciplineDesc:
      "Explore dedicated campaign architecture, channel strategies, and performance SLAs.",
    subcategories: [
      {
        index: "02.1",
        title: "Technical SEO & Search Dominance",
        tagline: "+180% Traffic Surge",
        desc: "Algorithmic keyword clusters, programmatic internal linking, crawl budget optimization, and top-3 organic ranking capture.",
        tags: ["Semantic Indexing", "Core Web Vitals", "Backlinks", "Schema"],
        sla: "+180% TRAFFIC SURGE",
        badge: "SERP DOMINANCE",
        href: "/digital-marketing/technical-seo-dominance",
        image: "/images/service_seo_color.jpg",
      },
      {
        index: "02.2",
        title: "Performance PPC & Paid Media",
        tagline: "8.4x Avg ROAS",
        desc: "High-ROI paid search and social campaigns across Google Ads, Meta, and TikTok with real-time ROAS telemetry dashboards.",
        tags: ["Google Ads", "Meta Ads Manager", "TikTok Ads", "Attribution"],
        sla: "8.4x AVG ROAS",
        badge: "MULTI-CHANNEL",
        href: "/digital-marketing/performance-ppc-advertising",
        image: "/images/service_marketing.jpg",
      },
      {
        index: "02.3",
        title: "Social Media Strategy & Management",
        tagline: "100% Organic-Driven",
        desc: "Viral organic community building, platform-specific content cadence, and influencer amplification that establishes brand authority.",
        tags: ["Content Calendars", "Audience Ops", "LinkedIn", "Instagram"],
        sla: "100% ORGANIC",
        badge: "COMMUNITY FIRST",
        href: "/digital-marketing/social-media-management",
        image: "/images/service_social.jpg",
      },
      {
        index: "02.4",
        title: "Content Strategy & Copywriting",
        tagline: "Conversion-First Editorial",
        desc: "High-authority editorial briefs, thought leadership articles, and high-converting commercial copy crafted for your target buyer persona.",
        tags: ["Whitepapers", "Landing Copy", "Email Funnels", "Guides"],
        sla: "CONVERSION-FIRST",
        badge: "EDITORIAL AUTHORITY",
        href: "/digital-marketing/content-strategy-production",
        image: "/images/contet.png",
      },
    ],
    faqs: [
      {
        q: "How long before we see results from SEO?",
        a: "Programmatic SEO improvements typically show measurable SERP movement within 60 to 90 days, with significant traffic surges materializing by month 4 to 6 as domain authority compounds.",
      },
      {
        q: "What ROAS can we realistically expect from PPC campaigns?",
        a: "Our median client achieves 6.2x ROAS in the first 90 days, scaling to 8.4x by month 6 through systematic negative keyword pruning and creative iteration frameworks.",
      },
      {
        q: "Do you manage all social platforms or specialize in specific ones?",
        a: "We specialize in LinkedIn, Instagram, and TikTok for B2B and D2C brands, with dedicated platform-native content teams for each channel to maximize algorithmic reach.",
      },
      {
        q: "How do you attribute conversions accurately after iOS privacy changes?",
        a: "We implement server-side Conversions API (CAPI) for Meta and TikTok and use first-party data modeling with Google's Enhanced Conversions to maintain attribution fidelity above 94%.",
      },
      {
        q: "Can we start with one service and expand to a full-funnel strategy?",
        a: "Yes. We offer modular engagements. Many clients start with Technical SEO, then layer in PPC once organic foundations are established, creating compounding cross-channel growth loops.",
      },
    ],
  },

  "branding-design": {
    slug: "branding-design",
    bannerTitle: "BRANDING",
    bannerSubtitle: "& DESIGN",
    bannerImage: "/banner/branding-design.png",
    breadcrumb: "Branding & Design",
    divisionLabel: "SERVICE CATEGORY // DIVISION 03",
    divisionNumber: "03",
    iconName: "Palette",
    heroTitle: "CATEGORY-DEFINING",
    heroHighlight: "IDENTITIES & UI/UX",
    heroDesc:
      "Great software requires an unforgettable aesthetic. We construct cohesive design languages, mathematically scaled design systems, and spatial 3D user interfaces that elevate market perception and command enterprise pricing power.",
    primaryCtaLabel: "EXPLORE BRAND IDENTITY",
    primaryCtaHref: "/branding-design/brand-identity-systems",
    stats: [
      { val: "100%", label: "IP Ownership", sub: "Full source file transfer" },
      { val: "5.8x", label: "Brand Recall Lift", sub: "vs generic templated design" },
      { val: "30%", label: "Faster Shipping", sub: "With mature design systems" },
      { val: "4–6 Wks", label: "Brand Identity", sub: "From brief to final files" },
    ],
    disciplineHeading: "SELECT A DESIGN DISCIPLINE",
    disciplineDesc: "",
    subcategories: [
      {
        index: "03.1",
        title: "Brand Identity & Design Systems",
        tagline: "Production-Ready",
        desc: "Comprehensive brand identity guidelines, modern logos, typography scales, color palettes, and unified design token architectures.",
        tags: ["Design Systems", "Vector Identity", "Figma", "Guidelines"],
        sla: "PRODUCTION-READY",
        badge: "DESIGN SYSTEMS",
        href: "/branding-design/brand-identity-systems",
        image: "/images/service_branding.jpg",
      },
      {
        index: "03.2",
        title: "UI/UX & Spatial Web Architecture",
        tagline: "60 FPS Interaction",
        desc: "Next-gen user journeys, micro-interactive prototypes, and 3D web interfaces mapped through rigorous usability heatmaps.",
        tags: ["Spatial 3D", "Wireframing", "Interaction Design", "Figma"],
        sla: "60 FPS INTERACTION",
        badge: "SPATIAL 3D",
        href: "/branding-design/ui-ux-spatial-design",
        image: "/images/project_lumen_sal.jpg",
      },
      {
        index: "03.3",
        title: "3D CGI & Motion Graphics",
        tagline: "Photorealistic",
        desc: "Photorealistic 3D product animations, kinetic typography, dynamic HUD holograms, and spatial VFX for web and commercials.",
        tags: ["Three.js", "Cinema4D", "Blender 3D", "After Effects"],
        sla: "PHOTOREALISTIC",
        badge: "CGI STUDIO",
        href: "/media-production/motion-graphics-3d-cgi",
        image: "/images/service_spatial_color.jpg",
      },
    ],
    faqs: [
      {
        q: "How long does a complete brand identity project take?",
        a: "A foundational brand identity including logo, typography, color system, and basic guidelines takes 4 to 6 weeks. A full design system with component libraries and token exports for all platforms typically runs 10 to 14 weeks.",
      },
      {
        q: "Do we own all the brand assets and source files at the end?",
        a: "Absolutely. 100% of all vector source files, Figma libraries, design tokens, and brand documentation transfer to you on final delivery day with zero licensing fees or ongoing royalties.",
      },
      {
        q: "Can your design system integrate directly with our existing React/Next.js codebase?",
        a: "Yes. We deliver design tokens via Style Dictionary in CSS custom properties, Tailwind config extensions, and React component libraries built with your existing stack — zero rework required.",
      },
      {
        q: "What is the difference between a brand identity and a design system?",
        a: "A brand identity defines visual direction — logos, colors, and typography. A design system codifies these into reusable, coded components and token rules that developers and designers use to ship products consistently at speed.",
      },
      {
        q: "Do you offer ongoing brand management and design system maintenance?",
        a: "Yes. We offer monthly design system stewardship retainers that include component updates, new pattern additions, token synchronization across platforms, and quarterly brand health audits.",
      },
    ],
  },

  "media-production": {
    slug: "media-production",
    bannerTitle: "MEDIA",
    bannerSubtitle: "PRODUCTION",
    bannerImage: "/banner/media-production.png",
    breadcrumb: "Media Production",
    divisionLabel: "SERVICE CATEGORY // DIVISION 04",
    divisionNumber: "04",
    iconName: "Video",
    heroTitle: "CINEMATIC CONTENT &",
    heroHighlight: "MOTION PRODUCTION",
    heroDesc:
      "Transforming complex product capabilities into breathtaking visual narratives. Combining in-house cinema equipment, 3D Unreal Engine environments, and post-production color mastering to tell your enterprise story with emotional impact.",
    primaryCtaLabel: "EXPLORE FILM SPEC",
    primaryCtaHref: "/media-production/commercial-video-production",
    stats: [
      { val: "8K RAW", label: "Max Resolution", sub: "RED V-Raptor & ARRI LF" },
      { val: "5.8x", label: "Brand Recall Lift", sub: "vs generic video ads" },
      { val: "6–8 Wks", label: "Production Timeline", sub: "Brief to final delivery" },
      { val: "100%", label: "IP Transfer", sub: "All source files included" },
    ],
    disciplineHeading: "SELECT A PRODUCTION DISCIPLINE",
    disciplineDesc: "",
    subcategories: [
      {
        index: "04.1",
        title: "Commercial Video & Brand Films",
        tagline: "Cinema-Grade 4K/8K",
        desc: "End-to-end commercial productions: scriptwriting, 4K/8K cinematography, sound engineering, and multi-platform promotional edits.",
        tags: ["Brand Films", "Product Launches", "Color Grading", "Voiceover"],
        sla: "CINEMA-GRADE 4K/8K",
        badge: "RED 8K",
        href: "/media-production/commercial-video-production",
        image: "/images/project_forest_film.jpg",
      },
      {
        index: "04.2",
        title: "3D CGI & Motion Graphics",
        tagline: "Photorealistic",
        desc: "Photorealistic 3D product animations, kinetic typography, dynamic HUD holograms, and spatial VFX for web and commercials.",
        tags: ["Three.js", "Cinema4D", "Blender 3D", "After Effects"],
        sla: "PHOTOREALISTIC",
        badge: "BLENDER 3D",
        href: "/media-production/motion-graphics-3d-cgi",
        image: "/images/showreel_thumb.jpg",
      },
      {
        index: "04.3",
        title: "Dedicated Agency Squads",
        tagline: "Monthly Retainer",
        desc: "Autonomous cross-functional engineering and creative pods embedded directly into your codebase and content pipeline.",
        tags: ["Engineering Pods", "Monthly Retainers", "Async Ops", "Full-Stack"],
        sla: "DEDICATED POD",
        badge: "PODS",
        href: "/media-production/dedicated-squads",
        image: "/images/agency_team_studio.jpg",
      },
    ],
    faqs: [
      {
        q: "How long does a typical brand film production take from brief to delivery?",
        a: "A full commercial brand film runs 6 to 8 weeks: 2 weeks pre-production and storyboarding, 1 to 2 days principal photography, and 3 to 4 weeks for color grading, sound design, and multi-format exports.",
      },
      {
        q: "What camera systems and equipment does your studio use?",
        a: "We shoot on RED V-Raptor 8K and ARRI Alexa Mini LF for cinema projects, paired with Cooke anamorphic and Zeiss prime lens sets. Drone work is captured with DJI Zenmuse X9-8K for aerial 8K RAW footage.",
      },
      {
        q: "Can you produce content in multiple languages for international markets?",
        a: "Yes. We deliver clean M&E (music and effects) stems separately from dialogue, enabling localization teams to overdub in any language while preserving the original cinematic sound design.",
      },
      {
        q: "What file formats do you deliver for web, cinema, and broadcast?",
        a: "We deliver a DCP cinema package, broadcast master ProRes 4444, H.265 4K HDR web master, and automatically transcoded HLS adaptive bitrate streams optimized for sub-1MB-per-second mobile delivery.",
      },
      {
        q: "What is the minimum engagement size for a Dedicated Agency Squad?",
        a: "Our minimum squad retainer starts at 3 months to allow proper onboarding, codebase familiarization, and sprint rhythm establishment. This ensures we deliver meaningful architectural improvements rather than isolated tasks.",
      },
    ],
  },
};

export const CATEGORY_SLUGS = Object.keys(categoryPagesData);
