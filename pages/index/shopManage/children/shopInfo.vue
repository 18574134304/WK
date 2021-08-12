<template>
	<view id="shop-info">
		<view class="content">
			<view class="upload">
				<view class="title">封面图</view>
				<view class="u-box">
					<view class="img-list" v-if="imag1">
						<image :src="imag1" @click="showPreview(1)"></image>
					</view>
					<view class="u-btn" @click="change(1)">
						<image src="../../../../static/index/shopManger/shopInfo/upload.png"></image>
					</view>
				</view>
			</view>
			<view class="upload">
				<view class="title">{{type==1?'店铺':'剧本'}}宣传图</view>
				<view class="u-box">
					<view class="img-list">
						<image @click="showPreview(2,i)" v-for="(item,i) in imag2" :key="i" :src="item"></image>
						<image class="u-btn" @click="change(2)"
							src="../../../../static/index/shopManger/shopInfo/upload.png"></image>

					</view>
				</view>
			</view>

			<view class="text-content">
				<view class="title">{{type==1?'店铺活动':'剧本介绍'}}</view>

				<view class="text-box">
					<view class="textarea">
						<textarea v-model="carValue" :placeholder="type==1?'请输入店铺活动':'请输入剧本介绍'" maxlength="200" />
						<text class="length">{{carValue.length}}/200</text>
					</view>
				</view>
			</view>
		</view>
		<view class="save" @click="save">
			<view>保存</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 文本域
				carValue: '',
				// 封面图
				imag1: '',
				// 宣传图
				imag2: [],
				type: 1,
				// 添加剧本的数据
				info: {},
				//true代表修改店铺信息 false代表处理剧本逻辑
				flag: true
			}
		},
		onLoad(options) {
			if (JSON.stringify(options) !== '{}') {
				this.flag = false
				uni.setNavigationBarTitle({
					title: '添加剧本'
				});
				this.type = 2
				console.log(JSON.parse(options.data))
				this.info = JSON.parse(options.data)
				if (this.info.scenImg) {
					this.imag1 = this.info.scenImg
					this.imag2 = this.info.scenBanner.split(",")
					this.carValue = this.info.scenRecommend
				}
			}
		},
		methods: {
			showPreview(type = 1, index = 0) {
				if (type === 1) {
					let arr = [this.imag1]
					uni.previewImage({
						urls: arr,
						current: index
					})
				} else {
					uni.previewImage({
						urls: this.imag2,
						current: index
					})
				}
			},
			upload(files, type = 1) {
				let that = this
				uni.uploadFile({
					url: that.$baseUrl + "/api/v1/common/uploadImageAli",
					formData: {
						files
					},
					header: {
						"TOKEN": uni.getStorageSync("token")
					},
					success: (result) => {
						uni.hideLoading()
						let res = JSON.parse(result.data)
						console.log(res)
						if (res.code == 1) {
							if (type === 1) {
								this.imag1 = res.data
								console.log(this.imag1)
							} else {
								this.imag2.push(res.data)
								console.log(this.imag2)
							}
						} else {
							this.$toast(res.msg)
						}
					}
				})
			},
			change(type = 1) {
				if (type === 2 && this.imag2.length >= 5) {
					return this.$toast("最多上传五张")
				}
				uni.chooseImage({
					count: 1,
					sourceType: ['album'],
					success: (res) => {
						let files = res.tempFiles[0]
						uni.showLoading({
							title: "上传中..."
						})
						this.upload(files, type)
					}
				})
			},
			async save() {
				if (!this.imag1) return this.$toast("请上传封面图")
				if (!this.imag2.length) return this.$toast("请上传宣传图")
				if (!this.carValue.replace(/\s+/g, "")) {
					if(this.flag){
						return this.$toast("请输入店铺活动")
					}else{
						return this.$toast("请输入剧本介绍")
					}
				}
				if (this.flag) {
					// 店铺信息
					let data = {
						storeImg:this.imag1,
						storeBanner:this.imag2.join(),
						storeActiveInfo:this.carValue
					}
					const {data:res} = await this.$request.request({
						url:"/v1/store/saveOrUpdateStore",
						method:"POST",
						data
					})
					console.log(res)
				} else {
					// 剧本
					this.info.scenImg = this.imag1
					this.info.scenBanner = this.imag2.join()
					this.info.scenRecommend = this.carValue
					this.info.scenTypeId = 1
					let url = this.info.id ? '/v1/scenUser/editStoreScens' : '/v1/scenUser/addStoreScens'
					const {
						data: res
					} = await this.$request.request({
						url,
						data: this.info,
						method: "POST"
					})
					if (res.code == '1') {
						if (this.info.id) {
							this.$toast("修改成功")
						} else {
							this.$toast("添加成功")
						}
						this.$store.commit("setAlive", [])
						this.$store.commit("setTags", {
							tagIds: '',
							tagNames: ''
						})
						setTimeout(() => {
							uni.reLaunch({
								url: "../../../scriptDetails/playManage"
							})
						}, 800)
					}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	#shop-info {
		position: relative;
		width: 100vw;
		background-color: #fff;
		padding-bottom: 100rpx;

		.content {
			box-sizing: border-box;
			width: 100%;
			height: 100%;
			padding: 30rpx;

			.title {
				font-size: 28rpx;
				color: #333;
				font-weight: 500;
			}

			.upload {
				margin-bottom: 30rpx;

				.u-box {
					display: flex;
					margin-top: 30rpx;

					.img-list {
						image {
							width: 200rpx;
							height: 200rpx;
							margin-right: 20rpx;
							margin-bottom: 10rpx;
							border-radius: 10rpx;
						}
					}

					.u-btn {
						width: 200rpx;
						height: 200rpx;

						image {
							width: 200rpx;
							height: 200rpx;
						}
					}
				}
			}

			.text-box {
				padding: 30rpx 0 0;
				font-size: 28rpx;
				color: #666;

				.textarea {
					position: relative;
					display: block;
					box-sizing: border-box;
					padding: 20rpx 20rpx 60rpx;
					border: 1rpx solid #eee;
					border-radius: 16rpx;

					textarea {
						font-size: 28rpx;
						width: auto;
						height: 200rpx;
					}
				}

				.length {
					position: absolute;
					bottom: 20rpx;
					right: 20rpx;
					color: #BFBFBF;
				}
			}
		}

		.save {
			position: absolute;
			bottom: 30rpx;
			left: 0;
			width: 100%;
			height: 88rpx;
			padding: 0 20rpx;

			view {
				width: 100%;
				height: 88rpx;
				line-height: 88rpx;
				background-color: #09BCAF;
				text-align: center;
				border-radius: 750rpx;
				margin: 0 auto;
				color: #fff;
				font-size: 28rpx;
			}
		}
	}
</style>
