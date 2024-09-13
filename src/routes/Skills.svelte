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
	<section class="text-center">
		<h2 class="font-bold text-6xl text-blue-950 underline mt-24">Skills</h2>
		<h2 class="font-bold text-2xl text-blue-900 underline mt-5">Frameworks</h2>
		<div class="flex flex-col text-xl items-center justify-center mt-1 text-green-700">
			<p><span class="font-bold">Frontend:</span> React, Svelte</p>
			<p><span class="font-bold">Backend:</span> Django, Flask, Express.js, Spring Boot</p>
			<p><span class="font-bold">Full Stack:</span> Next.js, SvelteKit</p>
			<p><span class="font-bold">Application:</span> Flutter, Android Native (Kotlin)</p>
		</div>
		<h2 class="text-center font-bold text-2xl text-blue-900 underline mt-3">Languages</h2>
		<div class="flex flex-col text-xl items-center justify-center mt-1 text-green-700">
			<p class="max-w-[50vw]">
				JavaScript, TypeScript, Python, C, C++, Kotlin, Java, SQL, Bash, HTML, CSS
			</p>
		</div>
		<h2 class="text-center font-bold text-2xl text-blue-900 underline mt-3">Databases</h2>
		<div class="flex flex-col text-xl items-center justify-center mt-1 text-green-700">
			<p class="max-w-[50vw]">
				<span class="font-bold">Engine: </span>PostgreSQL, MySQL, MariaDB, SQLite, MongoDB, Redis
			</p>
			<p class="max-w-[50vw]">
				<span class="font-bold">Connector: </span>Django ORM, Prisma, SQLAlchemy
			</p>
		</div>
		<h2 class="text-center font-bold text-2xl text-blue-900 underline mt-3">Deployment</h2>
		<div class="flex flex-col text-xl items-center justify-center mt-1 text-green-700">
			<p class="max-w-[50vw]">
				<span class="font-bold">Cloud Provider: </span>AWS (EC2, S3, SES, Lambda), GCP (Compute
				Engine, Cloud Storage, App Engine), Azure (Virtual Machines), Heroku, Vercel
			</p>
			<p class="max-w-[50vw]">
				<span class="font-bold">Handler: </span>Nginx, Apache, PM2, Gunicorn
			</p>
			<p class="max-w-[50vw]">
				<span class="font-bold">Versioning: </span>Git, GitHub, Docker
			</p>
		</div>
	</section>
{/if}
