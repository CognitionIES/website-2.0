  import logos1 from "../constants/images/logos1.png";

  const servicesSections = {
      mechanical: {
        title: "Mechanical Design Services",
        description: "From product ideation to performance-driven engineering, our mechanical design services bring concepts to life. We integrate innovation with precision to deliver optimized, manufacturable, and cost-effective solutions tailored to your product’s lifecycle.",
        imageUrl: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=2070&auto=format&fit=crop",
        bulletPoints: [
          "Product Design and Development",
          "Value Engineering and Value Analysis",
          "Product Life Cycle Management",
          "2D/3D CAD Drafting and Modeling",
          "Reverse Engineering",
          "Engineering Change Management",
          "CDR, DFM, DFA, DFS, DFR, DFMEA, DVP",
          "Prototyping and Design Validation",
          "Digital & Physical Competitive Benchmarking",
          "Design Optimization (weight/cost Reduction)"
        ],
        logos:  [
          { src: logos1 || "/fallback-image.png", alt: "CATIA" },
           { src: "https://upload.wikimedia.org/wikipedia/en/3/3c/Siemens_NX_Logo.png", alt: "Siemens NX" },
           { src: "https://upload.wikimedia.org/wikipedia/en/d/d3/SolidWorks_Logo.png", alt: "SolidWorks" },
           { src: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Solid_Edge_Logo.png", alt: "Solid Edge" }
        ]
      },
    analysis: {
      title: "CAE/CFD",
      description: "Advanced engineering analysis services using state-of-the-art simulation tools and methodologies to optimize design performance and reliability.",
      imageUrl: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?q=80&w=2070&auto=format&fit=crop",
      bulletPoints: [
        "Structural Analysis (FEA)",
        "Thermal and Fluid Flow Analysis (CFD)",
        "Fatigue and Durability Analysis",
        "Crash and Impact Simulations",
        "Optimization Studies",
        "Failure Analysis and Root Cause Determination",
        "Noise, Vibration, and Harshness (NVH) Analysis",
        "Multi-physics Simulations",
        "Mold Flow and Casting Simulations",
        "CAE/CFD Solutions"
      ],
      logos: [
        { src: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Ansys_logo.png", alt: "ANSYS" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/6/68/Altair_Engineering_logo.svg", alt: "Altair" }
      ]
    },
    electrical: {
      title: "Electrical Engineering",
      description: "Innovative electrical engineering solutions combining advanced circuit design with modern power systems and control technologies.",
      imageUrl: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=2070&auto=format&fit=crop",
      bulletPoints: [
        "Circuit Design and Simulation",
        "PCB Design and Development",
        "Harness and Wiring Design",
        "Electrical Control Panel Design",
        "System Integration and Testing",
        "Renewable Energy Integration",
        "Energy Efficiency Design",
        "Battery Management Systems (BMS)",
        "Power Distribution Systems",
        "Control System Design"
      ],
      logos: [
        { src: "https://upload.wikimedia.org/wikipedia/commons/5/59/KiCad-Logo.svg", alt: "KiCad" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Altium_Designer_logo.png", alt: "Altium" }
      ]
    },
    hydraulic: {
      title: "Hydraulic Engineering",
      description: "Expert hydraulic system design and optimization services ensuring efficient and reliable fluid power solutions.",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
      bulletPoints: [
        "Hydraulic System Design and Optimization",
        "Hydraulic Circuit Modeling and Simulation",
        "Hydraulic System Testing and Validation",
        "Hydraulic System Retrofitting",
        "Selection of Components (Pumps, Valves, Actuators)",
        "Performance Optimization",
        "Failure Analysis",
        "Environmental Compliance",
        "System Integration",
        "Maintenance Planning"
      ],
      logos: [
        { src: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Ansys_logo.png", alt: "ANSYS" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/6/68/Altair_Engineering_logo.svg", alt: "Altair" }
      ]
    },
    prototyping: {
      title: "Prototyping and 3D Printing",
      description: "Rapid prototyping and additive manufacturing services to bring concepts to life quickly and efficiently.",
      imageUrl: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2070&auto=format&fit=crop",
      bulletPoints: [
        "Rapid Prototyping (3D Printing, CNC Machining)",
        "Concept Validation Models",
        "Functional Prototypes for Testing",
        "Additive Manufacturing for Complex Geometries",
        "Material Selection and Testing",
        "Support for Iterative Design Improvements",
        "Low-volume Production Using 3D Printing",
        "Assembly Testing and Design Validation",
        "Prototype Optimization",
        "Quality Control and Inspection"
      ],
      logos: [
        { src: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Ansys_logo.png", alt: "ANSYS" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/6/68/Altair_Engineering_logo.svg", alt: "Altair" }
      ]
    },
    embedded: {
      title: "Embedded Systems Engineering",
      description: "Advanced embedded systems solutions integrating hardware and software for intelligent device control and automation.",
      imageUrl: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2069&auto=format&fit=crop",
      bulletPoints: [
        "Microcontroller and Microprocessor Programming",
        "Board Support Packages",
        "Vehicle Telematics",
        "IoT Device Integration",
        "AI and ML Integration",
        "Prototype Development",
        "Cyber Security for Embedded Systems",
        "System Testing and Debugging",
        "Firmware Development",
        "Real-time Operating Systems"
      ],
      logos: [
        { src: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Ansys_logo.png", alt: "ANSYS" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/6/68/Altair_Engineering_logo.svg", alt: "Altair" }
      ]
    },
    technical: {
      title: "Technical Documentation",
      description: "From product ideation to performance-driven engineering, our mechanical design services bring concepts to life. We integrate innovation with precision to deliver optimized, manufacturable, and cost-effective solutions tailored to your product’s lifecycle.",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
      bulletPoints: [
        "Creation of Technical Manuals and User Guides",
        "Maintenance and Service Manuals Development",
        "Assembly and Disassembly Instructions",
        "Training Manuals and E-learning Content",
        "Illustrated Parts Catalogs (IPC)",
        "Interactive Electronic Technical Manuals (IETM)",
        "2D/3D Illustrations and Exploded Views",
        "Document Conversion to Digital Formats",
        "Technical Documentation for Compliance",
        "SOPs and Regulatory Documentation"
      ],
      logos: [
        { src: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Ansys_logo.png", alt: "ANSYS" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/6/68/Altair_Engineering_logo.svg", alt: "Altair" }
      ]
    },
    mechincal: {
      title: "Asset Management",
      description: "From product ideation to performance-driven engineering, our mechanical design services bring concepts to life. We integrate innovation with precision to deliver optimized, manufacturable, and cost-effective solutions tailored to your product’s lifecycle.",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
      bulletPoints: [
        "Hydraulic System Design and Optimization",
        "Hydraulic Circuit Modeling and Simulation",
        "Hydraulic System Testing and Validation",
        "Hydraulic System Retrofitting",
        "Performance Optimization",
        "Failure Analysis",
        "Environmental Compliance",
        "Selection of Components (Pumps, Valves, Actuators etc.)",
      ],logos: [
        { src: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Ansys_logo.png", alt: "ANSYS" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/6/68/Altair_Engineering_logo.svg", alt: "Altair" }
      ]
    }
  };
  
  export default servicesSections;