<template>
	<view class="setup">
		<navigator url="editPassword">
			<view class="setup-item">
				<view class="">修改密码</view>
				<image src="../../static/mine/you.png" mode=""></image>
			</view>
		</navigator>
		<view class="setup-item">
			<view class="">绑定手机</view>
			<image src="../../static/mine/you.png" mode=""></image>
		</view>
		<navigator url="aboutMy">
			<view class="setup-item" style="border-bottom:none;">
				<view class="">关于我们</view>
				<image src="../../static/mine/you.png" mode=""></image>
			</view>
		</navigator>
		<view class="xian"></view>
		<view class="setup-item">
			<view class="">当前版本</view>
			<view class="">
				1.0.1
				<image style="margin-left:16rpx;" src="../../static/mine/you.png" mode=""></image>
			</view>
		</view>
		<view class="setup-item">
			<view class="">清除缓存</view>
			<view class="">
				3.54M
				<image style="margin-left:16rpx;" src="../../static/mine/you.png" mode=""></image>
			</view>
		</view>
		
		<view class="setup-button">
			退出登录
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.setup{
		height: calc(100vh - 88rpx);
		position: relative;
		.setup-item{
			height: 110rpx;
			background: #FFFFFF;
			margin: 0 32rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 35rpx 0;
			font-size: 28rpx;
			color: #333333;
			border-bottom: 1rpx solid #EEEEEE;
			image{
				width: 22rpx;
				height: 22rpx;
			}
		}
		.xian{
			width: 100%;
			height: 20rpx;
			background: #F8F8F8;
		}
		.setup-button{
			width: 100%;
			position: absolute;
			bottom: 0;
			left: 0;
			height: 88rpx;
			background: #09BCAF;
			font-size: 32rpx;
			line-height: 88rpx;
			color: #FFFFFF;
			text-align: center;
		}
	}
</style>
