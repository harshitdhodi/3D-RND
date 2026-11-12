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
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3014";

export async function getPortfolioData(): Promise<FeaturedProjectItem[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/data/portfolio_projects`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return DEFAULT_PROJECTS_DATA;
    }

    const json = await res.json();
    const list = Array.isArray(json?.data) ? json.data : [];
    if (list.length === 0) return DEFAULT_PROJECTS_DATA;

    const sorted = [...list].sort(
      (a: any, b: any) => (a.order || 0) - (b.order || 0)
    );

    return sorted.map((doc: any, idx: number) => ({
      id: doc.slug || String(idx),
      category: doc.category || "PROJECT",
      tag: doc.tag || "",
      verticalTitle: doc.vertical_title || doc.verticalTitle || doc.title || "",
      title: doc.title || "",
      location: doc.location || "GLOBAL",
      desc: doc.desc || "",
      image: doc.image || "/images/service_cloud_color.jpg",
      imgtitle: doc.imgtitle || `${doc.title || ""} Showcase`,
      altname: doc.altname || `${doc.title || ""} - ${doc.category || "Project"}`,
      specs: doc.specs || "",
      link: doc.link || "/portfolio",
    }));
  } catch (err) {
    console.warn("Falling back to default Portfolio Projects data:", err);
    return DEFAULT_PROJECTS_DATA;
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
  index: string;
  title: string;
  subtitle: string;
  summary: string;
  tagline: string;
  project_type: string;
  industry: string;
  image: string;
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

export async function getPortfolioProjects(categorySlug?: string): Promise<PortfolioProject[]> {
  try {
    const url = categorySlug 
      ? `${API_BASE_URL}/api/data/portfolio_projects?category_slug=${categorySlug}`
      : `${API_BASE_URL}/api/data/portfolio_projects`;
    
    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
      return [];
    }

    const json = await res.json();
    const list = Array.isArray(json?.data) ? json.data : [];
    
    const filtered = list.filter((doc: any) => doc.published !== false);
    
    const sorted = [...filtered].sort(
      (a: any, b: any) => (a.order || 0) - (b.order || 0)
    );

    return sorted.map((doc: any) => ({
      slug: doc.slug || "",
      category_slug: doc.category_slug || "",
      index: doc.index || "",
      title: doc.title || "",
      subtitle: doc.subtitle || "",
      summary: doc.summary || "",
      tagline: doc.tagline || "",
      project_type: doc.project_type || "",
      industry: doc.industry || "",
      image: doc.image || "",
      gallery_images: doc.gallery_images ? doc.gallery_images.split(',').map((s: string) => s.trim()) : [],
      video_url: doc.video_url,
      client: doc.client || "",
      client_approved: doc.client_approved || false,
      project_date: doc.project_date || "",
      year: doc.year || "",
      duration: doc.duration || "",
      sla: doc.sla || "",
      badge: doc.badge || "",
      tags: doc.tags ? doc.tags.split(',').map((s: string) => s.trim()) : [],
      brief: doc.brief || "",
      challenge: doc.challenge || "",
      solution: doc.solution || "",
      deliverables: doc.deliverables ? doc.deliverables.split(',').map((s: string) => s.trim()) : [],
      results_metric: doc.results_metric,
      results_label: doc.results_label,
      tech_stack: doc.tech_stack ? doc.tech_stack.split(',').map((s: string) => s.trim()) : [],
      is_featured: doc.is_featured || false,
      published: doc.published !== false,
      order: doc.order || 0,
    }));
  } catch (err) {
    console.warn("Failed to fetch portfolio projects:", err);
    return [];
  }
}

export async function getPortfolioProjectBySlug(slug: string): Promise<PortfolioProject | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/data/portfolio_projects?slug=${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return null;
    }

    const json = await res.json();
    const list = Array.isArray(json?.data) ? json.data : [];
    const doc = list[0];

    if (!doc) return null;

    return {
      slug: doc.slug || "",
      category_slug: doc.category_slug || "",
      index: doc.index || "",
      title: doc.title || "",
      subtitle: doc.subtitle || "",
      summary: doc.summary || "",
      tagline: doc.tagline || "",
      project_type: doc.project_type || "",
      industry: doc.industry || "",
      image: doc.image || "",
      gallery_images: doc.gallery_images ? doc.gallery_images.split(',').map((s: string) => s.trim()) : [],
      video_url: doc.video_url,
      client: doc.client || "",
      client_approved: doc.client_approved || false,
      project_date: doc.project_date || "",
      year: doc.year || "",
      duration: doc.duration || "",
      sla: doc.sla || "",
      badge: doc.badge || "",
      tags: doc.tags ? doc.tags.split(',').map((s: string) => s.trim()) : [],
      brief: doc.brief || "",
      challenge: doc.challenge || "",
      solution: doc.solution || "",
      deliverables: doc.deliverables ? doc.deliverables.split(',').map((s: string) => s.trim()) : [],
      results_metric: doc.results_metric,
      results_label: doc.results_label,
      tech_stack: doc.tech_stack ? doc.tech_stack.split(',').map((s: string) => s.trim()) : [],
      is_featured: doc.is_featured || false,
      published: doc.published !== false,
      order: doc.order || 0,
    };
  } catch (err) {
    console.warn("Failed to fetch portfolio project:", err);
    return null;
  }
}
