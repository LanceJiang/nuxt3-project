<template>
	<svg class="svg-icon" aria-hidden="true">
		<use :xlink:href="symbolId" :fill="color" />
	</svg>
</template>

<script lang="ts" setup>
defineOptions({ name: 'SvgIcon' })
const props = defineProps({
	prefix: {
		type: String,
		default: 'icon'
	},
	name: {
		type: String,
		require: true
	},
	color: {
		type: String,
		default: ''
	}
})
const symbolId = computed(() => `#${props.prefix}-${props.name}`)

</script>
<style scoped lang="scss">
.svg-icon {
	width: 1em;
	height: 1em;
	vertical-align: -0.15em;
	fill: currentColor;
	overflow: hidden;
	&:focus {
		outline: unset;
	}
}
</style>
