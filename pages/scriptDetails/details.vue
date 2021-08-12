<template>
	<view class="details" v-if="info">
		<title-block></title-block>
		<image class="bg" @click="back" :src="info.scenImg"></image>
		<view class="order-header">
			<view class="header-tab">
				<view class="header-img" @click="back">
					<image src="../../static/mine/zuo.png" mode=""></image>
				</view>
				<view class="header-center">剧本详情</view>
				<view class="right-img">
					<image v-if="info.isScenCommon==2" @click="show = true" style="width: 40rpx;height: 40rpx;"
						src="../../static/details/detele.png" mode=""></image>
				</view>
			</view>

			<view class="header-box">
				<view class="box-img">
					<image :src="info.scenImg"></image>
				</view>
				<view class="box-right">
					<view class="box-title">{{info.scenName}}</view>
					<view class="box-center">
						<view class="center-item">
							<view>{{info.scenNum}}人
								<text v-for="(item,index) in tagNames" :key="index"> 丨{{item}}</text>
							</view>
						</view>
						<!-- <view class="center-item">
							<view>7人 丨 现实丨近代丨困难</view>
						</view> -->
						<view class="center-item">
							<view>{{info.scenPublisher}}</view>
						</view>
						<view class="center-item">
							<view>预计时长{{info.scenFrequently}}小时</view>
						</view>
						<view class="center-item">
							<view v-if="info.maleNum!=0&&info.femaleNum!=0">
								成车人数：
								<text style="color: #09BCAF;">{{info.scenNum}}</text>
								人 |
								<text style="color: #09BCAF;">{{info.maleNum}}</text>
								男
								<text style="color: #09BCAF;">{{info.femaleNum}}</text>
								女
							</view>
							<view v-else>
								成车人数：
								<text style="color: #09BCAF;">{{info.scenNum}}</text>
								人 |
								<text style="color: #09BCAF;">最大:{{info.scenMaxNum}}</text>
								<text style="color: #09BCAF;">最小:{{info.scenMinNum}}</text>
							</view>
						</view>
					</view>
					<view class="price-bottom">
						<view class="right-bottom-price">
							￥{{info.scenPrice}}
						</view>
						<view class="right-bottom-num">
							{{info.applyNum}}人玩过
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
				{{info.scenRecommend}}
			</view>
			<view class="con-img">
				<image v-for="(item,index) in imgList" :key="index" :src="item"></image>
			</view>
		</view>
		<!-- 店铺剧本 -->
		<template v-if="nType==2">
			<template v-if="nType==2&&info.isScenCommon==2">
				<view class="details-bnt" v-if="info.isPutaway==2">
					<view class="bnt-left" @click="scClick('上架剧本',2)">
						<image src="../../static/details/dload.png" mode=""></image>
						<text>上架</text>
					</view>
					<view class="bnt-right" @click="editPlay">
						<image src="../../static/details/edit.png" mode=""></image>
						<text>编辑</text>
					</view>
				</view>
				<view @click="deleteShow=true" class="details-delete-btn" v-else>
					<image src="../../static/details/dload.png" mode=""></image>
					<text>下架</text>
				</view>
			</template>
			<!-- 店铺收录的公共剧本 -->
			<template v-else-if="nType==2&&info.isScenCommon==1">
				<view @click="scClick('上架剧本',2)" class="details-add-btn" v-if="info.isPutaway==2">
					<image src="../../static/details/dload.png" mode=""></image>
					<text>上架</text>
				</view>
				<view @click="deleteShow=true" class="details-delete-btn" v-else>
					<image src="../../static/details/dload.png" mode=""></image>
					<text>下架</text>
				</view>
			</template>
		</template>

		<!-- 公共剧本库 -->
		<template v-else>
			<view @click="scClick('收录剧本',1)" class="details-add-btn" v-if="info.isPutaway==3">
				<image src="../../static/details/add.png" mode=""></image>
				<text>收录</text>
			</view>
			<view @click="scClick('上架剧本',2)" class="details-add-btn" v-else-if="info.isPutaway==2">
				<image src="../../static/details/dload.png" mode=""></image>
				<text>上架</text>
			</view>
			<view @click="deleteShow=true" class="details-delete-btn" v-else>
				<image src="../../static/details/dload.png" mode=""></image>
				<text>下架</text>
			</view>
		</template>
		<!-- 下边两个按钮到时候要做判断 -->
		<!-- 	<view @click="addShow = true" class="details-add-btn">
			<image src="../../static/details/add.png" mode=""></image>
			<text>收录</text>
		</view>
		<view @click="deleteShow = true" class="details-delete-btn">
			<image src="../../static/details/dload.png" mode=""></image>
			<text>下架</text>
		</view> -->

		<!-- 删除弹框 -->
		<u-modal v-model="show" :content="content" @confirm="delConfirm" title="提示" :mask-close-able="true" show-cancel-button>

		</u-modal>

		<!-- 收录、上架、编辑剧本弹框 -->
		<u-modal @confirm="scConfirm" width="80%" v-model="addShow" :title="sContent" :show-cancel-button="true"
			confirm-color="#09BCAF">
			<view class="text-box">
				<view class="tx-item">
					<text class="label">剧本名称：</text>
					<text class="val">{{info.scenName}}</text>
				</view>
				<view class="tx-item">
					<text class="label">剧本价格：</text>
					<input class="val" auto-focus="true" type="number" placeholder="请输入剧本价格/人" v-model="price" />
				</view>
			</view>
		</u-modal>

		<!-- 底部下架弹框 -->
		<u-modal :show-title="false" v-model="deleteShow" :content="deleteContent" :show-cancel-button="deleteFlag"
			@confirm="unPlay">

		</u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false, // 右上角删除按钮  
				addShow: false, // 收录弹框
				deleteShow: false, // 下架弹框
				deleteFlag: true, // 下架是否显示取消按钮
				content: '是否确认将该剧本移除本店剧本库',
				deleteContent: '是否确认下架该剧本下架后用户将无法在本店看到该剧本', // 底部下架按钮内容   下架失败显示   该剧本有参与的车队无法进行下架,
				info: null,
				tagNames: [],
				imgList: [],
				type: '',
				// 上架弹窗文本
				sContent: "收录剧本",
				// 输入的剧本价格
				price: '',
				// type 为2代表店铺  1代表平台  上架 or  收录
				type: 1,
				id: '',
				nType:'',
				one:false
			}
		},
		onLoad(options) {
			this.nType = options.type
			this.id = options.id
			this.queryInfo()
		},
		methods: {
			// 删除剧本
			async delConfirm(){
				const {data:res} = await this.$request.request({
					url:"/v1/scenUser/deleteStoreScen",
					method:"POST",
					data:{
						id:this.info.id
					}
				})
				if(res.code==1){
					this.$toast("删除成功")
					setTimeout(_=>{
						this.back()
					},800)
				}else{
					this.$toast("删除失败")
				}
			},
			// 编辑剧本
			editPlay() {
				uni.navigateTo({
					url: "./addPlay?data=" + JSON.stringify(this.info)
				})
			},
			// 下架剧本
			async unPlay() {
				let id = this.info.scenId ? this.info.scenId : this.info.id
				let data = {
					id,
					price: 0
				}
				const {
					data: res
				} = await this.$request.request({
					url: "/v1/scenUser/updateScenPrice",
					method: "post",
					data
				})
				if (res.code == 1) {
					this.queryInfo()
				} else {
					this.$toast("操作失败")
				}
			},
			// 上架弹窗
			scClick(title, type) {
				this.type = type
				this.sContent = title
				this.addShow = true
			},
			async scConfirm() {
				let id = this.info.scenId ? this.info.scenId : this.info.id
				let data = {
					id,
					price: this.price ? this.price+'' : '0'
				}
				// 店铺上架操作
				if (this.type === 2) {
					const {
						data: res
					} = await this.$request.request({
						url: "/v1/scenUser/updateScenPrice",
						method: "POST",
						data
					})
					if (res.code == 1) {
						this.queryInfo()
					} else {
						this.$toast("上架失败")
					}
				} else {
					let mdata = `[${String(JSON.stringify(data))}]`
					const {
						data: res
					} = await this.$request.request({
						url: "/v1/scenUser/addCommonScens",
						method: "POST",
						data: {
							param: mdata
						}
					})
					if (res.code == 1) {
						this.queryInfo(this.id, this.type)
					} else {
						this.$toast("收录失败")
					}
				}
					this.price = ''
			},
			// 查询剧本信息
			async queryInfo() {
				if(!this.one){
					this.one = true
					uni.showLoading()
				}
				let url = this.nType == 1 ? '/v1/scenCommon/queryById' : '/v1/scenUser/queryMyScenById'
				let method = this.nType == 1 ? 'GET' : 'POST'
				const {
					data: res
				} = await this.$request.request({
					url,
					method,
					data: {
						id: this.id
					}
				})
				this.info = res.data
				if (this.info && this.info.tagNames) {
					this.tagNames = this.info.tagNames.split(',')
				}
				if (this.info && this.info.scenBanner) {
					this.imgList = this.info.scenBanner.split(",")
				}
				uni.hideLoading()
			},
			// 右上角删除操作
			showConfirm() {
				this.show = false
			},
			// 收录按钮操作
			addShowConfirm() {
				this.addShow = false
			},
			// 收录按钮操作
			deleteConfirm() {
				this.deleteShow = false
			},
		}
	}
</script>

<style lang="scss" scoped>
	.details {
		height: 100vh;
		background-color: #FFFFFF;

		.text-box {
			padding: 30rpx 30rpx 0;
			font-size: 28rpx;
			color: #666;

			.tx-item {
				display: flex;
				width: 100%;
				height: 45rpx;
				justify-content: space-between;
				align-items: center;
				color: #333;
				font-size: 32rpx;
				font-family: "苹方-简";
				font-weight: normal;
				margin-bottom: 20rpx;

				.val {
					flex: 1;
				}
			}
		}

		.bg {
			position: absolute;
			width: 100%;
			height: 520rpx;
			z-index: 1;
			opacity: 0.7;
		}


		.order-header {
			// height: 520rpx;
			background-color: rgba(0, 0, 0, 0.4);
			width: 100%;
			position: relative;
			z-index: 100;

			.header-tab {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 32rpx;
				z-index: 99;
				padding-top: 41rpx;

				.header-img {
					width: 20rpx;
					height: 37rpx;

					image {
						width: 20rpx;
						height: 37rpx;
					}
				}

				.header-center {
					z-index: 99;
					font-size: 36rpx;
					font-weight: 500;
					line-height: 50rpx;
					color: #FFFFFF;
				}

				.right-img {
					width: 40rpx;
					height: 40rpx;

					image {
						width: 40rpx;
						height: 40rpx;
					}
				}
			}

			.header-box {
				display: flex;
				align-items: center;
				margin-top: 60rpx;
				padding: 0 30rpx;
				padding-bottom: 40rpx;
				box-sizing: border-box;
				z-index: 99;

				.box-img {
					width: 240rpx;
					height: 339rpx;
					margin-right: 24rpx;
					z-index: 99;

					image {
						width: 240rpx;
						height: 339rpx;
						z-index: 99;
					}
				}

				.box-right {
					z-index: 99;
					flex: 1;

					.box-title {
						font-size: 40rpx;
						font-weight: 600;
						color: #FFFFFF;
						letter-spacing: 4rpx;
						z-index: 99;
						margin-bottom: 20rpx;
					}

					.box-center {
						.center-item {
							display: flex;
							align-items: center;
							font-size: 24rpx;
							color: #FFFFFF;
							letter-spacing: 4rpx;
							z-index: 99;
							margin-bottom: 16rpx;

							.center-img {
								width: 20rpx;
								height: 24rpx;
								margin-right: 20rpx;
								z-index: 99;

								image {
									width: 20rpx;
									height: 24rpx;
									z-index: 99;
								}
							}

							view {
								z-index: 99;
							}

						}
					}

					.right-bottom {
						margin-top: 35rpx;
						font-size: 32rpx;
						color: #FFFFFF;
						letter-spacing: 4px;
						z-index: 99;
					}

					.price-bottom {
						display: flex;
						align-items: center;
						justify-content: space-between;
						width: 100%;

						.right-bottom-price {
							font-size: 38rpx;
							font-weight: 600;
							color: #FF5733;
							letter-spacing: 2rpx;
						}

						.right-bottom-num {
							font-size: 24rpx;
							color: #FFFFFF;
							letter-spacing: 1px;
						}
					}

				}
			}
		}

		.details-content {
			margin-top: 40rpx;
			padding: 40rpx 32rpx;

			.con-title {
				font-size: 32rpx;
				font-weight: 600;
				color: #333333;
				letter-spacing: 1px;
				margin-bottom: 24rpx;
			}

			.con-box {
				font-size: 28rpx;
				line-height: 40rpx;
				color: #676E79;
				letter-spacing: 2px;
				margin-bottom: 24rpx;
			}

			.con-img {
				display: flex;
				flex-direction: column;
				align-items: center;
			}
		}

		.details-bnt {
			height: 80rpx;
			display: flex;
			align-items: center;
			padding: 0 32rpx;
			margin-bottom: 40rpx;

			.bnt-left {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 50%;
				font-size: 28rpx;
				line-height: 80rpx;
				color: #FFFFFF;
				background: #09BCAF;
				border-radius: 40px 0px 0px 40px;

				image {
					width: 32rpx;
					height: 32rpx;
				}
			}

			.bnt-right {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 50%;
				font-size: 28rpx;
				line-height: 80rpx;
				color: #FFFFFF;
				background: #FF5733;
				border-radius: 0px 40px 40px 0px;

				image {
					width: 32rpx;
					height: 32rpx;
				}
			}
		}

		.details-add-btn {
			display: flex;
			margin: 0 32rpx;
			align-items: center;
			justify-content: center;
			font-size: 28rpx;
			line-height: 80rpx;
			color: #FFFFFF;
			background: #09BCAF;
			border-radius: 40px;
			margin-bottom: 40rpx;

			image {
				width: 32rpx;
				height: 32rpx;
			}
		}

		.details-delete-btn {
			display: flex;
			margin: 0 32rpx;
			align-items: center;
			justify-content: center;
			font-size: 28rpx;
			line-height: 80rpx;
			color: #FFFFFF;
			background: #FF5733;
			border-radius: 40px;
			margin-bottom: 40rpx;

			image {
				width: 32rpx;
				height: 32rpx;
			}
		}

		.showClass {
			padding-left: 26rpx;

			.addDetails {
				display: flex;
				align-items: center;
				font-size: 32rpx;
				line-height: 45rpx;
				color: #333333;

				.addName {
					margin-right: 22rpx;
				}

				input {
					height: 45rpx;
					font-size: 32rpx;
					line-height: 45rpx;
					color: #999999;
				}
			}
		}

	}
</style>
