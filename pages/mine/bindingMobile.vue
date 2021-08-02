<template>
	<view class="binding">
		<view class="binding-header">
			当前手机号：176****2222
		</view>
		<view class="mobile-item">
			<input type="text" value="" placeholder="输入新手机号" />
		</view>
		<view class="mobile-item">
			<input type="text" value="" placeholder="输入新手机号" />
			<view class="mobile-code">
				  获取验证码
			</view>
		</view>
		<view class="pwd-button">
			确认修改
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.binding{
		height: calc(100vh - 88rpx);
		background-color: #FFFFFF;
		position: relative;
		.binding-header{
			height: 100rpx;
			background: rgba(255, 159, 5, 0.1);
			text-align: center;
			line-height: 100rpx;
			font-size: 32rpx;
			font-weight: 500;
			color: #D38100;
		}
		.mobile-item{
			margin: 0 32rpx;
			height: 106rpx;
			line-height: 106rpx;
			border-bottom: 1px solid #eee;
			display: flex;
			align-items: center;
			justify-content: space-between;
			input{
				font-size: 32rpx;
				color: #BFBFBF;
				height: 106rpx;
				line-height: 106rpx;
			}
			.mobile-code{
				font-size: 24rpx;
				color: #09BCAF;
			}
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
