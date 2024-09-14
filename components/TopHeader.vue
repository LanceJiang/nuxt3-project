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
					>
						<svg-icon name="menu" class="icon more-menu" @click="visible = true" />
						<el-menu-item class="nav-item nav-logo"  @click="goHome">
							<svg-icon name="logo" class="icon logo" />
						</el-menu-item>

						<template v-if="!useGlobalStore.isMobile">
							<el-menu-item class="nav-item" :index="nav.path" v-for="(nav, i) in menuList" :key="i" @click="handleClickMenu(nav)">{{nav.label}}</el-menu-item>
						</template>
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
						<el-button class="login" text @click="localJump('login')">
							<svg-icon name="SingnIn" class="icon" />
							Sign In
						</el-button>
						<el-button class="register" round @click="localJump('register')">
							Sign Up For Free
						</el-button>
					</div>
				</div>
			</div>
		</header>
		<client-only>
			<el-drawer v-model="visible" class="main-header_menu-drawer" direction="ltr" size="75vw">
				<template #header>
					<div class="header">
						<svg-icon name="logo" class="logo" @click="goHome" />
					</div>
				</template>
				<template #default>
					<el-menu
						:default-active="activeMenu"
						class="main-nav"
						mode="vertical"
					>
						<el-menu-item class="nav-item" :index="nav.path" v-for="(nav, i) in menuList" :key="i" @click="handleClickMenu(nav)">{{nav.label}}</el-menu-item>
		<!--											<el-menu-item index="1">Processing Center</el-menu-item>
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
				</template>
			</el-drawer>
		</client-only>
	</div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import { FormInstance, FormRules } from 'element-plus'
import { useRoute, useRouter } from 'vue-router'
import Cookies from 'js-cookie'
import { Login } from '@/api/interface'
import { login, setToken } from '@/api/user'
import { jumpUrl } from '@/utils'

import { GlobalStore } from '@/store'
// import svg_SingnIn from '@/assets/svg/SingnIn.svg'
// import svg_logo from '@/assets/svg/logo.svg'

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
const localJump = (action: 'login' | 'register') => {
	jumpUrl(`https://seller.hyinsight.com/#/home?action=${action}`)
}

const visible = ref(false)

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
const handleClickMenu = (nav: any) => {
	if(visible.value) {
		visible.value = false
	}
	router.push(nav.path)
}
const goHome = () => {
	handleClickMenu({ path: '/' })
}
</script>

<style lang="scss">
@import "./topHeader.scss";
</style>
