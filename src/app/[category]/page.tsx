import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import { categoryPagesData } from "@/data/categoryPagesData";
import CategoryPageClient from "@/components/CategoryPageClient";

// Force static generation for all known routes
export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return [
    { category: "technology-solution" },
    { category: "technology-solutions" },
    { category: "digital-marketing" },
    { category: "branding-design" },
    { category: "media-production" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const slug = category === "technology-solutions" ? "technology-solution" : category;
  const data = categoryPagesData[slug];

  if (!data) {
    return {
      title: "Category Not Found | RND Technosoft",
      robots: "noindex, nofollow",
    };
  }

  const title =
    data.metaTitle ||
    `${data.heroTitle} ${data.heroHighlight} | ${data.breadcrumb || data.bannerTitle}`;
  const description = data.metaDescription || data.heroDesc;
  const pageUrl = `https://rndtechnosoft.com/${slug}`;

  return {
    title,
    description,
    keywords: [
      data.breadcrumb,
      slug,
      "RND Technosoft",
      ...data.subcategories.map((s) => s.title),
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
          url: data.bannerImage || "/images/nebula_cloud_os_3d.jpg",
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
      images: [data.bannerImage || "/images/nebula_cloud_os_3d.jpg"],
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

  const data = categoryPagesData[category];

  if (!data) {
    notFound();
  }

  return <CategoryPageClient data={data} />;
}
