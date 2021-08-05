<template>
	<view class="container">
		<title-block></title-block>
		<image class="bg" src="@/static/login/login-bg.png"></image>
		<view class="main">
			<view class="title">登录</view>
			<view class="item">
				<view class="text">账号</view>
				<input class="ipt" type="number" maxlength="11" placeholder="请输入手机号" />

			</view>
			<view class="item" v-if="pageName=='code'">
				<view class="text">验证码</view>
				<input class="ipt" type="number" placeholder="请输入验证码" />
				<view class="code" v-if="canDjs" >获取验证码</view>
				<view class="code" v-else>{{num}}秒后重新发送</view>
			</view>
			<view class="item" v-if="pageName=='password'">
				<view class="text">密码</view>
				<input class="ipt" type="password" maxlength="12" placeholder="请输入密码(6~12位)" @confirm="login" />
			</view>

			<view class="to-box">
				<view class="to-text" v-if="pageName=='code'" @tap="pageName='password'">密码登录</view>
				<view class="to-text" v-if="pageName=='password'" @tap="pageName='code'">验证码登录</view>
			</view>

			<view class="btn" @tap="login">登录</view>

			<navigator hover-class="none" url="./forget-password" class="forget">忘记密码</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				pageName:'code',
				// 显示 发送验证码 还是倒计时
				canDjs: true,
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
				line-height: 42rpx;
				color: #333333;
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
