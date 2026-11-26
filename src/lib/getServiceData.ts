const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  process.env.NEXT_PUBLIC_CMS_URL ||
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  "http://localhost:3058";

export interface ServiceCategory {
  _id: string;
  id?: string;
  slug: string;
  title: string;
  meta_title?: string;
  meta_description?: string;
  banner_title: string;
  banner_subtitle: string;
  banner_image: string;
  image?: string;
  tagline?: string;
  division_tag?: string;
  description?: string;
  breadcrumb: string;
  division_label: string;
  division_number: string;
  icon_name: string;
  hero_title: string;
  hero_highlight: string;
  hero_desc: string;
  supporting_line?: string;
  primary_cta_label: string;
  primary_cta_href: string;
  secondary_cta_label?: string;
  secondary_cta_href?: string;
  discipline_heading: string;
  discipline_desc: string;
  order?: number;
}

export interface ServiceSubcategory {
  _id: string;
  slug: string;
  title: string;
  tagline: string;
  desc: string;
  sla: string;
  badge?: string;
  image: string;
  featured?: boolean;
  index: string;
  category: string; // Relation field ID
  order?: number;
}

export interface ServiceItem {
  _id: string;
  id: string;
  slug: string;
  title: string;
  highlight_text?: string;
  highlightText?: string;
  tagline: string;
  category: string;
  image: string;
  sla: string;
  avatar_icon?: string;
  avatarIcon?: string;
  badge: string;
  tall?: boolean;
  index?: string;
  hero_stats?: any[];
  heroStats?: any[];
  overview?: string[];
  specs?: string[];
  tech_stack?: { name: string; role: string; badge: string }[];
  techStack?: { name: string; role: string; badge: string }[];
  process_steps?: any[];
  processSteps?: any[];
  architecture_pillars?: any[];
  architecturePillars?: any[];
  deliverables?: any[];
  case_study?: any;
  caseStudy?: any;
  faqs?: any[];
  meta_title?: string;
  metaTitle?: string;
  meta_description?: string;
  metaDescription?: string;
  subcategory: string; // Relation field ID
  order?: number;
}

export async function getServiceCategories(): Promise<ServiceCategory[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/data/service_categories`, {
      cache: "no-store",
    });
    if (!res.ok) return [];
    const json = await res.json();
    const list = Array.isArray(json?.data) ? json.data : [];
    return list.sort((a: ServiceCategory, b: ServiceCategory) => (a.order || 0) - (b.order || 0));
  } catch (err) {
    console.warn("Failed to fetch service_categories:", err);
    return [];
  }
}

export async function getServiceCategoryBySlug(slug: string): Promise<ServiceCategory | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/data/service_categories?slug=${encodeURIComponent(slug)}`, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    const json = await res.json();
    const list = Array.isArray(json?.data) ? json.data : [];
    return list.length > 0 ? list[0] : null;
  } catch (err) {
    console.warn("Failed to fetch service category:", err);
    return null;
  }
}

export async function getServiceSubcategories(categoryId?: string): Promise<ServiceSubcategory[]> {
  try {
    const filter = categoryId ? `{"category":"${categoryId}"}` : "";
    const res = await fetch(
      `${API_BASE_URL}/api/data/service_subcategories${filter ? `?filter=${encodeURIComponent(filter)}` : ""}`,
      { cache: "no-store" }
    );
    if (!res.ok) return [];
    const json = await res.json();
    const list = Array.isArray(json?.data) ? json.data : [];
    return list.sort((a: ServiceSubcategory, b: ServiceSubcategory) => (a.order || 0) - (b.order || 0));
  } catch (err) {
    console.warn("Failed to fetch service_subcategories:", err);
    return [];
  }
}

export async function getServiceSubcategoryBySlug(slug: string): Promise<ServiceSubcategory | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/data/service_subcategories?slug=${encodeURIComponent(slug)}`, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    const json = await res.json();
    const list = Array.isArray(json?.data) ? json.data : [];
    return list.length > 0 ? list[0] : null;
  } catch (err) {
    console.warn("Failed to fetch service subcategory:", err);
    return null;
  }
}

export async function getServiceItems(subcategoryId?: string): Promise<ServiceItem[]> {
  try {
    const query = subcategoryId ? `?subcategory=${encodeURIComponent(subcategoryId)}` : "";
    const res = await fetch(
      `${API_BASE_URL}/api/data/service_items${query}`,
      { cache: "no-store" }
    );
    if (!res.ok) return [];
    const json = await res.json();
    const list = Array.isArray(json?.data) ? json.data : [];
    return list.sort((a: ServiceItem, b: ServiceItem) => (a.order || 0) - (b.order || 0));
  } catch (err) {
    console.warn("Failed to fetch service_items:", err);
    return [];
  }
}

export async function getServiceItemBySlug(slug: string): Promise<ServiceItem | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/data/service_items?slug=${encodeURIComponent(slug)}`, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    const json = await res.json();
    const list = Array.isArray(json?.data) ? json.data : [];
    return list.length > 0 ? list[0] : null;
  } catch (err) {
    console.warn("Failed to fetch service item:", err);
    return null;
  }
}

export interface ServiceHero {
  id?: string;
  _id?: string;
  category: string; // Relation to service_categories
  category_slug: string;
  division_label: string;
  division_sub_badge?: string;
  division_tag?: string;
  title: string;
  supporting_line?: string;
  tagline?: string;
  description: string;
  image: string;
  imgtitle?: string;
  altname?: string;
  primary_cta_label?: string;
  primary_cta_href?: string;
  secondary_cta_label?: string;
  secondary_cta_href?: string;
  lead_architect_text?: string;
  counter_title?: string;
  counter_value?: string;
  order?: number;
}

export interface ServiceFaq {
  id?: string;
  _id?: string;
  category?: string; // Relation to service_categories
  category_slug?: string;
  question: string;
  answer: string;
  order?: number;
}

export interface ServiceCta {
  id?: string;
  _id?: string;
  badge?: string;
  heading: string;
  highlight?: string;
  description: string;
  primary_cta_label?: string;
  primary_cta_href?: string;
  secondary_cta_label?: string;
  secondary_cta_href?: string;
}

export async function getServiceHeroes(): Promise<ServiceHero[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/data/service_hero`, {
      cache: "no-store",
    });
    if (!res.ok) return [];
    const json = await res.json();
    const list = Array.isArray(json?.data) ? json.data : [];
    return list.sort((a: ServiceHero, b: ServiceHero) => (a.order || 0) - (b.order || 0));
  } catch (err) {
    console.warn("Failed to fetch service_hero:", err);
    return [];
  }
}

export async function getServiceFaqs(categorySlug?: string): Promise<ServiceFaq[]> {
  try {
    const query = categorySlug ? `?category_slug=${encodeURIComponent(categorySlug)}` : "";
    const res = await fetch(`${API_BASE_URL}/api/data/service_faqs${query}`, {
      cache: "no-store",
    });
    if (!res.ok) return [];
    const json = await res.json();
    const list = Array.isArray(json?.data) ? json.data : [];
    return list.sort((a: ServiceFaq, b: ServiceFaq) => (a.order || 0) - (b.order || 0));
  } catch (err) {
    console.warn("Failed to fetch service_faqs:", err);
    return [];
  }
}

export async function getServiceCta(): Promise<ServiceCta | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/data/service_cta`, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    const json = await res.json();
    const list = Array.isArray(json?.data) ? json.data : [];
    return list.length > 0 ? list[0] : null;
  } catch (err) {
    console.warn("Failed to fetch service_cta:", err);
    return null;
  }
}

export interface ServiceUniverseItem {
  _id?: string;
  id?: string;
  name: string;
  tagline?: string;
  category: string;
  category_slug?: string;
  subcategory?: string;
  subcategory_slug?: string;
  icon_name?: string;
  logo_url?: string;
  accent_color?: string;
  featured?: boolean;
  order?: number;
}

export async function getServiceUniverse(): Promise<ServiceUniverseItem[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/data/service_universe`, {
      cache: "no-store",
    });
    if (!res.ok) return [];
    const json = await res.json();
    const list = Array.isArray(json?.data) ? json.data : [];
    return list.sort((a: ServiceUniverseItem, b: ServiceUniverseItem) => (a.order || 0) - (b.order || 0));
  } catch (err) {
    console.warn("Failed to fetch service_universe:", err);
    return [];
  }
}
