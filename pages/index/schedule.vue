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
					<view class="box-con" v-for="item in list">
						<view class="con-title">{{ item.title }}</view>
						<view class="con-box" v-for="items in item.children">
							<view class="box-title">{{ items.name }}</view>
							<view class="box-name">
								<view class="name-left">
									<image src="../../static/index/shcihi1.png" mode=""></image>
									<text>{{ items.nameNum }}</text>
								</view>
								<view class="name-right">
									<image src="../../static/index/shcihi2.png" mode=""></image>
									<text>{{ items.dmName }}</text>
								</view>
							</view>
							<view class="box-time">
								<image src="../../static/index/shcihi3.png" mode=""></image>
								<text>{{ items.time }}</text>
							</view>
							<view class="con-roomk">
								<image src="../../static/index/shcihi4.png" mode=""></image>
								<text>{{ items.roomk }}…</text>
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
				list: [
					{
						title: '包厢名称',
						children: [
							{
								name: '前男友的100种死法',
								nameNum: 5,
								dmName: 'FFF',
								time: '2021-02-21  14:00',
								roomk: '这是备注这是备注这…',
								status: 1
							}
						]
					},
					{
						title: '包厢名称',
						children: [
							{
								name: '前男友的100种死法',
								nameNum: 5,
								dmName: 'FFF',
								time: '2021-02-21  14:00',
								roomk: '这是备注这是备注这…',
								status: 2
							}
						]
					},
					{
						title: '包厢名称',
						children: [
							{
								name: '前男友的100种死法',
								nameNum: 5,
								dmName: 'FFF',
								time: '2021-02-21  14:00',
								roomk: '这是备注这是备注这…',
								status: 1
							}
						]
					},
					{
						title: '包厢名称',
						children: [
							{
								name: '前男友的100种死法',
								nameNum: 5,
								dmName: 'FFF',
								time: '2021-02-21  14:00',
								roomk: '这是备注这是备注这…',
								status: 2
							}
						]
					}
				]
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
			this.getData()
		},
		methods: {
			async getData() {
				let res = await this.$request.request({
					method: 'get',
					url: '/v1/room/queryRoomCatTeamList',
					data: {
						date: this.systemTime
					}
				})
				console.log(res)
			},
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
			display: flex;
			align-items: center;
			margin-top: 40rpx;
			.box-con{
				width: 50%;
				.con-title{
					height: 80rpx;
					background-color: rgba(186,173,255,.2);
					line-height: 80rpx;
					font-size: 28rpx;
					font-weight: 500;
					color: #00BAAD;
					text-align: center;
				}
				.con-title:first-child{
					border-radius: 14rpx 0rpx 0rpx 0rpx;
				}
				.con-title:last-child{
					border-radius: 0rpx 14rpx 0rpx 0rpx;
				}
				.con-box{
					padding: 24rpx 0 21rpx 24rpx;
					background-color: #FF5733;
					.box-title{
						font-size: 28rpx;
						font-weight: 500;
						color: #FFFFFF;
						margin-bottom: 20rpx;
					}
					.box-name{
						display: flex;
						align-items: center;
						justify-content: space-between;
						width: 60%;
						margin-bottom: 16rpx;
						.name-left{
							display: flex;
							align-items: center;
							font-size: 24rpx;
							color: #FFFFFF;
							image{
								width: 24rpx;
								height: 24rpx;
								margin-right: 10rpx;
							}
						}
						.name-right{
							display: flex;
							align-items: center;
							font-size: 24rpx;
							color: #FFFFFF;
							image{
								width: 24rpx;
								height: 24rpx;
								margin-right: 10rpx;
							}
						}
					}
					.box-time{
						display: flex;
						align-items: center;
						font-size: 24rpx;
						color: #FFFFFF;
						margin-bottom: 16rpx;
						image{
							width: 24rpx;
							height: 24rpx;
							margin-right: 10rpx;
						}
					}
					.con-roomk{
						display: flex;
						align-items: center;
						font-size: 24rpx;
						color: #FFFFFF;
						width: 80%;
						overflow:hidden;
						text-overflow:ellipsis;
						white-space:nowrap;
						z-index: 99;
						image{
							width: 24rpx;
							height: 24rpx;
							margin-right: 10rpx;
							z-index: 99;
						}
						text{
							letter-spacing: 1rpx;
						}
					}
				}
			}
		}
	}
</style>
