// components/FaqButton.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import FaqGif from "@/constants/images/faq-gif-unscreen.gif";
import FaqStatic from "@/constants/images/faq-image.png";

const FaqButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/faq");
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="fixed right-4 top-4 z-[1100] sm:right-6 sm:top-6">
      <button
        onClick={handleNavigation}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex h-5 w-12 items-center justify-center rounded-full bg-transparent transition-transform duration-300 hover:scale-105  sm:w-14  md:w-16"
        aria-label="Open FAQ"
      >
        <Image
          src={isHovered ? FaqGif : FaqStatic}
          alt="FAQ Button"
          width={64}
          height={64}
          className="object-contain transition-transform duration-200 ease-in-out"
          style={{ transform: isHovered ? "scale(1)" : "scale(0.75)" }}
          priority
        />
      </button>
    </div>
  );
};

export default FaqButton;
