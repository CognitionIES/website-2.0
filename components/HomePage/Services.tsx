// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import { motion } from "framer-motion";
// import Link from "next/link";

// const services = [
//   {
//     id: 1,
//     title: "Mobility",
//     shortDescription:
//       "We engineer the future of transportation, from next-gen vehicles to smart infrastructure.",
//     fullDescription:
//       "Mobility is evolving, and we’re at the forefront of this transformation. Our services bridges digital and physical engineering, enabling everything from autonomous systems and electric mobility to advanced aerospace and rail solutions. The result? Seamless, efficient, and future-ready transportation.",
//     bgColor: "bg-[#003C46]",
//     textColor: "text-white",
//     image:
//       "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//     href: "/industries/mobility",
//   },
//   {
//     id: 2,
//     title: "Sustainable",
//     shortDescription:
//       "Engineering smarter, cleaner, and more efficient solutions for a sustainable tomorrow.",
//     fullDescription:
//       "Sustainability isn’t just a buzzword—it’s the foundation of future industries. We optimize manufacturing, enhance renewable energy integration, and develop eco-friendly infrastructure, helping businesses cut waste, reduce emissions, and operate more responsibly.",
//     bgColor: "bg-[#E5EEF6]",
//     textColor: "text-gray-800",
//     image:
//       "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//     href: "/industries/sustainability",
//   },
//   {
//     id: 3,
//     title: "Technology",
//     shortDescription:
//       "From AI-driven systems to embedded solutions, we power the next era of innovation.",
//     fullDescription:
//       "Technology is reshaping industries, and we make sure businesses stay ahead. Our services spans MedTech, semiconductor advancements, and connected systems, ensuring our clients leverage cutting-edge solutions to enhance efficiency, scalability, and performance.",
//     bgColor: "bg-[#5B5B5B]",
//     textColor: "text-white",
//     image:
//       "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//     href: "/industries/tech",
//   },
// ];

// export default function ServicesSection() {
//   // Set Mobility (id: 1) as the default active card on initial load
//   const [activeCard, setActiveCard] = useState<number>(1);

//   return (
//     <section className="w-full py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-[#F5FDFF] relative">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#003C46] mb-4 drop-shadow-md">
//           We Go Deeper
//         </h1>
//         <p className="text-base leading-relaxed text-gray-600 mb-8">
//           Engineering isn’t just about solving problems—it’s about pushing
//           boundaries. Our services spans three core domains, where precision
//           meets innovation. Whether it’s revolutionizing mobility, engineering
//           sustainable solutions, or harnessing the power of technology, we help
//           industries move faster, work smarter, and build for the future.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
//           {services.map((service) => (
//             <div
//               key={service.id}
//               className={cn(
//                 "rounded-xl overflow-hidden relative cursor-pointer transition-all duration-500 ease-in-out",
//                 service.bgColor,
//                 service.textColor,
//                 activeCard === service.id ? "md:col-span-6" : "md:col-span-3"
//               )}
//               onMouseEnter={() => setActiveCard(service.id)}
//               // Removed onMouseLeave to keep the last hovered card active
//             >
//               <div
//                 className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
//                 style={{
//                   backgroundImage: `url(${service.image})`,
//                   opacity: activeCard === service.id ? 0 : 1,
//                 }}
//               />
//               <div
//                 className={cn(
//                   "absolute inset-0 transition-opacity duration-500",
//                   service.id === 2
//                     ? "bg-gradient-to-b from-transparent to-[#000000] opacity-90"
//                     : "bg-gradient-to-b from-transparent to-[#000000]/70 opacity-70"
//                 )}
//               />
//               <div className="relative h-full p-8 flex flex-col justify-between min-h-[400px]">
//                 <div>
//                   <h2 className="text-3xl font-bold mb-4 text-white drop-shadow-md">
//                     {service.title}
//                   </h2>
//                   <p
//                     className={cn(
//                       "text-lg transition-all duration-500 ease-in-out",
//                       activeCard === service.id ? "opacity-90" : "opacity-0 h-0"
//                     )}
//                   >
//                     {activeCard === service.id
//                       ? service.fullDescription
//                       : service.shortDescription}
//                   </p>
//                 </div>
//                 <div className="flex justify-end mt-4">
//                   <Link href={service.href}>
//                     <Button
//                       variant="secondary"
//                       className="bg-[#0098AF] hover:bg-[#007B8F] text-white rounded-sm px-6 transition-transform duration-300"
//                     >
//                       Read More
//                     </Button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         {/* Subtle Decorative Elements */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.15 }}
//           transition={{
//             delay: 1,
//             duration: 1,
//             repeat: Infinity,
//             repeatType: "reverse",
//           }}
//           className="absolute top-1/3 left-16 w-5 h-5 bg-[#0098AF] opacity-30 rounded-full -z-10"
//         />
//       </div>
//     </section>
//   );
// }
// /*

// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import { motion } from "framer-motion"; // Added for animations

// const services = [
//   {
//     id: 1,
//     title: "Mobility",
//     shortDescription:
//       "We engineer the future of transportation, from next-gen vehicles to smart infrastructure.",
//     fullDescription:
//       "Mobility is evolving, and we’re at the forefront of this transformation. Our services bridges digital and physical engineering, enabling everything from autonomous systems and electric mobility to advanced aerospace and rail solutions. The result? Seamless, efficient, and future-ready transportation.",
//     bgColor: "bg-[#0A1E5C]", // Keeping original for now, but we'll adjust theme
//     textColor: "text-white",
//     image:
//       "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: 2,
//     title: "Sustainable",
//     shortDescription:
//       "Engineering smarter, cleaner, and more efficient solutions for a sustainable tomorrow.",
//     fullDescription:
//       "Sustainability isn’t just a buzzword—it’s the foundation of future industries. We optimize manufacturing, enhance renewable energy integration, and develop eco-friendly infrastructure, helping businesses cut waste, reduce emissions, and operate more responsibly.",
//     bgColor: "bg-[#E5EEF6]", // Updating to match theme
//     textColor: "text-gray-800",
//     image:
//       "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: 3,
//     title: "Technology",
//     shortDescription:
//       "From AI-driven systems to embedded solutions, we power the next era of innovation.",
//     fullDescription:
//       "Technology is reshaping industries, and we make sure businesses stay ahead. Our services spans MedTech, semiconductor advancements, and connected systems, ensuring our clients leverage cutting-edge solutions to enhance efficiency, scalability, and performance.",
//     bgColor: "bg-black", // Updating to match theme
//     textColor: "text-white",
//     image:
//       "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//   },
// ];

// export default function ServicesSection() {
//   const [activeCard, setActiveCard] = useState<number>(1);

//   // Animation Variants for decorative elements
//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 0.6, // Slightly lower opacity for subtlety
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   return (
//     <section className="w-full py-12 sm:py-16 lg:py-24 bg-[#5B5B5B] text-white relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0098AF] mb-4 drop-shadow-md">
//           We Go Deeper
//         </h1>
//         <p className="text-base leading-relaxed text-gray-200 mb-8 font-light">
//           Engineering isn’t just about solving problems—it’s about pushing
//           boundaries. Our services spans three core domains, where precision
//           meets innovation. Whether it’s revolutionizing mobility, engineering
//           sustainable solutions, or harnessing the power of technology, we help
//           industries move faster, work smarter, and build for the future.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
//           {services.map((service) => (
//             <div
//               key={service.id}
//               className={cn(
//                 "rounded-xl overflow-hidden relative cursor-pointer transition-all duration-500 ease-in-out",
//                 service.bgColor === "bg-[#E5EEF6]"
//                   ? "bg-[#5B5B5B]" // Update to match theme
//                   : service.bgColor === "bg-black"
//                   ? "bg-[#0A1E5C]" // Adjust to darker theme, close to #5B5B5B
//                   : "bg-[#0A1E5C]", // Default to match theme
//                 service.textColor === "text-gray-800"
//                   ? "text-white" // Update text color for consistency
//                   : "text-white",
//                 activeCard === service.id ? "md:col-span-6" : "md:col-span-3"
//               )}
//               onClick={() => setActiveCard(service.id)}
//             >
//               <div
//                 className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
//                 style={{
//                   backgroundImage: `url(${service.image})`,
//                   opacity: activeCard === service.id ? 0 : 1,
//                 }}
//               />
//               <div
//                 className={cn(
//                   "absolute inset-0 transition-opacity duration-500",
//                   "bg-gradient-to-b from-transparent to-[#5B5B5B] opacity-70"
//                 )}
//               />
//               <div className="relative h-full p-8 flex flex-col justify-between min-h-[400px]">
//                 <div>
//                   <h2 className="text-3xl font-bold mb-4 text-[#0098AF] drop-shadow-sm">
//                     {service.title}
//                   </h2>
//                   <p
//                     className={cn(
//                       "text-lg transition-all duration-500 ease-in-out",
//                       activeCard === service.id ? "opacity-90" : "opacity-0 h-0"
//                     )}
//                   >
//                     {activeCard === service.id
//                       ? service.fullDescription
//                       : service.shortDescription}
//                   </p>
//                 </div>
//                 <div className="flex justify-end mt-4">
//                   <Button
//                     variant="secondary"
//                     className="bg-[#0098AF] hover:bg-white text-white hover:text-black rounded-sm px-6 transition-transform duration-300"
//                   >
//                     Read More
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Randomly Positioned Decorative Elements (Minimalist Approach)
//         <motion.div
//           variants={fadeIn}
//           initial="hidden"
//           whileInView="visible"
//           className="absolute top-[15%] left-[10%] w-4 h-4 bg-[#0098AF] opacity-50 rounded-full"
//         />

//         <motion.div
//           variants={fadeIn}
//           initial="hidden"
//           whileInView="visible"
//           className="absolute top-[60%] left-[25%] w-6 h-6 bg-[#0098AF] opacity-30 rounded-full blur-sm"
//         />
//       </div>
//     </section>
//   );
// }

// */
// "use client";

// // Services section with expandable cards
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import Link from "next/link";
// import { SERVICES, SERVICES_SECTION } from "@/constants/home/services";
// import { motion } from "framer-motion";

// export default function ServicesSection() {
//   const [activeCard, setActiveCard] = useState<number>(1); // Default to Mobility

//   return (
//     <section className="w-full py-12 sm:py-16 lg:py-24 relative">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#003C46] mb-4 drop-shadow-md">
//           {SERVICES_SECTION.TITLE}
//         </h1>
//         <p className="text-base leading-relaxed text-gray-600 mb-8">
//           {SERVICES_SECTION.DESCRIPTION}
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
//           {SERVICES.map((service) => (
//             <div
//               key={service.id}
//               className={cn(
//                 "rounded-xl overflow-hidden relative cursor-pointer transition-all duration-500 ease-in-out",
//                 service.bgColor,
//                 service.textColor,
//                 activeCard === service.id ? "md:col-span-6" : "md:col-span-3"
//               )}
//               onMouseEnter={() => setActiveCard(service.id)}
//             >
//               <div
//                 className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
//                 style={{
//                   backgroundImage: `url(${service.image})`,
//                   opacity: activeCard === service.id ? 0 : 1,
//                 }}
//               />
//               <div
//                 className={cn(
//                   "absolute inset-0 transition-opacity duration-500",
//                   service.id === 2
//                     ? "bg-gradient-to-b from-transparent to-[#000000] opacity-90"
//                     : "bg-gradient-to-b from-transparent to-[#000000]/70 opacity-70"
//                 )}
//               />
//               <div className="relative h-full p-8 flex flex-col justify-between min-h-[400px]">
//                 <div>
//                   <h2 className="text-3xl font-bold mb-4 text-white drop-shadow-md">
//                     {service.title}
//                   </h2>
//                   <p
//                     className={cn(
//                       "text-lg transition-all duration-500 ease-in-out",
//                       activeCard === service.id ? "opacity-90" : "opacity-0 h-0"
//                     )}
//                   >
//                     {activeCard === service.id
//                       ? service.fullDescription
//                       : service.shortDescription}
//                   </p>
//                 </div>
//                 <div className="flex justify-end mt-4">
//                   <Link href={service.href}>
//                     <Button
//                       variant="secondary"
//                       className="bg-[#0098AF] hover:bg-[#007B8F] text-white rounded-sm px-6 transition-transform duration-300"
//                     >
//                       Read More
//                     </Button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.15 }}
//           transition={{
//             delay: 1,
//             duration: 1,
//             repeat: Infinity,
//             repeatType: "reverse",
//           }}
//           className="absolute top-1/3 left-16 w-5 h-5 bg-[#0098AF] opacity-30 rounded-full -z-10"
//         />
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { SERVICE_CARDS } from "@/constants/home/services";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
// import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

const ServiceShowcase = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <section className="w-full py-12 bg-gradient-to-br from-[#E6F0F5]/50 to-white">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className=" mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003C46] mb-4">
            Our Services
          </h2>
          <p className="text-xs sm:text-sm lg:text-lg leading-relaxed text-gray-600">
          Driving innovation and efficiency through advanced engineering solutions, optimizing products and processes for maximum performance.          </p>
        </div>

        {/* Cards Grid */}
        <div className="relative h-[600px] md:h-[500px] mx-auto max-w-7xl">
          {/* Background grid pattern */}
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-4">
            {[1, 2, 3, 4].map((index) => (
              <div
                key={`grid-${index}`}
                className="relative rounded-lg bg-gray-100"
              />
            ))}
          </div>

          {/* Actual cards with interactions */}
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-4">
            {SERVICE_CARDS.map((service, index) => (
              <AnimatePresence key={service.id}>
                {expandedCard === service.id ? (
                  <motion.div
                    className="absolute inset-0 z-30"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="h-full overflow-hidden bg-white border-none shadow-xl">
                      {/* Expanded card view with image */}
                      <div className="relative h-full">
                        <div className="absolute inset-0 overflow-hidden">
                          <Image
                            src={service.image}
                            alt={service.title}
                            width={600}
                            height={600}
                            className="w-full h-full object-cover opacity-15 scale-105 transform transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-[#003C46]/95 to-[#0098af]/90"></div>
                        </div>

                        <motion.div
                          className="relative h-full flex flex-col p-8 text-white z-10"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        >
                          <div className="absolute top-4 right-4 z-40">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 text-white"
                              onClick={() => setExpandedCard(null)}
                            >
                              ✕
                            </Button>
                          </div>

                          <div className="flex flex-col h-full">
                            <div className="mb-6">
                              <div className="flex items-center gap-3 mb-4">
                                {service.icon && (
                                  <div className="text-4xl text-[#00b4d8]">
                                    {service.icon}
                                  </div>
                                )}
                                <h3 className="text-3xl font-bold">
                                  {service.title}
                                </h3>
                              </div>
                              <div className="h-1 w-16 bg-[#00b4d8] mb-6"></div>
                            </div>

                            <p className="text-lg mb-6 leading-relaxed flex-grow">
                              {service.description}
                            </p>

                            {service.features && (
                              <ul className="mb-8 space-y-2">
                                {service.features?.map((feature, i) => (
                                  <motion.li
                                    key={i}
                                    className="flex items-start"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                      duration: 0.3,
                                      delay: 0.2 + i * 0.1,
                                    }}
                                  >
                                    <span className="text-[#00b4d8] mr-2">
                                      •
                                    </span>
                                    <span>{feature}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            )}

                            <Button
                              className="bg-[#00b4d8] hover:bg-[#0098af] text-white self-start mt-auto transition-all duration-300 hover:translate-x-1"
                              onClick={() =>
                                (window.location.href = service.link || "#")
                              }
                            >
                              Learn More
                            </Button>
                          </div>
                        </motion.div>
                      </div>
                    </Card>
                  </motion.div>
                ) : (
                  <motion.div
                    className={cn(
                      "col-span-1 row-span-1",
                      expandedCard !== null && "opacity-40 pointer-events-none"
                    )}
                    style={{
                      gridColumn: `${(index % 2) + 1} / span 1`,
                      gridRow: `${Math.floor(index / 2) + 1} / span 1`,
                    }}
                    layoutId={`card-container-${service.id}`}
                  >
                    <Card
                      className={cn(
                        "h-full overflow-hidden cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg",
                        "group relative flex flex-col"
                      )}
                      onClick={() => setExpandedCard(service.id)}
                    >
                      {/* Card with hover effects and image */}
                      <div className="absolute inset-0 overflow-hidden">
                        <div className="aspect-w-16 aspect-h-9 h-full">
                          <Image
                            src={service.image}
                            alt={service.title}
                            width={100}
                            height={100}
                            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-[#003C46]/40 to-[#003C46]/80 opacity-90 group-hover:opacity-75 transition-opacity duration-300"></div>
                      </div>

                      {/* Card Content */}
                      <div className="relative z-10 flex flex-col h-full p-6 text-white">
                        <div className="mb-auto">
                          {/* <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0098af]/20 text-white text-2xl mb-4 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                            {service.icon}
                          </div> */}
                          <h3 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-[#00b4d8] transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-sm text-white/80 line-clamp-2 mb-4 transition-all duration-300">
                            {service.shortDescription}
                          </p>
                        </div>

                        <div className="mt-auto">
                          <div className="h-0.5 w-8 bg-[#00b4d8] group-hover:w-16 transition-all duration-300 mb-2"></div>
                          <p className="text-sm text-white/70 font-medium">
                            Click to explore
                          </p>
                        </div>
                      </div>

                      {/* Hover effect border */}
                      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#00b4d8]/30 rounded-lg transition-all duration-300"></div>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceShowcase;
