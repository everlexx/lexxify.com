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
			'text-on-primary': '#F2F2F2',

			'light-1': '#FFFFFF',
			'light-2': '#F7F7F7',
			'light-3': '#F0F0F0',
			'light-4': '#E8E8E8',
			'light-5': '#E0E0E0',

			'primary-50': '#E8EAF6',
			'primary-100': '#C5CAE9',
			'primary-200': '#9FA8DA',
			'primary-300': '#7986CB',
			'primary-400': '#5C6BC0',
			'primary-500': '#3F51B5',
			'primary-600': '#3949AB',
			'primary-700': '#303F9F',
			'primary-800': '#283593',
			'primary-900': '#1A237E',

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
