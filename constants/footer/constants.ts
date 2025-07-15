import logo from "@/constants/images/WEB-LOGO.png";
import { Variants } from "framer-motion";

// This file holds all constants for the footer component
export const FOOTER_CONSTANTS = {
  // Company Info
  COMPANY: {
    NAME: "COGNITION IES",
    DESCRIPTION:
      "At Cognition IES Pvt. Ltd., we specialize in delivering high-performance engineering and IT talent to meet the evolving needs of today’s industrial and digital enterprises.",
    iamge: logo,
  },

  // Useful Links
  USEFUL_LINKS: {
    TITLE: "Useful Links",
    ITEMS: [
      ["Projects", "/resources"],
      ["Careers", "/careers"],
      ["About Us", "/about"],
      ["FAQs", "/faq"],
    ],
  },

  // Socials
  SOCIALS: {
    TITLE: "Services",
    ITEMS: [["Product-Engineering", "/services/product-engineering"]],
  },

  // Contact Us
  CONTACT: {
    TITLE: "Contact Us",
    ITEMS: [
      ["Email", "mailto:info@cognitionies.com", "info@cognitionies.com"],
      //["Phone", "tel:+1800 800 9000", "+1 1800 800 9000"],
    ],
  },

  // Animation Variants
  ANIMATIONS: {
    FADE_IN: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      },
    } as Variants,
  },
};
