<template>
	<view class="index">
		<title-block color="rgba(85, 255, 242, 0.12)"></title-block>
		<!-- 头部 -->
		<view class="header">
			<view class="h1">
				<text>MINI沉浸式剧本推理社</text>
				<view class="group">
					<navigator url="./schedule" hover-class="none">
						<image src="../../static/index/h-r.png"></image>
					</navigator>
					<navigator url="./newTeam" hover-class="none">
						<image src="../../static/index/h-a.png"></image>
					</navigator>
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
			<tab-box @tabClick="tabClick" :active="active"></tab-box>
			<!-- 列表 -->
			<view class="list">
				<list-item :num='5' :show2="show2" :pShow="pShow" @close="pShow=false" @confirm="show2=false">
					<view id="btn-group" slot="btn" v-if="active==1" :key="active">
						<view class="btn" @click="pShow=true">解散</view>
						<view class="btn" @click="show2=true">确认完成</view>
					</view>
				</list-item>
			</view>
		</view>
	</view>
</template>

<script>
	import ListItem from '../../components/listItem.vue'
	import TabBox from '../../components/tabBox.vue'
	export default {
		components: {
			ListItem,
			TabBox
		},
		data() {
			return {
				// 确认弹窗
				show2:false,
				// 解散弹窗
				pShow:false,
				// 分类选中
				active: 0,
				htList: [{
						text: '待办事项',
						link: './pendList/pendList'
					},
					{
						text: '门店管理',
						link: './shopManage/shopManage'
					},
					{
						text: '剧本管理',
						link: '../scriptDetails/playManage'
					},
					{
						text: '收入管理',
						link: '../mine/myWallet'
					}
				]
			}
		},
		methods: {
			// 车队分类点击事件
			tabClick(index) {
				this.active = index
			}
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

					navigator {
						width: 40rpx;
						height: 40rpx;
						margin-right: 20rpx;
					}

					image {
						width: 100%;
						height: 100%;
					}
				}
			}

			.h2 {
				margin-top: 48rpx;
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

			.card {
				display: flex;
				justify-content: center;
				width: 686rpx;
				height: 192rpx;
				background-color: #fff;
				margin: 0 auto;
				border-radius: 10rpx;

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


		.list {
			width: 750rpx;
			padding-top: 20rpx;

			#btn-group {
				margin-top: 20rpx;
				display: flex;
				justify-content: start;

				.btn {
					width: calc((100% - 60rpx)/4);
					text-align: center;
					line-height: 48rpx;
					background-color: pink;
					background-color: #F8F8F8;
					border-radius: 10rpx;
					font-size: 24rpx;
					color: #999;
					border: 1rpx solid #F8F8F8;
					margin-right: 20rpx;
				}
			}

		}
	}
</style>
