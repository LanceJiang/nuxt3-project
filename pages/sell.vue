<template>
	<div class="sell-wrap column-page-wrap bg-white">
		<div class="local-container">
			<header class="sell_header">
<!--				<div class="title">Kickstart Your Brand Journey Instantly</div>-->
<!--				<p class="desc">Effortless sourcing with quality products and unbeatable prices—your path to launching a successful ecommerce starts here.</p>-->
				<el-button class="btn" type="primary" round>Open Your Shop Now</el-button>
			</header>
			<div class="platform-wrap">
				<div class="platform common-inner-auto">
					<component v-for="(svg, i) of platforms" :key="i" class="svg" :is="svg"></component>
				</div>
			</div>

			<div class="common-inner-auto sell-part1">
				<div class="item">
					<img class="" src="@/assets/image/pod/services_1.jpg" />
					<div class="desc-wrap">
						<header class="part-title" style="text-align: left;">How to Integrate with Shopify</header>
						<el-button class="btn capitalize w-[245px]" type="primary" round>connect to Shopify</el-button>
						<el-button class="btn capitalize w-[245px]" round>watch tutorial</el-button>
					</div>
				</div>

				<div class="item">
					<img class="order-2" src="@/assets/image/pod/services_2.jpg" />
					<div class="desc-wrap items-end">
						<header class="part-title" style="text-align: right;">How to Integrate with Tiktok Shop</header>
						<el-button class="btn capitalize w-[245px]" type="primary" round>connect to tikTok shop</el-button>
						<el-button class="btn capitalize w-[245px]" round>watch tutorial</el-button>
					</div>
				</div>

				<div class="item">
					<img class="" src="@/assets/image/pod/services_1.jpg" />
					<div class="desc-wrap">
						<header class="part-title" style="text-align: left;">How to Integrate with WooCommerce</header>
						<el-button class="btn capitalize w-[245px]" type="primary" round>connect to woocommerce</el-button>
						<el-button class="btn capitalize w-[245px]" round>watch tutorial</el-button>
					</div>
				</div>

				<div class="item">
					<img class="order-2" src="@/assets/image/pod/services_2.jpg" />
					<div class="desc-wrap items-end">
						<header class="part-title" style="text-align: right;">How to Integrate with your own store</header>
						<el-button class="btn capitalize w-[245px]" type="primary" round>add products</el-button>
						<el-button class="btn capitalize w-[245px]" round>watch tutorial</el-button>
					</div>
				</div>
			</div>

			<img class="sign-bar w-full cursor-pointer mt-[60px]" src="@/assets/image/sign_bar_red.jpg" />
			<Footer />
		</div>
	</div>
</template>

<script lang="ts" setup>
import svg_p1 from '@/assets/image/sell/shopify.svg'
import svg_p2 from '@/assets/image/sell/tiktok.svg'
import svg_p3 from '@/assets/image/sell/woo.svg'
import svg_p4 from '@/assets/image/sell/others.svg'

import flex_1 from '@/assets/image/sourcing/flex_1.png'
import flex_2 from '@/assets/image/sourcing/flex_2.png'
import flex_3 from '@/assets/image/sourcing/flex_3.png'
import flex_4 from '@/assets/image/sourcing/flex_4.png'
import flex_5 from '@/assets/image/sourcing/flex_5.png'
import flex_6 from '@/assets/image/sourcing/flex_6.png'

const flexItems = [
	{
		pic: flex_1,
		title: 'Private Label Products',
		desc: 'E-commerce buyers who already have their own brand and product designs can use OEM to manufacture these products according to their specific requirements. The products are then sold under the buyer\'s brand name.'
	},
	{
		pic: flex_2,
		title: 'Customized Products',
		desc: 'Buyers can modify existing products based on market demand or customer feedback, and have them produced by an OEM manufacturer. This is ideal for brands that need unique products to stand out in the market.'
	},
	{
		pic: flex_3,
		title: 'Bulk Production',
		desc: 'Suitable for buyers looking to reduce costs through large-scale production. OEM manufacturers can provide high-quality mass production services, ensuring consistency and efficiency.'
	},
	{
		pic: flex_4,
		title: 'Rapid Product Launch',
		desc: 'E-commerce buyers who want to quickly expand their product line but lack the time or resources for product design and development can use ODM. They can select existing designs from the manufacturer, brand them as their own, and bring them to market quickly.'
	},
	{
		pic: flex_5,
		title: 'Market Testing',
		desc: 'Buyers can use products designed by ODM manufacturers to test new markets, assessing how the product performs without the high risk and cost of developing a new design. This approach is ideal for new brands or those exploring new categories.'
	},
	{
		pic: flex_6,
		title: 'Product Optimization',
		desc: 'Some buyers may find that ODM designs are close to what they need and only require minor adjustments before going to market. This saves on development costs and speeds up time to market.'
	}
]

const platforms = [
	svg_p1,
	svg_p2,
	svg_p3,
	svg_p4
]

</script>

<style scoped lang="scss">
.sell {
	&_header {
		position: relative;
		width: 100%;
		height: px2vw(578px);
		background: url('@/assets/image/sell/head_bg.webp') no-repeat top center rgba(255, 229, 212, 0.1);
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
			left: px2vw(60px);
			bottom: px2vw(142px);
			width: px2vw(256px);
			height: px2vw(60px); // !important;
			border-radius: px2vw(60px);
			font-size: px2vw(14px);
			padding: 0;
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
			gap: 102px;
			.svg {
				height: 48px;
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
			//align-items: center;
			gap: 60px;
			img {
				flex-shrink: 0; // todo...
				width: 672px;
				height: 366px;
				border-radius: 8px;
			}
			.part-title {
				padding-top: 90px;
				padding-bottom: 60px;
			}
		}
		.desc-wrap {
			flex: 1;
			display: flex;
			flex-direction: column;
			.btn {
				& + .btn {
					margin-left: 0;
					margin-top: 20px;
				}
			}
		}
	}
}
</style>
