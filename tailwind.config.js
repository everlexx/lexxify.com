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

			'primary-500': '#3F51B5',

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
