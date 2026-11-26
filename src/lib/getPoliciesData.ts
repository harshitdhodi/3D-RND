import { POLICIES_DATA, PolicyData } from "@/data/policiesData";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3058";

export async function getPolicyData(slug: string): Promise<PolicyData> {
  const fallback = POLICIES_DATA[slug] || POLICIES_DATA["privacy-policy"];
  try {
    const filter = encodeURIComponent(JSON.stringify({ slug }));
    const res = await fetch(
      `${API_BASE_URL}/api/data/legal_policies?filter=${filter}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return fallback;
    }

    const json = await res.json();
    const list = Array.isArray(json?.data) ? json.data : [];

    if (list.length === 0) {
      return fallback;
    }

    const doc = list[0];
    return {
      slug: doc.slug || fallback.slug,
      title: doc.title || fallback.title,
      breadcrumb: doc.breadcrumb || fallback.breadcrumb || doc.title,
      badge: doc.badge || fallback.badge,
      badgeIcon: doc.badgeIcon || doc.badge_icon || fallback.badgeIcon,
      effectiveDate: doc.effectiveDate || doc.effective_date || fallback.effectiveDate,
      version: doc.version || fallback.version,
      intro: doc.intro || fallback.intro,
      bannerImage: doc.bannerImage || doc.banner_image || fallback.bannerImage,
      tocTitle: doc.tocTitle || doc.toc_title || fallback.tocTitle,
      sidebarCallout: doc.sidebarCallout || doc.sidebar_callout || fallback.sidebarCallout,
      content: doc.content || fallback.content,
      sections: Array.isArray(doc.sections) && doc.sections.length > 0 ? doc.sections : fallback.sections,
    };
  } catch (err: any) {
    if (err?.digest === "DYNAMIC_SERVER_USAGE") {
      throw err;
    }
    console.warn(`[getPolicyData] Error fetching policy for "${slug}", using fallback:`, err?.message || err);
    return fallback;
  }
}

