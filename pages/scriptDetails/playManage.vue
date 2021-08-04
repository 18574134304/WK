<template>
	<view id="checkPlay">
		<title-block color="#fff"></title-block>
		<!-- 头部搜索框 -->
		<view class="header">
			<image src="../../static/index/back.png" class="back" @click="back"></image>
			<view class="search">
				<image src="../../static/content/search-icon.png"></image>
				<input type="text" value="" placeholder="请输入剧本名称/发行商/剧本类型" />
			</view>
		</view>
		<view class="people">
			<view class="item" @click="active=null" :class="{'item1 active':active===null}">不限</view>
			<view class="item" @click="active=index" :class="{'active':active===index}"
				v-for="(item,index) in peopleList" :key="index">{{item}}</view>
		</view>
		<view class="l-title">
			<view class="type">
				<view class="t-item" :class="{active:typeActive===1}" @click="typeClick(1)">平台剧本库</view>
				<view class="t-item" :class="{active:typeActive===2}" @click="typeClick(2)">店铺剧本库</view>
			</view>
			<view class="right">
				<text>筛选</text>
				<image src="../../static/index/checkPlay/sx-icon.png"></image>
			</view>
		</view>
		<view class="j-list">
			<view class="tab">
				<view class="tab-item" :class="{active:index===tabActive}" v-for="(item,index) in tabList" :key="index"
					@click="tabActive=index">{{item}}</view>
			</view>
			<jb-item>
				<view class="btn-group" slot="btn-Group">
					<view class="tn t1" v-if="typeActive===1" @click="scClick('收录剧本')">
						<image src="../../static/scriptDetails/sc-icon.png"></image>
						<text>收录</text>
					</view>
					<!-- <view class="tn t1" v-if="typeActive===1" @click="scClick('上架剧本')">
						<image src="../../static/scriptDetails/upload-icon.png"></image>
						<text>上架</text>
					</view> -->
					<!-- <view class="tn t2" @click="downFlag=true" v-if="typeActive===1" >
						<image src="../../static/scriptDetails/down-icon.png"></image>
						<text>下架</text>
					</view> -->
					<view class="tn t3" v-else>
						<view class="t-i1" @click.stop="scClick('上架剧本')">
							<image src="../../static/scriptDetails/upload-icon.png"></image>
							<text>上架</text>
						</view>
						<view class="t-i2">
							<image src="../../static/scriptDetails/edit-icon.png"></image>
							<text>编辑</text>
						</view>
					</view>
				</view>
			</jb-item>
		</view>
		
		<!-- 收录、上架、编辑剧本弹框 -->
		<u-modal width="80%" v-model="scFlag" title="收录剧本" :show-cancel-button="true"
			confirm-color="#09BCAF">
			<view class="text-box">
				<view class="tx-item">
					<text class="label">剧本名称：</text>
					<text class="val">木夕僧之戏</text>
				</view>
				<view class="tx-item">
					<text class="label">剧本价格：</text>
					<input class="val" auto-focus="true" type="text" placeholder="请输入剧本价格/人" />
				</view>
			</view>
		</u-modal>
		
		<!-- 下架剧本 -->
		<u-modal v-model="downFlag" :show-title="false" @confirm="downConfirm"
			:show-cancel-button="true" confirm-color="#09BCAF">
			<view class="slot-content">
				<rich-text :nodes="content"></rich-text>
			</view>
		</u-modal>
		
		<u-modal v-model="downErrFlag" :show-title="false" confirm-color="#09BCAF" content="该剧本有参与的车队无法进行下架"></u-modal>
		
	</view>
</template>

<script>
	import JbItem from '../../components/JbItem.vue'
	export default {
		components: {
			JbItem
		},
		data() {
			return {
				// 人数
				active: null,
				peopleList: ['<=4人', '5人', '6人', '7人', '8人', '9人', '10人', '10人+'],
				typeActive: 1, //分类
				// 平台剧本下的分类
				platformTabList: ['全部', '已收录', '未收录'],
				// 平台剧本下的分类 选中
				platActive: 0,
				// 店铺剧本下的分类
				shopTabList: ['全部', '已定价', '未定价'],
				// 平台剧本下的分类 选中
				shopActive: 0,
				// 收录剧本
				scFlag:false,
				// 弹窗标题
				scContent:'收录剧本',
				// 下架弹窗
				downFlag:false,
				// 下架弹窗 提示文本
				content: `是否确认下架该剧本<br>下架后用户将无法在本地看到该剧本`,
				// 有车队无法下架弹窗
				downErrFlag:false
			}
		},
		methods: {
			// 平台 店铺剧本
			typeClick(active) {
				this.typeActive = active
			},
			// 点击弹起收录剧本弹窗
			scClick(content){
				this.scFlag = true
				this.scContent = content
			},
			// 下架剧本 弹窗确定
			downConfirm(){
				this.downErrFlag = true
			}
		},
		computed: {
			tabList() {
				this.shopActive = 0
				this.platActive = 0
				return this.typeActive === 1 ? this.platformTabList : this.shopTabList
			},
			tabActive: {
				get() {
					return this.typeActive === 1 ? this.platActive : this.shopActive
				},
				set(newVal) {
					if (this.typeActive === 1) {
						this.platActive = newVal
					} else {
						this.shopActive = newVal
					}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	$padding:0 20rpx 0 30rpx;

	#checkPlay {

		.header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 88rpx;
			padding: $padding;
			background-color: #fff;

			.back {
				width: 20rpx;
				height: 37rpx;
				margin-right: 30rpx;
			}

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
		}

		.people {
			box-sizing: border-box;
			display: flex;
			align-items: center;
			padding: $padding;
			width: 100%;
			height: 107rpx;
			background-color: #fff;

			.item {
				color: #111;
				font-size: 24rpx;
				flex-grow: 1;
			}

			.item1 {
				// flex-grow: 0;
			}

			.active {
				width: 80rpx;
				height: 47rpx;
				border-radius: 100rpx;
				background: rgba(0, 186, 173, 0.2);
				text-align: center;
				line-height: 47rpx;
				color: #00BAAD;
				margin-right: 20rpx;
			}
		}

		.l-title {
			padding: $padding;
			padding-bottom: 26rpx;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			background-color: #fff;

			.type {
				color: #333;
				font-size: 32rpx;
				font-weight: 600;

				.t-item {
					display: inline-block;
					font-size: 32rpx;
					color: #666;
					font-weight: 400;
				}

				.t-item:nth-child(2) {
					margin-left: 40rpx;
				}

				.t-item.active {
					color: #09BCAF;
					font-weight: 600;
				}
			}

			.right {
				display: flex;
				align-items: center;
				color: #333;
				font-size: 24rpx;

				image {
					width: 38rpx;
					height: 38rpx;
					margin-left: 10rpx;
				}
			}
		}

		.j-list {
			width: 100%;

			.tab {
				box-sizing: content-box;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 20rpx 30rpx 0;
				height: 64rpx;
				background: #F1F1F1;

				.tab-item {
					width: 228rpx;
					height: 64rpx;
					text-align: center;
					line-height: 64rpx;
					color: #333;
					font-size: 28rpx;
					font-weight: 500;
					border-radius: 228rpx;
				}

				.tab-item.active {
					background-color: #fff;
				}
			}

			.btn-group {
				width: 100%;
				height: 80rpx;

				.tn {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 100%;
					height: 80rpx;
					border-radius: 0px 0px 14rpx 14rpx;

					image {
						width: 32rpx;
						height: 32rpx;
						margin-right: 16rpx;
					}

					text {
						font-size: 28rpx;
						color: #fff;
					}
				}

				.t1 {
					background-color: #00BAAD;
				}

				.t2 {
					background-color: #FF5733;
				}

				.t3 {
					height: 80rpx;

					.t-i1,
					.t-i2 {
						height: 80rpx;
						flex: 1;
						display: flex;
						justify-content: center;
						align-items: center;
					}

					.t-i1 {
						background-color: #00BAAD;
						border-bottom-left-radius: 16rpx;
					}

					.t-i2 {
						background-color: #FF5733;
						border-bottom-right-radius: 16rpx;
					}
				}
			}
		}
	}
	
		.slot-content {
			padding: 48rpx 0;
			font-size: 32rpx;
			text-align: center;
			color: #333;
			font-weight: 500;
		}
	.text-box {
		padding: 30rpx 30rpx 0;
		font-size: 28rpx;
		color: #666;
		.tx-item{
			display: flex;
			width: 100%;
			height: 45rpx;
			justify-content: space-between;
			align-items: center;
			color: #333;
			font-size: 32rpx;
			font-family: "苹方-简";
			font-weight: normal;
			margin-bottom: 20rpx;
			.val{
				flex: 1;
			}
		}
	}
</style>
