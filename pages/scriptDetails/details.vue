<template>
	<view class="details">
		<view class="order-header">
			<image @click="toBack" src="../../static/index/jb.png" mode=""></image>
			<view class="header-tab">
				<view class="header-img">
					<image src="../../static/mine/zuo.png" mode=""></image>
				</view>
				<view class="header-center">剧本详情</view>
				<view class="right-img">
					<image style="width: 40rpx;height: 40rpx;" src="../../static/details/detele.png" mode=""></image>
				</view>
			</view>
			
			<view class="header-box">
				<view  class="box-img">
					<image src="../../static/index/jb.png" mode=""></image>
				</view>
				<view class="box-right">
					<view class="box-title">艾森克の提线木偶</view>
					<view class="box-center">
						<view class="center-item">
							<view>7人 丨 现实丨近代丨困难</view>
						</view>
						<view class="center-item">
							<view>7人 丨 现实丨近代丨困难</view>
						</view>
						<view class="center-item">
							<view>西安蛛丝马迹</view>
						</view>
						<view class="center-item">
							<view>预计时长4-5小时</view>
						</view>
						<view class="center-item">
							<view>
								成车人数： 
								<text style="color: #09BCAF;">7</text>
								人       |       
								<text style="color: #09BCAF;">3</text>
								男       
								<text style="color: #09BCAF;">3</text>       
								女
							</view>
						</view>
					</view>
					<view class="price-bottom">
						<view class="right-bottom-price">
							￥50
						</view>
						<view class="right-bottom-num">
							1037人玩过
						</view>
					</view>
				</view>
			</view>
		</view>
		
		
		<view class="details-content">
			<view class="con-title">
				剧本介绍
			</view>
			<view class="con-box">
				你看，森森绿木也分枝，人生错别兴叹无可奈何，相
				逢处只念面具服帖。
				你听，靡靡之音不绝于耳，人心锈了贪恋权欲纵乐
			</view>
			<view class="con-img">
				<image src="../../static/mine/dm2.png" mode=""></image>
			</view>
		</view>
		<view class="details-bnt">
			<view class="bnt-left">
				<image src="../../static/details/dload.png" mode=""></image>
				<text>上架</text>
			</view>
			<view class="bnt-right">
				<image src="../../static/details/edit.png" mode=""></image>
				<text>编辑</text>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.details {
		height: 100vh;
		background-color: #FFFFFF;
		.order-header{
			// height: 520rpx;
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
				.right-img{
					width: 40rpx;
					height: 40rpx;
					image{
						width: 40rpx;
						height: 40rpx;
					}
				}
			}
			.header-box{
				display: flex;
				align-items: center;
				margin-top: 60rpx;
				padding: 0 30rpx;
				padding-bottom: 40rpx;
				box-sizing: border-box;
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
					flex: 1;
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
					.price-bottom{
						display: flex;
						align-items: center;
						justify-content: space-between;
						width: 100%;
						.right-bottom-price{
							font-size: 38rpx;
							font-weight: 600;
							color: #FF5733;
							letter-spacing: 2rpx;
						}
						.right-bottom-num{
							font-size: 24rpx;
							color: #FFFFFF;
							letter-spacing: 1px;
						}
					}
					
				}
			}
		}
		
		.details-content{
			margin-top: 40rpx;
			padding: 40rpx 32rpx;
			.con-title{
				font-size: 32rpx;
				font-weight: 600;
				color: #333333;
				letter-spacing: 1px;
				margin-bottom: 24rpx;
			}
			.con-box{
				font-size: 28rpx;
				line-height: 40rpx;
				color: #676E79;
				letter-spacing: 2px;
				margin-bottom: 24rpx;
			}
			.con-img{
				height: 967rpx;
				margin-bottom: 80rpx;
				image{
					width: 100%;
					height: 967rpx;
				}
			}
		}
		
		.details-bnt{
			height: 80rpx;
			display: flex;
			align-items: center;
			padding: 0 32rpx;
			margin-bottom: 40rpx;
			.bnt-left{
				display: flex;
				align-items: center;
				justify-content: center;
				width: 50%;
				font-size: 28rpx;
				line-height: 80rpx;
				color: #FFFFFF;
				background: #09BCAF;
				border-radius: 40px 0px 0px 40px;
				image{
					width: 32rpx;
					height: 32rpx;
				}
			}
			.bnt-right{
				display: flex;
				align-items: center;
				justify-content: center;
				width: 50%;
				font-size: 28rpx;
				line-height: 80rpx;
				color: #FFFFFF;
				background: #FF5733;
				border-radius: 0px 40px 40px 0px;
				image{
					width: 32rpx;
					height: 32rpx;
				}
			}
		}
	}
</style>
