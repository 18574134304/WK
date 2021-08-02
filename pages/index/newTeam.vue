<template>
	<view id="newTeam">
		<!-- form表单 -->
		<view class="form">
			<view class="f-item" v-for="(item,index) in formData" :key="index"
				@click="!item.icon ? showPicker(item.modeValue):''">
				<label :for="item.modeValue">
					<text class="required" v-if="item.required">*</text>
					<text>{{item.label}}</text>
				</label>
				<input :value="comVal(item.modeValue)" :key="item.modeValue" :id="item.modeValue" :disabled="!item.icon"
					placeholder-class="pld" type="text" :placeholder="item.placeholder">
				<u-icon v-if="!item.icon" name="arrow-right" class="ar-icon"></u-icon>
			</view>
			<view class="bottom-content">
				<view class="team-msg">
					<view>车队宣传语</view>
					<textarea placeholder="欢迎加入车队" placeholder-class="textPlace" />
				</view>
				<view class="t-item">
					<text class="label">是否公开</text>
					<switch checked color="#09BCAF" />
				</view>
				<view class="submit">
					<button @click="show=true">发布车队</button>
				</view>
			</view>
		</view>
		<!-- 是否发布成功 -->
		<u-modal v-model="show" :show-title="false" confirm-color="#09BCAF" :content="content"></u-modal>


		<!-- 房间 -->
		<u-select confirm-color="#09BCAF" @confirm="homeChange" v-model="homeFlag" title="请选择房间" :list="homeList">
		</u-select>

		<!-- 日期 -->
		<u-picker confirm-color="#09BCAF" @confirm="dateChange" v-model="dateFlag" title="请选择日期" mode="time"
			:params="DateParams"></u-picker>

		<!-- 时间 -->
		<u-picker confirm-color="#09BCAF" @confirm="timeChange" v-model="timeFlag" title="请选择时间" mode="time"
			:params="TimeParams"></u-picker>

		<!-- 人数 -->
		<u-select confirm-color="#09BCAF" @confirm="PeopleChange" v-model="PeopleFlag" title="请选择人数" :list="PeopleList">
		</u-select>

		<!-- 推荐时长 -->
		<u-select confirm-color="#09BCAF" @confirm="eTimeChange" v-model="eTimeFlag" title="请选择推荐时长" :list="eTimeList">
		</u-select>

		<!-- 选择DM -->
		<u-popup v-model="DMFlag" mode="bottom" id="DM-popup" :border-radius="20">
			<view class="title">
				<image @click="DMFlag = false" src="../../static/index/newTeam/close-icon.png"></image>
			</view>
			<view class="DM-content">
				<scroll-view scroll-y="true" style="max-height: 600rpx;">
					<view class="DMList">
						<view class="dm-item" v-for="item in 5">
							<view class="avatar">
								<image src="../../static/index/newTeam/avatar.png"></image>
							</view>
							<view class="info">
								<view class="name">DM姓名</view>
								<view class="row">
									<image src="../../static/index/newTeam/dm1.png"></image>
									<text>18888888888</text>
								</view>
								<view class="row">
									<image src="../../static/index/newTeam/dm2.png"></image>
									<text>6</text>
								</view>
							</view>
							<radio color="#09BCAF" />
						</view>
					</view>
				</scroll-view>
			</view>
			<view class="confrim-btn" @click="DMFlag = false">
				<button>完成</button>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show:false,
				content:'车队发布成功',
				home: '',
				date: '',
				time: '',
				juben: '',
				DM: '',
				ADM: '',
				People: '',
				eTime: '',
				price: '',
				homeList: [{
						value: '1',
						label: '房间1'
					},
					{
						value: '2',
						label: '房间2'
					}
				],
				homeFlag: false,
				dateList: [],
				dateFlag: false,
				timeList: [],
				timeFlag: false,
				DMList: [],
				DMFlag: false,
				PeopleList: [{
						value: '1',
						label: '1人'
					},
					{
						value: '2',
						label: '2人'
					}
				],
				PeopleFlag: false,
				eTimeList: [{
						value: '1',
						label: '1小时'
					},
					{
						value: '2',
						label: '2小时'
					},
					{
						value: '3',
						label: '3小时'
					}
				],
				eTimeFlag: false,
				DateParams: {
					year: true,
					month: true,
					day: true,
					hour: false,
					minute: false,
					second: false
				},
				TimeParams: {
					year: false,
					month: false,
					day: false,
					hour: true,
					minute: true,
					second: false
				},
				formData: [{
						label: '房间',
						required: true,
						placeholder: '请选择房间',
						modeValue: 'home'
					},
					{
						label: '发车日期',
						required: true,
						placeholder: '请选择发车日期',
						modeValue: 'date'
					},
					{
						label: '发车时间',
						required: true,
						placeholder: '请选择发车时间',
						modeValue: 'time'
					},
					{
						label: '选择剧本',
						required: true,
						placeholder: '请选择剧本',
						modeValue: 'juben'
					},
					{
						label: 'DM',
						required: true,
						placeholder: '可多选',
						modeValue: 'DM'
					},
					{
						label: '辅助DM',
						placeholder: '非必填，可多选',
						modeValue: 'ADM'
					},
					{
						label: '人数',
						placeholder: '请选择人数',
						modeValue: 'People'
					},
					{
						label: '预计时长',
						placeholder: '请选择预计时长',
						modeValue: 'eTime'
					},
					{
						label: '价格',
						placeholder: '请输入价格',
						modeValue: 'price',
						icon: true
					}
				]
			}
		},
		methods: {
			// 显示相应的picker
			showPicker(name) {
				if (name == 'juben') {
					return uni.navigateTo({
						url: "./checkPlay"
					})
				}
				return eval(`this.${name}Flag=true`)
			},
			// 选择房间
			homeChange(e) {
				console.log(e)
			},
			// 选择日期
			dateChange(e) {
				console.log(e)
			},
			// 选择时间
			timeChange(e) {
				console.log(e)
			},
			// 选择人数
			PeopleChange(e) {
				console.log(e)
			},
			// 选择推荐时长
			eTimeChange(e) {
				console.log(e)
			}
		},
		computed: {
			// 动态绑定
			comVal() {
				return (name) => {
					return eval('this.' + name)
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	#newTeam {
		width: 100vw;

		.form {
			width: 100%;
			background-color: #fff;

			.f-item {
				box-sizing: border-box;
				display: flex;
				align-items: center;
				padding: 0 20rpx;
				height: 104rpx;
				border-bottom: 1rpx solid #eee;

				label {
					width: 150rpx;
					font-size: 28rpx;
					color: #333;
					font-weight: 500;

					.required {
						color: #FF7832;
						margin-right: 3rpx;
					}
				}

				input {
					padding-right: 20rpx;
					flex: 1;
					font-size: 28rpx;
					color: #333;
					line-height: 104rpx;
				}

				/deep/.pld {
					font-size: 28rpx;
					color: #BFBFBF;
				}

				.ar-icon {
					color: #E6E6E6;
					flex-shrink: 0;
				}
			}

			.bottom-content {
				padding: 0 20rpx 20rpx;
			}

			.team-msg {
				padding: 30rpx 0;

				view {
					color: #333;
					font-size: 28rpx;
					font-weight: 500;
				}

				textarea {
					box-sizing: border-box !important;
					width: 100%;
					padding: 20rpx;
					font-size: 28rpx;
					color: #333;
					border-radius: 6px;
					border: 1rpx solid #CCCCCC;
					margin: 26rpx 0 20rpx;
				}

				.textPlace {
					color: #BFBFBF;
					font-size: 28rpx;
				}
			}

			.t-item {
				position: relative;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.label {
					color: #333;
					font-size: 28rpx;
					font-weight: 500;
				}

				switch {
					position: absolute;
					right: -24rpx;
					transform: scale(0.7);
				}
			}

			.submit {
				margin: 50rpx 0 32rpx;

				button {
					width: 100%;
					border-radius: 750rpx;
					height: 88rpx;
					text-align: center;
					line-height: 88rpx;
					color: #fff;
					background-color: #09BCAF;
				}
			}
		}

		#DM-popup {
			.title {
				text-align: right;
				padding: 24rpx;

				image {
					width: 40rpx;
					height: 40rpx;
				}
			}

			.DM-content {
				.DMList {
					padding: 0 24rpx 30rpx;

					.dm-item {
						display: flex;
						justify-content: space-between;
						align-items: center;
						height: 136rpx;
						width: 100%;
						margin-bottom: 20rpx;

						.avatar {
							width: 136rpx;
							height: 136rpx;
							overflow: hidden;
							border-radius: 16rpx;
							flex-shrink: 0;

							image {
								width: 100%;
								height: 100%;
							}
						}

						.info {
							flex: 1;
							height: 100%;
							display: flex;
							flex-direction: column;
							justify-content: space-between;
							margin: 0 16rpx;

							.name {
								color: #333;
								font-size: 32rpx;
								margin-bottom: 6rpx;
							}

							.row {
								display: flex;
								align-items: center;

								image {
									width: 24rpx;
									height: 24rpx;
									margin-right: 8rpx;
								}

								text {
									font-size: 24rpx;
									color: #666;
								}
							}
						}

						radio {
							transform: scale(0.8);
						}
					}

					.dm-item:last-child {
						margin-bottom: 0;
					}
				}

			}

			.confrim-btn {
				padding: 24rpx;

				button {
					width: 100%;
					border-radius: 750rpx;
					height: 88rpx;
					text-align: center;
					line-height: 88rpx;
					color: #fff;
					background-color: #09BCAF;
				}
			}
		}
	}
</style>
