<template>
	<view class="order">
		<view class="order-header">
			<!-- <image src="../../static/index/jb.png" mode=""></image> -->
			<view class="header-tab">
				<view class="header-img">
					<image src="../../static/index/h-a.png" mode=""></image>
				</view>
				<view class="header-center">订单详情</view>
				<view>已完成</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.order{
		.order-header{
			height: 500rpx;
			position: relative;
			image{
				position: absolute;
				width: 100%;
				height: 100%;
				z-index: -1;
			}
			.header-tab{
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 32rpx;
				.header-img{
					width: 40rpx;
					height: 40rpx;
					image{
						width: 40rpx;
						height: 40rpx;
					}
				}
				.header-center{
					
				}
				
				
			}
		}
	}
</style>
