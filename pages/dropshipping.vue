<template>
	<div class="dropshipping-wrap column-page-wrap bg-white">
		<div class="local-container">
			<header class="dropshipping_header cursor-pointer" @click="goLogin">
<!--				<div class="title">Kickstart Your Brand Journey Instantly</div>
				<p class="desc">Effortless dropshipping with quality products and unbeatable prices—your path to launching a successful ecommerce starts here.</p>-->
<!--				<el-button class="btn">Start Now</el-button>-->
			</header>

			<div class="common-inner-auto dropshipping-part1">

				<header class="part-title part-title--mobile">The Hidden Challenges of Dropshipping</header>
				<div class="title-tip">
					Dropshipping is a fantastic way to start a business, but it comes with hidden challenges that can derail your success.</div>
				<div class="item pr-[18px]">
					<img class="pc:order-2" src="@/assets/image/dropshipping/part1_1.webp" />
					<div class="desc-wrap">
<!--						<header class="mobile:hidden part-title transform translate-x-[140px]" style="text-align: right;">The Hidden Challenges of Dropshipping</header>-->
<!--						<div class="mobile:hidden desc-box">-->
<!--							<span class="icon" />-->
<!--							<div class="desc">-->
<!--								Dropshipping is a fantastic way to start a business, but it comes with hidden challenges that can derail your success.</div>-->
<!--						</div>-->
						<div class="desc-box">
							<svg-icon name="exclamation-mark" class="icon" />
							<div class="desc">
								<span class="font-bold">Low Margins:</span>
								With high competition, many dropshippers struggle to keep their profit margins healthy.
							</div>
						</div>
						<div class="desc-box">
							<svg-icon name="exclamation-mark" class="icon" />
							<div class="desc">
								<span class="font-bold">Long shipping times and delays:</span>
								Different suppliers have different processing, billing, and shipping policies, so shipping times vary.
							</div>
						</div>
						<div class="desc-box">
							<svg-icon name="exclamation-mark" class="icon" />
							<div class="desc">
								<span class="font-bold">Running Out Of Stock:</span>
								When a supplier runs out of your items, you pretty much just lost the sale.
							</div>
						</div>
						<div class="desc-box">
							<svg-icon name="exclamation-mark" class="icon" />
							<div class="desc">
								<span class="font-bold">Lack of Order Tracking:</span>
								Suppliers may not always offer real-time tracking, making it challenging to keep customers updated on their order status.
							</div>
						</div>
						<div class="desc-box">
							<svg-icon name="exclamation-mark" class="icon" />
							<div class="desc">
								<span class="font-bold">Limited Customization and Branding:</span>
								Limited control over products can make it hard to create a unique brand identity.
							</div>
						</div>
					</div>
				</div>

				<header class="part-title part-title--mobile">How Hyinsight Enhances Your Efficiency</header>
				<div class="title-tip max-w-[580px] mx-auto">
					We are here to help you navigate these challenges, offering a seamless experience from start to finish.
				</div>
				<div class="item pl-[18px]">
					<img src="@/assets/image/dropshipping/part1_2.webp" />
					<div class="desc-wrap">
<!--						<header class="mobile:hidden part-title transform -translate-x-[140px]" style="text-align: left;">How Hyinsight Enhances Your Efficiency</header>
						<div class="mobile:hidden desc-box">
							<span class="icon" />
							<div class="desc">
								We are here to help you navigate these challenges, offering a seamless experience from start to finish.
							</div>
						</div>-->
						<div class="desc-box">
							<svg-icon name="star" class="icon" />
							<div class="desc">
								<span class="font-bold">Boost Your Margins:</span>
								Premium niche products with better quality and lower prices than AliExpress and any other marketplace, designed for healthier profits.
							</div>
						</div>
						<div class="desc-box">
							<svg-icon name="star" class="icon" />
							<div class="desc">
								<span class="font-bold">Multiple shipping options:</span>
								Covered 3000+ shipping lines to 220 countries, you could select the best options to meet your different order requests.
							</div>
						</div>
						<div class="desc-box">
							<svg-icon name="star" class="icon" />
							<div class="desc">
								<span class="font-bold">Thousands of Verified Suppliers:</span>
								With 3rd-party verified suppliers and in-stock products, we ensure efficient sourcing and consistent quality, processing and shipping your orders immediately—no delays, no stock concerns.
							</div>
						</div>
						<div class="desc-box">
							<svg-icon name="star" class="icon" />
							<div class="desc">
								<span class="font-bold">Full-Chain Tracking:</span>
								Enjoy traceable procurement process to helps you monitoring the status of orders, from order placement to delivery with customizable displays to hide the product's origin.
							</div>
						</div>
						<div class="desc-box">
							<svg-icon name="star" class="icon" />
							<div class="desc">
								<span class="font-bold">60 days Free Storage Service:</span>
								You can ship your own products to our warehouse for free storage for up to 60 days. Additionally, we offer hundreds of cost-effective in-house services to meet customer needs in various situations.
							</div>
						</div>
						<div class="desc-box">
							<svg-icon name="star" class="icon" />
							<div class="desc">
								<span class="font-bold">Enhanced Customization and Branding:</span>
								Unlike traditional dropshipping platforms, Hyinsight offers you greater control over product customization and branding.
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="common-inner-auto dropshipping-part2">
				<div class="part-title">
					Popular Value-added Services
				</div>
				<div class="title-tip max-w-[880px] mx-auto">
					Explore and customize value-added services in the service marketplace tailored to your store's primary product categories and unique business needs. Below are some popular value-added services utilized by our clients:
				</div>
				<div class="box-wrap">
					<div v-for="(v, i) of cardItems" class="item" :key="i">
						<img :src="v.pic" class="img" />
<!--						<p class="desc">{{v.desc}}</p>-->
					</div>
				</div>
			</div>

			<SignUpBar class="sign-bar--yellow"/>
			<Footer />
		</div>
	</div>
</template>

<script lang="ts" setup>

import card_1 from '@/assets/image/dropshipping/card_1.webp'
import card_2 from '@/assets/image/dropshipping/card_2.webp'
import card_3 from '@/assets/image/dropshipping/card_3.webp'
import card_4 from '@/assets/image/dropshipping/card_4.webp'
import card_5 from '@/assets/image/dropshipping/card_5.webp'
import card_6 from '@/assets/image/dropshipping/card_6.webp'
import card_7 from '@/assets/image/dropshipping/card_7.webp'
import card_8 from '@/assets/image/dropshipping/card_8.webp'
import { jumpUrl } from '@/utils'
const cardItems = [
	{
		pic: card_1,
		// desc: ''
	},
	{
		pic: card_2,
		// desc: ''
	},
	{
		pic: card_3,
		// desc: ''
	},
	{
		pic: card_4,
		// desc: ''
	},
	{
		pic: card_5,
		// desc: ''
	},
	{
		pic: card_6,
		// desc: ''
	},
	{
		pic: card_7,
		// desc: ''
	},
	{
		pic: card_8,
		// desc: ''
	}
]
const  goLogin = () => {
	jumpUrl('https://seller.hyinsight.com/#/home?action=login')
}
</script>

<style scoped lang="scss">
.dropshipping {
	&_header {
		position: relative;
		width: 100%;
		height: px2vw(578px);
		background: url('@/assets/image/dropshipping/banner.webp') no-repeat top center;
		background-size: 100% 100%;
		//padding-top: px2vw(123px);
		//padding-left: px2vw(334px);
		/*.title {
			font-size: px2vw(32px);
			font-weight: 600;
		}*/
		/*.desc {
			width: px2vw(620px);
			font-size: px2vw(14px);
			padding-top: px2vw(24px);
			padding-bottom: px2vw(58px);
		}*/
		.btn {
			position: absolute;
			left: px2vw(448px);
			bottom: px2vw(164px);
			padding: 0;
			width: px2vw(190px);
			height: px2vw(44px);
			line-height: px2vw(44px);
			border-radius: px2vw(44px);
			font-size: px2vw(18px);
			//background: transparent;
			color: #3E59BB;
			border-color: #fff;
		}
	}
	&-wrap {
		font-size: 16px;
		.local-container {
			position: relative;
		}
		.part-title {
			color: #1b1b1b;
		}
		.title-tip {
			text-align: center;
			margin-top: -8px;
			//padding-bottom: 50px;
		}
		color: #1b1b1b;
	}
	&-part1 {
		display: flex;
		flex-direction: column;
		.item {
			padding-top: 50px;
			//padding-top: 170px;
			padding-bottom: 30px;
			display: flex;
			align-items: center;
			position: relative;
			gap: 110px;
			.desc-wrap {
				// 120 - 60
				//margin-top: -60px;
				display: flex;
				flex-direction: column;
				gap: 24px;
				.part-title {
					padding-top: 0;
					position: absolute;
					top: 50px;
				}
				.desc {
					& + .desc {
					}
					&-box {
						display: flex;
						align-items: flex-start;
						.icon {
							width: 24px;
							font-size: 20px;
							flex-shrink: 0;
							//padding-top: 4px;
						}
					}
				}
			}
			img {
				flex-shrink: 0;
				max-width: px2vw(515px);
				max-height: px2vw(343px);
			}
			/*.title {
				font-size: 16px;
				//font-style: normal;
				font-weight: 700;
			}*/
		}
	}
	&-part2 {
		.box-wrap {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			//flex-direction: column;
			margin-top: 60px;
			margin-bottom: 100px;
			gap: 24px;
			.item {
				display: flex;
				flex-direction: column;
				align-items: center;
				border-radius: 16px;
				width: 285px;
				box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.15);
				.img {
					width: 100%;
				}
			}
		}
	}
}

// 兼容手机端
.pro_mobile {
	.dropshipping {
		&-wrap {
			font-size: mx2vw(14px);
			.title-tip {
				color: #605E5C;
				margin-top: mx2vw(-10px);
				//padding-bottom: mx2vw(16px);
			}
		}
		&-part1 {
			.desc-box {
				font-size: mx2vw(14px);
			}
			.item {
				flex-direction: column;
				gap: 0;
				padding: 0;
				padding-top: mx2vw(16px);
				.desc {
					&-wrap {
						margin-top: mx2vw(14px);
						gap: mx2vw(14px);
						font-size: mx2vw(12px);
						.desc-box {
							.icon {
								width: mx2vw(16px);
								font-size: mx2vw(16px);
							}
						}
					}
					&-box {
						.icon {

						}
					}
				}
				img {
					//flex-shrink: 0;
					max-width: unset;
					max-height: unset;
					width: mx2vw(343px);
					height: auto;
				}
			}
		}
		&-part2 {
			.box-wrap {
				margin-top: mx2vw(16px);
				margin-bottom: 0;
				gap: mx2vw(10px);
				.item {
					width: mx2vw(166px);
					//img {}
				}
			}
		}
	}
}
</style>
