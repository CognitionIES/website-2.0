import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle,
  Users,
  Target,
  TrendingUp,
  Award,
  Star,
} from "lucide-react";

const bulletPoints = [
  {
    id: 1,
    title: "End-to-End Accountability",
    description:
      "Complete ownership from concept to deployment, ensuring seamless execution at every stage with dedicated project management.",
    icon: CheckCircle,
    highlight: "Complete ownership",
    position: "top-left",
  },
  {
    id: 2,
    title: "Flexible Engagement Models",
    description:
      "Adaptable partnership structures that scale with your needs, from dedicated teams to project-based collaborations.",
    icon: Target,
    highlight: "Adaptable partnership",
    position: "top-right",
  },
  {
    id: 3,
    title: "Dedicated Expert Teams",
    description:
      "Hand-picked specialists committed exclusively to your project's success, with deep domain expertise and proven track records.",
    icon: Users,
    highlight: "Hand-picked specialists",
    position: "middle-left",
  },
  {
    id: 4,
    title: "Proven Track Record",
    description:
      "Consistently delivering excellence across industries with measurable results, backed by testimonials and case studies.",
    icon: Award,
    highlight: "Measurable results",
    position: "middle-right",
  },
  {
    id: 5,
    title: "Scalable Expertise",
    description:
      "Successfully built and managed a 40+ member team for a global client, delivering complex projects with speed and precision while maintaining quality standards.",
    icon: TrendingUp,
    highlight: "40+ member team",
    position: "bottom-center",
    featured: true,
  },
];

interface BulletPoint {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  highlight: string;
  position: string;
  featured?: boolean;
}

interface BulletCardProps {
  bullet: BulletPoint;
  index: number;
}

const BulletCard = ({ bullet, index }: BulletCardProps) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  const IconComponent = bullet.icon;

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const getCardClasses = () => {
    const baseClasses =
      "group relative overflow-hidden rounded-2xl bg-white border border-gray-200/50 shadow-lg";
    const hoverClasses =
      "hover:shadow-xl hover:shadow-[#0098af]/5 hover:-translate-y-1 transition-all duration-300";

    switch (bullet.position) {
      case "top-left":
        return `${baseClasses} ${hoverClasses}`;
      case "top-right":
        return `${baseClasses} ${hoverClasses} md:translate-y-4`;
      case "middle-left":
        return `${baseClasses} ${hoverClasses} md:-translate-y-2`;
      case "middle-right":
        return `${baseClasses} ${hoverClasses} md:translate-y-2`;
      case "bottom-center":
        return `${baseClasses} ${hoverClasses} md:col-span-2 lg:col-span-1 border-[#0098af]/20 bg-gradient-to-br from-white to-slate-50/30`;
      default:
        return `${baseClasses} ${hoverClasses}`;
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={getCardClasses()}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{
        y: -4,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0098af]/3 via-transparent to-[#5b5b5b]/3 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Featured badge */}
      {bullet.featured && (
        <div className="absolute top-4 right-4 px-3 py-1 bg-[#0098af] text-white text-xs font-medium rounded-full flex items-center gap-1">
          <Star className="h-3 w-3 fill-current" />
          Featured
        </div>
      )}

      {/* Content */}
      <div className={`relative z-10 ${bullet.featured ? "p-8" : "p-6"}`}>
        {/* Icon and number */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div
              className={`flex items-center justify-center rounded-xl transition-all duration-300 ${
                bullet.featured
                  ? "h-14 w-14 bg-gradient-to-br from-[#0098af] to-[#5b5b5b] text-white"
                  : "h-12 w-12 bg-gray-100 text-[#5b5b5b] group-hover:bg-gradient-to-br group-hover:from-[#0098af] group-hover:to-[#5b5b5b] group-hover:text-white"
              }`}
            >
              <IconComponent
                className={bullet.featured ? "h-7 w-7" : "h-6 w-6"}
              />
            </div>

            <div className="text-4xl font-light text-gray-300 group-hover:text-[#0098af] transition-colors duration-300">
              {String(bullet.id).padStart(2, "0")}
            </div>
          </div>

          <ArrowUpRight className="h-5 w-5 text-gray-400 group-hover:text-[#0098af] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>

        {/* Title */}
        <h3
          className={`font-semibold text-gray-900 mb-3 leading-tight ${
            bullet.featured ? "text-2xl" : "text-xl"
          }`}
        >
          {bullet.title}
        </h3>

        {/* Highlight */}
        <div className="inline-block px-3 py-1 bg-gradient-to-r from-[#0098af] to-[#5b5b5b] text-white text-sm font-medium rounded-full mb-4">
          {bullet.highlight}
        </div>

        {/* Description */}
        <p
          className={`text-gray-600 leading-relaxed ${
            bullet.featured ? "text-base" : "text-sm"
          }`}
        >
          {bullet.description}
        </p>

        {/* Accent line */}
        <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-[#0098af]/30 to-transparent transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
      </div>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const trustMetrics = [
    { value: "150+", label: "Projects Delivered", icon: CheckCircle },
    { value: "98%", label: "Client Satisfaction", icon: Star },
    { value: "5+", label: "Years Experience", icon: Award },
    { value: "40+", label: "Team Members", icon: Users },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <section
        ref={sectionRef}
        className="py-24 bg-gradient-to-br from-white via-gray-50/30 to-white relative overflow-hidden"
      >
        {/* Subtle background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#0098af]/2 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#5b5b5b]/2 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div
            className="mb-20 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="mb-6 text-sm font-semibold text-[#0098af] tracking-wider uppercase flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div
                className="w-8 h-px bg-gradient-to-r from-[#0098af] to-[#5b5b5b]"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
              Why Choose Us
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              A Partner You Can{" "}
              <span className="block font-semibold bg-gradient-to-r from-[#0098af] to-[#5b5b5b] bg-clip-text text-transparent">
                Rely On
              </span>
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 leading-relaxed max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              When you choose us, you gain a committed partner who blends
              engineering expertise with the flexibility and scale needed to
              deliver your most ambitious projects. From building dedicated
              teams to managing every stage end-to-end, we&apos;re here to help you
              succeed.
            </motion.p>
          </motion.div>

          {/* Professional Grid */}
          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {/* Top row */}
            <div className="md:col-span-1">
              <BulletCard bullet={bulletPoints[0]} index={0} />
            </div>
            <div className="md:col-span-1">
              <BulletCard bullet={bulletPoints[1]} index={1} />
            </div>

            {/* Middle row */}
            <div className="md:col-span-1 lg:row-start-2">
              <BulletCard bullet={bulletPoints[2]} index={2} />
            </div>
            <div className="md:col-span-1 lg:row-start-2">
              <BulletCard bullet={bulletPoints[3]} index={3} />
            </div>

            {/* Featured card */}
            <div className="md:col-span-2 lg:col-span-1 lg:row-start-1 lg:row-end-3 lg:self-center">
              <BulletCard bullet={bulletPoints[4]} index={4} />
            </div>
          </div>

          {/* Professional Trust Indicators */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="inline-flex items-center flex-wrap justify-center gap-8 px-8 py-6 bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl shadow-lg">
              {trustMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className="text-center group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <metric.icon className="h-4 w-4 text-[#0098af] mr-2" />
                    <div className="text-3xl font-bold bg-gradient-to-r from-[#0098af] to-[#000000]/60 bg-clip-text text-transparent">
                      {metric.value}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 group-hover:text-[#0098af] transition-colors">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
