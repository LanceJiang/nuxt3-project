<template>
	<div id="themeConfig" :class="themeConfig">
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
const { locale } = useI18n()

onMounted(() => {
	themeConfig.value = Cookies.get('theme-mode') || 'light'
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
