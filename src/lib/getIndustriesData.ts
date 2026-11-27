import { portfolioData } from "@/data/portfolioData";
import { industriesList } from "@/data/industriesData";

export interface IndustryWork {
  id: string;
  title: string;
  client?: string;
  category?: string;
  year?: string | number;
  image: string;
  highlightMetric?: string;
  desc?: string;
  deliverables?: string[];
  techStack?: string[];
  link?: string;
}

const CUSTOM_PROJECT_META: Record<string, Partial<IndustryWork>> = {
  "meritrack-mobile-suite": {
    client: "MeriTRACK Medical Logistics",
    category: "Healthcare Logistics Suite",
    highlightMetric: "LIVE SURGERY TELEMETRY",
    deliverables: [
      "Real-time surgical implant & kit tracking",
      "Hospital OT scheduling & distributor allocation",
      "Sales representative field telemetry app",
      "Automated FDA/ISO compliance audit logging",
    ],
    techStack: ["React Native", "Node.js", "PostgreSQL", "AWS IoT Core"],
  },
  "ostech-automation": {
    client: "OSTech Machinery Flagship",
    category: "Industrial Automation Platform",
    highlightMetric: "SUB-1S LCP // 4.8X RFQ",
    deliverables: [
      "Dynamic 3D machinery and conveyor visualizer",
      "Interactive conveyor capability matrix",
      "Multi-currency enterprise RFQ funnel",
      "Global distributor partner portal",
    ],
    techStack: ["Next.js", "Three.js", "Tailwind CSS", "Enterprise CMS"],
  },
  "shanti-patra-erp": {
    client: "Shanti Patra Industries",
    category: "Cloud ERP & Operations Suite",
    highlightMetric: "98% QC AUTOMATION",
    deliverables: [
      "Real-time machine telemetry & printing line monitoring",
      "Automated quality control inspection gates",
      "Raw material & finished goods inventory sync",
      "Executive MIS dashboards & reporting suite",
    ],
    techStack: ["React", "Go Microservices", "MongoDB", "TimescaleDB"],
  },
  "vbott-identity": {
    client: "VBŌTT Hydration Co.",
    category: "Luxury Brand Architecture & Packaging",
    highlightMetric: "LUXURY PACKAGING SYSTEM",
    deliverables: [
      "Executive corporate identity & logo architecture",
      "Custom typography & color design tokens",
      "Minimalist stationery & unboxing packaging",
      "Retail point-of-sale display specifications",
    ],
    techStack: ["Figma", "Cinema 4D", "Adobe Creative Suite", "Brand Guidelines"],
  },
  "tps-industrial-film": {
    client: "Total Packaging Services Ltd.",
    category: "Industrial Cinema & Brand Storytelling",
    highlightMetric: "4K CINEMATIC PRODUCTION",
    deliverables: [
      "High-speed 4K industrial production shoot",
      "Drone facility flythrough & line inspection cinematography",
      "Precision color grading & sound master design",
      "Multi-format marketing cuts for web and cinema",
    ],
    techStack: ["RED Cinema 8K", "DJI Inspire", "DaVinci Resolve", "Dolby Atmos"],
  },
};

export interface Industry {
  _id: string;
  title: string;
  slug: string;
  number: string;
  category: string;
  badge: string;
  tagline: string;
  short_info: string;
  description: string;
  featured_project: string;
  image: string;
  hero_metrics: Array<{ label: string; value: string }>;
  order: number;
  status: boolean;
  created_at: string;
  updated_at: string;
  icon_name?: string;
  icon?: string;
  iconName?: string;
  // Additional fields for compatibility with IndustryData
  shortInfo?: string;
  heroMetrics?: Array<{ label: string; value: string }>;
  challenges?: any[];
  serviceCombinations?: any[];
  process?: any[];
  pillars?: any[];
  works?: any[];
  caseStudy?: any;
  faqs?: any[];
}

export interface IndustryHeroData {
  id?: string;
  tagline: string;
  heading: string;
  description: string;
  counter?: Array<{ counter_info?: string;[key: string]: any }>;
}

export const DEFAULT_INDUSTRY_HERO: IndustryHeroData = {
  tagline: "✧ INDUSTRIES WE EMPOWER // SOLUTIONS WITHOUT BOUNDARIES",
  heading: "BUILT FOR EVERY INDUSTRY. ENGINEERED FOR WHAT'S NEXT.",
  description:
    "Every industry has a different challenge. Every business has a different ambition. At RND Technosoft, we bring technology, digital marketing, branding and creative production together to build solutions that help businesses adapt, compete and grow. From emerging startups to established enterprises, we turn industry-specific challenges into opportunities through innovation, strategic thinking and purposeful execution.",
  counter: [
    { counter_info: "2018\nEstablished\nBuilding digital solutions since 2018" },
    { counter_info: "04\nCore Divisions\nTechnology, Marketing, Design & Media" },
    { counter_info: "360°\nDigital Capabilities\nIntegrated services under one roof" },
    { counter_info: "B2B\nBusiness Focus\nSolutions designed around business needs" },
  ],
};

export interface IndustryDetail {
  _id?: string;
  industry_id?: string;
  industry_slug?: string;

  // Section 1: Hero & Pillars
  hero_tagline?: string;
  hero_heading?: string;
  hero_description?: string;
  pillars_heading?: string;
  pillars_description?: string;
  pillars?: Array<{
    title: string;
    desc: string;
    icon?: string;
  }>;

  // Section 2: Challenges
  challenges_tagline?: string;
  challenges_heading?: string;
  challenges_description?: string;
  challenges?: Array<{
    title: string;
    description: string;
    impactMetric?: string;
  }>;

  // Section 3: Solutions / Services
  solutions_tagline?: string;
  solutions_heading?: string;
  solutions_description?: string;
  services?: Array<{
    badge?: string;
    serviceTitle: string;
    serviceHref?: string;
    role?: string;
    deliverablesSummary: string;
  }>;

  // Section 4: Works
  works_tagline?: string;
  works_heading?: string;
  works_description?: string;

  // Section 5: Process
  process_tagline?: string;
  process_heading?: string;
  process_description?: string;
  process_steps?: Array<{
    step: string;
    duration?: string;
    title: string;
    description: string;
    keyOutputs?: string | string[];
  }>;

  // Section 6: Case Study
  case_study_tagline?: string;
  case_study_title?: string;
  case_study_period?: string;
  case_study_challenge?: string;
  case_study_solution?: string;
  case_study_metrics?: Array<{
    label: string;
    value: string;
    change?: string;
  }>;
  case_study_quote_text?: string;
  case_study_quote_author?: string;
  case_study_quote_role?: string;

  // Section 7: CTA
  cta_tagline?: string;
  cta_heading?: string;
  cta_description?: string;

  // Section 8: FAQs
  faq_tagline?: string;
  faq_heading?: string;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;

  created_at?: string;
  updated_at?: string;
}

export interface IndustryItemData {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
  badge: string;
  tagline: string;
  shortInfo: string;
  description: string;
  image: string;
  iconName: string;
  icon_name?: string;
  icon?: string;
  heroMetrics: Array<{ label: string; value: string }>;
  works: Array<{ title: string; image?: string }>;
  featured_project?: string;
}

export function getDefaultIndustryIcon(title?: string, slug?: string): string {
  const key = `${title || ""} ${slug || ""}`.toLowerCase();
  if (key.includes("manufactur") || key.includes("industrial") || key.includes("factory")) return "Factory";
  if (key.includes("health") || key.includes("dental") || key.includes("medtech") || key.includes("clinic") || key.includes("doctor")) return "HeartPulse";
  if (key.includes("food") || key.includes("fmcg") || key.includes("beverage") || key.includes("restaurant") || key.includes("dining")) return "Utensils";
  if (key.includes("retail") || key.includes("e-commerce") || key.includes("ecommerce") || key.includes("shop") || key.includes("store")) return "ShoppingCart";
  if (key.includes("hospitality") || key.includes("resort") || key.includes("hotel") || key.includes("travel") || key.includes("tourism")) return "Hotel";
  if (key.includes("education") || key.includes("training") || key.includes("school") || key.includes("college") || key.includes("academy") || key.includes("learn")) return "GraduationCap";
  if (key.includes("fintech") || key.includes("bank") || key.includes("finance")) return "Landmark";
  if (key.includes("saas") || key.includes("cloud") || key.includes("software")) return "CloudCog";
  if (key.includes("real estate") || key.includes("property") || key.includes("proptech")) return "Building2";
  if (key.includes("automotive") || key.includes("mobility") || key.includes("vehicle") || key.includes("car")) return "Car";
  return "Factory";
}

export const DEFAULT_INDUSTRIES_DATA: IndustryItemData[] = [
  {
    id: "manufacturing",
    slug: "manufacturing",
    number: "01",
    title: "Manufacturing & Industrial",
    category: "Smart Manufacturing & Digital Transformation",
    badge: "VERTICAL 01 // INDUSTRIAL INNOVATION",
    tagline: "FROM TRADITIONAL PRODUCTION FLOORS TO INTELLIGENT INDUSTRIAL ECOSYSTEMS.",
    shortInfo: "We help manufacturing businesses modernize operations through custom software, enterprise applications, digital platforms and strategic brand communication.",
    description: "We help manufacturing businesses modernize operations through custom software, enterprise applications, digital platforms and strategic brand communication. Our solutions support operational visibility, streamlined workflows and stronger digital positioning.",
    image: "/Industries/manufacturing_mockup.png",
    iconName: "Factory",
    heroMetrics: [{ label: "Production Efficiency", value: "Smarter Workflows" }],
    works: [{ title: "Manufacturing Operations Platform" }],
  },
  {
    id: "healthcare",
    slug: "healthcare",
    number: "02",
    title: "Healthcare & Dental",
    category: "Healthcare Technology & Patient Engagement",
    badge: "VERTICAL 02 // HEALTHCARE TECHNOLOGY",
    tagline: "BUILDING BETTER DIGITAL EXPERIENCES FOR MODERN HEALTHCARE.",
    shortInfo: "We help healthcare providers, clinics and dental practices strengthen their digital presence through professional websites, customized applications and targeted marketing.",
    description: "We help healthcare providers, clinics and dental practices strengthen their digital presence through professional websites, customized applications, branding and targeted marketing. Our focus is on accessible digital experiences that improve patient engagement and business visibility.",
    image: "/Industries/healthcare_mockup.png",
    iconName: "HeartPulse",
    heroMetrics: [{ label: "Patient Experience", value: "Simplified Access" }],
    works: [{ title: "Healthcare Platform" }],
  },
  {
    id: "food-fmcg",
    slug: "food-fmcg",
    number: "03",
    title: "Food & FMCG",
    category: "Consumer & Brand Growth",
    badge: "VERTICAL 03 // CONSUMER & BRAND GROWTH",
    tagline: "TURNING EVERYDAY PRODUCTS INTO MEMORABLE BRANDS.",
    shortInfo: "From emerging food brands to established FMCG businesses, we create digital experiences that connect products with consumers.",
    description: "From emerging food brands to established FMCG businesses, we create digital experiences that connect products with consumers. Through e-commerce development, creative branding, product photography and performance marketing, we help brands stand out in competitive markets.",
    image: "/Industries/food_mockup.png",
    iconName: "Utensils",
    heroMetrics: [{ label: "Brand Identity", value: "Stronger Recognition" }],
    works: [{ title: "Food & FMCG Digital Platform" }],
  },
  {
    id: "retail-ecommerce",
    slug: "retail-ecommerce",
    number: "04",
    title: "Retail & E-Commerce",
    category: "Digital Commerce & Omnichannel Retail",
    badge: "VERTICAL 04 // DIGITAL COMMERCE",
    tagline: "CREATING CONNECTED SHOPPING EXPERIENCES THAT CONVERT.",
    shortInfo: "We empower retail businesses with modern e-commerce websites, custom software, digital marketing and compelling brand experiences.",
    description: "We empower retail businesses with modern e-commerce websites, custom software, digital marketing and compelling brand experiences. From online storefronts to customer acquisition campaigns, we build digital ecosystems designed to support sustainable business growth.",
    image: "/Industries/retail_mockup.png",
    iconName: "ShoppingCart",
    heroMetrics: [{ label: "Online Stores", value: "Seamless Experiences" }],
    works: [{ title: "Retail E-Commerce Experience" }],
  },
  {
    id: "hospitality",
    slug: "hospitality",
    number: "05",
    title: "Hospitality & Resorts",
    category: "Hospitality Experiences & Destination Branding",
    badge: "VERTICAL 05 // HOSPITALITY EXPERIENCES",
    tagline: "TURNING EXCEPTIONAL STAYS INTO UNFORGETTABLE DIGITAL EXPERIENCES.",
    shortInfo: "We help hotels, resorts and hospitality brands attract guests through engaging websites, intuitive booking experiences, distinctive branding and professional media.",
    description: "We help hotels, resorts and hospitality brands attract guests through engaging websites, intuitive booking experiences, distinctive branding, professional photography and strategic digital marketing.",
    image: "/Industries/hospitality_mockup.png",
    iconName: "Hotel",
    heroMetrics: [{ label: "Guest Experience", value: "Seamless Interaction" }],
    works: [{ title: "Hospitality Resort Experience" }],
  },
  {
    id: "education",
    slug: "education",
    number: "06",
    title: "Education & Training",
    category: "Education Technology & Digital Learning",
    badge: "VERTICAL 06 // EDUCATION & LEARNING",
    tagline: "BUILDING DIGITAL FOUNDATIONS FOR THE FUTURE OF LEARNING.",
    shortInfo: "We support educational institutions, training providers and learning businesses with websites, learning platforms, custom applications and branding.",
    description: "We support educational institutions, training providers and learning businesses with websites, learning platforms, custom applications, brand identity and digital campaigns that connect educators with learners.",
    image: "/Industries/education_mockup.png",
    iconName: "GraduationCap",
    heroMetrics: [{ label: "Learning Platforms", value: "Digital Accessibility" }],
    works: [{ title: "Digital Learning Platform" }],
  },
  {
    id: "real-estate",
    slug: "real-estate",
    number: "07",
    title: "Real Estate & Construction",
    category: "Property & Infrastructure Marketing",
    badge: "VERTICAL 07 // PROPERTY & INFRASTRUCTURE",
    tagline: "BUILDING STRONGER DIGITAL FOUNDATIONS FOR AMBITIOUS DEVELOPMENTS.",
    shortInfo: "We help real estate companies, property developers and construction businesses showcase projects and attract potential buyers.",
    description: "We help real estate companies, property developers and construction businesses showcase projects, attract potential buyers and strengthen their market presence through property websites, digital campaigns, branding and immersive visual content.",
    image: "/images/industries/work_realestate_1.jpg",
    iconName: "Building2",
    heroMetrics: [{ label: "Property Showcases", value: "Engaging Experiences" }],
    works: [{ title: "Real Estate Property Platform" }],
  },
  {
    id: "startups-professional-services",
    slug: "startups-professional-services",
    number: "08",
    title: "Startups & Professional Services",
    category: "Business Innovation & Venture Scale",
    badge: "VERTICAL 08 // BUSINESS INNOVATION",
    tagline: "FROM BOLD BEGINNINGS TO ESTABLISHED MARKET PRESENCE.",
    shortInfo: "We partner with startups, consultants and professional service providers to transform business ideas into impactful digital experiences.",
    description: "We partner with startups, consultants and professional service providers to transform business ideas into impactful digital experiences. From website and software development to brand identity and customer acquisition, we help businesses build, launch and grow.",
    image: "/images/industries/work_startups_1.jpg",
    iconName: "Rocket",
    heroMetrics: [{ label: "Digital Foundations", value: "Built to Scale" }],
    works: [{ title: "Startup Innovation Platform" }],
  },
  {
    id: "travel-tourism",
    slug: "travel-tourism",
    number: "09",
    title: "Travel & Tourism",
    category: "Travel & Discovery",
    badge: "VERTICAL 09 // TRAVEL & DISCOVERY",
    tagline: "INSPIRING JOURNEYS THROUGH POWERFUL DIGITAL EXPERIENCES.",
    shortInfo: "We help travel companies, tour operators and tourism businesses connect with modern travellers through engaging websites and creative campaigns.",
    description: "We help travel companies, tour operators and tourism businesses connect with modern travellers through engaging websites, booking platforms, creative campaigns, destination photography and digital storytelling.",
    image: "/images/industries/work_travel_1.jpg",
    iconName: "Plane",
    heroMetrics: [{ label: "Travel Platforms", value: "Easy Exploration" }],
    works: [{ title: "Travel Exploration Platform" }],
  },
  {
    id: "finance-fintech",
    slug: "finance-fintech",
    number: "10",
    title: "Finance & FinTech",
    category: "Financial Innovation & Security",
    badge: "VERTICAL 10 // FINANCIAL INNOVATION",
    tagline: "ENGINEERING SMARTER DIGITAL EXPERIENCES FOR FINANCIAL BUSINESSES.",
    shortInfo: "We support financial service providers and fintech businesses with customized software, modern web applications and digital branding.",
    description: "We support financial service providers and fintech businesses with customized software, modern web applications, intuitive user interfaces, digital branding and strategic marketing solutions designed around their business requirements.",
    image: "/images/project_fintech.jpg",
    iconName: "Landmark",
    heroMetrics: [{ label: "Financial Platforms", value: "Digital Accessibility" }],
    works: [{ title: "Financial Platforms & Fintech" }],
  },
];

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3058";

export async function getIndustries(): Promise<Industry[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/data/industries`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return [];
    }

    const json = await res.json();
    const list = Array.isArray(json?.data) ? json.data : [];

    return list
      .filter((item: Industry) => item.status === true)
      .sort((a: Industry, b: Industry) => a.order - b.order);
  } catch (err) {
    console.warn("Error fetching industries:", err);
    return [];
  }
}

export async function getIndustryBySlug(slug: string): Promise<Industry | null> {
  try {
    const industries = await getIndustries();
    return industries.find((industry) => industry.slug === slug) || null;
  } catch (err) {
    console.warn("Error fetching industry by slug:", err);
    return null;
  }
}

export async function getIndustryDetail(identifier: string): Promise<IndustryDetail | null> {
  try {
    // Try by industry_slug first
    let res = await fetch(`${API_BASE_URL}/api/data/industry_details?filter={"industry_slug":"${identifier}"}`, {
      cache: "no-store",
    });

    if (res.ok) {
      const json = await res.json();
      if (Array.isArray(json?.data) && json.data.length > 0) {
        return json.data[0];
      }
    }

    // Try by industry_id
    res = await fetch(`${API_BASE_URL}/api/data/industry_details?filter={"industry_id":"${identifier}"}`, {
      cache: "no-store",
    });

    if (res.ok) {
      const json = await res.json();
      if (Array.isArray(json?.data) && json.data.length > 0) {
        return json.data[0];
      }
    }

    // Fallback: fetch all and match
    res = await fetch(`${API_BASE_URL}/api/data/industry_details`, {
      cache: "no-store",
    });
    if (res.ok) {
      const json = await res.json();
      const list = Array.isArray(json?.data) ? json.data : [];
      const match = list.find(
        (item: any) =>
          item.industry_slug === identifier ||
          item.slug === identifier ||
          item.industry_id === identifier ||
          item.id === identifier ||
          item._id === identifier
      );
      if (match) return match;
    }

    return null;
  } catch (err) {
    console.warn("Error fetching industry detail:", err);
    return null;
  }
}

export async function getIndustriesData(): Promise<IndustryItemData[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/data/industries`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return DEFAULT_INDUSTRIES_DATA;
    }

    const json = await res.json();
    const list = Array.isArray(json?.data) ? json.data : [];
    if (list.length === 0) return DEFAULT_INDUSTRIES_DATA;

    const sorted = [...list]
      .filter((item: Industry) => item.status !== false)
      .sort((a: { order?: number }, b: { order?: number }) => (a.order || 0) - (b.order || 0));

    return sorted.map((doc: Industry, idx: number) => {
      const staticMatch = industriesList.find((item) => item.slug === doc.slug);
      const fallbackWorkTitle = staticMatch?.works?.[0]?.title || "Enterprise Digital Platform";
      const workTitle = doc.featured_project || fallbackWorkTitle;
      const cardImage = doc.image || staticMatch?.works?.[0]?.image || "/Industries/manufacturing_mockup.png";
      const resolvedIcon =
        doc.icon_name ||
        doc.icon ||
        (doc as any).iconName ||
        getDefaultIndustryIcon(doc.title, doc.slug);

      return {
        id: `${doc.slug || doc._id?.toString() || String(idx)}-${idx}`,
        slug: doc.slug || "manufacturing",
        number: doc.number || String(idx + 1).padStart(2, "0"),
        title: doc.title || "",
        category: doc.category || "",
        badge: doc.badge || "",
        tagline: doc.tagline || "",
        shortInfo: doc.short_info || doc.description || "",
        description: doc.description || "",
        image: cardImage,
        iconName: resolvedIcon,
        icon_name: resolvedIcon,
        icon: resolvedIcon,
        heroMetrics: (doc.hero_metrics && doc.hero_metrics.length > 0)
          ? doc.hero_metrics
          : (staticMatch?.heroMetrics || []),
        works: [{ title: workTitle, image: cardImage }],
        featured_project: workTitle,
      };
    });
  } catch (err) {
    console.warn("Falling back to default Industries data:", err);
    return DEFAULT_INDUSTRIES_DATA;
  }
}

export async function getIndustryWorks(
  slug: string,
  industryId?: string
): Promise<IndustryWork[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/data/portfolio_project`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return [];
    }

    const json = await res.json();
    const list = Array.isArray(json?.data) ? json.data : [];

    // Filter projects belonging to this industry
    const matched = list.filter((p: any) => {
      const pIndSlug = p.industry_slug?.toLowerCase();
      const pIndId = String(p.industry || "");
      const pPopulatedId = String(p.industry_populated?._id || p.industry_populated?.id || "");
      const pPopulatedSlug = p.industry_populated?.slug?.toLowerCase();

      return (
        pIndSlug === slug.toLowerCase() ||
        pPopulatedSlug === slug.toLowerCase() ||
        (industryId && (pIndId === industryId || pPopulatedId === industryId))
      );
    });

    if (matched.length === 0) {
      return [];
    }

    return matched.map((p: any, idx: number) => {
      const cleanSlug =
        p.p_link?.replace(/^\/portfolio\//, "") ||
        p.slug ||
        p.project_title?.toLowerCase().replace(/[^a-z0-9]+/g, "-") ||
        `project-${idx + 1}`;

      // 1. Try finding rich match in portfolioData
      const pDataMatch = portfolioData.find(
        (item) =>
          item.id === cleanSlug ||
          item.title?.toLowerCase().trim() === p.project_title?.toLowerCase().trim()
      );

      // 2. Try custom meta for flagship projects
      const customMeta = CUSTOM_PROJECT_META[cleanSlug] || {};

      const client =
        customMeta.client ||
        pDataMatch?.client ||
        p.vertical_title ||
        p.project_title ||
        `PROJECT 0${idx + 1}`;

      const category =
        customMeta.category ||
        pDataMatch?.projectType ||
        pDataMatch?.category ||
        p.category_populated?.title ||
        p.category_label ||
        "Enterprise Solution";

      const year = String(p.year || pDataMatch?.year || "2026");

      const image =
        p.image ||
        pDataMatch?.image ||
        "/images/service_cloud_color.jpg";

      const highlightMetric =
        customMeta.highlightMetric ||
        p.vertical_title ||
        pDataMatch?.badge ||
        `ILLUSTRATIVE SOLUTION 0${idx + 1}`;

      const desc =
        p.tagline ||
        pDataMatch?.summary ||
        pDataMatch?.brief ||
        "";

      const deliverables =
        customMeta.deliverables && customMeta.deliverables.length > 0
          ? customMeta.deliverables
          : pDataMatch?.deliverables && pDataMatch.deliverables.length > 0
            ? pDataMatch.deliverables
            : [
              "Production and order management",
              "Inventory and material tracking",
              "Procurement workflows",
              "Business performance dashboards",
            ];

      const techStack =
        customMeta.techStack && customMeta.techStack.length > 0
          ? customMeta.techStack
          : pDataMatch?.techStack && pDataMatch.techStack.length > 0
            ? pDataMatch.techStack
            : ["Web Applications", "Database Integration", "Business Analytics"];

      return {
        id: cleanSlug,
        title: p.project_title,
        client,
        category,
        year,
        image,
        highlightMetric,
        desc,
        deliverables,
        techStack,
        link: p.p_link || `/portfolio/${cleanSlug}`,
      };
    });
  } catch (err) {
    console.warn(`Error fetching works for industry ${slug}:`, err);
    return [];
  }
}

export async function getIndustryHero(): Promise<IndustryHeroData> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/data/industry_hero`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return DEFAULT_INDUSTRY_HERO;
    }

    const json = await res.json();
    const list = Array.isArray(json?.data) ? json.data : [];
    if (list.length === 0) return DEFAULT_INDUSTRY_HERO;

    const doc = list[0];
    return {
      id: doc.id || doc._id?.toString(),
      tagline: doc.tagline || DEFAULT_INDUSTRY_HERO.tagline,
      heading: doc.heading || DEFAULT_INDUSTRY_HERO.heading,
      description: doc.description || DEFAULT_INDUSTRY_HERO.description,
      counter:
        Array.isArray(doc.counter) && doc.counter.length > 0
          ? doc.counter
          : DEFAULT_INDUSTRY_HERO.counter,
    };
  } catch (err) {
    console.warn("Error fetching industry hero data:", err);
    return DEFAULT_INDUSTRY_HERO;
  }
}

export interface IndustryConsultationData {
  id?: string;
  tagline: string;
  heading: string;
  description: string;
  benefits_title: string;
  benefits: Array<string | { title?: string; text?: string; point?: string }>;
  form_title?: string;
  form_description?: string;
}

export const DEFAULT_INDUSTRY_CONSULTATION: IndustryConsultationData = {
  tagline: "✧ LET'S BUILD SOMETHING MEANINGFUL",
  heading: "YOUR INDUSTRY.\nOUR EXPERTISE.\nONE SHARED VISION.",
  description:
    "Every business has a different challenge and a bigger ambition. Tell us where you want to go, and our team will help you identify the right digital, creative and technology solutions to get there.",
  benefits_title: "WHY CONNECT WITH RND?",
  benefits: [
    { title: "Solutions tailored to your business goals" },
    { title: "Integrated technology and creative expertise" },
    { title: "A collaborative approach from concept to execution" },
  ],
  form_title: "Initiate Your Project Brief",
  form_description:
    "Share a few details about your business and requirements. Our team will connect with you to discuss the next steps.",
};

export async function getIndustryConsultation(): Promise<IndustryConsultationData> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/data/industry_consultation`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return DEFAULT_INDUSTRY_CONSULTATION;
    }

    const json = await res.json();
    const list = Array.isArray(json?.data) ? json.data : [];
    if (list.length === 0) return DEFAULT_INDUSTRY_CONSULTATION;

    const doc = list[0];
    return {
      id: doc.id || doc._id?.toString(),
      tagline: doc.tagline || DEFAULT_INDUSTRY_CONSULTATION.tagline,
      heading: doc.heading || DEFAULT_INDUSTRY_CONSULTATION.heading,
      description: doc.description || DEFAULT_INDUSTRY_CONSULTATION.description,
      benefits_title: doc.benefits_title || DEFAULT_INDUSTRY_CONSULTATION.benefits_title,
      benefits:
        Array.isArray(doc.benefits) && doc.benefits.length > 0
          ? doc.benefits
          : DEFAULT_INDUSTRY_CONSULTATION.benefits,
      form_title: doc.form_title || DEFAULT_INDUSTRY_CONSULTATION.form_title,
      form_description: doc.form_description || DEFAULT_INDUSTRY_CONSULTATION.form_description,
    };
  } catch (err) {
    console.warn("Error fetching industry consultation data:", err);
    return DEFAULT_INDUSTRY_CONSULTATION;
  }
}
