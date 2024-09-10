<template>
	<div class="home-wrap column-page-wrap bg-white">
		<div class="local-container">
			<el-carousel class="home_header" height="100%">
				<el-carousel-item class="banner banner_1">
					<el-button class="btn" type="primary" @click="goLogin">Get Started</el-button>
				</el-carousel-item>
				<el-carousel-item class="banner banner_2">
					<el-button class="btn" type="primary" @click="jumpUrl('https://seller.hyinsight.com/#/home/searchResults?categoryId=1726425774407069798&categoryName=Consumer%20Electronics')">Get Started</el-button>
				</el-carousel-item>
			</el-carousel>

			<div class="home-part1">
				<div class="part-title">
					Lunch Your Business in 4 Easy Steps
				</div>
				<div class="box-wrap">
					<div class="number" />
					<div class="p_order p_order_1" />
					<div class="p_order p_order_2" />
					<div class="p_order p_order_3" />
					<div class="p_order p_order_4" />
					<div class="icon-desc icon-desc_1">
						<svg_rate_gear class="icon icon_1"/>
						hyinsight platform
					</div>
					<div class="icon-desc icon-desc_3">
						<svg_rate_gear class="icon icon_3"/>
						selling
					</div>
					<div class="icon-desc icon-desc_4">
						<svg_rate_gear class="icon icon_4"/>
						order fulfill
					</div>
					<div class="text-box">
						<svg_logo_txt class="logo-txt logo-top" />
						<div class="desc">Works with:</div>
						<div class="platform" />
						<el-button class="btn" type="primary" @click="goRegister" round>try it for free</el-button>
						<div class="icon-desc icon-desc_2">
							<svg_rate_gear class="icon icon_2"/>
							design & sourcing
						</div>
					</div>
					<svg_logo_txt class="logo-txt logo-bottom" />
				</div>
			</div>
			<div class="home-part2">
				<div class="part-title" style="padding-top: 0">
					Why choose Hyinsight
				</div>
				<div class="box-wrap">
					<!--<div class="desc-wrap"></div>-->
				</div>
			</div>
<!--			<div class="home-part3">
				<div class="part-title">
					Read their story
				</div>
				<div class="common-inner-auto box-wrap">
					<img v-for="(url, i) of imgItems" :src="url" class="img" />
				</div>
			</div>-->

			<SignUpBar class="sign-bar--blue"/>
			<Footer />
		</div>
	</div>
</template>

<script lang="ts" setup>
import { jumpUrl } from '@/utils/index'
import svg_logo_txt from '@/assets/image/home/logo_txt.svg'
import svg_rate_gear from '@/assets/svg/rate_gear.svg'

import img_1 from '@/assets/image/home/img_1.webp'
import img_2 from '@/assets/image/home/img_2.webp'
import img_3 from '@/assets/image/home/img_3.webp'
import img_4 from '@/assets/image/home/img_4.webp'
import img_5 from '@/assets/image/home/img_5.webp'
import img_6 from '@/assets/image/home/img_6.webp'
import img_7 from '@/assets/image/home/img_7.webp'
import img_8 from '@/assets/image/home/img_8.webp'
const imgItems = [
	img_1,
	img_2,
	img_3,
	img_4,
	img_5,
	img_6,
	img_7,
	img_8
]

const  goLogin = () => {
	jumpUrl('https://seller.hyinsight.com/#/home?action=login')
}
const goRegister = () => {
	jumpUrl('https://seller.hyinsight.com/#/home?action=register')
}
</script>

<style scoped lang="scss">
.home {
	&_header {
		position: relative;
		width: 100%;
		height: px2vw(578px);
		/*:deep(.el-carousel__container) {
			height: 100%;
		}*/
		.banner {
			background: url('@/assets/image/home/banner_1.webp') no-repeat top center;
			background-size: 100% 100%;
			height: 100%;
			&_1 {
				background-image: url('@/assets/image/home/banner_1.webp');
				.btn {
					margin-top: px2vw(352px);
					margin-left: px2vw(496px);
					padding: 0;
					width: px2vw(186px);
					height: px2vw(44px);
					border-radius: px2vw(44px);
					font-size: px2vw(20px);
					background: #6FB2FD;
					color: #000;
					border-color: #6FB2FD;
					&:hover {
						background: #89befc;
						border-color: #89befc;
					}
					//--el-button-border-color: #6FB2FD;
					//--el-button-hover-border-color: #6FB2FD;
				}
			}
			&_2 {
				background-image: url('@/assets/image/home/banner_2.webp');
				.btn {
					margin-top: px2vw(486px);
					margin-left: px2vw(625px);
					padding: 0;
					width: px2vw(187px);
					height: px2vw(44px);
					border-radius: px2vw(44px);
					font-size: px2vw(20px);
					//background: transparent;
					background: #fff;
					color: #000;
					border-color: #fff;
					&:hover {
						background: #f5f5f5;
						border-color: #f5f5f5;
					}
					//--el-button-border-color: #6FB2FD;
					//--el-button-hover-border-color: #6FB2FD;
				}
			}
		}

	}
	&-wrap {
		position: relative;
		overflow-x: hidden;
		//color: #262626;
		.local-container {
			position: relative;
		}
	}
	&-part1 {
		.icon-desc {
			position: relative;
			z-index: 3;
			display: flex;
			align-items: center;
			color: #212121;
			font-size: px2vw(16px);
			font-weight: 600;
			text-transform: capitalize;
			cursor: pointer;
			&:hover {
				color: #375AE5;
			}
			.icon {
				margin-right: px2vw(6px);
				font-size: px2vw(24px);
				//width: px2vw(24px);
				//height: px2vw(24px);
				&_1 {
					color: #02D6DD;
				}
				&_2 {
					color: #FF7D04;
				}
				&_3 {
					color: #02DD18;
				}
				&_4 {
					color: #FF634E;
				}
			}
			&_1 {
				position: absolute;
				top: px2vw(40px);
				left: px2vw(440px);
			}
			&_3 {
				position: absolute;
				top: px2vw(548px);
				left: px2vw(530px);
			}
			&_4 {
				position: absolute;
				bottom: px2vw(440px);
				right: px2vw(361px);
			}
		}
		.box-wrap {
			position: relative;
			height: px2vw(1255px);
			width: px2vw(1320px);
			margin: 0 auto;
			/*margin: px2vw(280px) auto px2vw(226px);
			//margin-top: px2vw(280px);
			//margin-bottom: px2vw(226px);
			width: px2vw(309px);
			height: px2vw(648px);
			background: url('@/assets/image/home/number.webp') no-repeat top center;
			background-size: 100% 100%;*/
			.p_order {
				position: absolute;
				width: px2vw(618px);
				height: px2vw(350px);
				background: url('@/assets/image/home/order_1.webp') no-repeat top center;
				background-size: 100% 100%;
				&_1 {
					top: px2vw(150px);
					left: px2vw(-20px);
				}
				&_2 {
					right: px2vw(-10px);
					top: px2vw(450px);
					background-image: url('@/assets/image/home/order_2.webp');
				}
				&_3 {
					bottom: px2vw(315px);
					left: 0;
					background-image: url('@/assets/image/home/order_3.webp');
				}
				&_4 {
					right: 0;
					bottom: px2vw(80px);
					background-image: url('@/assets/image/home/order_4.webp');
				}
			}
			.number {
				//margin: px2vw(280px) auto px2vw(226px);
				//margin-top: px2vw(280px);
				//margin-bottom: px2vw(226px);
				position: absolute;
				z-index: 1;
				top: px2vw(343px); // 263 + 80
				left: px2vw(508px);
				width: px2vw(309px);
				height: px2vw(648px);
				background: url('@/assets/image/home/number.webp') no-repeat top center;
				background-size: 100% 100%;
			}
			.logo-txt {
				font-size: px2vw(1px);
				&.logo-top {}
				&.logo-bottom {
					position: absolute;
					bottom: px2vw(90px);
					left: 0;
				}
			}
			.text-box {
				padding-top: px2vw(80px);
				padding-left: px2vw(705px);
				.desc {
					margin-top: px2vw(33px);
					font-size: px2vw(16px);
					line-height: px2vw(24px);
				}
				.platform {
					width: px2vw(387px);
					height: px2vw(35px);
					background: url('@/assets/image/home/platform.webp') no-repeat top center;
					background-size: 100% 100%;
					margin: px2vw(6px) 0;
					/*display: flex;
					align-items: center;
					gap: px2vw(24px);
					.svg {
						//width: px2vw(80px);
						//height: px2vw(31px);
						//width: px2vw(127px);
						//height: px2vw(49px);
						&_1 {
							width: px2vw(127px);
							height: px2vw(49px);
						}
						&_2 {}
						&_3 {}
						&_4 {}
					}*/
				}
				.btn {
					//position: absolute;
					//left: px2vw(70px);
					//bottom: px2vw(72px);
					width: px2vw(216px);
					height: px2vw(48px);
					font-size: px2vw(20px);
					padding: 0;
					border-radius: px2vw(6px);
					text-transform: capitalize;
					margin-bottom: px2vw(47px);
				}
				.icon-desc {}
			}
		}
	}
	&-part2 {
		.box-wrap {
			position: relative;
			margin: 0 auto;
			margin-bottom: px2vw(-1px);
			//width: 100%;
			width: px2vw(1320px);
			//height: px2vw(578px);
			height: px2vw(529.83px);
			background: url('@/assets/image/home/warehouse.webp') no-repeat top center /*rgba(104, 118, 183, 0.9)*/;
			background-size: 100% 100%;
			/*.desc-wrap {
				margin: 30px;
				padding: px2vw(56px) px2vw(30px);
				background: rgba(104, 118, 183, 0.9);
				color: #fff;
			}*/
		}
	}
	&-part3 {
		.box-wrap {
			display: flex;
			align-items: center;
			//justify-content: space-between;
			gap: px2vw(24px);
			padding-bottom: px2vw(60px);
			//max-width: px2vw(1320px);
			max-width: max-content;
			//overflow-x: auto;
			.img {
				width: px2vw(144px);
				height: px2vw(216px);
				border-radius: 6px;
			}
		}
	}
}
// 兼容手机端
.pro_mobile {
	.home {
		&-part1 {
			.icon-desc {
				position: relative;
				//z-index: 3;
				//display: flex;
				//align-items: center;
				//color: #212121;
				font-size: mx2vw(16px);
				//font-weight: 600;
				//text-transform: capitalize;
				//cursor: pointer;
				&:hover {
					color: #375AE5;
				}
				.icon {
					margin-right: mx2vw(6px);
					font-size: mx2vw(24px);
					/*&_1 {
						color: #02D6DD;
					}
					&_2 {
						color: #FF7D04;
					}
					&_3 {
						color: #02DD18;
					}
					&_4 {
						color: #FF634E;
					}*/
				}
				&_1 {
					position: absolute;
					top: mx2vw(176px);
					left: mx2vw(68px);
				}
				&_2 {
					position: absolute;
					top: mx2vw(386px);
					left: mx2vw(170px);
				}
				&_3 {
					position: absolute;
					top: mx2vw(514px);
					left: mx2vw(60px);
				}
				&_4 {
					position: absolute;
					bottom: mx2vw(0px);
					right: mx2vw(16px);
				}
			}
			.box-wrap {
				position: relative;
				//height: px2vw(1255px);
				height: mx2vw(680px);
				//width: px2vw(1320px);
				margin: 0 auto;
				/*margin: px2vw(280px) auto px2vw(226px);
				//margin-top: px2vw(280px);
				//margin-bottom: px2vw(226px);
				width: px2vw(309px);
				height: px2vw(648px);
				background: url('@/assets/image/home/number.webp') no-repeat top center;
				background-size: 100% 100%;*/
				.p_order {
					//position: absolute;
					width: mx2vw(188px);
					height: mx2vw(107px);
					//background: url('@/assets/image/home/order_1.webp') no-repeat top center;
					//background-size: 100% 100%;
					&_1 {
						top: mx2vw(196px);
						left: unset;
						right: mx2vw(-16px);
					}
					&_2 {
						left: 0;
						top: mx2vw(310px);
						//background-image: url('@/assets/image/home/order_2.webp');
					}
					&_3 {
						//top: mx2vw(490px);
						//left: mx2vw(180px);
						bottom: mx2vw(130px);
						left: unset;
						right: mx2vw(-16px);
						//background-image: url('@/assets/image/home/order_3.webp');
					}
					&_4 {
						left: 0;
						bottom: mx2vw(10px); //  mx2vw(80px);
						//background-image: url('@/assets/image/home/order_4.webp');
					}
				}
				.number {
					//margin: px2vw(280px) auto px2vw(226px);
					//margin-top: px2vw(280px);
					//margin-bottom: px2vw(226px);
					position: absolute;
					z-index: 1;
					top: mx2vw(180px);
					left: mx2vw(60px);
					width: mx2vw(239px);
					height: mx2vw(500px);
					//background: url('@/assets/image/home/number.webp') no-repeat top center;
					//background-size: 100% 100%;
				}
				.logo-txt {
					font-size: mx2vw(.5px);
					&.logo-top {
						position: absolute;
						top: 0;
						left: mx2vw(92px);
					}
					&.logo-bottom {
						position: absolute;
						/*bottom: px2vw(90px);
						left: 0;*/
						visibility: hidden;
					}
				}
				.text-box {
					padding-top: 0;
					padding-left: 0;
					.desc {
						margin-top: 0;
						font-size: mx2vw(14px);
						line-height: mx2vw(40px);
					}
					.platform {
						/*width: px2vw(387px);
						height: px2vw(35px);*/
						width: mx2vw(261px);
						height: mx2vw(23px);
						//background: url('@/assets/image/home/platform.webp') no-repeat top center;
						//background-size: 100% 100%;
						margin: mx2vw(10px) 0;
						/*display: flex;
						align-items: center;
						gap: px2vw(24px);
						.svg {
							//width: px2vw(80px);
							//height: px2vw(31px);
							//width: px2vw(127px);
							//height: px2vw(49px);
							&_1 {
								width: px2vw(127px);
								height: px2vw(49px);
							}
							&_2 {}
							&_3 {}
							&_4 {}
						}*/
					}
					.btn {
						//position: absolute;
						//left: px2vw(70px);
						//bottom: px2vw(72px);
						width: mx2vw(216px);
						height: mx2vw(48px);
						font-size: mx2vw(20px);
						//padding: 0;
						border-radius: mx2vw(6px);
						display: block;
						margin: 0 auto;
						//text-transform: capitalize;
						//margin-bottom: mx2vw(31px);
					}
					.icon-desc {}
				}
			}
		}
		&-part2 {
			.box-wrap {
				position: relative;
				//margin: 0 auto;
				width: 100%;
				height: mx2vw(151px);
				background: url('@/assets/image/home/warehouse.webp') no-repeat top center /*rgba(104, 118, 183, 0.9)*/;
				background-size: 100% 100%;
				/*.desc-wrap {
					margin: 30px;
					padding: px2vw(56px) px2vw(30px);
					background: rgba(104, 118, 183, 0.9);
					color: #fff;
				}*/
			}
		}
		&-part3 {
			.box-wrap {
				display: flex;
				align-items: center;
				overflow-x: auto;
				//justify-content: space-between;
				gap: mx2vw(16px);
				padding-bottom: mx2vw(20px);
				//max-width: px2vw(1320px);
				max-width: max-content;
				//overflow-x: auto;
				.img {
					width: mx2vw(86px);
					height: mx2vw(129px);
					border-radius: mx2vw(6px);
				}
			}
		}
	}
}
</style>
