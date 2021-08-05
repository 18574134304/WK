<template>
	<view id="shopManage">
		<title-block color="rgba(85, 255, 242, 0.12)"></title-block>
		<view class="header">
			<view class="nav">
				<image src="@/static/index/back.png" class="back" @click="back"></image>
				<view class="title">门店管理</view>
				<view class="b"> </view>
			</view>
		</view>
		<view class="content">
			<navigator hover-class="none" url="children/shopInfo" class="card">
				<view class="shop-avatar">
					<image src="../../../static/index/shopManger/avatar.png"></image>
				</view>
				<view class="msg">
					<view>
						店铺活动这是店铺活动这是店铺活动这是店铺活动这是店铺活这是店铺活动这是店铺活动这是店这是店铺活动这是店铺活动这是店铺活动
					</view>
				</view>
			</navigator>
			<view class="c-list">
				<navigator hover-class="none" :url="item.link" class="c-item" v-for="(item,i) in list" :key="i">
					<view class="label">
						<image :src='`../../../static/index/shopManger/i${i+1}.png`'></image>
						<text>{{item.label}}</text>
					</view>
					<view class="c-msg">
						<view class="tip ellipsis-1">{{item.msg}}</view>
						<image src="../../../static/index/shopManger/r-icon.png"></image>
					</view>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				list:[
					{
						label:'门店名称',
						link:'children/shopName',
						msg:'MINI沉浸式剧本推理社'
					},
					{
						label:'门店电话',
						link:'children/shopMobile/shopMobile',
						msg:'15000000000'
					},
					{
						label:'门店地址',
						link:'children/shopAddress',
						msg:'北京市朝阳区宏泰西街望北京市朝阳区宏泰西街望啊啊啊'
					},
					{
						label:'营业时间',
						link:'children/shopTime',
						msg:'8:00-18:00'
					},
					{
						label:'房间管理',
						link:'children/roomManage',
						msg:'房间管理'
					},
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	#shopManage {
		width: 100vw;
		height: 100vh;

		.header {
			width: 100%;
			height: 325rpx;
			background: linear-gradient(180deg, rgba(85, 255, 242, 0.12) 0%, rgba(9, 188, 175, 0.05) 88%, rgba(9, 188, 175, 0) 100%);

			.nav {
				box-sizing: border-box;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 30rpx;
				width: 100%;
				height: 88rpx;

				.back {
					width: 20rpx;
					height: 36rpx;
				}

				.title {
					font-size: 36rpx;
					color: #333;
					font-weight: 500;
				}
			}
		}

		.content {
			width: 750rpx;
			position: absolute;
			top: calc(var(--status-bar-height) + 108rpx);
			padding: 0 30rpx;

			.card {
				display: flex;
				align-items: center;
				justify-content: space-between;
				height: 251rpx;
				background-color: #fff;

				.shop-avatar {
					width: 297rpx;
					height: 235rpx;
					flex-shrink: 0;

					image {
						width: 100%;
						height: 100%;
					}
				}

				.msg {
					flex: 1;
					height: 100%;
					padding: 30rpx 0;
					padding-right: 20rpx;
					color: #333;
					font-size: 28rpx;
					overflow: hidden;
					view {
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 4;
						overflow: hidden;
						line-height: 1.6;
					}
				}
			}
		
			.c-list{
				padding: 0 20rpx;
				margin-top: 26rpx;
				height: 510rpx;
				background-color: #fff;
				.c-item{
					display: flex;
					align-items: center;
					justify-content: space-between;
					width: 100%;
					height: 101rpx;
					border-bottom: 1rpx solid #eee;
					.label{
						display: flex;
						align-items: center;
						image{
							width: 32rpx;
							height: 32rpx;	
							margin-right: 10rpx;
							flex-shrink: 0;
						}
						text{
							font-size: 28rpx;
							color: #333;
							font-weight: 500;
						}
					}
					.c-msg{
						width: 0;
						flex: 1;
						display: flex;
						align-items: center;
						justify-content: flex-end;
						.tip{
							font-size: 28rpx;
							color: #666;
							font-weight: 400;
							max-width: 80%;
						}
						image{
							width: 24rpx;
							height: 24rpx;
							flex-shrink: 0;
							margin-left: 10rpx;
						}
					}
				}
			}
		}
	}
</style>
