<template>
	<view class="edit-pwd">
		<view class="pwd-item">
			<input type="text" value="" placeholder="输入原密码" />
		</view>
		<view class="pwd-item">
			<input type="text" value="" placeholder="输入新密码" />
		</view>
		<view class="pwd-item">
			<input type="text" value="" placeholder="确认新密码" />
		</view>
		
		<view class="pwd-button">
			确定
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.edit-pwd{
		position: relative;
		height: calc(100vh - 88rpx);
		background-color: #FFFFFF;
		.pwd-item{
			margin: 0 32rpx;
			height: 106rpx;
			line-height: 106rpx;
			border-bottom: 1px solid #eee;
			input{
				font-size: 32rpx;
				color: #BFBFBF;
				height: 106rpx;
				line-height: 106rpx;
			}
		}
		.pwd-item:last-child{
			border-bottom: none;
		}
		.pwd-button{
			position: absolute;
			bottom: 60rpx;
			left: 50%;
			transform: translateX(-50%);
			width: 686rpx;
			height: 88rpx;
			line-height: 88rpx;
			background: #09BCAF;
			border-radius: 44rpx;
			font-size: 32rpx;
			color: #FFFFFF;
			text-align: center;
		}
	}
</style>
