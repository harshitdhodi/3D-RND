export interface ContactInfoData {
  phone?: string;
  phones?: string[];
  email?: string;
  secondary_email?: string;
  emails?: string[];
  address?: string;
  mapurl?: string;
  heading?: string;
  subheading?: string;
  whatsapp?: string;
  working_hours?: string;
  response_badge?: string;
  nda_badge?: string;
  // Channel Card Titles & Subtitles
  email_card_title?: string;
  email_card_subtitle?: string;
  phone_card_title?: string;
  phone_card_subtitle?: string;
  address_card_title?: string;
  // 3 Helper Cards
  helper_card_1_title?: string;
  helper_card_1_desc?: string;
  helper_card_2_title?: string;
  helper_card_2_desc?: string;
  helper_card_3_title?: string;
  helper_card_3_desc?: string;
}

export const DEFAULT_CONTACT_INFO: ContactInfoData = {
  phone: "+91-730 494 5823",
  phones: ["+91-730 494 5823"],
  email: "bdm@rndtechnosoft.com",
  secondary_email: "rndtechnosoft@gmail.com",
  emails: ["bdm@rndtechnosoft.com", "rndtechnosoft@gmail.com"],
  address: "3rd Floor, Sapphire, Daman Rd, above Axis Bank, Daulat Nagar, Chala, Vapi, Gujarat 396191",
  mapurl: "https://maps.app.goo.gl/7tX5zSdgBo65nbKL7",
  heading: "We're Here to Help!",
  subheading: "Have questions or need assistance? Our team is ready to support you. Reach out and let's make RnD Technosoft work for your next milestone.",
  whatsapp: "+91-730 494 5823",
  working_hours: "Mon - Fri: 9:00 AM - 6:00 PM IST",
  response_badge: "Avg Response: < 2 Hours",
  nda_badge: "Strict NDA Protected",
  email_card_title: "Write Us",
  email_card_subtitle: "Direct business and partnership inquiries.",
  phone_card_title: "Direct Voice & WhatsApp",
  phone_card_subtitle: "Immediate voice support & priority scheduling.",
  address_card_title: "Office Address",
  helper_card_1_title: "Need Help with Setup?",
  helper_card_1_desc: "Our senior technical cohort is ready to guide your infrastructure and architecture roadmap.",
  helper_card_2_title: "Looking for a Custom Solution?",
  helper_card_2_desc: "Let's discuss how our bespoke 3D WebGL, Next.js, and cloud platforms fit your goals.",
  helper_card_3_title: "Want to Give Feedback or Partner?",
  helper_card_3_desc: "We'd love to hear your thoughts and explore strategic technical collaborations.",
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3014";

export async function getContactInfo(): Promise<ContactInfoData> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/data/contact_info?limit=1`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return DEFAULT_CONTACT_INFO;
    }

    const json = await res.json();
    const data = Array.isArray(json?.data) ? json.data[0] : json.data;

    if (data) {
      const emailsList = Array.isArray(data.emails) && data.emails.length > 0
        ? data.emails
        : [data.email, data.secondary_email].filter(Boolean);

      const phonesList = Array.isArray(data.phones) && data.phones.length > 0
        ? data.phones
        : [data.phone, data.whatsapp].filter(Boolean);

      return {
        phone: data.phone || DEFAULT_CONTACT_INFO.phone,
        phones: phonesList.length > 0 ? phonesList : DEFAULT_CONTACT_INFO.phones,
        email: data.email || DEFAULT_CONTACT_INFO.email,
        secondary_email: data.secondary_email || DEFAULT_CONTACT_INFO.secondary_email,
        emails: emailsList.length > 0 ? emailsList : DEFAULT_CONTACT_INFO.emails,
        address: data.address || DEFAULT_CONTACT_INFO.address,
        mapurl: data.mapurl || DEFAULT_CONTACT_INFO.mapurl,
        heading: data.heading || DEFAULT_CONTACT_INFO.heading,
        subheading: data.subheading || DEFAULT_CONTACT_INFO.subheading,
        whatsapp: data.whatsapp || DEFAULT_CONTACT_INFO.whatsapp,
        working_hours: data.working_hours || DEFAULT_CONTACT_INFO.working_hours,
        response_badge: data.response_badge || DEFAULT_CONTACT_INFO.response_badge,
        nda_badge: data.nda_badge || DEFAULT_CONTACT_INFO.nda_badge,
        email_card_title: data.email_card_title || data.email_title || DEFAULT_CONTACT_INFO.email_card_title,
        email_card_subtitle: data.email_card_subtitle || data.email_subtitle || DEFAULT_CONTACT_INFO.email_card_subtitle,
        phone_card_title: data.phone_card_title || data.phone_title || DEFAULT_CONTACT_INFO.phone_card_title,
        phone_card_subtitle: data.phone_card_subtitle || data.phone_subtitle || DEFAULT_CONTACT_INFO.phone_card_subtitle,
        address_card_title: data.address_card_title || data.address_title || DEFAULT_CONTACT_INFO.address_card_title,
        helper_card_1_title: data.helper_card_1_title || DEFAULT_CONTACT_INFO.helper_card_1_title,
        helper_card_1_desc: data.helper_card_1_desc || DEFAULT_CONTACT_INFO.helper_card_1_desc,
        helper_card_2_title: data.helper_card_2_title || DEFAULT_CONTACT_INFO.helper_card_2_title,
        helper_card_2_desc: data.helper_card_2_desc || DEFAULT_CONTACT_INFO.helper_card_2_desc,
        helper_card_3_title: data.helper_card_3_title || DEFAULT_CONTACT_INFO.helper_card_3_title,
        helper_card_3_desc: data.helper_card_3_desc || DEFAULT_CONTACT_INFO.helper_card_3_desc,
      };
    }
  } catch (err) {
    console.warn("Failed to fetch contact info from API, using default:", err);
  }
  return DEFAULT_CONTACT_INFO;
}
