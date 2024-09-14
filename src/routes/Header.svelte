<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/m64.bmp';

	const navItems = [
		{
			name: 'Services',
			href: '#services'
		},
		{
			name: 'Works',
			href: '#works'
		},
		{
			name: 'Resume',
			href: '#resume'
		},
		{
			name: 'Skills',
			href: '#skills'
		},
		{
			name: 'Testimonials',
			href: '#testimonials'
		},
		{
			name: 'Contact',
			href: '#contact'
		}
	];
</script>

<header class="flex items-center justify-between px-8 pt-5">
	<div>
		<a href="https://mahmudul.com.bd">
			<img src={logo} alt="M" class="w-10 h-10" />
		</a>
	</div>

	<div class="flex items-center justify-between w-[600px]">
		{#each navItems as item}
			<a
				href={item.href}
				class="font-bold hover:underline hover:text-green-500 hover:cursor-pointer {$page.url
					.hash === item.href
					? 'text-green-500'
					: ''}">{item.name}</a
			>
		{/each}
	</div>

	<div>
		<a
			href="https://www.fiverr.com/mahmudula2000"
			target="_blank"
			class="gradient-button hover:bg-gradient-to-r px-8 py-2 rounded-full">Hire Me</a
		>
	</div>
</header>
