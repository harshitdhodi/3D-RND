# Page Metadata Collection Setup

This document describes the page metadata collection structure for managing SEO metadata for manually created pages.

## Collection Schema

### Collection Name: `manage-meta`

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `page_key` | String | Yes | Unique identifier for the page (e.g., 'home', 'about', 'contact') |
| `page_name` | String | Yes | Human-readable page name (e.g., 'Home', 'About Us') |
| `meta_title` | String | Yes | Meta title for SEO (recommended: 50-60 characters) |
| `meta_description` | String | Yes | Meta description for SEO (recommended: 150-160 characters) |
| `meta_keywords` | Array | No | Array of keywords for SEO |
| `canonical_link` | String | No | Canonical URL for the page |
| `og_image` | String | No | Open Graph image URL (recommended: 1200x630px) |
| `og_title` | String | No | Open Graph title (falls back to meta_title) |
| `og_description` | String | No | Open Graph description (falls back to meta_description) |
| `twitter_card` | String | No | Twitter card type (default: 'summary_large_image') |
| `robots` | String | No | Robots directive (default: 'index, follow') |
| `status` | Boolean | No | Whether the page is active (default: true) |
| `created_at` | Date | Auto | Creation timestamp |
| `updated_at` | Date | Auto | Last update timestamp |

## Default Pages

The following pages have default metadata configured in the frontend:

1. **home** - Homepage
2. **about** - About Us page
3. **contact** - Contact Us page
4. **industries** - Industries listing page
5. **services** - Services listing page
6. **portfolio** - Portfolio listing page
7. **blogs** - Blogs listing page
8. **career** - Career page

## Backend API Endpoint

### GET /api/data/manage-meta

Fetch all page metadata records.

### GET /api/data/manage-meta?filter={"page_key":"home"}

Fetch metadata for a specific page by `page_key`.

### POST /api/data/manage-meta

Create a new page metadata record.

### PUT /api/data/manage-meta/:id

Update an existing page metadata record.

## Example Document

```json
{
  "page_key": "home",
  "page_name": "Home",
  "meta_title": "RND Technosoft | Digital Solutions, Technology & Creative Agency",
  "meta_description": "RND Technosoft is a full-service digital agency providing web development, custom software, digital marketing, branding, and media production services for businesses worldwide.",
  "meta_keywords": [
    "web development",
    "custom software",
    "digital marketing",
    "branding",
    "media production",
    "RND Technosoft",
    "technology solutions",
    "creative agency"
  ],
  "canonical_link": "https://new.rndtechnosoft.com",
  "og_image": "/images/nebula_cloud_os_3d.jpg",
  "og_title": "RND Technosoft | Digital Solutions, Technology & Creative Agency",
  "og_description": "RND Technosoft is a full-service digital agency providing web development, custom software, digital marketing, branding, and media production services for businesses worldwide.",
  "twitter_card": "summary_large_image",
  "robots": "index, follow",
  "status": true
}
```

## Frontend Usage

### Import the utility functions

```typescript
import { getPageMetadata, toNextJsMetadata } from "@/lib/getPageMetadata";
```

### Use in a Next.js page

```typescript
import type { Metadata } from "next";
import { getPageMetadata, toNextJsMetadata } from "@/lib/getPageMetadata";

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getPageMetadata("about");
  return toNextJsMetadata(metadata);
}

export default function AboutPage() {
  // Your page component
  return <div>About Us</div>;
}
```

### For dynamic pages with custom metadata

```typescript
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // For dynamic pages, you can still use the page metadata system
  // or fall back to dynamic generation based on slug
  const metadata = await getPageMetadata("services");
  
  // Override with dynamic content if needed
  return {
    ...toNextJsMetadata(metadata),
    title: `${params.slug} | RND Technosoft`,
  };
}
```

## Adding New Pages

1. **Add to Backend**: Create a new document in the `page_metadata` collection with the appropriate `page_key`.

2. **Add Default (Optional)**: Add default metadata to `DEFAULT_PAGE_METADATA` in `src/lib/getPageMetadata.ts`.

3. **Use in Page**: Import and use `getPageMetadata()` and `toNextJsMetadata()` in your page's `generateMetadata` function.

## SEO Best Practices

- **Meta Title**: Keep between 50-60 characters for optimal display
- **Meta Description**: Keep between 150-160 characters for optimal display
- **Keywords**: Use 5-10 relevant keywords
- **OG Image**: Use 1200x630px images for best social media display
- **Canonical URL**: Always specify to prevent duplicate content issues
- **Robots**: Use "index, follow" for pages you want indexed, "noindex, nofollow" for pages you don't

## Collection Indexes

Recommended indexes for the `manage-meta` collection:

```javascript
db.manage-meta.createIndex({ page_key: 1 }, { unique: true });
db.manage-meta.createIndex({ status: 1 });
```

## Backend Collection Setup

### Collection ID
`6a2cd928c7ccfc7bea1e0099`

### Collection Name
`manage-meta`

### Access URL
`http://localhost:3058/collections/6a2cd928c7ccfc7bea1e0099?collectionName=manage-meta`

### Data to Add

Remove any existing data in the collection and add the following documents:

```json
[
  {
    "page_key": "home",
    "page_name": "Home",
    "meta_title": "RND Technosoft | Digital Solutions, Technology & Creative Agency",
    "meta_description": "RND Technosoft is a full-service digital agency providing web development, custom software, digital marketing, branding, and media production services for businesses worldwide.",
    "meta_keywords": [
      "web development",
      "custom software",
      "digital marketing",
      "branding",
      "media production",
      "RND Technosoft",
      "technology solutions",
      "creative agency"
    ],
    "canonical_link": "https://new.rndtechnosoft.com",
    "og_image": "/images/nebula_cloud_os_3d.jpg",
    "og_title": "RND Technosoft | Digital Solutions, Technology & Creative Agency",
    "og_description": "RND Technosoft is a full-service digital agency providing web development, custom software, digital marketing, branding, and media production services for businesses worldwide.",
    "twitter_card": "summary_large_image",
    "robots": "index, follow",
    "status": true
  },
  {
    "page_key": "about",
    "page_name": "About Us",
    "meta_title": "About Us | RND Technosoft - Technology & Creative Excellence",
    "meta_description": "Learn about RND Technosoft's journey, team, and commitment to delivering exceptional digital solutions. Discover our expertise in technology, marketing, and creative services.",
    "meta_keywords": [
      "about RND Technosoft",
      "digital agency",
      "technology company",
      "creative agency",
      "our team",
      "company profile"
    ],
    "canonical_link": "https://new.rndtechnosoft.com/about-us",
    "og_image": "/images/nebula_cloud_os_3d.jpg",
    "og_title": "About Us | RND Technosoft",
    "og_description": "Learn about RND Technosoft's journey, team, and commitment to delivering exceptional digital solutions.",
    "twitter_card": "summary_large_image",
    "robots": "index, follow",
    "status": true
  },
  {
    "page_key": "contact",
    "page_name": "Contact Us",
    "meta_title": "Contact Us | RND Technosoft - Start Your Project",
    "meta_description": "Get in touch with RND Technosoft for your digital project needs. We provide web development, software solutions, digital marketing, branding, and media production services.",
    "meta_keywords": [
      "contact RND Technosoft",
      "get in touch",
      "project inquiry",
      "digital services",
      "consultation"
    ],
    "canonical_link": "https://new.rndtechnosoft.com/contact-us",
    "og_image": "/images/nebula_cloud_os_3d.jpg",
    "og_title": "Contact Us | RND Technosoft",
    "og_description": "Get in touch with RND Technosoft for your digital project needs.",
    "twitter_card": "summary_large_image",
    "robots": "index, follow",
    "status": true
  },
  {
    "page_key": "industries",
    "page_name": "Industries",
    "meta_title": "Industries We Serve | RND Technosoft - Sector-Specific Solutions",
    "meta_description": "Explore the industries RND Technosoft serves including manufacturing, healthcare, retail, education, hospitality, and more. We deliver sector-specific digital solutions.",
    "meta_keywords": [
      "industries served",
      "sector solutions",
      "manufacturing software",
      "healthcare technology",
      "retail e-commerce",
      "education technology",
      "hospitality solutions"
    ],
    "canonical_link": "https://new.rndtechnosoft.com/industries",
    "og_image": "/images/nebula_cloud_os_3d.jpg",
    "og_title": "Industries We Serve | RND Technosoft",
    "og_description": "Explore the industries RND Technosoft serves with sector-specific digital solutions.",
    "twitter_card": "summary_large_image",
    "robots": "index, follow",
    "status": true
  },
  {
    "page_key": "services",
    "page_name": "Services",
    "meta_title": "Our Services | RND Technosoft - Technology, Marketing & Creative",
    "meta_description": "Discover RND Technosoft's comprehensive services including web development, custom software, digital marketing, branding, and media production for your business growth.",
    "meta_keywords": [
      "web development services",
      "custom software development",
      "digital marketing services",
      "branding services",
      "media production",
      "SEO services",
      "technology solutions"
    ],
    "canonical_link": "https://new.rndtechnosoft.com/services",
    "og_image": "/images/nebula_cloud_os_3d.jpg",
    "og_title": "Our Services | RND Technosoft",
    "og_description": "Discover RND Technosoft's comprehensive services for your business growth.",
    "twitter_card": "summary_large_image",
    "robots": "index, follow",
    "status": true
  },
  {
    "page_key": "portfolio",
    "page_name": "Portfolio",
    "meta_title": "Our Portfolio | RND Technosoft - Digital Solutions Showcase",
    "meta_description": "Explore RND Technosoft's portfolio of successful projects across web development, software solutions, digital marketing, branding, and media production.",
    "meta_keywords": [
      "portfolio",
      "case studies",
      "project showcase",
      "digital solutions",
      "work examples",
      "client projects"
    ],
    "canonical_link": "https://new.rndtechnosoft.com/portfolio",
    "og_image": "/images/nebula_cloud_os_3d.jpg",
    "og_title": "Our Portfolio | RND Technosoft",
    "og_description": "Explore RND Technosoft's portfolio of successful digital solutions.",
    "twitter_card": "summary_large_image",
    "robots": "index, follow",
    "status": true
  },
  {
    "page_key": "blogs",
    "page_name": "Blogs",
    "meta_title": "Blog & Insights | RND Technosoft - Technology & Digital Trends",
    "meta_description": "Stay updated with the latest technology trends, digital marketing insights, and creative tips from RND Technosoft's expert team.",
    "meta_keywords": [
      "technology blog",
      "digital marketing insights",
      "web development tips",
      "creative trends",
      "industry news"
    ],
    "canonical_link": "https://new.rndtechnosoft.com/blogs",
    "og_image": "/images/nebula_cloud_os_3d.jpg",
    "og_title": "Blog & Insights | RND Technosoft",
    "og_description": "Stay updated with the latest technology trends and digital insights.",
    "twitter_card": "summary_large_image",
    "robots": "index, follow",
    "status": true
  },
  {
    "page_key": "career",
    "page_name": "Career",
    "meta_title": "Careers | RND Technosoft - Join Our Team",
    "meta_description": "Explore career opportunities at RND Technosoft. Join our team of developers, designers, marketers, and creative professionals building innovative digital solutions.",
    "meta_keywords": [
      "careers",
      "job openings",
      "employment",
      "work with us",
      "developer jobs",
      "designer jobs",
      "marketing jobs"
    ],
    "canonical_link": "https://new.rndtechnosoft.com/career",
    "og_image": "/images/nebula_cloud_os_3d.jpg",
    "og_title": "Careers | RND Technosoft",
    "og_description": "Explore career opportunities at RND Technosoft and join our team.",
    "twitter_card": "summary_large_image",
    "robots": "index, follow",
    "status": true
  }
]
```
