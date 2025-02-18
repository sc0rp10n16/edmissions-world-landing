import { ContactSection } from "@/components/ContactSection";
import { DestinationsSection } from "@/components/DestinationsSection";
import { EngineeringSection } from "@/components/EngineeringSection";
import { HeroSection } from "@/components/HeroSection";
import { MakeYourMarkSection } from "@/components/MakeYourMarkSection";
import { MBBSSection } from "@/components/MBBSSection";
import { ServicesSection } from "@/components/ServicesSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      
      <HeroSection />
      <EngineeringSection/>
      <MBBSSection/>
      <MakeYourMarkSection/>
      <ServicesSection/>
      <DestinationsSection/>
      <ContactSection/>
    </div>
  );
}
