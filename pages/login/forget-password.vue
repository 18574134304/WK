<template>
	<view class="container">
		<title-block></title-block>
		<image class="bg" src="@/static/login/login-bg.png" mode=""></image>
		<view class="main">
			<view class="title">忘记密码</view>
			<view class="item">
				<view class="text">账号</view>
				<input v-model="params.mobile" class="ipt" type="number" maxlength="11" placeholder="请输入手机号" />

			</view>
			<view class="item">
				<view class="text">验证码</view>
				<input v-model="params.captcha" class="ipt" type="number" placeholder="请输入验证码" />
				<view class="code" v-if="canDjs" @tap="getCode">获取验证码</view>
				<view class="code" v-else>{{num}}秒后重新发送</view>
			</view>
			<view class="item">
				<view class="text">密码</view>
				<input v-model="params.password" class="ipt" type="password" maxlength="12" placeholder="请输入密码(6~12位)" />
			</view>

			<view class="item">
				<view class="text">确认密码</view>
				<input v-model="okpassword" class="ipt" type="password" maxlength="12" placeholder="请确认密码(6~12位)" />
			</view>

			<view class="btn" @tap="ok">确认</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pageName: 'code', //密码or验证码
				num: 60, //验证码
				canDjs: true,
				timer: null,
				params: {
					mobile: '',
					captcha: '',
					password: '',
					userType: '1',
					event: ''
				},
				okpassword: ''
			};
		},
		methods:{
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
			  // 获取验证码
			async getCode() {
				if(this.params.mobile == '') {
					uni.showToast({
						title: '请输入手机号',
						icon: 'none'
					})
					return
				}
				
				this.yzmDjs()
				this.params.event = 'forget'
				let {data: res} = await this.$request.request({
					url: '/v1/sms/aliSend',
					method: 'post',
					data: this.params
				})
				if(res.code == 1) {
					this.params.captcha == res.data
				}else {
					uni.showToast({
						title: '验证码获取失败',
						icon: 'none'
					})
				}
			},
			// 点击确定
			async ok() {
				if(this.params.mobile == '') {
					uni.showToast({
						title: '请输入手机号',
						icon: 'none'
					})
					return
				}
				if(this.params.captcha == '') {
					uni.showToast({
						title: '请输入验证码',
						icon: 'none'
					})
					return
				}
				if(this.params.password == '') {
					uni.showToast({
						title: '请输入密码',
						icon: 'none'
					})
					return
				}
				if(this.okpassword == '') {
					uni.showToast({
						title: '请输入确认密码',
						icon: 'none'
					})
					return
				}
				if(this.okpassword != this.params.password) {
					uni.showToast({
						title: '两次密码不一致',
						icon: 'none'
					})
					return
				}
				let res = this.$request.request({
					method: 'post',
					url: '/v1/user/forgetPwd',
					data: this.params
				})
				if(res.code == 1) {
					uni.showToast({
						title: '操作成功',
						icon: 'none'
					})
					uni.navigateTo({
						url:'./login'
					})
				}else {
					uni.showToast({
						title: '操作失败',
						icon: 'none'
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.container {
		width: 750rpx;
		overflow: hidden;
	}

	.bg {
		position: absolute;
		left: 0;
		top: 0;
		width: 750rpx;
		height: 441rpx;
		z-index: 1;
	}

	.main {
		position: relative;
		z-index: 2;
		width: 600rpx;
		height: auto;
		overflow: hidden;
		margin: 238rpx auto 0;

		.title {
			font-size: 50rpx;
			font-family: PingFang SC;
			font-weight: 600;
			line-height: 50rpx;
			color: #333333;
			opacity: 1;
			margin-bottom: 32rpx;
		}

		.item {
			margin-top: 40rpx;
			width: 100%;
			border-bottom: 1rpx solid #EEEEEE;
			position: relative;

			.text {
				font-size: 30rpx;
				font-family: PingFang SC;
				font-weight: 500;
				line-height: 32rpx;
				color: #333333;
				opacity: 1;
				margin-bottom: 4rpx;
			}

			.ipt {
				border: none;
				width: 100%;
				// padding: 20rpx 0;
				height: 72rpx;

				font-size: 32rpx;
				font-family: PingFang SC;
				font-weight: 400;
				line-height: 72rpx;
				color: #BFBFBF;
				opacity: 1;
			}

			.code {
				text-align: right;
				width: 240rpx;
				height: 72rpx;

				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 400;
				line-height: 72rpx;
				color: #F35C26;
				opacity: 1;
				position: absolute;
				right: 0;
				bottom: 0;
			}
		}

		.to-box {
			display: flex;
			justify-content: flex-end;

			.to-text {
				margin-top: 24rpx;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 400;
				line-height: 34rpx;
				color: #333333;
				opacity: 1;
			}
		}

		.btn {
			margin-top: 40rpx;
			width: 600rpx;
			height: 80rpx;
			background: #00BAAD;
			box-shadow: 0px 6rpx 0px rgba(87, 63, 186, 0.19);
			opacity: 1;
			border-radius: 40rpx;

			text-align: center;

			font-size: 28rpx;
			font-family: PingFang SC;
			font-weight: 400;
			line-height: 80rpx;
			color: #FFFFFF;
			opacity: 1;
		}

		.forget {
			margin-top: 56rpx;
			text-align: center;
			width: 100%;

			font-size: 28rpx;
			font-family: PingFang SC;
			font-weight: 400;
			line-height: 34rpx;
			color: #999999;
			opacity: 1;
		}
	}
</style>
