<template>
	<div class="sourcing-wrap column-page-wrap bg-white">
		<svg_polygon_1 class="polygon_1"/>
		<svg_polygon_2 class="polygon_2"/>
		<svg_polygon_3 class="polygon_3"/>
		<svg_polygon_4 class="polygon_4"/>
		<div class="local-container">
			<header class="sourcing_header cursor-pointer" @click="scrollTo">
<!--				<div class="title">Kickstart Your Brand Journey Instantly</div>
				<p class="desc">Effortless sourcing with quality products and unbeatable prices—your path to launching a successful ecommerce starts here.</p>-->
<!--				<el-button class="btn" type="primary" round>Get Started</el-button>-->
			</header>

			<div class="common-inner-auto sourcing-part1">
				<div class="item-box">
					<header class="part-title pc:hidden" style="text-align: left">Source products from thousands of manufacturers</header>
					<div class="item">
						<img class="-mb-[20px]" src="@/assets/image/sourcing/img_1.webp" />
						<div class="desc-wrap">
							<header class="part-title mobile:hidden" style="text-align: left;">Source products from thousands of manufacturers</header>
							<div class="desc-box">
								<svg-icon name="pencil" class="icon" />
								<p class="desc">
									Seamless Integration with over 10 Major E-commerce Platforms in China
								</p>
							</div>
							<div class="desc-box">
								<svg-icon name="pencil" class="icon" />
								<p class="desc">
									You can find thousands of factories, which allows you to directly talk with them to get more competitive quotes and more professional service.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div class="item-box">
					<header class="part-title pc:hidden" style="text-align: right">Vetted Suppliers</header>
					<div class="item">
						<img class="order-2" src="@/assets/image/sourcing/img_2.webp" />
						<div class="desc-wrap">
							<header class="part-title mobile:hidden" style="text-align: right;">Vetted Suppliers</header>
							<div class="desc-box">
								<svg-icon name="pencil" class="icon" />
								<p class="desc">
									We partner with thoroughly evaluated manufacturers to guarantee that every product meets the highest standards, without worrying the inventory shortage, giving you confidence in the excellence of your offerings.
								</p>
							</div>
							<div class="desc-box">
								<svg-icon name="pencil" class="icon" />
								<p class="desc">
									Get the benefits of wholesale pricing even when ordering just one piece. This flexibility allows you to test products, manage inventory, and scale your brand without committing to large quantities.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div class="item-box">
					<header class="part-title pc:hidden" style="text-align: left">24-Hour Feedback</header>
					<div class="item">
						<img class="-mt-[20px]" src="@/assets/image/sourcing/img_3.webp" />
						<div class="desc-wrap">
							<header class="part-title mobile:hidden" style="text-align: left;">24-Hour Feedback</header>
							<div class="desc-box">
								<svg-icon name="pencil" class="icon" />
								<p class="desc">
									Get rapid responses with 24-hour feedback to make your sourcing process smooth and efficient,and keep your brand on track.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>


			<div class="common-inner-auto sourcing-part2">
				<div class="part-title">
					Flexible Customization
				</div>
				<div class="text-center">
					Highly adaptable to varying client requests, providing solutions that fit both OEM/ODM
				</div>
				<div class="box-wrap">
					<div v-for="(v, i) of flexItems" class="item" :key="i">
						<img :src="v.pic" class="img" />
						<div class="title">{{v.title}}</div>
						<p class="desc">{{v.desc}}</p>
					</div>
				</div>
			</div>

			<div class="sourcing-form-wrap common-inner-auto">
				<div class="part-title">
					Tell us your sourcing request and we'll help you reach them
				</div>
				<div class="sourcing-part3">
					<SourcingForm class="form-wrap" ref="formRef" />
					<img src="@/assets/image/sourcing/right-pic.png" class="right-pic" />
				</div>
			</div>

			<SignUpBar class="sign-bar--yellow"/>
			<Footer />
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import svg_polygon_1 from '@/assets/image/sourcing/polygon_1.svg'
import svg_polygon_2 from '@/assets/image/sourcing/polygon_2.svg'
import svg_polygon_3 from '@/assets/image/sourcing/polygon_3.svg'
import svg_polygon_4 from '@/assets/image/sourcing/polygon_4.svg'

import flex_1 from '@/assets/image/sourcing/flex_1.webp'
import flex_2 from '@/assets/image/sourcing/flex_2.webp'
import flex_3 from '@/assets/image/sourcing/flex_3.webp'
import flex_4 from '@/assets/image/sourcing/flex_4.webp'
import flex_5 from '@/assets/image/sourcing/flex_5.webp'
import flex_6 from '@/assets/image/sourcing/flex_6.webp'
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
const formRef = ref()
const scrollTo = () => {
	formRef.value.$el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style scoped lang="scss">
.sourcing {
	&_header {
		position: relative;
		width: 100%;
		height: px2vw(578px);
		background: url('@/assets/image/sourcing/banner_1.webp') no-repeat top center;
		background-size: 100% 100%;
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
			/*width: px2vw(230px);
			height: px2vw(34px); // !important;
			font-size: px2vw(14px);*/
			position: absolute;
			top: px2vw(388px);
			left: px2vw(85px);
			width: px2vw(190px);
			height: px2vw(44px);
			border-radius: px2vw(44px);
			font-size: px2vw(20px);
			//background: transparent;
			padding: 0;
		}
	}
	&-wrap {
		position: relative;
		.polygon_1,
		.polygon_2,
		.polygon_3,
		.polygon_4 {
			position: absolute;
			font-size: px2vw(1px);
		}
		.polygon_1 {
			right: 0;
			top: px2vw(805px);
		}
		.polygon_2 {
			left: 0;
			top: px2vw(1000px);
		}
		.polygon_3 {
			right: 0;
			top: px2vw(1364px);
		}
		.polygon_4 {
			left: 0;
			top: px2vw(1727px);
		}
		.local-container {
			position: relative;
		}
		.part-title {
			color: #1b1b1b;
		}
		color: #1b1b1b;
	}
	&-part1 {
		padding: 58px;
		display: flex;
		flex-direction: column;
		.item {
			&-box {
			}
			//padding-top: 64px;
			display: flex;
			//align-items: center;
			gap: 40px;
			img {
				//width: 486px;
				flex-shrink: 0;
				//width: 258px;
				//height: 378px;
				//border-radius: 8px;
			}
			.desc {
				&-wrap {
					padding-bottom: 20px;
				}
				&-box {
					display: flex;
					align-items: flex-start;
					& + .desc-box {
						margin-top: 6px;
					}
					.icon {
						width: 24px;
						font-size: 20px;
						flex-shrink: 0;
						margin-top: -2px;
					}
				}
			}
		}
	}
	&-part2 {
		.box-wrap {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			//flex-direction: column;
			margin-top: 24px;
			gap: 24px;
			color: #1b1b1b;
			.item {
				display: flex;
				flex-direction: column;
				align-items: center;
				padding: 34px 16px 24px;
				border-radius: 8px;
				border: 1px solid #edebe9;
				background: #fff;
				//width: 32%;
				//width: calc(33.33% - 12px);
				//width: calc(33.33% - 19px);
				width: calc(33.33% - 16px);
				.title {
					margin-top: 30px;
					margin-bottom: 10px;
					font-size: 20px;
					font-weight: 600;
				}
				.desc	{
					color: #605E5C;
				}
			}
		}
	}
	&-part3 {
		display: flex;
		align-items: center;
		.form-wrap {
			flex: 1;
			align-self: normal;
			padding: 60px;
			border-radius: 6px 6px 0 0;
			background: #F7F7F7;
		}
		.right-pic {
			width: px2vw(782px);
			max-width: 782px;
			//height: px2vw(768px);
			//max-height: 768px;
			flex-shrink: 0;
		}
	}
}
// 兼容手机端
.pro_mobile {
	.sourcing {
		&-wrap {
			font-size: mx2vw(14px);
			overflow-x: hidden;
			.polygon_1,
			.polygon_2,
			.polygon_3,
			.polygon_4 {
				font-size: mx2vw(0.8px);
			}
			.polygon_1 {
				right: mx2vw(-50px);
				top: mx2vw(200px);
			}
			.polygon_2 {
				left: mx2vw(-70px);
				top: mx2vw(420px);
			}
			.polygon_3 {
				right: mx2vw(-50px);
				top: mx2vw(1160px);
			}
			.polygon_4 {
				left: 0;
				top: mx2vw(1448px);
			}
		}
		&-part1 {
			padding: mx2vw(16px) 0 0 0;
			.item {
				gap: mx2vw(10px);
				&-box {
					.part-title {
						font-size: mx2vw(20px);
						padding-top: mx2vw(24px);
						padding-bottom: mx2vw(16px);
					}
				}
				img {
					width: mx2vw(134px);
					margin: 0;
				}
				.desc {
					margin-bottom: 0;
					font-size: mx2vw(12px);
					&-box {
						.icon {
							width: mx2vw(16px);
							font-size: mx2vw(16px);
							margin-top: mx2vw(-2px);
						}
						& + .desc-box {
							margin-top: mx2vw(12px);
						}
					}
				}
			}
		}
		&-part2 {
			.box-wrap {
				flex-direction: column;
				margin-top: mx2vw(16px);
				gap: mx2vw(16px);
				.item {
					width: 100%;
					padding: mx2vw(24px) mx2vw(16px);
					.title {
						margin: mx2vw(10px);
						font-size: mx2vw(16px);
					}
					.desc {
						font-size: mx2vw(12px);
					}
					img {
						width: mx2vw(122px);
					}
				}
			}
		}
		&-form-wrap {
			width: 100%;
			max-width: unset;
		}
		&-part3 {
			flex-direction: column;
			.right-pic {
				order: -1;
				width: 100%;
			}
			.form-wrap {
				padding: mx2vw(24px) mx2vw(16px);
				border-radius: 0;
				width: 100%;
			}
		}
	}
}
</style>
