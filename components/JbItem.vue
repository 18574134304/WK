<template>
	<view class="box">
		<view class="j-item" v-for="item in 7">
			<view class="avatar">
				<image src="@/static/index/checkPlay/jimg.png" mode=""></image>
			</view>
			<view class="info">
				<view class="t-tile">
					<view class="name">
						<view class="hot">
							<image src="@/static/index/checkPlay/hot.png" mode=""></image>
							<view class="text">热门</view>
						</view>
						<text class="name-text">
							前男友的100种
						</text>
					</view>
					<view class="tags">
						<view class="t-item">文艺青年</view>
						<view class="t-item">青年</view>
						<view class="t-item">艺青年</view>
						<view class="t-item">艺青年</view>
						<view class="t-item">文艺年</view>
						<view class="t-item">文年</view>
						<view class="t-item">文艺青年</view>
						<view class="t-item">文年</view>
						<view class="t-item">文年啊</view>
						<view class="t-item">文艺青年</view>
					</view>
				</view>
			</view>
				<slot name="btn-Group"></slot>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.box {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 20rpx 30rpx;
	}

	.j-item {
		width: calc((100% - 20rpx)/2);
		background-color: #fff;
		border-radius: 10rpx;
		margin-bottom: 20rpx;
		height: auto;
		overflow: hidden;
		padding-bottom: 16rpx;
		.avatar {
			width: 100%;
			height: 443rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.info {
			padding: 26rpx 16rpx 10rpx;

			.t-tile {
				.name {
					position: relative;
					font-size: 28rpx;
					color: #333;
					font-weight: 600;
				}

				.name-text {
					padding-left: 80rpx;
				}

				.hot {
					position: absolute;
					top: 6rpx;
					left: 0;
					width: 71rpx;
					height: 33rpx;
					padding-left: 20rpx;
					flex-shrink: 0;

					image {
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
					}

					.text {
						position: relative;
						z-index: 10;
						color: #00BAAD;
						font-size: 18rpx;
						transform: scale(0.7);
					}
				}

				.tags {
					margin-top: 12rpx;

					view {
						display: inline-block;
						padding: 6rpx 8rpx;
						color: #676E79;
						font-size: 24rpx;
						background-color: rgba(167, 167, 167, 0.2);
						margin-right: 8rpx;
						margin-bottom: 8rpx;
					}
				}
			}
		}
	}
</style>
