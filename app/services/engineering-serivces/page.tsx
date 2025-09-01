"use client";
import HeroSection from "./HeroSection";
import { AboutSection } from "./AboutSection";
import { ServicesIntro } from "./ServicesIntro";
import { ServicesSlider } from "./ServicesSlider";
import { SoftwareCarousel } from "./SoftwareCarousel";
import { CTASection } from "./CTASection";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen ">
      <MegaMenu />
      <HeroSection />
      <AboutSection />
      <ServicesIntro />
      <ServicesSlider />
      <SoftwareCarousel />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
