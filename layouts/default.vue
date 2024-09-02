<template>
	<div class="page-container">
		<TopHeader />
		<main class="main-container">
			<slot />
		</main>
	</div>
</template>

<script></script>

<style lang="scss" scoped>
.page-container {
	position: relative;
	margin: 0 auto;
	width: 100%;
}
/*.main-container {
	margin-top: 1.62rem;
}*/
</style>
