<script>
	import { animate, inView } from 'motion';
	import { onMount } from 'svelte';

	/**
	 * @type {import("motion").MotionValue<string> | import("motion-dom").ElementOrSelector}
	 */
	let imeDiv;
	/**
	 * @type {import("motion").MotionValue<string> | import("motion-dom").ElementOrSelector}
	 */
	let prezimeDiv;
	/**
	 * @type {import("motion").MotionValue<string> | import("motion-dom").ElementOrSelector}
	 */
	let potvrdaDiv;
    /**
	 * @type {import("motion").MotionValue<string> | import("motion-dom").ElementOrSelector}
	 */
    let brojDiv;
    /**
	 * @type {import("motion").MotionValue<string> | import("motion-dom").ElementOrSelector}
	 */
    let porukaDiv;
    let callToAction;

	onMount(() => {
		inView(imeDiv, () => {
			animate(imeDiv, { opacity: [0, 100], y: [10, 0] }, { duration: 1.2, easing: 'ease-in', delay: 0.3 });
		});
		inView(prezimeDiv, () => {
			animate(prezimeDiv, { opacity: [0, 100], y: [10, 0] }, { duration: 1.2, easing: 'ease-in', delay: 0.4 });
		});
		inView(potvrdaDiv, () => {
			animate(potvrdaDiv, { opacity: [0, 100], y: [10, 0] }, { duration: 1.2, easing: 'ease-in', delay: 0.5 });
		});
		inView(brojDiv, () => {
			animate(brojDiv, { opacity: [0, 100], y: [10, 0] }, { duration: 1.2, easing: 'ease-in', delay: 0.6 });
		});
		inView(porukaDiv, () => {
			animate(porukaDiv, { opacity: [0, 100], y: [10, 0] }, { duration: 1.2, easing: 'ease-in', delay: 0.7 });
		});
		inView(callToAction, () => {
			animate(callToAction, { opacity: [0, 100], y: [10, 0] }, { duration: 1.2, easing: 'ease-in', delay: 0.8 });
		});
	});
</script>

<div class="flex flex-col px-8 pt-8">
	<div bind:this={imeDiv} class="flex flex-col">
		<label for="ime" class="text-gray-700">Ime</label>
		<input
			type="text"
			id="ime"
			name="ime"
			class="border-0 border-b-2 px-0 font-noto text-gray-600 focus:ring-0"
		/>
	</div>
    <div bind:this={prezimeDiv} class="flex flex-col">
        <label for="prezime" class="pt-4 text-gray-700">Prezime</label>
        <input
            type="text"
            id="prezime"
            name="prezime"
            class="border-0 border-b-2 px-0 font-noto text-gray-600 focus:ring-0"
        />
    </div> 
    <div bind:this={potvrdaDiv} class="flex flex-col">
        <label for="dolazak" class="pt-4 text-gray-700">Potvrda dolaska</label>
        <select id="dolazak" class="border-0 border-b-2 px-0 font-noto text-gray-600 focus:ring-0">
            <option selected>Odaberite</option>
            <option value="da">Da</option>
            <option value="ne">Na</option>
        </select>
    </div>
    <div class="flex flex-col" bind:this={brojDiv}>
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
    </div>
    <div class="flex flex-col" bind:this={porukaDiv}>
        <label for="poruka" class="pt-4 text-gray-700">Poruka</label>
        <textarea
            id="poruka"
            name="poruka"
            rows="3"
            class="border-0 border-b-2 px-0 font-noto text-gray-600 focus:ring-0"
        ></textarea>
    </div>
	<div bind:this={callToAction} class="flex justify-center pt-8">
		<button
			class="border-2 border-gray-600 px-4 py-2 text-xl font-semibold uppercase tracking-widest text-gray-700"
			>Posalji</button
		>
	</div>
</div>
