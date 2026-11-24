import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import { getServiceCategoryBySlug, getServiceSubcategories, ServiceCategory, ServiceSubcategory } from "@/lib/getServiceData";
import { getPortfolioCategories } from "@/lib/getPortfolioData";
import { getSectionHeading } from "@/lib/getSectionHeading";
import CategoryPageClient from "@/components/CategoryPageClient";
import { categoryPagesData } from "@/data/categoryPagesData";

// Enable dynamic rendering so all categories from CMS are rendered live
export const dynamic = 'force-dynamic';
export const dynamicParams = true;

export async function generateStaticParams() {
  const categories = ["technology-solution", "digital-marketing", "branding-design", "media-production"];
  return categories.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const data = await getServiceCategoryBySlug(category);

  if (!data) {
    const portfolioCats = await getPortfolioCategories();
    const isPortfolioCat = portfolioCats.find((c) => c.slug === category);
    if (isPortfolioCat) {
      return {
        title: `${isPortfolioCat.title} | RND Technosoft Portfolio`,
        description: isPortfolioCat.description,
      };
    }
    return {
      title: "Category Not Found | RND Technosoft",
      robots: "noindex, nofollow",
    };
  }

  const title = data.meta_title || `${data.hero_title} ${data.hero_highlight} | ${data.breadcrumb}`;
  const description = data.meta_description || data.hero_desc;
  const pageUrl = `https://rndtechnosoft.com/${category}`;

  return {
    title,
    description,
    keywords: [data.breadcrumb, category, "RND Technosoft"],
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
          url: data.banner_image || "/images/nebula_cloud_os_3d.jpg",
          width: 1200,
          height: 630,
          alt: `${data.breadcrumb} | RND Technosoft`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [data.banner_image || "/images/nebula_cloud_os_3d.jpg"],
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  // Handle plural alias with immediate clean redirect
  if (category === "technology-solutions") {
    redirect("/technology-solution");
  }

  const [categoryData, subcategoriesHeading] = await Promise.all([
    getServiceCategoryBySlug(category),
    getSectionHeading("service_subcategories"),
  ]);

  if (!categoryData) {
    const portfolioCats = await getPortfolioCategories();
    const isPortfolioCat = portfolioCats.find((c) => c.slug === category);
    if (isPortfolioCat) {
      redirect(`/portfolio/${category}`);
    }
    notFound();
  }

  const catId = (categoryData as any).id || (categoryData as any)._id;
  const subcategories = await getServiceSubcategories(catId);
  const fallbackCategoryData = categoryPagesData[category];

  // Transform backend data to match CategoryPageClient interface
  const transformedData = {
    slug: categoryData.slug,
    metaTitle: categoryData.meta_title || fallbackCategoryData?.metaTitle,
    metaDescription: categoryData.meta_description || fallbackCategoryData?.metaDescription,
    bannerTitle: categoryData.banner_title || fallbackCategoryData?.bannerTitle || "SERVICES",
    bannerSubtitle: categoryData.banner_subtitle || fallbackCategoryData?.bannerSubtitle || "DIVISION",
    bannerImage: categoryData.banner_image || fallbackCategoryData?.bannerImage || "/NewBanner/service.png",
    image: (categoryData as any).image || categoryData.banner_image || "/images/service_webdev.jpg",
    breadcrumb: categoryData.breadcrumb || fallbackCategoryData?.breadcrumb || "Services",
    divisionLabel: categoryData.division_label || fallbackCategoryData?.divisionLabel || `ACTIVE DIVISION // ${categoryData.title.toUpperCase()}`,
    divisionNumber: categoryData.division_number || fallbackCategoryData?.divisionNumber || "01",
    iconName: (categoryData.icon_name || fallbackCategoryData?.iconName || "Code") as "Code" | "TrendingUp" | "Palette" | "Video",
    heroTitle: categoryData.hero_title || fallbackCategoryData?.heroTitle || categoryData.title,
    heroHighlight: categoryData.hero_highlight || fallbackCategoryData?.heroHighlight || "",
    heroDesc: categoryData.hero_desc || fallbackCategoryData?.heroDesc || "",
    supportingLine: categoryData.supporting_line || fallbackCategoryData?.supportingLine,
    tagline: (categoryData as any).tagline || "",
    primaryCtaLabel: categoryData.primary_cta_label || fallbackCategoryData?.primaryCtaLabel || "EXPLORE OUR SOLUTIONS",
    primaryCtaHref: categoryData.primary_cta_href || fallbackCategoryData?.primaryCtaHref || "#disciplines",
    secondaryCtaLabel: categoryData.secondary_cta_label || fallbackCategoryData?.secondaryCtaLabel,
    secondaryCtaHref: categoryData.secondary_cta_href || fallbackCategoryData?.secondaryCtaHref,
    stats: fallbackCategoryData?.stats || [],
    subcategories: (subcategories.length > 0 ? subcategories : (fallbackCategoryData?.subcategories || [])).map(
      (sub: any, index: number) => {
        const fallbackSub = fallbackCategoryData?.subcategories.find(
          (s) => s.href.endsWith(`/${sub.slug}`) || s.title.toLowerCase() === (sub.title || "").toLowerCase()
        );
        return {
          index: sub.index || fallbackSub?.index || `[0${index + 1}]`,
          title: sub.title || fallbackSub?.title || "",
          tagline: sub.tagline || fallbackSub?.tagline || "",
          desc: sub.desc || fallbackSub?.desc || "",
          tags: sub.tags?.length ? sub.tags : (fallbackSub?.tags || []),
          sla: sub.sla || (sub.badge && !sub.badge.includes(",") && !sub.badge.includes("#") ? sub.badge : undefined) || fallbackSub?.sla || "SPECIALIZED",
          badge: sub.badge || fallbackSub?.badge || "DISCIPLINE",
          href: sub.href || `/${categoryData.slug}/${sub.slug}`,
          image: sub.image || fallbackSub?.image || "/images/service_webdev.jpg",
          featured: sub.featured !== undefined ? sub.featured : (fallbackSub?.featured || false),
        };
      }
    ),
    disciplineHeading: subcategoriesHeading?.title || categoryData.discipline_heading || fallbackCategoryData?.disciplineHeading || "DISCIPLINE ARCHITECTURE & CAPABILITIES",
    disciplineDesc: subcategoriesHeading?.tagline || categoryData.discipline_desc || fallbackCategoryData?.disciplineDesc || "",
    faqs: fallbackCategoryData?.faqs || [],
  };

  return <CategoryPageClient data={transformedData} />;
}
