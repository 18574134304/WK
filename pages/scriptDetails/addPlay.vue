<template>
	<view id="add-play">
		<view class="form">
			<view class="item">
				<text class="label">剧本名称</text>
				<input type="text" placeholder="请输入剧本名称(必填)">
			</view>
			<navigator url="./tags" class="item" hover-class="none">
				<text class="label">剧本标签</text>
				<input type="text" placeholder="请选择剧本标签" disabled>
				<image class="r-icon" src="../../static/index/shopManger/r-icon.png"></image>
			</navigator>
			<view class="item">
				<text class="label">剧本人数</text>
				<radio-group @change="radioChange" class="radio-group">
					<label>
						<view>
							<radio value="1" color="#09BCAF" :checked="flag==1" />
						</view>
						<view>区间人数</view>
					</label>
					<label>
						<view>
							<radio value="2" color="#09BCAF" :checked="flag==2" />
						</view>
						<view>固定人数</view>
					</label>
				</radio-group>
			</view>
			<view class="item">
				<text class="label">剧本人数</text>
				<template v-if="flag==1">
					<input type="text" placeholder="请输入剧本人数">
					<image class="r-icon" src="../../static/index/shopManger/r-icon.png"></image>
				</template>
				<template v-else>
					<view class="ig">
						<view class="im">
							<text>总人数</text>
							<input type="number">
						</view>
						<view class="im">
							<text>男</text>
							<input type="number">
						</view>
						<view class="im">
							<text>女</text>
							<input type="number">
						</view>
					</view>
				</template>
			</view>
			<view class="item">
				<text class="label">发行名称</text>
				<input type="text" placeholder="请输入发行商名称（必填）">
			</view>
			<view class="item" @click="dateFlag=true">
				<text class="label">发行时间</text>
				<input type="text" placeholder="请输入发行时间（例2021-05）（必填）" disabled>
			</view>
			<view class="item">
				<text class="label">剧本价格</text>
				<input type="text" placeholder="请输入剧本价格元/人（选填）">
			</view>
			<view class="tip">*如果未定价，剧本为预告状态</view>
		</view>
		<!-- 日期 -->
		<u-picker confirm-color="#09BCAF" @confirm="dateChange" v-model="dateFlag" title="请选择日期" mode="time"
			:params="DateParams"></u-picker>
		<navigator hover-class="none" url="../index/shopManage/children/shopInfo" class="save">
			<view>下一步</view>
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 区间人数or固定人数
				flag: 1,
				dateFlag:false,
				// 日期配置
				DateParams: {
					year: true,
					month: true,
					day: true,
					hour: false,
					minute: false,
					second: false
				},
			}
		},
		methods: {
			// 选择区间人数or固定人数
			radioChange(e) {
				this.flag = e.detail.value
			},
			// 选择发车日期
			dateChange(e){
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	#add-play {
		width: 100vw;
		height: calc(100vh - 88rpx);
		background-color: #fff;

		.form {
			padding: 0 20rpx;

			.item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 100%;
				height: 104rpx;
				border-bottom: 1rpx solid #eee;

				.label {
					font-size: 28rpx;
					color: #333;
					font-weight: 500;
					width: 140rpx;
					font-family: "PingFang SC";
				}

				input {
					flex: 1;
					color: #333;
					font-size: 28rpx;
					font-weight: 400;
				}

				.r-icon {
					width: 24rpx;
					height: 24rpx;
				}

				.radio-group {
					flex: 1;
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding-right: 120rpx;

					label {
						radio {
							transform: scale(0.8);
						}

						view {
							display: inline-block;
							font-size: 31rpx;
							color: #323233;
						}
					}
				}

				.ig {
					flex: 1;
					display: flex;
					align-items: center;
					justify-content: space-between;

					.im {
						flex: 3;
						display: flex;
						font-size: 28rpx;
						color: #333;

						input {
							// text-align: center;
							font-size: 28rpx;
							color: #666;
							padding-left: 30rpx;
						}
					}

					.im:nth-child(1) {
						flex: 4;
					}
				}
			}

			.tip {
				font-size: 24rpx;
				color: #00AFA2;
				margin-top: 30rpx;
			}
		}

		.save {
			position: absolute;
			bottom: 30rpx;
			left: 0;
			width: 100%;
			height: 88rpx;
			padding: 0 20rpx;
			width: 710rpx;
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
