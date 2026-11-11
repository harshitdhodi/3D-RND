export interface HeroData {
  title_line_1: string;
  title_line_2: string;
  badge_text?: string;
  show_badge?: boolean;
  scroll_hint_text?: string;
  primary_btn_text?: string;
  primary_btn_link?: string;
  secondary_btn_text?: string;
  secondary_btn_link?: string;
  frame_path_prefix?: string;
  total_frames?: number;
  scroll_height_vh?: number;
  damping?: number;
  overlay_opacity?: number;
  height_scale?: number;
  accent_color?: string;
}

export const DEFAULT_HERO_DATA: HeroData = {
  title_line_1: "DIGITAL",
  title_line_2: "AGENCY",
  badge_text: "RND TECHNOSOFT // ORBITAL MISSION CONTROL",
  show_badge: false,
  scroll_hint_text: "Scroll To Scrub Mission",
  primary_btn_text: "LET'S TALK",
  primary_btn_link: "/contact-us",
  secondary_btn_text: "EXPLORE WORK",
  secondary_btn_link: "/portfolio",
  frame_path_prefix: "/hero-frames/frame_",
  total_frames: 239,
  scroll_height_vh: 600,
  damping: 0.12,
  overlay_opacity: 0.05,
  height_scale: 1.10,
  accent_color: "#FFD400",
};

export async function getHeroData(): Promise<HeroData> {
  const cmsBase = process.env.NEXT_PUBLIC_CMS_URL || "http://localhost:3014";
  try {
    const res = await fetch(`${cmsBase}/api/data/hero_section`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return DEFAULT_HERO_DATA;
    }

    const json = await res.json();
    if (json.success && Array.isArray(json.data) && json.data.length > 0) {
      const doc = json.data[0];
      return {
        title_line_1: doc.title_line_1 || DEFAULT_HERO_DATA.title_line_1,
        title_line_2: doc.title_line_2 || DEFAULT_HERO_DATA.title_line_2,
        badge_text: doc.badge_text || DEFAULT_HERO_DATA.badge_text,
        show_badge: typeof doc.show_badge === "boolean" ? doc.show_badge : doc.show_badge === "true",
        scroll_hint_text: doc.scroll_hint_text || DEFAULT_HERO_DATA.scroll_hint_text,
        primary_btn_text: doc.primary_btn_text || DEFAULT_HERO_DATA.primary_btn_text,
        primary_btn_link: doc.primary_btn_link || DEFAULT_HERO_DATA.primary_btn_link,
        secondary_btn_text: doc.secondary_btn_text || DEFAULT_HERO_DATA.secondary_btn_text,
        secondary_btn_link: doc.secondary_btn_link || DEFAULT_HERO_DATA.secondary_btn_link,
        frame_path_prefix: doc.frame_path_prefix || DEFAULT_HERO_DATA.frame_path_prefix,
        total_frames:
          typeof doc.total_frames === "number"
            ? doc.total_frames
            : Number(doc.total_frames) || DEFAULT_HERO_DATA.total_frames,
        scroll_height_vh:
          typeof doc.scroll_height_vh === "number"
            ? doc.scroll_height_vh
            : Number(doc.scroll_height_vh) || DEFAULT_HERO_DATA.scroll_height_vh,
        damping:
          typeof doc.damping === "number"
            ? doc.damping
            : Number(doc.damping) || DEFAULT_HERO_DATA.damping,
        overlay_opacity:
          typeof doc.overlay_opacity === "number"
            ? doc.overlay_opacity
            : Number(doc.overlay_opacity) || DEFAULT_HERO_DATA.overlay_opacity,
        height_scale:
          typeof doc.height_scale === "number"
            ? doc.height_scale
            : Number(doc.height_scale) || DEFAULT_HERO_DATA.height_scale,
        accent_color: doc.accent_color || DEFAULT_HERO_DATA.accent_color,
      };
    }
  } catch (err) {
    // If CMS server is unreachable during build or runtime, gracefully use defaults
  }
  return DEFAULT_HERO_DATA;
}

