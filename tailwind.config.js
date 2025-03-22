import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				noto: ['Noto Serif', 'serif'],
				roboto: ['Roboto', 'sans-serif'],
				lavishly: ['Lavishly Yours', 'cursive']
			}
		}
	},

	plugins: [typography, forms, containerQueries]
};
