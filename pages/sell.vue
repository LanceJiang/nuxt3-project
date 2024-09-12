<template>
	<div class="sell-wrap column-page-wrap bg-white">
		<div class="local-container">
			<header class="sell_header">
<!--				<div class="title">Kickstart Your Brand Journey Instantly</div>-->
<!--				<p class="desc">Effortless sourcing with quality products and unbeatable prices—your path to launching a successful ecommerce starts here.</p>-->
				<el-button class="btn" type="primary" @click="localJump">Connect your store now</el-button>
			</header>
			<div class="platform-wrap">
				<div class="platform common-inner-auto">
					<component v-for="(svg, i) of platforms" :key="i" class="svg" :is="svg"></component>
				</div>
			</div>

			<div class="common-inner-auto sell-part1">
				<header class="part-title pc:hidden">How to Integrate with Shopify</header>
				<div class="item">
					<img class="" src="@/assets/image/sell/card_1.webp" />
					<div class="desc-wrap">
						<header class="part-title mobile:hidden" style="text-align: left;">How to Integrate with Shopify</header>
						<el-button class="btn capitalize" type="primary" round  @click="localJump">connect to Shopify</el-button>
						<el-button class="btn capitalize" round @click="tutorialLink('shopify')">watch tutorial</el-button>
					</div>
				</div>

				<header class="part-title pc:hidden">How to Integrate with Tiktok Shop</header>
				<div class="item">
					<img class="pc:order-2" src="@/assets/image/sell/card_2.webp" />
					<div class="desc-wrap items-end">
						<header class="part-title mobile:hidden" style="text-align: right;">How to Integrate with Tiktok Shop</header>
						<el-button class="btn capitalize" type="primary" round @click="localJump">connect to tikTok shop</el-button>
						<el-button class="btn capitalize" round @click="tutorialLink('tiktok')">watch tutorial</el-button>
					</div>
				</div>

				<header class="part-title pc:hidden">How to Integrate with WooCommerce</header>
				<div class="item">
					<img class="" src="@/assets/image/sell/card_3.webp" />
					<div class="desc-wrap">
						<header class="part-title mobile:hidden" style="text-align: left;">How to Integrate with WooCommerce</header>
						<el-button class="btn capitalize" type="primary" round @click="localJump">connect to woocommerce</el-button>
						<el-button class="btn capitalize" round @click="tutorialLink('woo')">watch tutorial</el-button>
					</div>
				</div>

				<header class="part-title pc:hidden">How to Integrate with your own store</header>
				<div class="item">
					<img class="pc:order-2" src="@/assets/image/sell/card_4.webp" />
					<div class="desc-wrap items-end">
						<header class="part-title mobile:hidden" style="text-align: right;">How to Integrate with your own store</header>
						<el-button class="btn capitalize" type="primary" round>add products</el-button>
						<el-button class="btn capitalize" round @click="tutorialLink('others')">watch tutorial</el-button>
					</div>
				</div>
			</div>

			<SignUpBar class="sign-bar--red"/>
			<Footer />
		</div>
	</div>
</template>

<script lang="ts" setup>
import svg_p1 from '@/assets/image/sell/shopify.svg'
import svg_p2 from '@/assets/image/sell/tiktok.svg'
import svg_p3 from '@/assets/image/sell/woo.svg'
import svg_p4 from '@/assets/image/sell/others.svg'
import { jumpUrl } from '@/utils'

// import flex_1 from '@/assets/image/sourcing/flex_1.png'
//
// const flexItems = [
// 	{
// 		pic: flex_1,
// 		title: 'Private Label Products',
// 		desc: 'E-commerce buyers who already have their own brand and product designs can use OEM to manufacture these products according to their specific requirements. The products are then sold under the buyer\'s brand name.'
// 	}
// ]

const platforms = [
	svg_p1,
	svg_p2,
	svg_p3,
	svg_p4
]

const localJump = () => jumpUrl('https://seller.hyinsight.com/#/diSpuPublish/index')
const tutorialLink = (type: 'shopify' | 'tiktok' | 'woo' | 'others') => {
	switch (type) {
		case 'shopify':
			return jumpUrl('https://www.youtube.com/watch?v=kpJ6s6FrRPU')
		case 'tiktok':
			return jumpUrl('https://www.youtube.com/watch?v=1bLUWhz7vh0')
		case 'woo':
			return jumpUrl('https://www.youtube.com/watch?v=b2FYJ_JLbiA')
		default:
			console.log(type, '暂无教程~')
	}
}
</script>

<style scoped lang="scss">
.sell {
	&_header {
		position: relative;
		width: 100%;
		height: px2vw(578px);
		background: url('@/assets/image/sell/banner.webp') no-repeat top center;
		background-size: 100% 100%;
		//background-color: rgba(255, 229, 212, 0.1);
		//padding-top: px2vw(123px);
		//padding-left: px2vw(334px);
		/*.title {
			font-size: px2vw(32px);
			font-weight: 600;
		}
		.desc {
			width: px2vw(620px);
			font-size: px2vw(14px);
			padding-top: px2vw(24px);
			padding-bottom: px2vw(58px);
		}*/
		.btn {
			position: absolute;
			left: px2vw(85px);
			bottom: px2vw(259px);
			width: px2vw(294px);
			height: px2vw(44px);
			line-height: px2vw(44px);
			border-radius: px2vw(44px);
			font-size: px2vw(20px);
			padding: 0;
			//background: transparent;
		}
	}
	&-wrap {
		position: relative;
		.local-container {
			position: relative;
		}
		.part-title {
			color: #1b1b1b;
		}
		.platform {
			display: flex;
			align-items: center;
			//justify-content: space-between;
			width: max-content;
			gap: px2vw(102px);
			.svg {
				font-size: px2vw(1px);
				//height: 48px;
			}
			&-wrap {
				padding: 34px 0;
				background: #FAFAFA;
			}
		}
		color: #1b1b1b;
	}
	&-part1 {
		padding: 100px 10px;

		display: flex;
		flex-direction: column;
		gap: 60px;
		.item {
			//padding-top: 64px;
			display: flex;
			align-items: center;
			gap: 60px;
			img {
				flex-shrink: 0;
				max-width: px2vw(672px);
				max-height: px2vw(366px);
				//width: 672px;
				//height: 366px;
				//border-radius: 8px;
			}
			.part-title {
				padding: 60px 0;
				//padding-bottom: 60px;
			}
		}
		.desc-wrap {
			flex: 1;
			display: flex;
			flex-direction: column;
			.btn {
				//width: px2vw(245px);
				width: 245px;
				& + .btn {
					margin-left: 0;
					margin-top: 20px;
				}
			}
		}
	}
}
// 兼容手机端
.pro_mobile {
	.sell {
		&-wrap {
			.platform {
				gap: mx2vw(16px);
				.svg {
					font-size: mx2vw(0.52px);
				}
				&-wrap {
					padding: mx2vw(16px) 0;
					background: #FAFAFA;
				}
			}
		}
		&-part1 {
			padding: 0;
			gap: 0;
			.part-title {
				font-size: mx2vw(20px);
			}
			.item {
				//padding-top: 64px;
				flex-direction: column;
				gap: 0;
				img {
					//flex-shrink: 0;
					max-width: unset;
					max-height: unset;
					width: mx2vw(343px);
					//height: 186.813px;
					height: auto;
				}
			}
			.desc-wrap {
				margin-top: mx2vw(-17px);
				.btn {
					width: mx2vw(245px);
					height: mx2vw(34px);
					border-radius: mx2vw(34px);
					font-size: mx2vw(14px);
					& + .btn {
						//margin-left: 0;
						margin-top: mx2vw(20px);
					}
				}
			}
		}
	}
}
</style>
