<script>
	import { animate, inView } from 'motion';
	import { onMount } from 'svelte';
	import Divider from '../components/Divider.svelte';

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
	/**
	 * @type {import("motion").MotionValue<string> | import("motion-dom").ElementOrSelector}
	 */
	let okupljanje;
	/**
	 * @type {import("motion").MotionValue<string> | import("motion-dom").ElementOrSelector}
	 */
	let vjencanje;
	/**
	 * @type {import("motion").MotionValue<string> | import("motion-dom").ElementOrSelector}
	 */
	let sala;

	/**
	 * @type {import("motion").MotionValue<string> | import("motion-dom").ElementOrSelector}
	 */
	let datumDan;
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
			animate(datum, { opacity: [0, 100] }, { duration: 1, easing: 'ease-in', delay: 1.5 });
		});

		inView(okupljanje, () => {
			animate(okupljanje, { opacity: [0, 1], x: [-100, 0] }, { duration: 1, easing: 'ease-in' });
		});

		inView(vjencanje, () => {
			animate(vjencanje, { opacity: [0, 1], x: [100, 0] }, { duration: 1, easing: 'ease-in' });
		});

		inView(sala, () => {
			animate(sala, { opacity: [0, 1], x: [-100, 0] }, { duration: 1, easing: 'ease-in' });
		});

		inView(datumDan, () => {
			animate(1, 26, {
				duration: 2,
				delay: 2.5,
				ease: 'circOut',
				onUpdate: (latest) => (datumDan.innerHTML = Math.round(latest))
			});
		});
	});
</script>

<div
	class="relative flex min-h-screen flex-col bg-[url('https://images.unsplash.com/photo-1570579984759-0915125b99bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-fixed bg-center"
>
	<div class="sticky top-12 z-20 ml-8 flex bg-transparent pt-8 font-noto text-6xl text-gray-50">
		<h1 class="flex-wrap border-r-2 border-gray-50 pb-2 pr-4">M</h1>
		<h1 class="pb-2 pl-4">V</h1>
	</div>
</div>

<div class="text-center font-noto text-2xl text-gray-600 md:text-4xl">
	<h1 bind:this={marija} class="pt-8 font-bold uppercase tracking-widest">Marija Matijevic</h1>
	<h1 bind:this={and} class="py-2 font-lavishly text-5xl">and</h1>
	<h1 bind:this={valentin} class="font-bold uppercase tracking-widest">Valentin Vareskic</h1>
	<h1 bind:this={datum} class="pt-16 uppercase">
		<span bind:this={datumDan}>26</span>. <span>Rujan</span> 2025.
	</h1>
</div>

<Divider />

<div class="px-4 text-center text-lg text-gray-600 md:text-4xl">
	<div bind:this={okupljanje}>
		<h1 class="pt-4 font-lavishly text-4xl tracking-wider">okupljanje u 16 : 30</h1>
		<h1 class="px-2 pt-2 font-noto uppercase tracking-wider">Crkva Sveta Mati Slobode, Jarun</h1>
	</div>
	<div bind:this={vjencanje}>
		<h1 class="pt-16 font-lavishly text-4xl tracking-wider">vjencanje u 17 : 00</h1>
		<h1 class="px-2 pt-2 font-noto uppercase tracking-wider">Crkva Sveta Mati Slobode, Jarun</h1>
	</div>
	<div bind:this={sala}>
		<h1 class="pt-16 font-lavishly text-4xl tracking-wider">svecana vecera u 19 : 00</h1>
		<h1 class="px-2 pt-2 font-noto uppercase tracking-wider">Mansion sala za vjencanja, Zagreb</h1>
	</div>
</div>

<Divider />

<div class="px-2 pt-8 text-center font-noto text-gray-600">
	<h1 class="text-xl">
		Molimo potvrdite svoj dolazak do 10.08.2025. putem forme ili nas kontaktirajte.
	</h1>
	<div class="flex items-center justify-center pt-12 font-extrabold">
		<h1 class="align-middle">Marija +385 95 820 3771</h1>
		<div class="h-full w-8">
			<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
				><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
					id="SVGRepo_tracerCarrier"
					stroke-linecap="round"
					stroke-linejoin="round"
				></g><g id="SVGRepo_iconCarrier">
					<path
						d="M17.6 6.31999C16.8669 5.58141 15.9943 4.99596 15.033 4.59767C14.0716 4.19938 13.0406 3.99622 12 3.99999C10.6089 4.00135 9.24248 4.36819 8.03771 5.06377C6.83294 5.75935 5.83208 6.75926 5.13534 7.96335C4.4386 9.16745 4.07046 10.5335 4.06776 11.9246C4.06507 13.3158 4.42793 14.6832 5.12 15.89L4 20L8.2 18.9C9.35975 19.5452 10.6629 19.8891 11.99 19.9C14.0997 19.9001 16.124 19.0668 17.6222 17.5816C19.1205 16.0965 19.9715 14.0796 19.99 11.97C19.983 10.9173 19.7682 9.87634 19.3581 8.9068C18.948 7.93725 18.3505 7.05819 17.6 6.31999ZM12 18.53C10.8177 18.5308 9.65701 18.213 8.64 17.61L8.4 17.46L5.91 18.12L6.57 15.69L6.41 15.44C5.55925 14.0667 5.24174 12.429 5.51762 10.8372C5.7935 9.24545 6.64361 7.81015 7.9069 6.80322C9.1702 5.79628 10.7589 5.28765 12.3721 5.37368C13.9853 5.4597 15.511 6.13441 16.66 7.26999C17.916 8.49818 18.635 10.1735 18.66 11.93C18.6442 13.6859 17.9355 15.3645 16.6882 16.6006C15.441 17.8366 13.756 18.5301 12 18.53ZM15.61 13.59C15.41 13.49 14.44 13.01 14.26 12.95C14.08 12.89 13.94 12.85 13.81 13.05C13.6144 13.3181 13.404 13.5751 13.18 13.82C13.07 13.96 12.95 13.97 12.75 13.82C11.6097 13.3694 10.6597 12.5394 10.06 11.47C9.85 11.12 10.26 11.14 10.64 10.39C10.6681 10.3359 10.6827 10.2759 10.6827 10.215C10.6827 10.1541 10.6681 10.0941 10.64 10.04C10.64 9.93999 10.19 8.95999 10.03 8.56999C9.87 8.17999 9.71 8.23999 9.58 8.22999H9.19C9.08895 8.23154 8.9894 8.25465 8.898 8.29776C8.8066 8.34087 8.72546 8.403 8.66 8.47999C8.43562 8.69817 8.26061 8.96191 8.14676 9.25343C8.03291 9.54495 7.98287 9.85749 8 10.17C8.0627 10.9181 8.34443 11.6311 8.81 12.22C9.6622 13.4958 10.8301 14.5293 12.2 15.22C12.9185 15.6394 13.7535 15.8148 14.58 15.72C14.8552 15.6654 15.1159 15.5535 15.345 15.3915C15.5742 15.2296 15.7667 15.0212 15.91 14.78C16.0428 14.4856 16.0846 14.1583 16.03 13.84C15.94 13.74 15.81 13.69 15.61 13.59Z"
						fill="#6B7280 "
					></path>
				</g></svg
			>
		</div>
	</div>

	<div class="flex items-center justify-center font-extrabold">
		<h1 class="align-middle">Valentin +385 95 820 3771</h1>
		<div class="h-full w-8">
			<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
				><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
					id="SVGRepo_tracerCarrier"
					stroke-linecap="round"
					stroke-linejoin="round"
				></g><g id="SVGRepo_iconCarrier">
					<path
						d="M17.6 6.31999C16.8669 5.58141 15.9943 4.99596 15.033 4.59767C14.0716 4.19938 13.0406 3.99622 12 3.99999C10.6089 4.00135 9.24248 4.36819 8.03771 5.06377C6.83294 5.75935 5.83208 6.75926 5.13534 7.96335C4.4386 9.16745 4.07046 10.5335 4.06776 11.9246C4.06507 13.3158 4.42793 14.6832 5.12 15.89L4 20L8.2 18.9C9.35975 19.5452 10.6629 19.8891 11.99 19.9C14.0997 19.9001 16.124 19.0668 17.6222 17.5816C19.1205 16.0965 19.9715 14.0796 19.99 11.97C19.983 10.9173 19.7682 9.87634 19.3581 8.9068C18.948 7.93725 18.3505 7.05819 17.6 6.31999ZM12 18.53C10.8177 18.5308 9.65701 18.213 8.64 17.61L8.4 17.46L5.91 18.12L6.57 15.69L6.41 15.44C5.55925 14.0667 5.24174 12.429 5.51762 10.8372C5.7935 9.24545 6.64361 7.81015 7.9069 6.80322C9.1702 5.79628 10.7589 5.28765 12.3721 5.37368C13.9853 5.4597 15.511 6.13441 16.66 7.26999C17.916 8.49818 18.635 10.1735 18.66 11.93C18.6442 13.6859 17.9355 15.3645 16.6882 16.6006C15.441 17.8366 13.756 18.5301 12 18.53ZM15.61 13.59C15.41 13.49 14.44 13.01 14.26 12.95C14.08 12.89 13.94 12.85 13.81 13.05C13.6144 13.3181 13.404 13.5751 13.18 13.82C13.07 13.96 12.95 13.97 12.75 13.82C11.6097 13.3694 10.6597 12.5394 10.06 11.47C9.85 11.12 10.26 11.14 10.64 10.39C10.6681 10.3359 10.6827 10.2759 10.6827 10.215C10.6827 10.1541 10.6681 10.0941 10.64 10.04C10.64 9.93999 10.19 8.95999 10.03 8.56999C9.87 8.17999 9.71 8.23999 9.58 8.22999H9.19C9.08895 8.23154 8.9894 8.25465 8.898 8.29776C8.8066 8.34087 8.72546 8.403 8.66 8.47999C8.43562 8.69817 8.26061 8.96191 8.14676 9.25343C8.03291 9.54495 7.98287 9.85749 8 10.17C8.0627 10.9181 8.34443 11.6311 8.81 12.22C9.6622 13.4958 10.8301 14.5293 12.2 15.22C12.9185 15.6394 13.7535 15.8148 14.58 15.72C14.8552 15.6654 15.1159 15.5535 15.345 15.3915C15.5742 15.2296 15.7667 15.0212 15.91 14.78C16.0428 14.4856 16.0846 14.1583 16.03 13.84C15.94 13.74 15.81 13.69 15.61 13.59Z"
						fill="#6B7280 "
					></path>
				</g></svg
			>
		</div>
	</div>
</div>

<Divider />

<div class="flex flex-col px-8 pt-8">
	<label for="ime" class="text-gray-700">Ime</label>
	<input
		type="text"
		id="ime"
		name="ime"
		class="border-0 border-b-2 px-0 font-noto text-gray-600 focus:ring-0"
	/>
	<label for="prezime" class="pt-4 text-gray-700">Prezime</label>
	<input
		type="text"
		id="prezime"
		name="prezime"
		class="border-0 border-b-2 px-0 font-noto text-gray-600 focus:ring-0"
	/>
	<label for="dolazak" class="pt-4 text-gray-700">Potvrda dolaska</label>
	<select id="dolazak" class="border-0 border-b-2 px-0 font-noto text-gray-600 focus:ring-0">
		<option selected>Odaberite</option>
		<option value="da">Da</option>
		<option value="ne">Na</option>
	</select>
	<label for="brojgostiju" class="pt-4 text-gray-700">Broj gostiju</label>
	<select id="brojgostiju" class="border-0 border-b-2 px-0 font-noto text-gray-600 focus:ring-0">
		<option selected>Odaberite</option>
		<option value="1">1</option>
		<option value="2">2</option>
		<option value="3">3</option>
		<option value="4">4</option>
		<option value="5">5</option>
		<option value="6">6</option>
		<option value="7">7</option>
	</select>
	<label for="poruka" class="pt-4 text-gray-700">Poruka</label>
	<textarea
		id="poruka"
		name="poruka"
		rows="3"
		class="border-0 border-b-2 px-0 font-noto text-gray-600 focus:ring-0"
	></textarea>
	<div class="flex justify-center pt-8">
		<button
			class="border-2 border-gray-600 px-4 py-2 text-xl font-semibold uppercase tracking-widest text-gray-700"
			>Posalji</button
		>
	</div>
</div>

<div class="px-8 py-8 text-center font-noto text-xl font-extrabold text-gray-600">
	<h1>Veselimo se vasem dolasku!</h1>
</div>
