"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import blueBulletImage from "@/constants/images/Bullet_Points/bullet_point_blue_1.png";
import BulletPointGray from "@/constants/images/Bullet_Points/gray.png";

interface ScrollSectionProps {
  index: number; 
  title: string; 
  description: string;
  imageUrl: string; 
  bulletPoints: string[]; 
  logos: { src: string; alt: string }[]; 
}

export function ScrollSection({
  index,
  title,
  description,
  imageUrl,
  bulletPoints = [],
  logos,
}: ScrollSectionProps) {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const isEven = index % 2 === 0;
  const bulletImage = isEven ? blueBulletImage : BulletPointGray;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: isEven ? -30 : 30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="relative max-w-7xl mx-auto px-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
        <motion.div
          className={`space-y-6 ${
            isEven
              ? "md:order-1 md:pr-8 md:col-span-8"
              : "md:order-2 md:pl-8 md:col-span-8"
          }`}
          variants={itemVariants}
        >
          <div className="space-y-3">
            <motion.h2
              className="text-3xl md:text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 uppercase"
              variants={itemVariants}
            >
              {title}
            </motion.h2>
            <motion.div
              className="h-1 w-32 md:w-40 bg-gradient-to-r from-primary to-transparent rounded-full"
              variants={itemVariants}
            />
          </div>

          <motion.p
            className="text-lg text-muted-foreground/90 leading-relaxed uppercase"
            variants={itemVariants}
          >
            {description}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-x-8 gap-y-3"
            variants={containerVariants}
          >
            {bulletPoints.map((point, idx) => (
              <motion.div
                key={idx}
                className="flex items-start space-x-3 group flex-1 min-w-[250px]"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <Image
                  src={bulletImage}
                  alt="bullet point"
                  width={16}
                  height={16}
                  className="mt-1.5 flex-shrink-1 transition-transform group-hover:scale-125"
                />
                <p className="text-base md:text-sm text-muted-foreground/90 group-hover:text-foreground transition-colors uppercase">
                  {point}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="bg-white shadow-lg rounded-xl p-6"
            variants={itemVariants}
          >
            <div className="grid grid-cols-7 md:grid-cols-7 gap-4 md:gap-3">
              {logos?.map((logo, idx) => (
                <motion.div
                  key={idx}
                  className="aspect-[3/2] relative group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  variants={itemVariants}
                >
                  <div className="absolute inset-0 bg-foreground/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain p-2 transition-all duration-300 group-hover:brightness-110"
                    sizes="(max-width: 768px) 60px, 80px"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className={`relative h-[550px] w-[350px] ${
            isEven
              ? "md:order-2 md:col-span-4 md:ml-auto"
              : "md:order-1 md:col-span-4 md:mr-auto"
          }`}
          variants={itemVariants}
        >
          <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent z-10" />
            <motion.div
              className="relative w-full h-full transform-gpu"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}