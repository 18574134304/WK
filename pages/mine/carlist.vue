<template>
	<view class="car-list">
		<title-block></title-block>
		<view class="car-header">
			<image @click="toBack" class="header-img" src="../../static/mine/zuo1.png" mode=""></image>
			<view class="header-right">
				<image src="../../static/mine/search.png" mode=""></image>
				<input type="text" value="" placeholder="请输入剧本名称" />
			</view>
		</view>
		
		<view class="car-tab">
			<view :class="[tabIndex == index ? 'tab-check' : '']" @click="tabClick(index)" class="tab-item" v-for="(item,index) in tabList">{{ item }}</view>
		</view>
		<view class="tab-jump" v-if="tabIndex == 1">
			<view class="tab-jump-box">
				<view class="tab-jump-left" :class="[jumpName == '满员' ? 'jump-bg' : '']" @click="jump('满员')">已满员</view>
				<view class="tab-jump-right" :class="[jumpName == '跳车' ? 'jump-bg' : '']" @click="jump('跳车')">有跳车</view>
			</view>
		</view>
		
		<view class="tab-box" v-for="(item,index) in tabData" :key="index">
			
			
			
			<view class="box-title">
				<image :src="item.url" mode=""></image>
				<view class="box-title-right">
					<view class="right-title">
						<view class="title-name">{{ item.title }}</view>
						<image v-if="tabIndex == 0 || tabIndex == 1" src="../../static/mine/car1.png" mode=""></image>
						<view class="right-price" v-if="tabIndex == 2">￥1500</view>
					</view>
					<view class="fangjian">
						<image src="../../static/mine/car3.png" mode=""></image>
						{{ item.name }}
					</view>
					
					<view class="box-time">
						<view class="time-left">
							<image src="../../static/index/l2.png" mode=""></image>
							{{ item.time }}
						</view>
						<view class="time-right">
							<image src="../../static/index/l4.png" mode=""></image>
							{{ item.color }}
						</view>
					</view>
					
					<view class="fangjian">
						<image src="../../static/mine/car5.png" mode=""></image>
						{{ item.juben }}
					</view>
				</view>
			</view>
			<view class="box-bottom">
				<view class="bottom-left">
					<view class="left-weight" v-if="item.status == 1">已锁车</view>
					<view class="left-weight" v-if="item.status == 2">已完成</view>
					<view class="left-weight" v-if="item.status == 3">已取消</view>
					<view class="left-yes" v-if="item.Jump">有跳车</view>
				</view>
				<view class="bottom-right">
					<view class="jiesan">解散车队</view>
					<view class="ok" v-if="tabIndex != 2 && tabIndex != 3">确认完成</view>
					<navigator url="orderDetauls" v-if="tabIndex == 2 || tabIndex == 3"><view class="ok">订单详情</view></navigator>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return{
				tabList: ['全部','已锁车','已完成','已取消'],
				tabIndex: 0,
				jumpName: '满员',
				tabData:[
					{
						url: require('@/static/index/jb.png'),
						title: '姜子牙',
						name: '这是房间名称',
						time: '2021-02-21  14:00',
						color: 'FFF',
						juben: '剧本《姜子牙》6=1',
						status: 1,
						Jump: true
					},
					{
						url: require('@/static/index/jb.png'),
						title: '姜子牙',
						name: '这是房间名称',
						time: '2021-02-21  14:00',
						color: 'FFF',
						juben: '剧本《姜子牙》6=1',
						status: 2,
						Jump: false
					},
					{
						url: require('@/static/index/jb.png'),
						title: '姜子牙',
						name: '这是房间名称',
						time: '2021-02-21  14:00',
						color: 'FFF',
						juben: '剧本《姜子牙》6=1',
						status: 3,
						Jump: false
					},
					{
						url: require('@/static/index/jb.png'),
						title: '姜子牙',
						name: '这是房间名称',
						time: '2021-02-21  14:00',
						color: 'FFF',
						juben: '剧本《姜子牙》6=1',
						status: 3,
						Jump: false
					}
				]
			}
		},
		methods: {
			// tab切换
			tabClick(index) {
				this.tabIndex = index
			},
			// 满员跳车切换
			jump(name) {
				this.jumpName = name
			},
			// 后退
			toBack() {
				uni.navigateBack({
					delta:1
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.car-list{
		background-color: #eee;
		height: 100vh;
		.car-header{
			padding: 0 32rpx;
			padding-top: 40rpx;
			display: flex;
			align-items: center;
			background-color: #fff;
			.header-img{
				width: 20rpx;
				height: 37rpx;
				margin-right: 32rpx;
			}
			.header-right{
				color: #F8F8F8;
				background: #F1F1F1;
				flex: 1;
				display: flex;
				align-items: center;
				height: 55rpx;
				border-radius: 28rpx;
				padding-left: 32rpx;
				font-size: 24rpx;
				color: #A7A7A7;
				image{
					width: 30rpx;
					height: 30rpx;
					margin-right: 4rpx;
					margin-right: 10rpx;
				}
			}
		}
		
		.car-tab{
			height: 130rpx;
			line-height: 130rpx;
			font-size: 28rpx;
			color: #333333;
			display: flex;
			align-items: center;
			justify-content: space-around;
			background-color: #fff;
			border-radius: 0 0 20rpx 20rpx;
			margin-bottom: 20rpx;
		}
		.tab-check{
			font-weight: 700;
			color: #00BAAD;
		}
		.tab-jump{
			background: #F1F1F1;
			padding: 32rpx;
			.tab-jump-box{
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-radius: 100rpx;
				background-color: #eee;
				.tab-jump-left{
					height: 64rpx;
					line-height: 64rpx;
					text-align: center;
					font-size: 28rpx;
					font-weight: 600;
					width: 50%;
					color: #A7A7A7;
				}
				.tab-jump-right{
					height: 64rpx;
					width: 50%;
					line-height: 64rpx;
					text-align: center;
					font-size: 28rpx;
					font-weight: 600;
					color: #A7A7A7;
				}
				.jump-bg{
					background: #FFFFFF;
					box-shadow: 0rpx 2rpx 8rpx rgba(0, 0, 0, 0.04);
					color: #333333;
					border-radius: 100rpx;
				}
			}
		}
		.tab-box{
			height: 365rpx;
			background: #FFFFFF;
			border-radius: 24rpx;
			padding: 24rpx 32rpx 32rpx;
			margin-bottom: 20rpx;
			.box-title{
				display: flex;
				align-items: center;
				image{
					width: 159rpx;
					height: 221rpx;
					margin-right: 20rpx;
				}
				.box-title-right{
					flex: 1;
					.right-title{
						display: flex;
						align-items: center;
						justify-content: space-between;
						margin-bottom: 32rpx;
						
						.title-name{
							font-size: 32rpx;
							font-weight: 600;
							color: #333333;
							letter-spacing: 3rpx;
						}
						.right-price{
							font-size: 38rpx;
							font-weight: 600;
							color: #F81B49;
							letter-spacing: 1px;
						}
						image{
							width: 40rpx;
							height: 40rpx;
						}
					}
					
					.fangjian{
						font-size: 24rpx;
						font-weight: 600;
						color: #666666;
						letter-spacing: 2px;
						margin-bottom: 16rpx;
						image{
							width: 24rpx;
							height: 24rpx;
							margin-right: 10rpx;
							vertical-align: middle;
						}
					}
					.fangjian:last-child{
						margin-bottom: 0;
					}
					.box-time{
						display: flex;
						align-items: center;
						justify-content: space-between;
						margin-bottom: 16rpx;
						.time-left{
							font-size: 24rpx;
							font-weight: 600;
							color: #666666;
							letter-spacing: 2px;
							image{
								width: 24rpx;
								height: 24rpx;
								margin-right: 10rpx;
							}
						}
						.time-right{
							font-size: 24rpx;
							font-weight: 600;
							color: #666666;
							letter-spacing: 2px;
							image{
								width: 24rpx;
								height: 24rpx;
								margin-right: 10rpx;
							}
						}
					}
				}
			}
			.box-bottom{
				margin-top: 32rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				.bottom-left{
					display: flex;
					align-items: center;
					.left-weight{
						font-size: 28rpx;
						font-weight: 600;
						color: #333333;
						margin-right: 15rpx;
					}
					.left-yes{
						width: 80rpx;
						height: 30rpx;
						line-height: 28rpx;
						background: linear-gradient(276deg, #09BCAF 0%, #0EC47E 100%);
						border-radius: 8rpx;
						font-size: 20rpx;
						font-weight: normal;
						color: #FFFFFF;
						text-align: center;
					}
				}
				.bottom-right{
					display: flex;
					align-items: center;
					.jiesan{
						width: 170rpx;
						height: 56rpx;
						line-height: 56rpx;
						background: #EEEEEE;
						border-radius: 28rpx;
						font-size: 24rpx;
						color: #333333;
						text-align: center;
						margin-right: 24rpx;
					}
					.ok{
						width: 170rpx;
						height: 56rpx;
						line-height: 56rpx;
						background: #00BAAD;
						border-radius: 28rpx;
						font-size: 24rpx;
						color: #FFFFFF;
						text-align: center;
					}
				}
			}
		}
	}
	
</style>
