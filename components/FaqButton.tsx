// components/FaqButton.jsx
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
    <div className="fixed right-2 z-[1100] hidden md:block">
      <button
        onClick={handleNavigation}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-transparent transition-transform duration-300 hover:scale-105"
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
