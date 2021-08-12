<template>
	<view id="shop-name">
		<view class="content">
			<view class="item">
				<text class="lable">头像</text>
				<image :src="userInfo.avatar" mode="" @click="change"></image>
			</view>
			<navigator url="editName">
				<view class="item">
					<text class="lable">昵称</text>
					<input type="text" value="" placeholder="请输入昵称" />
				</view>
			</navigator>
		</view>
		<view class="save">
			<view>保存</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: {}
			}
		},
		onShow() {
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
		}
	}
</script>

<style lang="scss" scoped>
	#shop-name {
		position: relative;
		width: 100vw;
		height: calc(100vh - 88rpx);
		background-color: #fff;

		.content {
			box-sizing: border-box;
			width: 100%;
			height: 100%;

			.item {
				box-sizing: border-box;
				display: flex;
				align-items: center;
				width: 750rpx;
				height: 104rpx;
				padding: 0 30rpx;
				border-bottom: 1rpx solid #eee;
				display: flex;
				justify-content: space-between;
				image{
					width: 80rpx;
					height: 80rpx;
				}
				.lable {
					font-size: 28rpx;
					color: #333333;
					font-weight: 500;
				}
				input{
					display: block;
					width: 300rpx;
					text-align: right;
					margin-left: 30rpx;
					font-size: 28rpx;
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
