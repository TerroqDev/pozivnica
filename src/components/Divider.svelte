<script>
	import { animate, inView } from 'motion';
	import { onMount } from 'svelte';

	/**
	 * @type {import("motion-dom").ElementOrSelector}
	 */
	let leftDivider;
	/**
	 * @type {import("motion-dom").ElementOrSelector}
	 */
	let rightDivider;

	/**
	 * @type {import("motion-dom").ElementOrSelector}
	 */
	let heart;

	onMount(() => {
		inView(leftDivider, () => {
			animate(leftDivider, { scaleX: [0, 1] }, { duration: 1.5, easing: 'ease-in' });
			animate(rightDivider, { scaleX: [0, 1] }, { duration: 1.5, easing: 'ease-in' });
			animate(heart, { opacity: [0, 1] }, { duration: 1.5, easing: 'ease-in' });
		});
	});
</script>

<div class="flex items-center justify-center gap-2 pb-8 pt-16">
	<div bind:this={leftDivider} class="h-[0.8px] w-20 origin-right bg-gray-600"></div>
	<div bind:this={heart} class="">
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
	<div bind:this={rightDivider} class="h-[0.8px] w-20 origin-left bg-gray-600"></div>
</div>
