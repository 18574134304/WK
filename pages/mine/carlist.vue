<template>
	<view class="car-list">
		<title-block></title-block>
		<view class="car-header">
			<image @click="toBack" class="header-img" src="../../static/mine/zuo1.png" mode=""></image>
			<view class="header-right">
				<image src="../../static/mine/search.png" mode=""></image>
				<input v-model="scriptName" @input="searchInput" type="text" value="" placeholder="请输入剧本名称" />
			</view>
		</view>
		
		<view class="car-tab">
			<view :class="[tabIndex == index ? 'tab-check' : '']" @click="tabClick(index,item.id)" class="tab-item" v-for="(item,index) in tabList">{{ item.name }}</view>
		</view>
		<view class="tab-jump" v-if="tabIndex == 1">
			<view class="tab-jump-box">
				<view class="tab-jump-left" :class="[jumpName == '满员' ? 'jump-bg' : '']" @click="jump('满员')">已满员</view>
				<view class="tab-jump-right" :class="[jumpName == '跳车' ? 'jump-bg' : '']" @click="jump('跳车')">有跳车</view>
			</view>
		</view>
		
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
							{{ item.openCarDate.substring(0,10)}}{{item.openCarTime }}
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
					<view class="jiesan" v-if="item.carTeamType == 2 || item.carTeamType == 4" @click="dissolutionCar(item.id)">解散车队</view>
					<view class="ok" v-if="item.carTeamType == 1" @click="dShow = true;lockCarId = item.id">锁车</view>
					<view class="ok" v-if="item.carTeamType == 1" @click="parking(item.id)">车位管理</view>
					<view class="ok" v-if="item.carTeamType == 1" @click="cTipShow = true,lockCarId = item.id">修改宣传语</view>
					<view class="jiesan" v-if="item.carTeamType == 3 || item.carTeamType ==9" @click="deleteOrder(item.id)">删除车队</view>
					<view class="ok" v-if="item.carTeamType == 2 || item.carTeamType == 4" @click="carSubmit(item.id)">确认完成</view>
					<navigator :url="'orderDetauls?id=' + item.id" v-if="item.carTeamType == 3 || item.carTeamType ==9"><view class="ok">查看详情</view></navigator>
				</view>
			</view>
		</view>
		
		<!-- 锁车弹框 -->
		<u-modal v-model="dShow" :show-title="false" @confirm="lockCar" @cancel="dShow = false" :show-cancel-button="true"
			confirm-color="#09BCAF">
			<view class="slot-content">
				<rich-text :nodes="content"></rich-text>
			</view>
		</u-modal>
		
		<!-- 修改车队宣传语弹框 -->
		<u-modal v-model="cTipShow" title="车队宣传语" @confirm="carConfirm" @cancel="cTipShow = false;carValue = ''" :show-cancel-button="true"
			confirm-color="#09BCAF">
			<view class="text-box">
				<view class="textarea">
					<textarea v-model="carValue" placeholder="请输入车队宣传语" maxlength="160" />
					<text class="length">{{carValue.length}}/160</text>
				</view>
			</view>
		</u-modal>
		
		
		<!-- 车位管理弹框 -->
		<u-modal v-if="cShow" v-model="cShow" :show-title="false" @confirm="confirm(1)" @cancel="cancel" :show-cancel-button="true"
			confirm-color="#09BCAF">
			<view class="slot-content car-box">
				<view class="car-icon">
					<image src="@/static/index/car-icon.png"></image>
				</view>
				<view class="cb">
					<view class="cb-box">
						<view class="c-item"  v-for="item in parkingList">
							<image :src="item.img" @click="imgStatusChange(item.status)"></image>
						</view>
						<!-- <view class="c-item" @click="lockFlag=true">
							<image src="@/static/index/Unlock.png"></image>
						</view> -->
						<view class="c-item" @click="unLockFlag=true" v-for="item in lockNum">
							<image src="@/static/index/lock.png"></image>
						</view>
						<!-- <view class="c-item" v-if="peopleNum != parkingList.length">
							<image src="@/static/index/add-icon.png"></image>
						</view> -->
						
						
					</view>
				</view>
			</view>
		</u-modal>
		<!-- 锁定车位弹框 -->
		<u-modal v-model="lockFlag" :show-title="false" @confirm="confirm(1)" @cancel="cancel"
			:show-cancel-button="true" confirm-color="#09BCAF" content="是否锁定车位？"></u-modal>
		<!-- 解锁车位弹框 -->
		<u-modal v-model="unLockFlag" :show-title="false" @confirm="confirm(1)" @cancel="cancel"
			:show-cancel-button="true" confirm-color="#09BCAF" content="是否解锁车位？"></u-modal>
		
		
	</view>
</template>

<script>
	export default{
		data() {
			return{
				tabList: [
					{
						name: '全部',
						id: 1
					},
					{
						name:'已锁车',
						id: 2
					},
					{
						name: '已完成',
						id: 3
					},
					{
						name: '已取消',
						id: 4
					}
				],
				tabIndex: 0,
				jumpName: '满员',
				tabData:[],
				type: 1,
				scriptName: '',
				timer: null,
				carTeamCancelReason: '解散车队',
				cShow: false,  // 车位管理flag
				// 锁定车位弹窗
				lockFlag: false,
				// 解锁车位弹窗
				unLockFlag: false,
				// 锁车flag
				dShow: false,
				// 锁车id
				lockCarId: '',
				// 锁车 提示文本
				content: `锁车后该车队会自动动成单<br>是否确认锁车？`,
				// 车队宣传语弹窗
				cTipShow: false,
				// 车队宣传语
				carValue: '',
				peopleNum: 0,   // 车位管理头像占位
				lockNum: 0,  // 锁子数量
			}
		},
		mounted() {
			this.getDataList()
		},
		methods: {
			// input输入时事件
			searchInput() {
				clearTimeout(this.timer)
				this.timer = setTimeout(() => {
					this.getDataList()
				},500)
			},
			// tab切换
			tabClick(index,id) {
				this.tabIndex = index
				this.type = id
				this.getDataList()
			},
			// 满员跳车切换
			jump(name) {
				this.jumpName = name
				if(name == '跳车') {
					this.type = 5
				}else {
					this.type = 2
				}
				this.getDataList()
			},
			async getDataList() {
				let {data: res} = await this.$request.request({
					method: 'post',
					url: '/v1/carTeam/queryTeamOrderApplet',
					data: {
						type: this.type,
						searchWord: this.scriptName
					}
				})
				if(res.code == 1) {
					this.tabData = res.data
				}else {
					uni.showToast({
						title: res.msg,
						icon: 'none'
					})
				}
			},
			// 车位管理
			parking(id) {
				this.lockCarId = id
				this.getApplyUserImg()
			},
			
			// 锁车
			async lockCar() {
				let {data: res} = await this.$request.request({
					url: '/v1/carTeam/immeCarTeam',
					method: 'post',
					data: {
						carTeamId: this.lockCarId
					}
				})
				this.dShow = false
				this.getDataList()
				uni.showToast({
					title: res.msg,
					icon: 'none'
				})
			},
			// 修改宣传语
			async carConfirm() {
				if(this.carValue == '') {
					uni.showToast({
						title: '请输入宣传语',
						icon: 'none'
					})
					this.cTipShow = true
					return
				}
				let {data: res} = await this.$request.request({
					url: '/v1/carTeam/editCarTeamTagline',
					method: 'post',
					data: {
						id: this.lockCarId,
						carTeamTagline: this.carValue
					}
				})
				this.carValue == ''
				this.cTipShow = false
				uni.showToast({
					title: res.msg,
					icon: 'none'
				})
				this.getDataList()
			},
			
			
			// 获取车队报名人员头像
			async getApplyUserImg() {
				let {data: res} = await this.$request.request({
					url: '/v1/carTeamSpell/getApplyUserImg',
					method: 'get',
					data: {
						id: this.lockCarId
					}
				})
				
				this.parkingList = res.data
				if(this.parkingList || this.parkingList.length > 0) {
					this.cShow = true
				}else {
					uni.showToast({
						title: '暂无车位',
						icon: 'none'
					})
				}
			},
			
			// 车位管理点击头像切换状态
			async imgStatusChange(status) {
				let type = 0
				if(status == 1) {
					return
				}
				if(status == 3) {
					type = 1
				}
				if(status == 2) {
					type = 2
				}
				let {data: res} = await this.$request.request({
					url: '/v1/carTeam/lockCarTeam',
					method: 'post',
					data: {
						carTeamId: this.lockCarId,
						lockType: type
					}
				})
				if(res.code == 1) {
					uni.showToast({
						title: res.msg,
						icon: 'none'
					})
					this.cShow = false
				}else {
					uni.showToast({
						title: res.msg,
						icon: 'none'
					})
					this.cShow = false
				}
			},
			
			
			
			// 解散车队
			async dissolutionCar(id) {
				let {data: res} = await this.$request.request({
					url: '/v1/carTeam/dissCarTeam',
					method: 'post',
					data: {
						carTeamCancelReason: this.carTeamCancelReason,
						carTeamId: id
					}
				})
				if(res.code == 1) {
					uni.showToast({
						title: '解散成功',
						icon: 'none'
					})
					this.getDataList()
				}else {
					uni.showToast({
						title: res.msg,
						icon: 'none'
					})
				}
			},
			// 确认完成
			async carSubmit(id) {
				let {data: res} = await this.$request.request({
					url: '/v1/carTeam/finishOrder',
					method: 'post',
					data: {
						carTeamId: id
					}
				})
				if(res.code == 1) {
					uni.showToast({
						title: res.msg,
						icon: 'none'
					})
					this.getDataList()
				}else {
					uni.showToast({
						title: res.msg,
						icon: 'none'
					})
				}
			},
			// 删除订单
			async deleteOrder(id) {
				let {data: res} = await this.$request.request({
					url: '/v1/carTeam/deleteOrder',
					method: 'post',
					data: {
						carTeamId: id
					}
				})
				if(res.code == 1) {
					uni.showToast({
						title: res.msg,
						icon: 'none'
					})
					this.getDataList()
				}else {
					uni.showToast({
						title: res.msg,
						icon: 'none'
					})
				}
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
		.slot-content {
			padding: 48rpx;
			font-size: 30rpx;
			text-align: center;
			color: #606266;
		}
		// 车队宣传语
		.text-box {
			padding: 30rpx 30rpx 0;
			font-size: 28rpx;
			color: #666;
		
			.textarea {
				position: relative;
				display: block;
				box-sizing: border-box;
				padding: 20rpx 20rpx 60rpx;
				border: 1rpx solid #eee;
		
				textarea {
					font-size: 28rpx;
					width: auto;
				}
			}
		
			.length {
				position: absolute;
				bottom: 20rpx;
				right: 20rpx;
			}
		}
		// 车队管理
		.car-box {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 20rpx;
		
			.car-icon {
				width: 50rpx;
				height: 48rpx;
				margin-right: 20rpx;
		
				image {
					width: 100%;
					height: 100%;
				}
			}
		
			.cb {
				flex: 1;
		
				.cb-box {
					display: flex;
					align-items: center;
					flex-wrap: wrap;
					width: 100%;
					// justify-content: space-between;
		
					.c-item {
						width: calc((100% - 60rpx) / 4);
						height: 88rpx;
						border-radius: 50%;
						display: flex;
						align-items: center;
						image {
							width: 88rpx;
							height: 88rpx;
							border-radius: 50%;
							// margin-right: 10rpx;
						}
					}
		
					.c-item:nth-child(n+5) {
						margin-top: 20rpx;
					}
				}
			}
		}
	}
	
</style>
