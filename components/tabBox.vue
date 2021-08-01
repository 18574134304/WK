<template>
	<view class="tab">
		<view class="tab-item" @click="tabClick(0)" :class="{'tab-active':active===0}">
			当日待拼车队
			<text class="line" :style="{transform: `translateX(${active*100}%)`}"></text>
		</view>
		<view class="tab-item" @click="tabClick(1)" :class="{'tab-active':active===1}">
			当日已拼车队
		</view>
	</view>
</template>

<script>
	export default {
		props: ['active'],
		methods: {
			tabClick(index) {
				this.$emit("tabClick", index)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tab {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 53rpx;
		width: 100%;
		margin: 40rpx 0 30rpx;

		.tab-item {
			position: relative;
			width: 50%;
			text-align: center;
			font-size: 32rpx;
			font-weight: 400;
			color: #333;
			transition: 0.3s all;

			.line {
				position: absolute;
				width: 100%;
				height: 0;
				bottom: 0;
				left: 0;
				transition: 0.3s all;

				&::after {
					content: "";
					position: absolute;
					bottom: -16rpx;
					left: 50%;
					width: 230rpx;
					height: 14rpx;
					margin-left: -115rpx;
					background-color: #00BAAD;
					border-radius: 18rpx;

				}
			}
		}

		.tab-active {
			font-size: 38rpx;
			font-weight: 600;
		}
	}
</style>
