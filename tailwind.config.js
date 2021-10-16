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
			opacity: {
				8: '0.08',
				13: '0.13',
				14: '0.14',
				15: '0.15',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
