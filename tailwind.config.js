module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './containers/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				exo: "'Exo One', sans",
				anton: "'Anton', sans-serif",
				michroma: "'Michroma', sans-serif",
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
			keyframes: {
				modal: {
					'0%': { transform: 'scale(0.01)' },
					'100%': { transform: 'scale(1)' },
				},
				'fade-out': {
					'0%': { opacity: 1, transform: 'rotate(0deg)' },
					'100%': { opacity: 0, transform: 'rotate(90deg)' },
				},
				'fade-in': {
					'0%': { opacity: 0, transform: 'rotate(90deg)' },
					'100%': { opacity: 1, transform: 'rotate(0deg)' },
				},
			},
			animation: {
				modal: 'modal 0.2s ease-in',
				'fade-out': 'fade-out 0.2s ease-in-out forwards',
				'fade-in': 'fade-in 0.2s ease-in-out forwards',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
