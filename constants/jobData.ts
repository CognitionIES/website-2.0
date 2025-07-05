// constants/jobData.ts
export interface Job {
  id: number;
  title: string;
  company: string;
  logo: string;
  experience: string;
  salary: string;
  location: string;
  description: string;
  posted: string;
  fullDescription?: string;
  responsibilities?: string[];
  requirements?: string[];
  industry?: string;
  openings?: number;
  keySkills?: { skill: string; isPreferred?: boolean }[];
}

export const jobsData: Job[] = [
  {
    id: 1,
    title: "International Business Development Manager",
    company: "Cogntion IES.",
    logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    experience: "5-10 years",
    salary: "Not disclosed",
    location: "Remote",
    description: "Self-driven manager to handle global client relationships and market expansion",
    posted: "2 days ago",
    industry: "Indsutry Name",
    openings: 1,
    fullDescription: "We are seeking a self-driven International Business Development Manager with a strong background in engineering services...",
    requirements: [
      "Bachelor's degree in engineering or equivalent technical background preferred",
      "Experience selling to international clients (USA, Europe, Middle East, etc.) is mandatory",
      "5-10 years of experience in business development in engineering services",
      "Experience working with global engineering clients or design firms",
      "Excellent verbal and written communication skills in English",
      "Strong interpersonal, negotiation, and organizational skills",
      "Self-motivated, with a proactive approach and ability to work independently",
    ],
    keySkills: [
      { skill: "liaising", isPreferred: true },
      { skill: "delivery management", isPreferred: true },
      { skill: "ms project", isPreferred: true },
      { skill: "program management", isPreferred: true },
      { skill: "agile", isPreferred: true },
      { skill: "vendor management" },
      { skill: "team management" },
      { skill: "presales" },
      { skill: "strategic planning" },
    ],
  },
  {
    id: 2,
    title: "Presales Professional",
    company: "Cogntion IES.",
    logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    experience: "4-8 years",
    salary: "Not disclosed",
    location: "Remote",
    description: "Technical presales role supporting the sales team with expertise in engineering services",
    posted: "1 week ago",
    fullDescription: "We are looking for a motivated and technically sound Presales Professional with experience in engineering services...",
    requirements: [
      "Bachelor's degree in Engineering (Mechanical, Electrical, Civil, etc.) or related field",
      "4–8 years of experience in a presales, technical sales, or solutioning role in the engineering services industry",
      "Strong understanding of engineering design workflows, standards, and tools (AutoCAD, SolidWorks, etc.)",
      "Ability to understand client needs and translate them into viable solutions",
      "Proficiency in MS Office, especially PowerPoint and Excel",
    ],
    keySkills: [
      { skill: "Presales", isPreferred: true },
      { skill: "Technical Sales" },
      { skill: "Solutioning" },
      { skill: "cCommunication" },
      { skill: "Ms Office" },
    ],
  },
  {
    id: 3,
    title: "Process Lead",
    company: "Cogntion IES",
    logo: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    experience: "8-12 years",
    salary: "Not disclosed",
    location: "Remote",
    description: "Lead process engineering activities within multidisciplinary engineering projects",
    posted: "3 days ago",
    fullDescription: "We are looking for an experienced and detail-oriented Process Lead to manage and oversee the process engineering activities...",
    requirements: [
      "Bachelor's degree in mechanical engineering or related field",
      "8–12 years of relevant experience in process engineering, preferably in EPC or design consulting firms",
      "Hands-on experience with tools such as AVEVA, Point cloud Manager, Blue Beam- REVU, Aspen HYSYS, E3D or similar",
      "Deep understanding of international codes and standards (ASME, API, ISO, IEC, etc.)",
      "Proven ability to lead a team and manage complex project deliverables",
      "Excellent communication, documentation, and coordination skills",
    ],
    keySkills: [
      { skill: "Process Engineering", isPreferred: true },
      { skill: "Project Management" },
      { skill: "Team Leadership" },
      { skill: "Technical Documentation" },
      { skill: "International Standards" },
    ],
  },
];