import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import ContactSection from "@/components/ContactSection";
import RnDFooter from "@/components/RnDFooter";
import SpaceBackground from "@/components/SpaceBackground";
import { getPageMetadata, toNextJsMetadata } from "@/lib/getPageMetadata";
import { getPageComponents, isSectionActive, getSectionStyle, isPageHidden } from "@/lib/getPageComponents";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getPageMetadata("contact");
  return toNextJsMetadata(metadata);
}

export default async function ContactUsPage() {
  const [pageComponents, hidden] = await Promise.all([
    getPageComponents("contact-us"),
    isPageHidden("contact-us"),
  ]);

  if (hidden) {
    notFound();
  }

  return (
    <div className="font-archia relative min-h-screen bg-[#050608] text-white">
      <SpaceBackground />
      <Navbar />
      
      {isSectionActive(pageComponents, "banner") && (
        <div style={getSectionStyle(pageComponents, "banner")}>
          <PageBanner
            title="GET IN TOUCH"
            breadcrumb="CONTACT US"
            imageSrc="/NewBanner/contactus.png"
          />
        </div>
      )}

      {isSectionActive(pageComponents, "contact_section") && (
        <main className="relative z-10" style={getSectionStyle(pageComponents, "contact_section")}>
          <ContactSection />
        </main>
      )}

      <RnDFooter />
    </div>
  );
}
