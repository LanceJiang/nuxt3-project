// @ts-ignore
import { createI18n } from 'vue-i18n'

import en from 'element-plus/es/locale/lang/en'
import en_US from '@/locales/en-US'

import zhCn from 'element-plus/es/locale/lang/zh-cn'
import zh_CN from '@/locales/zh-CN'

export const messages = {
	'en-US': {
		...en,
		...en_US/*,
			message: {
				hello: 'hello world'
			}*/
	},
	'zh-CN': {
		...zhCn,
		...zh_CN/*,
			message: {
				hello: '你好，世界'
			}*/
	}
}

export default defineNuxtPlugin(nuxtApp => {

	const i18n = createI18n({
		legacy: false,
		locale: 'zh-CN', // 设置默认语言
		fallbackLocale: 'en-US', // 设置备用语言
		messages,
	})
	nuxtApp.vueApp.use(i18n)
})
