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
  SiGooglecloud,
  SiJavascript,
  SiKotlin, 
  SiMysql,
  SiNginx,
  SiPostgresql,
  SiPrisma,
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
    description:
      "I build efficient backend systems with Rust, Actix, Django, PostgreSQL, MySQL, and Prisma, with a focus on performance, security, and clean architecture.",
  },
  {
    name: "Frontend",
    description:
      "I create responsive interfaces with React.js, Next.js, TypeScript, and modern state-management patterns for smooth user experiences.",
  },
  {
    name: "Full Stack",
    description:
      "I deliver full stack products from database design and APIs to deployment, cloud storage, server setup, and frontend integration.",
  },
  {
    name: "Application",
    description:
      "I build practical web and Android applications, including secure content delivery, payment integration, and workflow automation tools.",
  },
];


export const works: Work[] = [
  {
    name: "EJP",
    description:
      "Easy Job Preparation is a competitive exam platform rebuilt with Rust, Actix, PostgreSQL, Google Cloud Storage, and React.js. The work improved application efficiency, reduced server load, and added AI-assisted data organization.",
    image: "/images/ejp.png",
    link: "https://ejp.com.bd/",
  },
  {
    name: "FTS",
    description:
      "A file-tracking system for Begum Rokeya University serving 1000+ users. It uses Next.js, TypeScript, MySQL, and Prisma with QR/barcode-based access, timeline visualization, and real-time email notifications.",
    image: "/images/fts.jpg",
    link: "http://fts.brur.ac.bd/",
  },
  {
    name: "DRIL",
    description:
      "A lightweight chat platform tailored for crypto communities, focused on secure messaging, fast interaction, and an intuitive discussion experience.",
    image: "/images/dril.jpg",
    link: "http://dril.fun/",
  },
  {
    name: "TSP",
    description:
      "Time Smart Professionals is an accounting job preparation platform built with Django, React.js, PostgreSQL, Kotlin, and Redux. The platform supports high traffic, secure Android content delivery, and Bkash, Nagad, and Rocket payments.",
    image: "/images/tsp.png",
    link: "http://tsp.com.bd/",
  },
];

export const hobbyWorks: Work[] = [
  {
    name: "Meeting Helper",
    description:
      "A browser extension for tracking attendance and activity during online meetings and virtual classes. It helped identify attendance patterns and user engagement using JavaScript and web scraping.",
    image: "/images/components.png",
  },
  {
    name: "B12J Online Judge",
    description:
      "A custom online judge for creating problems, contests, tutorials, and evaluating submissions. It used Django, React, Redux, JavaScript, and WebSocket-based real-time updates.",
    image: "/images/game-hub.png",
  },
  {
    name: "Issue Tracker",
    description:
      "A task and issue management app with add, edit, delete, assignment, authorization checks, React Query, Zod, Zustand, Auth.js, Prisma, TypeScript, and MongoDB.",
    image: "/images/issue-tracker.png",
  },
];


export const experiences: Experience[] = [
  { time: "Oct 2024 - Present", role: "Full Stack Developer", company: "EJP" },
  {
    time: "Aug 2024 - Oct 2024",
    role: "Backend Developer",
    company: "Begum Rokeya University",
  },
  {
    time: "Jul 2023 - Dec 2023",
    role: "Android and Web Developer",
    company: "Time Smart Professionals",
  },
];

export const educations: Education[] = [
  {
    time: "Jan 2020 - Jan 2025",
    school: "Begum Rokeya University, Rangpur",
    degree: "B.Sc. in Computer Science and Engineering",
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
  { icon: BsGearWideConnected, percentage: 95, name: "Actix" },
  { icon: SiCplusplus, percentage: 95, name: "C++" },
  { icon: FaLinux, percentage: 95, name: "Linux" },
  { icon: SiReact, percentage: 90, name: "React" },
  { icon: RiNextjsFill, percentage: 90, name: "Next.js" },
  { icon: SiTypescript, percentage: 90, name: "TypeScript" },
  { icon: SiJavascript, percentage: 90, name: "JavaScript" },
  { icon: SiPostgresql, percentage: 90, name: "PostgreSQL" },
  { icon: SiMysql, percentage: 85, name: "MySQL" },
  { icon: SiPrisma, percentage: 85, name: "Prisma" },
  { icon: SiGooglecloud, percentage: 80, name: "Google Cloud" },
  { icon: SiNginx, percentage: 80, name: "Nginx" },
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
    value: "5+",
    label1: "Years of",
    label2: "Experience",
  },
  {
    type: "stat" as const,
    value: "1000+",
    label1: "FTS",
    label2: "Users Served",
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
    title: "Two-Time ICPC Divisional Champion",
    subtitle:
      "Divisional champion at ICPC Asia Dhaka Regional Contest in 2022 and 2024",
  },
];
