import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getBlogById, blogsData } from "@/data/blogsData";
import { fetchInsightBySlug, fetchInsightsArticles } from "@/lib/cms";
import InsightDetailView from "@/components/InsightDetailView";

// Allow dynamic params with revalidation
export const dynamic = 'auto';
export const dynamicParams = true;
export const revalidate = 60;

export function generateStaticParams() {
  return blogsData.map((b) => ({
    slug: b.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = (await fetchInsightBySlug(slug)) || getBlogById(slug);
  if (!blog) {
    return {
      title: "Article Not Found | RnD Technosoft",
    };
  }
  return {
    title: `${blog.title} | RnD Technosoft Engineering Insights`,
    description: blog.tagline,
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = (await fetchInsightBySlug(slug)) || getBlogById(slug);

  if (!blog) {
    notFound();
  }

  const allArticles = (await fetchInsightsArticles()) || blogsData;
  const currentIndex = allArticles.findIndex((b) => b.id === blog.id);
  const prevBlog = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
  const nextBlog =
    currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;

  return (
    <InsightDetailView
      article={blog}
      allArticles={allArticles}
      prevArticle={prevBlog}
      nextArticle={nextBlog}
    />
  );
}
