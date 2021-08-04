<template>
	<view id="shop-info">
		<view class="content">
			<view class="upload">
				<view class="title">封面图</view>
				<view class="u-box">
					<view class="img-list">
						<!-- <image src="../../../../static/index/shopManger/shopInfo/avatar.png"></image> -->
					</view>
					<view class="u-btn">
						<image src="../../../../static/index/shopManger/shopInfo/upload.png"></image>
					</view>
				</view>
			</view>
			<view class="upload">
				<view class="title">店铺宣传图</view>
				<view class="u-box">
					<view class="img-list">
						<image src="../../../../static/index/shopManger/shopInfo/avatar.png"></image>
					</view>
					<view class="u-btn">
						<image src="../../../../static/index/shopManger/shopInfo/upload.png"></image>
					</view>
				</view>
			</view>

			<view class="text-content">
				<view class="title">店铺活动</view>

				<view class="text-box">
					<view class="textarea">
						<textarea v-model="carValue" placeholder="请输入店铺活动" maxlength="260" />
						<text class="length">{{carValue.length}}/200</text>
					</view>
				</view>
			</view>
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
				carValue: ''
			}
		}
	}
</script>

<style lang="scss" scoped>
	#shop-info {
		position: relative;
		width: 100vw;
		height: calc(100vh - 88rpx);
		background-color: #fff;

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
