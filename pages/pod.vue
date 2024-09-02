<template>
	<div class="pod-wrap column-page-wrap bg-white">
		<div class="common-inner-auto">
			<div class="part-title" style="padding-top: 40px;">
				Print On Demand
			</div>
			<div class="text-center">
				Start Your Online Business with Ease Create and sell custom products with just one click.
			</div>
			<div class="mt-[16px] mb-[24px] text-center">
				<el-button class="min-w-[230px]" type="primary" round>Start Selling</el-button>
			</div>
		</div>
		<img class="video-demo" src="~@/assets/image/pod/video_bg.jpg" />

		<!--demand-->
		<div class="common-inner-auto">
			<div class="part-title">
				Advantages of print-on-demand
			</div>
			<div class="ladder-wrap">
				<div v-for="(v, i) of ladders" :key="i" class="ladder_item" :style="`padding-left: ${180 * i}px`">
					<img :src="v.pic" />
					<div class="desc-wrap">
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
			<div class="text-center">
				Whether you're an artist, entrepreneur, or creative enthusiast, we make it easy for you to launch your own brand and connect with your followers.
			</div>
			<div class="services-wrap mt-[30px]">
				<div class="item">
					<img src="@/assets/image/pod/services_1.jpg" />
					<div class="desc-wrap">
						<header class="title">Creators and Designers</header>
						<p class="mt-[16px] mb-[40px]">Start monetizing your audience or art with zero upfront investment. Selling custom merchandise is the best way to keep your creative passion alive.</p>
						<el-button type="primary" round class="min-w-[230px]">Creat your merch</el-button>
					</div>
				</div>

				<div class="item mt-[20px]">
					<img class="order-2" src="@/assets/image/pod/services_2.jpg" />
					<div class="desc-wrap text-right">
						<header class="title">Ecommerce Entrepreneurs</header>
						<p class="mt-[16px] mb-[40px]">Build your brand without any upfront costs. Launching or growing your e-commerce business is now easier than ever with Hyinsight</p>
						<el-button type="primary" round class="min-w-[230px]">Start Selling</el-button>
					</div>
				</div>
			</div>
		</div>

		<!--growth-->
		<div class="common-inner-auto">
			<div class="part-title">
				How Hyinsight empower your E-commerce growth
			</div>
			<div class="growth-wrap mt-[30px]">
				<div class="item items-end">
					<img class="transform translate-y-[30px]" src="@/assets/image/pod/growth_1.png" />
					<div class="desc-wrap">
						<header class="title"><svg_gift class="icon"/> Endless Product Selection – Create Your Signature Line</header>
						<p class="mt-[12px]">
							<span class="font-bold">Tailored for Your Brand:</span>
							Choose from a wide array of products like apparel, accessories, and more, giving you the flexibility to create a unique merchandise line that resonates with your customers.
						</p>
						<p class="mt-[12px]">
							<span class="font-bold">Premium Quality:</span>
							Stand out with high-quality products that reflect your brand’s values and ensure customers love what they buy.
						</p>
					</div>
				</div>

				<div class="item items-start mt-[50px]">
					<img class="order-2 transform -translate-y-[20px]" src="@/assets/image/pod/growth_2.png" />
					<div class="desc-wrap pl-48">
						<header class="title justify-end"><svg_page class="icon"/>Extensive Design Templates – Design Made Easy</header>
						<p class="mt-[12px] text-right">
							<span class="font-bold">Effortless Creativity:</span>
							Dive into our vast library of design templates that make it easy for you to create stunning products without any design experience. Personalized Touch: Customize templates to match your style and brand identity, making your merchandise truly yours.
						</p>
					</div>
				</div>

				<div class="item items-start mt-[20px]">
					<img class="transform -translate-y-[60px]" src="@/assets/image/pod/growth_3.png" />
					<div class="desc-wrap">
						<header class="title"><svg_airplane class="icon"/>48 Hours Lightning-Fast Shipping – Start Selling in No Time</header>
						<p class="mt-[12px]">
							<span class="font-bold">Quick Turnaround:</span>
							We handle the production and shipping, ensuring your products are ready to ship within 48 hours. This means you can start selling and profiting almost immediately.
						</p>
						<p class="mt-[12px]">
							<span class="font-bold">Global Shipping:</span>
							Reach customers worldwide with our reliable shipping solutions, expanding your brand’s reach effortlessly.
						</p>
					</div>
				</div>

				<div class="item items-start pt-[20px] -mt-[46px]">
					<img class="order-2 transform -translate-y-[20px]" src="@/assets/image/pod/growth_4.png" />
					<div class="desc-wrap pl-48">
						<header class="title justify-end"><svg_globe class="icon"/>Flexible Options, Exceptional Service</header>
						<p class="mt-[12px] text-right">
							<span class="font-bold">Hyinsight prioritizes exceptional customer service,</span>
							offering tailored, customizable solutions for a seamless and personalized experience. - From labeled product to custom packaging, 7*24H service Hyinsight’s flexible options scale with your growing business.
						</p>
					</div>
				</div>
			</div>
		</div>
		<img class="sign-bar pointer mt-[20px]" src="@/assets/image/sign_bar_green.jpg" />
		<Footer />
	</div>
</template>

<script lang="ts" setup>
import svg_gift from '@/assets/svg/gift.svg'
import svg_page from '@/assets/svg/page.svg'
import svg_airplane from '@/assets/svg/airplane.svg'
import svg_globe from '@/assets/svg/globe.svg'

import img_ladder_1 from '@/assets/image/pod/ladder_1.png'
import img_ladder_2 from '@/assets/image/pod/ladder_2.png'
import img_ladder_3 from '@/assets/image/pod/ladder_3.png'
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
</script>

<style scoped lang="scss">
.pod-wrap {
	.video-demo {
		width: 100%;
		cursor: pointer;
	}
	// 阶梯
	.ladder {
		&_item {
			display: flex;
			align-items: center;
			& + .ladder_item {
				margin-top: 30px;
			}
			.desc {
				font-size: 16px;
				& + .desc {
					margin-top: 20px;
				}
			}
			img {
				height: 220px;
				margin-right: 60px;
			}
			header {
				font-size: 24px;
				font-weight: 600;
				margin-bottom: 24px;
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
				color: #212121;
				font-size: 16px;
				//font-style: normal;
				font-weight: 700;
			}
		}
	}

	.growth-wrap {
		color: var(--secondary-color);
		.item {
			display: flex;
			//align-items: center;
			gap: 40px;
			img {
				//width: 486px;
				flex-shrink: 0;
				//border-radius: 8px;
			}
			.title {
				display: flex;
				align-items: center;
				font-size: 16px;
				//font-style: normal;
				font-weight: 700;
				.icon {
					flex-shrink: 0;
					margin-right: 6px;
				}
			}
		}
	}
}
</style>
