<template>
<div class="column-page-wrap page-wrap">
	<div class="banner">
		<header class="header">
			<svg-icon name="logo_pure" class="logo" />
			<svg-icon name="logo_txt" class="logo-text" />
		</header>
		<div class="banner_title">
			Game On!
		</div>
		<div class="banner_txt">
			Start Your E-commerce Journey in the Gaming World!
		</div>
		<div class="banner_sub">
			Accelerate growth
		</div>
	</div>
	<div class="part-1">
		<div v-for="(group, i) of groupItems" :key="i">
			<header class="title">
				{{ group.title }}
			</header>
			<div class="box-wrap">
				<div v-for="(v, j) of group.items" :key="j" class="item" @click.stop="jumpUrl(v.url)">
					<img class="img" :src="v.img" alt="" />
					<div class="txt">{{v.txt}}</div>
					<div class="price">{{v.price}}</div>
				</div>
			</div>
		</div>
	</div>
	<div class="part-2">
		<div class="title">Special Offer:</div>
		<div class="sub">Start Your Dropshipping Business with Exclusive Bonuses!(Worth Over <span class="price">$500</span>)</div>
		<div class="txt">Everything you need to start, grow, and scale your business with ease.</div>
		<div class="sub-wrap">
			<img src="@/assets/image/activity/e-game-word/block_1.webp" alt="" />
			<span class="sub text-right">Done-for-You Website Setup Worth $200</span>
		</div>
		<div class="txt">
			Building a high-quality, professional website from scratch can be costly and time-consuming. We take care of this for you, saving you the expense and getting you start the business quickly.
		</div>
		<div class="sub-wrap">
			<img class="order-1" src="@/assets/image/activity/e-game-word/block_2.webp" alt="" />
			<span class="sub">Product Credits Worth $150</span>
		</div>
		<div class="txt text-right">
			Get credit to fulfill your first $150 worth of product costs! which is worth $300-400 in orders on your shop.
		</div>
		<div class="sub-wrap">
			<img src="@/assets/image/activity/e-game-word/block_3.webp" alt="" />
			<span class="sub">Logistics Coupon Code $150</span>
		</div>
		<div class="txt">
			This logistics coupon code helps reduce your shipping expenses, letting you keep more of your revenue.
		</div>
	</div>
	<div class="part-3">
		<div class="title">Sites that we have built for our clients.</div>
		<div class="bg-dark" >
			<img class="mac mac_1" src="@/assets/image/activity/e-game-word/mac_1.webp" alt="" />
			<img class="mac mac_2" src="@/assets/image/activity/e-game-word/mac_2.webp" alt="" />
			<img class="mac mac_3" src="@/assets/image/activity/e-game-word/mac_3.webp" alt="" />
			<img class="mac mac_4" src="@/assets/image/activity/e-game-word/mac_4.webp" alt="" />
			<img class="mac mac_5" src="@/assets/image/activity/e-game-word/mac_5.webp" alt="" />
<!--			<div class="website"></div>-->
		</div>
	</div>
</div>
</template>

<script setup lang="ts">
import {jumpUrl} from "~/utils";

definePageMeta({
	layout: 'empty'
})
import keyboard_1 from '@/assets/image/activity/e-game-word/keyboard_1.webp'
import keyboard_2 from '@/assets/image/activity/e-game-word/keyboard_2.png'
import keyboard_3 from '@/assets/image/activity/e-game-word/keyboard_3.png'
import mouse_1 from '@/assets/image/activity/e-game-word/mouse_1.jpg'
import mouse_2 from '@/assets/image/activity/e-game-word/mouse_2.jpg'
import mouse_3 from '@/assets/image/activity/e-game-word/mouse_3.jpg'
import e_1 from '@/assets/image/activity/e-game-word/e_1.jpg'
import e_2 from '@/assets/image/activity/e-game-word/e_2.jpg'
import e_3 from '@/assets/image/activity/e-game-word/e_3.png'
import o_1 from '@/assets/image/activity/e-game-word/o_1.jpg'
import o_2 from '@/assets/image/activity/e-game-word/o_2.jpg'
import o_3 from '@/assets/image/activity/e-game-word/o_3.webp'
const groupItems = [
	{
		title: 'Keyboard',
		items: [
			{
				img: keyboard_1,
				txt: 'K321 wired keyboard',
				price: '$10.99',
				url: 'https://seller.hyinsight.com/#/home/productDetail?goodsId=d0f1e2176b030c3b01f81a811e4466fa'
			},
			{
				img: keyboard_2,
				txt: 'Qianxingzhe Mechanical Keyboard',
				price: '$16.99',
				url: 'https://seller.hyinsight.com/#/home/productDetail?goodsId=0c9679924b97962208d35f31156888bf'
			},
			{
				img: keyboard_3,
				txt: 'Punk Mechanical Keyboard',
				price: '$35.99',
				url: 'https://seller.hyinsight.com/#/home/productDetail?goodsId=7c3dbb34841e960c1c6418a262aa573d'
			}
		]
	},
	{
		title: 'Mouse',
		items: [
			{
				img: mouse_1,
				txt: 'PAW3995 E-sports Mouse',
				price: '$67.99',
				url: 'https://seller.hyinsight.com/#/home/productDetail?goodsId=70273ab39fab1bb0ea2322cefd53c04d'
			},
			{
				img: mouse_2,
				txt: 'Forerunner G5 wired Mouse',
				price: '$18.99',
				url: 'https://seller.hyinsight.com/#/home/productDetail?goodsId=34c0a960c3c90d54503b351bc1a0ef2a'
			},
			{
				img: mouse_3,
				txt: 'M133 Transparent Mouse',
				price: '$13.99',
				url: 'https://seller.hyinsight.com/#/home/productDetail?goodsId=2d051a2253e72a80d83261fa2e524c88'
			}
		]
	},
	{
		title: 'Earphone',
		items: [
			{
				img: e_1,
				txt: 'cat ear headphones',
				price: '$14.99',
				url: 'https://seller.hyinsight.com/#/home/productDetail?goodsId=14dc37be6459f3da9c99d5632e02cd7d'
			},
			{
				img: e_2,
				txt: 'E-sports gaming headset',
				price: '$11.99',
				url: 'https://seller.hyinsight.com/#/home/productDetail?goodsId=da5d837a5b9dc7e721a4577a31390143'
			},
			{
				img: e_3,
				txt: 'Qianxingzhe X15 headset',
				price: '$19.99',
				url: 'https://seller.hyinsight.com/#/home/productDetail?goodsId=a82ade44f7741e55b8baafc1f7f6699d'
			}
		]
	},
	{
		title: 'Other Aecessories',
		items: [
			{
				img: o_1,
				txt: 'Fluid Rhythm Atmosphere Speaker',
				price: '$57.99',
				url: 'https://seller.hyinsight.com/#/home/productDetail?goodsId=2558aacd892e6f8f78c285da20423a57'
			},
			{
				img: o_2,
				txt: 'Pixel Photo Frame',
				price: '$26.99',
				url: 'https://seller.hyinsight.com/#/home/productDetail?goodsId=31208c3d3b42a8b6fcfbb525286c9040'
			},
			{
				img: o_3,
				txt: ' Desktop Animation Display',
				price: '$16.99',
				url: 'https://seller.hyinsight.com/#/home/productDetail?goodsId=7f29fa143b3bd9771b362b4c4ef871cc'
			}
		]
	}
]
</script>

<style scoped lang="scss">
//mx2vw()
.page-wrap {
	font-family: "Nunito Sans";
	background: #16071C;
	color: #fff;
	//overflow-x: hidden;
	.banner {
		//position: absolute;
		width: 100%;
		height: mx2vw(312px);
		background: url('@/assets/image/activity/e-game-word/banner.webp') no-repeat top center;
		background-size: 100% 100%;
		margin-bottom: mx2vw(-6px);
		font-size: mx2vw(16px);
		text-transform: capitalize;
		padding-left: mx2vw(26px);
		&_title {
			padding-top: mx2vw(58px);
			font-size: mx2vw(36px);
			line-height: mx2vw(56px);
			font-weight: 700;
		}
		&_txt {}
		&_sub {
			margin-top: mx2vw(6px);
			color: #FFC300;
			//font-weight: 600;
			font-style: italic;
		}
	}
	.header {
		display: flex;
		align-items: center;
		height: mx2vw(60px);
		//padding-left: mx2vw(20px);
		margin-left: mx2vw(-6px);
		background: rgba(22, 7, 28, 0.50);
		.logo {
			font-size: mx2vw(39px);
			&-text {
				margin-left: mx2vw(12px);
				font-size: mx2vw(58px);
				//height: mx2vw(8px);
			}
		}
	}
	.part-1 {
		padding: mx2vw(24px) mx2vw(16px);
		display: flex;
		flex-direction: column;
		gap: mx2vw(36px);
		background: #EDEDED;
		color: #212121;
		.title {
			padding-bottom: mx2vw(16px);
			font-weight: 600;
			font-size: mx2vw(16px);
			text-transform: capitalize;
		}
		.box-wrap {
			display: flex;
			align-items: center;
			gap: mx2vw(9px);
			.item {
				width: mx2vw(108px);
				font-size: mx2vw(12px);
				.img {
					width: 100%;
					height: mx2vw(108px);
					border-radius: mx2vw(6px);
					background: #fff;
				}
				.txt {
					margin: mx2vw(8px) 0;
					font-weight: 700;
					text-transform: capitalize;
					@include text-ellipsis_line(2);
					font-size: mx2vw(11px);
					height: mx2vw(32px);
					line-height: mx2vw(16px);
					word-break: unset;
				}
				.price {
					color: #FF4626;
					font-size: mx2vw(16px);
					font-weight: 700;
				}
			}
		}
	}
	.part-2 {
		margin-top: mx2vw(40px);
		padding: mx2vw(30px) mx2vw(16px);
		height: mx2vw(692px);
		font-size: mx2vw(12px);
		text-transform: capitalize;
		color: #AAA;
		background: url('@/assets/image/activity/e-game-word/bg_2.webp') no-repeat top center;
		background-size: 100% 100%;
		.title {
			font-size: mx2vw(24px);
			font-weight: 700;
			color: #fff;
		}
		.sub {
			flex: 1;
			margin-top: mx2vw(10px);
			color: #fff;
			font-size: mx2vw(14px);
			font-weight: 500;
			&-wrap {
				display: flex;
				align-items: center;
				margin: mx2vw(12px) 0;
				img {
					width: mx2vw(80px);
					margin: 0 mx2vw(18px);
				}
			}
		}
		.price {
			font-size: mx2vw(24px);
			font-style: italic;
			font-weight: 700;
			color: #FFC300;
		}
		.txt {
			margin-top: mx2vw(12px);
		}
	}
	.part-3 {
		overflow-x: hidden;
		padding-bottom: mx2vw(90px);
		font-size: mx2vw(12px);
		text-transform: capitalize;
		color: #AAA;
		.title {
			margin: mx2vw(40px) mx2vw(16px) 0;
			padding-bottom: mx2vw(138px);
			font-size: mx2vw(24px);
			font-style: italic;
			font-weight: 700;
			color: #fff;
			text-align: center;
		}
		.bg-dark {
			position: relative;
			width: mx2vw(409px);
			height: mx2vw(1158px);
			margin-left: mx2vw(-13px);
			margin-right: mx2vw(-21px);
			background: url('@/assets/image/activity/e-game-word/part-3_bg_1.webp') no-repeat top center;
			background-size: 100% 100%;
			padding-left: mx2vw(20px);
			.mac {
				//margin-left: mx2vw(13px);
				//opacity: 0.5;
				position: relative;
				&_1 {
					//z-index: 11;
					margin-top: mx2vw(-108px);
					width: mx2vw(274px);
				}
				&_2 {
					margin-top: mx2vw(62px);
					margin-left: mx2vw(116px);
					width: mx2vw(218px);
				}
				&_3 {
					margin-top: mx2vw(64px);
					width: mx2vw(251px);
				}
				&_4 {
					margin-top: mx2vw(78px);
					margin-left: mx2vw(106px);
					width: mx2vw(216px);
				}
				&_5 {
					margin-top: mx2vw(74px);
					margin-left: mx2vw(21px);
					width: mx2vw(224px);
				}
			}
		}
		/*.website {
			position: absolute;
			left: mx2vw(25px);
			top: mx2vw(-107px);
			width: mx2vw(321px);
			height: mx2vw(1060px);
			background: url('@/assets/image/activity/e-game-word/website.png') no-repeat top center;
			background-size: 100% 100%;
		}*/

/*
		.sub {
			flex: 1;
			margin-top: mx2vw(10px);
			color: #fff;
			font-size: mx2vw(14px);
			font-weight: 500;
			&-wrap {
				display: flex;
				align-items: center;
				margin: mx2vw(12px) 0;
				img {
					width: mx2vw(80px);
					margin: 0 mx2vw(18px);
				}
			}
		}
		.price {
			font-size: mx2vw(24px);
			font-style: italic;
			font-weight: 700;
			color: #FFC300;
		}
		.txt {
			margin-top: mx2vw(12px);
		}*/
	}
	.pxvw-16 {
		padding: 0 mx2vw(16px);
	}
}
</style>
