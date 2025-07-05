"use client";

// This component shows employee testimonials with cards
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import testimonials from "@/constants/testimonials";
import { CAREERS_CONSTANTS } from "@/constants/careersPage/constants";

export default function TestimonialsSection() {
  const { TITLE } = CAREERS_CONSTANTS.TESTIMONIALS;
  const { STAGGER_CHILDREN, CARD_HOVER } = CAREERS_CONSTANTS.ANIMATIONS;

  return (
    <section className=" bg-secondary/30">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={STAGGER_CHILDREN}
        className="py-20 bg-gradient-to-b from-[#0098AF]/5 to-gray-50 relative"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section title */}
          <div className="relative mb-12">
            <h2 className="text-3xl sm:text-4xl text-center lg:text-5xl font-bold text-[#003C46] relative drop-shadow-md">
              {TITLE}
            </h2>
          </div>
          {/* Testimonials cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={CARD_HOVER}
                initial="rest"
                whileHover="hover"
                className="bg-white p-6 rounded-lg border border-[#0098AF]/10 shadow-sm cursor-pointer"
              >
                <Card className="border-0">
                  <CardHeader className="flex flex-row gap-4 items-center p-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full w-14 h-14 object-cover shadow-sm"
                    />
                    <div>
                      <CardTitle className="text-xl font-semibold text-[#5B5B5B] hover:text-[#0098AF] transition-colors duration-200">
                        {testimonial.name}
                      </CardTitle>
                      <CardDescription className="text-sm font-light text-gray-600">
                        {testimonial.role}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0 pt-4">
                    <p className="text-base font-light text-gray-600 italic leading-relaxed line-clamp-2">
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}