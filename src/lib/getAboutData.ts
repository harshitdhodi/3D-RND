export interface AboutData {
  badge_text: string;
  headline_line_1: string;
  headline_line_2: string;
  headline_line_3: string;
  paragraph_1: string;
  paragraph_2: string;
  stat_1_value: number;
  stat_1_suffix?: string;
  stat_1_label: string;
  stat_1_sublabel: string;
  stat_2_value: number;
  stat_2_suffix?: string;
  stat_2_label: string;
  stat_2_sublabel: string;
  stat_3_value: number;
  stat_3_suffix?: string;
  stat_3_label: string;
  stat_3_sublabel: string;
  cta_text: string;
  cta_link: string;
  image: string;
  imgtitle?: string;
  altname?: string;
}

export const DEFAULT_ABOUT_DATA: AboutData = {
  badge_text: "Who We Are",
  headline_line_1: "THINK BIGGER.",
  headline_line_2: "BUILD SMARTER.",
  headline_line_3: "GO FURTHER.",
  paragraph_1:
    "RND Technosoft is where technology meets creativity and innovation turns into measurable business progress. We bring together web and app development, custom software solutions, digital marketing, branding and media production to help businesses build, evolve and compete in a rapidly changing digital world.",
  paragraph_2:
    "From developing intelligent digital solutions to creating powerful brand experiences, we combine strategic thinking, technical expertise and creative execution to turn ambitious ideas into meaningful outcomes.",
  stat_1_value: 500,
  stat_1_suffix: "+",
  stat_1_label: "PROJECTS",
  stat_1_sublabel: "DELIVERED",
  stat_2_value: 8,
  stat_2_suffix: "+",
  stat_2_label: "Years of",
  stat_2_sublabel: "Driving Growth",
  stat_3_value: 60,
  stat_3_suffix: "+",
  stat_3_label: "IT",
  stat_3_sublabel: "SPECIALISTS",
  cta_text: "EXPLORE OUR STORY",
  cta_link: "/about-us",
  image: "/office/about.png",
  imgtitle: "RnD Technosoft Astronaut Workstation & Creative Lab",
  altname: "RnD Technosoft 3D Digital Agency Workstation",
};

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3014";

export async function getAboutData(): Promise<AboutData> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/data/about_section`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return DEFAULT_ABOUT_DATA;
    }

    const json = await res.json();
    const doc = Array.isArray(json?.data) ? json.data[0] : json?.data;
    if (!doc) return DEFAULT_ABOUT_DATA;

    return {
      badge_text: doc.badge_text || DEFAULT_ABOUT_DATA.badge_text,
      headline_line_1: doc.headline_line_1 || DEFAULT_ABOUT_DATA.headline_line_1,
      headline_line_2: doc.headline_line_2 || DEFAULT_ABOUT_DATA.headline_line_2,
      headline_line_3: doc.headline_line_3 || DEFAULT_ABOUT_DATA.headline_line_3,
      paragraph_1: doc.paragraph_1 || DEFAULT_ABOUT_DATA.paragraph_1,
      paragraph_2: doc.paragraph_2 || DEFAULT_ABOUT_DATA.paragraph_2,
      stat_1_value: Number(doc.stat_1_value ?? DEFAULT_ABOUT_DATA.stat_1_value),
      stat_1_suffix: doc.stat_1_suffix ?? DEFAULT_ABOUT_DATA.stat_1_suffix,
      stat_1_label: doc.stat_1_label || DEFAULT_ABOUT_DATA.stat_1_label,
      stat_1_sublabel: doc.stat_1_sublabel || DEFAULT_ABOUT_DATA.stat_1_sublabel,
      stat_2_value: Number(doc.stat_2_value ?? DEFAULT_ABOUT_DATA.stat_2_value),
      stat_2_suffix: doc.stat_2_suffix ?? DEFAULT_ABOUT_DATA.stat_2_suffix,
      stat_2_label: doc.stat_2_label || DEFAULT_ABOUT_DATA.stat_2_label,
      stat_2_sublabel: doc.stat_2_sublabel || DEFAULT_ABOUT_DATA.stat_2_sublabel,
      stat_3_value: Number(doc.stat_3_value ?? DEFAULT_ABOUT_DATA.stat_3_value),
      stat_3_suffix: doc.stat_3_suffix ?? DEFAULT_ABOUT_DATA.stat_3_suffix,
      stat_3_label: doc.stat_3_label || DEFAULT_ABOUT_DATA.stat_3_label,
      stat_3_sublabel: doc.stat_3_sublabel || DEFAULT_ABOUT_DATA.stat_3_sublabel,
      cta_text: doc.cta_text || DEFAULT_ABOUT_DATA.cta_text,
      cta_link: doc.cta_link || DEFAULT_ABOUT_DATA.cta_link,
      image: doc.image || DEFAULT_ABOUT_DATA.image,
      imgtitle: doc.imgtitle || DEFAULT_ABOUT_DATA.imgtitle,
      altname: doc.altname || DEFAULT_ABOUT_DATA.altname,
    };
  } catch (err) {
    console.warn("Falling back to default About Us data:", err);
    return DEFAULT_ABOUT_DATA;
  }
}

