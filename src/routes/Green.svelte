<script>
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	let ready = false;
	let ended = true;
	onMount(() => {
		ready = true;

		setTimeout(() => {
			ended = false;
		}, 2000);
	});
</script>

{#if ended}
	<section
		out:fade={{ duration: 500 }}
		class="flex items-center justify-center h-screen text-center"
	>
		<div class="-mt-[20vh]">
			<p class="text-9xl font-bold text-green-700">Green</p>
			<br />
			{#if ready}
				<p class="text-6xl">
					The Color of <span transition:fade={{ duration: 500 }}>Nature</span><span
						transition:fade={{ duration: 1000, delay: 500 }}>, growth</span
					><span transition:fade={{ duration: 1000, delay: 1000 }}>, and renewal</span>
				</p>
			{/if}
		</div>
	</section>
{/if}
