/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Blog API Service
 * Fetches blog data from backend API with fallback to static data
 */

import { BlogDetail } from "@/data/blogsData";
import { calculateReadTime } from "./readTime";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3014";
const COLLECTION_ID = process.env.NEXT_PUBLIC_BLOG_COLLECTION_ID || "6ae81e500e8e4d4d432535a0";

/**
 * Transform backend blog data to match BlogDetail interface
 */
function transformBlogData(backendBlog: any): BlogDetail {
  const slugOrId = backendBlog.slug || backendBlog.id || backendBlog._id;
  const rawContent = backendBlog.content || backendBlog.details || "";
  const calculatedTime = calculateReadTime(rawContent || backendBlog.overview);

  return {
    id: slugOrId,
    slug: backendBlog.slug || slugOrId,
    index: backendBlog.index || "00",
    order: typeof backendBlog.order === 'number' ? backendBlog.order : (parseInt(backendBlog.order, 10) || parseInt(backendBlog.index, 10) || 999),
    title: backendBlog.title || "",
    subtitle: backendBlog.subtitle || "",
    tagline: backendBlog.tagline || "",
    category: backendBlog.category || "Uncategorized",
    image: backendBlog.image || "/blogs/placeholder.png",
    imgtitle: backendBlog.imgtitle || `${backendBlog.title || ""} - RND Technosoft Insights`,
    altname: backendBlog.altname || backendBlog.title || "",
    galleryImages: backendBlog.galleryImages || [backendBlog.image],
    author: backendBlog.author || "RnD Team",
    authorRole: backendBlog.authorRole || "Content Team",
    authorAvatar: backendBlog.authorAvatar || "/images/team/default.jpg",
    date: backendBlog.date || new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" }).toUpperCase(),
    readTime: backendBlog.readTime || calculatedTime || "5 min read",
    audioDuration: backendBlog.audioDuration,
    badge: backendBlog.badge || "ARTICLE",
    sla: backendBlog.sla,
    content: rawContent,
    meta_title: backendBlog.meta_title || backendBlog.metaTitle || `${backendBlog.title || ""} | RND Technosoft Insights`,
    meta_description: backendBlog.meta_description || backendBlog.metaDescription || backendBlog.tagline || "",
    canonical: backendBlog.canonical || backendBlog.canonical_url || `https://rndtechnosoft.com/insights/${backendBlog.slug || backendBlog.id || ""}`,
    schema: backendBlog.schema || backendBlog.schema_markup || "",
    meta_keywords: backendBlog.meta_keywords || backendBlog.metaKeywords || "",
    overview: parseHtmlToArray(backendBlog.overview) || [],
    quote: {
      text: backendBlog.quote_text || backendBlog.quote?.text || "",
      author: backendBlog.quote_author || backendBlog.quote?.author || "",
    },
    deliverables: parseHtmlToArray(backendBlog.deliverables),
    scope: backendBlog.scope ? parseScopeHtml(backendBlog.scope) : undefined,
    techStack: backendBlog.techStack || [],
    techMatrix: backendBlog.techMatrix || [],
    contentSections: backendBlog.contentSections || [],
    faqs: backendBlog.faqs || [],
    beforeAfter: backendBlog.beforeAfter,
  };
}

/**
 * Parse HTML string to array of paragraphs
 */
function parseHtmlToArray(html: string | string[] | undefined): string[] {
  if (!html) return [];
  if (Array.isArray(html)) return html;
  
  // Remove HTML tags and split by paragraph tags
  const text = html.replace(/<\/?p>/g, "\n").replace(/<[^>]*>/g, "");
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
}

/**
 * Parse scope HTML into structured scope array
 */
function parseScopeHtml(html: string): Array<{ number: string; title: string; desc: string; iconName?: string }> {
  if (!html) return [];
  
  try {
    // Simple regex-based parsing for scope sections
    const sections: Array<{ number: string; title: string; desc: string }> = [];
    const divMatches = html.match(/<div>([\s\S]*?)<\/div>/g) || [];
    
    divMatches.forEach((div, idx) => {
      const h4Match = div.match(/<h4>(.*?)<\/h4>/);
      const pMatch = div.match(/<p>(.*?)<\/p>/);
      
      if (h4Match && pMatch) {
        const title = h4Match[1].replace(/<[^>]*>/g, "").trim();
        const desc = pMatch[1].replace(/<[^>]*>/g, "").trim();
        sections.push({
          number: String(idx + 1).padStart(2, "0"),
          title,
          desc,
        });
      }
    });
    
    return sections;
  } catch {
    return [];
  }
}

/**
 * Fetch all blogs from backend API
 */
export async function fetchBlogs(): Promise<BlogDetail[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/data/${COLLECTION_ID}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch blogs: ${response.statusText}`);
    }

    const data = await response.json();
    
    if (data.success && Array.isArray(data.data)) {
      const list: BlogDetail[] = data.data.map(transformBlogData);
      list.sort((a: BlogDetail, b: BlogDetail) => (a.order ?? 999) - (b.order ?? 999));
      return list;
    }

    throw new Error("Invalid response format from API");
  } catch (error) {
    console.error("Error fetching blogs from API:", error);
    // Return empty array instead of throwing to allow graceful fallback
    return [];
  }
}

/**
 * Fetch a single blog by slug or ID
 */
export async function fetchBlogBySlug(slug: string): Promise<BlogDetail | null> {
  try {
    const blogs = await fetchBlogs();
    
    // Try to find by slug or ID
    const blog = blogs.find(
      (b) =>
        b.id === slug ||
        b.slug === slug ||
        slugify(b.title) === slug
    );

    return blog || null;
  } catch (error) {
    console.error("Error fetching blog by slug:", error);
    return null;
  }
}

/**
 * Fetch recent blogs (limit)
 */
export async function fetchRecentBlogs(limit = 3): Promise<BlogDetail[]> {
  try {
    const blogs = await fetchBlogs();
    return blogs.slice(0, limit);
  } catch (error) {
    console.error("Error fetching recent blogs:", error);
    return [];
  }
}

/**
 * Get unique categories from blogs
 */
export async function fetchBlogCategories(): Promise<string[]> {
  try {
    const blogs = await fetchBlogs();
    const categories = new Set<string>();
    
    blogs.forEach((blog) => {
      if (blog.category) {
        categories.add(blog.category);
      }
    });

    return ["All", ...Array.from(categories).sort()];
  } catch (error) {
    console.error("Error fetching blog categories:", error);
    return ["All"];
  }
}

/**
 * Helper function to create slug from title
 */
function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

/**
 * Search blogs by query
 */
export async function searchBlogs(query: string): Promise<BlogDetail[]> {
  try {
    const blogs = await fetchBlogs();
    const lowerQuery = query.toLowerCase();

    return blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(lowerQuery) ||
        blog.tagline.toLowerCase().includes(lowerQuery) ||
        blog.category.toLowerCase().includes(lowerQuery) ||
        blog.author.toLowerCase().includes(lowerQuery)
    );
  } catch (error) {
    console.error("Error searching blogs:", error);
    return [];
  }
}
