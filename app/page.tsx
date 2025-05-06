// src/app/page.tsx
import Image from 'next/image'; // Use Next.js Image component
import Contact from '@/components/Contact'; // Import the Contact component
// Import icons from react-icons (adjust imports based on exact icons used)
import {RiFacebookFill, RiJavaFill, RiNextjsFill} from 'react-icons/ri';
import {FaGitAlt, FaGithub, FaLinkedinIn, FaLinux, FaPython} from 'react-icons/fa';
// import { BiLogoMedium } from 'react-icons/bi'; // Uncomment if used
import {SiCodeforces, SiCplusplus, SiDjango, SiDocker, SiKotlin, SiReact, SiTypescript} from 'react-icons/si'; // Note: SiCplusplusbuilder -> SiCplusplus
import {BsAndroid2} from 'react-icons/bs';
import {AiOutlineDownload} from 'react-icons/ai';

// --- Data Definitions ---
// It's often cleaner to move these to a separate data file (e.g., src/data/portfolioData.ts) and import them

const contactIcons = [
    {name: 'Facebook', icon: RiFacebookFill, link: 'https://facebook.com/maha48bd20thb'},
    {name: 'LinkedIn', icon: FaLinkedinIn, link: 'https://www.linkedin.com/in/mah20t/'},
    {name: 'GitHub', icon: FaGithub, link: 'https://github.com/mahbd'},
    {name: 'Codeforces', icon: SiCodeforces, link: 'https://codeforces.com/profile/mahbd'},
];

const services = [
    {name: 'Backend', description: 'We build robust and scalable backends...'},
    {name: 'Frontend', description: 'We build modern and responsive frontends...'},
    {name: 'Full Stack', description: 'We build full stack projects...'},
    {name: 'Application', description: 'We build mobile applications...'}, // Changed 'Application' description slightly for clarity
];

const works = [
    {name: 'EJP', description: 'The project was about coaching centers...', image: '/images/ejp.png'}, // Use public paths
    {name: 'TSP', description: 'The project was about transportation system...', image: '/images/tsp.png'}, // Use public paths
];

const experiences = [
    {time: '2024 - Present', role: 'Full Stack Developer', company: 'EJP'},
    {time: '2023 - 2024', role: 'Full Stack Developer', company: 'TSP'},
];

const educations = [
    {time: '2020 - 2023', school: 'Begum Rokeya University, Rangpur', degree: 'Bachelor of Science in CSE'},
    {time: '2018 - 2020', school: 'Rajshahi Government City College', degree: 'Higher Secondary School Certificate'},
];

const skills = [
    {icon: FaPython, percentage: 95},
    {icon: SiCplusplus, percentage: 95}, // Corrected Icon
    {icon: SiDjango, percentage: 95},
    {icon: FaLinux, percentage: 95},
    {icon: SiReact, percentage: 90},
    {icon: RiNextjsFill, percentage: 90},
    {icon: SiTypescript, percentage: 90},
    {icon: BsAndroid2, percentage: 85},
    {icon: FaGitAlt, percentage: 80}, // FaBrandsGit -> FaGitAlt or FaGit
    {icon: RiJavaFill, percentage: 70},
    {icon: SiKotlin, percentage: 70},
    {icon: SiDocker, percentage: 60},
];

// --- Page Component ---
export default function HomePage() {
    // Optional: Set page-specific metadata (overrides layout.tsx)
    // export const metadata = { title: "Mahmudul Alam - Home" };

    return (
        // Removed the outer div with mt-20 as layout/header handles spacing
        <>
            {/* --- Hero Section --- */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mt-12 md:mt-20">
                <div>
                    <h1 className="text-2xl font-bold text-gray-300">I am Mahmudul Alam</h1>
                    <h2 className="font-bold text-4xl lg:text-5xl gradient-text mt-3 leading-tight">
                        Software Engineer + Competitive Programmer
                    </h2>
                    <p className="text-lg md:text-xl mt-5 text-gray-300">
                        I break down complex real world problems to create simple, elegant, and efficient solutions
                        that help millions of people.
                    </p>
                    {/* Add actual link to resume */}
                    <a
                        href="/path/to/your/resume.pdf" // Replace with actual path or link
                        download // Optional: Suggest download
                        className="inline-flex items-center border-2 border-green-700 text-green-300 rounded-full gap-2 px-8 py-2 mt-6 hover:bg-green-700 hover:text-white transition duration-300"
                    >
                        Download Resume <AiOutlineDownload size="20px"/> {/* Directly use icon component */}
                    </a>
                    <div className="flex gap-4 mt-6 w-auto"> {/* Adjusted spacing/width */}
                        {contactIcons.map(({icon: IconComponent, link, name}) => ( // Destructure icon directly
                            <a
                                key={name}
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Link to ${name}`} // Accessibility
                                className="w-10 h-10 p-2 flex items-center justify-center rounded-full border-2 border-green-700 text-green-500 hover:bg-green-700 hover:text-white transition duration-300"
                            >
                                <IconComponent size="20px"/> {/* Render the component */}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="flex w-full justify-center lg:justify-end mt-10 lg:mt-0">
                    {/* Using next/image */}
                    <Image
                        src="/images/mahmudul.png" // Path relative to public folder
                        alt="Mahmudul Alam"
                        width={384} // Provide width
                        height={384} // Provide height (adjust ratio if needed)
                        className="bg-green-950 h-80 w-80 md:h-96 md:w-96 object-cover rounded-2xl rotate-3 hover:rotate-1 hover:border-4 hover:border-green-800 shadow-2xl transition-transform duration-300"
                        priority // Load hero image faster
                    />
                </div>
            </section>

            {/* --- Stats Section --- */}
            <section className="pt-20 md:pt-24">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
                    {/* Item 1 */}
                    <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2">
                        <h3 className="text-5xl font-bold gradient-text">4</h3>
                        <div>
                            <p className="text-sm text-gray-400">Years of</p>
                            <p className="text-lg font-semibold">Experience</p>
                        </div>
                    </div>
                    {/* Item 2 */}
                    <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2">
                        <h3 className="text-5xl font-bold gradient-text">10+</h3>
                        <div>
                            <p className="text-sm text-gray-400">Projects</p>
                            <p className="text-lg font-semibold">Completed</p>
                        </div>
                    </div>
                    {/* Item 3 */}
                    <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2">
                        <h3 className="text-5xl font-bold gradient-text">1590</h3>
                        <div>
                            <p className="text-sm text-gray-400">Codeforces</p>
                            <p className="text-lg font-semibold">Rating</p> {/* Corrected */}
                        </div>
                    </div>
                    {/* Item 4 */}
                    <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2">
                        <h3 className="text-5xl font-bold gradient-text">2500+</h3>
                        <div>
                            <p className="text-sm text-gray-400">Problems</p>
                            <p className="text-lg font-semibold">Solved</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Services Section --- */}
            <section className="pt-24 md:pt-32" id="services">
                <h2 className="font-bold text-3xl md:text-4xl gradient-text text-center">My Services</h2>
                <div className="flex justify-center mt-2 mb-10">
                    <p className="text-center text-base md:text-lg max-w-xl md:max-w-2xl text-gray-300">
                        I can put your ideas and thus your wishes in the form of a unique web and app project that
                        inspires you and your customers.
                    </p>
                </div>
                <div className="space-y-4"> {/* Add spacing between service items */}
                    {services.map(({name, description}) => (
                        <div
                            key={name}
                            // Use grid for better layout control on different screen sizes
                            className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 md:gap-8 mt-4 hover:bg-green-900 hover:bg-opacity-50 p-4 md:p-6 rounded-2xl border-b border-green-800 transition-colors duration-300"
                        >
                            <h3 className="text-3xl md:text-4xl font-bold text-white md:col-span-1">{name}</h3>
                            <p className="text-base md:text-lg max-w-full md:max-w-2xl text-justify text-gray-300 md:col-span-2">{description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- Works Section --- */}
            <section className="pt-24 md:pt-32" id="works">
                <h2 className="font-bold text-3xl md:text-4xl gradient-text text-center mb-12 md:mb-16">My Recent
                    Works</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {works.map(({name, description, image}) => (
                        <div key={name} className="group rounded-2xl overflow-hidden"> {/* Group for hover effects */}
                            <div className="relative w-full aspect-video"> {/* Aspect ratio container */}
                                <Image
                                    src={image}
                                    alt={name}
                                    fill // Use fill to cover the container
                                    className="object-cover transition-transform duration-300 group-hover:scale-105" // Zoom on hover
                                />
                            </div>
                            {/* Info card - positioned or static */}
                            <div
                                className="bg-green-800 hover:bg-green-700 cursor-pointer p-4 rounded-b-2xl transition-colors duration-300 -mt-1 relative z-10"> {/* Example: slightly overlay */}
                                <h3 className="text-2xl font-bold text-white">{name}</h3>
                                <p className="text-base md:text-lg text-gray-200 text-justify mt-2">
                                    {description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- Resume Section (Experience & Education) --- */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-24 md:pt-32" id="resume">
                {/* Experience */}
                <div>
                    <h2 className="font-bold text-3xl md:text-4xl gradient-text text-center mb-10 md:mb-12">My
                        Experience</h2>
                    <div className="space-y-5">
                        {experiences.map(({time, role, company}) => (
                            <div
                                key={`${company}-${role}`} // More unique key
                                className="bg-green-950 p-4 rounded-2xl hover:text-white hover:bg-gradient-to-l from-green-900 to-green-700 transition-all duration-300 shadow-lg"
                            >
                                <p className="font-bold text-base md:text-lg text-green-400">{time}</p>
                                <p className="font-bold text-xl md:text-2xl mt-1">{role}</p>
                                <p className="text-lg text-gray-300 mt-1">{company}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Education */}
                <div>
                    <h2 className="font-bold text-3xl md:text-4xl gradient-text text-center mb-10 md:mb-12">My
                        Education</h2>
                    <div className="space-y-5">
                        {educations.map(({time, degree, school}) => (
                            <div
                                key={`${school}-${degree}`} // More unique key
                                className="bg-green-950 p-4 rounded-2xl hover:text-white hover:bg-gradient-to-l from-green-900 to-green-700 transition-all duration-300 shadow-lg"
                            >
                                <p className="font-bold text-base md:text-lg text-green-400">{time}</p>
                                <p className="font-bold text-xl md:text-2xl mt-1">{degree}</p>
                                <p className="text-lg text-gray-300 mt-1">{school}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Skills Section --- */}
            <section className="pt-24 md:pt-32" id="skills">
                <h2 className="font-bold text-3xl md:text-4xl gradient-text text-center">My Skills</h2>
                <div className="flex justify-center mt-2 mb-12 md:mb-16">
                    <p className="text-center text-base md:text-lg max-w-xl md:max-w-2xl text-gray-300">
                        We put your ideas and thus your wishes in the form of a unique web project that inspires you
                        and your customers. {/* Consider rephrasing if needed */}
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    {skills.map(({icon: IconComponent, percentage}, index) => (
                        <div
                            key={index} // Using index if no unique name/id for skills
                            className="flex flex-col items-center justify-center gap-2 text-center w-32 h-32 md:w-36 md:h-36 bg-green-950 hover:bg-green-800 rounded-2xl p-4 transition-colors duration-300 shadow-md"
                        >
                            <IconComponent className={""} color="white" size="48px"/> {/* Responsive size */}
                            <p className="text-lg md:text-xl font-semibold text-white">{percentage}%</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- Contact Section --- */}
            {/* Contact component is rendered here */}
            <Contact/>

            {/* Footer Copyright is moved to layout.tsx */}
        </>
    );
}