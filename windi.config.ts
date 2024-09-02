// windi.config.ts
export default {
	devtools: { enabled: true },
	preflight: false,
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./app.vue",
		"./error.vue",
	],
	theme: {
		// screens: {
		// 	sm: '480px',
		// 	md: '768px',
		// 	lg: '976px',
		// 	xl: '1440px'
		// },
		// colors: {
		// 	// blue: '#1fb6ff',
		// 	// pink: '#ff49db',
		// 	// orange: '#ff7849',
		// 	// green: '#13ce66',
		// 	// 'gray-dark': '#273444',
		// 	// gray: '#8492a6',
		// 	// 'gray-light': '#d3dce6'
		// },
		extend: {
			colors: {
				'custom-color': '#f00',
			}
		}
	}
}
