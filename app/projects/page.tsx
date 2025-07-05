"use client"; // Mark as Client Component to allow event handlers or interactivity

import React from "react";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Hero from "./hero";
import Footer from "@/components/footer";
// import { useIsMobile } from "@/hooks/use-mobile";
// import { StaticImageData } from "next/image";
// import digitalImage from "@/constants/images/home/our-recent-projects/digitalization.jpg";
// import pcmImage2 from "@/constants/images/home/our-recent-projects/pcm.jpg";
import AboutSection from "./about";
import CTASection from "@/components/CTA";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";

// type Project = {
//   id: string;
//   title: string;
//   category: string;
//   description: string;
//   image: string | StaticImageData;
//   href: string;
// };

// const projects: Project[] = [
//   {
//     id: "project-1",
//     title: "Digitalization",
//     category: "Digital Transformation",
//     description:
//       "Comprehensive Digital Transformation of a Manufacturing Plant through 3D Scanning, Digital Twin, and Real-Time Data Integration to Improve Efficiency and Accuracy.",
//     image: digitalImage,
//     href: "/projects/digitalization",
//   },
//   {
//     id: "project-2",
//     title: "Log Splitter Cost Optimization & Benchmarking",
//     category: "Financial Optimization",
//     description:
//       "Conducted a detailed cost and function analysis of the Log Splitter, identifying cost-saving opportunities through competitive benchmarking and design optimization.",
//     image: pcmImage2,
//     href: "/projects/product-cost-management",
//   },
// ];

const Projects: React.FC = () => {
  // const [isInView, setIsInView] = useState(false);
  //const sectionRef = useRef<HTMLElement>(null);
  // const isMobile = useIsMobile();

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       setIsInView(entry.isIntersecting);
  //     },
  //     { threshold: 0.2 }
  //   );

  //   if (sectionRef.current) {
  //     observer.observe(sectionRef.current);
  //   }

  //   return () => {
  //     if (sectionRef.current) {
  //       observer.unobserve(sectionRef.current);
  //     }
  //   };
  // }, []);

  // // Animation variants
  // const cardVariants = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: (index: number) => ({
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       delay: 0.1 * index,
  //       duration: 0.5,
  //       ease: "easeOut",
  //     },
  //   }),
  // };

  return (
    <div className="min-h-screen bg-gray-50">
      <MegaMenu />
      <section className="relative  overflow-hidden">
        <Hero />
      </section>
      <AboutSection />

      <CTASection />
      <Footer />
    </div>
  );
};

export default Projects;
