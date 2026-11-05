import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | RND Technosoft — Join Our Digital Innovation Team",
  description:
    "Explore career opportunities at RND Technosoft. Join a team of developers, designers, marketers and creative professionals building impactful digital experiences across web, marketing, branding and media.",
  keywords: [
    "RND Technosoft careers",
    "digital agency jobs",
    "web developer jobs",
    "digital marketing jobs",
    "graphic design jobs",
    "videographer jobs",
    "creative agency careers",
  ],
  alternates: {
    canonical: "/career",
  },
  openGraph: {
    title: "Careers | RND Technosoft — Join Our Digital Innovation Team",
    description:
      "Explore career opportunities at RND Technosoft. Join a team of developers, designers, marketers and creative professionals.",
    url: "https://rndtechnosoft.com/career",
    siteName: "RND Technosoft",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | RND Technosoft — Join Our Digital Innovation Team",
    description:
      "Explore career opportunities at RND Technosoft in development, design, marketing and media production.",
  },
};

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
