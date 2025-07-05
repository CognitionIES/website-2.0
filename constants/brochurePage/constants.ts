// constants/brochurePage/constants.js
import heroImage from "@/constants/images/brochure/hero.jpg";

export const BROCHURE_CONSTANTS = {
  BANNER_IMAGE: { heroImage },

  // Toggle options
  BROCHURE_TYPES: {
    product: {
      LABEL: "Product Brochure",
      VALUE: "product",
    },
    plant: {
      LABEL: "Plant Brochure",
      VALUE: "plant",
    },
  },

  // Left section content for Product and Plant
  LEFT_CONTENT: {
    product: {
      TITLE: "Unlock the Power of Intelligent Product Engineering",
      DESCRIPTION:
        "Our Product Design Services blend innovation with manufacturability to help you bring high-quality products to market faster, smarter, and more cost-effectively.",
      WHY_DOWNLOAD: [
        "Comprehensive Overview of our CAD/CAE capabilities, design workflows, and domain coverage",
        "Real-World Case Studies showcasing cost savings, timeline reductions, and client success",
        "Scalable Solutions from concept to production-ready design",
        "Tools & Platforms: CREO, SolidWorks, AutoCAD, Windchill, Inventor & more",
        "Industries Served: Heavy Equipment, Industrial Machinery, Solar, HVAC, Pumps & Valves, and more",
      ],
      UNIQUE_POINTS: [
        "Experienced Design Engineers with domain understanding",
        "Cost Reduction-Focused Approach using benchmarking & redesign",
        "Digital Collaboration Tools for seamless communication",
        "Quick Turnaround Times for fast-paced project needs",
        "Flexible Engagement Models: Hourly, Monthly, Project-Based",
      ],
    },
    plant: {
      TITLE: "Reimagine Your Plant with Digital Engineering Excellence",
      DESCRIPTION:
        "Cognition IES empowers industries with comprehensive Plant Engineering Services, blending design, automation, and digital tools to optimize operations, reduce downtime, and future-proof facilities.",
      WHY_DOWNLOAD: [
        "End-to-End Capabilities in layout design, utility planning, equipment detailing, and 3D modeling",
        "Digitization & Simulation Focus for predictive maintenance and virtual commissioning",
        "Industry Expertise in Chemical, Pharma, FMCG, Heavy Engineering, and Utilities",
        "Compliance-Ready Designs aligned with ISO, OSHA, and industry-specific norms",
        "CAD Tools Mastery: AutoCAD Plant 3D, Revit, EPLAN, Navisworks, SmartPlant & more",
      ],
      UNIQUE_POINTS: [
        "Cross-Disciplinary Engineering Expertise under one roof",
        "Digitalization-Driven Approach for operational visibility and risk reduction",
        "Seamless Coordination with Site Teams and vendors",
        "Compliance-Centric Design Models for smooth audits and certifications",
        "Customizable Engagement: Remote Support | Onsite Visits | Hybrid Collaboration",
      ],
    },
  },

  // Right section (form)
  RIGHT_CONTENT: {
    TITLE: "Download Brochure",
    PRIVACY_LINK: "/privacy-policy",
    CONSENT_TEXT:
      "I would like to receive communications from Cognition about its products, resources, services, events, webinars, marketing events etc.",
    COUNTRIES: [
      "United States",
      "United Kingdom",
      "Canada",
      "Germany",
      "France",
      "Japan",
      "Australia",
      "India",
    ],
  },

  // Industry options
  INDUSTRIES: [
    {
      category: "INDUSTRIAL PRODUCTS",
      subcategories: [
        "Building Technology & Smart Infrastructure",
        "Electrical Instrumentation & Controls",
        "Industrial Machinery",
        "Power & Utilities",
      ],
    },
    {
      category: "MEDICAL AND LIFE SCIENCE",
      subcategories: ["Medical Devices", "Biotechnology", "Pharmaceuticals"],
    },
    {
      category: "Plant Engineering",
      subcategories: [
        "Chemicals",
        "Customer Packaged Goods",
        "Discrete",
        "Oil & Gas",
      ],
    },
    {
      category: "Telecom & Hitech",
      subcategories: [
        "Consumer Electronics",
        "Media & Entertainment",
        "Metaverse",
        "Semiconductors",
        "Software Products & Platforms",
        "Telecom OEM's",
      ],
    },
    {
      category: "Transportation",
      subcategories: [
        "2/3 Wheelers & Powerpoint",
        "Aerospace & Defense",
        "Airline",
        "Automotive",
        "Commerical Vehicles",
        "Of-highway Vehicles & Equipment",
        "Railway",
        "UAV/UAM",
        "Others",
      ],
    },
  ],
};
