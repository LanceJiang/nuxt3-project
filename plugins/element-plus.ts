// @ts-ignore
import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// import zhCn from 'element-plus/es/locale/lang/zh-cn'

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(ElementPlus, {
		// i18n: nuxtApp.vueApp.config.globalProperties.$t
	})
})
