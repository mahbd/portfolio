<script>
	import { Icon } from 'svelte-icons-pack';

	import mahmudul from '$lib/images/mahmudul.png';
	import ejp from '$lib/images/ejp.png';
	import tsp from '$lib/images/tsp.png';
	import { RiLogosFacebookFill, RiLogosJavaFill, RiLogosNextjsFill } from 'svelte-icons-pack/ri';
	import {
		FaBrandsGit,
		FaBrandsGithub,
		FaBrandsLinkedinIn,
		FaBrandsLinux,
		FaBrandsPython
	} from 'svelte-icons-pack/fa';
	import { BiLogoMedium } from 'svelte-icons-pack/bi';
	import {
		SiCodeforces,
		SiCplusplusbuilder,
		SiDjango,
		SiDocker,
		SiKotlin,
		SiReact,
		SiTypescript
	} from 'svelte-icons-pack/si';
	import { BsAndroid2 } from 'svelte-icons-pack/bs';
	import { AiOutlineDownload } from 'svelte-icons-pack/ai';
	import Contact from './Contact.svelte';

	const contactIcons = [
		{
			name: 'Facebook',
			icon: RiLogosFacebookFill,
			link: 'https://facebook.com/maha48bd20thb'
		},
		{
			name: 'LinkedIn',
			icon: FaBrandsLinkedinIn,
			link: 'https://www.linkedin.com/in/mah20t/'
		},
		{
			name: 'GitHub',
			icon: FaBrandsGithub,
			link: 'https://github.com/mahbd'
		},
		{
			name: 'Codeforces',
			icon: SiCodeforces,
			link: 'https://codeforces.com/profile/mahbd'
		}
	];

	const services = [
		{
			name: 'Backend',
			description:
				'We build robust and scalable backends that are easy to maintain and extend. We use the latest technologies and best practices to ensure that your project is secure, fast, and reliable.'
		},
		{
			name: 'Frontend',
			description:
				'We build modern and responsive frontends that are fast, responsive, and easy to use. We use the latest technologies and best practices to ensure that your project is secure, fast, and reliable.'
		},
		{
			name: 'Full Stack',
			description:
				'We build full stack projects that are fast, responsive, and easy to use. We use the latest technologies and best practices to ensure that your project is secure, fast, and reliable.'
		},
		{
			name: 'Application',
			description:
				'We build mobile applications that are fast, responsive, and easy to use. We use the latest technologies and best practices to ensure that your project is secure, fast, and reliable.'
		}
	];

	const works = [
		{
			name: 'EJP',
			description: 'The project was about coaching centers...',
			image: ejp
		},
		{
			name: 'TSP',
			description: 'The project was about transportation system...',
			image: tsp
		}
	];

	const experiences = [
		{
			time: '2024 - Present',
			role: 'Full Stack Developer',
			company: 'EJP'
		},
		{
			time: '2023 - 2024',
			role: 'Full Stack Developer',
			company: 'TSP'
		}
	];

	const educations = [
		{
			time: '2020 - 2023',
			school: 'Begum Rokeya University, Rangpur',
			degree: 'Bachelor of Science in CSE'
		},
		{
			time: '2018 - 2020',
			school: 'Rajshahi Government City College',
			degree: 'Higher Secondary School Certificate'
		}
	];

	const skills = [
		{
			icon: FaBrandsPython,
			percentage: 95
		},
		{
			icon: SiCplusplusbuilder,
			percentage: 95
		},
		{
			icon: SiDjango,
			percentage: 95
		},
		{
			icon: FaBrandsLinux,
			percentage: 95
		},
		{
			icon: SiReact,
			percentage: 90
		},
		{
			icon: RiLogosNextjsFill,
			percentage: 90
		},
		{
			icon: SiTypescript,
			percentage: 90
		},
		{
			icon: BsAndroid2,
			percentage: 85
		},
		{
			icon: FaBrandsGit,
			percentage: 80
		},
		{
			icon: RiLogosJavaFill,
			percentage: 70
		},
		{
			icon: SiKotlin,
			percentage: 70
		},
		{
			icon: SiDocker,
			percentage: 60
		}
	];
</script>

<svelte:head>
	<title>Mahmudul Alam</title>
	<meta name="description" content="Homepage for Mahmudul Alam's portfolio" />
</svelte:head>

<div class="mt-20">
	<section class="grid grid-cols-1 lg:grid-cols-2">
		<div>
			<h2 class="text-2xl font-bold">I am Mahmudul Alam</h2>
			<h2 class="font-bold text-4xl gradient-text mt-3">
				Software Engineer + Competitive Programmer
			</h2>
			<p class="text-xl mt-5">
				I break down complex real world problems to create simple, elegant, and efficient solutions
				that helps millions of people.
			</p>
			<button
				class="flex border-2 border-green-700 text-green-300 rounded-full gap-2 px-8 py-2 mt-5 hover:bg-green-700"
				>Download Resume <Icon src={AiOutlineDownload} color="green" size="20px" />
			</button>
			<div class="flex justify-between mt-5 w-56">
				{#each contactIcons as { icon, link }}
					<a
						href={link}
						target="_blank"
						class="w-10 h-10 p-2 rounded-full border-2 border-green-700 hover:bg-green-50"
					>
						<Icon src={icon} color="green" size="20px" />
					</a>
				{/each}
			</div>
		</div>
		<div class="flex w-full justify-center">
			<img
				src={mahmudul}
				alt="Mahmudul Alam"
				class="bg-green-950 h-96 rounded-2xl rotate-3 hover:rotate-1 hover:border-4 hover:border-green-800 shadow-2xl"
			/>
		</div>
	</section>
	<section class="pt-24">
		<div class="flex items-center justify-between">
			<div class="flex items-center gap-2">
				<h2 class="text-5xl font-bold">4</h2>
				<div>
					<p>Years of</p>
					<p>Experience</p>
				</div>
			</div>
			<div class="flex items-center gap-2">
				<h2 class="text-5xl font-bold">10+</h2>
				<div>
					<p>Projects</p>
					<p>Completed</p>
				</div>
			</div>
			<div class="flex items-center gap-2">
				<h2 class="text-5xl font-bold">1590</h2>
				<div>
					<p>Codeforces</p>
					<p>Ratings</p>
				</div>
			</div>
			<div class="flex items-center gap-2">
				<h2 class="text-5xl font-bold">2500+</h2>
				<div>
					<p>Problems</p>
					<p>Solved</p>
				</div>
			</div>
		</div>
	</section>
	<section class="pt-32" id="services">
		<h2 class="font-bold text-4xl gradient-text text-center">My Services</h2>
		<div class="flex justify-center mt-2 mb-10">
			<p class="text-center text-lg max-w-[650px]">
				I can put your ideas and thus your wishes in the form of a unique web and app project that
				inspires you and you customers.
			</p>
		</div>
		{#each services as { name, description }}
			<div
				class="flex items-center justify-between mt-4 hover:bg-green-800 p-3 rounded-2xl border-b border-green-700"
			>
				<h3 class="text-4xl font-bold">{name}</h3>
				<p class="text-lg max-w-[650px] text-justify col-span-2">{description}</p>
			</div>
		{/each}
	</section>
	<section class="pt-32" id="works">
		<h2 class="font-bold text-4xl gradient-text text-center mb-16 z-50">My Recent Works</h2>
		<div class="grid grid-cols-2 gap-8">
			{#each works as { name, description, image }}
				<div>
					<img src={image} alt="EJP" class="relative w-full rounded-2xl hover:-z-10" />
					<div class="bg-green-800 hover:bg-green-600 cursor-pointer p-3 rounded-2xl -mt-24 z-20">
						<h3 class="text-2xl font-bold">{name}</h3>
						<p class="text-lg max-w-[650px] text-justify">
							{description}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</section>
	<section class="grid grid-cols-2 gap-8 pt-48" id="resume">
		<div>
			<h2 class="font-bold text-4xl gradient-text text-center mb-12">My Experience</h2>
			{#each experiences as { time, role, company }}
				<div
					class="my-5 bg-green-950 p-3 rounded-2xl hover:text-white hover:bg-gradient-to-l from-green-900 to-green-700"
				>
					<p class="font-bold text-lg text-green-500">{time}</p>
					<p class="font-bold text-2xl">{role}</p>
					<p class="text-lg">{company}</p>
				</div>
			{/each}
		</div>
		<div>
			<h2 class="font-bold text-4xl gradient-text text-center mb-12">My Education</h2>
			{#each educations as { time, degree, school }}
				<div
					class="my-5 bg-green-950 p-3 rounded-2xl hover:text-white hover:bg-gradient-to-l from-green-900 to-green-700"
				>
					<p class="font-bold text-lg text-green-500">{time}</p>
					<p class="font-bold text-2xl">{degree}</p>
					<p class="text-lg">{school}</p>
				</div>
			{/each}
		</div>
	</section>
	<section class="pt-24" id="skills">
		<h2 class="font-bold text-4xl gradient-text text-center z-50">My Skills</h2>
		<div class="flex justify-center mt-2 mb-16">
			<p class="text-center text-lg max-w-[650px]">
				We put your ideas and thus your wishes in the form of a unique web project that inspires you
				and you customers.
			</p>
		</div>
		<div class="grid grid-cols-6 gap-4">
			{#each skills as { icon, percentage }}
				<div
					class="flex flex-col items-center justify-center gap-2 text-center w-36 h-32 bg-green-950 hover:bg-green-800 rounded-2xl"
				>
					<Icon src={icon} color="white" size="56px" />
					<p class="text-xl">{percentage}%</p>
				</div>
			{/each}
		</div>
	</section>
	<Contact />
	<section class="mt-32 mb-5">
		<p class="text-center text-green-500">&copy; 2024 All Rights Reserved By Mahmudul Alam</p>
	</section>
</div>
