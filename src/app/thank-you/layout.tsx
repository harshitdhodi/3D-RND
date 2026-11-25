import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | RND Technosoft",
  description: "Thank you for reaching out to RND Technosoft. We have received your submission and our team will be in touch shortly.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
