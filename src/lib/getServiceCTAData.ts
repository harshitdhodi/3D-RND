const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3058";

export interface ServiceCTAData {
  id?: string;
  badge?: string;
  title?: string;
  subtitle?: string;
  tagline?: string;
  status?: boolean;
  created_at?: string;
  updated_at?: string;
}

export const DEFAULT_SERVICE_CTA: ServiceCTAData = {
  badge: "Turnkey Commission Dialogue",
  title: "Ready to Architect Your Next Project?",
  subtitle: "Share your technical goals, target timeline, and key milestones. Our principal software architects will review your brief and respond within 4 business hours.",
  tagline: "Share your technical goals, target timeline, and key milestones. Our principal software architects will review your brief and respond within 4 business hours.",
  status: true,
};

/**
 * Fetch service CTA heading data from backend API
 * @returns ServiceCTAData object or default data if not found
 */
export async function getServiceCTAData(): Promise<ServiceCTAData> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/heading?section=service_cta`, {
      cache: "no-store",
    });

    if (res.ok) {
      const json = await res.json();
      const doc = json?.data;
      if (doc && doc.title) {
        return {
          id: doc.id || doc._id?.toString(),
          badge: doc.badge || DEFAULT_SERVICE_CTA.badge,
          title: doc.title,
          subtitle: doc.subtitle || doc.tagline || DEFAULT_SERVICE_CTA.subtitle,
          tagline: doc.tagline || doc.subtitle || DEFAULT_SERVICE_CTA.tagline,
          status: doc.status,
          created_at: doc.created_at,
          updated_at: doc.updated_at,
        };
      }
    }
  } catch (err) {
    console.warn("Error fetching service CTA heading data:", err);
  }

  return DEFAULT_SERVICE_CTA;
}
