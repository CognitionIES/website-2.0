import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ABOUT_CONSTANTS } from "@/constants/aboutPage/constants";
import { useIsMobile } from "@/hooks/use-mobile";

export default function CTASection() {
  const { ANIMATIONS } = ABOUT_CONSTANTS;
  const isMobile = useIsMobile();

  return (
    <section className="py-12 sm:py-8 lg:py-12 bg-gradient-to-r from-[#0098AF] to-[#5B5B5B] text-white relative">
      <div className="max-w-[95%] sm:max-w-4xl md:max-w-7xl mx-auto px-4 sm:px-6 text-center items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={ANIMATIONS.STAGGER_CHILDREN}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-tight">
            Ready to Build Your
            <span className="text-[#F5FDFF]"> Dream Team?</span>{" "}
          </h2>
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            style={{ transformOrigin: "center" }}
            className="absolute top-24 left-[54%] -translate-x-[10%] w-[16%] h-0.5 bg-white opacity-50"
          />
          <div className="text-center">
            <p className="text-base sm:text-lg font-light text-center max-w-2xl mx-auto mb-6 sm:mb-8 relative">
              Partner with us for direct hire solutions that deliver results.
              Let&apos;s find the perfect talent to drive your business forward.
            </p>
          </div>
          <div
            className={`flex ${
              isMobile ? "flex-col space-y-4" : "justify-center space-x-6"
            }`}
          >
            <Link href="/contact">
              <Button
                variant="default"
                className="bg-white text-[#5B5B5B] hover:bg-gray-100 px-8 py-3 sm:px-10 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg relative overflow-hidden"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
