import type { Metadata } from "next";

const CATEGORY_SEO: Record<
  string,
  { title: string; description: string; keywords: string[] }
> = {
  "Website & Web Application Projects": {
    title: "Web Development Portfolio | RND Technosoft",
    description:
      "Explore RND Technosoft's web development and web application projects — custom websites, enterprise portals and SaaS platforms built with modern technologies for performance and scalability.",
    keywords: [
      "web development portfolio",
      "website projects",
      "web application projects",
      "custom website development",
      "enterprise web portals",
      "RND Technosoft",
    ],
  },
  "Mobile App Projects": {
    title: "Mobile App Development Portfolio | RND Technosoft",
    description:
      "Explore RND Technosoft's mobile application projects — native iOS, Android and cross-platform apps built with intuitive interfaces, robust architecture and seamless user experiences.",
    keywords: [
      "mobile app portfolio",
      "iOS app projects",
      "Android app projects",
      "cross-platform apps",
      "Flutter development",
      "RND Technosoft",
    ],
  },
  "Digital Marketing Projects": {
    title: "Digital Marketing Portfolio | RND Technosoft",
    description:
      "Explore RND Technosoft's digital marketing campaigns — SEO strategies, PPC campaigns, social media marketing and growth-driven campaigns delivering measurable results for businesses.",
    keywords: [
      "digital marketing portfolio",
      "SEO campaigns",
      "PPC campaigns",
      "social media marketing",
      "growth campaigns",
      "RND Technosoft",
    ],
  },
  "Branding & Graphic Design": {
    title: "Branding & Design Portfolio | RND Technosoft",
    description:
      "Explore RND Technosoft's branding and graphic design projects — brand identities, logo design, visual systems and creative collateral that build memorable brand presence.",
    keywords: [
      "branding portfolio",
      "logo design projects",
      "brand identity design",
      "graphic design work",
      "visual identity",
      "RND Technosoft",
    ],
  },
  "Videography & Photography": {
    title: "Videography & Photography Portfolio | RND Technosoft",
    description:
      "Explore RND Technosoft's videography and photography projects — commercial videos, brand films, product photography and creative visual storytelling that elevates brands.",
    keywords: [
      "videography portfolio",
      "photography portfolio",
      "commercial video production",
      "brand films",
      "product photography",
      "RND Technosoft",
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const seo = CATEGORY_SEO[category];

  if (!seo) {
    return {
      title: "Portfolio | RND Technosoft — Digital Projects & Case Studies",
      description:
        "Explore RND Technosoft's portfolio of digital projects across web, mobile, marketing, branding and media production.",
    };
  }

  const pageUrl = `https://rndtechnosoft.com/portfolio/${encodeURIComponent(category)}`;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: pageUrl,
      siteName: "RND Technosoft",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
  };
}

export default function PortfolioCategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
