export interface PageComponent {
  id?: string;
  page: string;
  key: string;
  label: string;
  order: number;
  is_active: boolean;
  margin_top?: string;
  margin_bottom?: string;
  padding_top?: string;
  padding_bottom?: string;
}

export const DEFAULT_PAGE_COMPONENTS: Record<string, PageComponent[]> = {
  home: [
    { page: 'home', key: 'hero', label: 'Hero Section & 3D Interactive Scrub', order: 1, is_active: true },
    { page: 'home', key: 'about_us', label: 'About Us / Brand Introduction', order: 2, is_active: true },
    { page: 'home', key: 'service_cards', label: 'Service Universe / Service Cards', order: 3, is_active: false },
    { page: 'home', key: 'featured_projects', label: 'Featured Projects / Portfolio Carousel', order: 4, is_active: true },
    { page: 'home', key: 'why_choose', label: 'Why Choose RnD / Differentiators', order: 5, is_active: true },
    { page: 'home', key: 'industries_served', label: 'Sectors in Focus / Industries Served', order: 6, is_active: true },
    { page: 'home', key: 'cosmic_process', label: 'Step-by-Step Cosmic Process', order: 7, is_active: true },
    { page: 'home', key: 'results_trust', label: 'Results & Trust / Metrics & Testimonials', order: 8, is_active: false },
    { page: 'home', key: 'creative_showreel', label: 'Creative Showreel / Videography', order: 9, is_active: false },
    { page: 'home', key: 'insights', label: 'Insights / Latest Intelligence', order: 10, is_active: true },
    { page: 'home', key: 'mission_cta', label: 'Mission CTA / Next Big Mission', order: 11, is_active: true },
  ],
  'about-us': [
    { page: 'about-us', key: 'banner', label: 'Hero Page Banner & Rocket Scroll', order: 1, is_active: true },
    { page: 'about-us', key: 'mission_vision', label: 'Constellation Mission & Vision', order: 2, is_active: true },
    { page: 'about-us', key: 'pillars', label: 'Core Agency Pillars & Capabilities', order: 3, is_active: true },
    { page: 'about-us', key: 'cosmic_process', label: 'Step-by-Step Cosmic Process', order: 4, is_active: true },
    { page: 'about-us', key: 'team_culture', label: 'Leadership & Team Culture', order: 5, is_active: true },
    { page: 'about-us', key: 'why_choose', label: 'Why Choose RnD', order: 6, is_active: true },
    { page: 'about-us', key: 'partnership_cta', label: 'Partnership CTA', order: 7, is_active: true },
  ],
  services: [
    { page: 'services', key: 'banner', label: 'Service Page Banner', order: 1, is_active: true },
    { page: 'services', key: 'capabilities_header', label: 'Capabilities Overview Header', order: 2, is_active: true },
    { page: 'services', key: 'category_showcase', label: 'Service Divisions Showcase', order: 3, is_active: true },
    { page: 'services', key: 'universe_navigation', label: 'Service Universe & Navigation Grid', order: 4, is_active: true },
    { page: 'services', key: 'engagement_models', label: 'Engagement Models', order: 5, is_active: false },
    { page: 'services', key: 'case_studies', label: 'Related Case Studies', order: 6, is_active: false },
    { page: 'services', key: 'faqs', label: 'Frequently Asked Questions (FAQs)', order: 7, is_active: true },
    { page: 'services', key: 'conversion_cta', label: 'Conversion CTA', order: 8, is_active: true },
  ],
  portfolio: [
    { page: 'portfolio', key: 'banner', label: 'Portfolio Page Banner', order: 1, is_active: true },
    { page: 'portfolio', key: 'portfolio_header', label: 'Portfolio Categories Header', order: 2, is_active: true },
    { page: 'portfolio', key: 'agency_disciplines', label: 'Core Agency Disciplines / Pillars Grid', order: 3, is_active: true },
    { page: 'portfolio', key: 'conversion_cta', label: 'Commission / Enterprise Project CTA', order: 4, is_active: true },
  ],
  industries: [
    { page: 'industries', key: 'banner', label: 'Industries Page Banner', order: 1, is_active: true },
    { page: 'industries', key: 'hero_bar', label: 'Industries Hero Bar & Metrics', order: 2, is_active: true },
    { page: 'industries', key: 'directory_listing', label: 'Industry Hubs Directory Listing', order: 3, is_active: true },
    { page: 'industries', key: 'consultation_cta', label: 'Architectural Consultation Form', order: 4, is_active: true },
  ],
  insights: [
    { page: 'insights', key: 'PageBanner', label: 'Hero Page Banner', order: 1, is_active: true },
    { page: 'insights', key: 'FilterBar', label: 'Category Filters & Search Bar', order: 2, is_active: true },
    { page: 'insights', key: 'FeaturedEditorial', label: 'Featured Editorial Spotlight', order: 3, is_active: true },
    { page: 'insights', key: 'ArticlesGrid', label: 'Articles 3-Column Grid', order: 4, is_active: true },
    { page: 'insights', key: 'ResearchBriefing', label: 'Fortnightly Research Briefing Newsletter', order: 5, is_active: true },
  ],
  career: [
    { page: 'career', key: 'banner', label: 'Career Page Banner', order: 1, is_active: true },
    { page: 'career', key: 'philosophy_hero', label: 'Atelier Philosophy Hero Bar', order: 2, is_active: true },
    { page: 'career', key: 'filter_search', label: 'Category Filters & Search Bar', order: 3, is_active: true },
    { page: 'career', key: 'jobs_listing', label: 'Active Job Openings Grid', order: 4, is_active: true },
    { page: 'career', key: 'application_form', label: 'Direct Engineering Application Form', order: 5, is_active: true },
  ],
  'contact-us': [
    { page: 'contact-us', key: 'banner', label: 'Contact Page Banner', order: 1, is_active: true },
    { page: 'contact-us', key: 'contact_section', label: 'Interactive Orbital Contact Section', order: 2, is_active: true },
  ],
  'team-culture': [
    { page: 'team-culture', key: 'banner', label: 'Team Culture Page Banner', order: 1, is_active: true },
    { page: 'team-culture', key: 'leadership_team', label: 'Leadership & Team Grid', order: 2, is_active: true },
  ],
  'privacy-policy': [
    { page: 'privacy-policy', key: 'banner', label: 'Policy Page Banner', order: 1, is_active: true },
    { page: 'privacy-policy', key: 'content', label: 'Legal Policy Content', order: 2, is_active: true },
  ],
  'terms-of-service': [
    { page: 'terms-of-service', key: 'banner', label: 'Terms Page Banner', order: 1, is_active: true },
    { page: 'terms-of-service', key: 'content', label: 'Terms of Service Content', order: 2, is_active: true },
  ],
  'cookies-policy': [
    { page: 'cookies-policy', key: 'banner', label: 'Cookies Policy Banner', order: 1, is_active: true },
    { page: 'cookies-policy', key: 'content', label: 'Cookies Policy Content', order: 2, is_active: true },
  ],
};

/**
 * Fetch dynamic page components configuration from CMS with fallback to defaults
 */
export async function getPageComponents(page: string): Promise<PageComponent[]> {
  const cmsBase = process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3058';
  try {
    const res = await fetch(`${cmsBase}/api/page-components?page=${encodeURIComponent(page)}`, {
      next: { revalidate: 15 },
    });
    if (!res.ok) {
      return DEFAULT_PAGE_COMPONENTS[page] || [];
    }
    const json = await res.json();
    if (json.success && Array.isArray(json.data) && json.data.length > 0) {
      return json.data.sort((a: PageComponent, b: PageComponent) => (a.order || 0) - (b.order || 0));
    }
  } catch (err) {
    // CMS unreachable - use default fallback
  }
  return DEFAULT_PAGE_COMPONENTS[page] || [];
}

/**
 * Check whether a specific section component is active
 */
export function isSectionActive(
  components?: PageComponent[],
  key: string = '',
  defaultActive = true
): boolean {
  if (!components || components.length === 0) return defaultActive;
  const match = components.find((c) => c.key === key);
  if (!match) return defaultActive;
  return match.is_active !== false;
}

/**
 * Returns dynamic margin and padding styles configured in Page Manager
 */
export function getSectionStyle(
  components?: PageComponent[],
  key: string = ''
): React.CSSProperties {
  if (!components || components.length === 0) return {};
  const match = components.find((c) => c.key === key);
  if (!match) return {};
  const style: React.CSSProperties = {};
  if (match.margin_top) style.marginTop = match.margin_top;
  if (match.margin_bottom) style.marginBottom = match.margin_bottom;
  if (match.padding_top) style.paddingTop = match.padding_top;
  if (match.padding_bottom) style.paddingBottom = match.padding_bottom;
  return style;
}

/**
 * Returns sorted active section keys based on Page Manager ordering
 */
export function getOrderedSectionKeys(
  components?: PageComponent[],
  defaultKeys: string[] = []
): string[] {
  if (!components || components.length === 0) return defaultKeys;

  // Active items sorted by order
  const activeSorted = [...components]
    .filter((c) => c.is_active !== false)
    .sort((a, b) => (a.order || 0) - (b.order || 0))
    .map((c) => c.key);

  // If DB had configured components, use them
  if (activeSorted.length > 0) {
    return activeSorted;
  }

  return defaultKeys;
}

/**
 * Check if a page has been set to hidden in Page Manager
 */
export async function isPageHidden(pageKey: string): Promise<boolean> {
  const cmsBase = process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3058';
  try {
    const res = await fetch(`${cmsBase}/api/page-visibility`, {
      next: { revalidate: 30 },
    });
    if (!res.ok) return false;
    const json = await res.json();
    if (json.success && Array.isArray(json.data)) {
      const match = json.data.find((p: any) => p.key === pageKey);
      return match ? !!match.is_hidden : false;
    }
  } catch (err) {
    // Graceful fallback
  }
  return false;
}
