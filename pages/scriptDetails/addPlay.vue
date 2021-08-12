<template>
	<keep-alive :include="isAlive">
		<view id="add-play">
			<view class="form">
				<view class="item">
					<text class="label">剧本名称</text>
					<input type="text" placeholder="请输入剧本名称(必填)" v-model="info.scenName">
				</view>
				<navigator url="./tags" class="item" hover-class="none">
					<text class="label">剧本标签</text>
					<input type="text" placeholder="请选择剧本标签" disabled v-model="tagNames">
					<image class="r-icon" src="../../static/index/shopManger/r-icon.png"></image>
				</navigator>
				<view class="item">
					<text class="label">剧本人数</text>
					<radio-group @change="radioChange" class="radio-group">
						<label>
							<view>
								<radio value="2" color="#09BCAF" :checked="info.type==2" />
							</view>
							<view>区间人数</view>
						</label>
						<label>
							<view>
								<radio value="1" color="#09BCAF" :checked="info.type==1" />
							</view>
							<view>固定人数</view>
						</label>
					</radio-group>
				</view>
				<view class="item">
					<text class="label">剧本人数</text>
					<!-- <input type="text" placeholder="请输入剧本人数"> -->

					<view class="ig">
						<view class="im">
							<text>{{info.type==1 ? '男':'最大人数'}}</text>
							<input type="number" v-model="maleNum" key="1" v-if="info.type==1">
							<input type="number" v-model="scenMaxNum" key="2" v-else>
						</view>
						<view class="im">
							<text>{{info.type==1 ? '女' : '最小人数'}}</text>
							<input type="number" v-model="femaleNum" key="1" v-if="info.type==1">
							<input type="number" v-model="scenMinNum" key="2" v-else>
						</view>
					</view>
					<image class="r-icon" src="../../static/index/shopManger/r-icon.png"></image>
				</view>
				<view class="item">
					<text class="label">发行名称</text>
					<input type="text" placeholder="请输入发行商名称（必填）" v-model="info.scenPublisher">
				</view>
				<view class="item" @click="dateFlag=true">
					<text class="label">发行时间</text>
					<input type="text" placeholder="请输入发行时间（例2021-05）（必填）" disabled v-model="info.scenTime">
				</view>
				<view class="item">
					<text class="label">推荐时长</text>
					<input type="number" placeholder="请输入推荐时长（必填/小时）" v-model="info.scenFrequently">
				</view>
				<view class="item">
					<text class="label">剧本价格</text>
					<input type="number" placeholder="请输入剧本价格元/人（选填）" v-model.number="info.scenPrice">
				</view>
				<view class="tip">*如果未定价，剧本为预告状态</view>
			</view>
			<!-- 日期 -->
			<u-picker confirm-color="#09BCAF" @confirm="dateChange" v-model="dateFlag" title="请选择发行时间" mode="time"
				:params="DateParams"></u-picker>
			<view class="save" @click="submit">
				<view>下一步</view>
			</view>
		</view>
	</keep-alive>
</template>

<script>
	export default {
		name:"addPlay",
		data() {
			return {
				// 区间人数or固定人数
				dateFlag: false,
				// 日期配置
				DateParams: {
					year: true,
					month: true,
					day: true,
					hour: false,
					minute: false,
					second: false
				},
				// 最大人数
				scenMaxNum: '',
				// 最小人数
				scenMinNum: '',
				// 男
				maleNum: '',
				// 女
				femaleNum: '',
				info: {
					scenName: '',
					type: 2,
					scenPublisher: '',
					scenTime: '',
					scenPrice: '',
					scenFrequently:'',
					// 标签id
					tagIds:""
				}
			}
		},
		onLoad(options) {
			if(options.data){
				let data = JSON.parse(options.data)
				this.info.scenName = data.scenName
				this.info.scenPublisher = data.scenPublisher
				this.info.scenTime = data.scenTime.split(' ')[0]
				this.info.scenPrice = data.scenPrice
				this.info.scenFrequently = data.scenFrequently
				this.info.scenImg = data.scenImg
				this.info.scenBanner = data.scenBanner
				this.info.scenRecommend = data.scenRecommend
				this.info.id = data.id
				this.scenMaxNum = data.scenMaxNum > 0 ? data.scenMaxNum : ''
				this.scenMinNum = data.scenMinNum > 0 ? data.scenMinNum : ''
				this.maleNum = data.maleNum > 0 ? data.maleNum : ''
				this.femaleNum = data.femaleNum > 0 ? data.femaleNum : ''
				if(this.maleNum>0&&this.femaleNum>0){
					this.info.type = 1
				}else{
					this.info.type = 2
				}
				let obj = {
					tagIds:data.tagIds,
					tagNames:data.tagNames
				}
				this.$store.commit("setTags",obj)
			}
		},
		methods: {
			// 选择区间人数or固定人数
			radioChange(e) {
				this.info.type = e.detail.value
				this.scenMaxNum = ''
				this.scenMinNum = ''
				this.maleNum = ''
				this.femaleNum = ''
			},
			// 验证数据
			validate() {
				for (let k in this.info) {
					if (this.info[k]) {
						this.info[k] = String(this.info[k]).replace(/\s+/g, "")
					}
				}
				let data = this.info
				if (!data.scenName) return this.$toast("请输入剧本名称")
				if (!this.tagIds) return this.$toast("请选择剧本标签")
				if (this.info.type == 1) {
					if (!this.maleNum) return this.$toast("请输入男生人数")
					if (!this.femaleNum) return this.$toast("请输入女生人数")
				} else {
					if (!this.scenMaxNum) return this.$toast("请输入最大人数")
					if (!this.scenMinNum) return this.$toast("请输入最小人数")
				}
				if (!data.scenPublisher) return this.$toast("请输入发行名称")
				if (!data.scenTime) return this.$toast("请选择发行时间")
				if (!data.scenFrequently) return this.$toast("请输入推荐时长")
				console.log(data.scenPrice)
				// if (data.scenPrice==='') return this.$toast("请输入剧本价格")
				return true
			},
			// 选择发车日期
			dateChange(date) {
				this.info.scenTime = date.year + '-' + date.month + '-' + date.day
			},
			submit() {
				if (this.validate()===true) {
					this.$store.commit("setAlive",['addPlay'])
					this.info.tagIds = this.tagIds
					if(this.info.type==1){
						this.info.maleNum = this.maleNum
						this.info.femaleNum = this.femaleNum
					}else{
						this.info.scenMaxNum = this.scenMaxNum
						this.info.scenMinNum = this.scenMinNum
					}
					this.info.scenPrice = this.info.scenPrice ? this.info.scenPrice : 0
					uni.navigateTo({
						url: "../index/shopManage/children/shopInfo?data="+JSON.stringify(this.info)
					})
				}

			}
		},
		computed:{
			isAlive(){
				return this.$store.state.Alive
			},
			tagIds(){
				let ids = this.$store.state.tagIds
				return ids
			},
			tagNames(){
				let names = this.$store.state.tagNames
				return names.replace(/\,/g," ")
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
