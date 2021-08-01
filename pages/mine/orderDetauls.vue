<template>
	<view class="order">
		<view class="order-header">
			<image @click="toBack" src="../../static/index/jb.png" mode=""></image>
			<view class="header-tab">
				<view class="header-img">
					<image src="../../static/mine/zuo.png" mode=""></image>
				</view>
				<view class="header-center">订单详情</view>
				<view>已完成</view>
			</view>
			
			<view class="header-box">
				<view  class="box-img">
					<image src="../../static/index/jb.png" mode=""></image>
				</view>
				<view class="box-right">
					<view class="box-title">艾森克の提线木偶</view>
					<view class="box-center">
						<view class="center-item">
							<view class="center-img">
								<image src="../../static/mine/order4.png" mode=""></image>
							</view>
							<view>这是房间名称</view>
						</view>
						<view class="center-item">
							<view class="center-img">
								<image src="../../static/mine/order6.png" mode=""></image>
							</view>
							<view>2021-02-21  14:00</view>
						</view>
						<view class="center-item">
							<view class="center-img">
								<image src="../../static/mine/order1.png" mode=""></image>
							</view>
							<view>剧本《姜子牙》6=1</view>
						</view>
						<view class="center-item">
							<view class="center-img">
								<image src="../../static/mine/order5.png" mode=""></image>
							</view>
							<view>FFF</view>
						</view>
					</view>
					<view class="right-bottom">
						订单已取消
					</view>
					<!-- <view class="right-bottom-price">
						￥1500
					</view> -->
				</view>
			</view>
		</view>
		
		<view class="car-names">
			<view class="car-title">车队人员</view>
			<view class="car-list">
				<view class="car-left">
					<image src="../../static/mine/order3.png" mode=""></image>
				</view>
				<view class="car-right">
					<view class="right-item" v-for="item in 12">
						<image src="../../static/mine/logo.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		
		<view class="carShopion">
			<view class="shopion-item">
				<view class="item-left">占位数量：</view>
				<view class="item-right">6</view>
			</view>
			<view class="shopion-item">
				<view class="item-left">单价：</view>
				<view class="item-right">￥50.00</view>
			</view>
			<view class="shopion-item">
				<view class="item-left">合计金额：</view>
				<view class="item-right">￥300.00</view>
			</view>
			<view class="shopion-item">
				<view class="item-left">取消时间：</view>
				<view class="item-right">2020-02-02 10：00</view>
			</view>
			
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
			toBack() {
				uni.navigateBack({
					delta:1
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.order{
		.order-header{
			height: 520rpx;
			width: 100%;
			position: relative;
			image{
				position: absolute;
				width: 100%;
				height: 100%;
				z-index: 1;
			}
			.header-tab{
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 32rpx;
				z-index: 99;
				padding-top: 41rpx;
				.header-img{
					width: 20rpx;
					height: 37rpx;
					image{
						width: 20rpx;
						height: 37rpx;
					}
				}
				.header-center{
					z-index: 99;
					font-size: 36rpx;
					font-weight: 500;
					line-height: 50rpx;
					color: #FFFFFF;
				}
				view:last-child{
					font-size: 28rpx;
					font-weight: 600;
					color: #FFFFFF;
					z-index: 99;
				}
			}
			.header-box{
				display: flex;
				align-items: center;
				margin-top: 60rpx;
				padding: 0 30rpx;
				z-index: 99;
				.box-img{
					width: 240rpx;
					height: 339rpx;
					margin-right: 24rpx;
					z-index: 99;
					image{
						width: 240rpx;
						height: 339rpx;
						z-index: 99;
					}
				}
				.box-right{
					z-index: 99;
					.box-title{
						font-size: 40rpx;
						font-weight: 600;
						color: #FFFFFF;
						letter-spacing: 4rpx;
						z-index: 99;
						margin-bottom: 20rpx;
					}
					.box-center{
						.center-item{
							display: flex;
							align-items: center;
							font-size: 24rpx;
							color: #FFFFFF;
							letter-spacing: 4rpx;
							z-index: 99;
							margin-bottom: 16rpx;
							.center-img{
								width: 20rpx;
								height: 24rpx;
								margin-right: 20rpx;
								z-index: 99;
								image{
									width: 20rpx;
									height: 24rpx;
									z-index: 99;
								}
							}
							view{
								z-index: 99;
							}
							
						}
					}
					.right-bottom{
						margin-top: 35rpx;
						font-size: 32rpx;
						color: #FFFFFF;
						letter-spacing: 4px;
						z-index: 99;
					}
					.right-bottom-price{
						font-size: 38rpx;
						font-weight: 600;
						color: #FF5733;
						letter-spacing: 2rpx;
					}
				}
			}
		}
		
		.car-names{
			height: 360rpx;
			background: #FFFFFF;
			border-radius: 24rpx;
			padding: 35rpx 32rpx 32rpx;
			padding-right: 0;
			margin-top: 20rpx;
			.car-title{
				font-size: 36rpx;
				font-weight: 600;
				color: #333333;
				margin-bottom: 35rpx;
			}
			.car-list{
				display: flex;
				align-items: center;
				.car-left{
					width: 50rpx;
					height: 32rpx;
					margin-right: 32rpx;
					image{
						width: 50rpx;
						height: 32rpx;
					}
				}
				.car-right{
					flex: 1;
					display: flex;
					align-items: center;
					flex-wrap: wrap;
					.right-item{
						width: 88rpx;
						height: 88rpx;
						margin-right: 15rpx;
						margin-bottom: 32rpx;
						border-radius: 50%;
						image{
							width: 88rpx;
							height: 88rpx;
							border-radius: 50%;
						}
					}
				}
			}
		}
		
		.carShopion{
			padding: 32rpx;
			background-color: #FFFFFF;
			margin-top: 20rpx;
			height: 296rpx;
			border-radius: 24rpx;
			.shopion-item{
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 24rpx;
				.item-left{
					font-size: 28rpx;
					color: #999999;
					letter-spacing: 1rpx;
				}
				.item-right{
					font-size: 28rpx;
					color: #333333;
					letter-spacing: 1rpx;
				}
			}
		}
	}
</style>
