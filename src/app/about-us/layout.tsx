import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About RND Technosoft | Our Story, Expertise & Approach",
  description:
    "Learn about RND Technosoft, a full-service digital agency combining technology, digital marketing, branding and media production to help businesses grow, connect with audiences and build a stronger online presence.",
  keywords: [
    "about RND Technosoft",
    "digital agency",
    "digital growth partner",
    "technology solutions company",
    "digital transformation agency",
    "RND Technosoft team",
  ],
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About RND Technosoft | Our Story, Expertise & Approach",
    description:
      "RND Technosoft is a full-service digital agency combining technology, marketing, branding and media production to help businesses grow online.",
    url: "https://rndtechnosoft.com/about-us",
    siteName: "RND Technosoft",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About RND Technosoft | Our Story, Expertise & Approach",
    description:
      "RND Technosoft is a full-service digital agency combining technology, marketing, branding and media production to help businesses grow online.",
  },
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
