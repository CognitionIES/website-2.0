import { motion } from "framer-motion";
import { useState } from "react";

const softwareLogos = [
  { name: "CATIA", logo: "🔧" },
  { name: "Siemens NX", logo: "⚙️" },
  { name: "SolidWorks", logo: "🛠️" },
  { name: "Ansys", logo: "📊" },
  { name: "Altair", logo: "🔬" },
  { name: "KiCad", logo: "⚡" },
  { name: "Altium Designer", logo: "💾" },
  { name: "MATLAB", logo: "📈" },
  { name: "AutoCAD", logo: "📐" },
  { name: "Inventor", logo: "🔩" },
  { name: "Fusion 360", logo: "🌐" },
  { name: "COMSOL", logo: "🧪" },
];

const LogoCard = ({
  software,
  index,
}: {
  software: { name: string; logo: string };
  index: number;
}) => {
  return (
    <motion.div
      className="flex-shrink-0 bg-white rounded-2xl p-6 mx-4"
      style={{
        boxShadow: "0 4px 20px -2px hsla(185, 100%, 34%, 0.08)", // --shadow-card
        border: "1px solid hsla(186, 67%, 85%, 0.5)", // border-border/50
      }}
      whileHover={{
        scale: 1.05,
        y: -5,
        boxShadow: "0 20px 60px -10px hsla(185, 100%, 34%, 0.25)", // --shadow-hover
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="flex flex-col items-center space-y-3 min-w-[120px]">
        <div className="text-4xl">{software.logo}</div>
        <h4
          className="text-sm font-semibold text-center"
          style={{ color: "hsl(184, 31%, 36%)" }} // text-foreground
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
          "linear-gradient(to bottom right, hsl(196, 100%, 98%), hsla(195, 17%, 86%, 0.10), hsla(185, 100%, 28%, 0.05))", // from-background via-muted/10 to-accent/5
      }}
    >
      {/* Layered background gradients */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(135deg, hsla(180, 8%, 91%, 1.00), hsl(185, 100%, 28%))", // --gradient-primary (fallback for bg-gradient-radial)
        }}
      />
      <div
        className="absolute top-1/4 left-0 w-1/2 h-1/2 opacity-5 rounded-full blur-3xl"
        style={{
          backgroundImage:
            "linear-gradient(135deg, hsl(185, 100%, 34%), hsl(185, 100%, 28%))", // --gradient-primary
        }}
      />
      <div
        className="absolute bottom-1/4 right-0 w-1/3 h-1/3 opacity-10 rounded-full blur-2xl"
        style={{
          backgroundImage:
            "linear-gradient(135deg, hsl(185, 100%, 28%), hsl(185, 100%, 28%))", // --gradient-accent
        }}
      />

      <div className="relative z-10 container max-w-7xl mx-auto px-6">
        <div className=" mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: "hsl(184, 31%, 36%)" }} // text-foreground
          >
            Advanced Software{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, hsl(185, 100%, 34%), hsl(185, 100%, 28%))", // --gradient-primary
              }}
            >
              & Tools
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-7xl mx-auto"
            style={{ color: "hsl(184, 31%, 36%)" }} // text-muted-foreground
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
              {/* Triple the logos for seamless infinite scroll */}
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
                "linear-gradient(to right, hsl(196, 100%, 98%), transparent)", // from-background to-transparent
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-32 pointer-events-none z-10"
            style={{
              backgroundImage:
                "linear-gradient(to left, hsl(196, 100%, 98%), transparent)", // from-background to-transparent
            }}
          />
        </div>
      </div>
    </section>
  );
};
