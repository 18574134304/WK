<template>
	<view id="content">
		<title-block color="#fff"></title-block>
		<!-- 头部搜索框 -->
		<view class="header">
			<view class="search">
				<image src="../../static/content/search-icon.png"></image>
				<input type="text" value="" placeholder="请输入剧本名称" />
			</view>
			<view class="group">
				<navigator url="../index/schedule" hover-class="none">
					<image src="../../static/index/h-r.png"></image>
				</navigator>
				<navigator url="../index/newTeam" hover-class="none">
					<image src="../../static/index/h-a.png"></image>
				</navigator>
			</view>
		</view>
		<!-- 选择时间 -->
		<view class="time" @click="show=true">
			<image src="../../static/content/time-l.png"></image>
			<text space="nbsp">{{systemTime +'  '+ nowWeek}}</text>
			<image src="../../static/content/time-r.png"></image>
		</view>
		<u-calendar id="content-calendar" btn-type="success" month-arrow-color="#00BAAD" active-bg-color="#00BAAD"
			:change-year="false" v-model="show" :mode="mode" @change="change"></u-calendar>

		<!-- 车队分类 -->
		<tab-box @tabClick="tabClick" :active="active"></tab-box>

		<!-- 车队列表 -->
		<view class="list">
			<list-item :num='2' :show2="show2" :pShow="pShow" @close="pShow=false" @confirm="show2=false" @goDetail="goDetail">
				<view id="btn-group" slot="btn" v-if="active==1" :key="active">
					<view class="btn" @click="pShow=true">解散</view>
					<view class="btn" @click="show2=true">确认完成</view>
				</view>
			</list-item>
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
		onLoad() {
			let nowDate = new Date()
			let date = {
				year: nowDate.getFullYear(),
				month: nowDate.getMonth() + 1,
				date: nowDate.getDate()
			}
			this.systemTime = date.year + '-' + date.month + '-' + date.date
			this.setNowTimes()
		},
		data() {
			return {
				// 确认弹窗
				show2: false,
				// 解散弹窗
				pShow: false,
				// 车队选中
				active: 0,
				show: false,
				mode: 'date',
				// 日期
				systemTime: '',
				// 星期几
				nowWeek: ''
			}
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
			// 车队分类点击事件
			tabClick(index) {
				this.active = index
			},
			// 选择日期
			change(e) {
				this.systemTime = e.result
				this.nowWeek = e.week
			},
			// 查看详情
			goDetail(){
				uni.navigateTo({
					url:"../scriptDetails/details"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	#content {
		.header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 88rpx;
			padding-left: 40rpx;
			padding-right: 20rpx;
			background-color: #fff;

			.search {
				position: relative;
				height: 60rpx;
				flex: 1;

				image {
					position: absolute;
					top: 50%;
					left: 20rpx;
					transform: translateY(-50%);
					width: 30rpx;
					height: 30rpx;
				}

				input {
					padding-left: 60rpx;
					padding-right: 30rpx;
					height: 100%;
					font-size: 26rpx;
					color: #A7A7A7;
					background-color: #F1F1F1;
					border-radius: 80rpx;
				}
			}

			.group {
				height: 100%;
				display: flex;
				align-items: center;
				padding-left: 20rpx;

				navigator {
					width: 40rpx;
					height: 40rpx;
					margin-left: 20rpx;
				}

				image {
					width: 100%;
					height: 100%;
				}
			}
		}

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
