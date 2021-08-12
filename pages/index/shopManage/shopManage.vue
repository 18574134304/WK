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
			<navigator hover-class="none" url="children/shopInfo" class="setinfo" v-if="!storeActiveInfo.msg">
				<view class="label">
					<image src='../../../static/index/shopManger/i1.png'></image>
					<text>设置门店信息</text>
				</view>
				<image class="r-icon" src="../../../static/index/shopManger/r-icon.png"></image>
			</navigator>
			<navigator hover-class="none" url="children/shopInfo" class="card" v-else>
				<view class="shop-avatar">
					<!-- <image src="../../../static/index/shopManger/avatar.png"></image> -->
					<image :src="storeActiveInfo.img" style="width: 246rpx;height:194rpx;"></image>
				</view>
				<view class="msg">
					<view>
						{{storeActiveInfo.msg}}
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
	export default {
		data() {
			return {
				storeActiveInfo: {
					img: '',
					msg: ''
				},
				list: [{
						label: '门店名称',
						link: 'children/shopName',
						msg: ''
					},
					{
						label: '门店电话',
						link: 'children/shopMobile/shopMobile',
						msg: '暂无'
					},
					{
						label: '门店地址',
						link: 'children/shopAddress',
						msg: '暂无'
					},
					{
						label: '营业时间',
						link: 'children/shopTime',
						msg: '暂无'
					},
					{
						label: '房间管理',
						link: 'children/roomManage',
						msg: '房间管理'
					},
				]
			}
		},
		onShow() {
			this.queryInfo()
		},
		methods: {
			async queryInfo() {
				// uni.showLoading()
				const {
					data: res
				} = await this.$request.request({
					url: "/v1/store/checkStore",
					method: "post"
				})
				// console.log(res)
				if (res.code) {
					let dn = res.data
					this.list[0].msg = dn.storeName
					this.list[1].msg = dn.storeMobile
					if (dn.storeDetailAddress) {
						this.list[2].msg = dn.storeDetailAddress
					}
					if (dn.openStartTime && dn.openEndTime) {
						this.list[3].msg = dn.openStartTime + '-' + dn.openEndTime
					}
					// this.storeActiveInfo.img = dn.storeActiveImg
					this.storeActiveInfo.img = dn.storeBanner.split(',')[0]
					this.storeActiveInfo.msg = dn.storeActiveInfo
				}
				// uni.hideLoading()
			}
		}
	}
</script>

<style lang="scss" scoped>
	#shopManage {
		width: 100vw;
		height: 100vh;

		.setinfo {
			box-sizing: border-box;
			width: 100%;
			height: 100rpx;
			padding: 0 20rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			background-color: #fff;
			border-radius: 16rpx;
			.label {
				display: flex;

				image {
					margin-right: 10rpx;
					width: 32rpx;
					height: 32rpx;
				}

				text {
					font-size: 28rpx;
					color: #333;
					font-weight: 500;
				}
			}

			.r-icon {
				width: 24rpx;
				height: 24rpx;
			}
		}

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
					    display: flex;
					    flex-direction: column;
					    justify-content: center;
					    align-items: center;
					width: 297rpx;
					height: 235rpx;
					flex-shrink: 0;

					image {
						width: 100%;
						height: 100%;
						border-radius: 16rpx;
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

			.c-list {
				padding: 0 20rpx;
				margin-top: 26rpx;
				height: 510rpx;
				background-color: #fff;

				.c-item {
					display: flex;
					align-items: center;
					justify-content: space-between;
					width: 100%;
					height: 101rpx;
					border-bottom: 1rpx solid #eee;

					.label {
						display: flex;
						align-items: center;

						image {
							width: 32rpx;
							height: 32rpx;
							margin-right: 10rpx;
							flex-shrink: 0;
						}

						text {
							font-size: 28rpx;
							color: #333;
							font-weight: 500;
						}
					}

					.c-msg {
						width: 0;
						flex: 1;
						display: flex;
						align-items: center;
						justify-content: flex-end;

						.tip {
							font-size: 28rpx;
							color: #666;
							font-weight: 400;
							max-width: 80%;
						}

						image {
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
