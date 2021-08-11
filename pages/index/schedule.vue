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
						<view class="con-title">{{ item.roomName }}</view>
						<view @click="remarkClick(items.id)" class="con-box" v-for="items in item.carTeamVOList" :style="[{background:(items.carTeamType==2?'#FF5733': '#09BCAF')}]">
							<view class="box-title">{{ items.scenName }}</view>
							<view class="box-name">
								<view class="name-left">
									<image src="../../static/index/shcihi1.png" mode=""></image>
									<text>{{ items.peopleNum }}</text>
								</view>
								<view class="name-right">
									<image src="../../static/index/shcihi2.png" mode=""></image>
									<text>{{ items.dmNickName }}</text>
								</view>
							</view>
							<view class="box-time">
								<image src="../../static/index/shcihi3.png" mode=""></image>
								<text>{{ items.openCarDate }}</text>
							</view>
							<view class="con-roomk">
								<image src="../../static/index/shcihi4.png" mode=""></image>
								<text>{{ items.remarks }}…</text>
							</view>
						</view>
				</view>
			</view>
			
			
		</scroll-view>
		
		
		<!-- 编辑备注 -->
		<u-modal v-model="remarkShow" title="排班编辑" :show-cancel-button="true" @confirm="remarkConfirm">
			<view style="padding: 44rpx 52rpx 0">
				<textarea style="width: 100%;" v-model="remarkText" value="" placeholder="这是备注这是备注这是备注" />
			</view>
		</u-modal>
		
		
		
		<!-- 时间弹框 -->
		<!-- <u-calendar id="content-calendar" btn-type="success" month-arrow-color="#00BAAD" active-bg-color="#00BAAD" :change-year="false"
			v-model="show" :mode="mode" @change="change"></u-calendar> -->
			<u-picker :safe-area-inset-bottom="true" v-model="show" mode="time" @confirm="change"></u-picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				remarkText: '',
				remarkShow: false, // 编辑备注控制
				// 日期
				systemTime: '',
				// 星期几
				nowWeek: '',
				show: false,
				mode: 'date',
				list: []
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
			// 编辑备注
			remarkClick(id) {
				this.remarkShow = true
				this.textId = id
			},
			async remarkConfirm() {
				if(this.remarkText == '') {
					uni.showToast({
						title: '请输入备注',
						icon: 'none'
					})
					this.remarkShow = true
					return
				}
				let {data: res} = await this.$request.request({
					method: 'post',
					url: '/v1/room/editCarTeamRemarks',
					data: {
						carTeamId: this.textId,
						remarks: this.remarkText
					}
				})
				if(res.code == 1) {
					uni.showToast({
						title: res.msg,
						icon: 'none'
					})
					this.getData()
					this.remarkShow = false
				}else {
					uni.showToast({
						title: '操作失败',
						icon: 'none'
					})
					this.remarkShow = false
				}
				
			},
			async getData() {
				let {data: res} = await this.$request.request({
					method: 'get',
					url: '/v1/room/queryRoomCatTeamList',
					data: {
						date: this.systemTime
						// date: '2021-8-9'
					}
				})
				if(res.code == 1) {
					this.list = res.data
				}else {
					uni.showToast({
						title: '数据获取失败',
						icon: 'none'
					})
				}
			},
			// 计算星期
			setNowTimes() {
				let myDate = new Date()
				// console.log(myDate)  
				let wk = myDate.getDay()
				console.log(wk)
				let yy = String(myDate.getFullYear())
				let mm = myDate.getMonth() + 1
				// let dd = String(myDate.getDate() < 10 ? '0' + myDate.getDate() : myDate.getDate())
				// let hou = String(myDate.getHours() < 10 ? '0' + myDate.getHours() : myDate.getHours())
				// let min = String(myDate.getMinutes() < 10 ? '0' + myDate.getMinutes() : myDate.getMinutes())
				// let sec = String(myDate.getSeconds() < 10 ? '0' + myDate.getSeconds() : myDate.getSeconds())
				let weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
				let week = weeks[wk]
				// this.nowDate = yy + '-' + mm + '-' + dd
				// this.nowTime = hou + ':' + min + ':' + sec
				this.nowWeek = week
			},
			// 选择日期
			change(e) {
				console.log(e)
				let myDate = new Date()
				let weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
				console.log(e.day)
				// let wk = myDate.getDay()
				this.nowDate = e.year + '-' + e.month + '-' + e.day
				this.systemTime = e.year + '-' + e.month + '-' + e.day
				this.nowWeek = '星期' + ("日一二三四五六").charAt(new Date(this.systemTime).getDay())
				this.getData()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.schedule{
		// height: 100%;
		background-color: #F8F8F8;
		padding-bottom: constant(safe-area-inset-bottom);  
		padding-bottom: env(safe-area-inset-bottom);
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
			margin-top: 40rpx;
			.box-con{
				min-width: 50%;
				width: 50%;
				.con-title{
					width: 100%;
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
					width: 100%;
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
						width: 100%;
						image{
							width: 24rpx;
							height: 24rpx;
							margin-right: 10rpx;
							flex-shrink: 0;
						}
					}
					.con-roomk{
						display: flex;
						align-items: center;
						font-size: 24rpx;
						color: #FFFFFF;
						width: 100%;
						overflow:hidden;
						text-overflow:ellipsis;
						white-space:nowrap;
						
						z-index: 99;
						image{
							width: 24rpx;
							height: 24rpx;
							margin-right: 10rpx;
							flex-shrink: 0;
						}
						text{
							display: block;
							overflow:hidden;
							text-overflow:ellipsis;
							white-space:nowrap;
							width: 100%;
							// letter-spacing: 1rpx;
						}
					}
				}
			}
		}
	}
</style>
