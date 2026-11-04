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
  metaTitle?: string;
  metaDescription?: string;
  bannerTitle: string;
  bannerSubtitle: string;
  bannerImage: string;
  breadcrumb: string;
  divisionLabel: string;
  divisionNumber: string;
  heroTitle: string;
  heroHighlight: string;
  heroDesc: string;
  supportingLine?: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
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
    metaTitle: "Technology Solutions & Software Development | RND Technosoft",
    metaDescription:
      "Explore technology solutions from RND Technosoft, including website development, mobile apps, custom software and e-commerce development.",
    bannerTitle: "TECHNOLOGY",
    bannerSubtitle: "SOLUTIONS",
    bannerImage: "/banner/technology.png",
    breadcrumb: "Technology Solutions",
    divisionLabel: "ACTIVE DIVISION // TECHNOLOGY SOLUTIONS",
    divisionNumber: "01",
    iconName: "Code",
    heroTitle: "TECHNOLOGY THAT",
    heroHighlight: "MOVES BUSINESS FORWARD.",
    heroDesc:
      "From powerful websites and intelligent applications to custom software and scalable e-commerce platforms, we engineer digital solutions that simplify complexity, elevate experiences and create opportunities for business growth.",
    supportingLine: "WEB DEVELOPMENT • APPLICATIONS • SOFTWARE • E-COMMERCE",
    primaryCtaLabel: "EXPLORE OUR SOLUTIONS →",
    primaryCtaHref: "#disciplines",
    secondaryCtaLabel: "DISCUSS YOUR PROJECT ↗",
    secondaryCtaHref: "/contact-us?intent=technology",
    stats: [
      { val: "99.99%", label: "Production SLA", sub: "Multi-region edge failover" },
      { val: "<380ms", label: "Global Edge TTFB", sub: "Sub-second render speeds" },
      { val: "150+", label: "Enterprise Deployments", sub: "Across 18 global industries" },
      { val: "100%", label: "Source IP Ownership", sub: "Full code repository ownership" },
    ],
    disciplineHeading: "SELECT A SPECIALIZED DISCIPLINE",
    disciplineDesc:
      "We combine thoughtful engineering, modern technologies and business-focused strategy to build digital platforms that work seamlessly today and adapt to tomorrow.",
    subcategories: [
      {
        index: "01 // WEB",
        title: "CUSTOM WEBSITE DEVELOPMENT",
        tagline: "Your digital presence. Engineered for performance.",
        desc: "We create responsive, SEO-friendly websites that combine engaging design, intuitive navigation and powerful functionality. From corporate websites and business portals to custom web platforms, we build digital experiences designed around your audience and business objectives.",
        sla: "01 // WEB",
        badge: "RESPONSIVE WEB",
        tags: ["#WebsiteDevelopment", "#WebDesign", "#ResponsiveWebsites", "#CustomWebsites"],
        href: "/technology-solution/web-development",
        image: "/images/service_webdev.jpg",
        featured: true,
      },
      {
        index: "02 // APPLICATIONS",
        title: "WEB & MOBILE APP DEVELOPMENT",
        tagline: "Applications built around the way you work.",
        desc: "We develop intuitive web and mobile applications that connect people, processes and technology. From customer-facing applications to complex business platforms, our solutions focus on usability, performance and seamless functionality across devices.",
        sla: "02 // APPLICATIONS",
        badge: "WEB & MOBILE",
        tags: ["#WebAppDevelopment", "#MobileAppDevelopment", "#AndroidApps", "#iOSApps"],
        href: "/technology-solution/mobile-applications",
        image: "/images/service_webdev.jpg",
      },
      {
        index: "03 // SOFTWARE",
        title: "CUSTOM SOFTWARE DEVELOPMENT",
        tagline: "Your business deserves more than off-the-shelf solutions.",
        desc: "We build tailored software solutions that address unique business requirements, streamline workflows and improve operational efficiency. From enterprise applications and business management systems to CRM, ERP and SaaS platforms, we turn complex processes into smarter systems.",
        sla: "03 // SOFTWARE",
        badge: "CUSTOM SAAS",
        tags: ["#CustomSoftware", "#EnterpriseSoftware", "#CRMDevelopment", "#ERPDevelopment", "#SaaS"],
        href: "/technology-solution/enterprise-software-solutions",
        image: "/images/nebula_cloud_os_3d.jpg",
      },
      {
        index: "04 // E-COMMERCE",
        title: "E-COMMERCE DEVELOPMENT",
        tagline: "Turn digital storefronts into growth engines.",
        desc: "We create feature-rich e-commerce websites and online stores that make buying simple and selling smarter. From intuitive storefront design and secure payment integration to product management and checkout optimisation, we build shopping experiences designed to support your business growth.",
        sla: "04 // E-COMMERCE",
        badge: "GROWTH ENGINES",
        tags: ["#EcommerceDevelopment", "#OnlineStore", "#EcommerceWebsite", "#EcommerceSolutions"],
        href: "/technology-solution/ecommerce-platform-engineering",
        image: "/images/service_ecommerce_color.jpg",
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
    metaTitle: "Digital Marketing Services | SEO & Social Media Marketing – RND Technosoft",
    metaDescription:
      "Grow your business with RND Technosoft's digital marketing services. Explore SEO, social media marketing, paid advertising and content marketing solutions.",
    bannerTitle: "DIGITAL",
    bannerSubtitle: "MARKETING",
    bannerImage: "/banner/digital-marketing.png",
    breadcrumb: "Digital Marketing",
    divisionLabel: "ACTIVE DIVISION // DIGITAL MARKETING",
    divisionNumber: "02",
    iconName: "TrendingUp",
    heroTitle: "DIGITAL GROWTH. BUILT ON STRATEGY.",
    heroHighlight: "DRIVEN BY RESULTS.",
    heroDesc:
      "We help businesses strengthen their online presence, connect with the right audiences and turn digital visibility into meaningful opportunities. Through strategic SEO, social media marketing, paid advertising and compelling content, we create marketing experiences designed to accelerate business growth.",
    supportingLine: "SEO • SOCIAL MEDIA • PAID ADVERTISING • CONTENT MARKETING",
    primaryCtaLabel: "EXPLORE OUR SERVICES →",
    primaryCtaHref: "#disciplines",
    secondaryCtaLabel: "PLAN YOUR GROWTH ↗",
    secondaryCtaHref: "/contact-us?intent=marketing",
    stats: [
      { val: "+180%", label: "Avg Traffic Surge", sub: "90-day programmatic SEO" },
      { val: "8.4x", label: "Avg ROAS", sub: "Across all paid channels" },
      { val: "94%+", label: "Attribution Accuracy", sub: "Server-side CAPI tracking" },
      { val: "60 Days", label: "First Results", sub: "Measurable SERP movement" },
    ],
    disciplineHeading: "SELECT A SPECIALIZED DISCIPLINE",
    disciplineDesc:
      "We bring strategy, creativity and data together to build stronger digital brands, reaching the right people at the right time.",
    subcategories: [
      {
        index: "01 // ORGANIC GROWTH",
        title: "SEARCH ENGINE OPTIMISATION (SEO)",
        tagline: "Get discovered. Earn visibility. Grow organically.",
        desc: "We improve your website's search visibility through keyword research, on-page and off-page SEO, technical optimisation, content strategy and quality link building. Our focus is on attracting relevant organic traffic and building sustainable search presence.",
        tags: ["#SEO Services", "#TechnicalSEO", "#KeywordResearch", "#LinkBuilding", "#LocalSEO"],
        sla: "01 // ORGANIC GROWTH",
        badge: "ORGANIC GROWTH",
        href: "/digital-marketing/technical-seo-dominance",
        image: "/images/service_seo_color.jpg",
        featured: true,
      },
      {
        index: "02 // BRAND ENGAGEMENT",
        title: "SOCIAL MEDIA MARKETING",
        tagline: "Build communities. Start conversations. Create impact.",
        desc: "We develop social media strategies that strengthen brand identity, increase audience engagement and build meaningful connections. From content planning and creative posts to reels, platform management and community engagement, we help brands stay relevant and recognisable.",
        tags: ["#SocialMediaMarketing", "#InstagramMarketing", "#FacebookMarketing", "#SocialMediaManagement"],
        sla: "02 // BRAND ENGAGEMENT",
        badge: "COMMUNITY ENGAGEMENT",
        href: "/digital-marketing/social-media-management",
        image: "/images/service_marketing.jpg",
      },
      {
        index: "03 // PAID GROWTH",
        title: "PAID ADVERTISING & PERFORMANCE MARKETING",
        tagline: "Reach the right audience. Make every campaign count.",
        desc: "We plan and manage targeted advertising campaigns across Google, Meta and other relevant platforms. Through audience targeting, creative testing, campaign optimisation and performance tracking, we help businesses generate relevant traffic, enquiries and sales opportunities.",
        tags: ["#GoogleAds", "#MetaAds", "#PPCAdvertising", "#PaidMedia", "#PerformanceMarketing"],
        sla: "03 // PAID GROWTH",
        badge: "PERFORMANCE ADS",
        href: "/digital-marketing/performance-ppc-advertising",
        image: "/images/service_social.jpg",
      },
      {
        index: "04 // CREATIVE STRATEGY",
        title: "CONTENT MARKETING & STRATEGY",
        tagline: "Create stories that make your brand memorable.",
        desc: "We develop purposeful content that communicates your brand's value and connects with your audience. From website copy and blogs to social media creatives, campaign messaging and marketing content, we turn ideas into engaging brand experiences.",
        tags: ["#ContentMarketing", "#ContentStrategy", "#WebsiteContent", "#BlogWriting", "#CreativeCopywriting"],
        sla: "04 // CREATIVE STRATEGY",
        badge: "CONTENT & STRATEGY",
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
