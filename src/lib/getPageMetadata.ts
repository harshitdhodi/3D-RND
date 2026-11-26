const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3058";

export interface PageMetadata {
  id?: string;
  page_key: string;
  page_name: string;
  meta_title: string;
  meta_description: string;
  meta_keywords?: string[];
  canonical_link?: string;
  og_image?: string;
  og_title?: string;
  og_description?: string;
  twitter_card?: string;
  robots?: string;
  status?: boolean;
  created_at?: string;
  updated_at?: string;
}

export const DEFAULT_PAGE_METADATA: Record<string, PageMetadata> = {
  home: {
    page_key: "home",
    page_name: "Home",
    meta_title: "RND Technosoft | Digital Solutions, Technology & Creative Agency",
    meta_description: "RND Technosoft is a full-service digital agency providing web development, custom software, digital marketing, branding, and media production services for businesses worldwide.",
    meta_keywords: [
      "web development",
      "custom software",
      "digital marketing",
      "branding",
      "media production",
      "RND Technosoft",
      "technology solutions",
      "creative agency",
    ],
    canonical_link: "https://new.rndtechnosoft.com",
    og_image: "/images/nebula_cloud_os_3d.jpg",
    og_title: "RND Technosoft | Digital Solutions, Technology & Creative Agency",
    og_description: "RND Technosoft is a full-service digital agency providing web development, custom software, digital marketing, branding, and media production services for businesses worldwide.",
    twitter_card: "summary_large_image",
    robots: "index, follow",
  },
  about: {
    page_key: "about",
    page_name: "About Us",
    meta_title: "About Us | RND Technosoft - Technology & Creative Excellence",
    meta_description: "Learn about RND Technosoft's journey, team, and commitment to delivering exceptional digital solutions. Discover our expertise in technology, marketing, and creative services.",
    meta_keywords: [
      "about RND Technosoft",
      "digital agency",
      "technology company",
      "creative agency",
      "our team",
      "company profile",
    ],
    canonical_link: "https://new.rndtechnosoft.com/about-us",
    og_image: "/images/nebula_cloud_os_3d.jpg",
    og_title: "About Us | RND Technosoft",
    og_description: "Learn about RND Technosoft's journey, team, and commitment to delivering exceptional digital solutions.",
    twitter_card: "summary_large_image",
    robots: "index, follow",
  },
  contact: {
    page_key: "contact",
    page_name: "Contact Us",
    meta_title: "Contact Us | RND Technosoft - Start Your Project",
    meta_description: "Get in touch with RND Technosoft for your digital project needs. We provide web development, software solutions, digital marketing, branding, and media production services.",
    meta_keywords: [
      "contact RND Technosoft",
      "get in touch",
      "project inquiry",
      "digital services",
      "consultation",
    ],
    canonical_link: "https://new.rndtechnosoft.com/contact-us",
    og_image: "/images/nebula_cloud_os_3d.jpg",
    og_title: "Contact Us | RND Technosoft",
    og_description: "Get in touch with RND Technosoft for your digital project needs.",
    twitter_card: "summary_large_image",
    robots: "index, follow",
  },
  industries: {
    page_key: "industries",
    page_name: "Industries",
    meta_title: "Industries We Serve | RND Technosoft - Sector-Specific Solutions",
    meta_description: "Explore the industries RND Technosoft serves including manufacturing, healthcare, retail, education, hospitality, and more. We deliver sector-specific digital solutions.",
    meta_keywords: [
      "industries served",
      "sector solutions",
      "manufacturing software",
      "healthcare technology",
      "retail e-commerce",
      "education technology",
      "hospitality solutions",
    ],
    canonical_link: "https://new.rndtechnosoft.com/industries",
    og_image: "/images/nebula_cloud_os_3d.jpg",
    og_title: "Industries We Serve | RND Technosoft",
    og_description: "Explore the industries RND Technosoft serves with sector-specific digital solutions.",
    twitter_card: "summary_large_image",
    robots: "index, follow",
  },
  services: {
    page_key: "services",
    page_name: "Services",
    meta_title: "Our Services | RND Technosoft - Technology, Marketing & Creative",
    meta_description: "Discover RND Technosoft's comprehensive services including web development, custom software, digital marketing, branding, and media production for your business growth.",
    meta_keywords: [
      "web development services",
      "custom software development",
      "digital marketing services",
      "branding services",
      "media production",
      "SEO services",
      "technology solutions",
    ],
    canonical_link: "https://new.rndtechnosoft.com/services",
    og_image: "/images/nebula_cloud_os_3d.jpg",
    og_title: "Our Services | RND Technosoft",
    og_description: "Discover RND Technosoft's comprehensive services for your business growth.",
    twitter_card: "summary_large_image",
    robots: "index, follow",
  },
  portfolio: {
    page_key: "portfolio",
    page_name: "Portfolio",
    meta_title: "Our Portfolio | RND Technosoft - Digital Solutions Showcase",
    meta_description: "Explore RND Technosoft's portfolio of successful projects across web development, software solutions, digital marketing, branding, and media production.",
    meta_keywords: [
      "portfolio",
      "case studies",
      "project showcase",
      "digital solutions",
      "work examples",
      "client projects",
    ],
    canonical_link: "https://new.rndtechnosoft.com/portfolio",
    og_image: "/images/nebula_cloud_os_3d.jpg",
    og_title: "Our Portfolio | RND Technosoft",
    og_description: "Explore RND Technosoft's portfolio of successful digital solutions.",
    twitter_card: "summary_large_image",
    robots: "index, follow",
  },
  blogs: {
    page_key: "blogs",
    page_name: "Blogs",
    meta_title: "Blog & Insights | RND Technosoft - Technology & Digital Trends",
    meta_description: "Stay updated with the latest technology trends, digital marketing insights, and creative tips from RND Technosoft's expert team.",
    meta_keywords: [
      "technology blog",
      "digital marketing insights",
      "web development tips",
      "creative trends",
      "industry news",
    ],
    canonical_link: "https://new.rndtechnosoft.com/blogs",
    og_image: "/images/nebula_cloud_os_3d.jpg",
    og_title: "Blog & Insights | RND Technosoft",
    og_description: "Stay updated with the latest technology trends and digital insights.",
    twitter_card: "summary_large_image",
    robots: "index, follow",
  },
  career: {
    page_key: "career",
    page_name: "Career",
    meta_title: "Careers | RND Technosoft - Join Our Team",
    meta_description: "Explore career opportunities at RND Technosoft. Join our team of developers, designers, marketers, and creative professionals building innovative digital solutions.",
    meta_keywords: [
      "careers",
      "job openings",
      "employment",
      "work with us",
      "developer jobs",
      "designer jobs",
      "marketing jobs",
    ],
    canonical_link: "https://new.rndtechnosoft.com/career",
    og_image: "/images/nebula_cloud_os_3d.jpg",
    og_title: "Careers | RND Technosoft",
    og_description: "Explore career opportunities at RND Technosoft and join our team.",
    twitter_card: "summary_large_image",
    robots: "index, follow",
  },
};

/**
 * Fetch page metadata from backend API
 * @param pageKey - The unique key for the page (e.g., 'home', 'about', 'contact')
 * @returns PageMetadata object or default metadata if not found
 */
export async function getPageMetadata(pageKey: string): Promise<PageMetadata> {
  try {
    const res = await fetch(
      `${API_BASE_URL}/api/data/manage-meta?filter={"page_key":"${pageKey}"}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      console.warn(`Failed to fetch metadata for page: ${pageKey}`);
      return DEFAULT_PAGE_METADATA[pageKey] || getDefaultMetadata(pageKey);
    }

    const json = await res.json();
    const list = Array.isArray(json?.data) ? json.data : [];

    if (list.length === 0) {
      return DEFAULT_PAGE_METADATA[pageKey] || getDefaultMetadata(pageKey);
    }

    const doc = list[0];
    return {
      id: doc.id || doc._id?.toString(),
      page_key: doc.page_key || pageKey,
      page_name: doc.page_name || pageKey,
      meta_title: doc.meta_title || "",
      meta_description: doc.meta_description || "",
      meta_keywords: Array.isArray(doc.meta_keywords) ? doc.meta_keywords : [],
      canonical_link: doc.canonical_link || "",
      og_image: doc.og_image || "",
      og_title: doc.og_title || doc.meta_title,
      og_description: doc.og_description || doc.meta_description,
      twitter_card: doc.twitter_card || "summary_large_image",
      robots: doc.robots || "index, follow",
      status: doc.status,
      created_at: doc.created_at,
      updated_at: doc.updated_at,
    };
  } catch (err) {
    console.warn(`Error fetching page metadata for ${pageKey}:`, err);
    return DEFAULT_PAGE_METADATA[pageKey] || getDefaultMetadata(pageKey);
  }
}

/**
 * Get default metadata for a page if not found in defaults
 */
function getDefaultMetadata(pageKey: string): PageMetadata {
  const siteName = "RND Technosoft";
  const baseUrl = "https://new.rndtechnosoft.com";

  return {
    page_key: pageKey,
    page_name: pageKey.charAt(0).toUpperCase() + pageKey.slice(1),
    meta_title: `${pageKey.charAt(0).toUpperCase() + pageKey.slice(1)} | ${siteName}`,
    meta_description: `Discover ${siteName}'s ${pageKey} page. We provide comprehensive digital solutions including web development, software, marketing, and creative services.`,
    meta_keywords: [pageKey, siteName, "digital solutions", "technology"],
    canonical_link: `${baseUrl}/${pageKey}`,
    og_image: "/images/nebula_cloud_os_3d.jpg",
    og_title: `${pageKey.charAt(0).toUpperCase() + pageKey.slice(1)} | ${siteName}`,
    og_description: `Discover ${siteName}'s ${pageKey} page.`,
    twitter_card: "summary_large_image",
    robots: "index, follow",
  };
}

/**
 * Convert PageMetadata to Next.js Metadata object
 */
export function toNextJsMetadata(metadata: PageMetadata) {
  return {
    title: metadata.meta_title,
    description: metadata.meta_description,
    keywords: metadata.meta_keywords,
    alternates: {
      canonical: metadata.canonical_link,
    },
    openGraph: {
      title: metadata.og_title || metadata.meta_title,
      description: metadata.og_description || metadata.meta_description,
      url: metadata.canonical_link,
      siteName: "RND Technosoft",
      type: "website",
      images: metadata.og_image
        ? [
          {
            url: metadata.og_image,
            width: 1200,
            height: 630,
            alt: metadata.og_title || metadata.meta_title,
          },
        ]
        : [],
    },
    twitter: {
      card: metadata.twitter_card || "summary_large_image",
      title: metadata.og_title || metadata.meta_title,
      description: metadata.og_description || metadata.meta_description,
      images: metadata.og_image ? [metadata.og_image] : [],
    },
    robots: metadata.robots || "index, follow",
  };
}
