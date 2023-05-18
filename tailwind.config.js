/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {},
		fontFamily: {
			sans: 'Inter',
		},
		colors: {
			'text-primary': '#1F1F1F',
			'text-secondary': '#545454',
			'text-tetriary': '#A6A6A6',
			'text-on-brand': '#F2F2F2',

			'light-1': '#FFFFFF',
			'light-2': '#F7F7F7',
			'light-3': '#F0F0F0',
			'light-4': '#E8E8E8',
			'light-5': '#E0E0E0',

			'primary-50': '#E7E9FB',
			'primary-100': '#C2C8F4',
			'primary-200': '#98A4ED',
			'primary-300': '#6A81E7',
			'primary-400': '#4164E2',
			'primary-500': '#0048DB',
			'primary-600': '#003FD0',
			'primary-700': '#0035C4',
			'primary-800': '#002AB9',
			'primary-900': '#0014A2',

			red: '#D53F3F',
			green: '#04BD0C',
		},
		container: {
			center: true,
			padding: '24px',
			screens: {
				DEFAULT: '1248px', // extra 48px to account for padding
			},
		},
	},
	plugins: [],
};
