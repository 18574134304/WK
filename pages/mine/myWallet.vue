<template>
	<view class="wallet">
		<view class="wallet-header" @click="goWithdr">
			<image src="../../static/details/priceBg.png" mode=""></image>
			<view class="header-text">
				<view class="text-price">￥{{ money }}</view>
				<view class="text-wallet">钱包余额</view>
			</view>
		</view>
		
		<view class="wallet-detailde">
			<view class="detailde-top">
				<view class="top-left">钱包明细</view>
				<view class="top-right" @click="show = true">
					<image src="../../static/details/zuo.png" mode=""></image>
					<text>{{ dateTime }}</text>
					<image src="../../static/details/you.png" mode=""></image>
				</view>
			</view>
			<view class="detailde-bottom">
				支出￥{{ expenditure }} 收入￥{{ income }}
			</view>
		</view>
		
		<view class="detailde-order">
			<view class="order-list" v-for="item in list" :key="item.id">
				<view class="list-left">
					<view class="left-title">
						<view class="title-left">{{ item.title }}</view>
						<view class="title-right1" v-if="item.status == '0'">
							未审核
						</view>
						<view class="title-right2" v-if="item.status == '2'">
							已通过
						</view>
						<view class="title-right3" v-if="item.status == '1'">
							未通过
						</view>
					</view>
					<view class="left-bottom">
						{{ item.createTime }}
					</view>
				</view>
				<view class="list-right">
					<text class="right-t1" v-if="item.sign == '+'">+</text>
					<text class="right-t2" v-if="item.sign == '-'">-</text>
					<text class="right-p1" v-if="item.sign == '+'">￥{{ item.payTotalMoney }}</text>
					<text class="right-p2" v-if="item.sign == '-'">￥{{ item.payTotalMoney }}</text>
				</view>
			</view>
		</view>
		
		<u-select v-model="show" mode="mutil-column" :list="timeList" @confirm="confirm"></u-select>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				money: '',
				show: false,
				dateTime: '2021年8月',
				expenditure: '',  // 支出
				income: '', // 收入
				dateYearrMones: new Date().getFullYear() + '-' + (new Date().getMonth()+1),
				timeList: [
						[
							{
								value: '1',
								label: '2020'
							},
							{
								value: '2',
								label: '2021'
							},
							{
								value: '3',
								label: '2022'
							},
							{
								value: '4',
								label: '2023'
							},
							{
								value: '5',
								label: '2024'
							},
							{
								value: '6',
								label: '2025'
							},
							{
								value: '7',
								label: '2026'
							},
							{
								value: '8',
								label: '2027'
							},
						],
						[
							{
								value: '1',
								label: '1月'
							},
							{
								value: '2',
								label: '2月'
							},
							{
								value: '3',
								label: '3月'
							},
							{
								value: '4',
								label: '4月'
							},
							{
								value: '5',
								label: '5月'
							},
							{
								value: '6',
								label: '6月'
							},
							{
								value: '7',
								label: '7月'
							},
							{
								value: '8',
								label: '8月'
							},
							{
								value: '9',
								label: '9月'
							},
							{
								value: '10',
								label: '10月'
							},
							{
								value: '11',
								label: '11月'
							},
							{
								value: '12',
								label: '12月'
							}
						],
						
					],
				list: [
					{
						id: 1,
						title: '订单XX结算,当前余额增加',
						time: '4月20日 14:29:34',
						status: 1,
						price: 180,
						numStatus: 1
					},
					{
						id: 2,
						title: '提现',
						time: '4月20日 14:29:34',
						status: 2,
						price: 180,
						numStatus: 1
					},
					{
						id: 3,
						title: '体现',
						time: '4月20日 14:29:34',
						status: 3,
						price: 180,
						numStatus: 2
					},
				]
			}
		},
		mounted() {
			this.getMoney()
			this.getMoneyWalletList()
		},
		methods: {
			// 获取余额
			async getMoney() {
				let {data: res} = await this.$request.request({
					url: '/v1/user/account/queryUserAccount',
					method: 'post'
				})
				if(res.code == 1) {
					this.money = res.data.money
				}else {
					uni.showToast({
						title: res.msg,
						icon: 'none'
					})
				}
			},
			async getMoneyWalletList() {
				let {data: res} = await this.$request.request({
					url: '/v1/user/accountBill/queryBusiWalletBillList',
					method: 'post',
					data: {
						date: this.dateYearrMones + '-' + '01'
					}
				})
				this.income = res.data.income
				this.expenditure = res.data.expenditure
				this.list = res.data.page.records
				console.log(this.list)
			},
			// 绑定银行卡按钮
			onNavigationBarButtonTap(e) {
				uni.navigateTo({
					url:'backCard'
				})
			},
			// 选择时间
			confirm(e) {
				let index = e[1].label.indexOf('月')
				this.dateTime = e[0].label + '年' + e[1].label
				this.dateYearrMones = e[0].label + '-' + e[1].label.substring(0,index)
				this.getMoneyWalletList()
			},
			// 跳转提现页面
			goWithdr() {
				uni.navigateTo({
					url:'./withdrawal?money=' + this.money
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wallet{
		background-color: #F8F8F8;
		height: calc(100vh - 88rpx);
		padding: 33rpx 32rpx;
		.wallet-header{
			position: relative;
			height: 325rpx;
			width: 100%;
			image{
				height: 325rpx;
				width: 100%;
				position: absolute;
				left: 0;
				top: 0;
				z-index: 1;
			}
			.header-text{
				position: relative;
				z-index: 99;
				text-align: center;
				margin: 0 auto;
				padding-top: 64rpx;
				.text-price{
					font-size: 40rpx;
					font-weight: bold;
					color: #FFFFFF;
					margin-bottom: 10rpx;
				}
				.text-wallet{
					font-size: 28rpx;
					color: #FFFFFF;
				}
			}
		}
		.wallet-detailde{
			height: 141rpx;
			background-color: rgba(183,182,197,.2);
			border-radius: 24px 24px 0px 0px;
			padding: 33rpx 32rpx 0;
			margin-top: 40rpx;
			.detailde-top{
				display: flex;
				align-items: center;
				justify-content: space-between;
				.top-left{
					font-size: 32rpx;
					font-weight: 500;
					color: #333333;
				}
				.top-right{
					display: flex;
					align-items: center;
					text{
						margin: 0 16rpx;
						font-size: 28rpx;
						color: #333333;
					}
					image{
						width: 12rpx;
						height: 17rpx;
					}
				}
			}
			.detailde-bottom{
				font-size: 24rpx;
				font-weight: 500;
				color: #676E79;
				margin-top: 16rpx;
			}
		}
		
		.detailde-order{
			background-color: #FFFFFF;
			padding: 0 32rpx;
			.order-list{
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 28rpx 0 24rpx;
				border-bottom: 1px solid #EEEEEE;
				.list-left{
					.left-title{
						display: flex;
						align-items: center;
						.title-left{
							font-size: 28rpx;
							color: #333333;
							flex: 1;
						}
						.title-right1{
							width: 80rpx;
							height: 32rpx;
							line-height: 32rpx;
							background: #BFBFBF;
							border-radius: 8rpx;
							font-size: 20rpx;
							line-height: 32rpx;
							color: #FFFFFF;
							margin-left: 30rpx;
							text-align: center;
						}
						.title-right2{
							width: 80rpx;
							height: 32rpx;
							line-height: 32rpx;
							background: #09BCAF;
							border-radius: 8rpx;
							font-size: 20rpx;
							line-height: 32rpx;
							color: #FFFFFF;
							margin-left: 30rpx;
							text-align: center;
						}
						.title-right3{
							width: 80rpx;
							height: 32rpx;
							line-height: 32rpx;
							background: #FF5733;
							border-radius: 8rpx;
							font-size: 20rpx;
							line-height: 32rpx;
							color: #FFFFFF;
							margin-left: 30rpx;
							text-align: center;
						}
					}
					.left-bottom{
						font-size: 24rpx;
						color: #BFBFBF;
						margin-top: 8px;
					}
				}
				.list-right{
					.right-t1{
						font-size: 32rpx;
						color: #F35C26;
					}
					.right-t2{
						font-size: 32rpx;
						color: #333333;
					}
					.right-p1{
						font-size: 32rpx;
						font-weight: bold;
						color: #F35C26;
					}
					.right-p2{
						font-size: 32rpx;
						font-weight: bold;
						color: #333333;
					}
				}
			}
		}
	}
</style>
