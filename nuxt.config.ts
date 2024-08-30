// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { resolve } from 'pathe'
import { loadEnv } from 'vite'

export default defineNuxtConfig({
	devtools: { enabled: true },
	devServer: {
		port: 4000
	},
	app: {
		head: {
			meta: [{ name: 'referrer', content: 'no-referrer' }],
		},
	},
	runtimeConfig: {
		// 运行时常量
		public: {
			// 客户端-服务的都能访问
			baseUrl: loadEnv(process.argv[process.argv.length - 1], './env').VITE_API_URL,
		},
	},
	modules: ['@pinia/nuxt', 'nuxt-windicss', '@nuxtjs/i18n'], //
	i18n: {
		locales: [
			{ code: 'zh', iso: 'zh-CN', file: 'zh-CN.ts' },
			{ code: 'en', iso: 'en-US', file: 'en-US.ts' }
		],
		defaultLocale: 'en',
		langDir: 'locales/',
		// strategy: 'prefix_except_default',
		strategy: 'no_prefix',
		// vueI18n: './locales/nuxt-i18n.ts'
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/assets/styles/global.scss" as *;', // 注意文件路径要配成自己的
				},
			},
		},
	},
	css: [/*'element-plus/dist/index.css', */'assets/styles/index.scss', 'assets/styles/juejin.css'],
	alias: {
		'@': resolve(__dirname, './'),
	},
})
