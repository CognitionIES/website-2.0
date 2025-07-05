import processImage from "@/constants/images/plant/horizontal/01.jpg";
import mechImage from "@/constants/images/plant/horizontal/02.jpg";
import pipingImage from "@/constants/images/plant/horizontal/03.jpg";
import pipeStressImage from "@/constants/images/plant/horizontal/04.jpg";
import civilImage from "@/constants/images/plant/horizontal/05.jpg";
import StructuralImage from "@/constants/images/plant/horizontal/06.png";
import elecImage from "@/constants/images/plant/horizontal/07.jpg";
import InstrumentationImage from "@/constants/images/plant/horizontal/08.jpg";
import ModularImage from "@/constants/images/plant/horizontal/09.jpg";
import ReverseImage from "@/constants/images/plant/horizontal/10.jpg";
import ProcurementImage from "@/constants/images/plant/horizontal/11.jpg";
import heroImage from "@/constants/images/plant/hero.jpg";

// This file holds all constants for the plant engineering page
import { Building2, Workflow, Box, Truck } from "lucide-react";
import aboutImage from "@/constants/images/Plant-engineering/about.jpg";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ComponentType } from "react";

interface Service {
  columns?: number;
  bulletPoints: {
    mainTopic: string;
    subPoints: string[];
  }[];
  icon: ComponentType<{ className?: string }> | IconProp; // Support both component and FontAwesome icon
  title: string;
  description: string;
  mainTopic: string[];
  subPoints: string[];
  image: string;
  alt: string;
  href: string;
  id?: string;
}
import {
  faBridge,
  faBuildingShield,
  faChartArea,
  faGaugeHigh,
  faGears,
  faPlugCircleBolt,
} from "@fortawesome/free-solid-svg-icons";
import { IconSettingsDollar } from "@tabler/icons-react";

export const PLANT_ENGINEERING_CONSTANTS = {
  // Hero Section
  HERO: {
    IMAGE: heroImage,
    TITLE: "Plant Engineering services",
    SUBTITLE: "Innovative engineering solutions for complex challenges",
  },

  // About Section
  ABOUT: {
    TITLE: "Plant Engineering Solutions",
    DESCRIPTION_1:
      "Efficiency, safety, and sustainability form the core of our Plant Engineering Services. We support industries in optimizing their facilities by offering engineering expertise that improves processes, infrastructure, and operations. Whether it's greenfield or brownfield projects, our goal is to help businesses achieve operational excellence by integrating intelligent planning, robust design, and compliance with modern industry standards. We empower plant systems to run smoother, safer, and smarter.",
    DESCRIPTION_2:
      "Our team brings industry-specific knowledge and a systems-driven mindset, enabling seamless integration of engineering solutions that enhance productivity while minimizing downtime and costs.", // Placeholder from your code
    IMAGE: aboutImage,
  },

  // Services Section
  SERVICES: {
    TITLE: " Plant Engineering Services",
    SUBTITLE:
      "Comprehensive engineering solutions tailored to your specific needs",
    ITEMS: [
      //Process & Safety Engineering
      {
        icon: faBuildingShield,
        title: "Process & Safety Engineering",
        description:
          "Comprehensive engineering solutions to optimize plant processes, ensure safety compliance, and enhance operational efficiency through advanced design and risk assessment.",
        image: processImage,
        alt: "Process safety equipment",
        href: "/services/plant-engineering/details#section-1",
        bulletPoints: [
          {
            mainTopic: "Pre-Bid Engineering / FEED",
            subPoints: [
              "Preliminary P&ID",
              "Hydraulic Analysis",
              "Mass & Energy Balance",
              "Utility Consumption Summary",
              "Pipeline Sizing & Line List Development",
              "Piping Service Index",
              "Preliminary Thermal Design for HE",
            ],
          },

          {
            mainTopic: "Process Design & Optimization",
            subPoints: [
              "Pressure Safety Valve (PSV) Sizing",
              "HE Design & Thermal Rating",
              "Efficiency Assessment",
              "Process Optimization",
              "Utility Consumption Optimization",
              "Distribution Network Hydraulics and Surge Analysis",
            ],
          },
          {
            mainTopic: "Revalidation & Retrofitting ",
            subPoints: [
              "Process Equipment Reassessment",
              "Hydraulics Pipeline Review",
              "Hydraulics Pump System Re-evaluation",
            ],
          },
          {
            mainTopic: "Safety & Risk Assessment ",
            subPoints: ["HAZOP", "HAZID", "SIL", "QRA"],
          },
        ],
      }, //Piping Engineering
      {
        icon: Workflow,
        title: "Piping Engineering",
        description:
          "Designing and managing efficient piping systems to ensure safe and reliable transport of fluids and gases across the plant with advanced analysis and material specifications.",
        image: pipingImage,
        alt: "Piping engineering layout",
        href: "/services/plant-engineering/details#section-2",
        bulletPoints: [
          {
            mainTopic: "Piping Layout & Design",
            subPoints: [
              "Overall & Unit Plot Plans",

              "Equipment Layout & GA Drawings",
              "Piping Layout & GA Drawings",
              "Piping Isometric Drawings",
              "Line List / Line Schedule",
            ],
          },
          {
            mainTopic: "Piping Layout & Design",
            subPoints: [
              "Piping Support Design & Load Calculations",
              "Nozzle Orientation, Spool, Special Supports & Platform Design Drawings",
            ],
          },
          {
            mainTopic: "Material & Specification MGMT.",
            subPoints: [
              "Piping MTO & BOM",
              "Insulation, Painting, & Material Spec.",
              "Specialty Items List",
              "Valve & Piping Special Component Data Sheets",
            ],
          },
          {
            mainTopic: "Analysis & Modeling",
            subPoints: [
              "Piping Stress Analysis",
              "3D Modeling & Simulation",
              "As Built Documentation & Updates",
            ],
          },
        ],
      },
      //Piping Stress Analysis -  3 cols
      {
        icon: faChartArea,
        title: "Piping Stress Analysis",
        description:
          "Comprehensive analysis of piping systems to ensure structural integrity, safety, and reliability under diverse operating conditions through advanced stress evaluations and calculations.",
        image: pipeStressImage,
        alt: "Piping stress analysis dashboard",
        href: "/services/plant-engineering/details#section-3",
        bulletPoints: [
          {
            mainTopic: "Types of Piping Stress Analysis",
            subPoints: [
              "Finite Element Analysis (FEA)",
              "Surge & Slug Flow Analysis",
              "Fatigue & Creep Assessment",
              "Displacement & Deflection Studies",
              "Occasional Load Analysis (Wind & Seismic)",
            ],
          },
          {
            mainTopic: "Types of Piping Stress Analysis",
            subPoints: [
              "Sustained / Longitudinal Stress Evaluation",
              "Piping Flexibility & Support Optimization",
              "Elastic & Plastic Stress Analysis",
            ],
          },
          {
            mainTopic: "Engineering Calculations & Validations",
            subPoints: [
              "Trunnion Support Load Check",
              "Upheaval & Buckling Analysis",
              "Weld Strength Evaluation",
              "U-Bolt Load Calculations",
              "Collapse & Structural Stability ",
              "Flange Integrity Analysis (NC-3685.3 & API Standards)",
            ],
          },
        ],
        columns: 3,
      },
      //Mechanical Engineering
      {
        icon: faGears,
        title: "Mechanical Design Engineering",
        description:
          "Engineering and maintaining high-performance mechanical systems to ensure plant reliability, efficiency, and safety through detailed design and analysis.",
        image: mechImage,
        alt: "Mechanical engineering tools",
        href: "/services/plant-engineering/details#section-4",
        bulletPoints: [
          {
            mainTopic: "Equipment Drawings & Detailing",
            subPoints: [
              "Equipment List & Mechanical Datasheets",
              "Mechanical Schematic Diagrams",
              "Equipment Layout & Arrangement Drawing",

              "GA Drawings for Equipment",
              "Nozzle & Manhole Detail Drawings",
              "Equipment & Pipe Support Drawing",
            ],
          },
          {
            mainTopic: "Equipment Drawings & Detailing",
            subPoints: [
              "Ladder & Platform Support Drawings",
              "Tray Support & Welded Internal Details",
              "Tube Bundle Detailing for Shell & Tube HE",
              "3D Modeling & Visualization",
              "Fatigue & Failure Analysis (FFA)",
              "MTO & BOM",
            ],
          },
          {
            mainTopic: "Static and Rotating Equipment",
            subPoints: [
              "Pressure Vessels & Heat Exchangers",
              // "Static & Rotating Equipment",
              "Columns & Towers",
              "Storage Tanks",
              "Dryers & Cooling Towers",
              "Pumps & Pumping Systems",

              "Air & Gas Compressors System",
            ],
          },
          {
            mainTopic: "HVAC System Design",
            subPoints: [
              "HVAC System Design Basis",
              "Heat Load Calculation",
              "Ducting Layout & Routing",
              "Duct Fabrication Drawings",
            ],
          },
        ],
      },
      //Electrical Engineering
      {
        icon: faPlugCircleBolt,
        title: "Electrical Design Engineering",
        description:
          "Implementing reliable electrical systems to power plant operations efficiently and safely.",
        image: elecImage,
        alt: "Electrical engineering panel",
        href: "/services/plant-engineering/details#section-5",
        bulletPoints: [
          {
            mainTopic: "Basic Engineering",
            subPoints: [
              "Electrical Design Basis",
              "Preliminary Load List & Equipment Sizing",
              "Preliminary Single Line Diagram (SLD)",
              "Main Equipment & Switchgear Layouts",
            ],
          },
          {
            mainTopic: "Detailed Engineering",
            subPoints: [
              "Electrical Equipment Spec. & Datasheet",
              "Final Single Line Diagram (SLD)",
              "Electrical Equipment & Components Layouts",
              "Earthing System Design & Layout",
              "Detailed Load List & Feeder Lists for Switchgear, MCCs, DB",
            ],
          },
          {
            mainTopic: "Detailed Engineering ",
            subPoints: [
              "HV/LV Power Cable Sizing & Routing",
              "Plant intercommunication System",
              "Power & Control Cable Listings",
              "Electrical Bill of Materials (BOM)",
              "Cable, Illumination & Lightning Protection Layout ",
            ],
          },
          {
            mainTopic: "Detailed Engineering ",
            subPoints: [
              "Erection Tender Preparation",
              "As Built Drawings & Documentation",
              "Relay Setting Schedules & Protection Coordination Chart",
            ],
          },
        ],
      },
      // Reverse Engineering - 3 cols
      {
        icon: IconSettingsDollar,
        title: "Reverse Engineering",
        description:
          "Analyzing existing systems to recreate or improve designs for enhanced performance.",
        image: ReverseImage,
        alt: "Reverse engineering process",
        href: "/services/plant-engineering/details#section-6",
        bulletPoints: [
          {
            mainTopic: "Advanced Scanning & Data Capture",
            subPoints: [
              "High Precision Laser Scanning for Existing Plants & Equipment",
              "Creating Accurate 3D Laser Models from  Point Cloud Data",
              "Supported File Formats: .pptx, .pcg, .xyz, .dwg, .dgn, .rvt, .fls, .ifd, .lfm, .rcp. ",
            ],
          },
          {
            mainTopic: "Deliverables & Final Output",
            subPoints: [
              "Extraction & Submission of Detailed Drawings & Reports",
              "P&ID/Engineering Data As-Built Verification ",
              "Integration of Reverse Engineered Models into Existing Design Workflows",
            ],
          },
          {
            mainTopic: "3D Modeling & Data Translation",
            subPoints: [
              "Generating Dumb Models from Laser Scans",
              "Transfrming Dumb Models into Intelligent Models",
              "Converting As-Built Data into Millimeter Accurate 3D CAD Models",
            ],
          },
        ],
        columns: 3,
      }, //Instrumentation Engineering
      {
        icon: faGaugeHigh,
        title: "Instrumentation Engineering",
        description:
          "Integrating advanced instrumentation for precise monitoring and control of plant processes.",
        image: InstrumentationImage,
        alt: "Instrumentation control system",
        href: "/services/plant-engineering/details#section-7",
        bulletPoints: [
          {
            mainTopic: "Basic Engineering",
            subPoints: [
              "Instrumentation Design Basis",
              "I/O List",
              "Instrument Cable Block Diagram",
              "Preliminary Instrument List / Index",
              "Instrument Process Datasheets",
              "Process Optimization",
            ],
          },
          {
            mainTopic: "Detailed Engineering",
            subPoints: [
              "Final Instrumentation Design Basis",
              "Instrument Location Layout",
              "Instrument Index & Specification Datasheets",
              "DCS Control Room Layout",
              "I/O List & Cause-Effect Diagram/List",
            ],
          },
          {
            mainTopic: "Detailed Engineering",
            subPoints: [
              "Cable Tray Routing & Layout",
              "Instrument Installation Details",
              "Junction Box Grouping",
              "Instrument Cable Schedule and Wiring Diagram",
            ],
          },
          {
            mainTopic: "Detailed Engineering ",
            subPoints: [
              "Instrument Termination Drawings",
              "Cable Tray & Fittings MTO",
              "Hook-Up Drawings & Erection Hardware MTO",
              "As-Built Drawings & Documentation",
            ],
          },
        ],
      },
      //Civil Engineering - 3 cols
      {
        icon: Building2,
        title: "Civil Engineering",
        description:
          "Providing foundational civil engineering solutions for durable and safe plant infrastructure.",
        image: civilImage,
        alt: "Civil engineering construction",
        href: "/services/plant-engineering/details#section-8",
        bulletPoints: [
          {
            mainTopic: "Site Development & Infrastructure",
            subPoints: [
              "Site Preparation, Grading, and Fencing",
              "Underground Utilities, Valve Pits, Duct Banks, and Culverts",
              "Drainage, Roads, and Paving Layouts",
            ],
          },
          {
            mainTopic: "Foundation Engineering",
            subPoints: [
              "Equipment Foundations Static & Dynamic Analysis",
              "Foundation Layouts & Design Reports",
            ],
          },
          {
            mainTopic: "Industrial & Commercial Building Design",
            subPoints: [
              "Schedule of Quantities (SOQ)",
              "Admin Buildings, Canteens, Utility Blocks, and Non-Plant Structures",
            ],
          },
        ],
        columns: 3,
      },
      //Structural Engineering
      {
        icon: faBridge,
        title: "Structural Engineering",
        description:
          "Designing strong, stable structures to support plant operations and withstand environmental challenges.",
        image: StructuralImage,
        alt: "Civil engineering construction",
        href: "/services/plant-engineering/details#section-9",
        bulletPoints: [
          {
            mainTopic: "Specialized Structural Engineering",
            subPoints: [
              "Hot Oil Heater Supporting Structures",
              "Waste Heat Recovery Units (WHRU)",
              "Reactor Structures & FPSO Modules",
              "Technological Structures & Heavy Industrial Frameworks",
            ],
          },
          {
            mainTopic: "Structural Stress Analysis",
            subPoints: [
              "Barge Transport & Offshore Load Handling",
              "Dropped Object Impact Studies",
              "Transit & Survival Load Assessments",
              "Fire, Blast, and Fatigue Conditions",
              "In-Place Analysisㅤㅤㅤㅤㅤㅤㅤㅤ (Operating, Damage, Extreme Scenarios)",
            ],
          },
          {
            mainTopic: "Structural Detailing",
            subPoints: [
              "GA, Erection, and Fabrication Drawings",
              "Pipe Supports, Pipe Racks, Shelters, Platforms, Crossovers, and Sleepers",
            ],
          },
          {
            mainTopic: "Transportation & Lifting",
            subPoints: [
              "Lifting Analysis, Reports & Drawings",
              "Structural Integrity Assessments ",
            ],
          },
        ],
      },
      //modular Engineering - 3 cols
      {
        icon: Box,
        title: "Modular Package",
        description:
          "Delivering pre-engineered modular solutions for faster installation and operational flexibility.",
        image: ModularImage,
        alt: "Modular plant package",
        href: "/services/plant-engineering/details#section-10",
        bulletPoints: [
          {
            mainTopic: "Modular Skid Design & Engineering",
            subPoints: [
              "3D Modeling of Skid Package Design",
              "Fabrication Isometric Drawings",
              "Monorail Calculations",
              "MTO & BOM Preparation",
              "Weight & COG Calculation for Lifting Arrangement",
              "Structural Steel Calculationsㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ (Including Anchor/Foundation Loads)",
            ],
          },
          {
            mainTopic: "Modular Skid Design & Engineering",
            subPoints: [
              "2D General Arrangement Drawings",
              "Detailed Structural Fabrication Drawings",
              "Lifting Lug Design & Details",
              "Piping & Structural Stress Analysis Reports",
              "Lifting Arrangement Drawings and Calculations",
              "E&I Skid Engineeringㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ (Cable Tray, Junction Box, Small-Bore Containment, etc.)",
            ],
          },
          {
            mainTopic: "Process Skid Packages we handle",
            subPoints: [
              "Custody Transfer Skids",
              "Heat Exchanger Skids",
              "High-Pressure Systems",
              "Fuel Oil Unloading & Transfer Skids",
              "Corrosion Inhibitor Skids",
              "Chemical Process Skids (Metering, Injection, Dosing, Feeding, Transport, Blending, Extraction & Filtration)",
            ],
          },
        ],
        columns: 3,
      },
      // procurement - 3 cols
      {
        icon: Truck,
        title: "Procurement Support",
        description:
          "Streamlining procurement processes to source quality materials and equipment on time and within budget.",
        image: ProcurementImage,
        alt: "Procurement planning meeting",
        href: "/services/plant-engineering/details#section-11",
        bulletPoints: [
          {
            mainTopic: "Inquiry & Vendor Management",
            subPoints: [
              "Preparation of Inquiry Specifications for Equipment, E&I, Piping, C&S",
              "Floating Inquiries & Managing Vendor Communication",
              "Development of Approved Vendor Lists",
            ],
          },
          {
            mainTopic: "Vendor Evaluation & Coordination",
            subPoints: [
              "Evaluation of Vendor Offers & Comparison Reports",
              "Preparation of Technical Queries (TQ) & Clarifications",
              "Vendor Coordination & Follow-Ups",
            ],
          },
          {
            mainTopic: " Review & Implementation",
            subPoints: [
              "Review & Approval of Vendor Drawings",
              "Integration & Implementation of Vendor Data into Engineering",
            ],
          },
        ],
        columns: 3,
      },
    ] as unknown as Service[],
  },

  // FAQ Section
  FAQ: {
    TITLE: "Frequently Asked Questions",
    SUBTITLE: "Find answers to common questions about our engineering services",
    ITEMS: [
      {
        question: "What is plant engineering, and why is it important?",
        answer:
          "Plant engineering covers everything needed to design, build, and maintain industrial plants. It ensures smooth operations, safety compliance, and efficiency, helping businesses reduce downtime and operational costs.",
      },
      {
        question: "What industries do you serve?",
        answer:
          "We work across industries like automotive, aerospace, heavy machinery, energy, healthcare, and manufacturing. Our services allows us to create tailored solutions for various plant operations.",
      },
      {
        question: "Can you help upgrade an existing plant?",
        answer:
          "Yes! We specialize in modernizing plants by upgrading machinery, automation systems, energy management, and safety protocols to meet current industry standards.",
      },
      {
        question: "Do you offer digital solutions for plant management?",
        answer:
          "Yes! Our Digitalization & Industry 4.0 services use IoT, AI, and automation to enhance real-time monitoring, predictive maintenance, and process optimization for seamless plant operations.",
      },
      {
        question:
          "What is your approach to project management in plant engineering?",
        answer:
          "We manage projects end-to-end, covering planning, design, execution, and final testing. Our structured approach ensures timely completion while staying within budget and meeting all requirements.",
      },
      {
        question: "Can you customize your solutions for our plant’s needs?",
        answer:
          "Absolutely! We provide tailored plant engineering solutions to align with your specific requirements, ensuring maximum efficiency, safety, and cost-effectiveness.",
      },
    ],
  },

  // Animation Variants
  ANIMATIONS: {
    FADE_IN: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 },
    },
  },
};
