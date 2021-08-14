<template>
	<view class="dm-stration">
		<title-block></title-block>
		<view class="dm-header">
			<view class="img1">
				<image @click="toBack" src="../../static/mine/zuo1.png" mode=""></image>
			</view>
			<view class="">DM管理</view>
			<view class="img2">
				<navigator url="dmInfo"><image src="../../static/index/h-a.png" mode=""></image></navigator>
			</view>
		</view>
		<view class="dm-list" v-for="item in dmList">
			<view class="list-item">
				<view class="list-left">
					<image :src="item.avatar" mode=""></image>
					<view class="left-text">
						<view class="text-title">{{ item.username }}</view>
						<view class="text-item">
							<image src="../../static/mine/dm3.png" mode=""></image>
							<view class="">
								{{ item.mobile }}
							</view>
						</view>
						<view class="text-item">
							<image src="../../static/mine/dm4.png" mode=""></image>
							<view class="">
								{{ item.presideNum }}
							</view>
						</view>
					</view>
				</view>
				<view class="list-right">
					<view class="right-but" @click="dismissal(item.id)">
						解聘
					</view>
					<view class="right-but" @click="statis(item)">
						统计
					</view>
				</view>
			</view>
			<view class="dm-statis" v-if="active==item">
				<view class="statis-item">
					<view class="statis-left">
						<image src="../../static/mine/dm5.png" mode=""></image>
						<view class="">日完成 {{ dmStatis.todayNum }}</view>
					</view>
					<view class="">
						周完成 {{ dmStatis.weekNum }}
					</view>
					<view class="">
						月完成 {{ dmStatis.monthNum }}
					</view>
				</view>
				<view class="statis-item">
					<view class="statis-left">
						<image src="../../static/mine/dm6.png" mode=""></image>
						<view class="">日完成 {{ dmStatis.todayNum }}</view>
					</view>
					<view class="">
						周完成 {{ dmStatis.fromWeekNum }}
					</view>
					<view class="">
						月完成 {{ dmStatis.fromMonthNum }}
					</view>
				</view>
			</view>
		</view>
		
		
		<u-modal v-model="show" :content="content" title="系统提醒" :mask-close-able="true" show-cancel-button @confirm="showConfirm">
			
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
				content: '确认解聘此DM账号么',
				dmList: [],
				dmId: '',
				dmStatis: {}
			}
		},
		mounted() {
			this.getDmList()
		},
		methods: {
			async statis(item) {
				this.active = item
				let {data: res} = await this.$request.request({
					url: '/v1/dm/queryMainDmOrderStat',
					method: 'post',
					data: {
						id: item.id
					}
				})
				this.dmStatis = res.data
			},
			// 获取dm数组
			async getDmList() {
				let {data: res} = await this.$request.request({
					url: '/v1/dm/queryDmList',
					method: 'post'
				})
				if(res.code == 1) {
					this.dmList = res.data
				}
			},
			// 解聘
			dismissal(id) {
				this.dmId = id
				this.show = true
			},
			// 弹框点击确认操作
			async showConfirm() {
				let {data: res} = await this.$request.request({
					url: '/v1/dm/dismissDm',
					method: 'post',
					data: {
						id: this.dmId
					}
				})
				if(res.code == 1) {
					uni.showToast({
						title: res.msg,
						icon: 'none'
					})
					this.getDmList()
					this.show = false
				}else {
					uni.showToast({
						title: res.msg,
						icon: 'none'
					})
					this.show = false
				}
				
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
			padding: 0 32rpx;
			height: 88rpx;
			background-color: #FFFFFF;
			.img1{
				width: 27rpx;
				height: 37rpx;
				image{
					width: 27rpx;
					height: 37rpx;
				}
			}
			.img2{
				width: 40rpx;
				height: 40rpx;
				image{
					width: 40rpx;
					height: 40rpx;
				}
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
