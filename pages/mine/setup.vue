<template>
	<view class="setup">
		<navigator url="editPassword">
			<view class="setup-item">
				<view class="">修改密码</view>
				<image src="../../static/mine/you.png" mode=""></image>
			</view>
		</navigator>
		<navigator url="bindingMobile">
			<view class="setup-item">
				<view class="">绑定手机</view>
				<image src="../../static/mine/you.png" mode=""></image>
			</view>
		</navigator>
		<navigator url="aboutMy">
			<view class="setup-item" style="border-bottom:none;">
				<view class="">关于我们</view>
				<image src="../../static/mine/you.png" mode=""></image>
			</view>
		</navigator>
		<view class="xian"></view>
		<view class="setup-item">
			<view class="">当前版本</view>
			<view class="">
				1.0.1
				<image style="margin-left:16rpx;" src="../../static/mine/you.png" mode=""></image>
			</view>
		</view>
		<view class="setup-item" @click="clearStorage">
			<view class="">清除缓存</view>
			<view class="">
				{{ storageSize }}
				<image style="margin-left:16rpx;" src="../../static/mine/you.png" mode=""></image>
			</view>
		</view>
		
		<view class="setup-button" @click="logout">
			退出登录
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				storageSize: ''
			}
		},
		mounted() {
			this.getStorageSize()
		},
		methods: {
			logout() {
				uni.clearStorageSync()
				uni.navigateTo({
					url: '../login/login',
					success(){
							 let page = getCurrentPages().pop();  //跳转页面成功之后
					             if (!page) return;  
					             page.onLoad(); //如果页面存在，则重新刷新页面
						  }
				})
			},
			getStorageSize:function(){
			let that = this;
				uni.getStorageInfo({
					success(res) {
						let size = res.currentSize;
						if (size < 1024) {
							that.storageSize = size + ' B';
						} else if (size/1024>=1 && size/1024/1024<1) {
							that.storageSize = Math.floor(size/1024*100)/100 + ' KB';
						} else if (size/1024/1024>=1) {
							that.storageSize = Math.floor(size/1024/1024*100)/100 + ' M';
						}
					}
				})
			},
			clearStorage:function (){
				let that = this;
				uni.showModal({
					title:'提示',
					content:'确定清除缓存吗?',
					confirmText:'立即清除',
					success(res) {
						if(res.confirm){
							uni.clearStorageSync();
							//重新获取并显示清除后的缓存大小
							that.getStorageSize();
							uni.showToast({
								title:'清除成功'
							})
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.setup{
		height: calc(100vh - 88rpx);
		position: relative;
		background-color: #FFFFFF;
		.setup-item{
			height: 110rpx;
			background: #FFFFFF;
			margin: 0 32rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 35rpx 0;
			font-size: 28rpx;
			color: #333333;
			border-bottom: 1rpx solid #EEEEEE;
			image{
				width: 22rpx;
				height: 22rpx;
			}
		}
		.xian{
			width: 100%;
			height: 20rpx;
			background: #F8F8F8;
		}
		.setup-button{
			width: 100%;
			position: absolute;
			bottom: 0;
			left: 0;
			height: 88rpx;
			background: #09BCAF;
			font-size: 32rpx;
			line-height: 88rpx;
			color: #FFFFFF;
			text-align: center;
		}
	}
</style>
