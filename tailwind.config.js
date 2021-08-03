module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				krona: "'Krona One', sans",
				exo: "'Exo One', sans",
			},
			scale: {
				200: '2',
				400: '4',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
