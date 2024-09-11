<template>
	<div class="pod-wrap column-page-wrap bg-white">
		<div class="common-inner-auto">
			<div class="part-title" style="padding-top: 40px;">
				Print On Demand
			</div>
			<div class="text-center mobile:mb-[24px]">
				Start Your Online Business with Ease Create and sell custom products with just one click.
			</div>
			<div class="mobile:hidden mt-[16px] mb-[24px] text-center">
				<el-button class="min-w-[230px]" type="primary" round @click="localJump">Start Selling</el-button>
			</div>
		</div>
		<img class="video-demo" src="~@/assets/image/pod/banner.webp" />
		<div class="pc:hidden mt-[16px] text-center">
			<el-button class="min-w-[230px]" type="primary" round @click="localJump">Start Selling</el-button>
		</div>
		<!--demand-->
		<div class="common-inner-auto">
			<div class="part-title">
				Advantages of print-on-demand
			</div>
			<div class="ladder-wrap">
				<div v-for="(v, i) of ladders" :key="i" class="ladder_item" :style="`--pl-level: ${i};`">
					<img :src="v.pic" />
					<div class="desc-wrap mobile:text-center">
						<header class="capitalize">{{ v.title }}</header>
						<p class="desc" v-for="(desc, _i) of v.descs" :key="_i">{{desc}}</p>
					</div>
				</div>
			</div>
		</div>

		<!--services-->
		<div class="common-inner-auto">
			<div class="part-title">
				Turn your creativity into profit with our print-on-demand services.
			</div>
			<div class="services-tip text-center">
				Whether you're an artist, entrepreneur, or creative enthusiast, we make it easy for you to launch your own brand and connect with your followers.
			</div>
			<div class="services-wrap">
				<div class="item">
					<img src="@/assets/image/pod/services_1.webp" />
					<div class="desc-wrap">
						<header class="title">Creators and Designers</header>
						<p class="desc">Start monetizing your audience or art with zero upfront investment. Selling custom merchandise is the best way to keep your creative passion alive.</p>
						<el-button type="primary" round class="min-w-[230px]" @click="localJump">Creat Your Merch</el-button>
					</div>
				</div>

				<div class="item item-2 mt-[20px]">
					<img class="order-2" src="@/assets/image/pod/services_2.webp" />
					<div class="desc-wrap text-right">
						<header class="title">Ecommerce Entrepreneurs</header>
						<p class="desc">Build your brand without any upfront costs. Launching or growing your e-commerce business is now easier than ever with Hyinsight</p>
						<el-button type="primary" round class="min-w-[230px]" @click="localJump">Start Selling</el-button>
					</div>
				</div>
			</div>
		</div>

		<!--growth-->
		<div class="common-inner-auto">
			<div class="part-title">
				How Hyinsight empower your E-commerce growth
			</div>
			<div class="growth-wrap">
				<div class="item-box">
					<header class="title pc:hidden"><svg-icon name="gift" class="icon" />Endless Product Selection – Create Your Signature Line</header>
					<div class="item pc:items-end pc:-mt-[30px]">
						<img class="transform translate-y-[50px]" src="@/assets/image/pod/growth_1.webp" />
						<div class="desc-wrap">
							<header class="title mobile:hidden"><svg-icon name="gift" class="icon" /> Endless Product Selection – Create Your Signature Line</header>
							<p class="desc">
								<span class="font-bold">Tailored for Your Brand:</span>
								Choose from a wide array of products like apparel, accessories, and more, giving you the flexibility to create a unique merchandise line that resonates with your customers.
							</p>
							<p class="desc">
								<span class="font-bold">Premium Quality:</span>
								Stand out with high-quality products that reflect your brand’s values and ensure customers love what they buy.
							</p>
						</div>
					</div>
				</div>

				<div class="item-box">
					<header class="title pc:hidden">
						<svg-icon name="page" class="icon" />Extensive Design Templates – Design Made Easy</header>
					<div class="item items-start pc:mt-[50px]">
						<img class="order-2 transform -translate-y-[20px]" src="@/assets/image/pod/growth_2.webp" />
						<div class="desc-wrap pl-48">
							<header class="title justify-end mobile:hidden">
								<svg-icon name="page" class="icon" />Extensive Design Templates – Design Made Easy</header>
							<p class="desc text-right">
								<span class="font-bold">Effortless Creativity:</span>
								Dive into our vast library of design templates that make it easy for you to create stunning products without any design experience.
							</p>
							<p class="desc text-right">
								<span class="font-bold">Personalized Touch:</span>
								Customize templates to match your style and brand identity, making your merchandise truly yours.
							</p>
						</div>
					</div>
				</div>

				<div class="item-box">
					<header class="title pc:hidden">
						<svg-icon name="airplane" class="icon" />48 Hours Lightning-Fast Shipping – Start Selling in No Time</header>
					<div class="item items-start pc:mt-[20px]">
						<img class="transform -translate-y-[60px]" src="@/assets/image/pod/growth_3.webp" />
						<div class="desc-wrap">
							<header class="title mobile:hidden"><svg-icon name="airplane" class="icon" />48 Hours Lightning-Fast Shipping – Start Selling in No Time</header>
							<p class="desc">
								<span class="font-bold">Quick Turnaround:</span>
								We handle the production and shipping, ensuring your products are ready to ship within 48 hours. This means you can start selling and profiting almost immediately.
							</p>
							<p class="desc">
								<span class="font-bold">Global Shipping:</span>
								Reach customers worldwide with our reliable shipping solutions, expanding your brand’s reach effortlessly.
							</p>
						</div>
					</div>
				</div>

				<div class="item-box">
					<header class="title pc:hidden">
						<svg-icon name="globe" class="icon" />Flexible Options, Exceptional Service</header>
					<div class="item items-start pc:pt-[20px] pc:-mt-[46px] pc:-mb-[30px]">
						<img class="order-2 transform -translate-y-[20px]" src="@/assets/image/pod/growth_4.webp" />
						<div class="desc-wrap pl-48">
							<header class="title justify-end mobile:hidden"><svg-icon name="globe" class="icon" />Flexible Options, Exceptional Service</header>
							<p class="desc text-right">
								<span class="font-bold">Hyinsight prioritizes exceptional customer service,</span>
								offering tailored, customizable solutions for a seamless and personalized experience. - From labeled product to custom packaging, 7*24H service Hyinsight’s flexible options scale with your growing business.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<SignUpBar class="sign-bar--green"/>
		<Footer />
	</div>
</template>

<script lang="ts" setup>
import img_ladder_1 from '@/assets/image/pod/ladder_1.webp'
import img_ladder_2 from '@/assets/image/pod/ladder_2.webp'
import img_ladder_3 from '@/assets/image/pod/ladder_3.webp'
import { jumpUrl } from '@/utils'
// import img_ladder_1 from '@/assets/image/pod/ladder_1.jpg'
const ladders = [
	{
		pic: img_ladder_1,
		title: 'Cost Saving',
		descs: [
			'There’s no initial inventory needed, so this automatically saves you money upfront and can help increase profit margins.',
			'No MOQ request, products are only printed when they are ordered. You can list a product and see if there’s an interest in it first before ordering it.',
		]
	},
	{
		pic: img_ladder_2,
		title: 'More high-ticket products',
		descs: [
			'This enables you to diversify your product offerings and cater to specific audience segments, helping you tap into new revenue streams and expand your market reach.',
		]
	},
	{
		pic: img_ladder_3,
		title: 'Build your brand & Make money with every sale!',
		descs: [
			'You can take chances and call the shots, as you’re able to be the brand owner when selling print-on-demand products and determine your margins for each product.',
		]
	}
]
const localJump = () => jumpUrl('https://seller.hyinsight.com/#/home/searchResults?categoryId=1765257893646475285&categoryName=Pod%20Dropshipping')
</script>

<style scoped lang="scss">
.pod-wrap {
	//overflow-x: hidden;
	.video-demo {
		width: 100%;
		//cursor: pointer;
	}
	// 阶梯
	.ladder {
		&_item {
			--pl-level: 0;
			display: flex;
			align-items: center;
			padding-left: calc(var(--pl-level) * px2vw(176px));
			& + .ladder_item {
				margin-top: 30px;
			}
			header {
				font-size: 24px;
				font-weight: 600;
				margin-bottom: 24px;
			}
			.desc {
				font-size: 16px;
				max-width: 570px;
				& + .desc {
					margin-top: 20px;
				}
			}
			img {
				height: px2vw(220px);
				max-height: 220px;
				//margin-right: px2vw(60px);
				margin-right: 50px;
			}
			& .ladder_item {
				margin-top: 30px;
			}
		}
	}
	// 服务
	.services-wrap {
		display: flex;
		flex-direction: column;
		margin-top: 30px;
		.item {
			display: flex;
			align-items: center;
			gap: 40px;
			img {
				//width: 486px;
				flex-shrink: 0;
				//border-radius: 8px;
			}
			.title {
				//color: #212121;
				color: var(--secondary-color);
				font-size: 16px;
				//font-style: normal;
				font-weight: 700;
			}
			.desc {
				margin-top: 16px;
				margin-bottom: 40px;
			}
		}
	}

	.growth-wrap {
		color: var(--secondary-color);
		.title {
			display: flex;
			align-items: center;
			font-size: 16px;
			//font-style: normal;
			font-weight: 700;
			.icon {
				flex-shrink: 0;
				margin-right: 6px;
				font-size: 24px;
			}
		}
		.item {
			display: flex;
			//align-items: center;
			gap: 40px;
			img {
				//width: 486px;
				flex-shrink: 0;
				//border-radius: 8px;
			}
			.desc {
				margin-top: 12px;
			}
		}
	}
}
// 兼容手机端
.pro_mobile {
	.pod-wrap {
		font-size: mx2vw(14px);
		// 阶梯
		.ladder {
			&_item {
				padding-left: 0 !important;
				flex-direction: column;
				& + .ladder_item {
					margin-top: mx2vw(24px);
				}
				header {
					font-size: mx2vw(16px);
					margin: mx2vw(12px) 0;
				}
				.desc {
					//font-size: mx2vw(14px);
					//max-width: 570px;
					&-wrap {
						//header {
						//	margin:
						//}
					}
					& + .desc {
						margin-top: mx2vw(12px);
					}
				}
				img {
					height: mx2vw(86px);
					margin-right: 0;
					//margin-bottom: mx2vw(12px);
				}
			}
		}
		// 服务
		.services {
			/*&-tip {
				font-size: mx2vw(14px);
			}*/
			&-wrap {
				margin-top: mx2vw(24px);
				.item {
					flex-direction: column;
					gap: 0;
					//& + .item {}
					&-2 {
						margin-top: mx2vw(36px);
						img {
							order: 0;
						}
					}
					img {
						width: mx2vw(343px);
					}
					.title {
						font-size: mx2vw(16px);
					}
					.desc {
						margin-top: mx2vw(8px);
						margin-bottom: mx2vw(24px);
					}
				}
			}
		}

		.growth-wrap {
			.title {
				//align-items: flex-start;
				font-size: mx2vw(14px);
				margin-bottom: mx2vw(16px);
				.icon {
					//flex-shrink: 0;
					margin-right: mx2vw(6px);
					font-size: mx2vw(24px);
				}
			}
			.item {
				//flex-direction: column;
				gap: 0;
				align-items: flex-start;

				&-box {
					margin-bottom: mx2vw(36px);
					&:last-child {
						margin-bottom: 0;
					}
				}
				img {
					width: mx2vw(114px);
					transform: unset;
				}
				.desc {
					font-size: mx2vw(12px);
					margin-top: 0;
					text-align: left;
					&-wrap {
						padding-left: 0;
					}
					& + .desc {
						margin-top: mx2vw(10px);
					}
				}
			}
		}
	}
}
</style>
