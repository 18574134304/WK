<template>
	<view class="shop-name">
		<view class="content">
			<view class="item">
				<text class="lable">持卡人姓名</text>
				<input v-model="cardholderName" type="text" value="" placeholder="请输入真实姓名" />
			</view>
			<view class="item">
				<text class="lable">银行名称</text>
				<input v-model="backCard" type="text" value="" placeholder="请输入银行名称" />
			</view>
			<view class="item">
				<text class="lable">银行卡号</text>
				<input v-model="backCardNo" type="number" value="" placeholder="请输入银行卡号" />
			</view>
			<view class="item">
				<text class="lable">开户行</text>
				<input v-model="backOfDeposit" type="text" value="" placeholder="请输入开户行" />
			</view>
		</view>
		<view class="save">
			<view @click="submitBack">保存</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cardholderName: '',  // 持卡人姓名
				backCard: '',  // 银行名称
				backCardNo: '',  // 银行卡号
				backOfDeposit: ''  // 开户行
			}
		},
		mounted() {
				this.getBackInfo()
		},
		methods:{
			async getBackInfo() {
				let { data: res } = await this.$request.request({
					url: '/v1/user/account/queryUserAccount',
					method: 'post'
				})
				this.backCard = res.data.bankName
				this.cardholderName = res.data.cardName
				this.backCardNo = res.data.cardNum
				this.backOfDeposit = res.data.openingBank
			},
			
			async submitBack() {
				if(this.cardholderName == '') {
					uni.showToast({
						title: '请输入持卡人姓名',
						icon: 'none'
					})
					return
				}
				if(this.backCard == '') {
					uni.showToast({
						title: '请输入银行名称',
						icon: 'none'
					})
					return
				}
				if(this.backCardNo == '') {
					uni.showToast({
						title: '请输入银行卡号',
						icon: 'none'
					})
					return
				}
				if(this.backOfDeposit == '') {
					uni.showToast({
						title: '请输入开户行',
						icon: 'none'
					})
					return
				}
				let {data: res} = await this.$request.request({
					url: '/v1/user/account/addBankCard',
					method: 'post',
					data: {
						bankName: this.backCard,
						cardName: this.cardholderName,
						cardNum: this.backCardNo,
						openingBank: this.backOfDeposit
					}
				})
				if(res.code == 1) {
					this.getBackInfo()
				}
				uni.showToast({
					title: res.msg,
					icon: 'none'
				})
				this.backCard = ''
				this.cardholderName = ''
				this.backCardNo = ''
				this.backOfDeposit = ''
			}
		}
	}
</script>

<style lang="scss" scoped>
	.shop-name {
		position: relative;
		width: 100vw;
		height: calc(100vh - 88rpx);
		background-color: #fff;
	
		.content {
			box-sizing: border-box;
			width: 100%;
			height: 100%;
	
			.item {
				box-sizing: border-box;
				display: flex;
				align-items: center;
				width: 750rpx;
				height: 104rpx;
				padding: 0 30rpx;
				border-bottom: 1rpx solid #eee;
				.lable {
					width: 160rpx;
					font-size: 28rpx;
					color: #333333;
					font-weight: 500;
				}
				input{
					margin-left: 30rpx;
					font-size: 28rpx;
					flex: 1;
				}
			}
		}
	
		.save {
			position: absolute;
			bottom: 30rpx;
			left: 0;
			width: 100%;
			height: 88rpx;
			padding: 0 20rpx;
	
			view {
				width: 100%;
				height: 88rpx;
				line-height: 88rpx;
				background-color: #09BCAF;
				text-align: center;
				border-radius: 750rpx;
				margin: 0 auto;
				color: #fff;
				font-size: 28rpx;
			}
		}
	}
</style>
