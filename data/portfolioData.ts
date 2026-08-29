import { RiFacebookFill, RiJavaFill, RiNextjsFill } from "react-icons/ri";
import {
  FaGitAlt,
  FaGithub,
  FaLinkedinIn,
  FaLinux,
  FaPython,
} from "react-icons/fa";
import {
  SiCelery,
  SiCodeforces,
  SiCplusplus,
  SiDjango,
  SiDocker,
  SiFastapi,
  SiGooglecloud,
  SiJavascript,
  SiKotlin, 
  SiMysql,
  SiNginx,
  SiPandas,
  SiPostgresql,
  SiRedis,
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
    name: "EJP LMS Platform",
    description:
      "Architected and shipped a production EdTech LMS across Rust/Actix backend, React SPA, Next.js platform, and Android app with custom DRM and payment gateway integration.",
    image: "/images/ejp.png",
    link: "https://ejp.com.bd/",
  },
  {
    name: "University File Tracking (BRUR)",
    description:
      "Built a Next.js application for 1000+ users with WebAuthn/FIDO2, passwordless login, QR/barcode workflows, and RBAC-driven document tracking timeline.",
    image: "/images/fts.jpg",
    link: "https://fts.brur.ac.bd/",
  },
  {
    name: "Time Smart E-Learning Rebuild",
    description:
      "Rebuilt legacy WordPress platform using Django/DRF + React + Kotlin with Redis caching, Celery queues, secure JWT auth, and payment reconciliation pipelines.",
    image: "/images/tsp.png",
  },
  {
    name: "Automation Solutionz Platform",
    description:
      "Maintain the core Django/DRF backend and FastAPI services of ZeuZ, an AI-powered test-automation platform: Test Studio features for automated test-case creation, a secure test-data vault, Pandas-based processing of test-execution logs, and Linux desktop automation support.",
    image: "/images/zeuz.png",
    link: "https://zeuz.ai/",
  },
];

export const hobbyWorks: Work[] = [
  {
    name: "st (Git Stacking CLI)",
    description:
      "Cross-platform Rust CLI for stacked pull request workflows with async GitHub API integration, OID-cache optimization, and AI-generated PR descriptions.",
    image: "/images/st.png",
    link: "https://github.com/mahbd/st",
  },
  {
    name: "CMVault",
    description:
      "CLI snippet manager with Rust/Actix backend, Svelte frontend, shell integration, pg_trgm fuzzy search, Argon2 auth, and SQLx pooling.",
    image: "/images/cmd.png",
    link: "https://cmd.mahmudul.com.bd/",
  },
  {
    name: "ZeuZ Bank",
    description:
      "Full-stack digital banking app with OTP verification, atomic Prisma transactions, Zod validation, JWT sessions, and Dockerized deployment.",
    image: "/images/zbank.png",
  },
  {
    name: "VLS Security Showcase",
    description:
      "Web security education platform demonstrating OWASP risks with CSP hardening, server-side sanitization, and detailed security event logging.",
    image: "/images/issue-tracker.png",
  },
  {
    name: "Disaster Relief Network",
    description:
      "Distributed microservices architecture with Spring Cloud Gateway, Spring Boot services, Next.js frontend, and Kotlin Android app.",
    image: "/images/drn.png",
  },
  {
    name: "B12J Online Judge",
    description:
      "Competitive programming platform with Django Channels + WebSockets, JWT/OAuth2, async verdict pipeline, and decoupled React SPA frontend.",
    image: "/images/game-hub.png",
  },
  {
    name: "Dril Messaging API",
    description:
      "Real-time marketplace and messaging API using Express + Socket.IO, JWT over HTTP/WebSocket, RBAC middleware, and S3 pre-signed uploads.",
    image: "/images/dril.jpg",
  },
];


export const experiences: Experience[] = [
  {
    time: "Jul 2025 - Present",
    role: "Software Engineer (Full-time, Remote)",
    company: "Automation Solutionz",
  },
  {
    time: "Oct 2024 - Jul 2025",
    role: "Full-Stack Developer (Part-time, Remote)",
    company: "EJP, Rangpur",
  },
  {
    time: "Aug 2024 - Oct 2024",
    role: "Back End Developer (Contract, Remote)",
    company: "Begum Rokeya University, Rangpur",
  },
  {
    time: "Jul 2023 - May 2024",
    role: "Full Stack Engineer (Part-time, On-site)",
    company: "Time Smart Professionals, Rangpur",
  },
];

export const educations: Education[] = [
  {
    time: "Jan 2020 - Aug 2025",
    school: "Begum Rokeya University, Rangpur",
    degree: "B.Sc. in Computer Science and Engineering",
  },
  {
    time: "2017 - 2019",
    school: "Rajshahi City College, Rajshahi",
    degree: "Higher Secondary School Certificate",
  },
];

export const skills: Skill[] = [
  { icon: FaPython, percentage: 95, name: "Python" },
  { icon: SiDjango, percentage: 95, name: "Django" },
  { icon: SiFastapi, percentage: 80, name: "FastAPI" },
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
  { icon: SiRedis, percentage: 85, name: "Redis" },
  { icon: SiCelery, percentage: 85, name: "Celery" },
  { icon: SiPandas, percentage: 70, name: "Pandas" },
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
    value: "3+",
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
