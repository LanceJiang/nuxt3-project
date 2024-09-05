<template>
	<div id="themeConfig" :class="[themeConfig, `${useGlobalStore.isMobile ? 'pro_mobile' : 'pro_pc'}`]">
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
onMounted(() => {
	themeConfig.value = Cookies.get('theme-mode') || 'light'
	useGlobalStore.updateDevice()
	window.addEventListener('resize', useGlobalStore.updateDevice)
})

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
