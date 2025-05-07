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
  SiKotlin,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { BsAndroid2 } from "react-icons/bs";
import { IconType } from "react-icons";

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
  { name: "Backend", description: "We build robust and scalable backends..." },
  {
    name: "Frontend",
    description: "We build modern and responsive frontends...",
  },
  { name: "Full Stack", description: "We build full stack projects..." },
  { name: "Application", description: "We build mobile applications..." },
];

export const works: Work[] = [
  {
    name: "EJP",
    description: "The project was about coaching centers...",
    image: "/images/ejp.png",
  },
  {
    name: "TSP",
    description: "The project was about coaching centers...",
    image: "/images/tsp.png",
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
  { icon: SiCplusplus, percentage: 95, name: "C++" },
  { icon: SiDjango, percentage: 95, name: "Django" },
  { icon: FaLinux, percentage: 95, name: "Linux" },
  { icon: SiReact, percentage: 90, name: "React" },
  { icon: RiNextjsFill, percentage: 90, name: "Next.js" },
  { icon: SiTypescript, percentage: 90, name: "TypeScript" },
  { icon: BsAndroid2, percentage: 85, name: "Android" },
  { icon: FaGitAlt, percentage: 80, name: "Git" },
  { icon: RiJavaFill, percentage: 70, name: "Java" },
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
