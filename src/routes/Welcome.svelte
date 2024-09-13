<script>
	import { onMount } from 'svelte';
	import welcome from '$lib/images/welcome.png';
	import { fade, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let ready = false;
	let ready2 = false;

	onMount(() => {
		setTimeout(() => {
			ready = true;
		}, 3000);
		setTimeout(() => {
			ready2 = true;
		}, 3500);
	});
</script>

{#if ready}
	<section
		in:fly={{ duration: 1200, y: '100vh', easing: quintOut }}
		class="flex flex-col items-center justify-center h-screen"
	>
		{#if ready}
			<img
				transition:fade={{ duration: 2000, delay: 1000 }}
				src={welcome}
				alt="Welcome"
				class="w-[50vw] -mt-64"
			/>
		{/if}
		{#if ready2}
			<p
				transition:fly={{ delay: 0, duration: 1000, x: 0, y: -500, opacity: 0.5, easing: quintOut }}
				class="text-8xl font-bold -mt-10"
			>
				Hey there!
			</p>
			<p
				transition:fade={{ duration: 2000, delay: 500 }}
				class="text-4xl text-center text-green-900 mt-5"
			>
				I'm Mahmudul Alam, a software engineer and a web developer. I'm currently working at
				<a href="https://ejp.com.bd" target="_blank">EJP</a> as a software engineer.
			</p>
		{/if}
	</section>
{/if}
