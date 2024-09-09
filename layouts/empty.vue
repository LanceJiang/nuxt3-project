<template>
	<div class="page-container">
		<NuxtPage />
		<el-backtop :right="63" >
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
</style>
