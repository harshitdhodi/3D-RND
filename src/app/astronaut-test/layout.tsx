import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Astronaut Test | RND Technosoft",
  description: "Internal 3D animation test page for RND Technosoft.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AstronautTestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
