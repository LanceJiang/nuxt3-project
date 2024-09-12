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
		screens: {
			'mobile': { max: '750px' }, // 最大宽 750
			'pc': '751px', // 最小宽 750
			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1440px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px'
			// => @media (min-width: 1536px) { ... }
		},
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
