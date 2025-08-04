// Constants for the About page to keep content and assets modular and reusable
import HeroImage from "@/constants/images/about/about-hero.jpg";
import OurJourneyImage from "@/constants/images/about/about-our-journey.jpg";
import flexScaleImage from "@/constants/images/about/flex-scale.jpg";
import lifeCycleImage from "@/constants/images/about/lifecyle-mastery.jpg";
import qualityCoreImage from "@/constants/images/about/quality-core.jpg";
import coInnovativeImage from "@/constants/images/about/coinnovative.jpg";
import missionVisionImage from "@/constants/images/about/missionvision.jpg";
import statsImage from "@/constants/images/about/stats.jpg";
export const ABOUT_CONSTANTS = {
  // Image URLs
  IMAGES: {
    HERO_IMAGE: { HeroImage },
    STORY_IMAGE: { OurJourneyImage },
    MISSION_VISION_BG: missionVisionImage,
    TECH_PATTERN: statsImage,
    KEY_VALUES: [
      coInnovativeImage,
      lifeCycleImage,
      qualityCoreImage,
      flexScaleImage,
    ],
  },

  // Text Content
  TEXT: {
    COMPANY_NAME: "Cognition IES",
    HERO_SUBTITLE:
      "Engineering the future with innovation, agility, and a human-first approach since 2023.",
    STORY_TITLE: "Our Journey",
    STORY_P1:
      "Founded in 2005, Cognition IES was built on a bold vision: to redefine how talent powers businesses. From India to the world, we've grown into a trusted talent solutions provider—specializing in staffing, recruitment, workforce management, and digital hiring solutions for industries like IT, Engineering, Manufacturing, GCCs and BFSI.",
    STORY_P2:
      "Whether you're building agile teams, hiring for long-term roles, or scaling operations, we connect you with the right people—backed by smart technology and deep domain expertise.",
    MISSION_TITLE: "Our Mission",
    MISSION_DESC:
      "To deliver flexible, people-first hiring solutions that help businesses grow and talent thrive.",
    VISION_TITLE: "Our Vision",
    VISION_DESC:
      "To be the most agile and trusted partner in workforce transformation—bridging people, processes, and performance globally.",
    VALUES_TITLE: "What Drives Us",
    CTA_TITLE: "Shape the Future with Us",
    CTA_DESC: "Let’s turn your hiring needs into long-term success.",
  },

  // Animation Variants
  ANIMATIONS: {
    STAGGER_CHILDREN: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.3, delayChildren: 0.2 },
      },
    },
    SCALE_HOVER: {
      rest: { scale: 1 },
      hover: { scale: 1.03, transition: { duration: 0.3 } },
    },
  },

  // Stats and Values
  STATS: [
    { stat: "150+", label: "Placements Done" },
    { stat: "15+", label: "Active Clients" },
    { stat: "98%", label: "Client Retention" },
    { stat: "< 3 Weeks ", label: " Avg Time-to-Fill" },
  ],
  KEY_VALUES: [
    { title: "Co-Innovation", desc: "Co-creating patents with you." },
    { title: "Lifecycle Mastery", desc: "From vision to victory." },
    { title: "Quality Core", desc: "Precision every time." },
    { title: "Flex & Scale", desc: "Adapting to your pace." },
  ],
};
