import React from "react";
import { CAREERS_CONSTANTS } from "@/constants/careersPage/constants";
import { motion } from "framer-motion";

const BenefitsSection = () => {
  const { ITEMS, TITLE } = CAREERS_CONSTANTS.BENEFITS;

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
      },
    }),
    hover: {
      y: -8,
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.08)",
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="py-8 sm:py-12 lg:py-16 bg-[#F5FDFF]/50 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full  sm:h-16 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full  sm:h-16 bg-gradient-to-t from-white to-transparent"></div>
      <section className="w-full  sm:h-[620px] relative  rounded-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <span className="inline-block px-2 py-1 sm:px-3 sm:py-1.5 bg-[#0098AF]/10 text-[#0098AF] text-xs sm:text-sm font-medium rounded-full mb-3 sm:mb-4">
              Benefits & Perks
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#003C46] drop-shadow-sm">
              {TITLE}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#5B5B5B] max-w-xl sm:max-w-2xl mx-auto mt-2 sm:mt-3">
              We believe in taking care of our team with benefits and a
              supportive environment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
            {ITEMS.map((benefit, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={cardVariants}
                whileHover={{ ...cardVariants.hover, scale: 1.01 }}
                className="bg-white rounded-lg p-4 sm:p-5 lg:p-6 shadow-sm border border-gray-100 flex flex-col"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 lg:mb-5">
                  <div className="flex-shrink-0 w-9 h-9 sm:w-12 sm:h-12 rounded-md bg-[#0098AF]/10 flex items-center justify-center">
                    <div className="w-5 h-5 sm:w-7 sm:h-7 rounded bg-[#0098AF] flex items-center justify-center">
                      <span className="text-white font-bold text-xs sm:text-base">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  <h3 className="flex-1 text-base sm:text-lg lg:text-xl font-semibold text-[#003C46] leading-tight">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-[#5B5B5B] text-xs sm:text-sm lg:text-base flex-grow">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BenefitsSection;
