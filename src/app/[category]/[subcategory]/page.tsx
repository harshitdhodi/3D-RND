import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getServiceSubcategoryBySlug, getServiceItems, ServiceSubcategory, ServiceItem } from "@/lib/getServiceData";
import ServiceDetailsView from "@/components/ServiceDetailsView";

// Force static generation for all known routes
export const dynamic = 'force-static';
export const dynamicParams = true;

export async function generateStaticParams() {
  const routes: { category: string; subcategory: string }[] = [];

  const categories = [
    "technology-solution",
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
      "mobile-applications",
      "microservices-api-mesh",
    ],
    "digital-marketing": [
      "technical-seo-dominance",
      "performance-ppc-advertising",
      "social-media-management",
      "content-strategy-production",
    ],
    "branding-design": [
      "brand-identity-systems",
      "ui-ux-spatial-design",
      "graphic-design",
      "marketing-collateral",
    ],
    "media-production": [
      "commercial-video-production",
      "commercial-photography",
      "motion-graphics-3d-cgi",
      "video-editing",
      "creative-production",
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

const CATEGORY_META: Record<
  string,
  { parentPath: string; parentLabel: string; categoryName: string }
> = {
  "technology-solution": {
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

async function resolveService(
  category: string,
  subcategory: string
): Promise<{ service: any; parentPath: string; parentLabel: string } | null> {
  const catMeta = CATEGORY_META[category];
  if (!catMeta) return null;

  const subcategoryData = await getServiceSubcategoryBySlug(subcategory);
  if (!subcategoryData) return null;

  const serviceItems = await getServiceItems(subcategoryData._id);
  const serviceItem = serviceItems.length > 0 ? serviceItems[0] : null;

  if (!serviceItem) {
    // Fallback to subcategory data if no service item exists
    return {
      service: {
        id: subcategoryData.slug,
        index: subcategoryData.index,
        title: subcategoryData.title,
        highlightText: "",
        tagline: subcategoryData.tagline,
        category: catMeta.categoryName,
        image: subcategoryData.image,
        sla: subcategoryData.sla,
        avatarIcon: "",
        badge: subcategoryData.badge || "",
        heroStats: [],
        overview: [subcategoryData.desc],
        specs: [],
        architecturePillars: [],
        techStack: [],
        processSteps: [],
        deliverables: [],
        caseStudy: {},
        faqs: [],
        metaTitle: subcategoryData.title,
        metaDescription: subcategoryData.tagline,
      },
      parentPath: catMeta.parentPath,
      parentLabel: catMeta.parentLabel,
    };
  }

  return {
    service: {
      ...serviceItem,
      category: catMeta.categoryName,
    },
    parentPath: catMeta.parentPath,
    parentLabel: catMeta.parentLabel,
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; subcategory: string }>;
}): Promise<Metadata> {
  const { category, subcategory } = await params;
  const resolved = await resolveService(category, subcategory);

  if (!resolved) {
    return {
      title: "Service Not Found | RND Technosoft",
      robots: "noindex, nofollow",
    };
  }

  const title = resolved.service.metaTitle ||
    `${resolved.service.title} ${resolved.service.highlightText || ''} | ${resolved.parentLabel}`;
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
  const resolved = await resolveService(category, subcategory);

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

