<script>
	import { animate, inView } from 'motion';
	import { onDestroy, onMount } from 'svelte';

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
	 * @type {import("motion-dom").ElementOrSelector}
	 */
    let poziv;

    /**
	 * @type {import("motion-dom").ElementOrSelector | import("motion").MotionValue<string>}
	 */
    let marija;

    /**
	 * @type {import("motion-dom").ElementOrSelector | import("motion").MotionValue<string>}
	 */
    let valentin;

    /**
	 * @type {import("motion-dom").ElementOrSelector | import("motion").MotionValue<string>}
	 */
    let datumZlatni;

    /**
	 * @type {import("motion").MotionValue<string> | import("motion-dom").ElementOrSelector}
	 */
    let okupljanje;

    /**
	 * @type {import("motion-dom").ElementOrSelector | import("motion").MotionValue<string>}
	 */
    let sala;

    /**
	 * @type {import("motion-dom").ElementOrSelector | import("motion").MotionValue<string>}
	 */
    let vjencanje;

    let datumGlavni;
    let potvrda;

    let brojMare;
    let brojVale;

	onMount(() => {
        inView(poziv, () => {
            animate(poziv, { opacity: [0, 1]}, {duration: 1.7, easing: "ease-in", delay: 0.2})
        })
        inView(marija, () => {
            animate(marija, { opacity: [0, 1]}, {duration: 1.7, easing: "ease-in", delay: 0.2})
        })
        inView(valentin, () => {
            animate(valentin, { opacity: [0, 1]}, {duration: 1.7, easing: "ease-in", delay: 0.3})
        })

        inView(datumZlatni, () => {
            animate(datumZlatni, { opacity: [0, 1]}, {duration: 3.7, easing: "ease-in", delay: 0.3})
        })

        inView(okupljanje, () => {
            animate(okupljanje, { opacity: [0, 1], y: [50,0]}, {duration: 1.5, easing: "ease-in", delay: 0.1})
        })
        inView(sala, () => {
            animate(sala, { opacity: [0, 1], y: [50,0]}, {duration: 1.5, easing: "ease-in", delay: 0.3})
        })
        inView(vjencanje, () => {
            animate(vjencanje, { opacity: [0, 1], y: [50,0]}, {duration: 1.5, easing: "ease-in", delay: 0.5})
        })

        inView(datumGlavni, () => {
            animate(datumGlavni, { opacity: [0, 1]}, {duration: 1.5, easing: "ease-in", delay: 1})
        })

        inView(potvrda, () => {
            animate(potvrda, { opacity: [0, 1]}, {duration: 2, easing: "ease-in", delay: 0.5})
        })

        inView(brojMare, () => {
            animate(brojMare, { opacity: [0, 1], x:[-50, 0]}, {duration: 1.5, easing: "ease-in", delay: 0.5})
        })

        inView(brojVale, () => {
            animate(brojVale, { opacity: [0, 1], x:[50, 0]}, {duration: 1.5, easing: "ease-in", delay: 0.5})
        })
	});
</script>

<svelte:window bind:outerHeight={z} bind:scrollY={y} />
<div class={`${topBorder ? "hidden" : "block"}`}>
	<div
		class="fixed top-0 z-10 h-10 w-full bg-[url('https://woop14abphufecql.public.blob.vercel-storage.com/pozivnica/Mask%20group%289%29-aOO9vCR7TYJtLgaYIe5LbtubPdPQ2X.png')] bg-cover bg-bottom"
	></div>
</div>

<div
	class="relative flex h-screen w-screen flex-col bg-[url('https://woop14abphufecql.public.blob.vercel-storage.com/pozivnica/pozvnica.png')] bg-cover bg-center md:bg-top bg-fixed"
>
</div>

<div class="relative -mt-24 bg-transparent">
	<div
		class="h-24 w-full bg-[url('https://woop14abphufecql.public.blob.vercel-storage.com/pozivnica/Mask%20group%284%29-junRLKTvpDBwHpNHTxLavxctPsMbOt.png')] bg-cover"
	></div>
</div>

<div class="text-center text-2xl text-text md:text-4xl lg:pt-20">
    <h2 bind:this={poziv} class="text-base md:text-lg font-cormorant font-normal px-20">Pozivamo vas da zajedno proslavimo dan našeg vjenčanja</h2>
</div>

<div class="relative text-center text-2xl text-text md:text-4xl pt-16 pb-8 md:py-20 ">
	<div class="absolute leading-[0.7] whitespace-pre inset-0 flex flex-col items-center justify-center pointer-events-none select-none opacity-10 text-amber-500 text-[10rem] md:text-[12rem] font-blosta">
		<span bind:this={datumZlatni}>
26
09
25
        </span>
	</div>
    <h1 bind:this={marija} class="pt-8 text-9xl font-samfhang leading-[0.7] z-10 relative pr-10">Marija </h1>
    <h1 bind:this={valentin} class="pt-8 text-9xl font-samfhang z-10 leading-none relative pl-10">
      <span class="align-top text-[3rem] leading-none inline-block translate-y-[-0.25em]">i</span> Valentin
    </h1>
</div>

<div class="flex flex-col justify-center align-middle font-cormorant pt-8">
    <p bind:this={okupljanje} class="text-center">Okupljanje <span class="uppercase font-bold">• medeni bar •</span> 15:00</p>
    <p bind:this={sala} class="text-center">Vjenčanje <span class="uppercase font-bold">• crkva sv. mati slobode •</span> 17:00</p>
    <p bind:this={vjencanje} class="text-center">Svečana večera <span class="uppercase font-bold">• mansion event resort •</span> 19:00</p>
</div>

<div class="pt-8 pb-4">
    <h1 bind:this={datumGlavni} class="font-blosta text-5xl text-center">26.09.2025.</h1>
    <p bind:this={potvrda} class="font-cormorant text-center pt-8">Molimo vas da svoj dolazak potvrdite do <span class="font-bold">6. rujna 2025.</span></p>
    <div class="flex font-cormorant gap-8 justify-center pt-4">
        <div bind:this={brojMare} class="flex flex-col">
            <h2 class="text-center">Marija</h2>
            <p>097 796 7644</p>
        </div>
        <div bind:this={brojVale} class="flex flex-col">
            <h2 class="text-center">Valentin</h2>
            <p>095 820 3771</p>
        </div>
    </div>
</div>

