import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getServiceSubcategoryBySlug, getServiceItems, ServiceSubcategory, ServiceItem } from "@/lib/getServiceData";
import { getSectionHeading } from "@/lib/getSectionHeading";
import ServiceDetailsView from "@/components/ServiceDetailsView";
import { getPortfolioProjectBySlug, getPortfolioProjects, getPortfolioChildPageData } from "@/lib/getPortfolioData";
import PortfolioProjectCaseStudyView from "@/components/PortfolioProjectCaseStudyView";

// Enable dynamic rendering so all subcategories from CMS are rendered live
export const dynamic = 'force-dynamic';
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

  const [subcategoryData, ctaHeading] = await Promise.all([
    getServiceSubcategoryBySlug(subcategory),
    getSectionHeading("service_cta"),
  ]);
  if (!subcategoryData) return null;

  const serviceItems = await getServiceItems(subcategoryData._id);
  const serviceItem = serviceItems.length > 0 ? serviceItems[0] : null;

  const base: any = serviceItem || {};
  const sub: any = subcategoryData;

  const rawBadge = sub.badge || base.badge;
  const isHashtags = typeof rawBadge === "string" && (rawBadge.includes("#") || rawBadge.includes(","));
  const cleanBadge = !isHashtags && rawBadge ? rawBadge : (sub.sub_category || sub.title || base.badge || "SPECIALIZED DISCIPLINE");

  const resolvedService = {
    ...sub,
    ...base,
    id: sub.slug,
    subcategoryId: sub._id || sub.id,
    index: sub.index || base.index || "[01]",
    title: sub.title || base.title,
    sub_category: sub.sub_category || sub.title,
    highlightText: base.highlightText || base.highlight_text || "",
    tagline: sub.tagline || base.tagline,
    category: catMeta.categoryName,
    categorySlug: category,
    image: sub.image || base.image || "/images/service_webdev.jpg",
    banner_image: sub.banner_image || base.banner_image || sub.banner || base.banner || sub.bannerImg || base.bannerImg || "",
    gallery: (sub.gallery && sub.gallery.length > 0) ? sub.gallery : (base.gallery || []),
    sla: sub.sla || base.sla || "SPECIALIZED",
    avatarIcon: base.avatarIcon || base.avatar_icon || "",
    badge: cleanBadge,
    heroStats: base.heroStats || base.hero_stats || [],
    overview: sub.desc ? [sub.desc] : (Array.isArray(base.overview) ? base.overview : []),
    specs: base.specs || [],
    architecturePillars: base.architecturePillars || base.architecture_pillars || [],
    sec2: (sub.sec2 && sub.sec2.length > 0) ? sub.sec2 : (base.sec2 || []),
    sec2_tagline: sub.sec2_tagline || base.sec2_tagline,
    sec2_heading: sub.sec2_heading || base.sec2_heading,
    sec2_subheading: sub.sec2_subheading || base.sec2_subheading,
    rightside_tagline: sub.rightside_tagline || base.rightside_tagline,
    rightside_heading: sub.rightside_heading || base.rightside_heading,
    rightside_description: sub.rightside_description || base.rightside_description,
    right_side_list: (sub.right_side_list && sub.right_side_list.length > 0) ? sub.right_side_list : (base.right_side_list || []),
    sub_category_tagline2_heading: sub.sub_category_tagline2_heading || base.sub_category_tagline2_heading,
    sub_category_tagline2: sub.sub_category_tagline2 || base.sub_category_tagline2,
    process: (sub.process && sub.process.length > 0) ? sub.process : (base.process || []),
    process_sec_tagline: sub.process_sec_tagline || base.process_sec_tagline,
    process_sec_heading: sub.process_sec_heading || base.process_sec_heading,
    process_sec_subheading: sub.process_sec_subheading || base.process_sec_subheading,
    techStack: base.techStack || base.tech_stack || [],
    deliverables: base.deliverables || [],
    caseStudy: base.caseStudy || base.case_study || {},
    faqs: base.faqs || [],
    metaTitle: sub.title || base.metaTitle,
    metaDescription: sub.tagline || sub.desc || base.metaDescription,
    ctaHeading,
  };

  return {
    service: resolvedService,
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
    // Check if it's a portfolio project case study (/[slug]/:portfolio_slug)
    const portfolioProject = await getPortfolioProjectBySlug(subcategory);
    if (portfolioProject) {
      const childPage = await getPortfolioChildPageData(portfolioProject);
      const title = childPage.seo_title || `${portfolioProject.title} | Case Study & Engineering Showcase`;
      const description = childPage.seo_description || portfolioProject.summary || portfolioProject.tagline || portfolioProject.subtitle;
      const pageUrl = `https://rndtechnosoft.com/${category}/${subcategory}`;
      const ogImage = childPage.banner_image || portfolioProject.banner_image || portfolioProject.image || "/banner/service.png";

      return {
        title,
        description,
        keywords: [
          portfolioProject.title,
          portfolioProject.category_title || category,
          portfolioProject.client,
          "Case Study",
          "RND Technosoft",
          ...(portfolioProject.tech_stack || []),
        ],
        alternates: {
          canonical: pageUrl,
        },
        openGraph: {
          title,
          description,
          url: pageUrl,
          siteName: "RND Technosoft",
          type: "article",
          images: [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: `${portfolioProject.title} Case Study | RND Technosoft`,
            },
          ],
        },
        twitter: {
          card: "summary_large_image",
          title,
          description,
          images: [ogImage],
        },
      };
    }

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
    // Check if it's a portfolio project case study (/[slug]/:portfolio_slug)
    const portfolioProject = await getPortfolioProjectBySlug(subcategory);
    if (portfolioProject) {
      const [categoryProjects, childPageData] = await Promise.all([
        getPortfolioProjects(portfolioProject.category_slug || category),
        getPortfolioChildPageData(portfolioProject),
      ]);
      const currentIndex = categoryProjects.findIndex((p) => p.slug === portfolioProject.slug);

      const prevProject =
        currentIndex > 0 ? categoryProjects[currentIndex - 1] : null;
      const nextProject =
        currentIndex >= 0 && currentIndex < categoryProjects.length - 1
          ? categoryProjects[currentIndex + 1]
          : null;

      const relatedProjects = categoryProjects
        .filter((p) => p.slug !== portfolioProject.slug)
        .slice(0, 3);

      return (
        <PortfolioProjectCaseStudyView
          project={portfolioProject}
          relatedProjects={relatedProjects}
          prevProject={prevProject}
          nextProject={nextProject}
          childPageData={childPageData}
        />
      );
    }

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

