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
				<img src="@/assets/image/contact/email-box.webp" alt="" />
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
		.box-wrap {
			margin: 80px 0;
			img {
				width: 100%;
			}
		}
	}
}
</style>
