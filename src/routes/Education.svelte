<script>
	import { onMount } from 'svelte';
	let ready = false;
	onMount(() => {
		setTimeout(() => {
			ready = true;
		}, 0);
	});
</script>

{#if ready}
	<section class="">
		<h2 class="text-center font-bold text-6xl text-blue-950 underline">Education</h2>
		<div>
			<div class="flex flex-col items-center justify-center mb-10 mt-5">
				<p class="text-center text-2xl text-green-700">Bachelor of Science</p>
				<p class="text-center text-2xl text-green-700 font-bold">
					Computer Science and Engineering
				</p>
				<p class="text-center text-xl text-green-900">Begum Rokeya University, Rangpur</p>
			</div>
			<div class="flex flex-col items-center justify-center">
				<p class="text-center text-2xl text-green-700">Higher Secondary School Certificate</p>
				<p class="text-center text-2xl text-green-700 font-bold">Science Stream</p>
				<p class="text-center text-xl text-green-700">Rajshahi Government City College</p>
			</div>
		</div>
	</section>
{/if}
