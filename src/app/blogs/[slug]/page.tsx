import { notFound } from "next/navigation";
import type { Metadata } from "next";
import InsightDetailView from "@/components/InsightDetailView";
import { fetchBlogs, fetchBlogBySlug } from "@/lib/blogApi";

// Allow dynamic params with no-store caching
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateStaticParams() {
  try {
    const blogs = await fetchBlogs();
    return blogs.map((b) => ({
      slug: b.id,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await fetchBlogBySlug(slug);
  
  if (!blog) {
    return {
      title: "Article Not Found | RND Technosoft",
      robots: "noindex, nofollow",
    };
  }
  
  const title = blog.meta_title || `${blog.title} | RND Technosoft Insights`;
  const description = blog.meta_description || blog.tagline;
  const pageUrl = blog.canonical || `https://rndtechnosoft.com/insights/${slug}`;
  const keywords = blog.meta_keywords
    ? (typeof blog.meta_keywords === "string" ? blog.meta_keywords.split(",").map((k) => k.trim()) : blog.meta_keywords)
    : [blog.title, blog.category, "RND Technosoft", "digital insights"];

  return {
    title,
    description,
    keywords,
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
  const blog = await fetchBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const allArticles = await fetchBlogs();
  const currentIndex = allArticles.findIndex((b) => b.id === blog.id);
  const prevBlog = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
  const nextBlog =
    currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;

  return (
    <>
      {blog.schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: typeof blog.schema === "string" ? blog.schema : JSON.stringify(blog.schema),
          }}
        />
      )}
      <InsightDetailView
        article={blog}
        allArticles={allArticles}
        prevArticle={prevBlog}
        nextArticle={nextBlog}
      />
    </>
  );
}
