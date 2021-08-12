<template>
	<view id="pendList">
		<view class="pend-list">
			<navigator hover-class="none" url="./systemMessage" class="p-item">
				<view class="icon">
					<image src="../../../static/index/pendList/setting-icon.png"></image>
				</view>
				<view class="msg">系统消息</view>
				<view class="badge"> <view>99</view> </view>
			</navigator>
			<navigator hover-class="none" url="../../mine/orderInfo" class="p-item">
				<view class="icon">
					<image src="../../../static/index/pendList/o-icon.png"></image>
				</view>
				<view class="msg">订单消息</view>
				<view class="badge"> <view>1</view> </view>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default{
		
	}
</script>

<style lang="scss" scoped>
	#pendList{
		width: 100vw;
		height: calc(100vh - 88rpx);
		background-color: #fff;
		overflow: hidden;
		.p-item{
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 88rpx;
			margin-top: 30rpx;
			padding-left: 30rpx;
			padding-right: 20rpx;
			.icon{
				width: 88rpx;
				height: 88rpx;
				image{
					width: 88rpx;
					height: 88rpx;
				}
			}
			.msg{
				flex: 1;
				font-size: 32rpx;
				color: #333;
				font-weight: 500;
				margin: 0 20rpx;
			}
			.badge{
				width: 40rpx;
				height: 40rpx;
				line-height: 40rpx;
				text-align: center;
				border-radius: 50%;
				color: #fff;
				background-color: #F35C26;
				font-size: 20rpx;
				view{
					transform: scale(0.9);
				}
			}
		}
	}
</style>
