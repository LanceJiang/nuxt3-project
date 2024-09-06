<template>
	<footer class="main-footer">
		<div class="local_container">
			<div class="icons-wrap">
				<svg-icon name="logo" class="text-[58px]" style="height: 44px" />
				<div class="icon-list">
					<svg-icon v-for="icon of logo_links" :name="icon.icon" :class="['icon', icon.url ? 'link' : '']" @click="jumpUrl(icon.url)"></svg-icon>
				</div>
			</div>
			<div class="links-wrap" v-for="(group, i) of nav_groups" :key="i">
				<header class="title">{{group.title}}</header>
				<div class="item">
					<span :class="[link.url ? 'link' : '']" v-for="link of group.items" @click="jumpUrl(link.url)">{{ link.label }}</span>
				</div>
			</div>
		</div>
		<div class="copy-right">
			Copyright © 2024 - Designed by Hyinsight. Guangdong ICP for 2024166784-1
		</div>
	</footer>
</template>

<script lang="ts" setup>
import { jumpUrl } from '@/utils'

// import svg_facebook from '@/assets/svg/facebook.svg'
// import svg_tiktok from '@/assets/svg/tiktok.svg'
// import svg_in from '@/assets/svg/in.svg'
// import svg_youtube from '@/assets/svg/youtube.svg'
// import svg_robot from '@/assets/svg/robot.svg'
// import svg_camera from '@/assets/svg/camera.svg'
// import svg_x from '@/assets/svg/x.svg'
const logo_links = [
	{
		// svg: svg_facebook,
		icon: 'facebook',
		url: 'https://www.facebook.com/profile.php?id=61562790691146'
	},
	/*{
		// svg: svg_tiktok,
		icon: 'tiktok',
		url: ''
	},*/
	/*{
		// svg: svg_in,
		icon: 'in',
		url: ''
	},*/
	{
		// svg: svg_youtube,
		icon: 'youtube',
		url: 'https://www.youtube.com/@Hyinsight-official'
	},
	/*{
		// svg: svg_robot,
		icon: 'robot',
		url: ''
	},*/
	{
		// svg: svg_camera,
		icon: 'camera',
		url: 'https://www.instagram.com/hyinsight/'
	}/*,
	{
		// svg: svg_x,
		icon: 'x',
		url: ''
	}*/
]
const nav_groups = [
	// integrations
	{
		title: 'Integrations',
		items: [
			{
				label: 'Shopify',
				url: '/sell'
			},
			{
				label: 'TikTok Shop',
				url: '/sell'
			},
			{
				label: 'WooCommerce',
				url: '/sell'
			},
			{
				label: 'Create your storefront on',
				url: '/sell'
			},
			{
				label: 'Hyinsight',
				url: '/sell'
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
	/*{
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
	},*/
	// help center
	{
		title: 'help center',
		items: [
			{
				label: 'contact us',
				url: '/contact'
			},
			{
				label: 'user guide',
				url: 'https://seller.hyinsight.com/#/helpCenter'
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
			font-size: 24px;
			color: #2C3E50;
			&.link:hover {
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
			.link {
				cursor: pointer;
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
// 兼容手机端
.pro_mobile {
	.main-footer {
		.local_container {
			flex-direction: column;
			gap: 20px;
		}
	}
	.copy-right {
		//padding: 0 10px;
		line-height: px2vw(120px);
		font-size: px2vw(28px);
	}
}
</style>
