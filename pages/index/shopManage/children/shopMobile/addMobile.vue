<template>
	<view id="add-mobile" v-if="info">
		<view class="content">
			<view class="item">
				<text class="lable">门店电话</text>
				<input type="text" v-model="v1" placeholder="请输入门店电话" />
				<image src="@/static/index/shopManger/del-icon.png" @click="v1=''"></image>
			</view>
			<view class="item">
				<text class="lable"></text>
				<input type="text" v-model="v2" placeholder="请输入门店电话" />
				<image src="@/static/index/shopManger/del-icon.png" @click="v2=''"></image>
			</view>
		</view>
		<view class="save" @click="submit">
			<view>保存</view>
		</view>
	</view>
</template>

<script>
	import shopinfo from "@/mixins/shopInfo.js"
	export default {
		mixins: [shopinfo],
		data() {
			return {
				v1: '',
				v2: '',
				info: null
			}
		},
		methods: {
			submit(){
				let storeMobile
				if(this.v1&&this.v2){
					storeMobile = this.v1+','+this.v2
				}else{
					if(this.v1) storeMobile = this.v1
					if(this.v2) storeMobile = this.v2
				}
				let data = {
					storeMobile
				}
				this.save(data)
			}
		},

		watch: {
			info: {
				handler(newVal) {
					if (newVal.storeMobile) {
						let mobile = newVal.storeMobile.split()
						this.v1 = mobile[0]
						if (mobile.length > 1) {
							this.v2 = mobile[1]
						}
					}
				},
				deep: true
			}
		}
	}
</script>

<style lang="scss" scoped>
	#add-mobile {
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

				.lable {
					font-size: 28rpx;
					color: #333333;
					font-weight: 500;
					width: 120rpx;
				}

				input {
					margin-left: 30rpx;
					font-size: 28rpx;
					flex: 1;
				}

				image {
					width: 32rpx;
					height: 32rpx;
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
