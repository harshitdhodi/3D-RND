export interface LeaderData {
  name: string;
  role_subtitle: string;
  badge_label: string;
  bio_paragraph_1: string;
  bio_paragraph_2: string;
  quote: string;
  quote_author: string;
  image: string;
  imgtitle?: string;
  altname?: string;
  stat_1_val: string;
  stat_1_lbl: string;
  stat_2_val: string;
  stat_2_lbl: string;
  stat_3_val: string;
  stat_3_lbl: string;
  cta_text: string;
  cta_link: string;
}

export interface TeamMemberData {
  id?: string;
  name: string;
  role: string;
  squad: string;
  image: string;
  imgtitle?: string;
  altname?: string;
  bio: string;
  expertise: string[];
  metric_value: string;
  metric_label: string;
  order: number;
}

export const DEFAULT_LEADER_DATA: LeaderData = {
  name: "MR. RAVI SHAH",
  role_subtitle: "FOUNDER • BUSINESS LEADER • VISIONARY",
  badge_label: "FOUNDER & CHIEF EXECUTIVE OFFICER",
  bio_paragraph_1:
    "As the driving force behind RND Technosoft, Mr. Ravi Shah leads the company’s vision of bringing technology and creativity together. With a focus on innovation, business growth and meaningful client partnerships, he continues to guide RND towards creating solutions that empower businesses and unlock new possibilities.",
  bio_paragraph_2:
    "His vision is to build an organisation where technology, strategy and creativity work together to turn ambitious ideas into lasting impact.",
  quote:
    "True innovation happens when technology meets vision, creativity meets strategy, and ideas are transformed into opportunities. At RND Technosoft, we believe in building more than solutions — we believe in creating possibilities.",
  quote_author: "— Mr. Ravi Shah, Founder & CEO",
  image: "/images/team/founder_ravi_shah.png",
  imgtitle: "Mr. Ravi Shah - Founder, Business Leader & Visionary",
  altname: "Mr. Ravi Shah Founder and CEO of RND Technosoft",
  stat_1_val: "14+",
  stat_1_lbl: "Years Tech Leadership",
  stat_2_val: "500+",
  stat_2_lbl: "Delivered Projects",
  stat_3_val: "100%",
  stat_3_lbl: "In-House Squads",
  cta_text: "REQUEST EXECUTIVE CONSULTATION",
  cta_link: "/contact-us",
};

export const DEFAULT_TEAM_MEMBERS: TeamMemberData[] = [
  {
    id: "gm",
    name: "Bhavika Tailor",
    role: "General Manager",
    squad: "Operations & General Management",
    image: "/office/Professional General Manager Office Portrait.png",
    bio: "Executive operations leader steering cross-functional delivery, resource optimization, strategic client partnerships, and agency-wide operational excellence.",
    expertise: ["Operational Strategy", "Resource Scaling", "Cross-Functional Leadership", "Executive Management"],
    metric_value: "99.8%",
    metric_label: "On-Time Project Delivery",
    order: 1,
  },
  {
    id: "sr-fullstack",
    name: "Ruksar Saiyed",
    role: "Sr. Full Stack Developer",
    squad: "Full Stack & Core Architecture",
    image: "/office/Sr.Full Stack Developer.png",
    bio: "Senior engineering architect specializing in resilient cloud platforms, distributed API backends, real-time data pipelines, and high-concurrency microservices.",
    expertise: ["Full Stack Development", "System Design", "Node.js", "React", "Distributed Systems"],
    metric_value: "<10ms",
    metric_label: "P99 System Latency",
    order: 2,
  },
  {
    id: "sr-web-dev",
    name: "Krutika Rohit",
    role: "Sr. Web Developer",
    squad: "Frontend & Interactive Engineering",
    image: "/office/Sr. Web Developer.png",
    bio: "Frontend specialist building high-performance modern web applications, interactive WebGL components, modular design token frameworks, and accessible UI.",
    expertise: ["Web Development", "JavaScript", "React", "Next.js", "Interactive UI"],
    metric_value: "100/100",
    metric_label: "Lighthouse Performance",
    order: 3,
  },
  {
    id: "creative-head",
    name: "Sairoz Wadsariaa",
    role: "Creative Head",
    squad: "Branding, Design & Creative Direction",
    image: "/office/Confident Creative Head in Studio.png",
    bio: "Creative leader directing brand identity systems, visual design strategy, and creative campaigns. Translates business vision into compelling visual experiences that connect brands with their audiences across digital and print.",
    expertise: ["Creative Direction", "Brand Design", "Visual Identity", "Brand Strategy", "Creative Campaigns"],
    metric_value: "150+",
    metric_label: "Brand Projects Delivered",
    order: 4,
  },
];

export async function getTeamData(): Promise<{ leader: LeaderData; members: TeamMemberData[] }> {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3014";

  let leader = DEFAULT_LEADER_DATA;
  let members = DEFAULT_TEAM_MEMBERS;

  try {
    const leaderRes = await fetch(`${backendUrl}/api/data/about_page_leader`, {
      next: { revalidate: 60 },
    });
    if (leaderRes.ok) {
      const json = await leaderRes.json();
      const rec = Array.isArray(json.data) ? json.data[0] : json.data;
      if (rec && rec.name) {
        leader = {
          ...DEFAULT_LEADER_DATA,
          ...rec,
        };
      }
    }
  } catch {
    // Graceful fallback to default
  }

  try {
    const membersRes = await fetch(`${backendUrl}/api/data/team_members`, {
      next: { revalidate: 60 },
    });
    if (membersRes.ok) {
      const json = await membersRes.json();
      if (Array.isArray(json.data) && json.data.length > 0) {
        members = json.data.sort((a: TeamMemberData, b: TeamMemberData) => (a.order || 0) - (b.order || 0));
      }
    }
  } catch {
    // Graceful fallback to default
  }

  return { leader, members };
}

