// "use client";

// // This component shows the company values with cards
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { motion } from "framer-motion";
// import { CAREERS_CONSTANTS } from "@/constants/careersPage/constants";

// export default function ValuesSection() {
//   const { TITLE, ITEMS } = CAREERS_CONSTANTS.VALUES;
//   const { STAGGER_CHILDREN, CARD_HOVER } = CAREERS_CONSTANTS.ANIMATIONS;

//   return (
//     <section className="py-16 bg-gradient-to-b from-gray-50 to-[#F5FDFF] relative">
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={STAGGER_CHILDREN}
//         className="py-16 bg-gradient-to-b from-gray-50 to-[#F5FDFF] relative"
//       >
//         <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
//           {/* Section title */}
//           <div className="relative mb-12">
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003C46] relative drop-shadow-md">
//               {TITLE}
//               <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#0098AF] to-transparent" />
//             </h2>
//           </div>
//           {/* Values cards */}
//           <div className="grid md:grid-cols-4 gap-6">
//             {ITEMS.map((value, index) => (
//               <motion.div
//                 key={index}
//                 variants={CARD_HOVER}
//                 initial="rest"
//                 whileHover="hover"
//                 className="bg-white p-6 rounded-lg border border-[#0098AF]/10 shadow-sm cursor-pointer"
//               >
//                 <Card className="border-0">
//                   <CardHeader className="p-0">
//                     <CardTitle className="text-xl font-bold text-[#5B5B5B] mb-2 hover:text-[#0098AF] transition-colors duration-200">
//                       {value.title}
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent className="p-0">
//                     <CardDescription className="text-sm sm:text-base leading-relaxed text-gray-600 ">
//                       {value.description}
//                     </CardDescription>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";
//import Image from "next/image";
//import { PLANT_ENGINEERING_CONSTANTS } from "@/constants/plant-engineering/constants";
import { useEffect, useRef, useState } from "react";
//import Link from "next/link";
//import { Button } from "@/components/ui/button";
import { CAREERS_CONSTANTS } from "@/constants/careersPage/constants";


export default function AboutSection() {
  const {  ITEMS } = CAREERS_CONSTANTS.VALUES;
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { CARD_HOVER } = CAREERS_CONSTANTS.ANIMATIONS;
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting); // Update state when section enters or leaves view
      },
      {
        threshold: 0.2, // Triggers when 20% of the section is visible
        rootMargin: "0px 0px -20% 0px", // Ensures it triggers only when scrolling down into the section
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Animation variants for fade-in and fade-out
  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.42, 0, 0.58, 1], // Use a valid cubic-bezier array for ease
      },
    },
  };

  return (
    <div className="py-8 sm:py-12 lg:py-16">
      <section
        ref={sectionRef}
        className="w-full py-4 sm:py-8 lg:py-4 sm:h-[620px] relative bg-[#0098af]/10 rounded-xl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-4">
            <h2 className="text-3xl sm:text-4xl  lg:text-5xl font-bold text-[#003C46] relative drop-shadow-md text-center text-center">
              Our Values{" "}
            </h2>
          </div>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className=" items-center"
          >
            <div className="grid md:grid-cols-1 gap-4">
              {ITEMS.map((value, index) => (
                <motion.div
                  key={index}
                  variants={CARD_HOVER}
                  initial="rest"
                  whileHover="hover"
                  className="bg-white p-4 rounded-lg border border-[#0098AF]/10 shadow-sm "
                >
                  {/* <Card className="border-0 ">
                    <CardHeader className="p-0">
                      <CardTitle className="text-xl font-bold text-[#5B5B5B] mb-2 hover:text-[#0098AF] transition-colors duration-200">
                        {value.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <CardDescription className="text-sm sm:text-base leading-relaxed text-gray-600 ">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card> */}
                  <div className="grid md:grid-cols-1 gap-1">
                    <div className="text-xl font-bold text-[#5B5B5B] mb-2 hover:text-[#0098AF] transition-colors duration-200 ">
                      {value.title}
                    </div>
                    <div className="text-sm sm:text-base leading-relaxed text-gray-600">
                      {value.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
