<template>
	<view class="status_bar" :style='{"background-color":color}'></view>
</template>

<script>
	export default {
		name: "TitleBlock",
		props: {
			color:{
				default:"transparent"
			}
		}
	}
</script>

<style scoped>
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}
</style>
