import { motion, Variants } from "framer-motion";
import { FOOTER_CONSTANTS } from "../../constants/footer/constants";
import { useIsMobile } from "../../hooks/use-mobile";
import Image from "next/image";

export default function CompanyInfo() {
  const { DESCRIPTION, iamge } = FOOTER_CONSTANTS.COMPANY;
  const isMobile = useIsMobile();

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const Container = isMobile ? "div" : motion.div;

  return (
    <Container
      {...(!isMobile && {
        variants: containerVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-50px" },
      })}
      className="space-y-6"
    >
      {/* Company Logo */}
      <motion.div
        variants={!isMobile ? itemVariants : undefined}
        className="flex items-center justify-center lg:justify-start"
      >
        <div className="relative">
          <Image
            src={iamge}
            alt="Cognition IES Logo"
            width={380}
            height={80}
            className="filter brightness-110"
            priority
          />
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#99D5DF]/20 to-[#0098AF]/20 blur-xl -z-10 opacity-50" />
        </div>
      </motion.div>

      {/* Company Description */}
      <motion.div
        variants={!isMobile ? itemVariants : undefined}
        className="max-w-3xl lg:max-w-2xl"
      >

        <p className="text-[#E6F0F5]/80  text-sm sm:text-base leading-relaxed font-light">
          {DESCRIPTION}
        </p>
      </motion.div>

      {/* Decorative Elements */}
      {!isMobile && (
        <motion.div
          variants={itemVariants}
          className="flex items-center space-x-4"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60%" }}
            transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
            className="h-0.5 bg-gradient-to-r from-[#99D5DF] via-[#0098AF] to-transparent rounded-full"
          />
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-[#99D5DF] rounded-full opacity-60" />
            <div className="w-2 h-2 bg-[#0098AF] rounded-full opacity-40" />
            <div className="w-2 h-2 bg-[#007B8F] rounded-full opacity-20" />
          </div>
        </motion.div>
      )}

    </Container>
  );
}
