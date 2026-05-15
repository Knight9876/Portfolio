import { SKILLS } from "./skills";

const internships = [
  {
    company: "Software Developer Advance Computing",
    location: "Mumbai",
    duration: "December 2024 - February 2025",
    mode: "On-Site",
    projects: [
      {
        name: "Netherlands Port Project",
        description:
          "A dynamic website for a Netherlands port, built using HTML, Bootstrap, Java, and SQL to manage port operations, including vessel tracking, cargo management, and logistics. The site offers a responsive UI, efficient backend integration, and smooth data handling.",
      },
    ],
    description:
      "Built a software for the Netherlands Port Project using HTML, Bootstrap, Java, and SQL",
    skills: [
      {
        name: "Java",
        color: "bg-amber-200",
        textColor: "text-amber-800",
        darkBgColor: "dark:bg-amber-600",
        darkTextColor: "dark:text-amber-200",
        logo: "https://res.cloudinary.com/dlnvozmgw/image/upload/v1737047782/java_gyfz9z.png",
      },
      {
        name: "SQL",
        color: "bg-lime-200",
        textColor: "text-lime-800",
        darkBgColor: "dark:bg-lime-600",
        darkTextColor: "dark:text-lime-200",
        logo: "https://res.cloudinary.com/dlnvozmgw/image/upload/v1737047781/sql_zb4hoz.png",
      },
      SKILLS.HTML5,
      {
        name: "Bootstrap",
        color: "bg-pink-200",
        textColor: "text-pink-800",
        darkBgColor: "dark:bg-pink-600",
        darkTextColor: "dark:text-pink-200",
        logo: "https://res.cloudinary.com/dlnvozmgw/image/upload/v1726791947/logo/bootstrap_vstpde.png",
      },
    ],
  },
  {
    company: "Datalabs Private Limited",
    location: "Bengaluru",
    duration: "November 2023 - December 2023",
    mode: "Remote",
    projects: [
      {
        name: "Online Hotel Booking System",
        description:
          "Developed a structured framework for a hotel booking system, focusing on design and layout to streamline the reservation process. This project enhanced understanding of web development concepts and provided practical experience in implementing design principles.",
      },
    ],
    description:
      "Developed an online hotel booking system, significantly boosting HTML and web development skills.",
    skills: [SKILLS.JAVASCRIPT, SKILLS.HTML5, SKILLS.CSS3],
  },
  {
    company: "Intrainz Innovation Private Limited",
    location: "Bengaluru",
    duration: "June 2023 - August 2023",
    mode: "Remote",
    projects: [
      {
        name: "To-Do List",
        description:
          "Developed an interactive to-do list application using JavaScript.",
      },
      {
        name: "Form Validation",
        description:
          "Implemented robust form validation to enhance user data integrity.",
      },
      {
        name: "Calculator",
        description:
          "Built a dynamic calculator with complex functionalities and user-friendly interface.",
      },
    ],
    description:
      "Worked on several projects, gaining hands-on JavaScript experience in an online environment.",
    skills: [SKILLS.JAVASCRIPT, SKILLS.HTML5, SKILLS.CSS3],
  },
];

export default internships;
