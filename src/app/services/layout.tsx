import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Technology, Marketing, Branding & Media",
  description:
    "Explore RND Technosoft's full range of digital services: custom web development, mobile apps, custom software, e-commerce, SEO, social media marketing, PPC advertising, branding, logo design, graphic design, videography and photography.",
  keywords: [
    "RND Technosoft services",
    "web development services",
    "mobile app development",
    "custom software development",
    "e-commerce development",
    "SEO services",
    "social media marketing",
    "PPC advertising",
    "branding services",
    "logo design",
    "graphic design",
    "videography services",
    "photography services",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Our Services | Technology, Marketing, Branding & Media",
    description:
      "Explore RND Technosoft's digital services: web development, mobile apps, software, e-commerce, SEO, social media, PPC, branding, design, videography and photography.",
    url: "https://rndtechnosoft.com/services",
    siteName: "RND Technosoft",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Technology, Marketing, Branding & Media",
    description:
      "Explore RND Technosoft's digital services: web development, mobile apps, SEO, digital marketing, branding, design and media production.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
