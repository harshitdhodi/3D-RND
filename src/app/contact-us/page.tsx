import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import ContactSection from "@/components/ContactSection";
import RnDFooter from "@/components/RnDFooter";
import SpaceBackground from "@/components/SpaceBackground";

export default function ContactUsPage() {
  return (
    <div className="font-archia relative min-h-screen bg-[#050608] text-white">
      <SpaceBackground />
      <Navbar />
      
      <PageBanner
        title="GET IN TOUCH"
        breadcrumb="CONTACT US"
        imageSrc="/NewBanner/contactus.png"
      />

      <main className="relative z-10">
        <ContactSection />
      </main>

      <RnDFooter />
    </div>
  );
}
