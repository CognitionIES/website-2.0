"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function SearchParamsHandler({ onParamChange }) {
  const searchParams = useSearchParams();
  const sectionParam = searchParams.get("section"); // Changed from 'someParam' to 'section'

  useEffect(() => {
    if (sectionParam) {
      const sectionId = sectionParam.toLowerCase(); // Ensure case consistency
      const targetSection = document.getElementById(sectionId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        console.warn(`Section not found: ${sectionId}`);
        window.scrollTo({ top: 0, behavior: "smooth" }); // Fallback to top
      }
      onParamChange(sectionParam); // Notify parent (e.g., for debugging)
    }
  }, [sectionParam, onParamChange]);

  return null; // No UI, just side effects
}