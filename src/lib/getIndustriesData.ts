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

export interface IndustryDetail {
  _id: string;
  industry_id: string;
  hero_heading: string;
  hero_description: string;
  benefits_heading?: string;
  benefits?: string[];
  challenges_heading?: string;
  challenges?: string[];
  services_heading?: string;
  services?: Array<{
    title: string;
    description: string;
    capabilities: string;
  }>;
  solutions_heading?: string;
  solutions?: Array<{
    title: string;
    description: string;
    features: string[];
  }>;
  process_heading?: string;
  process_steps?: Array<{
    title: string;
    description: string;
    items: string[];
  }>;
  faq_heading?: string;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  cta_heading?: string;
  cta_text?: string;
  created_at: string;
  updated_at: string;
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
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3014";

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

export async function getIndustryDetail(industryId: string): Promise<IndustryDetail | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/data/industry_details?filter={"industry_id":"${industryId}"}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return null;
    }

    const json = await res.json();
    const list = Array.isArray(json?.data) ? json.data : [];
    
    return list.length > 0 ? list[0] : null;
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
      .filter((item: Industry) => item.status === true)
      .sort((a: { order?: number }, b: { order?: number }) => (a.order || 0) - (b.order || 0));

    return sorted.map((doc: Industry, idx: number) => ({
      id: `${doc.slug || doc._id?.toString() || String(idx)}-${idx}`,
      slug: doc.slug || "manufacturing",
      number: doc.number || String(idx + 1).padStart(2, "0"),
      title: doc.title || "",
      category: doc.category || "",
      badge: doc.badge || "",
      tagline: doc.tagline || "",
      shortInfo: doc.short_info || doc.description || "",
      description: doc.description || "",
      image: doc.image || "",
      iconName: "Building2",
      heroMetrics: doc.hero_metrics || [],
      works: [{ title: doc.featured_project || "", image: doc.image || "" }],
      featured_project: doc.featured_project,
    }));
  } catch (err) {
    console.warn("Falling back to default Industries data:", err);
    return DEFAULT_INDUSTRIES_DATA;
  }
}
