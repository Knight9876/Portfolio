import { SKILLS } from "./skills";

const experience = [
  {
    company: "Goldjar Technologies Private Limited",
    duration: "Oct 2025 - Present",
    role: "Frontend Developer",
    project: "Bullion Trading Platform (Web, Admin Panel & Mobile Applications)",
    location: "Mumbai",
    mode: "On-Site",
    techStack: [
      SKILLS.NEXTJS,
      SKILLS.REACT_NATIVE,
      SKILLS.TYPESCRIPT,
      SKILLS.TAILWIND,
      SKILLS.SHADCN,
    ],
    responsibilities: [
      "Developed and maintained a multi-platform bullion trading platform across web, admin panel, and mobile applications (Android & iOS).",

      "Built reusable frontend components using Next.js, React Native, TypeScript, Tailwind CSS, and ShadCN UI.",

      "Integrated APIs for authentication, notifications, real-time trading data, and core business workflows.",

      "Implemented an Authorized Delivery workflow customers to approve or reject delivery verification requests before dispatch.",

      "Improved socket reliability by implementing a heartbeat-based ping/pong reconnection mechanism for stale connections.",

      "Resolved frontend issues involving duplicate notifications, API inconsistencies, state persistence, and cross-platform UI rendering.",

      "Collaborated with backend developers to refine APIs and improve real-time data synchronization.",

      "Worked on a jewellery ecommerce platform with admin panel, catalog management, and customer mobile application workflows.",
    ],
  },

  {
    company: "Arteos Life OÜ",
    duration: "Apr 2025 - Sep 2025",
    role: "Frontend and Mobile Developer (Contract)",
    project: "MedSixty | AI-Powered Clinical Intelligence for Clinicians",
    location: "Tallinn",
    mode: "Remote",
    websiteUrl: "https://www.medsixty.com",
    techStack: [
      SKILLS.REACT,
      SKILLS.REACT_NATIVE,
      SKILLS.TYPESCRIPT,
      SKILLS.EXPO,
      SKILLS.HTML5,
      SKILLS.CSS3,
    ],
    responsibilities: [
      "Developed and optimized a cross-platform React Native application for Android & iOS.",

      "Redesigned the medical web platform from Figma designs with focus on accessibility and UI consistency.",

      "Built AI-powered interfaces, medical tools, animations, loaders, and responsive frontend experiences.",

      "Created reusable frontend components with React, TypeScript, and Styled-Components while integrating secure APIs and real-time updates.",

      "Collaborated with backend teams to resolve frontend issues, improve API integration, and enhance application performance.",
    ],
  },
];

export default experience;