<template>
	<view class="withdrawal">
		<view class="withdrawal-header">
			<view class="header-left">账户余额：55.00</view>
			<navigator url="withdrawalRule">
				<view class="header-right">提现规则</view>
			</navigator>
		</view>
		
		<view class="withdrawal-box">
			<view class="box-title">提现金额</view>
			<view class="box-ipt">
				<text>￥</text>
				<input type="text" value="" />
			</view>
			<view class="box-bottom">全部提现</view>
		</view>
		<view class="withdrawal-btn" @click="withdrawalPrice">
			提交
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			withdrawalPrice() {
				uni.showToast({
					title: '提现成功'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.withdrawal {
		background-color: #F8F8F8;
		height: calc(100vh - 88rpx);
		padding: 33rpx 32rpx;
		position: relative;
		.withdrawal-header{
			height: 125rpx;
			background: #FFFFFF;
			border-radius: 24rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 40rpx 24rpx;
			line-height: 125rpx;
			.header-left{
				font-size: 32rpx;
				font-weight: 500;
				color: #333333;
			}
			.header-right{
				font-size: 28rpx;
				color: #09BCAF;
			}
		}
		.withdrawal-box{
			padding: 41rpx 0 32rpx 24rpx;
			height: 287rpx;
			background: #FFFFFF;
			border-radius: 24rpx;
			.box-title{
				font-size: 32rpx;
				font-weight: 500;
				color: #333333;
				margin-bottom: 25rpx;
			}
			.box-ipt{
				display: flex;
				align-items: center;
				font-size: 48rpx;
				font-weight: bold;
				color: #333333;
				margin-bottom: 39rpx;
				input{
					font-size: 48rpx;
				}
			}
			.box-bottom{
				font-size: 24rpx;
				color: #9997AD;
			}
		}
		.withdrawal-btn{
			position: absolute;
			width: 686rpx;
			left: 50%;
			transform: translateX(-50%);
			bottom: 80rpx;
			height: 80rpx;
			line-height: 80rpx;
			background: #09BCAF;
			border-radius: 40rpx;
			text-align: center;
			font-size: 28rpx;
			color: #FFFFFF;
		}
	}
</style>
