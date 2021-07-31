<template>
	<view class="mine">
		<title-block></title-block>
		<view class="mine-header">
			<navigator url="setup"><image src="../../static/mine/mine3.png" mode=""></image></navigator>
			<view class="header-title">
				<view class="title-left">
					<view class="left-top">MINI沉浸式剧本推理社</view>
					<view class="left-bottom">管理员账号：4545245452</view>
				</view>
				<view class="title-right">门店管理></view>
			</view>
		</view>
		
		
		<view class="mine-title">
			<view class="title-item">
				<image src="../../static/mine/mine7.png" mode=""></image>
				<view>车队管理</view>
			</view>
			<view class="title-item">
				<image src="../../static/mine/mine4.png" mode=""></image>
				<view>剧本管理</view>
			</view>
			<view class="title-item">
				<image src="../../static/mine/mine5.png" mode=""></image>
				<view>收入管理</view>
			</view>
			<view class="title-item">
				<image src="../../static/mine/mine6.png" mode=""></image>
				<view>销售统计</view>
			</view>
		</view>
		
		<view class="mine-list">
			<navigator url="./carlist">
				<view class="list-item">
					<view class="item-left">
						<image src="../../static/mine/mine12.png" mode=""></image>
						<view class="">
							门店管理
						</view>
					</view>
					<image class="item-you" src="../../static/mine/you.png" mode=""></image>
				</view>
			</navigator>
			<view class="list-item">
				<view class="item-left">
					<image src="../../static/mine/mine11.png" mode=""></image>
					<view class="">
						DM管理
					</view>
				</view>
				<image class="item-you" src="../../static/mine/you.png" mode=""></image>
			</view>
			<view class="list-item">
				<view class="item-left">
					<image src="../../static/mine/mine9.png" mode=""></image>
					<view class="">
						剧本排行榜
					</view>
				</view>
				<image class="item-you" src="../../static/mine/you.png" mode=""></image>
			</view>
			<view class="list-item">
				<view class="item-left">
					<image src="../../static/mine/mine10.png" mode=""></image>
					<view class="">
						用户排行榜
					</view>
				</view>
				<image class="item-you" src="../../static/mine/you.png" mode=""></image>
			</view>
		</view>
		
		<view class="mine-list">
			<view class="list-item">
				<view class="item-left">
					<image src="../../static/mine/mine3.png" mode=""></image>
					<view class="">
						联系客服
					</view>
				</view>
				<image class="item-you" src="../../static/mine/you.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.mine{
		background-color: #F8F8F8;
		height: 100vh;
		.mine-header{
			background: linear-gradient(181deg, #EDF6FF 0%, #DEEFFF 100%);
			opacity: 1;
			padding: 0 32rpx;
			padding-top: 32rpx;
			height: 359rpx;
			image{
				width: 34rpx;
				height: 35rpx;
				float: right;
			}
			.header-title{
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-top: 128rpx;
				.title-left{
					.left-top{
						font-size: 32rpx;
						font-weight: 700;
						color: #333333;
						margin-bottom: 23rpx;
					}
					.left-bottom{
						font-size: 24rpx;
						color: #666666;
					}
				}
				.title-right{
					width: 142rpx;
					height: 48rpx;
					background: #FFFFFF;
					opacity: 0.82;
					border-radius: 24rpx;
					font-size: 22rpx;
					line-height: 48rpx;
					color: #00BAAD;
					text-align: center;
				}
			}
		}
		.mine-title{
			height: 180rpx;
			background: #FFFFFF;
			border-radius: 14px;
			margin: 0 32rpx;
			margin-top: -40rpx;
			padding: 32rpx 0;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.title-item{
				width: 25%;
				text-align: center;
				font-size: 28rpx;
				color: #333333;
				image{
					width: 60rpx;
					height: 60rpx;
					display: inline-block;
				}
			}
		}
		
		.mine-list{
			margin: 0 32rpx;
			margin-top: 20rpx;
			background: #FFFFFF;
			border-radius: 14rpx;
			.list-item{
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 30rpx 0;
				margin: 0 24rpx;
				border-bottom: 2rpx solid #eee;
				.item-left{
					display: flex;
					align-items: center;
					font-size: 30rpx;
					color: #333333;
					image{
						width: 32rpx;
						height: 32rpx;
						margin-right: 15rpx;
					}
				}
				.item-you{
					width: 24rpx;
					height: 24rpx;
				}
			}
			.list-item:last-child{
				border: none;
			}
		}
		.mine-list:last:child{
			margin-top: 20rpx;
		}
	}
</style>
