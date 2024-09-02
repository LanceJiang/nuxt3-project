<template>
	<footer class="main-footer">
		<div class="local_container">
			<div class="icons-wrap">
				<svg_logo class="w-[82px]" />
				<div class="icon-list">
					<component v-for="icon of logo_links" :is="icon.svg" class="icon" @click="jumpUrl(icon.url)"></component>
				</div>
			</div>
			<div class="links-wrap" v-for="(group, i) of nav_groups" :key="i">
				<header class="title">{{group.title}}</header>
				<div class="item">
					<a class="link" v-for="link of group.items" :href="link.url" target="_blank">{{ link.label }}</a>
				</div>
			</div>
		</div>
		<div class="copy-right">
			Copyright © 2024 - Designed by Hyinsight. Guangdong ICP for 2024166784-1
		</div>
	</footer>
</template>

<script lang="ts" setup>
import svg_logo from '@/assets/logo.svg'
import svg_facebook from '@/assets/svg/facebook.svg'
import svg_tiktok from '@/assets/svg/tiktok.svg'
import svg_in from '@/assets/svg/in.svg'
import svg_youtube from '@/assets/svg/youtube.svg'
import svg_robot from '@/assets/svg/robot.svg'
import svg_camera from '@/assets/svg/camera.svg'
import svg_x from '@/assets/svg/x.svg'

import { ref, reactive, computed } from 'vue'
import { Close, InfoFilled } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
const logo_links = [
	{
		svg: svg_facebook,
		url: ''
	},
	{
		svg: svg_tiktok,
		url: ''
	},
	{
		svg: svg_in,
		url: ''
	},
	{
		svg: svg_youtube,
		url: ''
	},
	{
		svg: svg_robot,
		url: ''
	},
	{
		svg: svg_camera,
		url: ''
	},
	{
		svg: svg_x,
		url: ''
	}
]
const jumpUrl = (url: string) => {
	if (url) window.open(url, '_blank')
}
const nav_groups = [
	// integrations
	{
		title: 'Integrations',
		items: [
			{
				label: 'Shopify',
				url: ''
			},
			{
				label: 'TikTok Shop',
				url: ''
			},
			{
				label: 'WooCommerce',
				url: ''
			},
			{
				label: 'Create your storefront on',
				url: ''
			},
			{
				label: 'Hyinsight',
				url: ''
			}
		]
	},
	// sells
	{
		title: 'Start selling',
		items: [
			{
				label: 'Print on demand t-shirts',
				url: ''
			},
			{
				label: 'Print on demand hoodies',
				url: ''
			},
			{
				label: 'Print on demand posters',
				url: ''
			},
			{
				label: 'Print on demand canvas',
				url: ''
			},
			{
				label: 'Print on demand calendars',
				url: ''
			},
			{
				label: 'Print on demand mugs',
				url: ''
			},
			{
				label: 'Custom products',
				url: ''
			},
			{
				label: 'Custom clothing',
				url: ''
			},
			{
				label: 'Custom merchandise',
				url: ''
			},
			{
				label: 'Custom phone cases',
				url: ''
			},
			{
				label: 'Merch maker',
				url: ''
			}
		]
	},
	// company
	{
		title: 'Company',
		items: [
			{
				label: 'about hyinsight',
				url: ''
			},
			{
				label: 'blog',
				url: ''
			},
			{
				label: 'customer stories',
				url: ''
			},
			{
				label: 'partners',
				url: ''
			},
			{
				label: 'careers',
				url: ''
			},
			{
				label: 'affiliates program',
				url: ''
			}
		]
	},
	// help center
	{
		title: 'help center',
		items: [
			{
				label: 'contact us',
				url: ''
			},
			{
				label: 'user guide',
				url: ''
			}
		]
	}
]

</script>

<style lang="scss" scoped>
.main-footer {
	background: #fafafa; // var(--navbar-background-color);
	.local_container {
		display: flex;
		justify-content: space-between;
		padding: 60px;
		.logo {
			margin-right: 12px;
			margin-left: 24px;
			display: inline-block;
			height: 22px;
			min-width: 107px;
			img {
				display: block;
				width: 100%;
				height: 22px;
			}
		}
	}
	.icons-wrap {
		display: flex;
		flex-direction: column;
	}
	.icon-list {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		margin-top: 30px;
		.icon {
			cursor: pointer;
			width: 24px;
			color: #2C3E50;
			&:hover {
				color: var(--link-color);
			}
		}
	}
	.links-wrap {
		.title {
			margin-bottom: 24px;
			font-size: 20px;
			font-weight: 600;
			text-transform: capitalize;
		}
		.item {
			display: inline-flex;
			flex-direction: column;
			justify-content: flex-start;
			gap: 12px;
			a {
				text-transform: capitalize;
				color: var(--primary-color);
				text-decoration: unset;
				&:hover {
					color: var(--link-color);
				}
			}
		}
	}
}
.copy-right {
	background: #f3f3f3;
	line-height: 60px;
	font-size: 12px;
	text-transform: capitalize;
	text-align: center;
}
</style>
