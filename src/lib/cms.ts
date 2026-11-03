import { blogsData, BlogDetail } from "@/data/blogsData";

const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL || "http://localhost:3014";

export interface InsightsBannerData {
  title: string;
  breadcrumb: string;
  image: string;
  description?: string;
}

export interface InsightsBriefingData {
  badge: string;
  heading: string;
  description: string;
  btn_text: string;
  btn_link: string;
}

export const DEFAULT_BANNER: InsightsBannerData = {
  title: "ENGINEERING INSIGHTS",
  breadcrumb: "INSIGHTS",
  image: "/banner/insights.png",
  description: "<p>Deep technical analyses, architecture blueprints, and spatial engineering breakthroughs from our engineering team.</p>",
};

export const DEFAULT_BRIEFING: InsightsBriefingData = {
  badge: "FORTNIGHTLY RESEARCH BRIEFING",
  heading: "Stay at the Forefront of Digital Engineering",
  description: "<p>Receive curated technical architectures, spatial 3D benchmarks, and performance engineering reports straight to your inbox every two weeks.</p>",
  btn_text: "SUBSCRIBE TO BRIEFINGS",
  btn_link: "/#contact",
};

export const DEFAULT_CATEGORIES = [
  "All",
  "Spatial 3D & E-Commerce",
  "Mobile Engineering",
  "Cloud & Web Architecture",
  "Technical SEO & Growth",
  "Agile Architecture",
  "Brand & Media",
];

// Helper to convert dynamic CMS record to BlogDetail format
export function mapCmsRecordToBlogDetail(record: any): BlogDetail {
  // If overview is HTML or string
  let overviewArr: string[] = [];
  if (Array.isArray(record.overview)) {
    overviewArr = record.overview;
  } else if (typeof record.overview === "string") {
    // Strip or split by paragraphs
    const paragraphs = record.overview
      .replace(/<\/p>/gi, "\n")
      .replace(/<[^>]+>/g, "")
      .split("\n")
      .map((s: string) => s.trim())
      .filter(Boolean);
    overviewArr = paragraphs.length > 0 ? paragraphs : [record.overview];
  }

  // Deliverables
  let deliverablesArr: string[] = [];
  if (Array.isArray(record.deliverables)) {
    deliverablesArr = record.deliverables;
  } else if (typeof record.deliverables === "string") {
    const items = record.deliverables
      .replace(/<\/li>/gi, "\n")
      .replace(/<[^>]+>/g, "")
      .split("\n")
      .map((s: string) => s.trim())
      .filter(Boolean);
    deliverablesArr = items.length > 0 ? items : [record.deliverables];
  }

  return {
    id: record.slug || record.id,
    index: record.index || "01",
    title: record.title || "",
    subtitle: record.subtitle || "",
    tagline: record.tagline || "",
    category: record.category || "General",
    image: record.image || "/images/career/career_spatial_3d_color.jpg",
    galleryImages: Array.isArray(record.galleryImages)
      ? record.galleryImages
      : [record.image || "/images/career/career_spatial_3d_color.jpg"],
    author: record.author || "RnD Engineering",
    authorRole: record.authorRole || "Digital Architect",
    authorAvatar: record.authorAvatar || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    date: record.date || "OCT 2026",
    readTime: record.readTime || "5 min read",
    audioDuration: record.audioDuration || "3 min",
    badge: record.badge || "RESEARCH PAPER",
    sla: record.sla || "Proven Lift",
    overview: overviewArr,
    quote: {
      text: record.quote_text || record.quote?.text || "",
      author: record.quote_author || record.quote?.author || "",
    },
    deliverables: deliverablesArr,
    scope: Array.isArray(record.scope) ? record.scope : [],
    techStack: Array.isArray(record.techStack) ? record.techStack : [],
    techMatrix: Array.isArray(record.techMatrix) ? record.techMatrix : [],
    faqs: Array.isArray(record.faqs) ? record.faqs : [],
    beforeAfter: record.beforeAfter || undefined,
  };
}

export async function fetchInsightsBanner(): Promise<InsightsBannerData> {
  try {
    const res = await fetch(`${CMS_URL}/api/data/insights_banner`, {
      cache: "no-store",
    });
    if (!res.ok) return DEFAULT_BANNER;
    const json = await res.json();
    if (json.success && Array.isArray(json.data) && json.data.length > 0) {
      const doc = json.data[0];
      return {
        title: doc.title || DEFAULT_BANNER.title,
        breadcrumb: doc.breadcrumb || DEFAULT_BANNER.breadcrumb,
        image: doc.image || DEFAULT_BANNER.image,
        description: doc.description || DEFAULT_BANNER.description,
      };
    }
  } catch (err) {
    console.warn("Failed to fetch insights_banner from CMS, using default:", err);
  }
  return DEFAULT_BANNER;
}

export async function fetchInsightsBriefing(): Promise<InsightsBriefingData> {
  try {
    const res = await fetch(`${CMS_URL}/api/data/insights_briefing`, {
      cache: "no-store",
    });
    if (!res.ok) return DEFAULT_BRIEFING;
    const json = await res.json();
    if (json.success && Array.isArray(json.data) && json.data.length > 0) {
      const doc = json.data[0];
      return {
        badge: doc.badge || DEFAULT_BRIEFING.badge,
        heading: doc.heading || DEFAULT_BRIEFING.heading,
        description: doc.description || DEFAULT_BRIEFING.description,
        btn_text: doc.btn_text || DEFAULT_BRIEFING.btn_text,
        btn_link: doc.btn_link || DEFAULT_BRIEFING.btn_link,
      };
    }
  } catch (err) {
    console.warn("Failed to fetch insights_briefing from CMS, using default:", err);
  }
  return DEFAULT_BRIEFING;
}

export async function fetchInsightsCategories(): Promise<string[]> {
  try {
    const res = await fetch(`${CMS_URL}/api/data/insights_categories`, {
      cache: "no-store",
    });
    if (!res.ok) return DEFAULT_CATEGORIES;
    const json = await res.json();
    if (json.success && Array.isArray(json.data) && json.data.length > 0) {
      const sorted = json.data
        .filter((c: any) => c.is_active !== false)
        .sort((a: any, b: any) => (a.order || 0) - (b.order || 0))
        .map((c: any) => c.name);
      return sorted.length > 0 ? sorted : DEFAULT_CATEGORIES;
    }
  } catch (err) {
    console.warn("Failed to fetch insights_categories from CMS, using default:", err);
  }
  return DEFAULT_CATEGORIES;
}

export async function fetchInsightsArticles(): Promise<BlogDetail[]> {
  try {
    const res = await fetch(`${CMS_URL}/api/data/insights`, {
      cache: "no-store",
    });
    if (!res.ok) return blogsData;
    const json = await res.json();
    if (json.success && Array.isArray(json.data) && json.data.length > 0) {
      return json.data.map(mapCmsRecordToBlogDetail);
    }
  } catch (err) {
    console.warn("Failed to fetch insights articles from CMS, using static fallback:", err);
  }
  return blogsData;
}

export async function fetchInsightBySlug(slug: string): Promise<BlogDetail | null> {
  try {
    // Try blog slug route first
    const res = await fetch(`${CMS_URL}/api/blogs/${slug}`, {
      cache: "no-store",
    });
    if (res.ok) {
      const json = await res.json();
      if (json.success && json.data) {
        return mapCmsRecordToBlogDetail(json.data);
      }
    }

    // Try insights data collection
    const res2 = await fetch(`${CMS_URL}/api/data/insights`, {
      cache: "no-store",
    });
    if (res2.ok) {
      const json2 = await res2.json();
      if (json2.success && Array.isArray(json2.data)) {
        const found = json2.data.find((d: any) => d.slug === slug || d.id === slug);
        if (found) return mapCmsRecordToBlogDetail(found);
      }
    }
  } catch (err) {
    console.warn(`Failed to fetch insight slug '${slug}' from CMS:`, err);
  }

  // Fallback to static blogsData
  const staticFound = blogsData.find((b) => b.id === slug);
  return staticFound || null;
}

