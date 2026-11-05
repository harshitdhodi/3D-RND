import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import ContactSection from "@/components/ContactSection";
import RnDFooter from "@/components/RnDFooter";
import SpaceBackground from "@/components/SpaceBackground";

export const metadata: Metadata = {
  title: "Contact RND Technosoft | Discuss Your Project",
  description:
    "Get in touch with RND Technosoft to discuss your web development, mobile app, digital marketing, branding or media production project. We help businesses build, grow and connect online.",
  keywords: [
    "contact RND Technosoft",
    "digital agency contact",
    "web development enquiry",
    "digital marketing enquiry",
    "branding services enquiry",
    "hire digital agency",
  ],
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: "Contact RND Technosoft | Discuss Your Project",
    description:
      "Get in touch with RND Technosoft to discuss your web development, digital marketing, branding or media production project.",
    url: "https://rndtechnosoft.com/contact-us",
    siteName: "RND Technosoft",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact RND Technosoft | Discuss Your Project",
    description:
      "Get in touch with RND Technosoft to discuss your web development, digital marketing, branding or media production project.",
  },
};

export default function ContactUsPage() {
  return (
    <div className="font-archia relative min-h-screen bg-[#050608] text-white">
      <SpaceBackground />
      <Navbar />
      
      <PageBanner
        title="GET IN TOUCH"
        breadcrumb="CONTACT US"
        imageSrc="/banner/contact.png"
      />

      <main className="relative z-10">
        <ContactSection />
      </main>

      <RnDFooter />
    </div>
  );
}
