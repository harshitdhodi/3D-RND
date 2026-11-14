const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3014";

export interface ServiceCategory {
  _id: string;
  slug: string;
  title: string;
  meta_title?: string;
  meta_description?: string;
  banner_title: string;
  banner_subtitle: string;
  banner_image: string;
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
  highlight_text: string;
  tagline: string;
  category: string;
  image: string;
  sla: string;
  avatar_icon?: string;
  badge: string;
  tall?: boolean;
  overview?: string[];
  specs?: string[];
  tech_stack?: { name: string; role: string; badge: string }[];
  process_steps?: any[];
  deliverables?: any[];
  case_study?: any;
  faqs?: any[];
  meta_title?: string;
  meta_description?: string;
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
    const res = await fetch(`${API_BASE_URL}/api/data/service_categories?filter={"slug":"${slug}"}`, {
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
    const res = await fetch(`${API_BASE_URL}/api/data/service_subcategories?filter={"slug":"${slug}"}`, {
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
    const filter = subcategoryId ? `{"subcategory":"${subcategoryId}"}` : "";
    const res = await fetch(
      `${API_BASE_URL}/api/data/service_items${filter ? `?filter=${encodeURIComponent(filter)}` : ""}`,
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
    const res = await fetch(`${API_BASE_URL}/api/data/service_items?filter={"slug":"${slug}"}`, {
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
