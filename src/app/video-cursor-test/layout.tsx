import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video Cursor Test | RND Technosoft",
  description: "Internal video cursor animation test page for RND Technosoft.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function VideoCursorTestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
