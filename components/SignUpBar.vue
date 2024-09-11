<template>
	<div class="sign-bar">
		<div class="box">
			<div class="desc">
				Start Your Business Journey Here
			</div>
			<el-button class="btn" @click="goRegister">sign up-it’s free</el-button>
		</div>
	</div>
</template>
<script setup lang="ts">
import { jumpUrl } from '@/utils/index'
const goRegister = () => jumpUrl('https://seller.hyinsight.com/#/home?action=register')
</script>

<style scoped lang="scss">

</style>
