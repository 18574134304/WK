<template>
	<view class="orderInfo">
		<view class="tab-box" v-for="(item,index) in tabData" :key="index">
			
			
			
			<view class="box-title">
				<image :src="item.scenImg" mode=""></image>
				<view class="box-title-right">
					<view class="right-title">
						<view class="title-name">{{ item.scenName }}</view>
						<image v-if="item.carTeamType == 2 || item.carTeamType == 4" src="../../static/mine/car1.png" mode=""></image>
						<view class="right-price" v-if="item.carTeamType == 3">￥{{ item.price }}</view>
					</view>
					<view class="fangjian">
						<image src="../../static/mine/car3.png" mode=""></image>
						{{ item.roomName }}
					</view>
					
					<view class="box-time">
						<view class="time-left">
							<image src="../../static/index/l2.png" mode=""></image>
							{{ item.openCarDate?item.openCarDate.substring(0,10):''}}  {{item.openCarTime }}
						</view>
						<view class="time-right">
							<image src="../../static/index/l4.png" mode=""></image>
							{{ item.dmNickName }}
						</view>
					</view>
					
					<view class="fangjian">
						<image src="../../static/mine/car5.png" mode=""></image>
						{{ item.carTeamTagline }}
					</view>
				</view>
			</view>
			<view class="box-bottom">
				<view class="bottom-left">
					<view class="left-weight" v-if="item.carTeamType == 2 || item.carTeamType == 4">已锁车</view>
					<view class="left-weight" v-if="item.carTeamType == 3">已完成</view>
					<view class="left-weight" v-if="item.carTeamType == 9">已取消</view>
					<view class="left-yes" v-if="item.carTeamType == 4">有跳车</view>
				</view>
				<view class="bottom-right">
					<!-- <view class="jiesan" v-if="item.carTeamType == 2 || item.carTeamType == 4" @click="dissolutionCar(item.id)">解散车队</view>
					<view class="ok" v-if="item.carTeamType == 1" @click="dShow = true;lockCarId = item.id">锁车</view>
					<view class="ok" v-if="item.carTeamType == 1" @click="parking(item.id)">车位管理</view>
					<view class="ok" v-if="item.carTeamType == 1" @click="cTipShow = true,lockCarId = item.id">修改宣传语</view>
					<view class="jiesan" v-if="item.carTeamType == 3 || item.carTeamType ==9" @click="deleteOrder(item.id)">删除车队</view>
					<view class="ok" v-if="item.carTeamType == 2 || item.carTeamType == 4" @click="carSubmit(item.id)">确认完成</view>
					<navigator :url="'orderDetauls?id=' + item.id" v-if="item.carTeamType == 3 || item.carTeamType ==9"><view class="ok">查看详情</view></navigator> -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabData: []
			}
		},
		mounted() {
			this.getTabData()
		},
		methods: {
			async getTabData() {
				let {data: res} = await this.$request.request({
					url: '/v1/message/queryMessageOrderList',
					method: 'post'
				})
				this.tabData = res.data.records
				console.log(res)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.orderInfo{
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
