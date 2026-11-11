/* eslint-disable @typescript-eslint/no-explicit-any */
import { blogsData, BlogDetail, getBlogById } from "@/data/blogsData";

export interface InsightsBannerData {
  title: string;
  breadcrumb: string;
  image: string;
  imgtitle?: string;
  altname?: string;
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
  image: "/NewBanner/blogs banner.png",
  imgtitle: "RnD Technosoft Engineering Insights Banner",
  altname: "Engineering Insights Header Banner",
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
  "Branding & Design",
  "Digital Marketing",
  "Technical SEO & Growth",
];

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3014";

// Return dynamic banner data with static fallback
export async function fetchInsightsBanner(): Promise<InsightsBannerData> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/data/insights_banner`, {
      next: { revalidate: 60 },
    });
    if (res.ok) {
      const json = await res.json();
      const rec = Array.isArray(json.data) ? json.data[0] : json.data;
      if (rec && rec.title) {
        return {
          title: rec.title || DEFAULT_BANNER.title,
          breadcrumb: rec.breadcrumb || DEFAULT_BANNER.breadcrumb,
          image: rec.image || DEFAULT_BANNER.image,
          imgtitle: rec.imgtitle || DEFAULT_BANNER.imgtitle,
          altname: rec.altname || DEFAULT_BANNER.altname,
          description: rec.description || DEFAULT_BANNER.description,
        };
      }
    }
  } catch (err) {
    console.warn("Failed to fetch insights_banner from API, using default:", err);
  }
  return DEFAULT_BANNER;
}

// Return dynamic briefing data with static fallback
export async function fetchInsightsBriefing(): Promise<InsightsBriefingData> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/data/insights_briefing`, {
      next: { revalidate: 60 },
    });
    if (res.ok) {
      const json = await res.json();
      const rec = Array.isArray(json.data) ? json.data[0] : json.data;
      if (rec && rec.heading) {
        return {
          badge: rec.badge || DEFAULT_BRIEFING.badge,
          heading: rec.heading || DEFAULT_BRIEFING.heading,
          description: rec.description || DEFAULT_BRIEFING.description,
          btn_text: rec.btn_text || DEFAULT_BRIEFING.btn_text,
          btn_link: rec.btn_link || DEFAULT_BRIEFING.btn_link,
        };
      }
    }
  } catch (err) {
    console.warn("Failed to fetch insights_briefing from API, using default:", err);
  }
  return DEFAULT_BRIEFING;
}

// Return static categories directly
export async function fetchInsightsCategories(): Promise<string[]> {
  return DEFAULT_CATEGORIES;
}

// Return static blog articles directly without network calls
export async function fetchInsightsArticles(): Promise<BlogDetail[]> {
  return blogsData;
}

// Return static article by slug directly without network calls
export async function fetchInsightBySlug(slug: string): Promise<BlogDetail | null> {
  return getBlogById(slug) || blogsData.find((b) => b.id === slug) || null;
}
