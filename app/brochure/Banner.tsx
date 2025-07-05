"use client";

// This component shows the banner image at the top of the page
import { BROCHURE_CONSTANTS } from "@/constants/brochurePage/constants";
import Image from "next/image";

export default function Banner() {
  return (
    <div>
      {/* Banner Image */}
      <div className="w-full h-[400px] relative">
        {/* Background image with overlay */}
        <div className="absolute inset-0 bg-cover bg-center">
          <Image
            src={BROCHURE_CONSTANTS.BANNER_IMAGE.heroImage}
            alt="Banner Image"
            fill
            className="object-cover object-center w-full h-full"
          />{" "}
          <div className="absolute inset-0 bg-gradient-to-br from-[#003C46]/90 via-[#003C46]/70 to-[#0098AF]/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-blue-950/10" />
        </div>
      </div>

      {/* Line between banner and content */}
      <div className="w-full h-[4px] bg-gradient-to-r from-[#0098AF] via-[#0098AF] to-[#0098AF] relative z-10" />
    </div>
  );
}
