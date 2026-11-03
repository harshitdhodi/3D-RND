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
      title: "Category Not Found | RnD Technosoft",
    };
  }

  return {
    title: `${data.heroTitle} ${data.heroHighlight} | ${data.breadcrumb || data.bannerTitle}`,
    description: data.heroDesc,
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
