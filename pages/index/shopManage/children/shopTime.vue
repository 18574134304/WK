<template>
	<view id="shop-time">
		<view class="time">
			<text class="label">营业时间</text>
			<view class="center">
				<text @click="startShow=true">{{startTime ? startTime : '选择开始时间'}}</text>
				<text class="n">至</text>
				<text @click="endShow=true">{{endTime ? endTime : '选择结束时间'}}</text>
			</view>
			<image src="@/static/index/shopManger/r-icon.png" class="arrow-right"></image>
		</view>
		<!-- 开始时间 -->
		<u-picker confirm-color="#09BCAF" @confirm="startChange" v-model="startShow" title="请选择开始时间" mode="time"
			:params="TimeParams"></u-picker>
		<!-- 结束时间 -->
		<u-picker confirm-color="#09BCAF" @confirm="endChange" v-model="endShow" title="请选择结束时间" mode="time"
			:params="TimeParams"></u-picker>
		<view class="save">
			<view>保存</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				startTime: null,
				endTime: null,
				// 开始时间
				startShow: false,
				// 结束时间
				endShow: false,
				TimeParams: {
					year: false,
					month: false,
					day: false,
					hour: true,
					minute: true,
					second: false
				}
			}
		},

		methods: {
			startChange(time) {
				this.startTime = time.hour + ':' + time.minute
			},
			endChange(time){
				this.endTime = time.hour + ':' + time.minute
			}
		}

	}
</script>

<style lang="scss" scoped>
	#shop-time {

		position: relative;
		width: 100vw;
		height: calc(100vh - 88rpx);
		background-color: #fff;

		.time {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 30rpx;
			height: 104rpx;
			border-bottom: 1rpx solid #eee;

			.label {
				width: 150rpx;
				font-size: 28rpx;
				color: #333;
				font-weight: 500;
			}

			.center {
				flex: 1;

				text {
					font-size: 26rpx;
					color: #666;
				}

				.n {
					font-size: 28rpx;
					margin: 0 30rpx;
					color: #333;

				}
			}

			.arrow-right {
				width: 12rpx;
				height: 24rpx;
				flex-shrink: 0;
			}
		}

		.save {
			position: absolute;
			bottom: 30rpx;
			left: 0;
			width: 100%;
			height: 88rpx;
			padding: 0 20rpx;

			view {
				width: 100%;
				height: 88rpx;
				line-height: 88rpx;
				background-color: #09BCAF;
				text-align: center;
				border-radius: 750rpx;
				margin: 0 auto;
				color: #fff;
				font-size: 28rpx;
			}
		}
	}
</style>
