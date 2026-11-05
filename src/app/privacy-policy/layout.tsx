import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | RND Technosoft",
  description:
    "Read the RND Technosoft privacy policy to understand how we collect, use, store and protect your personal information when you use our website and digital services.",
  keywords: [
    "RND Technosoft privacy policy",
    "data privacy",
    "GDPR compliance",
    "CCPA compliance",
    "data protection",
    "privacy policy",
  ],
  alternates: {
    canonical: "/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy | RND Technosoft",
    description:
      "Read the RND Technosoft privacy policy to understand how we collect, use and protect your personal information.",
    url: "https://rndtechnosoft.com/privacy-policy",
    siteName: "RND Technosoft",
    type: "website",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
