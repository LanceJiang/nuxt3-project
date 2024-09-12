<template>
	<div class="contact-wrap column-page-wrap bg-white">
		<div class="local-container">
			<header class="contact_header">
<!--				<div class="title">Customer support</div>
				<p class="desc">
					If you have any questions about Hyinsight- from creating an account to using the Hyinsight to tracking an order, check out our Help Center You'll find answers to our most frequently asked questions here.<br/>
					If you can't find what you're looking for in the Help Center, don't hesitate to contact us via chat or email.
				</p>-->
				<el-button class="btn" type="primary">Help Center</el-button>
			</header>
			<div class="box-wrap">
				<div class="box">
					<header class="title text-center">
						Email
					</header>
					<div class="desc text-center">
						Have a question or need more information? Get in touch with us via email, and we'll make sure to get back to you as quickly as possible. support@hyinsight.com
					</div>
				</div>
			</div>

			<SignUpBar class="sign-bar--blue"/>
			<Footer />
		</div>
	</div>
</template>

<script lang="ts" setup>
/*import svg_p1 from '@/assets/image/sell/shopify.svg'

const platforms = [
	svg_p1
]*/

</script>

<style scoped lang="scss">
.contact {
	&_header {
		position: relative;
		width: 100%;
		height: px2vw(578px);
		background: url('@/assets/image/contact/banner.webp') no-repeat top center #A6D7FF;
		background-size: 100% 100%;
		//background-color: rgba(255, 229, 212, 0.1);
		/*.title {
			font-size: px2vw(32px);
			font-weight: 600;
		}
		.desc {
			width: px2vw(480px);
			font-size: px2vw(16px);
			line-height: px2vw(24px);
			padding-top: px2vw(34px);
			padding-bottom: px2vw(120px);
		}*/
		.btn {
			position: absolute;
			top: px2vw(402px);
			left: px2vw(134px);
			//left: px2vw(60px);
			//bottom: px2vw(142px);
			--el-button-hover-border-color: #4867E7;
			//width: px2vw(256px);
			width: px2vw(190px);
			height: px2vw(44px);
			border-radius: px2vw(44px);
			//border-radius: px2vw(60px);
			font-size: px2vw(20px);
			padding: 0;
			background: #4867E7;
			//background: transparent;
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
		.box {
			padding: 80px 40px;
			color: #000;
			background: rgba(255, 255, 255, 0.95);
			.title {
				font-size: 32px;
				font-weight: 600;
				margin-bottom: 42px;
			}
			.desc {
				font-size: 16px;
			}
			&-wrap {
				margin: 80px 0;
				padding: 20px;
				background: url('@/assets/image/contact/email-box_bg.webp') repeat #D7E2FD;
				background-size: 100%;
			}
		}
	}
}
// 兼容手机端
.pro_mobile {
	.box {
		padding: mx2vw(18px) mx2vw(36px);
		.title {
			font-size: mx2vw(32px);
			margin-bottom: mx2vw(32px);
		}
		.desc {
			font-size: mx2vw(16px);
		}
		&-wrap {
			margin: mx2vw(40px) 0;
			padding: mx2vw(10px);
			background-image: url('@/assets/image/contact/email-box_bg_m.webp');
			//background-size: 100%;
			//background-repeat: no-repeat;
		}
	}
}
</style>
