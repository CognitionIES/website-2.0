// app/brochure/LeftSection.tsx
"use client";

import { motion } from "framer-motion";
import { BROCHURE_CONSTANTS } from "@/constants/brochurePage/constants";

interface LeftSectionProps {
  selectedBrochure: "product" | "plant";
  setSelectedBrochure: (value: "product" | "plant") => void;
}

export default function LeftSection({ selectedBrochure }: LeftSectionProps) {
  const content = BROCHURE_CONSTANTS.LEFT_CONTENT[selectedBrochure];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full lg:w-1/2 mb-8 pr-4 lg:pr-8"
    >
      <h2 className="text-2xl font-bold text-[#003C46] mb-6">
        {content.TITLE}
      </h2>
      <p className="text-base text-justify text-gray-600 mb-6">
        {content.DESCRIPTION}
      </p>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-[#003C46] mb-4">
          Why Download?
        </h3>
        <ul className="space-y-2">
          {content.WHY_DOWNLOAD.map((item, index) => (
            <li key={index} className="flex items-start item-center">
              <span className="text-[#0098af] mr-2  ">⦿</span>
              <span className="text-gray-600 text-sm mt-[2px]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-[#003C46] mb-4">
          What Makes Our Services Unique?
        </h3>
        <ul className="space-y-2">
          {content.UNIQUE_POINTS.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-[#0098af] mr-2 ">⦿</span>
              <span className="text-gray-600 text-sm mt-[2px]">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
