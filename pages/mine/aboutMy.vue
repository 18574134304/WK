<template>
	<view class="about">
		<view class="about-header">
			<image src="../../static/mine/logo.png" mode=""></image>
			<text>当前版本1.0</text>
		</view>
		<view class="about-bottom">
			<view style="margin-bottom:24rpx;">Copyright©2020 玩咖联盟</view>
			<view class="">All Rights Reserved</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.about{
		position: relative;
		height: calc(100vh - 88rpx);
		.about-header{
			margin: 0 auto;
			margin-top: 101rpx;
			width: 172rpx;
			text-align: center;
			image{
				width: 172rpx;
				height: 172rpx;
				margin-bottom: 42rpx;
			}
			text{
				display: inline-block;
				font-size: 24rpx;
				color: #909093;
			}
		}
		.about-bottom{
			position: absolute;
			bottom: 200rpx;
			left: 50%;
			transform: translateX(-50%);
			font-size: 24rpx;
			color: #909093;
			text-align: center;
		}
	}
</style>
