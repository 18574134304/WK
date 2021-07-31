<template>
	<view class="index">
		<title-block></title-block>
		<!-- 头部 -->
		<view class="header">
			<view class="h1">
				<text>MINI沉浸式剧本推理社</text>
				<view class="group">
					<image src="../../static/index/h-r.png"></image>
					<image src="../../static/index/h-a.png"></image>
				</view>
			</view>
			<view class="h2">
				<navigator v-for="(item,index) in htList" hover-class="none" :url="item.link" class="item" :key="index">
					<image :src='`../../static/index/i${index+1}.png`'></image>
					<text>{{item.text}}</text>
				</navigator>
			</view>
		</view>
		<!-- 主内容区 -->
		<view class="content">
			<!-- 消费信息 -->
			<view class="card">
				<view class="c-item">
					<text class="t1">1</text>
					<text class="t2">当日开本数量</text>
				</view>
				<view class="c-item">
					<text class="t1">¥560</text>
					<text class="t2">当日到店消费金额</text>
				</view>
			</view>
			<!-- 车队分类 -->
			<view class="tab">
				<view class="tab-item" @click="active=1">
					<text :class="{'tab-active':active===1}">当日待拼车队</text>
				</view>
				<view class="tab-item" @click="active=2">
					<text :class="{'tab-active':active===2}">当日已拼车队</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				active: 1,
				htList: [{
						text: '待办事项',
						link: '#'
					},
					{
						text: '门店管理',
						link: '#'
					},
					{
						text: '剧本管理',
						link: '#'
					},
					{
						text: '收入管理',
						link: '#'
					}
				]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.index {
		background: #F8F8F8;

		.header {
			box-sizing: border-box;
			width: 100%;
			height: 320rpx;
			background: linear-gradient(180deg, rgba(85, 255, 242, 0.12) 0%, rgba(9, 188, 175, 0.05) 88%, rgba(9, 188, 175, 0) 100%);

			.h1 {
				display: flex;
				align-items: center;
				justify-content: space-between;
				height: 88rpx;
				padding-left: 20rpx;

				text {
					color: #333;
					font-size: 36rpx;
					font-weight: 500;
					font-family: PingFang SC;
				}

				.group {
					height: 100%;
					display: flex;
					align-items: center;

					image {
						width: 40rpx;
						height: 40rpx;
						margin-right: 20rpx;
					}
				}
			}

			.h2 {
				padding-top: 48rpx;
				height: 128rpx;
				display: flex;
				align-items: center;

				.item {
					width: 25%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;

					image {
						width: 52rpx;
						height: 52rpx;
						margin-bottom: 16rpx;
					}

					text {
						font-size: 24rpx;
						color: #333;
					}
				}
			}
		}

		.content {
			width: 750rpx;
			background: #F8F8F8;
			padding-bottom: 20rpx;

			.card {
				display: flex;
				justify-content: center;
				width: 686rpx;
				height: 192rpx;
				background-color: #fff;
				margin: 0 auto;

				.c-item {
					width: 50%;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					height: 100%;

					.t1 {
						font-size: 40rpx;
						color: #F81B49;
						margin-bottom: 18rpx;
						font-weight: 500;
					}

					.t2 {
						font-size: 24rpx;
						color: #333;
					}
				}
			}
		}

		.tab {
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 53rpx;
			width: 100%;
			margin: 40rpx 0 30rpx;

			.tab-item {
				position: relative;
				width: 50%;
				text-align: center;
				font-size: 32rpx;
				font-weight: 400;
				color: #333;

				text {
					position: relative;
					z-index: 10;
					transition: 0.3s all;
				}
			}

			.tab-active {
				font-size: 38rpx;
				font-weight: 600;
				&::after {
					content: "";
					position: absolute;
					bottom: 0;
					right: 0;
					width: 90%;
					height: 0;
					border-top: 16rpx solid #00BAAD;
					z-index: 1;
				}
			}
		}
	}
</style>
