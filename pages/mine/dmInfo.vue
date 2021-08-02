<template>
	<view class="dm-info">
		<view class="info-title">
			<view class="title-left">
				<view class="left-mobile-text">手机号</view>
				<view class="left-mobile-num">
					<input type="text" value="" placeholder="18610777050" />
				</view>
			</view>
			<view class="title-right">
				查找
			</view>
		</view>
		
		<view class="dm-list">
			<view class="list-item">
				<view class="list-left">
					<image src="../../static/mine/dm2.png" mode=""></image>
					<!-- <image src="../../static/mine/wei.png" mode=""></image>  未注册显示的头像 -->
					<view class="left-text">
						<view class="text-title">鲸落</view>
						<!-- <view class="text-title">未注册DM</view> 未注册显示 -->
						<view class="text-item">
							<image src="../../static/mine/dm3.png" mode=""></image>
							<view class="">
								123456789123
							</view>
						</view>
						<view class="text-item">
							<image src="../../static/mine/dm4.png" mode=""></image>
							<view class="">
								6
							</view>
						</view>
					</view>
				</view>
				<view class="list-right">
					<view class="right-but" @click="dismissal('替换成id')">
						雇佣
					</view>
					<!-- <view class="right-but" @click="active=item">
						新建   未注册显示
					</view> -->
				</view>
			</view>
		</view>
		
		<view class="info-error">
			<image src="../../static/mine/errorInfo.png" mode=""></image>
			<view class="">
				此DM账号已占用
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.dm-info{
		height: 100vh;
		background: #F8F8F8;
		.info-title{
			height: 104rpx;
			background: #FFFFFF;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 32rpx;
			.title-left{
				display: flex;
				align-items: center;
				.left-mobile-text{
					font-size: 28rpx;
					font-weight: 500;
					color: #333333;
				}
				.left-mobile-num{
					font-size: 28rpx;
					color: #333333;
					margin-left: 68rpx;
				}
			}
			.title-right{
				font-size: 28rpx;
				color: #09BCAF;
			}
		}
		.dm-list{
			background: #FFFFFF;
			border-radius: 14rpx;
			padding: 24rpx 0;
			margin: 21rpx 0;
			.list-item{
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 32rpx;
				margin-bottom: 33rpx;
				.list-left{
					display: flex;
					align-items: center;
					image{
						width: 140rpx;
						height: 140rpx;
						margin-right: 20rpx;
					}
					.left-text{
						.text-title{
							font-size: 32rpx;
							font-weight: 600;
							color: #333333;
							letter-spacing: 2rpx;
							margin-bottom: 10rpx;
						}
						.text-item{
							display: flex;
							align-items: center;
							font-size: 24rpx;
							color: #666666;
							letter-spacing: 1px;
							image{
								width: 24rpx;
								height: 24rpx;
							}
						}
					}
				}
				.list-right{
					.right-but{
						width: 153rpx;
						height: 56rpx;
						background: #F8F8F8;
						border-radius: 8rpx;
						font-size: 24rpx;
						color: #999999;
						letter-spacing: 1px;
						text-align: center;
						line-height: 56rpx;
					}
					.right-but:last-child{
						margin-top: 26rpx;
					}
				}
			}
		}
		
		.info-error{
			margin-top: 60rpx;
			font-size: 32rpx;
			color: #333333;
			display: flex;
			align-items: center;
			justify-content: center;
			image{
				width: 32rpx;
				height: 32rpx;
				margin-right: 16rpx;
			}
		}
	}
</style>
