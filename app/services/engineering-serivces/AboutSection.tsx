"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import aboutImage from "@/constants/images/hero/build-operate.png";

export const AboutSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-16 sm:py-20 lg:py-16 overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, hsl(196, 100%, 98%), hsla(196, 100%, 98%, 0.05), hsla(185, 100%, 34%, 0.05))", // from-background via-muted/5 to-primary/5
      }}
    >
      {/* Layered background elements */}
      {/* <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(135deg, hsl(185, 100%, 34%), hsl(185, 100%, 28%))",
        }}
      />
      <div
        className="absolute top-0 left-1/4 w-1/3 h-full opacity-5 transform -rotate-12"
        style={{
          backgroundImage:
            "linear-gradient(135deg, hsl(185, 100%, 28%), hsl(185, 100%, 28%))",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-1/4 h-2/3 opacity-10 transform rotate-6"
        style={{
          backgroundImage:
            "linear-gradient(135deg, hsl(185, 100%, 34%), hsl(185, 100%, 28%))",
        }}
      /> */}
      <div className="relative z-10 container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Image Column - Asymmetrically positioned */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 lg:col-start-1"
          >
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, hsl(185, 100%, 34%), hsl(185, 100%, 28%))", // --gradient-primary
                }}
              />
              <Image
                src={aboutImage}
                alt="Engineering team collaboration"
                className="relative rounded-2xl w-full h-96 object-cover"
                style={{
                  boxShadow: "0 10px 40px -10px hsla(185, 100%, 34%, 0.15)", // --shadow-elegant
                }}
                width={480} 
                height={384} 
              />

              {/* Floating Stats Cards */}
              <div
                className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6"
                style={{
                  boxShadow: "0 20px 60px -10px hsla(185, 100%, 34%, 0.25)", // --shadow-hover
                }}
              >
                <div className="text-center">
                  <div
                    className="text-3xl font-bold"
                    style={{ color: "hsl(185, 100%, 34%)" }} // text-primary
                  >
                    15+
                  </div>
                  <div
                    className="text-sm"
                    style={{ color: "hsl(184, 31%, 36%)" }} // text-muted-foreground
                  >
                    Years Experiencd
                  </div>
                </div>
              </div>

              <div
                className="absolute -top-6 -left-6 rounded-2xl p-4"
                style={{
                  backgroundColor: "hsl(185, 100%, 34%)", // bg-primary
                  color: "hsl(0, 0%, 100%)", // text-white
                  boxShadow: "0 4px 20px -2px hsla(185, 100%, 34%, 0.08)", // --shadow-card
                }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-xs opacity-90">Projects Delivered</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 lg:col-start-7 space-y-8"
          >
            <div className="space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl lg:text-5xl font-bold leading-tight"
                style={{ color: "hsl(184, 31%, 36%)" }} // text-foreground
              >
                Engineering Excellence That
                <span
                  className="block text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, hsl(185, 100%, 34%), hsl(185, 100%, 28%))", // --gradient-primary
                  }}
                >
                  Drives Industry
                </span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="space-y-6 text-lg leading-relaxed"
                style={{ color: "hsl(184, 31%, 36%)" }} // text-muted-foreground
              >
                <p>
                  Our comprehensive engineering services combine cutting-edge
                  technology with deep industry expertise to deliver innovative
                  solutions that transform complex challenges into competitive
                  advantages. We specialize in both plant engineering and
                  product development, ensuring seamless integration across all
                  phases of your project lifecycle.
                </p>

                <p>
                  From initial concept through final implementation, our
                  multidisciplinary team leverages advanced CAE tools,
                  simulation technologies, and proven methodologies to optimize
                  performance, enhance safety, and drive sustainability.
                  We&apos;re committed to delivering engineering excellence that
                  exceeds expectations and creates lasting value.
                </p>
              </motion.div>

              {/* Key Metrics */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
