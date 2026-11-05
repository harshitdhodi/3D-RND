import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve | RND Technosoft Digital Solutions",
  description:
    "RND Technosoft delivers tailored digital solutions across manufacturing, healthcare, food & FMCG, retail & e-commerce, hospitality and education industries — combining technology, marketing, branding and media production.",
  keywords: [
    "RND Technosoft industries",
    "manufacturing digital solutions",
    "healthcare digital solutions",
    "food and FMCG digital solutions",
    "retail e-commerce solutions",
    "hospitality digital solutions",
    "education digital solutions",
    "industry digital transformation",
  ],
  alternates: {
    canonical: "/industries",
  },
  openGraph: {
    title: "Industries We Serve | RND Technosoft Digital Solutions",
    description:
      "RND Technosoft delivers tailored digital solutions across manufacturing, healthcare, food & FMCG, retail, hospitality and education industries.",
    url: "https://rndtechnosoft.com/industries",
    siteName: "RND Technosoft",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | RND Technosoft Digital Solutions",
    description:
      "RND Technosoft delivers tailored digital solutions across manufacturing, healthcare, food & FMCG, retail, hospitality and education industries.",
  },
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
