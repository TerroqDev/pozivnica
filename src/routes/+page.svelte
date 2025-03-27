<script>
	import { animate, inView } from 'motion';
	import { onDestroy, onMount } from 'svelte';
	import Divider from '../components/Divider.svelte';
	import Form from '../components/Form.svelte';
	import ContactHandle from '../components/ContactHandle.svelte';

	let topBorder = false;
    /**
	 * @type {any}
	 */
    let y;
    /**
	 * @type {any}
	 */
    let z;

    $: topBorder = y > z;

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

<svelte:window bind:outerHeight={z} bind:scrollY={y} />
<div class={`${topBorder ? "hidden" : "block"}`}>
	<div
		class="fixed top-0 z-10 h-10 w-full bg-[url('https://woop14abphufecql.public.blob.vercel-storage.com/pozivnica/Mask%20group%289%29-aOO9vCR7TYJtLgaYIe5LbtubPdPQ2X.png')] bg-cover bg-bottom"
	></div>
</div>

<div
	class="relative flex min-h-screen flex-col bg-[url('https://images.unsplash.com/photo-1570579984759-0915125b99bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-fixed bg-center"
>
	<div class="sticky top-12 z-20 ml-8 flex bg-transparent pt-8 font-noto text-5xl text-white">
		<h1 class="flex-wrap border-r-2 border-white pb-2 pr-4">M</h1>
		<h1 class="pb-2 pl-4">V</h1>
	</div>
</div>

<div class="relative -mt-24 bg-transparent">
	<div
		class="h-24 w-full bg-[url('https://woop14abphufecql.public.blob.vercel-storage.com/pozivnica/Mask%20group%284%29-junRLKTvpDBwHpNHTxLavxctPsMbOt.png')] bg-cover"
	></div>
</div>

<div class="text-center font-noto text-2xl text-gray-600 md:text-4xl lg:pt-20">
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
	<h1 class="pb-12 text-xl">
		Molimo potvrdite svoj dolazak do 10.08.2025. putem forme ili nas kontaktirajte.
	</h1>
	<ContactHandle name="Marija" number="958203771" />
	<ContactHandle name="Valentin" number="978203771" />
</div>

<Divider />

<Form />

<div class="px-8 py-8 text-center font-noto text-xl font-extrabold text-gray-600">
	<h1>Veselimo se vasem dolasku!</h1>
</div>
