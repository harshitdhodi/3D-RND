export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  imgtitle?: string;
  altname?: string;
  slug: string;
  badge: string;
  scope: string[];
}

export const DEFAULT_SERVICES_DATA: ServiceItem[] = [
  {
    id: "technology",
    number: "01",
    title: "Technology Solutions",
    tagline: "Websites • Applications • Software • E-commerce",
    description:
      "We engineer powerful digital experiences and intelligent software built around the way your business works. From responsive website development and custom web applications to mobile apps, enterprise software and eCommerce platforms, we turn complex requirements into seamless digital solutions.",
    heroImage: "/images/service_cloud_color.jpg",
    slug: "technology-solutions",
    badge: "Build smarter. Scale without limits.",
    scope: [
      "Website Development Services",
      "Web App Development Services",
      "Mobile App Development",
      "Custom Software Development",
      "Ecommerce Website Development",
      "Cloud Infrastructure & DevOps",
    ],
  },
  {
    id: "marketing",
    number: "02",
    title: "Digital Marketing",
    tagline: "SEO • Social Media • Paid Advertising • Content",
    description:
      "We turn digital visibility into meaningful business opportunities. Through strategic SEO, social media marketing, performance-driven paid advertising and compelling content, we help brands reach the right audience, strengthen engagement and generate measurable growth.",
    heroImage: "/images/service_marketing.jpg",
    slug: "digital-marketing",
    badge: "Get noticed. Get chosen. Grow faster.",
    scope: [
      "Digital Marketing Services",
      "SEO Services",
      "Social Media Marketing Services",
      "Performance Marketing Services",
      "Google Ads Services",
      "Content Marketing & Strategy",
    ],
  },
  {
    id: "branding",
    number: "03",
    title: "Branding & Design",
    tagline: "Brand Identity • Graphic Design • Marketing Collateral",
    description:
      "We transform business identities into memorable brand experiences. From distinctive brand identity design and creative graphic design to impactful marketing collateral, we create visual systems that communicate your value, build recognition and leave a lasting impression.",
    heroImage: "/images/service_branding.jpg",
    slug: "branding-design",
    badge: "Make your brand impossible to overlook.",
    scope: [
      "Branding Services",
      "Brand Identity Design",
      "Graphic Design Services",
      "Logo Design Services",
      "Marketing Collateral Design",
      "Visual Systems & Guidelines",
    ],
  },
  {
    id: "media",
    number: "04",
    title: "Media Production",
    tagline: "Videography • Photography • Editing • Creative Production",
    description:
      "We bring ideas to life through compelling visual storytelling. From professional photography and cinematic videography to video editing and creative media production, we create engaging visual content that connects brands with audiences and makes every story count.",
    heroImage: "/images/service_media.jpg",
    slug: "media-production",
    badge: "Capture attention. Create experiences. Tell stories.",
    scope: [
      "Video Production Services",
      "Photography Services",
      "Media Production",
      "Product Photography Services",
      "Video Editing & Post-Production",
      "Creative Content Production",
    ],
  },
];

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3014";

export async function getServicesData(): Promise<ServiceItem[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/data/services`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return DEFAULT_SERVICES_DATA;
    }

    const json = await res.json();
    const list = Array.isArray(json?.data) ? json.data : [];
    if (list.length === 0) return DEFAULT_SERVICES_DATA;

    const sorted = [...list].sort(
      (a: any, b: any) => (a.order || 0) - (b.order || 0)
    );

    return sorted.map((doc: any, idx: number) => ({
      id: doc.slug || String(idx),
      number: doc.number || String(idx + 1).padStart(2, "0"),
      title: doc.title || "",
      tagline: doc.tagline || "",
      description: doc.description || "",
      heroImage: doc.hero_image || doc.heroImage || "/images/service_cloud_color.jpg",
      imgtitle: doc.imgtitle || `${doc.title || ""} - RND Technosoft Core Discipline`,
      altname: doc.altname || `${doc.title || ""} Architecture & Development`,
      slug: doc.slug || "",
      badge: doc.badge || "",
      scope: Array.isArray(doc.scope_items)
        ? doc.scope_items
        : Array.isArray(doc.scope)
        ? doc.scope
        : [],
    }));
  } catch (err) {
    console.warn("Falling back to default Services data:", err);
    return DEFAULT_SERVICES_DATA;
  }
}

