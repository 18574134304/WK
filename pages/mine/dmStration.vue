<template>
	<view class="dm-stration">
		<view class="dm-header">
			<image @click="toBack" src="../../static/mine/zuo1.png" mode=""></image>
			<view class="">DM管理</view>
			<navigator url="dmInfo"><image src="../../static/index/h-a.png" mode=""></image></navigator>
		</view>
		<view class="dm-list" v-for="item in 2">
			<view class="list-item">
				<view class="list-left">
					<image src="../../static/mine/dm2.png" mode=""></image>
					<view class="left-text">
						<view class="text-title">鲸落</view>
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
						解聘
					</view>
					<view class="right-but" @click="active=item">
						统计
					</view>
				</view>
			</view>
			<view class="dm-statis" v-if="active===item">
				<view class="statis-item">
					<view class="statis-left">
						<image src="../../static/mine/dm5.png" mode=""></image>
						<view class="">日完成 20</view>
					</view>
					<view class="">
						周完成 50
					</view>
					<view class="">
						月完成 300
					</view>
				</view>
				<view class="statis-item">
					<view class="statis-left">
						<image src="../../static/mine/dm6.png" mode=""></image>
						<view class="">日完成 20</view>
					</view>
					<view class="">
						周完成 50
					</view>
					<view class="">
						月完成 300
					</view>
				</view>
			</view>
		</view>
		
		
		<u-modal v-model="show" :content="content" title="系统提醒" :mask-close-able="true" show-cancel-button @cancel="showConfirm">
			
		</u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 暂时先复制整个对象，有真正数据在改，点击统计展开隐藏
				active:null,
				show: false,
				content: '确认解聘此DM账号么'
			}
		},
		methods: {
			// 解聘
			dismissal(id) {
				this.show = true
			},
			// 弹框点击确认操作
			showConfirm() {
				this.show = false
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
	.dm-stration{
		height: 100vh;
		background-color: #F8F8F8;
		.dm-header{
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 60rpx 32rpx 18rpx 46rpx;
			background-color: #FFFFFF;
			image{
				width: 27rpx;
				height: 37rpx;
			}
			image:last-child{
				width: 40rpx;
				height: 40rpx;
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
			.dm-statis{
				// margin-top: 33rpx;
				padding-top: 33rpx;
				height: 136rpx;
				background-color: #fff;
				padding: 0 32rpx;
				width: 100%;
				.statis-item{
					display: flex;
					align-items: center;
					justify-content: space-between;
					font-size: 30rpx;
					color: #333333;
					margin-bottom: 34rpx;
					.statis-left{
						display: flex;
						align-items: center;
						image{
							width: 38rpx;
							height: 40rpx;
							margin-right: 16rpx;
						}
					}
				}
			}
		}
	}
</style>
