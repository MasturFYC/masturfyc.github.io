/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Roboto', defaultTheme.fontFamily.sans],
				display: ['Roboto', defaultTheme.fontFamily.sans]
			},
			fontSize: {
				sm: ['14px', '20px'],
				base: ['16px', '24px'],
				lg: ['20px', '28px'],
				xl: ['24px', '32px']
			}
		}
	},
	plugins: []
};
