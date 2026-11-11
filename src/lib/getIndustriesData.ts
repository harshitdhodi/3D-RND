export interface IndustryItemData {
  id: string;
  slug: string;
  number: string;
  title: string;
  metric: string;
  badge: string;
  description: string;
  iconName: string;
}

export const DEFAULT_INDUSTRIES_DATA: IndustryItemData[] = [
  {
    id: "fintech",
    slug: "startups-professional-services",
    number: "01",
    title: "FinTech & Banking",
    metric: "$2.4B+ Daily",
    badge: "PCI-DSS LEVEL 1",
    description:
      "Building secure, scalable financial platforms with sub-millisecond algorithmic execution, automated KYC/AML compliance, and biometrically secured multi-sig vaults.",
    iconName: "Landmark",
  },
  {
    id: "healthcare",
    slug: "healthcare",
    number: "02",
    title: "Healthcare & MedTech",
    metric: "100% HIPAA Safe",
    badge: "FHIR / HL7 READY",
    description:
      "Creating HIPAA-compliant diagnostic workstations synchronizing live biometric telemetry, 3D anatomical digital twins, and clinical AI neural-network anomaly detection.",
    iconName: "HeartPulse",
  },
  {
    id: "saas",
    slug: "enterprise-cloud-saas",
    number: "03",
    title: "Enterprise Cloud SaaS",
    metric: "99.999% SLA Uptime",
    badge: "SOC2 TYPE II",
    description:
      "Autonomous multi-region control planes orchestrating distributed Kubernetes microservices, automated metered billing, and zero-failover database clusters.",
    iconName: "CloudCog",
  },
  {
    id: "ecommerce",
    slug: "retail-ecommerce",
    number: "04",
    title: "Retail & E-Commerce",
    metric: "+340% ROAS Lift",
    badge: "HEADLESS WEBGL",
    description:
      "Photorealistic 3D spatial web product visualizers featuring cinema-grade GLSL lighting shaders, procedural configurators, and sub-50ms headless checkout.",
    iconName: "ShoppingBag",
  },
  {
    id: "mobility",
    slug: "manufacturing",
    number: "05",
    title: "Smart Mobility & Aero",
    metric: "60 FPS Digital Twin",
    badge: "LIDAR TELEMETRY",
    description:
      "Connected vehicle command platforms, spatial fleet visualization, and real-time edge telemetry ingestion running high-frequency machine-vision models on CAN-bus data.",
    iconName: "Car",
  },
  {
    id: "manufacturing",
    slug: "manufacturing",
    number: "06",
    title: "Manufacturing & Industrial",
    metric: "38% Downtime Drop",
    badge: "ISO 9001 AUDITED",
    description:
      "End-to-end smart manufacturing ERP uniting IoT shop-floor sensors, automated maintenance dispatch, and real-time supply-chain transparency across departments.",
    iconName: "Factory",
  },
  {
    id: "education",
    slug: "education",
    number: "07",
    title: "Education & EdTech",
    metric: "4.2x Dwell Time",
    badge: "SCORM / LTI READY",
    description:
      "Transforming learning experiences with interactive WebGL spatial environments, personalized AI tutoring engines, and automated assessment scoring systems.",
    iconName: "GraduationCap",
  },
  {
    id: "realestate",
    slug: "real-estate",
    number: "08",
    title: "Real Estate & PropTech",
    metric: "72% Faster Lease",
    badge: "BIM / CAD READY",
    description:
      "Revolutionizing property sales and portfolio management with photorealistic virtual walkthroughs, architectural BIM viewers, and automated smart-contract escrow.",
    iconName: "Building2",
  },
];

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3014";

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

    const sorted = [...list].sort(
      (a: { order?: number }, b: { order?: number }) => (a.order || 0) - (b.order || 0)
    );

    return sorted.map((doc: Record<string, any>, idx: number) => ({
      id: `${doc.slug || doc._id?.toString() || String(idx)}-${idx}`,
      slug: doc.slug || "manufacturing",
      number: doc.index_num || doc.number || String(idx + 1).padStart(2, "0"),
      title: doc.title || "",
      metric: doc.metric || "",
      badge: doc.badge || "",
      description: doc.description || "",
      iconName: doc.icon || doc.icon_name || doc.iconName || "Factory",
    }));
  } catch (err) {
    console.warn("Falling back to default Industries data:", err);
    return DEFAULT_INDUSTRIES_DATA;
  }
}
