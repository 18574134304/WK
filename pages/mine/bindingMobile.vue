<template>
	<view class="binding">
		<view class="binding-header">
			当前手机号：{{ mobile }}
		</view>
		<view class="mobile-item">
			<input v-model="newMobile" type="text" value="" placeholder="输入新手机号" />
		</view>
		<view class="mobile-item">
			<input v-model="captcha" type="text" value="" placeholder="输入原手机验证码" />
			<view class="mobile-code" v-if="canDjs" @click="getCode"> 获取验证码</view>
			<view class="code" v-else>{{num}}秒后重新发送</view>
		</view>
		<view class="pwd-button" @click="submitMobile">
			确认修改
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: {},
				mobile: '',
				newMobile: '',
				// 显示 发送验证码 还是倒计时
				canDjs: true,
				num: 60,
				timer: null,
				captcha: '',
				event: 'changePhone'
			}
		},
		mounted() {
			this.userInfo = uni.getStorageSync('userInfo')
			this.mobile = this.userInfo.mobile.replace(this.userInfo.mobile.substring(3,7), "****")
		},
		methods: {
			async submitMobile() {
				if(this.newMobile == '') {
					uni.showToast({
						title: '新手机号不能为空',
						icon: 'none'
					})
				}
				if(this.captcha == '') {
					uni.showToast({
						title: '验证码不能为空',
						icon: 'none'
					})
				}
				let {data: res} = await this.$request.request({
					url: '/v1/user/editBindMobile',
					method: 'post',
					data: {
						captcha: this.captcha,
						event: this.event,
						mobile: this.newMobile,
						userType: 1
					}
				})
				if(res.code == 1) {
					uni.setStorage({key:'token',data:res.data.token})
					uni.setStorage({key: 'userInfo',data: res.data.userVo})
					this.$router.go(0)
				}
				uni.showToast({
					title: res.msg,
					icon: 'none'
				})
			},
			// 倒计时
			yzmDjs() {
				clearInterval(this.timer)
			    
			    if (this.num == 0) {
					 this.canDjs = true;
					 this.num = 60;
			    }else {
					
					this.canDjs = false
					this.timer = setTimeout(() => {
						this.num--;
						this.yzmDjs();
					}, 1000)
				}
			  },
			  async getCode() {
				  if(this.newMobile == '') {
				  	uni.showToast({
				  		title: '请输入新手机号',
				  		icon: 'none'
				  	})
				  	return
				  }
				  this.yzmDjs()
				  let {data: res} = await this.$request.request({
				  	url: '/v1/sms/aliSend',
				  	method: 'post',
				  	data: {
						event: this.event,
						mobile: this.userInfo.mobile,
						userType: 1
					}
				  })
				  if(res.code == 1) {
				  	this.captcha == res.data
				  }else {
				  	uni.showToast({
				  		title: '验证码获取失败',
				  		icon: 'none'
				  	})
				  }
			  }
		}
	}
</script>

<style lang="scss" scoped>
	.binding{
		height: calc(100vh - 88rpx);
		background-color: #FFFFFF;
		position: relative;
		.binding-header{
			height: 100rpx;
			background: rgba(255, 159, 5, 0.1);
			text-align: center;
			line-height: 100rpx;
			font-size: 32rpx;
			font-weight: 500;
			color: #D38100;
		}
		.mobile-item{
			margin: 0 32rpx;
			height: 106rpx;
			line-height: 106rpx;
			border-bottom: 1px solid #eee;
			display: flex;
			align-items: center;
			justify-content: space-between;
			input{
				font-size: 32rpx;
				color: #BFBFBF;
				height: 106rpx;
				line-height: 106rpx;
			}
			.mobile-code{
				font-size: 24rpx;
				color: #09BCAF;
			}
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
