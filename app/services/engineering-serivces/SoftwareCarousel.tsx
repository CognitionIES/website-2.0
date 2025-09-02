import { motion } from "framer-motion";
import { useState } from "react";

// Import logo images
import CATIA from "@/constants/images/software-logo/DSCatia_logo.png";
import SiemensNX from "@/constants/images/software-logo/SiemensNX_Logo.png";
import SolidWorks from "@/constants/images/software-logo/SolidEdge_logo.jpg";
import Ansys from "@/constants/images/software-logo/Ansys_logo.png";
import Altair from "@/constants/images/software-logo/altairHyperWorks_logo-bg-removed.png";
import KiCad from "@/constants/images/software-logo/KiCad_logo.png";
import AltiumDesigner from "@/constants/images/software-logo/AltiumDesigner_logo.jpg";
import AutoCAD from "@/constants/images/software-logo/AutoCad_Logo.png";
import Inventor from "@/constants/images/software-logo/autoDeskInventor_logoo.png";
import Fusion360 from "@/constants/images/software-logo/festoFluidSim_logo.png";
import COMSOL from "@/constants/images/software-logo/comsolMultiphysics_logo.jpg";
import Image from "next/image";

const softwareLogos = [
  { name: "CATIA", logo: CATIA },
  { name: "Siemens NX", logo: SiemensNX },
  { name: "SolidWorks", logo: SolidWorks },
  { name: "Ansys", logo: Ansys },
  { name: "Altair", logo: Altair },
  { name: "KiCad", logo: KiCad },
  { name: "Altium Designer", logo: AltiumDesigner },
  { name: "AutoCAD", logo: AutoCAD },
  { name: "Inventor", logo: Inventor },
  { name: "Festor FLuid Sim", logo: Fusion360 },
  { name: "COMSOL", logo: COMSOL },
];

import type { StaticImageData } from "next/image";

const LogoCard = ({
  software,
  index,
}: {
  software: { name: string; logo: StaticImageData };
  index: number;
}) => {
  return (
    <motion.div
      className="flex-shrink-0 bg-white rounded-2xl p-6 mx-4"
      style={{
        boxShadow: "0 4px 20px -2px hsla(185, 100%, 34%, 0.08)",
        border: "1px solid hsla(186, 67%, 85%, 0.5)",
      }}
      whileHover={{
        scale: 1.05,
        y: -5,
        boxShadow: "0 20px 60px -10px hsla(185, 100%, 34%, 0.25)",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="flex flex-col items-center space-y-3 min-w-[120px]">
        <Image
          src={software.logo}
          alt={`${software.name} logo`}
          className="w-16 h-16 object-contain"
        />
        <h4
          className="text-sm font-semibold text-center"
          style={{ color: "hsl(184, 31%, 36%)" }}
        >
          {software.name}
        </h4>
      </div>
    </motion.div>
  );
};

export const SoftwareCarousel = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className="relative py-16 sm:py-20 lg:py-16 overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, hsl(196, 100%, 98%), hsla(195, 17%, 86%, 0.10), hsla(185, 100%, 28%, 0.05))",
      }}
    >
      {/* Layered background gradients */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(135deg, hsla(180, 8%, 91%, 1.00), hsl(185, 100%, 28%))",
        }}
      />
      <div
        className="absolute top-1/4 left-0 w-1/2 h-1/2 opacity-5 rounded-full blur-3xl"
        style={{
          backgroundImage:
            "linear-gradient(135deg, hsl(185, 100%, 34%), hsl(185, 100%, 28%))",
        }}
      />
      <div
        className="absolute bottom-1/4 right-0 w-1/3 h-1/3 opacity-10 rounded-full blur-2xl"
        style={{
          backgroundImage:
            "linear-gradient(135deg, hsl(185, 100%, 28%), hsl(185, 100%, 28%))",
        }}
      />

      <div className="relative z-10 container max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{ color: "hsl(184, 31%, 36%)" }}
          >
            Advanced Software{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, hsl(185, 100%, 34%), hsl(185, 100%, 28%))",
              }}
            >
              & Tools
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg max-w-7xl mx-auto"
            style={{ color: "hsl(184, 31%, 36%)" }}
          >
            We leverage industry-leading software and cutting-edge tools to
            deliver exceptional engineering solutions
          </motion.p>
        </div>

        {/* Infinite Scrolling Carousel */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex">
            <motion.div
              className="flex"
              animate={{
                x: isHovered ? undefined : [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {[...softwareLogos, ...softwareLogos, ...softwareLogos].map(
                (software, index) => (
                  <LogoCard
                    key={index}
                    software={software}
                    index={index % softwareLogos.length}
                  />
                )
              )}
            </motion.div>
          </div>

          {/* Gradient Overlays for smooth fade effect */}
          <div
            className="absolute left-0 top-0 bottom-0 w-32 pointer-events-none z-10"
            style={{
              backgroundImage:
                "linear-gradient(to right, hsl(196, 100%, 98%), transparent)",
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-32 pointer-events-none z-10"
            style={{
              backgroundImage:
                "linear-gradient(to left, hsl(196, 100%, 98%), transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
};
