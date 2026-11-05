import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getServiceById, ServiceDetail } from "@/data/servicesData";
import ServiceDetailsView from "@/components/ServiceDetailsView";

// Force static generation for all known routes
export const dynamic = 'force-static';
export const dynamicParams = true;

interface SubcategoryConfig {
  baseId: string;
  title: string;
  highlightText: string;
  tagline: string;
  sla: string;
  category: string;
  image?: string;
  badge?: string;
}

const SUBCATEGORY_CONFIGS: Record<string, SubcategoryConfig> = {
  // Technology Solutions
  "web-development": {
    baseId: "web-cloud",
    title: "Custom Web Development",
    highlightText: "Engineered for Performance",
    tagline:
      "Strategy-led design. Engineered for performance. Custom web development built for scale.",
    sla: "STRATEGY-LED DESIGN",
    category: "Technology Solutions",
    image: "/images/service_webdev.jpg",
    badge: "CUSTOM WEB DEVELOPMENT",
  },
  "cloud-infrastructure-devops": {
    baseId: "web-cloud",
    title: "Cloud Infrastructure & DevOps",
    highlightText: "& Multi-Region Resilience",
    tagline:
      "Kubernetes orchestration, automated CI/CD pipelines, multi-region redundancy, and bank-grade AWS/GCP cloud resilience.",
    sla: "<15m INCIDENT RESPONSE",
    category: "Technology Solutions",
    image: "/images/service_cloud_color.jpg",
    badge: "KUBERNETES // ZERO DOWNTIME",
  },
  "enterprise-software-solutions": {
    baseId: "enterprise-software",
    title: "Custom Software Development",
    highlightText: "& Business Automation Solutions",
    tagline:
      "From business process analysis to software development and deployment, we cover every essential layer of custom software engineering. Each solution is developed around your operational requirements, application functionality and long-term business objectives.",
    sla: "STRATEGY-LED DESIGN",
    category: "Technology Solutions",
    image: "/images/nebula_cloud_os_3d.jpg",
    badge: "CUSTOM SOFTWARE // ERP // CRM // BUSINESS AUTOMATION",
  },
  "ecommerce-platform-engineering": {
    baseId: "ecommerce-platforms",
    title: "E-Commerce Website Development",
    highlightText: "Built to Sell. Designed to Grow",
    tagline:
      "Customised e-commerce websites and online stores designed around your products, customers and business goals. We combine intuitive storefront design, powerful functionality and modern technologies.",
    sla: "E-COMMERCE // ONLINE STORES // DIGITAL COMMERCE",
    category: "Technology Solutions",
    image: "/images/service_ecommerce.jpg",
    badge: "E-COMMERCE // ONLINE STORES // DIGITAL COMMERCE",
  },
  "mobile-applications": {
    baseId: "mobile-apps",
    title: "Mobile App Development",
    highlightText: "Built to Connect. Designed to Perform",
    tagline:
      "Custom mobile applications that combine engaging user experiences, practical functionality and modern technologies to help businesses connect with customers.",
    sla: "ANDROID // iOS // CROSS-PLATFORM",
    category: "Technology Solutions",
    image: "/images/service_mobile.jpg",
    badge: "ANDROID // iOS // CROSS-PLATFORM DEVELOPMENT",
  },
  "microservices-api-mesh": {
    baseId: "web-cloud",
    title: "Distributed Microservices & APIs",
    highlightText: "& Event-Driven Mesh",
    tagline:
      "Decoupled distributed services communicating via high-throughput gRPC and Kafka event streams.",
    sla: "10K+ QPS PER NODE",
    category: "Technology Solutions",
    image: "/images/project_ai.jpg",
  },

  // Digital Marketing
  "technical-seo-dominance": {
    baseId: "seo-search",
    title: "Search Engine Optimization",
    highlightText: "Get Found. Get Chosen. Grow Organically",
    tagline:
      "Your customers are searching for products, services and solutions online. Is your business appearing where it matters? A strong search engine presence helps your brand reach the right audience, build credibility and attract relevant organic traffic.",
    sla: "ORGANIC GROWTH // TECHNICAL SEO // SEARCH VISIBILITY",
    category: "Digital Marketing",
    image: "/images/service_marketing.jpg",
    badge: "ORGANIC GROWTH // TECHNICAL SEO // SEARCH VISIBILITY",
  },
  "performance-ppc-advertising": {
    baseId: "ppc-advertising",
    title: "Performance PPC & Paid Advertising",
    highlightText: "Built for Growth",
    tagline:
      "Every advertising investment should have a clear objective. We create data-driven paid advertising campaigns designed to reach the right audience, attract qualified prospects and turn clicks into meaningful business opportunities.",
    sla: "PAID MEDIA // PERFORMANCE MARKETING",
    category: "Digital Marketing",
    image: "/images/service_marketing.jpg",
    badge: "PAID MEDIA // PERFORMANCE MARKETING",
  },
  "social-media-management": {
    baseId: "social-media",
    title: "Social Media Marketing",
    highlightText: "Strategy & Brand Growth",
    tagline:
      "Building a strong social media presence takes more than posting regularly. It requires a clear strategy, engaging creatives, consistent communication and content that connects your brand with the right audience.",
    sla: "SOCIAL-FIRST // BRAND & COMMUNITY GROWTH",
    category: "Digital Marketing",
    image: "/images/service_social.jpg",
    badge: "SOCIAL-FIRST // BRAND & COMMUNITY GROWTH",
  },
  "content-strategy-production": {
    baseId: "content-strategy",
    title: "Content Marketing & Strategic Storytelling",
    highlightText: "That Builds Brand Authority",
    tagline:
      "Great content does more than fill a website or social media feed. It communicates your expertise, answers customer questions and builds meaningful connections between your brand and its audience.",
    sla: "CONTENT STRATEGY // BRAND STORYTELLING",
    category: "Digital Marketing",
    image: "/images/service_marketing.jpg",
    badge: "CONTENT STRATEGY // BRAND STORYTELLING",
  },

  // Branding & Design
  "brand-identity-systems": {
    baseId: "brand-identity",
    title: "Brand Identity & Design Systems",
    highlightText: "Create a Lasting Impression",
    tagline:
      "Build a memorable brand with strategic positioning, visual identity development, and comprehensive brand guidelines.",
    sla: "BRAND STRATEGY // IDENTITY DEVELOPMENT",
    category: "Branding & Design",
    image: "/images/service_branding.jpg",
    badge: "BRAND STRATEGY // IDENTITY DEVELOPMENT",
  },
  "ui-ux-spatial-design": {
    baseId: "logo-design",
    title: "Logo Design & Brand Identity",
    highlightText: "Visual Identity Development",
    tagline:
      "Create a distinctive logo and cohesive visual identity that represents your brand values and communicates your business message.",
    sla: "VISUAL IDENTITY // BRAND RECOGNITION",
    category: "Branding & Design",
    image: "/images/service_branding.jpg",
    badge: "VISUAL IDENTITY // BRAND RECOGNITION",
  },
  "graphic-design": {
    baseId: "graphic-design",
    title: "Graphic Design & Creative Communication",
    highlightText: "Creative Visual Communication",
    tagline:
      "Professional graphic design services for social media, marketing materials, advertising campaigns, and print communications.",
    sla: "CREATIVE VISUALS // GRAPHIC DESIGN",
    category: "Branding & Design",
    image: "/images/service_branding.jpg",
    badge: "CREATIVE VISUALS // GRAPHIC DESIGN",
  },
  "marketing-collateral": {
    baseId: "marketing-collateral",
    title: "Marketing Collateral Design",
    highlightText: "Brand Communication Materials",
    tagline:
      "Design professional marketing materials including brochures, catalogues, presentations, and business stationery.",
    sla: "BRAND COMMUNICATION // MARKETING COLLATERAL",
    category: "Branding & Design",
    image: "/images/service_branding.jpg",
    badge: "BRAND COMMUNICATION // MARKETING COLLATERAL",
  },

  // Media Production
  "commercial-video-production": {
    baseId: "commercial-media",
    title: "Commercial Video & Brand Films",
    highlightText: "& 8K Cinema Production",
    tagline:
      "End-to-end commercial productions: scriptwriting, 4K/8K cinematography, sound engineering, and multi-platform promotional edits.",
    sla: "CINEMA-GRADE 4K/8K",
    category: "Media Production",
    image: "/images/service_media.jpg",
    badge: "RED 8K // CINEMA PRODUCTION",
  },
  "motion-graphics-3d-cgi": {
    baseId: "commercial-media",
    title: "3D CGI & Motion Graphics",
    highlightText: "& Spatial Visual Effects",
    tagline:
      "Photorealistic 3D product animations, kinetic typography, dynamic HUD holograms, and spatial VFX for web and commercials.",
    sla: "PHOTOREALISTIC",
    category: "Media Production",
    image: "/images/service_media.jpg",
    badge: "BLENDER 3D // UNREAL ENGINE",
  },
};

const CATEGORY_META: Record<
  string,
  { parentPath: string; parentLabel: string; categoryName: string }
> = {
  "technology-solution": {
    parentPath: "/technology-solution",
    parentLabel: "Technology Solutions",
    categoryName: "Technology Solutions",
  },
  "technology-solutions": {
    parentPath: "/technology-solution",
    parentLabel: "Technology Solutions",
    categoryName: "Technology Solutions",
  },
  "digital-marketing": {
    parentPath: "/digital-marketing",
    parentLabel: "Digital Marketing",
    categoryName: "Digital Marketing",
  },
  "branding-design": {
    parentPath: "/branding-design",
    parentLabel: "Branding & Design",
    categoryName: "Branding & Design",
  },
  "media-production": {
    parentPath: "/media-production",
    parentLabel: "Media Production",
    categoryName: "Media Production",
  },
};

function resolveService(
  category: string,
  subcategory: string
): { service: ServiceDetail; parentPath: string; parentLabel: string } | null {
  const catMeta = CATEGORY_META[category];
  if (!catMeta) return null;

  // Check if subcategory has a dedicated config
  const customConfig = SUBCATEGORY_CONFIGS[subcategory];
  if (customConfig) {
    const baseService = getServiceById(customConfig.baseId);
    if (!baseService) return null;

    const mergedService: ServiceDetail = {
      ...baseService,
      id: subcategory,
      title: customConfig.title,
      highlightText: customConfig.highlightText,
      tagline: customConfig.tagline,
      sla: customConfig.sla,
      category: customConfig.category || catMeta.categoryName,
      image: customConfig.image || baseService.image,
      badge: customConfig.badge || baseService.badge,
    };

    return {
      service: mergedService,
      parentPath: catMeta.parentPath,
      parentLabel: catMeta.parentLabel,
    };
  }

  // Check if subcategory is a direct service ID
  const directService = getServiceById(subcategory);
  if (directService) {
    return {
      service: {
        ...directService,
        category: catMeta.categoryName,
      },
      parentPath: catMeta.parentPath,
      parentLabel: catMeta.parentLabel,
    };
  }

  return null;
}

export function generateStaticParams() {
  const routes: { category: string; subcategory: string }[] = [];

  const categories = [
    "technology-solution",
    "technology-solutions",
    "digital-marketing",
    "branding-design",
    "media-production",
  ];

  const subcategoriesByCategory: Record<string, string[]> = {
    "technology-solution": [
      "web-development",
      "cloud-infrastructure-devops",
      "enterprise-software-solutions",
      "ecommerce-platform-engineering",
      "web-cloud",
      "ecommerce-platforms",
      "mobile-apps",
      "mobile-applications",
      "microservices-api-mesh",
    ],
    "technology-solutions": [
      "web-development",
      "cloud-infrastructure-devops",
      "enterprise-software-solutions",
      "ecommerce-platform-engineering",
      "web-cloud",
      "ecommerce-platforms",
      "mobile-apps",
      "mobile-applications",
      "microservices-api-mesh",
    ],
    "digital-marketing": [
      "technical-seo-dominance",
      "performance-ppc-advertising",
      "social-media-management",
      "content-strategy-production",
      "seo-search",
      "ppc-advertising",
      "social-media",
      "content-strategy",
    ],
    "branding-design": [
      "brand-identity-systems",
      "ui-ux-spatial-design",
      "brand-identity",
      "commercial-media",
    ],
    "media-production": [
      "commercial-video-production",
      "motion-graphics-3d-cgi",
      "commercial-media",
      "dedicated-squads",
    ],
  };

  categories.forEach((cat) => {
    const subs = subcategoriesByCategory[cat] || [];
    subs.forEach((sub) => {
      routes.push({ category: cat, subcategory: sub });
    });
  });

  return routes;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; subcategory: string }>;
}): Promise<Metadata> {
  const { category, subcategory } = await params;
  const resolved = resolveService(category, subcategory);

  if (!resolved) {
    return {
      title: "Service Not Found | RnD Technosoft",
    };
  }

  return {
    title: `${resolved.service.title} ${resolved.service.highlightText} | ${resolved.parentLabel}`,
    description: resolved.service.tagline,
  };
}

export default async function CategorySubcategoryServicePage({
  params,
}: {
  params: Promise<{ category: string; subcategory: string }>;
}) {
  const { category, subcategory } = await params;
  const resolved = resolveService(category, subcategory);

  if (!resolved) {
    notFound();
  }

  return (
    <ServiceDetailsView
      service={resolved.service}
      parentPath={resolved.parentPath}
      parentLabel={resolved.parentLabel}
    />
  );
}

