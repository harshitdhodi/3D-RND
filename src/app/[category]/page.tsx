import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import { getServiceCategoryBySlug, getServiceSubcategories, ServiceCategory, ServiceSubcategory } from "@/lib/getServiceData";
import CategoryPageClient from "@/components/CategoryPageClient";

// Force static generation for all known routes
export const dynamic = 'force-static';
export const dynamicParams = false;

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

  const categoryData = await getServiceCategoryBySlug(category);

  if (!categoryData) {
    notFound();
  }

  const subcategories = await getServiceSubcategories(categoryData._id);

  // Transform backend data to match CategoryPageClient interface
  const transformedData = {
    slug: categoryData.slug,
    metaTitle: categoryData.meta_title,
    metaDescription: categoryData.meta_description,
    bannerTitle: categoryData.banner_title,
    bannerSubtitle: categoryData.banner_subtitle,
    bannerImage: categoryData.banner_image,
    breadcrumb: categoryData.breadcrumb,
    divisionLabel: categoryData.division_label,
    divisionNumber: categoryData.division_number,
    iconName: categoryData.icon_name as "Code" | "TrendingUp" | "Palette" | "Video",
    heroTitle: categoryData.hero_title,
    heroHighlight: categoryData.hero_highlight,
    heroDesc: categoryData.hero_desc,
    supportingLine: categoryData.supporting_line,
    primaryCtaLabel: categoryData.primary_cta_label,
    primaryCtaHref: categoryData.primary_cta_href,
    secondaryCtaLabel: categoryData.secondary_cta_label,
    secondaryCtaHref: categoryData.secondary_cta_href,
    stats: [], // Will need to add stats field to backend
    subcategories: subcategories.map((sub: ServiceSubcategory) => ({
      index: sub.index,
      title: sub.title,
      tagline: sub.tagline,
      desc: sub.desc,
      tags: [],
      sla: sub.sla,
      badge: sub.badge,
      href: `/${categoryData.slug}/${sub.slug}`,
      image: sub.image,
      featured: sub.featured || false,
    })),
    disciplineHeading: categoryData.discipline_heading,
    disciplineDesc: categoryData.discipline_desc,
    faqs: [], // Will need to add FAQs to backend
  };

  return <CategoryPageClient data={transformedData} />;
}
