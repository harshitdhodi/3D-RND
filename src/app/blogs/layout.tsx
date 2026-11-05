import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs & Articles | RND Technosoft Digital Knowledge Hub",
  description:
    "Explore insights, articles and resources on web development, mobile apps, digital marketing, SEO, social media, branding, design and media production from RND Technosoft's team of experts.",
  keywords: [
    "RND Technosoft blog",
    "digital marketing articles",
    "web development blog",
    "SEO insights",
    "branding articles",
    "digital agency blog",
    "technology articles",
  ],
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Blogs & Articles | RND Technosoft Digital Knowledge Hub",
    description:
      "Explore insights and articles on web development, digital marketing, SEO, branding, design and media production from RND Technosoft.",
    url: "https://rndtechnosoft.com/blogs",
    siteName: "RND Technosoft",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs & Articles | RND Technosoft Digital Knowledge Hub",
    description:
      "Explore insights and articles on web development, digital marketing, SEO, branding and media production from RND Technosoft.",
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
