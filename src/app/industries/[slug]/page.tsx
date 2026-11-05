import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { industriesList } from "@/data/industriesData";
import IndustryDetailClientView from "@/components/IndustryDetailClientView";

// Force static generation for all known routes
export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return industriesList.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = industriesList.find((item) => item.slug === slug);
  if (!industry) {
    return {
      title: "Industry Not Found | RnD Technosoft",
      robots: "noindex, nofollow",
    };
  }

  const pageUrl = `https://new.rndtechnosoft.com/industries/${industry.slug}`;
  
  // Custom metadata for manufacturing, healthcare, food-fmcg, retail-ecommerce, hospitality, and education
  const isManufacturing = industry.slug === "manufacturing";
  const isHealthcare = industry.slug === "healthcare";
  const isFoodFMCG = industry.slug === "food-fmcg";
  const isRetail = industry.slug === "retail-ecommerce";
  const isHospitality = industry.slug === "hospitality";
  const isEducation = industry.slug === "education";
  
  const metaTitle = isManufacturing 
    ? "Manufacturing Software & Digital Solutions | RND Technosoft"
    : isHealthcare
    ? "Healthcare Website & Digital Solutions | RND Technosoft"
    : isFoodFMCG
    ? "Food & FMCG Digital Solutions | RND Technosoft"
    : isRetail
    ? "Retail & E-commerce Website Solutions | RND Technosoft"
    : isHospitality
    ? "Hospitality Website & Digital Solutions | RND Technosoft"
    : isEducation
    ? "Education Website & Digital Solutions | RND Technosoft"
    : `${industry.title} Software Solutions & 3D Engineering | RnD Technosoft`;
    
  const metaDescription = isManufacturing
    ? "Explore manufacturing and industrial digital solutions by RND Technosoft, including custom software development, business applications, website development, digital marketing and branding."
    : isHealthcare
    ? "Explore healthcare and dental digital solutions by RND Technosoft, including website development, custom software, digital marketing, branding and media production."
    : isFoodFMCG
    ? "Discover Food & FMCG digital solutions by RND Technosoft, including e-commerce development, custom software, digital marketing, product branding and commercial photography."
    : isRetail
    ? "Explore retail and e-commerce solutions by RND Technosoft, including online store development, custom software, 3D product experiences, digital marketing, branding and media production."
    : isHospitality
    ? "Explore hospitality digital solutions by RND Technosoft, including hotel website development, booking platforms, digital marketing, branding, photography and videography."
    : isEducation
    ? "Explore education and training digital solutions by RND Technosoft, including educational website development, LMS platforms, custom software, digital marketing, branding and media production."
    : `${industry.shortInfo.slice(0, 155)}...`;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: [
      industry.title,
      `${industry.title} software solutions`,
      industry.category,
      industry.badge,
      "RnD Technosoft",
      "Enterprise 3D WebGL",
      "Digital Twin Engineering",
      "Industry Solutions",
    ],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${industry.title} | RnD Technosoft Industry Solutions`,
      description: metaDescription,
      url: pageUrl,
      siteName: "RnD Technosoft",
      type: "website",
      images: [
        {
          url: industry.works[0]?.image || "/images/nebula_cloud_os_3d.jpg",
          width: 1200,
          height: 630,
          alt: `${industry.title} Architecture Solutions`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${industry.title} Software & 3D WebGL | RnD Technosoft`,
      description: metaDescription,
      images: [industry.works[0]?.image || "/images/nebula_cloud_os_3d.jpg"],
    },
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industriesList.find((item) => item.slug === slug);

  if (!industry) {
    notFound();
  }

  const currentIndex = industriesList.findIndex((item) => item.slug === slug);
  const nextIndustry = industriesList[(currentIndex + 1) % industriesList.length];

  return (
    <IndustryDetailClientView
      industry={industry}
      nextIndustry={nextIndustry}
    />
  );
}
