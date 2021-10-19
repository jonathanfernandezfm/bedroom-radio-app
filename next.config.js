const withPWA = require('next-pwa');

module.exports = withPWA({
	pwa: {
		dest: 'public',
		register: true,
		skipWaiting: true,
	},
	reactStrictMode: true,
	env: { API_URL: process.env.API_URL },
	i18n: {
		locales: ['es'],
		defaultLocale: 'es',
	},
});
