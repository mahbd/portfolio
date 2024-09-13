<script>
	import { onMount } from 'svelte';

	let ready = false;
	onMount(() => (ready = true));
	import welcome from '$lib/images/welcome.png';
	import { fade, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
</script>

<section class="flex flex-col items-center justify-center">
	{#if ready}
		<img transition:fade={{ duration: 2000 }} src={welcome} alt="Welcome" class="w-[50vw] -mt-32" />
	{/if}
	{#if ready}
		<p
			transition:fly={{ delay: 0, duration: 1500, x: 0, y: -500, opacity: 0.5, easing: quintOut }}
			class="text-8xl font-bold -mt-16"
		>
			Hey there!
		</p>
		<p
			transition:fade={{ duration: 2000, delay: 1000 }}
			class="text-3xl text-center text-green-900 mt-5"
		>
			I'm a software engineer and a web developer. I'm currently working at
			<a href="https://ejp.com.bd" target="_blank">EJP</a> as a software engineer.
		</p>
	{/if}
</section>
