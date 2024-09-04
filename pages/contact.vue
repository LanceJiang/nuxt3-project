<template>
	<div class="contact-wrap column-page-wrap bg-white">
		<div class="local-container">
			<header class="contact_header">
				<div class="title">Customer support</div>
				<p class="desc">
					If you have any questions about Hyinsight- from creating an account to using the Hyinsight to tracking an order, check out our Help Center You'll find answers to our most frequently asked questions here.<br/>
					If you can't find what you're looking for in the Help Center, don't hesitate to contact us via chat or email.
				</p>
				<el-button class="btn" type="primary">Help Center</el-button>
			</header>
			<div class="box-wrap">
				<img src="@/assets/image/contact/email-box.webp" alt="" />
			</div>

			<img class="sign-bar w-full cursor-pointer mt-[60px]" src="@/assets/image/sign_bar_blue.png" />
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
.contact {
	&_header {
		position: relative;
		width: 100%;
		height: px2vw(578px);
		background: url('@/assets/image/contact/bg.webp') no-repeat top right #E6FFF7;
		background-size: contain;
		//background-color: rgba(255, 229, 212, 0.1);
		padding-top: px2vw(90px);
		padding-left: px2vw(60px);
		.title {
			font-size: px2vw(32px);
			font-weight: 600;
		}
		.desc {
			width: px2vw(480px);
			font-size: px2vw(16px);
			line-height: px2vw(24px);
			padding-top: px2vw(34px);
			padding-bottom: px2vw(120px);
		}
		.btn {
			//position: absolute;
			//left: px2vw(60px);
			//bottom: px2vw(142px);
			--el-button-hover-border-color: #005B80;
			width: px2vw(256px);
			height: px2vw(60px); // !important;
			//border-radius: px2vw(60px);
			font-size: px2vw(20px);
			padding: 0;
			background: #005B80;
		}
	}
	&-wrap {
		position: relative;
		color: #262626;
		.local-container {
			position: relative;
		}
		.part-title {
			color: #262626;
		}
		.box-wrap {
			margin: 80px 0;
			img {
				width: 100%;
			}
		}
	}
}
</style>
