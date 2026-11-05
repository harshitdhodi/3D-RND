import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | RND Technosoft",
  description:
    "Review the terms of service for engaging with RND Technosoft's digital development, marketing, branding and media production services, including IP ownership, payments and project terms.",
  keywords: [
    "RND Technosoft terms of service",
    "terms and conditions",
    "service agreement",
    "client terms",
    "IP ownership terms",
  ],
  alternates: {
    canonical: "/terms-of-service",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Terms of Service | RND Technosoft",
    description:
      "Review the terms of service for engaging with RND Technosoft's digital development, marketing, branding and media production services.",
    url: "https://rndtechnosoft.com/terms-of-service",
    siteName: "RND Technosoft",
    type: "website",
  },
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
