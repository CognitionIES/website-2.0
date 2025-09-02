import * as React from "react";
import { motion, Variants } from "framer-motion";
import { useIsMobile } from "../../hooks/use-mobile";
import { ExternalLink, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function UsefulLinks() {
  const isMobile = useIsMobile();

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const linkVariants: Variants = {
    rest: { x: 0 },
    hover: { x: 4 },
  };

  const Container = isMobile ? "div" : motion.div;

  const usefulLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Careers", href: "/careers" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "FAQs", href: "/faq" },
  ];

  const services = [
    { name: "Recruitment & Resourcing", href: "/services/recruitment-resourcing" },
    { name: "Build & Operate", href: "/services/build-operate" },
    { name: "SaaS Solutions", href: "/services/saas-solution/servicecpq" },
  ];

  return (
    <Container
      {...(!isMobile && {
        variants: containerVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-50px" },
      })}
      className="grid grid-cols-1 sm:grid-cols-2 "
    >
      {/* Quick Links Column */}
      <motion.div variants={!isMobile ? itemVariants : undefined}>
        <div className="mb-6">
          <h3 className="text-xl  font-semibold text-[#F5FDFF] ml-5 mb-2">
            Quick Links
          </h3>
        </div>

        <ul className="space-y-3">
          {usefulLinks.map((link) => (
            <motion.li
              key={link.name}
              variants={!isMobile ? itemVariants : undefined}
              whileHover="hover"
              initial="rest"
            >
              <Link
                href={link.href}
                className="group flex items-center text-[#E6F0F5]/70 hover:text-[#99D5DF] transition-all duration-300 text-sm"
              >
                <motion.div
                  variants={linkVariants}
                  className="flex items-center"
                >
                  <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="group-hover:font-medium transition-all text-base duration-300">
                    {link.name}
                  </span>
                </motion.div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Services Column */}
      <motion.div variants={!isMobile ? itemVariants : undefined}>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-[#F5FDFF] mb-2 ml-5">
            Our Services
          </h3>
        </div>

        <ul className="space-y-3">
          {services.map((service) => (
            <motion.li
              key={service.name}
              variants={!isMobile ? itemVariants : undefined}
              whileHover="hover"
              initial="rest"
            >
              <Link
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center text-[#E6F0F5]/70 hover:text-[#0098AF] transition-all duration-300 text-sm"
              >
                <motion.div
                  variants={linkVariants}
                  className="flex items-center"
                >
                  <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="group-hover:font-medium transition-all text-base duration-300">
                    {service.name}
                  </span>
                  <ExternalLink className="w-3 h-3 ml-2 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </Container>
  );
}
