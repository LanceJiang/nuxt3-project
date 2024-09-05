<template>
	<div class="sign-bar">
		<el-button class="btn" @click="goRegister">sign up-it’s free</el-button>
	</div>
</template>
<script setup lang="ts">
import { jumpUrl } from '@/utils/index'
const goRegister = () => jumpUrl('https://seller.hyinsight.com/#/home?action=register')
</script>

<style scoped lang="scss">

</style>
