export interface FeaturedProjectItem {
  id: string;
  category: string;
  tag: string;
  verticalTitle: string;
  title: string;
  location: string;
  desc: string;
  image: string;
  imgtitle?: string;
  altname?: string;
  specs: string;
  link: string;
}

export const DEFAULT_PROJECTS_DATA: FeaturedProjectItem[] = [
  {
    id: "meritrack-mobile-suite",
    category: "MOBILE APP",
    tag: "MOBILE APP PROJECTS // HEALTHCARE LOGISTICS",
    verticalTitle: "MERITRACK MOBILE SUITE",
    title: "MeriTRACK Surgical Logistics Suite",
    location: "VAPI // MUMBAI",
    desc: "High-reliability cross-platform mobile suite engineered for surgical implant tracking, hospital case scheduling, distributor allocation, and real-time medical sales representative telemetry.",
    image: "/protfolio image/MeriTRACK Space App Showcase.png",
    specs: "Native iOS & Android // Live Surgery Telemetry // 2026",
    link: "/portfolio/mobile-app-projects",
  },
  {
    id: "ostech-automation",
    category: "WEB PLATFORM",
    tag: "WEBSITE & WEB APPLICATIONS // INDUSTRIAL AUTOMATION",
    verticalTitle: "OSTECH AUTOMATION PLATFORM",
    title: "OSTech Industrial Automation Flagship",
    location: "GUJARAT // GLOBAL",
    desc: "High-performance digital engineering platform for industrial packaging automation, featuring dynamic machinery catalogs, conveyor capability matrices, and interactive B2B inquiry funnels.",
    image: "/protfolio image/OSTech Laptop in Orbital Showcase.png",
    specs: "Next.js 15 // Sub-1s LCP // Industrial Automation // 2026",
    link: "/portfolio/website-and-web-application-projects",
  },
  {
    id: "shanti-patra-erp",
    category: "ENTERPRISE ERP",
    tag: "CUSTOM SOFTWARE // CLOUD ERP & CRM",
    verticalTitle: "SHANTI PATRA CLOUD ERP",
    title: "Shanti Patra Operations & MIS Suite",
    location: "VAPI // NATIONAL",
    desc: "Comprehensive cloud ERP platform managing manufacturing workflows: machine telemetry, printing lines, automated QC checks, live inventory tracking, and multi-tier sales order reconciliation.",
    image: "/protfolio image/Shanti Patra Dashboard in Space.png",
    specs: "Real-Time Shopfloor Telemetry // 98% QC Standard // 2026",
    link: "/portfolio/website-and-web-application-projects",
  },
  {
    id: "vbott-identity",
    category: "BRAND IDENTITY",
    tag: "BRANDING & GRAPHIC DESIGN // CORPORATE MERCHANDISE",
    verticalTitle: "VBOTT CORPORATE IDENTITY",
    title: "VBŌTT Luxury Identity & Packaging System",
    location: "MUMBAI // NATIONAL",
    desc: "Comprehensive corporate brand architecture, premium typography, minimalist stationery, executive gift packaging, and tactile stainless steel merchandise system for consumer hydration products.",
    image: "/protfolio image/VBOTT Corporate Stationery in Space.png",
    specs: "Complete Brand Guidelines // Premium Packaging Suite // 2026",
    link: "/portfolio/branding-and-graphic-design",
  },
  {
    id: "tps-industrial-film",
    category: "CINEMA & FILM",
    tag: "VIDEOGRAPHY & PHOTOGRAPHY // INDUSTRIAL COMMERCIAL",
    verticalTitle: "TPS FACILITY BRAND FILM",
    title: "Total Packaging Services Cinema Commercial",
    location: "VAPI // DAMAN",
    desc: "Cinematic industrial commercial documenting advanced packaging infrastructure with 4K camera rigs, drone flythroughs, post-production color mastering, and precision manufacturing storytelling.",
    image: "/protfolio image/TPS videography.png",
    specs: "4K Cinema Commercial // Aerial Drone Telemetry // 2026",
    link: "/portfolio/videography-and-photography",
  },
];

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3058";

export async function getPortfolioData(): Promise<FeaturedProjectItem[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/data/portfolio_project`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return DEFAULT_PROJECTS_DATA.slice(0, 5);
    }

    const json = await res.json();
    const list = Array.isArray(json?.data) ? json.data : [];
    if (list.length === 0) return DEFAULT_PROJECTS_DATA.slice(0, 5);

    // Strictly top 5 projects for home page
    const top5 = list.slice(0, 5);

    return top5.map((doc: any, idx: number) => {
      const slug =
        doc.p_link?.replace(/^\/portfolio\//, "") ||
        doc.slug ||
        String(idx);
      const catTitle =
        doc.category_populated?.title ||
        doc.category_label ||
        "PROJECT";
      const catTag =
        doc.category_populated?.tag || "PORTFOLIO";

      return {
        id: slug,
        category: catTitle,
        tag: `${catTag} // ${catTitle}`,
        verticalTitle:
          doc.vertical_title || doc.project_title || "",
        title: doc.project_title || "",
        location: "GLOBAL",
        desc: doc.tagline || "",
        image: doc.image || "/images/service_cloud_color.jpg",
        imgtitle: doc.imgtitle || `${doc.project_title || ""} Showcase`,
        altname: doc.altname || `${doc.project_title || ""}`,
        specs: `${doc.year || "2026"} // Enterprise Flagship`,
        link: doc.p_link || `/portfolio/${slug}`,
      };
    });
  } catch (err) {
    console.warn("Falling back to default Portfolio Projects data:", err);
    return DEFAULT_PROJECTS_DATA.slice(0, 5);
  }
}

// Portfolio Categories
export interface PortfolioCategory {
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  banner_image: string;
  number: string;
  tag: string;
  features: string;
  image: string;
  href: string;
  stats_label: string;
  stats_value: string;
  stats_sub: string;
  order: number;
  imgtitle?: string;
  altname?: string;
}

export const DEFAULT_CATEGORIES: PortfolioCategory[] = [
  {
    slug: 'website-and-web-application-projects',
    title: 'Website & Web Applications',
    description: 'Custom web platforms, SaaS applications, and enterprise portals built with cutting-edge technologies for performance, scalability, and exceptional user experience.',
    icon: 'Cpu',
    color: '#FFD400',
    banner_image: '/banner/service.png',
    number: '01',
    tag: 'TECHNOLOGY',
    features: 'WebDevelopment,MobileApps,CustomSoftware,Ecommerce',
    image: '/images/service_cloud_color.jpg',
    href: '/portfolio/website-and-web-application-projects',
    stats_label: 'Projects Delivered',
    stats_value: '50+',
    stats_sub: 'Production web & enterprise platforms',
    order: 1,
  },
  {
    slug: 'digital-marketing-projects',
    title: 'Digital Marketing',
    description: 'Data-driven digital marketing campaigns, SEO strategies, and growth engineering that drive measurable results and maximize ROI for businesses of all sizes.',
    icon: 'TrendingUp',
    color: '#FF6B35',
    banner_image: '/banner/digital-marketing.png',
    number: '02',
    tag: 'PERFORMANCE',
    features: 'SEO,SocialMedia,PaidAdvertising,ContentMarketing',
    image: '/images/service_marketing.jpg',
    href: '/portfolio/digital-marketing-projects',
    stats_label: 'Campaigns Run',
    stats_value: '100+',
    stats_sub: 'Full-funnel digital growth operations',
    order: 2,
  },
  {
    slug: 'branding-and-graphic-design',
    title: 'Branding & Design',
    description: 'Complete brand identities, logo design, visual systems, and graphic design that communicate your story and establish memorable brand presence.',
    icon: 'Palette',
    color: '#9D4EDD',
    banner_image: '/banner/branding-design.png',
    number: '03',
    tag: 'CREATIVE',
    features: 'BrandIdentity,GraphicDesign,LogoDesign,CreativeDesign',
    image: '/images/service_branding.jpg',
    href: '/portfolio/branding-and-graphic-design',
    stats_label: 'Brands Created',
    stats_value: '80+',
    stats_sub: 'Comprehensive visual identity systems',
    order: 3,
  },
  {
    slug: 'videography-and-photography',
    title: 'Videography & Photography',
    description: 'Cinematic video production, commercial photography, and visual storytelling that captivates audiences and elevates brand narratives.',
    icon: 'Video',
    color: '#F72585',
    banner_image: '/banner/media-production.png',
    number: '04',
    tag: 'STORYTELLING',
    features: 'CommercialVideo,Videography,MotionGraphics,BrandFilms',
    image: '/images/service_media.jpg',
    href: '/portfolio/videography-and-photography',
    stats_label: 'Productions',
    stats_value: '200+',
    stats_sub: 'Commercial films & cinematic showcases',
    order: 4,
  },
  {
    slug: 'mobile-app-projects',
    title: 'Mobile Applications',
    description: 'Native iOS, Android, and cross-platform mobile solutions that deliver seamless experiences across all devices with robust architecture and intuitive interfaces.',
    icon: 'Smartphone',
    color: '#00D4FF',
    banner_image: '/banner/technology.png',
    number: '05',
    tag: 'TECHNOLOGY',
    features: 'iOS,Android,ReactNative,Flutter',
    image: '/images/service_mobile_color.jpg',
    href: '/portfolio/mobile-app-projects',
    stats_label: 'Apps Launched',
    stats_value: '30+',
    stats_sub: 'High-performance iOS & Android products',
    order: 5,
  },
];

export async function getPortfolioCategories(): Promise<PortfolioCategory[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/data/portfolio_categories`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return DEFAULT_CATEGORIES;
    }

    const json = await res.json();
    const list = Array.isArray(json?.data) ? json.data : [];
    if (list.length === 0) return DEFAULT_CATEGORIES;

    const sorted = [...list].sort(
      (a: any, b: any) => (a.order || 0) - (b.order || 0)
    );

    return sorted.map((doc: any) => ({
      slug: doc.slug || "",
      title: doc.title || "",
      description: doc.description || "",
      icon: doc.icon || "",
      color: doc.color || "#FFD400",
      banner_image: doc.banner_image || "",
      number: doc.number || "",
      tag: doc.tag || "",
      features: doc.features || "",
      image: doc.image || "",
      href: doc.href || "",
      stats_label: doc.stats_label || "",
      stats_value: doc.stats_value || "",
      stats_sub: doc.stats_sub || "",
      order: doc.order || 0,
      imgtitle: doc.imgtitle || "",
      altname: doc.altname || "",
    }));
  } catch (err) {
    console.warn("Falling back to default Portfolio Categories data:", err);
    return DEFAULT_CATEGORIES;
  }
}

// Portfolio Projects
export interface PortfolioProject {
  slug: string;
  category_slug: string;
  category_title?: string;
  index: string;
  title: string;
  subtitle: string;
  summary: string;
  tagline: string;
  project_type: string;
  industry: string;
  image: string;
  banner_image?: string;
  banner_imgtitle?: string;
  banner_altname?: string;
  imgtitle?: string;
  altname?: string;
  gallery_images: string[];
  video_url?: string;
  client: string;
  client_approved: boolean;
  project_date: string;
  year: string;
  duration: string;
  sla: string;
  badge: string;
  tags: string[];
  brief: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  results_metric?: string;
  results_label?: string;
  tech_stack: string[];
  is_featured: boolean;
  published: boolean;
  order: number;
}

export const DEFAULT_PORTFOLIO_PROJECTS_LIST: PortfolioProject[] = [
  {
    slug: "ostech-automation",
    category_slug: "website-and-web-application-projects",
    category_title: "Website & Web Applications",
    index: "01",
    title: "OSTech Industrial Automation Flagship",
    subtitle: "High-Performance Digital Engineering Platform for Industrial Packaging Automation",
    summary: "High-performance digital engineering platform for industrial packaging automation, featuring dynamic machinery catalogs, conveyor capability matrices, and interactive B2B inquiry funnels.",
    tagline: "High-performance digital engineering platform for industrial packaging automation.",
    project_type: "Web Platform & Catalog",
    industry: "Manufacturing & Industrial",
    image: "/protfolio image/OSTech Laptop in Orbital Showcase.png",
    imgtitle: "OSTech Industrial Automation Flagship Showcase",
    altname: "OSTech Industrial Automation Flagship - Web Engineering",
    gallery_images: [
      "/protfolio image/OSTech Laptop in Orbital Showcase.png",
      "/protfolio image/OSTech Industrial Automation.png"
    ],
    client: "OSTech Industrial Automation",
    client_approved: true,
    project_date: "2026",
    year: "2026",
    duration: "10-14 Weeks",
    sla: "99.99% Uptime",
    badge: "FEATURED CASE STUDY",
    tags: ["Next.js 15", "TailwindCSS", "WebGL / Three.js", "MongoDB", "AWS CloudFront"],
    brief: "Deconstruct legacy static catalog into a high-speed orbital interactive web experience featuring real-time 3D CAD visualization and automated conveyor throughput calculators.",
    challenge: "Legacy machinery catalog was static and failed to communicate advanced conveyor automation telemetry to international procurement committees.",
    solution: "Developed a high-speed orbital interactive web experience featuring real-time 3D CAD visualization and automated conveyor throughput calculators.",
    deliverables: [
      "Custom Web Platform",
      "Dynamic Machinery Configurator",
      "Automated RFQ Generation",
      "Industrial CAD Viewer"
    ],
    results_metric: "<0.8s",
    results_label: "Global Edge LCP Velocity",
    tech_stack: ["Next.js 15", "TailwindCSS", "WebGL / Three.js", "MongoDB", "AWS CloudFront"],
    is_featured: true,
    published: true,
    order: 1,
  },
  {
    slug: "moultool-systems",
    category_slug: "website-and-web-application-projects",
    category_title: "Website & Web Applications",
    index: "02",
    title: "Moultool Systems Precision Engineering Platform",
    subtitle: "High-Precision Injection Moulding & CNC Tooling Digital Platform",
    summary: "Custom digital engineering platform for high-precision injection moulds, die manufacturing, multi-cavity tooling catalogs, and automated RFQ quotation workflows.",
    tagline: "Precision, perfected, proven. Engineering excellence in precision injection moulds and tooling innovation.",
    project_type: "Web Platform & Technical Catalog",
    industry: "Manufacturing & Precision Tooling",
    image: "/protfolio image/Moultool Systems Precision Engineering Desktop Showcase.png",
    imgtitle: "Moultool Systems Precision Engineering Platform Showcase",
    altname: "Moultool Systems Precision Engineering Platform - Web Development",
    gallery_images: [
      "/protfolio image/Moultool Systems Precision Engineering Desktop Showcase.png",
      "/protfolio image/Moultool Systems Tooling Capabilities and Machine Fleet.png",
      "/protfolio image/Moultool Systems Responsive Mobile Engineering Portal.png"
    ],
    client: "Moultool Systems Pvt. Ltd.",
    client_approved: true,
    project_date: "2026",
    year: "2026",
    duration: "8-12 Weeks",
    sla: "99.99% Uptime",
    badge: "FEATURED CASE STUDY",
    tags: ["Next.js", "TailwindCSS", "Node.js", "CAD Viewport Engine", "MongoDB", "Cloudflare CDN"],
    brief: "Construct a state-of-the-art digital tooling portal showcasing precision injection moulds, CNC machine fleets, and automated multi-cavity RFQ technical documentation.",
    challenge: "Moultool required an authoritative digital presence to display tight-tolerance tooling capabilities and convert global industrial procurement inquiries.",
    solution: "Engineered a modern dark aesthetic web platform with interactive mold specification sheets, automated CAD file uploads, and direct B2B RFQ routing.",
    deliverables: [
      "High-Precision Tooling Catalog",
      "Interactive Mould Specification Sheets",
      "CAD / Technical Drawing Upload Vault",
      "Automated Industrial RFQ Dispatcher"
    ],
    results_metric: "<0.72s",
    results_label: "LCP Edge Speed",
    tech_stack: ["Next.js", "TailwindCSS", "Node.js", "CAD Viewport Engine", "MongoDB", "Cloudflare CDN"],
    is_featured: true,
    published: true,
    order: 2,
  },
  {
    slug: "oppl-packaging-solutions",
    category_slug: "website-and-web-application-projects",
    category_title: "Website & Web Applications",
    index: "03",
    title: "OPPL Sustainable Packaging Architecture",
    subtitle: "Next-Gen Corrugated, Mono Carton & Sustainable Box Engineering Suite",
    summary: "Enterprise packaging web platform featuring interactive 3D box folding physics, carton structural calculators, and automated sample dispatch tracking.",
    tagline: "Made to protect. Designed to perform. Built to represent modern brands.",
    project_type: "Web Platform & 3D Packaging Suite",
    industry: "Industrial Packaging & FMCG",
    image: "/protfolio image/OPPL Sustainable Packaging Platform Desktop Showcase.png",
    imgtitle: "OPPL Sustainable Packaging Architecture Showcase",
    altname: "OPPL Sustainable Packaging Platform - Web Application",
    gallery_images: [
      "/protfolio image/OPPL Sustainable Packaging Platform Desktop Showcase.png",
      "/protfolio image/OPPL Mono Cartons and Corrugated Product Catalog.png",
      "/protfolio image/OPPL Responsive Mobile Packaging Suite.png"
    ],
    client: "Omkar Polymers & Packaging Ltd. (OPPL)",
    client_approved: true,
    project_date: "2026",
    year: "2026",
    duration: "10-14 Weeks",
    sla: "99.99% Uptime",
    badge: "FEATURED CASE STUDY",
    tags: ["Next.js 15", "Three.js / WebGL", "TailwindCSS", "PostgreSQL", "Cloudflare CDN"],
    brief: "Build a next-generation digital packaging platform allowing FMCG and industrial buyers to explore corrugated cartons, mono cartons, and sustainable paperboard solutions in real time.",
    challenge: "Traditional paperboard packaging sales relied on printed catalogs and manual phone calls to calculate box burst strength, GSM paper tiers, and order minimums.",
    solution: "Engineered an interactive 3D web platform with live carton fold visualizers, automated substrate strength calculators, and seamless sample dispatch workflows.",
    deliverables: [
      "Interactive 3D Packaging Configurator",
      "Carton GSM & Fluting Strength Calculator",
      "Automated Sample Box Request Flow",
      "Enterprise Client Portfolio Showcase"
    ],
    results_metric: "+466%",
    results_label: "Direct Sample Inquiries",
    tech_stack: ["Next.js 15", "Three.js / WebGL", "TailwindCSS", "PostgreSQL", "Cloudflare CDN"],
    is_featured: true,
    published: true,
    order: 3,
  },
  {
    slug: "hyginelab-commercial-care",
    category_slug: "website-and-web-application-projects",
    category_title: "Website & Web Applications",
    index: "04",
    title: "HygineLab Commercial Chemical & Facility Care Portal",
    subtitle: "B2B Institutional Cleaning Chemicals & Mechanized Janitorial Platform",
    summary: "Comprehensive institutional hygiene portal featuring mechanized floor scrubbers, chemical dilution calculators, instant MSDS safety downloads, and wholesale ordering funnels.",
    tagline: "Advanced chemical engineering for commercial hygiene and institutional facility care.",
    project_type: "B2B Chemical & Machinery Portal",
    industry: "Commercial Cleaning & Facility Care",
    image: "/protfolio image/HygineLab Commercial Chemical Solutions Desktop Showcase.png",
    imgtitle: "HygineLab Commercial Chemical Solutions Showcase",
    altname: "HygineLab Commercial Chemical & Facility Care Portal - Web Development",
    gallery_images: [
      "/protfolio image/HygineLab Commercial Chemical Solutions Desktop Showcase.png",
      "/protfolio image/HygineLab Industrial Machinery and Disinfection Portal.png",
      "/protfolio image/HygineLab Mobile Facility Hygiene Platform.png"
    ],
    client: "HygineLab Chemical Innovations",
    client_approved: true,
    project_date: "2026",
    year: "2026",
    duration: "8-11 Weeks",
    sla: "99.99% Uptime",
    badge: "FEATURED CASE STUDY",
    tags: ["React", "Next.js", "Node.js", "MongoDB", "AWS S3 Vault", "TailwindCSS"],
    brief: "Create a high-compliance digital facility management portal allowing commercial cleaning contractors and hospitals to order specialized sanitation chemicals and mechanized equipment.",
    challenge: "Procurement officers faced friction obtaining safety data sheets (MSDS), verifying industrial disinfectant dilutions, and ordering replacement parts for heavy floor scrubbers.",
    solution: "Engineered an enterprise hygiene portal with instant regulatory MSDS downloads, interactive dosage calculators, and video demonstrations of mechanized cleaning machinery.",
    deliverables: [
      "Chemical & Janitorial Machinery Catalog",
      "Instant Regulatory MSDS Document Vault",
      "Automated Chemical Dilution Ratio Calculator",
      "Wholesale Contractor RFQ Pipeline"
    ],
    results_metric: "+380%",
    results_label: "Institutional B2B Inquiries",
    tech_stack: ["React", "Next.js", "Node.js", "MongoDB", "AWS S3 Vault", "TailwindCSS"],
    is_featured: true,
    published: true,
    order: 4,
  },
  {
    slug: "jyoti-umbrella-kinetic-storm",
    category_slug: "website-and-web-application-projects",
    category_title: "Website & Web Applications",
    index: "05",
    title: "Jyoti Umbrella 3D Kinetic Storm Defense Storefront",
    subtitle: "Next-Generation Aerodynamic Umbrella Engineering & E-Commerce Flagship",
    summary: "Aerodynamic 3D web experience with interactive canopy folding, wind-tunnel storm simulations, and instant consumer & corporate gifting checkout.",
    tagline: "3D kinetic storm defense. 210T hydrophobic nano-weave, unbreakable flex-carbon ribs.",
    project_type: "3D E-Commerce & Brand Flagship",
    industry: "Consumer Retail & Performance Rainwear",
    image: "/protfolio image/Jyoti Umbrella 3D Kinetic Storm Defense Desktop Showcase.png",
    imgtitle: "Jyoti Umbrella 3D Kinetic Storm Defense Showcase",
    altname: "Jyoti Umbrella 3D Kinetic Storm Defense Storefront - E-Commerce Engineering",
    gallery_images: [
      "/protfolio image/Jyoti Umbrella 3D Kinetic Storm Defense Desktop Showcase.png",
      "/protfolio image/Jyoti Umbrella Performance Models and Carbon Ribs.png",
      "/protfolio image/Jyoti Umbrella Mobile E-Commerce Storefront.png"
    ],
    client: "Jyoti Umbrella Industries",
    client_approved: true,
    project_date: "2026",
    year: "2026",
    duration: "10-14 Weeks",
    sla: "99.99% Uptime",
    badge: "FEATURED CASE STUDY",
    tags: ["Next.js 15", "Three.js / WebGL", "TailwindCSS", "Stripe API", "Vercel Edge"],
    brief: "Transform a heritage rainwear manufacturer into a high-tech kinetic storm defense brand with real-time 3D umbrella deployment and an e-commerce shopping funnel.",
    challenge: "Jyoti Umbrella was historically restricted to seasonal offline distribution networks without an interactive medium to show its patented flex-carbon wind resistance to modern retail buyers.",
    solution: "Constructed an aerodynamic 3D e-commerce platform with real-time umbrella deployment physics, wind-tunnel storm simulators, and automated corporate gifting quote builders.",
    deliverables: [
      "Interactive 3D Kinetic Umbrella Configurator",
      "Wind-Tunnel Aerodynamic Telemetry Simulator",
      "Corporate Gifting & Bulk Branding Engine",
      "Mobile-First E-Commerce Shopping Cart"
    ],
    results_metric: "+410%",
    results_label: "Direct D2C Revenue Growth",
    tech_stack: ["Next.js 15", "Three.js / WebGL", "TailwindCSS", "Stripe API", "Vercel Edge"],
    is_featured: true,
    published: true,
    order: 5,
  },
  {
    slug: "taga-luxury-architectural-systems",
    category_slug: "website-and-web-application-projects",
    category_title: "Website & Web Applications",
    index: "06",
    title: "TAGA Luxury Aluminium Architectural Systems",
    subtitle: "Minimalist Trackless Sliding Systems, Motorized Guillotines & Thermal-Break Facades",
    summary: "Luxury architectural atelier web portal with interactive system cross-sections, sound insulation decibel comparisons, and online studio tour reservations.",
    tagline: "The refined evolution of two decades in luxury aluminium doors, windows, and soundproof facades.",
    project_type: "Architectural Platform & Atelier Showcase",
    industry: "Luxury Architecture & Building Systems",
    image: "/protfolio image/TAGA Luxury Aluminium Architectural Desktop Showcase.png",
    imgtitle: "TAGA Luxury Aluminium Architectural Systems Showcase",
    altname: "TAGA Luxury Aluminium Architectural Systems - Architectural Web Portal",
    gallery_images: [
      "/protfolio image/TAGA Luxury Aluminium Architectural Desktop Showcase.png",
      "/protfolio image/TAGA Motorized Guillotine and Acoustic Systems.png",
      "/protfolio image/TAGA Mobile Luxury Architectural Atelier.png"
    ],
    client: "TAGA Architectural Windows & Facades",
    client_approved: true,
    project_date: "2026",
    year: "2026",
    duration: "10-14 Weeks",
    sla: "99.99% Uptime",
    badge: "FEATURED CASE STUDY",
    tags: ["Next.js", "TailwindCSS", "GSAP ScrollTrigger", "WebGL", "PostgreSQL", "Cloudflare CDN"],
    brief: "Create an ultra-luxury digital atelier experience showcasing grand 5-meter motorized guillotine windows, trackless sliding doors, and acoustic soundproof facades to elite architects and high-net-worth homeowners.",
    challenge: "High-end architectural buyers could not perceive the structural stability, airtight acoustic seals (45dB sound reduction), or slim 18mm sightlines through traditional brochure photography.",
    solution: "Crafted a bespoke dark architectural web platform featuring interactive decibel noise sliders, thermal U-value calculators, and high-definition architectural project portfolios.",
    deliverables: [
      "Luxury Architectural Systems Showcase",
      "Interactive Acoustic Sound Reduction Simulator",
      "Thermal-Break & U-Value Calculator",
      "Private Atelier Studio Tour Booking Engine"
    ],
    results_metric: "+533%",
    results_label: "Architect & HNW Enquiries",
    tech_stack: ["Next.js", "TailwindCSS", "GSAP ScrollTrigger", "WebGL", "PostgreSQL", "Cloudflare CDN"],
    is_featured: true,
    published: true,
    order: 6,
  },
  {
    slug: "shanti-patra-erp",
    category_slug: "website-and-web-application-projects",
    category_title: "Website & Web Applications",
    index: "03",
    title: "Shanti Patra Operations & MIS Suite",
    subtitle: "Enterprise Cloud ERP Platform Managing Manufacturing Workflows",
    summary: "Comprehensive cloud ERP platform managing manufacturing workflows: machine telemetry, printing lines, automated QC checks, live inventory tracking, and multi-tier sales order reconciliation.",
    tagline: "Comprehensive cloud ERP platform managing manufacturing workflows.",
    project_type: "Enterprise ERP",
    industry: "Manufacturing & Industrial",
    image: "/protfolio image/Shanti Patra Dashboard in Space.png",
    imgtitle: "Shanti Patra Operations & MIS Suite Showcase",
    altname: "Shanti Patra Operations & MIS Suite - Enterprise Cloud ERP",
    gallery_images: [
      "/protfolio image/Shanti Patra Dashboard in Space.png",
      "/protfolio image/Shanti Patra Dashboard.png"
    ],
    client: "Shanti Patra Packaging Ltd.",
    client_approved: true,
    project_date: "2026",
    year: "2026",
    duration: "12-16 Weeks",
    sla: "99.99% Uptime",
    badge: "FEATURED CASE STUDY",
    tags: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
    brief: "Deploy a centralized real-time manufacturing execution suite integrated directly with printing line PLC sensors and touch terminal operator stations.",
    challenge: "Disconnected physical log sheets and legacy accounting led to inventory shrinkage, printing color misalignments, and 3-day delays in monthly dispatch auditing.",
    solution: "Deployed a centralized real-time manufacturing execution suite integrated directly with printing line PLC sensors and touch terminal operator stations.",
    deliverables: [
      "Enterprise Cloud ERP",
      "Shopfloor Machine Telemetry",
      "Automated QC Scoring",
      "Multi-Warehouse Inventory Ledger"
    ],
    results_metric: "+42%",
    results_label: "Shopfloor Throughput Efficiency",
    tech_stack: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
    is_featured: true,
    published: true,
    order: 3,
  },
  {
    slug: "inject-care-parenterals-web-platform",
    category_slug: "website-and-web-application-projects",
    category_title: "Website & Web Applications",
    index: "06",
    title: "Inject Care Parenterals Web Platform",
    subtitle: "Pharmaceutical Manufacturing & Cleanroom Production Web Platform",
    summary: "Specialized sterile injectables manufacturing web portal showcasing cleanroom telemetry, cGMP compliance certifications, and global export packaging capabilities.",
    tagline: "Specialized sterile injectables manufacturing web portal.",
    project_type: "Web Platform",
    industry: "Healthcare & Pharmaceuticals",
    image: "/protfolio image/Inject Care Parenterals.png",
    imgtitle: "Inject Care Parenterals Web Platform Showcase",
    altname: "Inject Care Parenterals Web Platform - Pharmaceutical Engineering",
    gallery_images: ["/protfolio image/Inject Care Parenterals.png"],
    client: "Inject Care Parenterals Ltd.",
    client_approved: true,
    project_date: "2026",
    year: "2026",
    duration: "10-12 Weeks",
    sla: "99.99% Uptime",
    badge: "FEATURED CASE STUDY",
    tags: ["Next.js", "TailwindCSS", "Node.js", "MongoDB"],
    brief: "Showcase WHO-GMP sterile manufacturing infrastructure and provide automated regulatory compliance document access to international pharmaceutical buyers.",
    challenge: "Legacy web presence failed to represent cleanroom sterility standards and lacked automated documentation access for international distributors.",
    solution: "Engineered a high-compliance digital platform with interactive facility walk-throughs and secure regulatory document portals.",
    deliverables: ["Sterile Cleanroom Showcase", "Interactive Facility Map", "Regulatory Portal", "B2B Export Inquiry Funnel"],
    results_metric: "100%",
    results_label: "cGMP Compliance Representation",
    tech_stack: ["Next.js", "TailwindCSS", "Node.js", "MongoDB"],
    is_featured: true,
    published: true,
    order: 6,
  },
  {
    slug: "prakash-steelage-industrial-web-portal",
    category_slug: "website-and-web-application-projects",
    category_title: "Website & Web Applications",
    index: "07",
    title: "Prakash Steelage Industrial Web Portal",
    subtitle: "Stainless Steel Precision Pipe & Tube Manufacturing Portal",
    summary: "Enterprise industrial portal featuring dynamic ASTM pipe dimensional calculators, stainless steel grade specifiers, and mill test certification tracking.",
    tagline: "Enterprise industrial portal for precision stainless steel engineering.",
    project_type: "Industrial Portal",
    industry: "Steel & Metallurgy",
    image: "/protfolio image/Prakash Steelage.png",
    imgtitle: "Prakash Steelage Industrial Web Portal Showcase",
    altname: "Prakash Steelage Industrial Web Portal - Metallurgy Engineering",
    gallery_images: ["/protfolio image/Prakash Steelage.png"],
    client: "Prakash Steelage Ltd.",
    client_approved: true,
    project_date: "2026",
    year: "2026",
    duration: "12-14 Weeks",
    sla: "99.99% Uptime",
    badge: "FEATURED CASE STUDY",
    tags: ["Next.js", "TailwindCSS", "PostgreSQL", "Docker"],
    brief: "Build an interactive technical catalog for engineering procurement teams with mill test certificate lookup.",
    challenge: "Buyers struggled with complex alloy grade tables and manual spec sheet requests over phone and email.",
    solution: "Created an interactive pipe dimensional calculator and instant MTR specification engine.",
    deliverables: ["ASTM Spec Calculator", "Alloy Comparison Matrix", "Mill Test Lookup Portal", "RFQ Generator"],
    results_metric: "+320%",
    results_label: "Technical Spec Downloads",
    tech_stack: ["Next.js", "TailwindCSS", "PostgreSQL", "Docker"],
    is_featured: true,
    published: true,
    order: 7,
  },
  {
    slug: "vbott-ecommerce-flagship-storefront",
    category_slug: "website-and-web-application-projects",
    category_title: "Website & Web Applications",
    index: "08",
    title: "VBŌTT E-Commerce Flagship Storefront",
    subtitle: "Headless Direct-to-Consumer Luxury Hydration Experience",
    summary: "Ultra-fast headless ecommerce storefront featuring tactile 3D bottle customizer, dynamic cart upsells, and sub-second checkout conversion funnels.",
    tagline: "Headless direct-to-consumer luxury hydration storefront.",
    project_type: "Headless E-Commerce",
    industry: "Consumer Goods & Retail",
    image: "/protfolio image/VBOTT Website.png",
    imgtitle: "VBŌTT E-Commerce Flagship Storefront Showcase",
    altname: "VBŌTT E-Commerce Flagship Storefront - Digital Retail",
    gallery_images: ["/protfolio image/VBOTT Website.png"],
    client: "VBŌTT Hydration",
    client_approved: true,
    project_date: "2026",
    year: "2026",
    duration: "10-14 Weeks",
    sla: "99.99% Uptime",
    badge: "FEATURED CASE STUDY",
    tags: ["Next.js 15", "Shopify Storefront API", "TailwindCSS", "WebGL 3D"],
    brief: "Launch a luxury D2C ecommerce destination with interactive 3D bottle engraving and instant mobile checkout.",
    challenge: "Standard template ecommerce stores loaded slowly and could not support real-time 3D laser engraving customization.",
    solution: "Engineered a headless storefront on Next.js 15 with Three.js 3D personalization and sub-second payment gateways.",
    deliverables: ["3D Bottle Customizer", "Headless Storefront", "Instant Mobile Checkout", "Inventory Sync Engine"],
    results_metric: "+380%",
    results_label: "D2C Conversion Lift",
    tech_stack: ["Next.js 15", "Shopify Storefront API", "TailwindCSS", "WebGL 3D"],
    is_featured: true,
    published: true,
    order: 8,
  },
  {
    slug: "meritrack-mobile-suite",
    category_slug: "mobile-app-projects",
    category_title: "Mobile Applications",
    index: "01",
    title: "MeriTRACK Surgical Logistics Suite",
    subtitle: "Cross-Platform Mobile Suite for Surgical Implant Telemetry",
    summary: "High-reliability cross-platform mobile suite engineered for surgical implant tracking, hospital case scheduling, distributor allocation, and real-time medical sales representative telemetry.",
    tagline: "High-reliability cross-platform mobile suite for surgical implant tracking.",
    project_type: "Mobile App",
    industry: "Healthcare Logistics",
    image: "/protfolio image/MeriTRACK Space App Showcase.png",
    imgtitle: "MeriTRACK Surgical Logistics Suite Showcase",
    altname: "MeriTRACK Surgical Logistics Suite - Mobile Application",
    gallery_images: ["/protfolio image/MeriTRACK Space App Showcase.png"],
    client: "MeriTRACK Healthcare Logistics",
    client_approved: true,
    project_date: "2026",
    year: "2026",
    duration: "12-16 Weeks",
    sla: "99.99% Uptime",
    badge: "FEATURED CASE STUDY",
    tags: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "AWS IoT Core"],
    brief: "Build an edge-first mobile logistics application with offline barcode scanning and instant scrub nurse dispatch.",
    challenge: "Manual surgical tray reconciliations caused up to 45-minute surgical delays and lost orthopedic inventory.",
    solution: "Engineered offline-first barcode scanning, instant OT dispatch, and HIPAA-compliant delivery verification.",
    deliverables: ["Cross-Platform Mobile Suite", "Surgeon Scheduling Engine", "Live Implant Barcode Tracking", "Offline Bluetooth Sync"],
    results_metric: "99.98%",
    results_label: "On-Time Surgery Implant Delivery",
    tech_stack: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "AWS IoT Core"],
    is_featured: true,
    published: true,
    order: 1,
  },
  {
    slug: "vbott-identity",
    category_slug: "branding-and-graphic-design",
    category_title: "Branding & Design",
    index: "04",
    title: "VBŌTT Luxury Identity & Packaging System",
    subtitle: "Complete Brand Identity, Typography & Packaging Architecture",
    summary: "Comprehensive corporate brand architecture, premium typography, minimalist stationery, executive gift packaging, and tactile stainless steel merchandise system for consumer hydration products.",
    tagline: "Comprehensive corporate brand architecture and luxury packaging.",
    project_type: "Brand Identity",
    industry: "Luxury Consumer Goods",
    image: "/protfolio image/VBOTT Corporate Stationery in Space.png",
    imgtitle: "VBŌTT Luxury Identity & Packaging System Showcase",
    altname: "VBŌTT Luxury Identity & Packaging System - Brand Architecture",
    gallery_images: ["/protfolio image/VBOTT Corporate Stationery in Space.png"],
    client: "VBŌTT Hydration",
    client_approved: true,
    project_date: "2026",
    year: "2026",
    duration: "8-10 Weeks",
    sla: "100% Brand Guidelines",
    badge: "FEATURED CASE STUDY",
    tags: ["Brand Guidelines", "CAD Packaging Dielines", "Vector Systems", "Luxury Print Specs"],
    brief: "Create an international luxury brand identity system for premium insulated hydration products.",
    challenge: "Dated typography and inconsistent packaging specs caused high factory reprint costs and low brand recall.",
    solution: "Designed sculptural brand typography, tactile merchandise specs, and zero-waste CAD packaging dielines.",
    deliverables: ["Complete Brand Manual", "CAD Packaging Dielines", "Executive Stationery Suite", "Retail POS Guidelines"],
    results_metric: "+355%",
    results_label: "Brand Recall Score",
    tech_stack: ["Brand Guidelines", "CAD Packaging Dielines", "Vector Systems", "Luxury Print Specs"],
    is_featured: true,
    published: true,
    order: 4,
  },
  {
    slug: "tps-industrial-film",
    category_slug: "videography-and-photography",
    category_title: "Videography & Photography",
    index: "05",
    title: "Total Packaging Services Cinema Commercial",
    subtitle: "Cinematic 4K Commercial Documenting Advanced Packaging Infrastructure",
    summary: "Cinematic industrial commercial documenting advanced packaging infrastructure with 4K camera rigs, drone flythroughs, post-production color mastering, and precision manufacturing storytelling.",
    tagline: "Cinematic industrial commercial documenting advanced manufacturing.",
    project_type: "Cinema Commercial",
    industry: "Industrial Manufacturing",
    image: "/protfolio image/TPS videography.png",
    imgtitle: "Total Packaging Services Cinema Commercial Showcase",
    altname: "Total Packaging Services Cinema Commercial - Video Production",
    gallery_images: ["/protfolio image/TPS videography.png"],
    client: "Total Packaging Services Ltd.",
    client_approved: true,
    project_date: "2026",
    year: "2026",
    duration: "6-8 Weeks",
    sla: "4K DCI Master",
    badge: "FEATURED CASE STUDY",
    tags: ["4K Cinema Rigs", "Drone Telemetry", "DaVinci Resolve", "Spatial Sound Mastering"],
    brief: "Produce a high-impact commercial film capturing the scale and precision of high-speed packaging lines.",
    challenge: "Industrial warehouse acoustics and harsh lighting made capturing high-speed automation difficult.",
    solution: "Deployed 4K camera rigs, drone flythroughs, DaVinci Resolve color grading, and custom spatial sound design.",
    deliverables: ["4K Cinema Commercial", "Aerial Drone Flythrough", "Executive Sound Design", "Multi-Cut Social Formats"],
    results_metric: "+885%",
    results_label: "Viewer Dwell Time",
    tech_stack: ["4K Cinema Rigs", "Drone Telemetry", "DaVinci Resolve", "Spatial Sound Mastering"],
    is_featured: true,
    published: true,
    order: 5,
  },
  {
    slug: "omnigrowth-performance-engine",
    category_slug: "digital-marketing-projects",
    category_title: "Digital Marketing",
    index: "09",
    title: "OmniGrowth Performance Engine",
    subtitle: "High-ROAS Full-Funnel Paid Search & Programmatic Acquisition Architecture",
    summary: "High-ROAS full-funnel paid search and programmatic social acquisition architecture delivering 4.8x blended return on ad spend across global target markets.",
    tagline: "High-ROAS full-funnel paid search and programmatic acquisition architecture.",
    project_type: "Performance Marketing",
    industry: "E-Commerce & Global Retail",
    image: "/Digital Marketing/DM1.png",
    imgtitle: "OmniGrowth Performance Engine Showcase",
    altname: "OmniGrowth Performance Engine - Digital Marketing",
    gallery_images: ["/Digital Marketing/DM1.png"],
    client: "OmniGrowth Global Direct",
    client_approved: true,
    project_date: "2025",
    year: "2025",
    duration: "8-12 Weeks",
    sla: "4.8x Blended ROAS",
    badge: "FEATURED CASE STUDY",
    tags: ["Google Ads API", "Meta Graph API", "GA4 BigQuery", "Looker Studio", "AppsFlyer"],
    brief: "Scale cross-channel customer acquisition while reducing blended customer acquisition cost (CAC).",
    challenge: "Rising CAC across mature advertising channels and fractured cross-device attribution made forecasting unreliable.",
    solution: "Deployed machine-learning bid automation with first-party server-side tagging, stabilizing acquisition efficiency.",
    deliverables: ["Full-Funnel Attribution Matrix", "Google Performance Max Architecture", "Meta Creative Testing Engine", "Real-Time ROAS Dashboard"],
    results_metric: "4.8x",
    results_label: "Blended Return on Ad Spend",
    tech_stack: ["Google Ads API", "Meta Graph API", "GA4 BigQuery", "Looker Studio", "AppsFlyer"],
    is_featured: true,
    published: true,
    order: 9,
  },
  {
    slug: "zenith-social-omnichannel-growth",
    category_slug: "digital-marketing-projects",
    category_title: "Digital Marketing",
    index: "10",
    title: "Zenith Social Omnichannel Growth",
    subtitle: "Viral Social Engagement Campaign & Multi-Channel Retention Architecture",
    summary: "Viral social engagement campaign, influencer outreach matrix, and conversion-optimized retention flows driving 14M+ verified multi-channel impressions.",
    tagline: "Viral social engagement campaign and influencer acquisition matrix.",
    project_type: "Social Media & Retention",
    industry: "Consumer Lifestyle & Beverage",
    image: "/Digital Marketing/DM2.png",
    imgtitle: "Zenith Social Omnichannel Growth Showcase",
    altname: "Zenith Social Omnichannel Growth - Social Media Marketing",
    gallery_images: ["/Digital Marketing/DM2.png"],
    client: "Zenith Beverage Collective",
    client_approved: true,
    project_date: "2025",
    year: "2025",
    duration: "10-12 Weeks",
    sla: "14M+ Reach Target",
    badge: "FEATURED CASE STUDY",
    tags: ["TikTok Creator Studio", "Instagram Reels Suite", "Sprout Social", "Klaviyo Retention Engine"],
    brief: "Break through crowded beverage social timelines without resorting to massive discounts that dilute brand premium perception.",
    challenge: "Saturated social feeds and algorithmic reach drops made organic customer discovery slow and expensive.",
    solution: "Executed an episodic cultural narrative starring leading creators, combining trending sound design with exclusive product drop raffles.",
    deliverables: ["Social Content Playbook", "Influencer Contract Engine", "Community Management Telemetry", "Viral Short-form Video Factory"],
    results_metric: "14M+",
    results_label: "Verified Impressions",
    tech_stack: ["TikTok Creator Studio", "Instagram Reels Suite", "Sprout Social", "Klaviyo Retention Engine"],
    is_featured: true,
    published: true,
    order: 10,
  },
  {
    slug: "apex-enterprise-abm-acquisition",
    category_slug: "digital-marketing-projects",
    category_title: "Digital Marketing",
    index: "11",
    title: "Apex Enterprise ABM Acquisition",
    subtitle: "Account-Based Marketing (ABM) Engine for Enterprise B2B Sales Cycles",
    summary: "Targeted account-based marketing (ABM) engine combining technical whitepaper funnels, LinkedIn hyper-targeting, and inbound pipeline orchestration.",
    tagline: "Targeted account-based marketing engine for enterprise industrial pipelines.",
    project_type: "B2B Account-Based Marketing",
    industry: "Industrial Automation & Engineering",
    image: "/Digital Marketing/DM3.png",
    imgtitle: "Apex Enterprise ABM Acquisition Showcase",
    altname: "Apex Enterprise ABM Acquisition - B2B Digital Marketing",
    gallery_images: ["/Digital Marketing/DM3.png"],
    client: "Apex Industrial Automation",
    client_approved: true,
    project_date: "2025",
    year: "2025",
    duration: "12-16 Weeks",
    sla: "+250% Inbound Pipeline",
    badge: "FEATURED CASE STUDY",
    tags: ["HubSpot Enterprise", "LinkedIn Campaign Manager", "Apollo.io", "Clearbit IP Telemetry"],
    brief: "Build credibility with industrial engineering directors and CFOs over lengthy enterprise evaluation cycles.",
    challenge: "Enterprise deal sizes exceeding $250k required continuous touchpoints without aggressive outbound spam.",
    solution: "Constructed bespoke executive content hubs addressing high-voltage compliance and factory ROI, triggered by IP recognition.",
    deliverables: ["Account-Based ICP Mapping", "Technical Whitepaper Series", "LinkedIn Executive InMail Engine", "HubSpot Lead Scoring Matrix"],
    results_metric: "+280%",
    results_label: "Qualified Pipeline Growth",
    tech_stack: ["HubSpot Enterprise", "LinkedIn Campaign Manager", "Apollo.io", "Clearbit IP Telemetry"],
    is_featured: true,
    published: true,
    order: 11,
  },
  {
    slug: "balaji-multipack-brand-identity",
    category_slug: "branding-and-graphic-design",
    category_title: "Branding & Design",
    index: "12",
    title: "Balaji Multipack Brand Identity",
    subtitle: "Complete Corporate Brand Architecture & Industrial Packaging System",
    summary: "Corporate brand visual system, premium stationery suite, industrial packaging guidelines, and fleet vehicle livery architecture.",
    tagline: "Corporate brand visual system and industrial packaging guidelines.",
    project_type: "Brand Identity",
    industry: "Packaging & Manufacturing",
    image: "/Branding/B1.png",
    imgtitle: "Balaji Multipack Brand Identity Showcase",
    altname: "Balaji Multipack Brand Identity - Branding & Graphic Design",
    gallery_images: ["/Branding/B1.png"],
    client: "Balaji Multipack Pvt. Ltd.",
    client_approved: true,
    project_date: "2026",
    year: "2026",
    duration: "8-10 Weeks",
    sla: "45+ Brand Touchpoints",
    badge: "FEATURED CASE STUDY",
    tags: ["Adobe Creative Cloud", "Figma Tokens", "Pantone Calibration", "SolidWorks 3D Mockups"],
    brief: "Modernize a 30-year-old family packaging enterprise to win global supply contracts with multinational FMCG brands.",
    challenge: "Outdated legacy logos lacked visual authority and technical standardization across different packaging print substrates.",
    solution: "Designed an imposing geometric brand mark symbolizing structural tensile strength, backed by standardized pantone print standards.",
    deliverables: ["Brand Architecture & Logo Mark", "Complete Stationery Suite", "Factory Signage System", "Fleet Livery Guidelines"],
    results_metric: "45+",
    results_label: "Touchpoints Standardized",
    tech_stack: ["Adobe Creative Cloud", "Figma Tokens", "Pantone Calibration", "SolidWorks 3D Mockups"],
    is_featured: true,
    published: true,
    order: 12,
  },
  {
    slug: "magnum-pack-visual-identity-system",
    category_slug: "branding-and-graphic-design",
    category_title: "Branding & Design",
    index: "13",
    title: "Magnum Pack Visual Identity System",
    subtitle: "Modernized Industrial Identity Featuring Bold Logomarks & Guidelines",
    summary: "Modernized industrial identity featuring bold logomarks, color tokens, ISO-compliant documentation manuals, and tactile packaging mockups.",
    tagline: "Modernized industrial identity and corporate documentation manual.",
    project_type: "Brand Identity",
    industry: "Industrial Manufacturing",
    image: "/Branding/B2.png",
    imgtitle: "Magnum Pack Visual Identity System Showcase",
    altname: "Magnum Pack Visual Identity System - Graphic Design",
    gallery_images: ["/Branding/B2.png"],
    client: "Magnum Pack Industries",
    client_approved: true,
    project_date: "2025",
    year: "2025",
    duration: "6-8 Weeks",
    sla: "100% Subcontractor Compliance",
    badge: "FEATURED CASE STUDY",
    tags: ["Adobe Illustrator", "Adobe InDesign", "Keynote Pitch Systems", "Cinema 4D"],
    brief: "Codify corporate visual guidelines to prevent conflicting logo variations across sub-contractor printing facilities.",
    challenge: "Multiple factory locations used conflicting logo aspect ratios, diluting enterprise brand equity.",
    solution: "Authored an exhaustive 120-page brand manual codifying clear space rules, typography, and vector asset libraries.",
    deliverables: ["Corporate Visual Identity", "Typography Hierarchy Guide", "Packaging Structural Blueprint", "Exhibition Booth Guidelines"],
    results_metric: "100%",
    results_label: "Subcontractor Compliance",
    tech_stack: ["Adobe Illustrator", "Adobe InDesign", "Keynote Pitch Systems", "Cinema 4D"],
    is_featured: true,
    published: true,
    order: 13,
  },
  {
    slug: "weton-product-packaging-design",
    category_slug: "branding-and-graphic-design",
    category_title: "Branding & Design",
    index: "14",
    title: "Weton® Product & Packaging Design",
    subtitle: "Athletic Hydration Bottle Graphics & Sustainable Unboxing Architecture",
    summary: "Athletic hydration bottle graphics, sustainable unboxing carton architecture, structural blister packaging, and retail shelf presence guidelines.",
    tagline: "Athletic hydration bottle graphics and sustainable packaging architecture.",
    project_type: "Product & Packaging Design",
    industry: "Sports & Fitness Gear",
    image: "/Branding/B3.png",
    imgtitle: "Weton Product & Packaging Design Showcase",
    altname: "Weton Product & Packaging Design - Industrial Packaging",
    gallery_images: ["/Branding/B3.png"],
    client: "Weton® Hydration Gear",
    client_approved: true,
    project_date: "2025",
    year: "2025",
    duration: "8-10 Weeks",
    sla: "Zero-Plastic Packaging",
    badge: "FEATURED CASE STUDY",
    tags: ["Adobe Illustrator", "Esko ArtiosCAD", "Keyshot Photorealistic Renders", "Pantone Matching"],
    brief: "Transition from plastic clamshell blister packaging to an eco-friendly sustainable retail display box.",
    challenge: "Eco-conscious athletic retail chains rejected single-use plastic packaging.",
    solution: "Engineered an interlocking soy-ink recycled Kraft carton that holds the product securely without plastic ties or glues.",
    deliverables: ["Product Silhouette Graphics", "Biodegradable Unboxing Carton", "Hang-Tag & Blister Die-Lines", "Retail Shelf Display System"],
    results_metric: "-85%",
    results_label: "Single-Use Plastics Eliminated",
    tech_stack: ["Adobe Illustrator", "Esko ArtiosCAD", "Keyshot Photorealistic Renders", "Pantone Matching"],
    is_featured: true,
    published: true,
    order: 14,
  },
  {
    slug: "shah-finserv-financial-identity",
    category_slug: "branding-and-graphic-design",
    category_title: "Branding & Design",
    index: "15",
    title: "Shah Finserv Financial Identity",
    subtitle: "Executive Wealth Management Identity System & Prestige Stationery",
    summary: "Executive wealth management identity system with gold foil print specifications, investor prospectus layouts, and prestige corporate stationery.",
    tagline: "Executive wealth management identity system and prestige print specifications.",
    project_type: "Corporate Identity",
    industry: "Wealth Management & Finance",
    image: "/Branding/B4.png",
    imgtitle: "Shah Finserv Financial Identity Showcase",
    altname: "Shah Finserv Financial Identity - Wealth Management Branding",
    gallery_images: ["/Branding/B4.png"],
    client: "Shah Finserv Capital",
    client_approved: true,
    project_date: "2025",
    year: "2025",
    duration: "6-8 Weeks",
    sla: "99.5% Client Trust Rating",
    badge: "FEATURED CASE STUDY",
    tags: ["Adobe Illustrator", "Adobe InDesign", "Figma Financial UI", "Specialty Foil Finishing Guides"],
    brief: "Create a prestigious wealth management identity that projects security, heritage, and modern digital efficiency.",
    challenge: "Conveying multi-generational financial conservatism while communicating agile digital portal capabilities.",
    solution: "Forged an interlocking monogram crest coupled with clean neo-grotesque Swiss typography and gold foil finishes.",
    deliverables: ["Prestige Brand Crest", "Foil-Stamped Executive Stationery", "Investor Prospectus Template", "Private Client Portal Theme"],
    results_metric: "99.5%",
    results_label: "HNW Client Trust Index",
    tech_stack: ["Adobe Illustrator", "Adobe InDesign", "Figma Financial UI", "Specialty Foil Finishing Guides"],
    is_featured: true,
    published: true,
    order: 15,
  },
  {
    slug: "vanguard-high-altitude-commercial",
    category_slug: "videography-and-photography",
    category_title: "Videography & Photography",
    index: "16",
    title: "Vanguard High-Altitude Commercial",
    subtitle: "Extreme Weather 8K Cinema Production Capturing Technical Apparel",
    summary: "Extreme weather 8K cinema production capturing technical alpine apparel in sub-zero blizzard environments with aerial FPV drone telemetry.",
    tagline: "Extreme weather 8K cinema production and aerial drone telemetry.",
    project_type: "Cinema Production",
    industry: "Apparel & Outdoor Gear",
    image: "/images/project_forest_film.jpg",
    imgtitle: "Vanguard High-Altitude Commercial Showcase",
    altname: "Vanguard High-Altitude Commercial - Videography & Film",
    gallery_images: ["/images/project_forest_film.jpg"],
    client: "Vanguard Technical Outerwear",
    client_approved: true,
    project_date: "2025",
    year: "2025",
    duration: "6-8 Weeks",
    sla: "8K DCI Master Delivery",
    badge: "FEATURED CASE STUDY",
    tags: ["RED V-Raptor 8K", "FPV Drone Telemetry", "DaVinci Resolve Studio", "Spatial Sound Mixing"],
    brief: "Capture alpine mountaineering apparel in live sub-zero blizzard conditions with dynamic high-speed drone tracking.",
    challenge: "Sub-zero temperatures drained camera batteries in minutes and caused lens freezing.",
    solution: "Deployed heated camera rigs and specialized high-altitude FPV drones piloted by mountain flight specialists.",
    deliverables: ["8K Master Commercial", "Social Cutdowns (9:16 & 1:1)", "High-Resolution Lookbook Photography", "Color Grading Showreel"],
    results_metric: "+750%",
    results_label: "Social Video Engagement",
    tech_stack: ["RED V-Raptor 8K", "FPV Drone Telemetry", "DaVinci Resolve Studio", "Spatial Sound Mixing"],
    is_featured: true,
    published: true,
    order: 16,
  }
];

export async function getPortfolioProjects(categorySlug?: string): Promise<PortfolioProject[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/data/portfolio_project`, {
      cache: "no-store",
    });

    if (res.ok) {
      const json = await res.json();
      const list = Array.isArray(json?.data) ? json.data : [];

      if (list.length > 0) {
        const filtered = categorySlug
          ? list.filter(
            (doc: any) =>
              doc.category_populated?.slug === categorySlug ||
              doc.category === categorySlug ||
              doc.category_slug === categorySlug ||
              doc.category_populated?.id === categorySlug
          )
          : list;

        const mapped = filtered.map((doc: any, idx: number) => {
          const catSlug = doc.category_populated?.slug || doc.category_slug || "";
          const catTitle = doc.category_populated?.title || doc.category_title || doc.category_label || "";
          const cleanSlug =
            doc.p_link?.replace(/^\/portfolio\//, "") ||
            doc.slug ||
            doc.project_title?.toLowerCase().replace(/[^a-z0-9]+/g, "-") ||
            String(idx);

          const gallery = Array.isArray(doc.gallery_images) && doc.gallery_images.length > 0
            ? doc.gallery_images
            : (doc.image ? [doc.image] : []);

          const techStack = Array.isArray(doc.tech_stack) && doc.tech_stack.length > 0
            ? doc.tech_stack
            : Array.isArray(doc.tags) && doc.tags.length > 0
              ? doc.tags
              : doc.category_populated?.features
                ? doc.category_populated.features.split(",").map((s: string) => s.trim())
                : [catTitle || "Full-Stack"];

          return {
            slug: cleanSlug,
            category_slug: catSlug,
            category_title: catTitle,
            index: String(doc.order || idx + 1).padStart(2, "0"),
            title: doc.project_title || doc.title || "",
            subtitle: doc.vertical_title || doc.subtitle || "",
            summary: doc.summary || doc.tagline || "",
            tagline: doc.tagline || doc.summary || "",
            project_type: doc.project_type || catTitle || "Project",
            industry: doc.industry || "Global",
            image: doc.image || "",
            banner_image: doc.banner_image || doc.bannerImg || doc.banner || "",
            banner_imgtitle: doc.banner_imgtitle || "",
            banner_altname: doc.banner_altname || "",
            imgtitle: doc.imgtitle || `${doc.project_title || doc.title || ""} Showcase`,
            altname: doc.altname || `${doc.project_title || doc.title || ""}`,
            gallery_images: gallery,
            video_url: doc.video || doc.video_url || "",
            client: doc.client || doc.project_title || doc.title || "",
            client_approved: doc.client_approved !== undefined ? Boolean(doc.client_approved) : true,
            project_date: String(doc.year || doc.project_date || "2026"),
            year: String(doc.year || "2026"),
            duration: doc.duration || "Q1 2026",
            sla: doc.sla || "99.9%",
            badge: doc.badge || "FEATURED CASE STUDY",
            tags: techStack,
            brief: doc.brief || doc.tagline || "",
            challenge: doc.challenge || doc.tagline || "",
            solution: doc.solution || "Engineered with modern architecture, resilient infrastructure, and high-performance design standards.",
            deliverables: Array.isArray(doc.deliverables) && doc.deliverables.length > 0
              ? doc.deliverables
              : [
                  doc.vertical_title || "Enterprise Platform",
                  catTitle || "Digital Solution",
                  "Production Deployment"
                ],
            results_metric: doc.results_metric || "100%",
            results_label: doc.results_label || "Delivered",
            tech_stack: techStack,
            is_featured: doc.is_featured !== undefined ? Boolean(doc.is_featured) : idx < 6,
            published: doc.published !== undefined ? Boolean(doc.published) : true,
            order: doc.order !== undefined ? Number(doc.order) : idx + 1,
          };
        });

        // Sort by order so 1..6 appear first
        return mapped.sort((a: any, b: any) => (Number(a.order) || 999) - (Number(b.order) || 999));
      }
    }
  } catch (err) {
    console.warn("Falling back to default portfolio projects:", err);
  }

  // Fallback to static catalog
  return categorySlug
    ? DEFAULT_PORTFOLIO_PROJECTS_LIST.filter((p) => p.category_slug === categorySlug)
    : DEFAULT_PORTFOLIO_PROJECTS_LIST;
}

export async function getPortfolioProjectBySlug(slug: string): Promise<PortfolioProject | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/data/portfolio_project`, {
      cache: "no-store",
    });

    if (res.ok) {
      const json = await res.json();
      const list = Array.isArray(json?.data) ? json.data : [];

      const doc = list.find((d: any) => {
        const itemSlug =
          d.p_link?.replace(/^\/portfolio\//, "") ||
          d.slug ||
          d.project_title?.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        return (
          itemSlug === slug ||
          d.p_link === `/portfolio/${slug}` ||
          d.p_link === slug ||
          d.id === slug ||
          d._id === slug
        );
      });

      if (doc) {
        const catSlug = doc.category_populated?.slug || doc.category_slug || "";
        const catTitle = doc.category_populated?.title || doc.category_title || doc.category_label || "";
        const cleanSlug =
          doc.p_link?.replace(/^\/portfolio\//, "") ||
          doc.slug ||
          doc.project_title?.toLowerCase().replace(/[^a-z0-9]+/g, "-") ||
          slug;

        const gallery = Array.isArray(doc.gallery_images) && doc.gallery_images.length > 0
          ? doc.gallery_images
          : (doc.image ? [doc.image] : []);

        const techStack = Array.isArray(doc.tech_stack) && doc.tech_stack.length > 0
          ? doc.tech_stack
          : Array.isArray(doc.tags) && doc.tags.length > 0
            ? doc.tags
            : doc.category_populated?.features
              ? doc.category_populated.features.split(",").map((s: string) => s.trim())
              : [catTitle || "Full-Stack"];

        return {
          slug: cleanSlug,
          category_slug: catSlug,
          category_title: catTitle,
          index: String(doc.order || "01").padStart(2, "0"),
          title: doc.project_title || doc.title || "",
          subtitle: doc.vertical_title || doc.subtitle || "",
          summary: doc.summary || doc.tagline || "",
          tagline: doc.tagline || doc.summary || "",
          project_type: doc.project_type || catTitle || "Project",
          industry: doc.industry || "Global",
          image: doc.image || "",
          banner_image: doc.banner_image || doc.bannerImg || doc.banner || "",
          banner_imgtitle: doc.banner_imgtitle || "",
          banner_altname: doc.banner_altname || "",
          imgtitle: doc.imgtitle || `${doc.project_title || doc.title || ""} Showcase`,
          altname: doc.altname || `${doc.project_title || doc.title || ""}`,
          gallery_images: gallery,
          video_url: doc.video || doc.video_url || "",
          client: doc.client || doc.project_title || doc.title || "",
          client_approved: doc.client_approved !== undefined ? Boolean(doc.client_approved) : true,
          project_date: String(doc.year || doc.project_date || "2026"),
          year: String(doc.year || "2026"),
          duration: doc.duration || "Q1 2026",
          sla: doc.sla || "99.9%",
          badge: doc.badge || "FEATURED CASE STUDY",
          tags: techStack,
          brief: doc.brief || doc.tagline || "",
          challenge: doc.challenge || doc.tagline || "",
          solution: doc.solution || "Engineered with modern architecture, resilient infrastructure, and high-performance design standards.",
          deliverables: Array.isArray(doc.deliverables) && doc.deliverables.length > 0
            ? doc.deliverables
            : [
                doc.vertical_title || "Enterprise Platform",
                catTitle || "Digital Solution",
                "Production Deployment"
              ],
          results_metric: doc.results_metric || "100%",
          results_label: doc.results_label || "Delivered",
          tech_stack: techStack,
          is_featured: doc.is_featured !== undefined ? Boolean(doc.is_featured) : true,
          published: doc.published !== undefined ? Boolean(doc.published) : true,
          order: doc.order !== undefined ? Number(doc.order) : 1,
        };
      }
    }
  } catch (err) {
    console.warn("Falling back to default portfolio project:", err);
  }

  // Fallback to static catalog
  const found = DEFAULT_PORTFOLIO_PROJECTS_LIST.find(
    (p) => p.slug === slug || slug.includes(p.slug) || p.slug.includes(slug)
  );
  return found || null;
}

// =========================================================================
// Portfolio Hero & Archive Banner Data
// =========================================================================
export interface PortfolioHeroData {
  category?: string;
  category_slug?: string;
  bannerImg?: string;
  banner_image?: string;
  banner_title?: string;
  banner_breadcrumb?: string;
  banner_imgtitle?: string;
  banner_altname?: string;
  imgtitle?: string;
  altname?: string;
  Title?: string;
  title?: string;
  detailTagline?: string;
  badge?: string;
  LongDesc?: string;
  description?: string;
  cards_entry?: string[];
  counter_title?: string[];
  counter_description?: string[];
  total_projects_label?: string;
}

export const DEFAULT_PORTFOLIO_HERO: PortfolioHeroData = {
  banner_title: "PORTFOLIO ARCHIVE",
  banner_breadcrumb: "PORTFOLIO",
  banner_image: "/NewBanner/protfolio page banner.png",
  bannerImg: "/NewBanner/protfolio page banner.png",
  banner_imgtitle: "Portfolio Archive Banner",
  banner_altname: "RnD Technosoft Portfolio Archive",
  imgtitle: "Portfolio Archive Banner",
  altname: "RnD Technosoft Portfolio Archive",
  badge: "PORTFOLIO CATEGORIES // EXPLORE BY EXPERTISE",
  detailTagline: "PORTFOLIO CATEGORIES // EXPLORE BY EXPERTISE",
  title: "Explore Our Expertise",
  Title: "Explore Our Expertise",
  description:
    "Browse our portfolio by category to discover our successful projects across web development, mobile apps, marketing, branding, and media production.",
  LongDesc:
    "Browse our portfolio by category to discover our successful projects across web development, mobile apps, marketing, branding, and media production.",
  cards_entry: ["50+", "21+", "98%"],
  counter_title: ["PROJECTS DELIVERED", "LIVE CASE STUDIES", "CLIENT SATISFACTION"],
  counter_description: [
    "Across all specialized disciplines",
    "Verified enterprise flagships",
    "Long-term client SLA & delivery rating",
  ],
  total_projects_label: "Total Projects",
};

export async function getPortfolioHero(): Promise<PortfolioHeroData> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/data/portfolio_hero`, {
      cache: "no-store",
    });

    if (!res.ok) return DEFAULT_PORTFOLIO_HERO;

    const json = await res.json();
    const list = Array.isArray(json?.data) ? json.data : [];
    const doc = list.find((d: any) => !d.category || d.category === "") || list[0];
    if (!doc) return DEFAULT_PORTFOLIO_HERO;

    const cardsEntry = Array.isArray(doc.cards_entry)
      ? doc.cards_entry
      : Array.isArray(doc["Cards Entry"])
        ? doc["Cards Entry"]
        : doc.cards_entry
          ? [String(doc.cards_entry)]
          : DEFAULT_PORTFOLIO_HERO.cards_entry;

    const counterTitle = Array.isArray(doc.counter_title)
      ? doc.counter_title
      : doc.counter_title
        ? [String(doc.counter_title)]
        : DEFAULT_PORTFOLIO_HERO.counter_title;

    const counterDesc = Array.isArray(doc.counter_description)
      ? doc.counter_description
      : doc.counter_description
        ? [String(doc.counter_description)]
        : DEFAULT_PORTFOLIO_HERO.counter_description;

    return {
      banner_title: doc.banner_title || doc.Title || DEFAULT_PORTFOLIO_HERO.banner_title,
      banner_breadcrumb:
        doc.banner_breadcrumb || DEFAULT_PORTFOLIO_HERO.banner_breadcrumb,
      banner_image: doc.bannerImg || doc.banner_image || DEFAULT_PORTFOLIO_HERO.banner_image,
      bannerImg: doc.bannerImg || doc.banner_image || DEFAULT_PORTFOLIO_HERO.bannerImg,
      banner_imgtitle:
        doc.imgtitle || doc.banner_imgtitle || DEFAULT_PORTFOLIO_HERO.banner_imgtitle,
      banner_altname:
        doc.altname || doc.banner_altname || DEFAULT_PORTFOLIO_HERO.banner_altname,
      imgtitle: doc.imgtitle || doc.banner_imgtitle || DEFAULT_PORTFOLIO_HERO.imgtitle,
      altname: doc.altname || doc.banner_altname || DEFAULT_PORTFOLIO_HERO.altname,
      badge: doc.detailTagline || doc.badge || DEFAULT_PORTFOLIO_HERO.badge,
      detailTagline: doc.detailTagline || doc.badge || DEFAULT_PORTFOLIO_HERO.detailTagline,
      title: doc.Title || doc.title || DEFAULT_PORTFOLIO_HERO.title,
      Title: doc.Title || doc.title || DEFAULT_PORTFOLIO_HERO.Title,
      description: doc.LongDesc || doc.description || DEFAULT_PORTFOLIO_HERO.description,
      LongDesc: doc.LongDesc || doc.description || DEFAULT_PORTFOLIO_HERO.LongDesc,
      cards_entry: cardsEntry,
      counter_title: counterTitle,
      counter_description: counterDesc,
      total_projects_label:
        doc.total_projects_label || DEFAULT_PORTFOLIO_HERO.total_projects_label,
    };
  } catch (err) {
    console.warn("Failed to fetch portfolio hero:", err);
    return DEFAULT_PORTFOLIO_HERO;
  }
}

export async function getPortfolioHeroByCategory(
  categorySlug: string
): Promise<PortfolioHeroData | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/data/portfolio_hero`, {
      cache: "no-store",
    });

    if (!res.ok) return null;

    const json = await res.json();
    const list = Array.isArray(json?.data) ? json.data : [];

    const found = list.find(
      (doc: any) =>
        doc.category_populated?.slug === categorySlug ||
        doc.category === categorySlug ||
        doc.category_slug === categorySlug
    );

    if (!found) return null;

    const cardsEntry = Array.isArray(found.cards_entry)
      ? found.cards_entry
      : Array.isArray(found["Cards Entry"])
        ? found["Cards Entry"]
        : found.cards_entry
          ? [String(found.cards_entry)]
          : [];

    const counterTitle = Array.isArray(found.counter_title)
      ? found.counter_title
      : found.counter_title
        ? [String(found.counter_title)]
        : [];

    const counterDesc = Array.isArray(found.counter_description)
      ? found.counter_description
      : found.counter_description
        ? [String(found.counter_description)]
        : [];

    return {
      category: found.category || "",
      category_slug: found.category_populated?.slug || categorySlug,
      banner_title: found.banner_title || found.Title || "",
      bannerImg: found.bannerImg || found.banner_image || "",
      banner_image: found.bannerImg || found.banner_image || "",
      Title: found.Title || found.title || "",
      title: found.Title || found.title || "",
      imgtitle: found.imgtitle || found.banner_imgtitle || "",
      altname: found.altname || found.banner_altname || "",
      detailTagline: found.detailTagline || found.badge || "",
      badge: found.detailTagline || found.badge || "",
      LongDesc: found.LongDesc || found.description || "",
      description: found.LongDesc || found.description || "",
      cards_entry: cardsEntry,
      counter_title: counterTitle,
      counter_description: counterDesc,
    };
  } catch (err) {
    console.warn("Failed to fetch category hero data:", err);
    return null;
  }
}

// =========================================================================
// Portfolio FAQs
// =========================================================================
export interface PortfolioFaqItem {
  id?: string;
  category_slug?: string;
  question: string;
  answer: string;
  order?: number;
  published?: boolean;
}

export async function getPortfolioFaqs(
  categorySlug?: string
): Promise<PortfolioFaqItem[]> {
  try {
    const url = categorySlug
      ? `${API_BASE_URL}/api/data/portfolio_faqs?category_slug=${encodeURIComponent(
        categorySlug
      )}`
      : `${API_BASE_URL}/api/data/portfolio_faqs`;

    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return [];

    const json = await res.json();
    const list = Array.isArray(json?.data) ? json.data : [];
    const filtered = list.filter((item: any) => item.published !== false);

    if (filtered.length > 0) {
      return [...filtered].sort(
        (a: any, b: any) => (a.order || 0) - (b.order || 0)
      );
    }

    // If category-specific lookup returned empty, fallback to general 'all' category FAQs
    if (categorySlug && categorySlug !== "all") {
      const allRes = await fetch(
        `${API_BASE_URL}/api/data/portfolio_faqs?category_slug=all`,
        { cache: "no-store" }
      );
      if (allRes.ok) {
        const allJson = await allRes.json();
        const allList = Array.isArray(allJson?.data) ? allJson.data : [];
        const allFiltered = allList.filter(
          (item: any) => item.published !== false
        );
        if (allFiltered.length > 0) {
          return [...allFiltered].sort(
            (a: any, b: any) => (a.order || 0) - (b.order || 0)
          );
        }
      }
    }

    return [];
  } catch (err) {
    console.warn("Failed to fetch portfolio FAQs:", err);
    return [];
  }
}

// =========================================================================
// Portfolio Bottom CTA
// =========================================================================
export interface PortfolioCtaData {
  badge: string;
  title: string;
  description: string;
  primary_button_text: string;
  primary_button_link: string;
  secondary_button_text: string;
  secondary_button_link: string;
}

export const DEFAULT_PORTFOLIO_CTA: PortfolioCtaData = {
  badge: "Start Your Project",
  title: "Ready to Build Something Amazing?",
  description:
    "Let's discuss your project requirements and create a tailored solution that exceeds expectations.",
  primary_button_text: "Get Started",
  primary_button_link: "/contact-us",
  secondary_button_text: "View All Projects",
  secondary_button_link: "/portfolio",
};

export async function getPortfolioCta(): Promise<PortfolioCtaData> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/data/portfolio_cta`, {
      cache: "no-store",
    });

    if (!res.ok) return DEFAULT_PORTFOLIO_CTA;

    const json = await res.json();
    const doc = Array.isArray(json?.data) ? json.data[0] : json?.data;
    if (!doc) return DEFAULT_PORTFOLIO_CTA;

    return {
      badge: doc.badge || DEFAULT_PORTFOLIO_CTA.badge,
      title: doc.title || DEFAULT_PORTFOLIO_CTA.title,
      description: doc.description || DEFAULT_PORTFOLIO_CTA.description,
      primary_button_text:
        doc.primary_button_text || DEFAULT_PORTFOLIO_CTA.primary_button_text,
      primary_button_link:
        doc.primary_button_link || DEFAULT_PORTFOLIO_CTA.primary_button_link,
      secondary_button_text:
        doc.secondary_button_text || DEFAULT_PORTFOLIO_CTA.secondary_button_text,
      secondary_button_link:
        doc.secondary_button_link || DEFAULT_PORTFOLIO_CTA.secondary_button_link,
    };
  } catch (err) {
    console.warn("Failed to fetch portfolio CTA:", err);
    return DEFAULT_PORTFOLIO_CTA;
  }
}

// =========================================================================
// PORTFOLIO CHILD PAGE (Case Study Sections)
// /portfolio/[slug]/[portfolio_slug]
//
// Parent data (title, image, client, year, tech stack, brief, challenge,
// solution, deliverables, results, category, video) comes from
// `portfolio_project` and is NOT stored here. This collection only holds
// the child-page-only sections, linked via project_slug.
// =========================================================================
export interface BeforeAfterConfig {
  beforeTitle: string;
  beforeDescription: string;
  legacyPoints: string[];
  afterTitle: string;
  afterDescription: string;
  modernPoints: string[];
  metrics: ComparisonMetric[];
}

export interface ComparisonMetric {
  label: string;
  before: string;
  after: string;
  improvement: string;
  subtext: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  duration: string;
  image: string;
  desc: string;
  deliverables: string[];
}

export interface TelemetryMetric {
  metric: string;
  label: string;
  verified: string;
}

export interface GalleryItem {
  image: string;
  caption?: string;
}

export interface TestimonialData {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export interface PortfolioChildPageData {
  project_slug: string;
  published: boolean;
  banner_image?: string;
  banner_imgtitle?: string;
  banner_altname?: string;
  before_after: BeforeAfterConfig;
  process_steps: ProcessStep[];
  telemetry_metrics: TelemetryMetric[];
  gallery_extra: GalleryItem[];
  testimonial: TestimonialData | null;
  seo_title?: string;
  seo_description?: string;
}

// ---------------------------------------------------------------------------
// Normalization helpers (ArrayObject fields may arrive as arrays of objects,
// comma-separated strings, or JSON strings depending on how they were saved)
// ---------------------------------------------------------------------------
function toStringArray(value: any): string[] {
  if (Array.isArray(value)) return value.map((v) => String(v)).filter(Boolean);
  if (typeof value === "string" && value.trim()) {
    return value
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  }
  return [];
}

function toPointList(value: any): string[] {
  // Supports: [{point:"..."}, "direct string", "a,b,c"]
  if (Array.isArray(value)) {
    return value
      .map((v: any) => (typeof v === "object" && v !== null ? String(v.point || v.text || v.value || "") : String(v)))
      .filter(Boolean);
  }
  if (typeof value === "string" && value.trim()) {
    try {
      const parsed = JSON.parse(value);
      if (Array.isArray(parsed)) return toPointList(parsed);
    } catch {
      /* plain string */
    }
    return value.split("\n").map((s) => s.trim()).filter(Boolean);
  }
  return [];
}

function toMetrics(value: any): ComparisonMetric[] {
  if (Array.isArray(value)) {
    return value.map((m: any) => ({
      label: String(m?.label || ""),
      before: String(m?.before || ""),
      after: String(m?.after || ""),
      improvement: String(m?.improvement || ""),
      subtext: String(m?.subtext || ""),
    })).filter((m) => m.label);
  }
  return [];
}

function toTelemetry(value: any): TelemetryMetric[] {
  if (Array.isArray(value)) {
    return value.map((m: any) => ({
      metric: String(m?.metric || ""),
      label: String(m?.label || ""),
      verified: String(m?.verified || ""),
    })).filter((m) => m.metric);
  }
  return [];
}

function toProcessSteps(value: any, project: PortfolioProject | null): ProcessStep[] {
  let steps: ProcessStep[] = [];
  if (Array.isArray(value)) {
    steps = value.map((s: any) => ({
      number: String(s?.number || ""),
      title: String(s?.title || ""),
      duration: String(s?.duration || ""),
      image: String(s?.image || ""),
      desc: String(s?.desc || s?.description || ""),
      deliverables: toStringArray(s?.deliverables),
    })).filter((s) => s.title);
  }
  return steps;
}

function toGallery(value: any): GalleryItem[] {
  if (Array.isArray(value)) {
    return value
      .map((g: any) =>
        typeof g === "string"
          ? { image: g, caption: "" }
          : { image: String(g?.image || ""), caption: String(g?.caption || "") }
      )
      .filter((g) => g.image);
  }
  return [];
}

// ---------------------------------------------------------------------------
// DEFAULTS derived from parent project (used when no child doc exists)
// These mirror the category-based defaults previously hardcoded in the view.
// ---------------------------------------------------------------------------
export function getDefaultChildPageData(project: PortfolioProject): PortfolioChildPageData {
  const cat = (project.category_slug || "").toLowerCase();
  const gallery = project.gallery_images?.length
    ? project.gallery_images
    : project.image
      ? [project.image]
      : ["/images/service_cloud_color.jpg"];

  let before_after: BeforeAfterConfig;
  if (cat.includes("mobile")) {
    before_after = {
      beforeTitle: "Manual Hospital Logs & Fragmented Dispatch",
      beforeDescription:
        "Prior to the mobile logistics suite, orthopedic implant tracking relied on paper manifests, phone calls, and manual spreadsheet entries with severe hospital dispatch delays.",
      legacyPoints: [
        "Surgical cases delayed up to 45 minutes due to missing implant telemetry",
        "Zero real-time barcode reconciliation at hospital scrub stations",
        "Distributors relying on unverified manual WhatsApp dispatch messages",
        "No offline sync in subterranean hospital OT basement wings",
      ],
      afterTitle: "Edge-First Native Mobile Architecture",
      afterDescription:
        "RND engineered a resilient cross-platform mobile suite with offline-first barcode scanning, automated scrub nurse dispatch, and HIPAA-compliant delivery verification.",
      modernPoints: [
        "99.98% on-time surgical case implant deliveries verified across hospitals",
        "Sub-100ms camera barcode decoding with offline Bluetooth buffer sync",
        "Instant surgeon schedule synchronization and push telemetry dispatch",
        "End-to-end encrypted medical chain of custody audit logging",
      ],
      metrics: [
        { label: "Case Delivery Accuracy", before: "84.2%", after: "99.98%", improvement: "+18.7% Lift", subtext: "Live surgical cases" },
        { label: "Implant Dispatch Latency", before: "45 min", after: "3.2 min", improvement: "93% Faster", subtext: "Dispatch to OT arrival" },
        { label: "Offline Sync Reliability", before: "0%", after: "100%", improvement: "Subterranean OT Ready", subtext: "Bluetooth local cache" },
        { label: "Inventory Shrinkage", before: "12.4%", after: "0.1%", improvement: "-99% Shrinkage", subtext: "Automated RFID ledger" },
      ],
    };
  } else if (cat.includes("branding") || cat.includes("design")) {
    before_after = {
      beforeTitle: "Fragmented Visuals & Low Brand Recall",
      beforeDescription:
        "The legacy corporate presence had disjointed typography scales, inconsistent packaging specifications, and lacked a unified premium design language.",
      legacyPoints: [
        "Fragmented typography scales across web, packaging, and retail collateral",
        "Flat, static 2D visuals with zero luxury or spatial depth presence",
        "Disjointed color palette lacking modern dark-mode accessibility",
        "Unstandardized packaging dielines causing costly printing misalignments",
      ],
      afterTitle: "Sculptural Brand Architecture & Packaging",
      afterDescription:
        "RND engineered a comprehensive luxury brand architecture, precision typography system, tactile stainless steel merchandise specs, and retail display assets.",
      modernPoints: [
        "Sculptural avant-garde typography system built for luxury hydration products",
        "Unified atomic design tokens harmonizing web, packaging, and store displays",
        "Custom 3D bottle rendering pipeline delivering tactile material finishes",
        "Flawless print-ready dieline specifications reducing factory waste to zero",
      ],
      metrics: [
        { label: "Brand Recall Score", before: "18%", after: "82%", improvement: "+355% Lift", subtext: "Consumer survey index" },
        { label: "Visual Cohesion Index", before: "38 / 100", after: "98 / 100", improvement: "+157% Cohesion", subtext: "Cross-channel audit" },
        { label: "Packaging Production Waste", before: "14.8%", after: "0.4%", improvement: "-97% Waste", subtext: "CAD dieline precision" },
        { label: "Retail Shelf Conversion", before: "2.3%", after: "8.7%", improvement: "+278% Sales", subtext: "In-store POS lift" },
      ],
    };
  } else if (cat.includes("video") || cat.includes("photo")) {
    before_after = {
      beforeTitle: "Unscripted Footage & Low Production Value",
      beforeDescription:
        "The company's industrial infrastructure was documented using basic handheld cameras, poor warehouse lighting, and zero cinematic storytelling.",
      legacyPoints: [
        "Shaky non-stabilized footage failing to communicate manufacturing scale",
        "Muffled industrial audio with harsh reverberation and machine noise",
        "Uncalibrated color profiles looking dull on high-end 4K commercial screens",
        "No structured narrative explaining the high-speed packaging machinery",
      ],
      afterTitle: "Cinematic 4K Commercial & Drone Telemetry",
      afterDescription:
        "RND deployed cinema-grade camera rigs, precision drone flythroughs, post-production color mastering, and sound design to capture industrial engineering marvels.",
      modernPoints: [
        "4K ProRes cinema footage with smooth dynamic gimbal & drone flythroughs",
        "Multi-track spatial audio design enhancing machine rhythms and punch",
        "Precision DaVinci Resolve color grading matching the enterprise brand tone",
        "Compelling narrative arc positioning the facility as an international leader",
      ],
      metrics: [
        { label: "Viewer Retention Rate", before: "14 sec", after: "2 min 18 sec", improvement: "+885% Dwell", subtext: "Social & B2B platforms" },
        { label: "Client Inquiries Generated", before: "2 / month", after: "28 / month", improvement: "+1300% Lift", subtext: "B2B RFP conversions" },
        { label: "Color Gamut Precision", before: "Rec.709 Basic", after: "DCI-P3 Master", improvement: "Cinema Grade", subtext: "10-bit color grading" },
        { label: "Brand Authority Rating", before: "42 / 100", after: "96 / 100", improvement: "+128% Authority", subtext: "Industry stakeholder audit" },
      ],
    };
  } else {
    // Default: Web & Web Applications
    before_after = {
      beforeTitle: "Static Legacy Catalog & 4.8s Page Lag",
      beforeDescription:
        "The legacy machinery web portal relied on static PDF downloads, outdated layouts, and slow server response times that failed to engage international B2B buyers.",
      legacyPoints: [
        "Sluggish 4.8s page load times leading to >65% mobile bounce rates",
        "Static product catalogs requiring users to download heavy PDF brochures",
        "Zero 3D visualization or interactive conveyor throughput calculation",
        "Manual email inquiries trapped in unmonitored inboxes with 48h response delay",
      ],
      afterTitle: "Next.js 15 Sub-Second 3D Web Platform",
      afterDescription:
        "RND engineered a sub-second, edge-rendered Next.js 15 web platform featuring real-time 3D machinery visualization, dynamic conveyor matrices, and automated RFQ routing.",
      modernPoints: [
        "Sub-800ms global LCP load speed powered by multi-region edge caching",
        "Interactive 3D WebGL machinery exploration running at a smooth 60 FPS",
        "Automated B2B RFQ configurator calculating machinery specs in real time",
        "Instant CRM pipeline synchronization reducing lead response time to seconds",
      ],
      metrics: [
        { label: "Global LCP Speed", before: "4.82s", after: "0.78s", improvement: "84% Faster", subtext: "Multi-region edge SSR" },
        { label: "B2B Qualified RFQs", before: "8 / month", after: "48 / month", improvement: "+500% Lift", subtext: "Interactive configurator" },
        { label: "Mobile Bounce Rate", before: "68%", after: "16%", improvement: "-76% Bounce", subtext: "Mobile-first parity" },
        { label: "Average Session Dwell", before: "42 sec", after: "3 min 40 sec", improvement: "+423% Time", subtext: "3D interactive engagement" },
      ],
    };
  }

  const process_steps: ProcessStep[] = [
    {
      number: "01",
      title: "Discovery & Architectural Audit",
      duration: "Weeks 1 - 2",
      image: gallery[0] || "/images/service_cloud_color.jpg",
      desc: "Comprehensive diagnostic of the legacy ecosystem, stakeholder interviews, competitor benchmarking, and mapping technical API bottlenecks to formulate the project roadmap.",
      deliverables: ["Legacy Bottleneck Audit Report", "Technical Feasibility Matrix", "User Persona Telemetry Profile", "Architecture Blueprint Document"],
    },
    {
      number: "02",
      title: "Information Architecture & UX Wireframing",
      duration: "Weeks 3 - 4",
      image: gallery[1] || "/images/nebula_cloud_os_3d.jpg",
      desc: "Constructing user journey maps, wireframing responsive viewports, defining atomic design tokens, and validating user navigation paths for frictionless conversion velocity.",
      deliverables: ["Low & High-Fidelity Wireframes", "User Navigation Flowcharts", "Interactive Clickable Prototype", "Atomic Design Token Hierarchy"],
    },
    {
      number: "03",
      title: "3D Spatial & UI/UX Design Immersion",
      duration: "Weeks 5 - 7",
      image: gallery[2] || "/images/service_mobile_color.jpg",
      desc: "Crafting the visual identity, modeling 3D assets/renderings, establishing the cosmic dark aesthetic with high-contrast gold accents, and fine-tuning micro-interactions.",
      deliverables: ["Full Component Design System (Figma)", "3D WebGL Optimized Asset Models", "Fluid Kinetic Animation Curves", "Multi-Viewport Design Signoff"],
    },
    {
      number: "04",
      title: "Full-Stack Engineering & API Mesh",
      duration: "Weeks 8 - 10",
      image: gallery[3] || "/images/service_branding.jpg",
      desc: "Developing with Next.js App Router, TailwindCSS, MongoDB schema design, automated email/CRM dispatchers, and state-of-the-art WebGL interactive shaders.",
      deliverables: ["Serverless Edge API Endpoints", "Responsive Component Codebase", "CRM & Inquiry Automation Hookups", "Real-Time Database Schema Integration"],
    },
    {
      number: "05",
      title: "Rigorous QA, Speed & Security Audit",
      duration: "Weeks 11 - 12",
      image: gallery[4] || "/images/service_marketing.jpg",
      desc: "Comprehensive stress testing, cross-browser/device validation, Lighthouse 98+ score optimization, image asset compression (WebP/AVIF), and security audits.",
      deliverables: ["Lighthouse 98+ Performance Signoff", "Cross-Browser Device Compatibility Matrix", "Zero-Vulnerability Security Audit", "Edge Cache Invalidation Protocol"],
    },
    {
      number: "06",
      title: "Production Deployment & Live Telemetry",
      duration: "Weeks 13 - 14",
      image: gallery[5] || gallery[0] || "/images/service_cloud_color.jpg",
      desc: "Zero-downtime deployment to AWS/Vercel Edge, DNS routing, Google Search Console indexing, analytics telemetry monitoring, and client team handover.",
      deliverables: ["Live Production Deployment", "Global CDN Edge Warmup", "Google Core Web Vitals Indexing", "Admin CMS Operations Handover"],
    },
  ];

  const telemetry_metrics: TelemetryMetric[] = [
    { metric: project.results_metric || "<0.8s", label: project.results_label || "Global Edge Velocity", verified: "Lighthouse Audit" },
    { metric: "99.99%", label: "Production Availability SLA", verified: "Cloudflare Edge" },
    { metric: "+340%", label: "B2B Inquiry Funnel Conversion", verified: "Google Analytics" },
    { metric: "100%", label: "Deliverables Handover Verified", verified: "Client Approved" },
  ];

  return {
    project_slug: project.slug,
    published: true,
    banner_image: project.banner_image || (project as any).bannerImg || (project as any).banner || "",
    banner_imgtitle: project.banner_imgtitle || "",
    banner_altname: project.banner_altname || "",
    before_after,
    process_steps,
    telemetry_metrics,
    gallery_extra: [],
    testimonial: null,
  };
}

// ---------------------------------------------------------------------------
// Fetch + merge child page data with parent project data
// ---------------------------------------------------------------------------
export async function getPortfolioChildPageData(
  project: PortfolioProject
): Promise<PortfolioChildPageData> {
  const defaults = getDefaultChildPageData(project);

  try {
    const res = await fetch(
      `${API_BASE_URL}/api/data/portfolio_child_page?project_slug=${encodeURIComponent(project.slug)}`,
      { cache: "no-store" }
    );

    if (res.ok) {
      const json = await res.json();
      const list = Array.isArray(json?.data) ? json.data : json?.data ? [json.data] : [];
      const doc = list.find(
        (d: any) =>
          d.project_slug === project.slug ||
          d.slug === project.slug ||
          d._id === project.slug
      );

      if (doc && doc.published !== false) {
        return {
          project_slug: project.slug,
          published: true,
          banner_image: doc.banner_image || "",
          banner_imgtitle: doc.banner_imgtitle || "",
          banner_altname: doc.banner_altname || "",
          before_after: {
            beforeTitle: doc.before_title || defaults.before_after.beforeTitle,
            beforeDescription: doc.before_description || defaults.before_after.beforeDescription,
            legacyPoints: toPointList(doc.legacy_points).length
              ? toPointList(doc.legacy_points)
              : defaults.before_after.legacyPoints,
            afterTitle: doc.after_title || defaults.before_after.afterTitle,
            afterDescription: doc.after_description || defaults.before_after.afterDescription,
            modernPoints: toPointList(doc.modern_points).length
              ? toPointList(doc.modern_points)
              : defaults.before_after.modernPoints,
            metrics: toMetrics(doc.comparison_metrics).length
              ? toMetrics(doc.comparison_metrics)
              : defaults.before_after.metrics,
          },
          process_steps: toProcessSteps(doc.process_steps, project).length
            ? toProcessSteps(doc.process_steps, project)
            : defaults.process_steps,
          telemetry_metrics: toTelemetry(doc.telemetry_metrics).length
            ? toTelemetry(doc.telemetry_metrics)
            : defaults.telemetry_metrics,
          gallery_extra: toGallery(doc.gallery_extra),
          testimonial:
            doc.testimonial_quote && String(doc.testimonial_quote).trim()
              ? {
                  quote: String(doc.testimonial_quote),
                  author: String(doc.testimonial_author || ""),
                  role: String(doc.testimonial_role || ""),
                  avatar: String(doc.testimonial_avatar || ""),
                }
              : null,
          seo_title: doc.seo_title || "",
          seo_description: doc.seo_description || "",
        };
      }
    }
  } catch (err) {
    console.warn("Failed to fetch portfolio_child_page data, using defaults:", err);
  }

  return defaults;
}
