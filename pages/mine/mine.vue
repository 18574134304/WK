<template>
	<view class="mine">
		<view class="" v-if="userType == '1'">
			<title-block></title-block>
			<view class="mine-header">
				<image class="mine-bg" src="../../static/mine/mineBg.png" mode=""></image>
				<image @click="imgTo" src="../../static/mine/mine3.png" mode=""></image>
				<view class="header-title">
					<view class="title-left">
						<view class="left-top">{{ userInfo.username }}</view>
						<view class="left-bottom">管理员账号：{{ userInfo.mobile }}</view>
					</view>
					<navigator url="../index/shopManage/shopManage" style="z-index: 99;"><view class="title-right">门店管理></view></navigator>
				</view>
			</view>
			
			
			<view class="mine-title">
				<view class="title-item" @click="toPath('carlist')">
					<image src="../../static/mine/mine7.png" mode=""></image>
					<view>车队管理</view>
				</view>
				<view class="title-item" @click="toPath('../scriptDetails/playManage')">
					<image src="../../static/mine/mine4.png" mode=""></image>
					<view>剧本管理</view>
				</view>
				<view class="title-item" @click="toPath('myWallet')">
					<image src="../../static/mine/mine5.png" mode=""></image>
					<view>收入管理</view>
				</view>
				<view class="title-item" @click="toPath('sale')">
					<image src="../../static/mine/mine6.png" mode=""></image>
					<view>销售统计</view>
				</view>
			</view>
			
			<view class="mine-list">
				<navigator url="../index/shopManage/shopManage">
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
				<navigator url="dmStration">
					<view class="list-item">
						<view class="item-left">
							<image src="../../static/mine/mine11.png" mode=""></image>
							<view class="">
								DM管理
							</view>
						</view>
						<image class="item-you" src="../../static/mine/you.png" mode=""></image>
					</view>
				</navigator>
				<navigator url="scriptRanking">
					<view class="list-item">
						<view class="item-left">
							<image src="../../static/mine/mine9.png" mode=""></image>
							<view class="">
								剧本排行榜
							</view>
						</view>
						<image class="item-you" src="../../static/mine/you.png" mode=""></image>
					</view>
				</navigator>
				<navigator url="ranking">
					<view class="list-item">
						<view class="item-left">
							<image src="../../static/mine/mine10.png" mode=""></image>
							<view class="">
								用户排行榜
							</view>
						</view>
						<image class="item-you" src="../../static/mine/you.png" mode=""></image>
					</view>
				</navigator>
			</view>
			
			<view class="mine-list">
				<view class="list-item" @click="serviceMobile">
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
	
	<!-- 拨打客服弹框 -->
	<u-modal v-model="show" :content="content" title="客服电话" :mask-close-able="true" show-cancel-button @cancel="showConfirm">
		
	</u-modal>
	<view class="" v-if="userType == '2'">
		<title-block></title-block>
		<view class="mine-header">
			<image class="mine-bg" src="../../static/mine/mineBg.png" mode=""></image>
			<image @click="imgTo" src="../../static/mine/mine3.png" mode=""></image>
			<view class="header-titleto">
				<view class="title-left">
					<view class="leftImg">
						<image :src="userInfo.avatar" mode=""></image>
					</view>
					<view class="">
						<view class="left-top">{{ userInfo.username }}</view>
						<view class="left-bottom">{{ userInfo.mobile }}</view>
					</view>
				</view>
				<navigator url="userInfo" style="z-index: 99;"><view class="title-right">个人信息></view></navigator>
			</view>
		</view>
		
		
		
		<view class="mine-list">
			<view class="list-item" @click="toCar">
				<view class="item-left">
					<image src="../../static/mine/mine7.png" mode=""></image>
					<view class="">
						车队管理
					</view>
				</view>
				<image class="item-you" src="../../static/mine/you.png" mode=""></image>
			</view>
			<navigator url="scriptRanking">
				<view class="list-item">
					<view class="item-left">
						<image src="../../static/mine/mine9.png" mode=""></image>
						<view class="">
							剧本排行榜
						</view>
					</view>
					<image class="item-you" src="../../static/mine/you.png" mode=""></image>
				</view>
			</navigator>
			<view class="list-item" @click="serviceMobile">
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
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				content: '确认拨打客服手机号18888888888 ？',
				userInfo: {},
				serviceMobileNum: '',
				userType: ''
			}
		},
		onShow() {
			this.userType = uni.getStorageSync('userType')
			this.getMobile()
			this.getUserInfo()
		},
		methods: {
			async getUserInfo() {
				let {data: res} = await this.$request.request({
					url: '/v1/user/queryUser',
					method: 'get'
				})
				this.userInfo = res.data
			},
			toCar() {
				// DM端跳转车队管理页面
				uni.switchTab({
				    url: '../content/content'
				});
			},
			imgTo() {
				uni.navigateTo({
					url:'./setup'
				})
			},
			// 获取客服电话
			async getMobile() {
				let {data: res} = await this.$request.request({
					url: '/v1/config/config/queryGzxy',
					method: 'get',
					data:{
						configName: 'platformService'
					}
				})
				this.serviceMobileNum = res.data.configValue
			},
			// 四个tab跳转
			toPath(path) {
				console.log(path)
				uni.navigateTo({
					url: path
				})
			},
			// 点击客服
			serviceMobile() {
				this.content = `确认拨打客服手机号${this.serviceMobileNum} ？`
				this.show = true
			},
			// 客服弹框点击确认操作
			showConfirm() {
				uni.makePhoneCall({
				    phoneNumber: this.serviceMobileNum
				});
				this.show = false
			},
		}
	}
</script>

<style lang="scss" scoped>
	.mine{
		background-color: #F8F8F8;
		height: 100vh;
		.mine-header{
			position: relative;
			// background: linear-gradient(181deg, #EDF6FF 0%, #DEEFFF 100%);
			opacity: 1;
			padding: 0 32rpx;
			padding-top: 32rpx;
			height: 359rpx;
			.mine-bg{
				height: 359rpx;
				width: 100%;
				position: absolute;
				z-index: 1;
				top: 0;
				left: 0;
			}
			image{
				width: 34rpx;
				height: 35rpx;
				float: right;
				z-index: 99;
			}
			.header-title{
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-top: 128rpx;
				z-index: 99;
				.title-left{
					z-index: 99;
					.left-top{
						font-size: 32rpx;
						font-weight: 700;
						color: #333333;
						margin-bottom: 23rpx;
						z-index: 99;
					}
					.left-bottom{
						font-size: 24rpx;
						color: #666666;
						z-index: 99;
					}
				}
				.title-right{
					z-index: 99;
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
			
			.header-titleto{
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-top: 128rpx;
				z-index: 99;
				.title-left{
					z-index: 99;
					display: flex;
					.leftImg{
						width: 140rpx;
						height: 140rpx;
						margin-right: 20rpx;
						image{
							width: 140rpx;
							height: 140rpx;
						}
					}
					.left-top{
						font-size: 32rpx;
						font-weight: 700;
						color: #333333;
						margin-bottom: 23rpx;
						z-index: 99;
					}
					.left-bottom{
						font-size: 24rpx;
						color: #666666;
						z-index: 99;
					}
				}
				.title-right{
					z-index: 99;
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
			z-index: 99;
			height: 180rpx;
			background: #FFFFFF;
			border-radius: 14rpx;
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
				margin-top: 30rpx;
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
