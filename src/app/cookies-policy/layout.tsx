import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies Policy | RND Technosoft",
  description:
    "Read the RND Technosoft cookies policy to understand how we use cookies and similar technologies to improve your browsing experience, website performance and security.",
  keywords: [
    "RND Technosoft cookies policy",
    "cookies policy",
    "website cookies",
    "cookie usage",
    "data privacy",
  ],
  alternates: {
    canonical: "/cookies-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Cookies Policy | RND Technosoft",
    description:
      "Read the RND Technosoft cookies policy to understand how we use cookies to improve your browsing experience.",
    url: "https://rndtechnosoft.com/cookies-policy",
    siteName: "RND Technosoft",
    type: "website",
  },
};

export default function CookiesPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
