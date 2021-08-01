<template>
	<view>
		<view class="item" v-for="item in num">
			<view class="info">
				<view class="book-img">
					<image class="avatar" src="@/static/index/jb.png"></image>
				</view>
				<view class="r">
					<view class="title">
						<text>姜子牙</text>
						<image class="icon" src="@/static/index/zf-icon.png"></image>
					</view>
					<view class="row r-row1">
						<image src="@/static/index/l1.png"></image>
						<text class="ellipsis-1">这是房间名称</text>
					</view>
					<view class="row r-row2">
						<view class="left">
							<image src="@/static/index/l2.png"></image>
							<text>2021-02-21 14:00</text>
						</view>
						<view class="right">
							<image src="@/static/index/l4.png"></image>
							<text>FFF</text>
						</view>
					</view>
					<view class="row r-row1">
						<image src="@/static/index/l3.png"></image>
						<text class="ellipsis-1">剧本《姜子牙》6=1</text>
					</view>
				</view>
			</view>

			<slot name="btn">
				<view class="btn-group">
					<view class="btn">解散</view>
					<view class="btn">锁车</view>
					<view class="btn">车位管理</view>
					<view class="btn">修改宣传语</view>
				</view>
			</slot>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['num']
	}
</script>

<style lang="scss" scoped>
	.item {
		box-sizing: border-box;
		padding: 20rpx 30rpx;
		width: 100%;
		height: 332rpx;
		background-color: #fff;
		margin-bottom: 20rpx;

		.info {
			display: flex;
			justify-content: space-between;
			width: 100%;
			height: 221rpx;

			.avatar {
				width: 159rpx;
				height: 221rpx;
				flex-shrink: 0;
				margin-right: 20rpx;
			}

			.r {
				flex: 1;
				width: 0;

				.title {
					display: flex;
					justify-content: space-between;
					align-items: center;
					height: 45rpx;
					margin-bottom: 28rpx;

					text {
						color: #333;
						font-size: 32rpx;
						font-weight: 600;
					}

					.icon {
						width: 40rpx;
						height: 40rpx;
					}
				}

				.row {
					display: flex;
					align-items: center;
					margin-top: 20rpx;

					image {
						width: 24rpx;
						height: 24rpx;
						margin-right: 10rpx;
						flex-shrink: 0;
					}

					text {
						font-size: 24rpx;
						color: #666;
					}
				}

				.r-row2 {
					display: flex;
					justify-content: space-between;
					align-items: center;

					.left {
						max-width: 70%;
					}
				}
			}
		}

		.btn-group {
			width: 100%;
			display: flex;
			align-content: flex-start;
			justify-content: space-between;
			height: 48rpx;
			margin-top: 20rpx;

			.btn {
				width: calc((100% - 60rpx)/4);
				text-align: center;
				line-height: 48rpx;
				background-color: pink;
				background-color: #F8F8F8;
				border-radius: 10rpx;
				font-size: 24rpx;
				color: #999;
				border: 1rpx solid #F8F8F8;
			}
		}
	}
</style>
