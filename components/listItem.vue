<template>
	<view>
		<view class="item" v-for="item in num">
			<view class="info">
				<view class="book-img">
					<image class="avatar" src="@/static/index/jb.png"></image>
				</view>
				<view class="r">
					<view class="title">
						<text>姜子牙</text>
						<image class="icon" src="@/static/index/zf-icon.png"></image>
					</view>
					<view class="row r-row1">
						<image src="@/static/index/l1.png"></image>
						<text class="ellipsis-1">这是房间名称</text>
					</view>
					<view class="row r-row2">
						<view class="left">
							<image src="@/static/index/l2.png"></image>
							<text>2021-02-21 14:00</text>
						</view>
						<view class="right">
							<image src="@/static/index/l4.png"></image>
							<text>FFF</text>
						</view>
					</view>
					<view class="row r-row1">
						<image src="@/static/index/l3.png"></image>
						<text class="ellipsis-1">剧本《姜子牙》6=1</text>
					</view>
				</view>
			</view>

			<slot name="btn">
				<view class="btn-group">
					<view class="btn" @click="show1=true">解散</view>
					<view class="btn" @click="dShow=true">锁车</view>
					<view class="btn" @click="cShow=true">车位管理</view>
					<view class="btn" @click="cTipShow=true">修改宣传语</view>
				</view>
			</slot>
		</view>
		<!-- 解散弹框 -->
		<u-modal v-model="show1" :show-title="false" @confirm="confirm(1)" @cancel="cancel" :show-cancel-button="true"
			confirm-color="#09BCAF" content="是否确认解散当前车队？"></u-modal>
		<!-- 锁车弹框 -->
		<u-modal v-model="dShow" :show-title="false" @confirm="confirm(1)" @cancel="cancel" :show-cancel-button="true"
			confirm-color="#09BCAF">
			<view class="slot-content">
				<rich-text :nodes="content"></rich-text>
			</view>
		</u-modal>
		<!-- 车队管理框 -->
		<u-modal v-model="cShow" :show-title="false" @confirm="confirm(1)" @cancel="cancel" :show-cancel-button="true"
			confirm-color="#09BCAF">
			<view class="slot-content car-box">
				<view class="car-icon">
					<image src="../static/index/car-icon.png"></image>
				</view>
				<view class="cb">
					<view class="cb-box">
						<view class="c-item" v-for="item in 4">
							<image
								src="https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83erOIHqDC5pYZlR3al4ZzGsPmnmmJ8Bf9BTMUChDHGhRlvJNQyN4bOR1Q7Yv2j1YiaHNdMVovzicTxwA/132">
							</image>
						</view>
						<view class="c-item">
							<image src="../static/index/n-avatar.png"></image>
						</view>
						<view class="c-item">
							<image src="../static/index/add-icon.png"></image>
						</view>
						<view class="c-item" @click="unLockFlag=true">
							<image src="../static/index/lock.png"></image>
						</view>
						<view class="c-item" @click="lockFlag=true">
							<image src="../static/index/Unlock.png"></image>
						</view>
					</view>
				</view>
			</view>
		</u-modal>
		<!-- 修改车队宣传语弹框 -->
		<u-modal v-model="cTipShow" title="车队宣传语" @confirm="carConfirm" @cancel="carCancel" :show-cancel-button="true"
			confirm-color="#09BCAF">
			<view class="text-box">
				<view class="textarea">
					<textarea v-model="carValue" placeholder="请输入车队宣传语" maxlength="160" />
					<text class="length">{{carValue.length}}/160</text>
				</view>
			</view>
		</u-modal>
		<!-- 完成 -->
		<u-modal v-model="completeFlag" :show-title="false" @confirm="submit" confirm-color="#09BCAF" content="当前车队已完成">
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
	export default {
		props: {
			num: {
				default: 5
			},
			// 父组件传递的 是否展示弹框
			pShow: {
				type: Boolean,
				default: false
			},
			// 完成弹框
			show2: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				// 解散弹框
				show1: false,
				// 锁车弹窗
				dShow: false,
				// 车队管理
				cShow: false,
				// 车队宣传语弹窗
				cTipShow: false,
				// 车队宣传语
				carValue: '',
				// 锁定车位弹窗
				lockFlag: false,
				// 解锁车位弹窗
				unLockFlag: false,
				// 锁车 提示文本
				content: `锁车后该车队会自动动成单<br>是否确认锁车？`
			}
		},
		methods: {
			// 解散的车队  点击确定
			confirm(id) {
				console.log(id)
				if (this.pShow) this.$emit('close')
			},
			// 点击取消
			cancel() {
				if (this.pShow) this.$emit('close')
			},
			// 完成车队 确认按钮
			submit() {
				this.$emit('confirm')
			},
			// 车队宣传语确定
			carConfirm() {
				this.carValue = ''
			},
			// 车队宣传语取消
			carCancel() {
				this.carValue = ''
			},
			// 解锁车位
			unlock() {

			},
			// 锁定车位
			lock() {

			}
		},
		computed: {
			// 确认完成弹窗
			completeFlag: {
				get() {
					return this.show2
				},
				set() {
					return false
				}
			}
		},
		watch: {
			pShow(newval) {
				this.show1 = newval
			}
		}
	}
</script>

<style lang="scss" scoped>
	.slot-content {
		padding: 48rpx;
		font-size: 30rpx;
		text-align: center;
		color: #606266;
	}

	// 车队管理
	.car-box {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-bottom: 10rpx;

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
				flex-wrap: wrap;
				justify-content: space-between;

				.c-item {
					width: calc((100% - 60rpx) / 4);
					height: 88rpx;
					border-radius: 50%;

					image {
						width: 88rpx;
						height: 88rpx;
						border-radius: 50%;
					}
				}

				.c-item:nth-child(n+5) {
					margin-top: 20rpx;
				}
			}
		}
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

	.item {
		box-sizing: border-box;
		padding: 20rpx 30rpx;
		width: 100%;
		height: 332rpx;
		background-color: #fff;
		margin-bottom: 20rpx;

		.info {
			display: flex;
			justify-content: space-between;
			width: 100%;
			height: 221rpx;

			.avatar {
				width: 159rpx;
				height: 221rpx;
				flex-shrink: 0;
				margin-right: 20rpx;
			}

			.r {
				flex: 1;
				width: 0;

				.title {
					display: flex;
					justify-content: space-between;
					align-items: center;
					height: 45rpx;
					margin-bottom: 28rpx;

					text {
						color: #333;
						font-size: 32rpx;
						font-weight: 600;
					}

					.icon {
						width: 40rpx;
						height: 40rpx;
					}
				}

				.row {
					display: flex;
					align-items: center;
					margin-top: 20rpx;

					image {
						width: 24rpx;
						height: 24rpx;
						margin-right: 10rpx;
						flex-shrink: 0;
					}

					text {
						font-size: 24rpx;
						color: #666;
					}
				}

				.r-row2 {
					display: flex;
					justify-content: space-between;
					align-items: center;

					.left {
						max-width: 70%;
					}
				}
			}
		}

		.btn-group {
			width: 100%;
			display: flex;
			align-content: flex-start;
			justify-content: space-between;
			height: 48rpx;
			margin-top: 20rpx;

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
			}
		}
	}
</style>
