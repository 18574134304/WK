<template>
	<view class="sale">
		<title-block></title-block>
		<view class="sale-header">
			<image @click="toBack" class="sale-bg" src="../../static/mine/mineBg.png" mode=""></image>
			<view class="sale-title">
				<image src="../../static/mine/zuo1.png" mode=""></image>
				<view class="title-center">
					<view class="center-left" :class="[title == '月账单' ? 'center-check' : '']" @click="titleChange('月账单')">月账单</view>
					<view class="center-right" :class="[title == '年账单' ? 'center-check' : '']" @click="titleChange('年账单')">年账单</view>
				</view>
				<view class="">   </view>
			</view>
		</view>
		
		<view class="sale-box">
			<u-dropdown>
				<u-dropdown-item v-if="title == '月账单'" @change="droChange" v-model="value1" :title="optionsyue" :options="options2"></u-dropdown-item>
				
				<u-dropdown-item v-if="title == '年账单'" @change="droChange1" v-model="value2" :title="optionsnian" :options="options3"></u-dropdown-item>
			
			</u-dropdown>
			
			<view class="box-center">
				共开300场，合计
			</view>
			<view class="box-bottom">
				￥10000.00
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '月账单',
				optionsyue: new Date().getFullYear() + '年' + (new Date().getMonth() + 1 + '月'),
				optionsnian: new Date().getFullYear() + '年',
				value1: 1,
				value2: 1,
				options2: [
					{
						label: '1月',
						value: 1,
					},
					{
						label: '2月',
						value: 2,
					},
					{
						label: '3月',
						value: 3,
					},
					{
						label: '4月',
						value: 4,
					},
					{
						label: '5月',
						value: 5,
					},
					{
						label: '6月',
						value: 6,
					},
					{
						label: '7月',
						value: 7,
					},
					{
						label: '8月',
						value: 8,
					},
					{
						label: '9月',
						value: 9,
					},
					{
						label: '10月',
						value: 10,
					},
					{
						label: '11月',
						value: 11,
					},
					{
						label: '12月',
						value: 12,
					}
				],
				options3: [
					{
						label: '2021',
						value: 2021,
					},
					{
						label: '2022',
						value: 2022,
					},
					{
						label: '2023',
						value: 2023,
					},
					{
						label: '2024',
						value: 2024,
					},
					{
						label: '2025',
						value: 2025,
					}
				]
				
			}
		},
		methods: {
			titleChange(title) {
				this.title = title
			},
			droChange(e) {
				this.options = new Date().getFullYear() + '年' + e + '月'
			},
			droChange1(e) {
				this.optionsnian = e + '年'
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
	.sale {
		background: #F8F8F8;
		height: 100vh;
		.sale-header{
			height: 203rpx;
			position: relative;
			.sale-bg{
				position: absolute;
				top: 0;
				left: 0;
				height: 203rpx;
				width: 100%;
			}
			
			.sale-title{
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 32rpx;
				padding-top: 60rpx;
				image{
					width: 19rpx;
					height: 36rpx;
				}
				.title-center{
					z-index: 99;
					width: 508rpx;
					height: 70rpx;
					line-height: 70rpx;
					display: flex;
					align-items: center;
					background: #E5F8F7;
					border: 1rpx solid rgba(242, 242, 242, 0.2);
					border-radius: 100rpx;
					.center-left{
						width: 50%;
						text-align: center;
						border-radius: 90px 0px 0px 90px;
						color: #00AFA2;
						font-size: 32rpx;
					}
					.center-right{
						width: 50%;
						text-align: center;
						color: #00AFA2;
						font-size: 32rpx;
						border-radius: 0px 90px 90px 0px;
					}
					.center-check{
						background: #09BCAF;
						color: #FFFFFF;
					}
				}
			}
		}
		.sale-box{
			// height: 328rpx;
			background: #FFFFFF;
			border-radius: 24rpx;
			padding: 40rpx 0 32rpx 32rpx;
				/deep/ .u-dropdown__menu__item{
					justify-content: end
				}
			.box-center{
				font-size: 24rpx;
				color: #333333;
				-webkit-text-stroke: 1 rgba(0, 0, 0, 0);
				text-stroke: 1 rgba(0, 0, 0, 0);
				margin-top: 60rpx;
			}
			.box-bottom{
				font-size: 66rpx;
				font-weight: 500;
				color: #333333;
				-webkit-text-stroke: 1 rgba(0, 0, 0, 0);
				text-stroke: 1 rgba(0, 0, 0, 0);
				margin-top: 40rpx;
			}
		}
	}
</style>
