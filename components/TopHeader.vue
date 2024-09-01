<template>
	<div class="main-header-box">
		<header class="main-header">
			<div class="local_container">
				<div class="common-inner-auto inner-wrap">
					<el-menu
						:default-active="activeMenu"
						class="main-nav"
						mode="horizontal"
						:ellipsis="false"
						@select="handleSelect"
					>
						<el-menu-item class="nav-item logo"  @click="handleClickMenu({ path: '/' })">
							<svg_logo />
						</el-menu-item>

						<el-menu-item class="nav-item" :index="nav.path" v-for="(nav, i) in menuList" :key="i" @click="handleClickMenu(nav)">{{nav.label}}</el-menu-item>
<!--						<el-menu-item index="1">Processing Center</el-menu-item>
						<el-sub-menu index="2">
							<template #title>Workspace</template>
							<el-menu-item index="2-1">item one</el-menu-item>
							<el-menu-item index="2-2">item two</el-menu-item>
							<el-menu-item index="2-3">item three</el-menu-item>
							<el-sub-menu index="2-4">
								<template #title>item four</template>
								<el-menu-item index="2-4-1">item one</el-menu-item>
								<el-menu-item index="2-4-2">item two</el-menu-item>
								<el-menu-item index="2-4-3">item three</el-menu-item>
							</el-sub-menu>
						</el-sub-menu>-->
					</el-menu>
					<div class="right-actions">
						<el-button text size="large">
							<svg_SingnIn />
							Sign In
						</el-button>
						<el-button round size="large">
							sign up for free
						</el-button>
					</div>
				</div>
			</div>
		</header>
	</div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import { FormInstance, FormRules } from 'element-plus'
import { useRoute, useRouter } from 'vue-router'
import Cookies from 'js-cookie'
import { Login } from '@/api/interface'
import { login, setToken } from '@/api/user'
import { GlobalStore } from '@/store'
import svg_SingnIn from '@/assets/svg/SingnIn.svg'
import svg_logo from '@/assets/logo.svg'

import { useI18n } from 'vue-i18n'
const route = useRoute()
const { locale, t } = useI18n()
const useGlobalStore = GlobalStore()
const router = useRouter()
const menuList = [
	{
		label: 'POD',
		path: '/pod',
	},
	{
		label: 'Sourcing',
		path: '/sourcing',
	},
	{
		label: 'Dropshipping',
		path: '/dropshipping',
	},
	{
		label: 'Sell',
		path: '/sell',
	},
]

const setLanguage = (/*_locale*/) => {
	console.error('修改lang',_locale)
	locale.value = _locale.code
}

const changeLocale = (_locale) => {
	console.error('修改lang',_locale)
	locale.value = _locale
}
const log = (in8) => {
	console.log(in8, 'log...')
}

const value = ref('')

const options = [
	{
		value: 'Option1',
		label: 'Option1',
	},
	{
		value: 'Option2',
		label: 'Option2',
	}
	]

// 退出登录
const logout = () => {
	useGlobalStore.setUserInfo('')

	// 刷新页面
	router.go(0)
}

/* 切换亮色暗色模式逻辑代码 */
const useIsLight = computed(() => useGlobalStore.isLight)

// 切换主题颜色
const changeThemePriamry = (val: string) => {
	if (process.client) {
		if (useGlobalStore.getThemePrimary === 'light') {
			useGlobalStore.setThemeConfig(val)
			Cookies.set('theme-mode', val)
			document.querySelector('#themeConfig')!.className = val
		} else {
			useGlobalStore.setThemeConfig(val)
			Cookies.set('theme-mode', val)
			document.querySelector('#themeConfig')!.className = val
		}
	}
}

const activeMenu = computed(() => (route.meta?.activeMenu ? route.meta.activeMenu : route.path))
const handleSelect = (key: string, keyPath: string[]) => {
	console.log(key, keyPath)
}
const handleClickMenu = (nav: any) => {
	router.push(nav.path)
}
</script>

<style lang="scss">
@import "./topHeader.scss";
</style>
