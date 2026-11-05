import { redirect, notFound } from "next/navigation";
import { getServiceById, servicesData } from "@/data/servicesData";
import type { Metadata } from "next";

// Force static generation for all known routes
export const dynamic = 'force-static';
export const dynamicParams = false;

const SERVICE_REDIRECTS: Record<string, string> = {
  "ecommerce-platforms": "/technology-solution/ecommerce-platform-engineering",
  "ecommerce-platform-engineering": "/technology-solution/ecommerce-platform-engineering",
  "web-cloud": "/technology-solution/cloud-infrastructure-devops",
  "cloud-infrastructure-devops": "/technology-solution/cloud-infrastructure-devops",
  "enterprise-software-solutions": "/technology-solution/enterprise-software-solutions",
  "mobile-apps": "/technology-solution/mobile-applications",
  "mobile-applications": "/technology-solution/mobile-applications",
  "web-development": "/technology-solution/web-development",
  "seo-search": "/digital-marketing/technical-seo-dominance",
  "technical-seo-dominance": "/digital-marketing/technical-seo-dominance",
  "performance-ppc-advertising": "/digital-marketing/performance-ppc-advertising",
  "social-media": "/digital-marketing/social-media-management",
  "social-media-management": "/digital-marketing/social-media-management",
  "content-strategy-production": "/digital-marketing/content-strategy-production",
  "brand-identity": "/branding-design/brand-identity-systems",
  "brand-identity-systems": "/branding-design/brand-identity-systems",
  "ui-ux-spatial-design": "/branding-design/ui-ux-spatial-design",
  "commercial-media": "/media-production/commercial-video-production",
  "commercial-video-production": "/media-production/commercial-video-production",
  "motion-graphics-3d-cgi": "/media-production/motion-graphics-3d-cgi",
  "dedicated-squads": "/media-production/dedicated-squads",
};

export function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceById(slug);

  const title = service
    ? `${service.title} | RND Technosoft`
    : "Service Redirect | RND Technosoft";
  const description = service?.tagline || "Service capabilities overview";

  return {
    title,
    description,
    keywords: [
      service?.title,
      service?.category,
      "RND Technosoft",
      "digital services",
      service?.badge,
    ].filter(Boolean) as string[],
    openGraph: {
      title,
      description,
      url: `https://rndtechnosoft.com/services/${slug}`,
      siteName: "RND Technosoft",
      type: "website",
      images: service?.image
        ? [
            {
              url: service.image,
              width: 1200,
              height: 630,
              alt: `${service.title} — RND Technosoft`,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: service?.image ? [service.image] : undefined,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const target = SERVICE_REDIRECTS[slug];

  if (target) {
    redirect(target);
  }

  notFound();
}
