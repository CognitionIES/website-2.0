"use client";

import React, { forwardRef, useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import BulletPointGray from "@/constants/images/Bullet_Points/gray.png";
import BulletPointBlue from "@/constants/images/Bullet_Points/bullet_point_blue_1.png";
import { useIsMobile } from "@/hooks/use-mobile"; // Adjust path as needed
import { ChevronDown, ChevronUp } from "lucide-react"; // Import icons for expand/collapse

interface BulletPoint {
  mainTopic: string;
  subPoints: string[];
}

interface HorizontalScrollSectionProps {
  index: number;
  title: string;
  bulletPoints: BulletPoint[];
  imageUrl: string;
  id?: string;
  columns?: 3 | 4;
}

export const HorizontalScrollSection = forwardRef<
  HTMLDivElement,
  HorizontalScrollSectionProps
>(
  (
    {
      index,
      title,
      bulletPoints = [],
      imageUrl,
      id,
      columns = 4,
    }: HorizontalScrollSectionProps,
    ref
  ) => {
    const shouldReduceMotion = useReducedMotion();
    const [inViewRef, inView] = useInView({
      threshold: 0.2,
      triggerOnce: false,
    });
    const [bulletHeight, setBulletHeight] = useState(0);
    const bulletContainerRef = useRef<HTMLDivElement>(null);
    const isMobile = useIsMobile();
    const [expandedGroups, setExpandedGroups] = useState<boolean[]>(
      Array(bulletPoints.length).fill(false)
    );

    // Toggle expand/collapse for each bullet point group
    const toggleGroup = (groupIdx: number) => {
      setExpandedGroups((prev) =>
        prev.map((expanded, idx) => (idx === groupIdx ? !expanded : expanded))
      );
    };

    // Measure bullet points height
    useEffect(() => {
      const updateHeight = () => {
        if (bulletContainerRef.current) {
          setBulletHeight(bulletContainerRef.current.offsetHeight);
        }
      };

      updateHeight();
      window.addEventListener("resize", updateHeight);
      return () => window.removeEventListener("resize", updateHeight);
    }, [bulletPoints, expandedGroups]); // Recompute height when expanded state changes

    // Animation variants
    const containerVariants = {
      hidden: { opacity: 0, x: 30 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      },
    };

    const itemVariants = {
      hidden: { opacity: 0, x: 30 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" },
      },
    };

    const imageVariants = {
      hidden: { opacity: 0, x: 30 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: "easeOut" },
      },
      hover: {
        scale: shouldReduceMotion ? 1 : 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      },
    };

    const columnVariants = {
      hidden: { opacity: 0, x: 15 },
      visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
          duration: shouldReduceMotion ? 0 : 0.4,
          ease: "easeOut",
          delay: shouldReduceMotion ? 0 : i * 0.1,
        },
      }),
    };

    const bulletVariants = {
      rest: { x: 0, color: "#6B7280" },
      hover: {
        x: shouldReduceMotion ? 0 : 5,
        color: "#000000",
        transition: { type: "spring", stiffness: 400, damping: 20 },
      },
    };

    const expandVariants = {
      collapsed: { height: 0, opacity: 0 },
      expanded: { height: "auto", opacity: 1 },
      transition: { duration: shouldReduceMotion ? 0 : 0.3, ease: "easeInOut" },
    };

    const setRefs = (node: HTMLDivElement) => {
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
      inViewRef(node);
    };

    const columnGroups: BulletPoint[] = Array(columns).fill({
      mainTopic: "",
      subPoints: [],
    });
    bulletPoints.forEach((point, idx) => {
      if (idx < columns) {
        columnGroups[idx] = point;
      } else {
        columnGroups[columns - 1].subPoints = [
          ...columnGroups[columns - 1].subPoints,
          ...point.subPoints,
        ];
      }
    });

    const isBlueBackground = index % 2 === 0;
    const bulletPointImage = isBlueBackground
      ? BulletPointBlue
      : BulletPointGray;

    const columnWidthClass = columns === 3 ? "lg:w-1/3" : "lg:w-1/4";

    if (isMobile) {
      return (
        <motion.section
          ref={setRefs}
          id={id}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative max-w-7xl mx-auto w-full flex flex-col justify-center py-14"
          role="region"
          aria-labelledby={`${id}-title`}
        >
          <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl  mx-2">
            <div className="space-y-8">
              <motion.h2
                id={`${id}-title`}
                className="text-2xl sm:text-3xl font-bold tracking-tight text-black"
                variants={itemVariants}
              >
                {title}
              </motion.h2>

              <motion.div
                ref={bulletContainerRef}
                className="space-y-6"
                variants={containerVariants}
              >
                {columnGroups.map((group, groupIdx) => (
                  <motion.div
                    key={groupIdx}
                    custom={groupIdx}
                    variants={columnVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="flex flex-col w-full"
                  >
                    {group.mainTopic && (
                      <motion.button
                        className="flex items-center justify-between w-full text-left uppercase font-semibold text-[#1F2937] pb-2 border-b border-[#0098af]/20 mb-3"
                        variants={itemVariants}
                        onClick={() => toggleGroup(groupIdx)}
                        aria-expanded={expandedGroups[groupIdx]}
                        aria-controls={`bullet-group-${id}-${groupIdx}`}
                      >
                        <span className="text-base sm:text-lg">
                          {group.mainTopic}
                        </span>
                        {expandedGroups[groupIdx] ? (
                          <ChevronUp className="w-5 h-5 text-[#1F2937]" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-[#1F2937]" />
                        )}
                      </motion.button>
                    )}
                    <motion.ul
                      id={`bullet-group-${id}-${groupIdx}`}
                      className="space-y-2"
                      variants={expandVariants}
                      initial="collapsed"
                      animate={
                        expandedGroups[groupIdx] || !group.mainTopic
                          ? "expanded"
                          : "collapsed"
                      }
                    >
                      {(group.subPoints || []).map((point, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start gap-2 group min-w-0 rounded-md transition-colors duration-200 active:bg-gray-100"
                          variants={bulletVariants}
                          initial="rest"
                          whileHover="hover"
                          whileTap={{ backgroundColor: "#F3F4F6" }}
                        >
                          <span className="mt-1 w-4 h-4 bg-gray-300 rounded-full inline-block flex-shrink-0 group-hover:bg-gray-400 group-active:bg-gray-400 transition-colors duration-200"></span>
                          <span className="text-sm sm:text-base text-black transition-colors leading-relaxed break-words">
                            {point}
                          </span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>
      );
    }

    // Desktop view (unchanged)
    return (
      <motion.section
        ref={setRefs}
        id={id}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative max-w-7xl mx-auto w-full flex flex-col justify-center py-14 lg:py-24"
        role="region"
        aria-labelledby={`${id}-title`}
      >
        <div
          className={`w-full h-[580px] max-w-7xl mx-auto px-6 py-4 rounded-xl transition-all duration-300 outline outline-1 outline-black shadow-md hover:shadow-lg flex flex-col ${
            isBlueBackground
              ? "bg-blue-400/5 dark:bg-blue-950/10 "
              : "bg-gray-400/10 dark:bg-gray-900/10"
          }`}
        >
          {/* Heading Section */}
          <motion.div className="text-left" variants={itemVariants}>
            <motion.h2
              id={`${id}-title`}
              className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-black"
              variants={itemVariants}
            >
              {title}
            </motion.h2>
          </motion.div>

          {/* Content Container */}
          <div className="flex flex-col flex-1 overflow-hidden">
            {/* Bullet Points Section */}
            <motion.div
              ref={bulletContainerRef}
              className="flex flex-col lg:flex-row gap-4"
              variants={containerVariants}
            >
              {columnGroups.map((group, groupIdx) => (
                <React.Fragment key={groupIdx}>
                  <motion.div
                    custom={groupIdx}
                    variants={columnVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className={`flex flex-col p-1 w-full ${columnWidthClass}`}
                  >
                    <motion.h3
                      className="text-base uppercase font-semibold text-[#1F2937] pb-2 border-b border-[#0098af]/20 mb-3"
                      variants={itemVariants}
                    >
                      {group.mainTopic}
                    </motion.h3>
                    <ul className="space-y-[10px]">
                      {(group.subPoints || []).map((point, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start gap-[6px]"
                          variants={bulletVariants}
                          initial="rest"
                          whileHover="hover"
                        >
                          <Image
                            src={bulletPointImage}
                            alt="Bullet point"
                            width={16}
                            height={14}
                            className="mt-[1px] flex-shrink-0"
                          />
                          <span className="text-sm text-black transition-colors">
                            {point}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                  {groupIdx < columns - 1 && (
                    <div className="hidden lg:block w-[1px] bg-gradient-to-b from-gray-200/50 via-gray-400/50 to-gray-200/50 dark:from-gray-700 dark:via-gray-400 dark:to-gray-700 self-stretch" />
                  )}
                </React.Fragment>
              ))}
            </motion.div>

            {/* Image Section */}
            <motion.div
              className="relative w-full mt-auto p-3"
              style={{ height: `calc(580px - ${bulletHeight}px - 4rem)` }}
              variants={imageVariants}
              whileHover="hover"
            >
              <div className="relative w-full h-full p-2">
                <Image
                  src={imageUrl}
                  alt={`Illustration for ${title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover rounded-xl transition-opacity duration-300 hover:opacity-95"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    transformOrigin: "center",
                  }}
                  priority={index === 0}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent rounded-xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    );
  }
);

HorizontalScrollSection.displayName = "HorizontalScrollSection";
