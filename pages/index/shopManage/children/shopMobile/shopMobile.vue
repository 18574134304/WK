<template>
	<view id="shop-mobile">
		<view class="content">
			<view class="item">
				<text class="lable">门店电话</text>
				<input type="text" value="" placeholder="请输入门店电话" />
			</view>
			<navigator class="add-mobile" url="./addMobile" hover-class="none">添加电话</navigator>
		</view>
		<view class="save">
			<view>保存</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	#shop-mobile {
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
				input{
					margin-left: 30rpx;
					font-size: 28rpx;
					flex: 1;
				}
			}
			.add-mobile{
				padding-left: 30rpx;
				font-size: 24rpx;
				color: #09BCAF;
				margin-top: 16rpx;
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
