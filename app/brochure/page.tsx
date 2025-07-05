// app/brochure/page.tsx
"use client";

import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Banner from "./Banner";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Footer from "@/components/footer";
import { useState } from "react";
import BrochureToggle from "./BrochureToggle";

export default function BrochurePage() {
  const [selectedBrochure, setSelectedBrochure] = useState<"product" | "plant">("product");

  return (
    <main className="min-h-screen">
      <MegaMenu />
      <Banner />
      <BrochureToggle
        selectedBrochure={selectedBrochure}
        setSelectedBrochure={setSelectedBrochure}
      />
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row">
          <LeftSection
            selectedBrochure={selectedBrochure}
            setSelectedBrochure={setSelectedBrochure} // Pass the actual setSelectedBrochure function
          />
          <RightSection selectedBrochure={selectedBrochure} />
        </div>
      </div>
      <div className="w-full h-[4px] bg-gradient-to-r from-[#0098AF] via-[#0098AF] to-[#0098AF] relative z-10" />
      <Footer />
    </main>
  );
}