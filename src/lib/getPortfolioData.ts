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

export async function getPortfolioProjects(categorySlug?: string): Promise<PortfolioProject[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/data/portfolio_project`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return [];
    }

    const json = await res.json();
    const list = Array.isArray(json?.data) ? json.data : [];

    const filtered = categorySlug
      ? list.filter(
          (doc: any) =>
            doc.category_populated?.slug === categorySlug ||
            doc.category === categorySlug ||
            doc.category_slug === categorySlug ||
            doc.category_populated?.id === categorySlug
        )
      : list;

    return filtered.map((doc: any, idx: number) => {
      const catSlug = doc.category_populated?.slug || doc.category_slug || "";
      const catTitle = doc.category_populated?.title || doc.category_label || "";
      const cleanSlug =
        doc.p_link?.replace(/^\/portfolio\//, "") ||
        doc.slug ||
        doc.project_title?.toLowerCase().replace(/[^a-z0-9]+/g, "-") ||
        String(idx);

      const gallery = doc.image ? [doc.image] : [];
      const techStack = doc.category_populated?.features
        ? doc.category_populated.features.split(",").map((s: string) => s.trim())
        : [catTitle || "Full-Stack"];

      return {
        slug: cleanSlug,
        category_slug: catSlug,
        category_title: catTitle,
        index: String(idx + 1).padStart(2, "0"),
        title: doc.project_title || "",
        subtitle: doc.vertical_title || "",
        summary: doc.tagline || "",
        tagline: doc.tagline || "",
        project_type: catTitle || "Project",
        industry: "Global",
        image: doc.image || "",
        imgtitle: doc.imgtitle || `${doc.project_title || ""} Showcase`,
        altname: doc.altname || `${doc.project_title || ""}`,
        gallery_images: gallery,
        video_url: doc.video || "",
        client: doc.project_title || "",
        client_approved: true,
        project_date: String(doc.year || "2026"),
        year: String(doc.year || "2026"),
        duration: "Q1 2026",
        sla: "99.9%",
        badge: "FEATURED CASE STUDY",
        tags: techStack,
        brief: doc.tagline || "",
        challenge: doc.tagline || "",
        solution: "Engineered with modern architecture, resilient infrastructure, and high-performance design standards.",
        deliverables: [
          doc.vertical_title || "Enterprise Platform",
          catTitle || "Digital Solution",
          "Production Deployment"
        ],
        results_metric: "100%",
        results_label: "Delivered",
        tech_stack: techStack,
        is_featured: idx < 5,
        published: true,
        order: idx + 1,
      };
    });
  } catch (err) {
    console.warn("Failed to fetch portfolio projects:", err);
    return [];
  }
}

export async function getPortfolioProjectBySlug(slug: string): Promise<PortfolioProject | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/data/portfolio_project`, {
      cache: "no-store",
    });

    if (!res.ok) return null;

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

    if (!doc) return null;

    const catSlug = doc.category_populated?.slug || doc.category_slug || "";
    const catTitle = doc.category_populated?.title || doc.category_label || "";
    const cleanSlug =
      doc.p_link?.replace(/^\/portfolio\//, "") ||
      doc.slug ||
      doc.project_title?.toLowerCase().replace(/[^a-z0-9]+/g, "-") ||
      slug;

    const gallery = doc.image ? [doc.image] : [];
    const techStack = doc.category_populated?.features
      ? doc.category_populated.features.split(",").map((s: string) => s.trim())
      : [catTitle || "Full-Stack"];

    return {
      slug: cleanSlug,
      category_slug: catSlug,
      category_title: catTitle,
      index: "01",
      title: doc.project_title || "",
      subtitle: doc.vertical_title || "",
      summary: doc.tagline || "",
      tagline: doc.tagline || "",
      project_type: catTitle || "Project",
      industry: "Global",
      image: doc.image || "",
      imgtitle: doc.imgtitle || `${doc.project_title || ""} Showcase`,
      altname: doc.altname || `${doc.project_title || ""}`,
      gallery_images: gallery,
      video_url: doc.video || "",
      client: doc.project_title || "",
      client_approved: true,
      project_date: String(doc.year || "2026"),
      year: String(doc.year || "2026"),
      duration: "Q1 2026",
      sla: "99.9%",
      badge: "FEATURED CASE STUDY",
      tags: techStack,
      brief: doc.tagline || "",
      challenge: doc.tagline || "",
      solution: "Engineered with modern architecture, resilient infrastructure, and high-performance design standards.",
      deliverables: [
        doc.vertical_title || "Enterprise Platform",
        catTitle || "Digital Solution",
        "Production Deployment"
      ],
      results_metric: "100%",
      results_label: "Delivered",
      tech_stack: techStack,
      is_featured: true,
      published: true,
      order: 1,
    };
  } catch (err) {
    console.warn("Failed to fetch portfolio project:", err);
    return null;
  }
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
