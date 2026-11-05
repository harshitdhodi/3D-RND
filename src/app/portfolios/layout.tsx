import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | RND Technosoft — Digital Projects & Case Studies",
  description:
    "Explore RND Technosoft's portfolio of web development, mobile applications, digital marketing, branding, graphic design, videography and photography projects delivered for clients across multiple industries.",
  keywords: [
    "RND Technosoft portfolio",
    "web development projects",
    "mobile app projects",
    "digital marketing campaigns",
    "branding projects",
    "digital agency work",
  ],
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Portfolio | RND Technosoft — Digital Projects & Case Studies",
    description:
      "Explore RND Technosoft's portfolio of web, mobile, marketing, branding and media projects.",
    url: "https://rndtechnosoft.com/portfolio",
    siteName: "RND Technosoft",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | RND Technosoft — Digital Projects & Case Studies",
    description:
      "Explore RND Technosoft's portfolio of web, mobile, marketing, branding and media projects.",
  },
};

export default function PortfoliosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
