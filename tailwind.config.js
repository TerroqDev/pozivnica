import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				cormorant: ['Cormorant Garamond', 'serif'],
				imperial: ['Imperial Script', 'cursive'],
                ms: ['Mrs Saint Delafield', 'cursive'],
                samfhang: ["The Samfhang", "cursive"],
                blosta: ["Blosta", "serif"]
			}
		}
	},

	plugins: [typography, forms, containerQueries]
};
