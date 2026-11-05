import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Articles | RND Technosoft Digital Knowledge Hub",
  description:
    "Explore insights, articles and resources on web development, mobile apps, digital marketing, SEO, social media, branding, design and media production from RND Technosoft's team of experts.",
  keywords: [
    "RND Technosoft insights",
    "digital marketing articles",
    "web development blog",
    "SEO insights",
    "branding articles",
    "digital agency blog",
    "technology insights",
  ],
  alternates: {
    canonical: "/insights",
  },
  openGraph: {
    title: "Insights & Articles | RND Technosoft Digital Knowledge Hub",
    description:
      "Explore insights and articles on web development, digital marketing, SEO, branding, design and media production from RND Technosoft.",
    url: "https://rndtechnosoft.com/insights",
    siteName: "RND Technosoft",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights & Articles | RND Technosoft Digital Knowledge Hub",
    description:
      "Explore insights and articles on web development, digital marketing, SEO, branding and media production from RND Technosoft.",
  },
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
