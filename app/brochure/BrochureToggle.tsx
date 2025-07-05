/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion } from "framer-motion";

interface BrochureToggleProps {
  selectedBrochure: "product" | "plant";
  setSelectedBrochure: (value: "product" | "plant") => void;
}
const featuredCategories: { id: "product" | "plant"; icon: string; name: string; color: string }[] = [
  {
    id: "product",
    icon: "🛠️ ",
    name: "Product Brochure",
    color: "bg-gradient-to-r from-[#0098af] to-[#00b4d8]/50",
  },
  {
    id: "plant",
    icon: "🏭",
    name: "Plant Brochure",
    color: "bg-gradient-to-r from-[#0098af] to-[#00b4d8]/50",
  },
];

export default function BrochureToggle({
  selectedBrochure,
  setSelectedBrochure,
}: BrochureToggleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-center w-full py-10"
    >
      <div className="inline-flex rounded-md pr-8" role="group">
        <div className="flex flex-wrap justify-center gap-6 mb-2">
          {featuredCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedBrochure(category.id)}
              className={`flex items-center gap-2  px-14 py-2 rounded-full transition-all duration-300 ${
                selectedBrochure === category.id
                  ? `${category.color} text-white shadow-lg scale-105`
                  : "bg-white/70 text-gray-700 hover:bg-white shadow-md"
              }`}
            >
              <span>{category.icon}</span>
              <span className="font-medium">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
