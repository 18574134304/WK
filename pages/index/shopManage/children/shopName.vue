<template>
	<view id="shop-name">
		<view class="content">
			<view class="item">
				<text class="lable">门店名称</text>
				<input type="text" v-model="name" placeholder="请输入门店名称"/>
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
		mixins:[shopinfo],
		data() {
			return {
				name: '',
				info:null
			}
		},
		methods: {
			submit() {
				if (!this.name.trim()) return this.$toast("门店名不能为空")
				this.save({storeName:this.name})
			}
		},

		watch: {
			info: {
				handler(newVal) {
					if (newVal.storeName) {
						this.name = newVal.storeName
					}
				},
				deep: true
			}
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

				.lable {
					font-size: 28rpx;
					color: #333333;
					font-weight: 500;
				}

				input {
					margin-left: 30rpx;
					font-size: 28rpx;
					flex: 1;
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
