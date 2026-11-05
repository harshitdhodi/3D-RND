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
      title: "Article Not Found | RND Technosoft",
      robots: "noindex, nofollow",
    };
  }
  const title = `${blog.title} | RND Technosoft Insights`;
  const description = blog.tagline;
  const pageUrl = `https://rndtechnosoft.com/blogs/${slug}`;

  return {
    title,
    description,
    keywords: [blog.title, blog.category, "RND Technosoft", "digital insights"],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: "RND Technosoft",
      type: "article",
      images: blog.image
        ? [{ url: blog.image, width: 1200, height: 630, alt: blog.title }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: blog.image ? [blog.image] : undefined,
    },
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
