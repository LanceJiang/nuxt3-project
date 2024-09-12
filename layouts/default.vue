<template>
	<div class="page-container">
		<TopHeader />
		<main class="main-container">
			<slot />
		</main>
		<el-backtop :right="63" class="layout-backtop">
			<el-icon class="icon-back-top"><Top /></el-icon>
		</el-backtop>
	</div>
</template>

<script setup>
import { Top } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.page-container {
	position: relative;
	margin: 0 auto;
	width: 100%;
}
.icon-back-top {
	color: #0A166D;
}
/*.main-container {
	margin-top: 1.62rem;
}*/
// 兼容手机端
.pro_mobile {
	.layout-backtop {
		right: mx2vw(16px) !important;
	}
}
</style>
