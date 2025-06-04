import { RiFacebookFill, RiJavaFill, RiNextjsFill } from "react-icons/ri";
import {
  FaGitAlt,
  FaGithub,
  FaLinkedinIn,
  FaLinux,
  FaPython,
} from "react-icons/fa";
import {
  SiCodeforces,
  SiCplusplus,
  SiDjango,
  SiDocker,
  SiJavascript,
  SiKotlin, 
  SiReact,
  SiRust,
  SiTypescript,
} from "react-icons/si";
import { BsAndroid2, BsGearWideConnected } from "react-icons/bs";
import { IconType } from "react-icons";
import { BiLogoSpringBoot } from "react-icons/bi";

export interface ContactIcon {
  name: string;
  icon: IconType;
  link: string;
}

export interface Service {
  name: string;
  description: string;
}

export interface Work {
  name: string;
  description: string;
  image: string;
  link?: string;
}

export interface Experience {
  time: string;
  role: string;
  company: string;
}

export interface Education {
  time: string;
  degree: string;
  school: string;
}

export interface Skill {
  icon: IconType;
  percentage: number;
  name?: string; // Optional: if you want to display skill name
}

export const contactIcons: ContactIcon[] = [
  {
    name: "Facebook",
    icon: RiFacebookFill,
    link: "https://facebook.com/maha48bd20thb",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/in/mah20t/",
  },
  { name: "GitHub", icon: FaGithub, link: "https://github.com/mahbd" },
  {
    name: "Codeforces",
    icon: SiCodeforces,
    link: "https://codeforces.com/profile/mahbd",
  },
];

export const services: Service[] = [
  {
    name: "Backend",
    description: "I build robust and scalable backends using modern technologies. My focus is on performance, security, and clean architecture.",
  },
  {
    name: "Frontend",
    description: "I craft modern, responsive frontends with great user experience. I aim for clean design and accessibility in every project.",
  },
  {
    name: "Full Stack",
    description: "I develop full stack applications from backend to frontend. I ensure seamless integration and smooth performance across the stack.",
  },
  {
    name: "Application",
    description: "I build mobile applications that are fast and user-friendly. I focus on intuitive design and reliable performance.",
  },
];


export const works: Work[] = [
  {
    name: "EJP",
    description: "Easy Job Preparation is a platform for preparing for various competitive exams. You can practice for BCS, primary school exams, bank recruitment, and more. It provides organized materials and mock tests. The interface is simple and user-friendly.",
    image: "/images/ejp.png",
    link: "https://ejp.com.bd/",
  },
  {
    name: "FTS",
    description: "The File Tracking System is designed for Begum Rokeya University. It helps track files within different offices and departments. You can see where a file currently is and its movement history. This increases transparency and efficiency.",
    image: "/images/fts.jpg",
    link: "http://fts.brur.ac.bd/",
  },
  {
    name: "DRIL",
    description: "DRIL is a customized chat platform built for crypto users. It supports secure messaging with encryption. The interface is designed to be lightweight and intuitive. DRIL makes crypto-related discussions easier and safer.",
    image: "/images/dril.jpg",
    link: "http://dril.fun/",
  },
  {
    name: "TSP",
    description: "Time Smart Professionals is tailored for accounting job seekers. It offers training content, mock tests, and tips focused on finance roles. Users can prepare for accounting exams effectively. The platform emphasizes time management and smart strategies.",
    image: "/images/tsp.png",
    link: "http://tsp.com.bd/",
  },
];

export const hobbyWorks: Work[] = [
  {
    name: "Game Hub",
    description: "Game Hub allows users to browse and search through a curated list of games. It demonstrates the power and flexibility of React. The UI is clean and responsive. It’s perfect for showcasing dynamic filtering and routing.",
    image: "/images/game-hub.png",
  },
  {
    name: "Iftar Delights",
    description: "Iftar Delights is a business model that focuses on curated dining during Ramadan. It helps users discover and order delicious iftar meals. The project highlights user experience and clean UI design. It was built with both tech and business in mind.",
    image: "/images/iftar-delights.png",
  },
  {
    name: "Components",
    description: "Components is a collection of reusable UI parts designed to speed up development. If you ever forget where you kept a component, this tool comes to the rescue. It organizes your code assets efficiently. Ideal for scalable React projects.",
    image: "/images/components.png",
  },
  {
    name: "Issue Tracker",
    description: "Issue Tracker helps teams manage bugs and feature requests in a project. It supports adding, editing, and closing issues efficiently. The design is simple yet effective. Perfect for developers working in teams or solo.",
    image: "/images/issue-tracker.png",
  },
];


export const experiences: Experience[] = [
  { time: "2024 - Present", role: "Full Stack Developer", company: "EJP" },
  { time: "2023 - 2024", role: "Full Stack Developer", company: "TSP" },
];

export const educations: Education[] = [
  {
    time: "2020 - 2023",
    school: "Begum Rokeya University, Rangpur",
    degree: "Bachelor of Science in CSE",
  },
  {
    time: "2018 - 2020",
    school: "Rajshahi Government City College",
    degree: "Higher Secondary School Certificate",
  },
];

export const skills: Skill[] = [
  { icon: FaPython, percentage: 95, name: "Python" },
  { icon: SiDjango, percentage: 95, name: "Django" },
  { icon: SiRust, percentage: 95, name: "Rust" },
  { icon: BsGearWideConnected, percentage: 95, name: "Rust" },
  { icon: SiCplusplus, percentage: 95, name: "C++" },
  { icon: FaLinux, percentage: 95, name: "Linux" },
  { icon: SiReact, percentage: 90, name: "React" },
  { icon: RiNextjsFill, percentage: 90, name: "Next.js" },
  { icon: SiTypescript, percentage: 90, name: "TypeScript" },
  { icon: SiJavascript, percentage: 90, name: "JavaScript" },
  { icon: BsAndroid2, percentage: 85, name: "Android" },
  { icon: FaGitAlt, percentage: 80, name: "Git" },
  { icon: RiJavaFill, percentage: 70, name: "Java" },
  { icon: BiLogoSpringBoot, percentage: 70, name: "Spring Boot" },
  { icon: SiKotlin, percentage: 70, name: "Kotlin" },
  { icon: SiDocker, percentage: 60, name: "Docker" },
];

export const statItemsData = [
  {
    type: "stat" as const,
    value: "4",
    label1: "Years of",
    label2: "Experience",
  },
  {
    type: "stat" as const,
    value: "10+",
    label1: "Real Life Projects",
    label2: "Completed",
  },
  {
    type: "stat" as const,
    value: "1691",
    label1: "Codeforces",
    label2: "Rating",
  },
  {
    type: "stat" as const,
    value: "2.5k+",
    label1: "Problems",
    label2: "Solved",
  },
  {
    type: "achievement" as const,
    title: "Two Times Divisional Champion",
    subtitle:
      "In International Collegiate Programming Contest (ICPC), Asia Dhaka Regional Contest",
  },
];
