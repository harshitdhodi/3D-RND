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
  metaTitle?: string;
  metaDescription?: string;
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
    metaTitle: "Custom Website Development Services | RND Technosoft",
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
    metaTitle: "Custom Software Development Services | RND Technosoft",
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
    metaTitle: "E-commerce Website Development Services | RND Technosoft",
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
    metaTitle: "Mobile App Development Services | RND Technosoft",
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
    metaTitle: "SEO Services | Search Engine Optimization | RND Technosoft",
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
    metaTitle: "PPC & Paid Advertising Services | RND Technosoft",
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
    metaTitle: "Social Media Marketing Services | RND Technosoft",
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
    metaTitle: "Content Marketing Services | RND Technosoft",
  },

  // Branding & Design
  "brand-identity-systems": {
    baseId: "brand-identity",
    title: "BUILD A DISTINCTIVE BRAND",
    highlightText: "CREATE A LASTING IMPRESSION",
    tagline:
      "A strong brand is more than a logo or visual identity. It is the way your business communicates, connects with its audience and stands apart in a competitive marketplace.",
    sla: "BRAND STRATEGY // IDENTITY DEVELOPMENT",
    category: "Branding & Design",
    image: "/images/service_branding.jpg",
    badge: "BRAND STRATEGY // IDENTITY DEVELOPMENT",
    metaTitle: "Brand Strategy & Development Services | RND Technosoft",
    metaDescription:
      "Build a memorable brand with RND Technosoft. Explore brand strategy, brand positioning, logo design, visual identity development and brand guidelines.",
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
    metaTitle: "Logo & Brand Identity Design Services | RND Technosoft",
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
    metaTitle: "Graphic Design Services | RND Technosoft",
  },
  "marketing-collateral": {
    baseId: "marketing-collateral",
    title: "MARKETING COLLATERAL DESIGN & BRAND COMMUNICATION",
    highlightText: "",
    tagline:
      "Every business has a story to tell. The right marketing materials help you communicate it with clarity, professionalism and visual impact.",
    sla: "BRAND COMMUNICATION // MARKETING COLLATERAL",
    category: "Branding & Design",
    image: "/images/service_branding.jpg",
    badge: "BRAND COMMUNICATION // MARKETING COLLATERAL",
    metaTitle: "Marketing Collateral Design Services | RND Technosoft",
    metaDescription:
      "Get professional marketing collateral design from RND Technosoft, including company profiles, brochures, product catalogues, flyers, presentations and business stationery.",
  },

  // Media Production
  "commercial-video-production": {
    baseId: "professional-videography",
    title: "PROFESSIONAL VIDEOGRAPHY & CREATIVE VIDEO PRODUCTION",
    highlightText: "",
    tagline:
      "Every brand has a story worth showing. Professional videography transforms your ideas, products and experiences into compelling visual stories that capture attention and leave a lasting impression.",
    sla: "VISUAL STORYTELLING // VIDEO PRODUCTION",
    category: "Media Production",
    image: "/images/service_media.jpg",
    badge: "VISUAL STORYTELLING // VIDEO PRODUCTION",
    metaTitle: "Professional Videography & Video Production Services | RND Technosoft",
    metaDescription:
      "RND Technosoft offers professional videography services, including corporate films, product videos, promotional videos, event coverage and social media video production.",
  },
  "commercial-photography": {
    baseId: "professional-photography",
    title: "PROFESSIONAL PHOTOGRAPHY & VISUAL BRAND STORYTELLING",
    highlightText: "",
    tagline:
      "Great photography gives your brand a powerful visual identity. From showcasing products and capturing business environments to documenting people and experiences, professional photography helps communicate your brand's story through impactful imagery.",
    sla: "VISUAL STORYTELLING // PROFESSIONAL PHOTOGRAPHY",
    category: "Media Production",
    image: "/images/showreel_thumb.jpg",
    badge: "VISUAL STORYTELLING // PROFESSIONAL PHOTOGRAPHY",
    metaTitle: "Professional Photography Services & Commercial Photography | RND Technosoft",
    metaDescription:
      "Explore professional photography services by RND Technosoft, including product photography, corporate portraits, lifestyle photography, brand shoots and event coverage.",
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
    metaTitle: "Video Editing & Post-Production Services | RND Technosoft",
  },
  "video-editing": {
    baseId: "commercial-media",
    title: "Video Editing & Post-Production",
    highlightText: "& Color Grading",
    tagline:
      "Professional video editing, color grading, sound design, and finishing touches that turn raw footage into cinematic stories.",
    sla: "POST-PRODUCTION MASTERING",
    category: "Media Production",
    image: "/images/service_media.jpg",
    badge: "POST-PRODUCTION",
    metaTitle: "Video Editing & Post-Production Services | RND Technosoft",
  },
  "creative-production": {
    baseId: "commercial-media",
    title: "Creative Media Production",
    highlightText: "& Campaign Execution",
    tagline:
      "End-to-end creative concepts, multimedia assets, and multi-platform campaign media production.",
    sla: "FULL PRODUCTION SUITE",
    category: "Media Production",
    image: "/images/project_forest_film.jpg",
    badge: "CREATIVE PRODUCTION",
    metaTitle: "Creative Media Production Services | RND Technosoft",
  },
  "dedicated-squads": {
    baseId: "commercial-media",
    title: "Creative Media Production",
    highlightText: "& Dedicated Creative Squads",
    tagline:
      "Dedicated multi-disciplinary creative squads for end-to-end media and campaign production.",
    sla: "DEDICATED TEAMS",
    category: "Media Production",
    image: "/images/project_forest_film.jpg",
    badge: "CREATIVE SQUADS",
    metaTitle: "Creative Media Production Services | RND Technosoft",
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
      metaTitle: customConfig.metaTitle || baseService.metaTitle,
      metaDescription: customConfig.metaDescription || baseService.metaDescription,
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
      "marketing-collateral",
      "graphic-design",
    ],
    "media-production": [
      "commercial-video-production",
      "commercial-photography",
      "motion-graphics-3d-cgi",
      "video-editing",
      "creative-production",
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
      title: "Service Not Found | RND Technosoft",
      robots: "noindex, nofollow",
    };
  }

  const title = resolved.service.metaTitle ||
    `${resolved.service.title} ${resolved.service.highlightText} | ${resolved.parentLabel}`;
  const description = resolved.service.metaDescription || resolved.service.tagline;
  const pageUrl = `https://rndtechnosoft.com/${category}/${subcategory}`;

  return {
    title,
    description,
    keywords: [
      resolved.service.title,
      resolved.parentLabel,
      resolved.service.category,
      resolved.service.badge,
      "RND Technosoft",
      ...resolved.service.techStack.map((t) => t.name),
    ],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: "RND Technosoft",
      type: "website",
      images: [
        {
          url: resolved.service.image || "/images/nebula_cloud_os_3d.jpg",
          width: 1200,
          height: 630,
          alt: `${resolved.service.title} — RND Technosoft`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [resolved.service.image || "/images/nebula_cloud_os_3d.jpg"],
    },
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

