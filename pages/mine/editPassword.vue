<template>
	<view class="edit-pwd">
		<view class="pwd-item">
			<input v-model="oldPassword" type="text" value="" placeholder="输入原密码" />
		</view>
		<view class="pwd-item">
			<input v-model="newPassword" type="text" value="" placeholder="输入新密码" />
		</view>
		<view class="pwd-item">
			<input v-model="okNewPassword" type="text" value="" placeholder="确认新密码" />
		</view>
		
		<view class="pwd-button" @click="submitPassword">
			确定
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				oldPassword: '',
				newPassword: '',
				okNewPassword: ''
			}
		},
		methods: {
			async submitPassword() {
				if(this.oldPassword == '') {
					uni.showToast({
						title: '请输入原密码',
						icon: 'none'
					})
					return
				}
				if(this.newPassword == '') {
					uni.showToast({
						title: '请输入新密码',
						icon: 'none'
					})
					return
				}
				if(this.newPassword != this.okNewPassword) {
					uni.showToast({
						title: '两次新密码不一致',
						icon: 'none'
					})
					return
				}
				let {data: res} = await this.$request.request({
					url: '/v1/user/editPwd',
					method: 'post',
					data: {
						newPassword: this.newPassword,
						oldPassword: this.oldPassword,
						userType: 1
					}
				})
				uni.showToast({
					title: res.msg,
					icon: 'none'
				})
				this.oldPassword = ''
				this.newPassword = ''
				this.okNewPassword = ''
			}
		}
	}
</script>

<style lang="scss" scoped>
	.edit-pwd{
		position: relative;
		height: calc(100vh - 88rpx);
		background-color: #FFFFFF;
		.pwd-item{
			margin: 0 32rpx;
			height: 106rpx;
			line-height: 106rpx;
			border-bottom: 1px solid #eee;
			input{
				font-size: 32rpx;
				color: #BFBFBF;
				height: 106rpx;
				line-height: 106rpx;
			}
		}
		.pwd-item:last-child{
			border-bottom: none;
		}
		.pwd-button{
			position: absolute;
			bottom: 60rpx;
			left: 50%;
			transform: translateX(-50%);
			width: 686rpx;
			height: 88rpx;
			line-height: 88rpx;
			background: #09BCAF;
			border-radius: 44rpx;
			font-size: 32rpx;
			color: #FFFFFF;
			text-align: center;
		}
	}
</style>
