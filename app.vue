<template>
	<div ref="appRef" id="themeConfig" :class="themeConfig">
		<el-config-provider :locale="lang">
			<NuxtLayout>
				<NuxtPage />
			</NuxtLayout>
		</el-config-provider>
	</div>
</template>

<script lang="ts" setup>
import Cookies from 'js-cookie'
const themeConfig = useCookie<string>('theme-mode')
import { messages } from '@/plugins/i18n'
import { useI18n } from 'vue-i18n'
import { GlobalStore } from '@/store'
const useGlobalStore = GlobalStore()
const { locale } = useI18n()
const appRef = ref()
onMounted(() => {
	themeConfig.value = Cookies.get('theme-mode') || 'light'
	useGlobalStore.updateDevice()
	updateElDeviceClass()
	window.addEventListener('resize', useGlobalStore.updateDevice)
})
const updateElDeviceClass = () => {
	const isMobile = useGlobalStore.isMobile
	// nextTick(() => {
	// console.error(appRef.value.classList, 'appRef.value.classList')
	appRef.value?.classList.remove(isMobile ? 'pro_pc' : 'pro_mobile')
	appRef.value?.classList.add(isMobile ? 'pro_mobile' : 'pro_pc')
	// })
}
watch(() => useGlobalStore.isMobile, () => {
	// console.log(isMobile, 'watch useGlobalStore.isMobile')
	updateElDeviceClass()
}/*, { immediate: true }*/)
onUnmounted(() => {
	window.removeEventListener('resize', useGlobalStore.updateDevice)
})

const lang = computed(() => {
	// locale
	return messages[locale.value] || messages['zh-CN']
})
</script>

<style lang="scss" scoped>
#themeConfig {
	min-height: 100vh;
	background-color: var(--layout-background-color);
}
</style>
