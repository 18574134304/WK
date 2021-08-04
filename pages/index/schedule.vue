<template>
	<view class="schedule">
		<!-- 选择时间 -->
		<view class="time" @click="show=true">
			<image src="../../static/content/time-l.png"></image>
			<text space="nbsp">{{systemTime +'  '+ nowWeek}}</text>
			<image src="../../static/content/time-r.png"></image>
		</view>
		
		<view class="schedule-header">
			<view class="hander-left">
				<view class="left-red"></view>
				<view class="left-text">已拼车队</view>
			</view>
			<view class="hander-right">
				<view class="right-red"></view>
				<view class="">在拼车队</view>
			</view>
		</view> 
		
		<scroll-view style="margin:0 32rpx;" scroll-x="true">
			
			<view class="schedule-box">
				<view class="box-title">
					<view class="inFlex">
						<view class="title-name">包厢名称</view>
						<view class="title-name">包厢名称</view>
						<view class="title-name">包厢名称</view>
						<view class="title-name">包厢名称</view>
						<view class="title-name">包厢名称123123</view>
					</view>
				</view>
					<view class="box-con" v-for="item in 3">
						<view class="con-left" v-for="item in 5">
							<view class="left-title">前男友的100种死法</view>
							<view class="left-name">
								<view class="name-left">
									<image src="../../static/index/shcihi1.png" mode=""></image>
									<text>5</text>
								</view>
								<view class="name-right">
									<image src="../../static/index/shcihi2.png" mode=""></image>
									<text>FFF</text>
								</view>
							</view>
						</view>
				</view>
			</view>
			
			
		</scroll-view>
		
		
		
		
		
		<!-- 时间弹框 -->
		<u-calendar id="content-calendar" btn-type="success" month-arrow-color="#00BAAD" active-bg-color="#00BAAD" :change-year="false"
			v-model="show" :mode="mode" @change="change"></u-calendar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 日期
				systemTime: '',
				// 星期几
				nowWeek: '',
				show: false,
				mode: 'date',
			}
		},
		mounted() {
			let nowDate = new Date()
			let date = {
				year: nowDate.getFullYear(),
				month: nowDate.getMonth() + 1,
				date: nowDate.getDate()
			}
			this.systemTime = date.year + '-' + date.month + '-' + date.date
			this.setNowTimes()
		},
		methods: {
			// 计算星期
			setNowTimes() {
				let myDate = new Date()
				// console.log(myDate)  
				let wk = myDate.getDay()
				let yy = String(myDate.getFullYear())
				let mm = myDate.getMonth() + 1
				let dd = String(myDate.getDate() < 10 ? '0' + myDate.getDate() : myDate.getDate())
				let hou = String(myDate.getHours() < 10 ? '0' + myDate.getHours() : myDate.getHours())
				let min = String(myDate.getMinutes() < 10 ? '0' + myDate.getMinutes() : myDate.getMinutes())
				let sec = String(myDate.getSeconds() < 10 ? '0' + myDate.getSeconds() : myDate.getSeconds())
				let weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
				let week = weeks[wk]
				this.nowDate = yy + '-' + mm + '-' + dd
				this.nowTime = hou + ':' + min + ':' + sec
				this.nowWeek = week
			},
			// 选择日期
			change(e) {
				this.systemTime = e.result
				this.nowWeek = e.week
			}
		}
	}
</script>

<style lang="scss" scoped>
	.schedule{
		height: 100vh;
		background-color: #F8F8F8;
		.time {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 100rpx;
			margin: 30rpx 0;
		
			text {
				margin: 0 40rpx;
				font-size: 32rpx;
				color: #333;
				font-weight: 500;
				font-family: PingFang SC;
			}
		
			image {
				width: 32rpx;
				height: 32rpx;
			}
		}
		
		.schedule-header{
			margin-top: 40rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			.hander-left{
				display: flex;
				align-items: center;
				font-size: 28rpx;
				color: #033333;
				margin-right: 80rpx;
				.left-red{
					width: 28rpx;
					height: 28rpx;
					background: #FF5733;
					border-radius: 4rpx;
					margin-right: 16rpx;
				}
			}
			.hander-right{
				display: flex;
				align-items: center;
				font-size: 28rpx;
				color: #033333;
				.right-red{
					width: 28rpx;
					height: 28rpx;
					background: #09BCAF;
					border-radius: 4rpx;
					margin-right: 16rpx;
				}
			}
		}
		
		.schedule-box{
			// display: flex;
			// align-items: flex-start;
			// justify-content: space-between;
			.box-title{
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-radius: 14rpx 0px 0px 0px;
				width: 100%;
				height: 80rpx;
				flex-shrink: 0;
				line-height: 80rpx;
				font-size: 28rpx;
				font-weight: 500;
				
				width: 100%;
				.title-name{
					width: 50%;
					text-align: center;
					color: #00BAAD;
					flex-shrink: 0;
				background: rgba(0,186,173,0.2);
				}
			}
			.inFlex{
				width: 100%;
				display: inline-flex;
				white-space: nowrap;
				width: 100%;
			}
			.box-con{
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: space-between;
				color: #FFFFFF;
				.con-left{
					width: 50%;
					height: 240px;
					background: #FF5733;
					padding: 24rpx;
					flex-shrink: 0;
					.left-title{
						font-size: 28rpx;
						font-weight: 500;
					}
					.left-name{
						display: flex;
						align-items: center;
						justify-content: space-between;
						.name-left{
							display: flex;
							align-items: center;
							font-size: 24rpx;
							image{
								width: 24rpx;
								height: 24rpx;
							}
						}
						.name-right{
							display: flex;
							align-items: center;
							font-size: 24rpx;
							image{
								width: 24rpx;
								height: 24rpx;
							}
						}
					}
				}
			}
		}
	}
</style>
