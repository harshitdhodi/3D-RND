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
  heroMetrics: Array<{ label: string; value: string }>;
  works: Array<{ title: string; image?: string }>;
  featured_project?: string;
}

export const DEFAULT_INDUSTRIES_DATA: IndustryItemData[] = [
  {
    id: "fintech",
    slug: "startups-professional-services",
    number: "01",
    title: "FinTech & Banking",
    category: "Financial Services",
    badge: "PCI-DSS LEVEL 1",
    tagline: "SECURE FINANCIAL PLATFORMS",
    shortInfo: "Building secure, scalable financial platforms with sub-millisecond algorithmic execution.",
    description: "Building secure, scalable financial platforms with sub-millisecond algorithmic execution, automated KYC/AML compliance, and biometrically secured multi-sig vaults.",
    image: "",
    iconName: "Landmark",
    heroMetrics: [{ label: "Daily Volume", value: "$2.4B+" }],
    works: [{ title: "Financial Trading Platform" }],
  },
  {
    id: "healthcare",
    slug: "healthcare",
    number: "02",
    title: "Healthcare & MedTech",
    category: "Healthcare",
    badge: "FHIR / HL7 READY",
    tagline: "HIPAA-COMPLIANT SOLUTIONS",
    shortInfo: "Creating HIPAA-compliant diagnostic workstations with live biometric telemetry.",
    description: "Creating HIPAA-compliant diagnostic workstations synchronizing live biometric telemetry, 3D anatomical digital twins, and clinical AI neural-network anomaly detection.",
    image: "",
    iconName: "HeartPulse",
    heroMetrics: [{ label: "Compliance", value: "100% HIPAA Safe" }],
    works: [{ title: "Medical Diagnostic Platform" }],
  },
  {
    id: "saas",
    slug: "enterprise-cloud-saas",
    number: "03",
    title: "Enterprise Cloud SaaS",
    category: "Cloud & SaaS",
    badge: "SOC2 TYPE II",
    tagline: "ENTERPRISE CLOUD SOLUTIONS",
    shortInfo: "Autonomous multi-region control planes for distributed Kubernetes microservices.",
    description: "Autonomous multi-region control planes orchestrating distributed Kubernetes microservices, automated metered billing, and zero-failover database clusters.",
    image: "",
    iconName: "CloudCog",
    heroMetrics: [{ label: "Uptime", value: "99.999% SLA" }],
    works: [{ title: "Enterprise SaaS Platform" }],
  },
  {
    id: "ecommerce",
    slug: "retail-ecommerce",
    number: "04",
    title: "Retail & E-Commerce",
    category: "Retail",
    badge: "HEADLESS WEBGL",
    tagline: "3D E-COMMERCE EXPERIENCES",
    shortInfo: "Photorealistic 3D spatial web product visualizers with cinema-grade GLSL lighting.",
    description: "Photorealistic 3D spatial web product visualizers featuring cinema-grade GLSL lighting shaders, procedural configurators, and sub-50ms headless checkout.",
    image: "",
    iconName: "ShoppingBag",
    heroMetrics: [{ label: "ROAS Lift", value: "+340%" }],
    works: [{ title: "3D Product Configurator" }],
  },
  {
    id: "mobility",
    slug: "manufacturing",
    number: "05",
    title: "Smart Mobility & Aero",
    category: "Mobility",
    badge: "LIDAR TELEMETRY",
    tagline: "CONNECTED VEHICLE PLATFORMS",
    shortInfo: "Connected vehicle command platforms with spatial fleet visualization.",
    description: "Connected vehicle command platforms, spatial fleet visualization, and real-time edge telemetry ingestion running high-frequency machine-vision models on CAN-bus data.",
    image: "",
    iconName: "Car",
    heroMetrics: [{ label: "Digital Twin", value: "60 FPS" }],
    works: [{ title: "Fleet Management System" }],
  },
  {
    id: "manufacturing",
    slug: "manufacturing",
    number: "06",
    title: "Manufacturing & Industrial",
    category: "Manufacturing",
    badge: "ISO 9001 AUDITED",
    tagline: "SMART MANUFACTURING ERP",
    shortInfo: "End-to-end smart manufacturing ERP uniting IoT shop-floor sensors.",
    description: "End-to-end smart manufacturing ERP uniting IoT shop-floor sensors, automated maintenance dispatch, and real-time supply-chain transparency across departments.",
    image: "",
    iconName: "Factory",
    heroMetrics: [{ label: "Downtime Drop", value: "38%" }],
    works: [{ title: "Manufacturing ERP" }],
  },
  {
    id: "education",
    slug: "education",
    number: "07",
    title: "Education & EdTech",
    category: "Education",
    badge: "SCORM / LTI READY",
    tagline: "INTERACTIVE LEARNING PLATFORMS",
    shortInfo: "Transforming learning experiences with interactive WebGL spatial environments.",
    description: "Transforming learning experiences with interactive WebGL spatial environments, personalized AI tutoring engines, and automated assessment scoring systems.",
    image: "",
    iconName: "GraduationCap",
    heroMetrics: [{ label: "Dwell Time", value: "4.2x" }],
    works: [{ title: "EdTech Learning Platform" }],
  },
  {
    id: "realestate",
    slug: "real-estate",
    number: "08",
    title: "Real Estate & PropTech",
    category: "Real Estate",
    badge: "BIM / CAD READY",
    tagline: "VIRTUAL PROPERTY EXPERIENCES",
    shortInfo: "Revolutionizing property sales with photorealistic virtual walkthroughs.",
    description: "Revolutionizing property sales and portfolio management with photorealistic virtual walkthroughs, architectural BIM viewers, and automated smart-contract escrow.",
    image: "",
    iconName: "Building2",
    heroMetrics: [{ label: "Lease Speed", value: "72% Faster" }],
    works: [{ title: "Property Management Platform" }],
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
        iconName: "Building2",
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
