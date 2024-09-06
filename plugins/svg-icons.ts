import SvgIcon from '@/components/SvgIcon.vue'
// 引入svg注册脚本
import 'virtual:svg-icons-register'

export default defineNuxtPlugin(nuxtApp => {
	nuxtApp.vueApp.component('svg-icon', SvgIcon);
})
