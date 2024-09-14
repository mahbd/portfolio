<script>
	import { Icon } from 'svelte-icons-pack';
	import { FiPhoneCall } from 'svelte-icons-pack/fi';
	import { TrOutlineMail } from 'svelte-icons-pack/tr';
	import { FaSolidLocationDot } from 'svelte-icons-pack/fa';
</script>

<section class="flex items-center justify-between gap-10 pt-32" id="contact">
	<div class="bg-green-950 p-5 rounded-2xl max-w-[500px]">
		<p class="font-bold text-4xl gradient-text text-center z-50">Let's Talk</p>
		<p>I design and code beautifully simple things and i love what i do. Just simple like that!</p>
		<form class="mt-10">
			<input
				class="w-full rounded-lg px-5 py-3 bg-[#0a1306] focus:outline-green-700"
				placeholder="Your Name"
			/>
			<input
				class="w-full rounded-lg px-5 py-3 bg-[#0a1306] focus:outline-green-700 mt-3"
				placeholder="Your Email"
			/>
			<textarea
				class="w-full h-32 rounded-lg px-5 py-3 bg-[#0a1306] focus:outline-green-700 mt-3"
				placeholder="Your Message"
			/>
			<div class="flex justify-center mt-3">
				<button
					class="text-white text-lg rounded-2xl px-10 py-2 gradient-button hover:bg-gradient-to-r"
					>Send Message</button
				>
			</div>
		</form>
	</div>
	<div class="flex flex-col gap-5">
		<div class="flex items-center gap-2">
			<div class="rounded-full p-3 bg-green-600">
				<Icon src={FiPhoneCall} color="white" size="32px" />
			</div>
			<div>
				<p class="text-lg">Phone</p>
				<p class="text-lg font-bold">+8801567953635</p>
			</div>
		</div>
		<div class="flex items-center gap-2">
			<div class="rounded-full p-3 bg-green-600">
				<Icon src={TrOutlineMail} color="white" size="32px" />
			</div>
			<div>
				<p class="text-lg">Email</p>
				<p class="text-lg font-bold">mahmudula2000@gmail.com</p>
			</div>
		</div>
		<div class="flex items-center gap-2">
			<div class="rounded-full p-3 bg-green-600">
				<Icon src={FaSolidLocationDot} color="white" size="32px" />
			</div>
			<div>
				<p class="text-lg">Location</p>
				<p class="text-lg font-bold">mahmudula2000@gmail.com</p>
			</div>
		</div>
	</div>
</section>
