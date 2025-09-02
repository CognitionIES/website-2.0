import { motion } from "framer-motion";
import {
  Cog,
  Cpu,
  Zap,
  Shield,
  FlaskConical,
  Factory,
  Settings,
  Lightbulb,
} from "lucide-react";

const keyServices = [
  {
    title: "Process Design",
    description: "Advanced process engineering solutions",
    icon: <Cog className="h-6 w-6" />,
    category: "Plant Engineering",
  },
  {
    title: "Industrial Automation",
    description: "Smart automation systems",
    icon: <Cpu className="h-6 w-6" />,
    category: "Plant Engineering",
  },
  {
    title: "Mechanical Design",
    description: "Innovative product development",
    icon: <Settings className="h-6 w-6" />,
    category: "Product Engineering",
  },
  {
    title: "CAE & CFD Analysis",
    description: "Computational engineering analysis",
    icon: <FlaskConical className="h-6 w-6" />,
    category: "Product Engineering",
  },
  {
    title: "Electrical Systems",
    description: "Comprehensive electrical solutions",
    icon: <Zap className="h-6 w-6" />,
    category: "Both Domains",
  },
  {
    title: "Safety & Compliance",
    description: "Regulatory compliance solutions",
    icon: <Shield className="h-6 w-6" />,
    category: "Plant Engineering",
  },
  {
    title: "Prototyping",
    description: "Rapid prototyping services",
    icon: <Factory className="h-6 w-6" />,
    category: "Product Engineering",
  },
  {
    title: "Innovation Consulting",
    description: "Strategic engineering guidance",
    icon: <Lightbulb className="h-6 w-6" />,
    category: "Consulting",
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof keyServices)[0];
  index: number;
}) => {
  return (
    <motion.div
      className="flex-shrink-0 rounded-2xl p-6 mx-4 min-w-[280px]"
      style={{
        backgroundImage:
          "linear-gradient(145deg, hsl(0, 0%, 100%), hsl(196, 100%, 98%))",
        boxShadow: "0 4px 20px -2px hsla(185, 100%, 34%, 0.08)",
        border: "1px solid hsla(186, 67%, 85%, 0.5)",
      }}
      whileHover={{
        scale: 1.02,
        y: -2,
        boxShadow: "0 20px 60px -10px hsla(185, 100%, 34%, 0.25)",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <div
            className="p-3 rounded-xl"
            style={{
              backgroundColor: "hsla(185, 100%, 34%, 0.1)",
              color: "hsl(185, 100%, 34%)",
            }}
          >
            {service.icon}
          </div>
          <div className="flex-1">
            <h4
              className="text-lg font-semibold"
              style={{ color: "hsl(184, 31%, 36%)" }}
            >
              {service.title}
            </h4>
            <p
              className="text-sm font-medium"
              style={{ color: "hsla(185, 100%, 34%, 0.7)" }}
            >
              {service.category}
            </p>
          </div>
        </div>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "hsl(184, 31%, 36%)" }}
        >
          {service.description}
        </p>
      </div>
    </motion.div>
  );
};

export const ServicesIntro = () => {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, hsl(196, 100%, 98%), hsla(196, 100%, 98%, 0.1), hsla(185, 100%, 34%, 0.05))",
      }}
    >
      {/* Layered background elements */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(135deg, hsla(0, 0%, 100%, 1.00), hsla(15, 2%, 49%, 1.00))",
        }}
      />
      <div className="absolute top-1/3 left-0 w-1/2 h-1/3 opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-1/3 h-1/2 opacity-8 rounded-full blur-2xl" />

      <div className="relative z-10 container max-w-7xl mx-auto px-6">
        {/* Introduction Text */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} // Ensure animation runs only once
            transition={{ duration: 0.8 }}
            className="max-w-7xl text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#003C46] mb-4"
          >
            Engineering Excellence{" "}
            <span className="font-semibold bg-gradient-to-br from-[#003C46] to-[#1C7A8A] bg-clip-text text-transparent">
              Across Industries
            </span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} // Ensure animation runs only once
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-7xl space-y-2"
          >
            <p className="text-lg" style={{ color: "hsl(184, 31%, 36%)" }}>
              From complex plant infrastructure to innovative product
              development, we deliver comprehensive engineering solutions that
              drive efficiency, safety, and sustainability.
            </p>
            <p className="text-lg" style={{ color: "hsl(184, 31%, 36%)" }}>
              Our expertise spans mechanical, electrical, process, and embedded
              systems engineering, backed by cutting-edge tools and decades of
              industry experience.
            </p>
          </motion.div>
        </div>

        {/* Continuous Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex">
            <motion.div
              className="flex"
              animate={{
                x: [0, -2240], // Move across all cards
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {/* Triple the services for seamless infinite scroll */}
              {[...keyServices, ...keyServices, ...keyServices].map(
                (service, index) => (
                  <ServiceCard
                    key={index}
                    service={service}
                    index={index % keyServices.length}
                  />
                )
              )}
            </motion.div>
          </div>

          {/* Gradient Overlays for smooth fade effect */}
          <div
            className="absolute left-0 top-0 bottom-0 w-24 pointer-events-none z-10"
            style={{
              backgroundImage:
                "linear-gradient(to right, hsl(196, 100%, 98%), hsla(196, 100%, 98%, 0.8), transparent)",
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-24 pointer-events-none z-10"
            style={{
              backgroundImage:
                "linear-gradient(to left, hsl(196, 100%, 98%), hsla(196, 100%, 98%, 0.8), transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
};
