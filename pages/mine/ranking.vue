<template>
	<view class="ranking">
		<title-block></title-block>
		<view class="ranking-header">
			<image class="ranking-bg" src="../../static/mine/ranking.png" mode=""></image>
			<view class="sale-title">
				<image @click="toBack" src="../../static/mine/zuo.png" mode=""></image>
				<view class="title-center">
					<view class="center-left" :class="[title == '月榜' ? 'center-check' : '']" @click="titleChange('月榜')">月榜</view>
					<view class="center-right" :class="[title == '历史' ? 'center-check' : '']" @click="titleChange('历史')">历史</view>
				</view>
				<view class="">   </view>
			</view>
		</view>
		
		<view class="ranking-treen" v-if="title == '月榜'">
			<view class="treen-left">
				<image class="icon1" src="../../static/mine/tow.png" mode=""></image>
				<image class="titleImg" src="../../static/mine/wei.png" mode=""></image>
				<view class="title-top">李晨</view>
				<view class="title-center">金额：10000</view>
				<view class="title-bottom">场次：60</view>
			</view>
			<view class="treen-center">
				<image class="icon1" src="../../static/mine/one.png" mode=""></image>
				<image class="titleImg" src="../../static/mine/wei.png" mode=""></image>
				<view class="title-top">李晨</view>
				<view class="title-center">金额：10000</view>
				<view class="title-bottom">场次：60</view>
			</view>
			<view class="treen-right">
				<image class="icon1" src="../../static/mine/treen.png" mode=""></image>
				<image class="titleImg" src="../../static/mine/wei.png" mode=""></image>
				<view class="title-top">李晨</view>
				<view class="title-center">金额：10000</view>
				<view class="title-bottom">场次：60</view>
			</view>
		</view>
		
		<view class="ranking-treen1" v-if="title == '历史'">
			<view class="treen-left">
				<image class="icon1" src="../../static/mine/tow.png" mode=""></image>
				<image class="titleImg" src="../../static/mine/wei.png" mode=""></image>
				<!-- <view class="title-top">李晨</view> -->
				<view class="title-center">档案·玻璃屋</view>
				<view class="title-bottom">场次：60</view>
			</view>
			<view class="treen-center">
				<image class="icon1" src="../../static/mine/one.png" mode=""></image>
				<image class="titleImg" src="../../static/mine/wei.png" mode=""></image>
				<view class="title-center">木夕僧之戏</view>
				<view class="title-bottom">场次：60</view>
			</view>
			<view class="treen-right">
				<image class="icon1" src="../../static/mine/treen.png" mode=""></image>
				<image class="titleImg" src="../../static/mine/wei.png" mode=""></image>
				<view class="title-center">前男友的100...</view>
				<view class="title-bottom">场次：60</view>
			</view>
		</view>
		
		
		
		<view class="ranking-bottom">
			<view class="bottom-item" v-for="item in 6">
				<view class="item-left">
					<view class="left-num">4</view>
					<image src="../../static/mine/wei.png" mode=""></image>
					<view class="left-info">
						<view class="info-one" :style="{fontWeight:(title=='历史'?700: 400)}">雨羽</view>
						<view v-if="title != '历史'" class="info-tow">金额：30000</view>
					</view>
				</view>
				<view class="item-right" v-if="title == '月榜'">
					场次：30
				</view>
				<view class="item-right" v-if="title == '历史'">
					已开30场
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '月榜'
			}
		},
		methods: {
			titleChange(title) {
				this.title = title
			},
			// 后退
			toBack() {
				uni.navigateBack({
					delta:1
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.ranking{
		height: 100vh;
		background: #F8F8F8;
		.ranking-header{
			height: 360rpx;
			width: 100%;
			position: relative;
			.ranking-bg{
				position: absolute;
				top: 0;
				left: 0;
				height: 360rpx;
				width: 100%;
			}
			.sale-title{
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 32rpx;
				padding-top: 60rpx;
				z-index: 99;
				image{
					width: 19rpx;
					height: 36rpx;
					z-index: 99;
				}
				.title-center{
					z-index: 99;
					width: 500rpx;
					height: 70rpx;
					line-height: 70rpx;
					display: flex;
					align-items: center;
					background: #E5F8F7;
					border-radius: 100rpx;
					.center-left{
						width: 50%;
						text-align: center;
						border-radius: 90px 0px 0px 90px;
						color: #00AFA2;
						font-size: 32rpx;
						z-index: 99;
					}
					.center-right{
						width: 50%;
						text-align: center;
						color: #00AFA2;
						font-size: 32rpx;
						border-radius: 0px 90px 90px 0px;
						z-index: 99;
					}
					.center-check{
						background: #09BCAF;
						color: #FFFFFF;
						z-index: 99;
						width: 50%;
					}
				}
			}
		}
		
		.ranking-treen{
			display: flex;
			align-items: center;
			padding: 0 32rpx;
			.treen-left{
				height: 304rpx;
				width: 33%;
				background-color: #FFFFFF;
				position: relative;
				border-radius: 16px;
				margin-top: -80rpx;
				margin-right: 18rpx;
				text-align: center;
				.icon1{
					position: absolute;
					top: -15rpx;
					left: 50%;
					transform: translateX(-50%);
					width: 32rpx;
					height: 33rpx;
				}
				.titleImg{
					width: 80rpx;
					height: 80rpx;
					margin-top: 23rpx;
					border-radius: 40rpx;
				}
				.title-top{
					font-size: 32rpx;
					color: #333333;
					letter-spacing: 1px;
				}
				.title-center{
					font-size: 24rpx;
					color: #333333;
					margin: 20rpx 0;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
				}
				.title-bottom{
					font-size: 24rpx;
					color: #333333;
				}
			}
			.treen-center{
				height: 344rpx;
				width: 33%;
				background-color: #FFFFFF;
				position: relative;
				border-radius: 16px;
				margin-top: -120rpx;
				margin-right: 18rpx;
				text-align: center;
				.icon1{
					position: absolute;
					top: -35rpx;
					left: 50%;
					transform: translateX(-50%);
					width: 62rpx;
					height: 58rpx;
				}
				.titleImg{
					width: 100rpx;
					height: 100rpx;
					margin-top: 38rpx;
					border-radius: 40rpx;
				}
				.title-top{
					font-size: 32rpx;
					color: #333333;
					letter-spacing: 1px;
				}
				.title-center{
					font-size: 24rpx;
					color: #333333;
					margin: 20rpx 0;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
				}
				.title-bottom{
					font-size: 24rpx;
					color: #333333;
				}
			}
			.treen-right{
				height: 304rpx;
				width: 33%;
				background-color: #FFFFFF;
				position: relative;
				border-radius: 16px;
				margin-top: -80rpx;
				text-align: center;
				.icon1{
					position: absolute;
					top: -15rpx;
					left: 50%;
					transform: translateX(-50%);
					width: 32rpx;
					height: 33rpx;
				}
				.titleImg{
					width: 80rpx;
					height: 80rpx;
					margin-top: 23rpx;
					border-radius: 40rpx;
				}
				.title-top{
					font-size: 32rpx;
					color: #333333;
					letter-spacing: 1px;
				}
				.title-center{
					font-size: 24rpx;
					color: #333333;
					margin: 20rpx 0;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
				}
				.title-bottom{
					font-size: 24rpx;
					color: #333333;
				}
			}
		}
		
		.ranking-treen1{
			display: flex;
			align-items: center;
			padding: 0 32rpx;
			.treen-left{
				height: 304rpx;
				width: 33%;
				background-color: #FFFFFF;
				position: relative;
				border-radius: 16px;
				margin-top: -80rpx;
				margin-right: 18rpx;
				text-align: center;
				.icon1{
					position: absolute;
					top: -15rpx;
					left: 50%;
					transform: translateX(-50%);
					width: 32rpx;
					height: 33rpx;
				}
				.titleImg{
					width: 100rpx;
					height: 140rpx;
					margin-top: 23rpx;
				}
				.title-top{
					font-size: 32rpx;
					color: #333333;
					letter-spacing: 1px;
				}
				.title-center{
					font-size: 24rpx;
					color: #333333;
					margin: 20rpx 0;
					font-weight: 600;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
				}
				.title-bottom{
					font-size: 24rpx;
					color: #333333;
				}
			}
			.treen-center{
				height: 344rpx;
				width: 33%;
				background-color: #FFFFFF;
				position: relative;
				border-radius: 16px;
				margin-top: -120rpx;
				margin-right: 18rpx;
				text-align: center;
				.icon1{
					position: absolute;
					top: -35rpx;
					left: 50%;
					transform: translateX(-50%);
					width: 62rpx;
					height: 58rpx;
				}
				.titleImg{
					width: 142rpx;
					height: 183rpx;
					margin-top: 20rpx;
				}
				.title-top{
					font-size: 32rpx;
					color: #333333;
					letter-spacing: 1px;
				}
				.title-center{
					font-size: 24rpx;
					color: #333333;
					margin: 20rpx 0;
					font-weight: 600;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
				}
				.title-bottom{
					font-size: 24rpx;
					color: #333333;
				}
			}
			.treen-right{
				height: 304rpx;
				width: 33%;
				background-color: #FFFFFF;
				position: relative;
				border-radius: 16px;
				margin-top: -80rpx;
				text-align: center;
				.icon1{
					position: absolute;
					top: -15rpx;
					left: 50%;
					transform: translateX(-50%);
					width: 32rpx;
					height: 33rpx;
				}
				.titleImg{
					width: 110rpx;
					height: 140rpx;
					margin-top: 23rpx;
					border-radius: 40rpx;
				}
				.title-top{
					font-size: 32rpx;
					color: #333333;
					letter-spacing: 1px;
				}
				.title-center{
					font-size: 24rpx;
					color: #333333;
					margin: 20rpx 0;
					width: 180rpx;
					font-weight: 600;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
				}
				.title-bottom{
					font-size: 24rpx;
					color: #333333;
				}
			}
		}
		
		.ranking-bottom{
			margin: 24rpx 32rpx;
			padding: 32rpx 24rpx;
			background-color: #FFFFFF;
			.bottom-item{
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 60rpx;
				.item-left{
					display: flex;
					align-items: center;
					.left-num{
						font-size: 24rpx;
						color: #818181;
						margin-right: 28rpx;
					}
					image {
						width: 84rpx;
						height: 84rpx;
						border-radius: 50%;
						margin-right: 24rpx;
					}
					.left-info{
						.info-one{
							font-size: 28rpx;
							color: #333333;
							letter-spacing: 2px;
						}
						.info-tow{
							font-size: 28rpx;
							color: #333333;
						}
					}
				}
				.item-right{
					font-size: 28rpx;
					color: #333333;
				}
			}
		}
	}
</style>
