/* eslint-disable @typescript-eslint/no-explicit-any */
import { blogsData, BlogDetail, getBlogById } from "@/data/blogsData";

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
  "Branding & Design",
  "Digital Marketing",
  "Technical SEO & Growth",
];

// Return static banner data directly
export async function fetchInsightsBanner(): Promise<InsightsBannerData> {
  return DEFAULT_BANNER;
}

// Return static briefing data directly
export async function fetchInsightsBriefing(): Promise<InsightsBriefingData> {
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
