<script>
	import { animate, inView } from 'motion';
	import { onMount } from 'svelte';

	/**
	 * @type {import("motion").MotionValue<string> | import("motion-dom").ElementOrSelector}
	 */
	let marija;
	/**
	 * @type {import("motion").MotionValue<string> | import("motion-dom").ElementOrSelector}
	 */
	let valentin;
	/**
	 * @type {import("motion").MotionValue<string> | import("motion-dom").ElementOrSelector}
	 */
	let and;
	/**
	 * @type {import("motion").MotionValue<string> | import("motion-dom").ElementOrSelector}
	 */
	let datum;

	onMount(() => {
		inView(marija, () => {
			animate(marija, { opacity: [0, 100], y: [100, 0] }, { duration: 2, easing: 'ease-in' });
		});

		inView(and, () => {
			animate(and, { opacity: [0, 100], y: [100, 0] }, { duration: 2, easing: 'ease-in' });
		});

		inView(valentin, () => {
			animate(valentin, { opacity: [0, 100], y: [100, 0] }, { duration: 2, easing: 'ease-in' });
		});

		inView(datum, () => {
			animate(
				datum,
				{ opacity: [0, 100], y: [100, 0] },
				{ duration: 2, easing: 'ease-in', delay: 1 }
			);
		});
	});
</script>

<div
	class="relative flex min-h-screen flex-col bg-[url('https://images.unsplash.com/photo-1570579984759-0915125b99bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-fixed"
>
	<div class="fixed ml-8 mt-16 flex h-fit pt-8 font-noto text-9xl text-gray-50">
		<h1 class="flex-wrap border-r-2 border-gray-50 pb-2 pr-4">M</h1>
		<h1 class="pb-2 pl-4">V</h1>
	</div>
</div>

<div class="text-center font-noto text-2xl text-gray-600 md:text-4xl">
	<h1 bind:this={marija} class="pt-8 uppercase tracking-widest">Marija Matijevic</h1>
	<h1 bind:this={and} class="py-2 font-lavishly text-5xl">and</h1>
	<h1 bind:this={valentin} class="uppercase tracking-widest">Valentin Vareskic</h1>
	<h1 bind:this={datum} class="pt-4 uppercase">26. Rujan 2025.</h1>
	<div class="flex items-center justify-center gap-2 pb-8 pt-16">
		<div class="h-[0.8px] w-20 bg-gray-600"></div>
		<div class="">
			<svg
				width="17.5"
				height="19.25"
				viewBox="0 0 70 77"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M34.6031 31.0001C32.1092 18.6496 29.407 4.46732 14.6031 2C6.76537 0.693718 2.66023 6.00006 1.16022 12.5001C-1.33977 36.0001 26.1031 66.0001 35.6031 75.5001"
					stroke="black"
					stroke-width="1.9"
					stroke-linecap="round"
				/>
				<path
					d="M34.6031 31.0349C37.0969 18.6844 39.9963 3.65921 54.8002 1.19189C62.6379 -0.114395 66.7273 5.44354 68.2274 11.9436C70.7273 35.4436 45.1031 66 35.603 75.5"
					stroke="black"
					stroke-width="1.9"
					stroke-linecap="round"
				/>
			</svg>
		</div>
		<div class="h-[0.8px] w-20 bg-gray-600"></div>
	</div>
</div>

<div class="text-center text-2xl text-gray-600 md:text-4xl">
	<h1 class="pt-4 font-lavishly text-4xl tracking-wider">okupljanje u 16 : 30</h1>
	<h1 class="pt-2 font-noto tracking-wider">Crkva Sveta Mati Slobode</h1>

	<h1 class="pt-8 font-lavishly text-4xl tracking-wider">vjencanje u 17 : 00</h1>
	<h1 class="pt-2 font-noto tracking-wider">Crkva Sveta Mati Slobode</h1>
</div>
