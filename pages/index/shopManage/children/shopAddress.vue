<template>
	<view id="shop-address">
		<view class="content">
			<view class="item" @click="wakemap">
				<text class="lable">门店地址</text>
				<input type="text" value="" placeholder="请选择门店地址" disabled />
				<image src="@/static/index/shopManger/r-icon.png" class="arrow-right"></image>
			</view>
		</view>
		<view class="save">
			<view>保存</view>
		</view>
	</view>
</template>

<script>
	export default {
		methods: {
			wakemap() {
				uni.chooseLocation({
					success: (res) => {
						console.log('位置名称：' + res.name);
						console.log('详细地址：' + res.address);
						console.log('纬度：' + res.latitude);
						console.log('经度：' + res.longitude);
						this.positionName = res.name
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	#shop-address {
		position: relative;
		width: 100vw;
		height: calc(100vh - 88rpx);
		background-color: #fff;

		.content {
			box-sizing: border-box;
			width: 100%;
			height: 100%;

			.item {
				box-sizing: border-box;
				display: flex;
				align-items: center;
				width: 750rpx;
				height: 104rpx;
				padding: 0 30rpx;
				border-bottom: 1rpx solid #eee;

				.lable {
					font-size: 28rpx;
					color: #333333;
					font-weight: 500;
				}

				input {
					margin-left: 30rpx;
					font-size: 28rpx;
					flex: 1;
				}

				.arrow-right {
					width: 24rpx;
					height: 24rpx;
					flex-shrink: 0;
				}
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
