<template>
	<view id="checkPlay">
		<title-block color="#fff"></title-block>
		<!-- 头部搜索框 -->
		<view class="header">
			<image src="../../static/index/back.png" class="back" @click="back"></image>
			<view class="search">
				<image src="../../static/content/search-icon.png"></image>
				<input v-model="searchWord" type="text" value="" placeholder="请输入剧本名称/发行商/剧本类型" />
				<text class="search-btn" @click="search">搜索</text>
			</view>
			<navigator url="./addPlay" hover-class="none">
				<image src="../../static/scriptDetails/add-icon.png" class="add-icon"></image>
			</navigator>
		</view>
		<view class="people">
			<view class="item" @click="peopleClick(null)" :class="{'item1 active':active===null}">不限</view>
			<view class="item" @click="peopleClick(item)" :class="{'active':active===item}"
				v-for="(item,index) in peopleList" :key="index">
				<text v-if="item==4">{{"<="+item+'人'}}</text>
				<text v-else-if="item==11">{{10+'人+'}}</text>
				<text v-else>{{item+'人'}}</text>
			</view>
		</view>
		<view class="l-title">
			<text class="t" v-if="ndFlag">综合</text>
			<view class="type" v-else>
				<view class="t-item" :class="{active:typeActive===1}" @click="typeClick(1)">平台剧本库</view>
				<view class="t-item" :class="{active:typeActive===2}" @click="typeClick(2)">店铺剧本库</view>
			</view>
			<view class="right" @click="queryTags">
				<text>筛选</text>
				<image src="../../static/index/checkPlay/sx-icon.png"></image>
			</view>
		</view>
		<view class="j-list">
			<view class="tab" v-if="!ndFlag">
				<view class="tab-item" :class="{active:index===tabActive}" v-for="(item,index) in tabList" :key="index"
					@click="tabClick(index)">{{item}}</view>
			</view>
			<jb-item @goDetail="goDetail" :list="scenList">
				<view class="btn-group" slot="btn-Group" :key="typeActive" slot-scope="scope" v-if="!ndFlag">
					<template v-if="typeActive===1">
						<view class="tn t1" v-if="scope.row.isPutaway===3"
							@click.stop="scClick(scope.row.id,scope.row.scenName,1)">
							<image src="../../static/scriptDetails/sc-icon.png"></image>
							<text>收录</text>
						</view>
						<view class="tn t1" v-else-if="scope.row.isPutaway===2"
							@click.stop="scClick(scope.row.scenId,scope.row.scenName,2,true)">
							<image src="../../static/scriptDetails/upload-icon.png"></image>
							<text>上架</text>
						</view>
						<view class="tn t2" @click.stop="showDown(scope.row.scenId,true)"
							v-else-if="scope.row.isPutaway===1">
							<image src="../../static/scriptDetails/down-icon.png"></image>
							<text>下架</text>
						</view>
					</template>
					<template v-else>
						<view class="tn t2" @click.stop="showDown(scope.row.id)"
							v-if="typeActive===2&&scope.row.isPutaway===1">
							<image src="../../static/scriptDetails/down-icon.png"></image>
							<text>下架</text>
						</view>
						<view class="tn t3" v-else>
							<view class="tn t1" v-if="scope.row.isScenCommon===1"
								@click.stop="scClick(scope.row.id,scope.row.scenName,2)">
								<image src="../../static/scriptDetails/upload-icon.png"></image>
								<text>上架</text>
							</view>
							<template v-else>
								<view class="t-i1" @click.stop="scClick(scope.row.id,scope.row.scenName,2)">
									<image src="../../static/scriptDetails/upload-icon.png"></image>
									<text>上架</text>
								</view>
								<view class="t-i2" @click.stop="editPlay(scope.row)">
									<image src="../../static/scriptDetails/edit-icon.png"></image>
									<text>编辑</text>
								</view>
							</template>
						</view>
					</template>
				</view>
			</jb-item>
		</view>

		<!-- 收录、上架、编辑剧本弹框 -->
		<u-modal ref="scPlay" @cancel="scCancel" @confirm="scConfirm" width="80%" v-model="scFlag"
			:title="scPlayContent" :show-cancel-button="true" confirm-color="#09BCAF">
			<view class="text-box">
				<view class="tx-item">
					<text class="label">剧本名称：</text>
					<text class="val">{{scInfo.name}}</text>
				</view>
				<view class="tx-item">
					<text class="label">剧本价格：</text>
					<input class="val" auto-focus="true" type="number" placeholder="请输入剧本价格/人" v-model="scInfo.price" />
				</view>
			</view>
		</u-modal>

		<!-- 下架剧本 -->
		<u-modal ref="unPlay" v-model="downFlag" :show-title="false" @confirm="unPlay" @cancel="unPlayId=''"
			:async-close="true" :show-cancel-button="true" confirm-color="#09BCAF">
			<view class="slot-content">
				<rich-text :nodes="content"></rich-text>
			</view>
		</u-modal>

		<!-- 下架剧本失败 -->
		<u-modal v-model="downErrFlag" @confirm="downErrFlag=false" :show-title="false" confirm-color="#09BCAF"
			content="该剧本有参与的车队无法进行下架"></u-modal>

		<!-- 筛选弹窗 -->
		<u-popup v-model="showPup" mode="right" border-radius="14" width="75%" @close="popupClosed">
			<view class="p-popup">
				<scroll-view scroll-y="true" style="height: 100%;">
					<view class="p-cate" v-for="(item,index) in tagList" :key="item.id">
						<template v-if="item.list.length">
							<view class="p-title">{{item.tagName}}</view>
							<view class="cate-list">
								<view class="c-item" :class="{'p-active':tagActive(index,item1.id)}" :key="item1.id"
									v-for="(item1,index1) in item.list"
									@click="tagClick(index,item1.id,item.isMany,item1.tagName)">
									{{item1.tagName}}
								</view>
							</view>
						</template>
					</view>
				</scroll-view>
			</view>
			<view class="btnG">
				<view class="btn" @click="clearTags">清空</view>
				<view class="btn p-active" @click="confirmTags">确定</view>
			</view>
		</u-popup>
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
				// 筛选
				showPup: false,
				// 人数
				active: null,
				peopleList: [4, 5, 6, 7, 8, 9, 10, 11],
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
				scFlag: false,
				// 下架弹窗
				downFlag: false,
				// 下架弹窗 提示文本
				content: `是否确认下架该剧本<br>下架后用户将无法在本地看到该剧本`,
				// 有车队无法下架弹窗
				downErrFlag: false,
				tagList: [],
				// 选中的标签id集合
				tagIds: [],
				// 剧本数据
				playList: [],
				// 查询店铺剧本 数据
				pageNo: 1,
				searchWord: '',
				tagIds: [],
				tagIdsStr: '',
				// 剧本数据
				scenList: [],
				total: 0,
				queryInfo: {
					numType: '',
					pageNo: '',
					pageSize: 5,
					peopleNum: '',
					searchWord: '',
					tagIds: ''
				},
				// 下架剧本的id
				unPlayId: '',
				unFlag: false,
				scCFlag: false,
				// 上架剧本的 数据
				scInfo: {
					name: '',
					id: '',
					price: '',
					flag: 1 //用来标识是上架 or 收录  1收录  2上架
				},
				// 上架弹窗文本
				scPlayContent: '',
				// 是选择剧本还是正常剧本流程
				ndFlag: false
			}
		},
		onLoad(options) {
			if (options.flag) {
				this.ndFlag = true
				this.typeActive = 2
			}
			this.queryScenList()
		},
		methods: {
			editPlay(item) {
				uni.navigateTo({
					url: "./addPlay?data=" + JSON.stringify(item)
				})
			},
			// 弹起上线剧本弹窗
			scClick(id, name, flag, scCFlag = false) {
				this.scFlag = true
				this.scInfo.id = id
				console.log(id)
				this.scInfo.name = name
				this.scInfo.flag = flag
				this.scCFlag = scCFlag
				this.scPlayContent = flag == 1 ? '收录剧本' : '上架剧本'
			},
			// 上架  or  收录
			async scConfirm() {
				console.log(this.scInfo.price, Boolean(this.scInfo.price))
				let data = {
					id: this.scInfo.id,
					price: Boolean(this.scInfo.price) && this.scInfo.price > 0 ? this.scInfo.price + '' : '0'
				}
				console.log(data)
				if (this.scInfo.flag === 2) {
					const {
						data: res
					} = await this.$request.request({
						url: "/v1/scenUser/updateScenPrice",
						method: "POST",
						data
					})
					if (res.code === 1) {
						if (data.price && data.price > 0) {
							let index = this.scenList.findIndex(item => {
								if (this.scCFlag) {
									return item.scenId == this.scInfo.id
								} else {
									return item.id == this.scInfo.id
								}
							})
							this.$set(this.scenList[index], 'isPutaway', 1)
						}
						this.scInfo.name = ''
						this.scInfo.id = ''
						this.scInfo.price = ''
						this.scInfo.flag = 1
						this.$refs.scPlay.clearLoading();
						this.scFlag = false
					} else {
						this.$toast("失败")
						this.$refs.scPlay.clearLoading();
						this.scFlag = false
					}
				} else {
					let mdata = `[${String(JSON.stringify(data))}]`
					const {
						data: res
					} = await this.$request.request({
						url: "/v1/scenUser/addCommonScens",
						method: "POST",
						data: {
							param: mdata
						}
					})
					if (res.code === 1) {
						this.scInfo.name = ''
						this.scInfo.id = ''
						this.scInfo.price = ''
						this.scInfo.flag = 1
						this.$refs.scPlay.clearLoading();
						this.scFlag = false
						this.pageNo = 1
						this.scenList = []
						this.isStatus()
					} else {
						this.$toast("失败")
						this.$refs.scPlay.clearLoading();
						this.scFlag = false
					}
				}
			},
			// 取消上架 or 收录
			scCancel() {
				this.scInfo.name = ''
				this.scInfo.id = ''
				this.scInfo.price = ''
				this.scInfo.flag = 1
			},
			// 打开下架剧本弹窗
			showDown(id, unFlag = false) {
				console.log(id)
				this.downFlag = true
				this.unPlayId = id
				this.unFlag = unFlag
			},
			// 下架剧本
			async unPlay() {
				let data = {
					id: this.unPlayId,
					price: 0
				}
				const {
					data: res
				} = await this.$request.request({
					url: "/v1/scenUser/updateScenPrice",
					method: "post",
					data
				})
				if (res.code === 1) {
					let index = this.scenList.findIndex(item => {
						if (this.unFlag) {
							return item.scenId == data.id
						} else {
							return item.id == data.id
						}
					})
					console.log(index)
					this.$set(this.scenList[index], 'isPutaway', 2)
					this.unPlayId = ''
					this.downFlag = false
					this.$refs.unPlay.clearLoading();
				} else {
					this.downFlag = false
					this.$refs.unPlay.clearLoading();
					// 下架失败
					this.downConfirm()
				}
			},
			// 关闭标签筛选框
			popupClosed() {
				this.scenList = []
				this.pageNo = 1
				this.isStatus()
			},
			// 清空选择的标签
			clearTags() {
				if (this.tagIds.length) {
					this.tagIds = []
					this.tagIdsStr = ''
				}
			},
			// 确定选择标签
			confirmTags() {
				this.showPup = false
			},
			// 关键字搜索
			search() {
				let val = this.searchWord
				this.searchWord = val.replace(/\s+/g, "");
				if (this.searchWord) {
					this.scenList = []
					this.pageNo = 1
					this.isStatus()
				} else {
					this.$toast("请输入关键字")
				}

			},
			// 人数筛选
			peopleClick(index) {
				this.scenList = []
				this.pageNo = 1
				this.active = index
				this.isStatus()
			},
			// 平台 店铺剧本
			typeClick(active) {
				this.typeActive = active
			},
			// 判断当前状态应该请求哪个接口
			isStatus() {
				if (this.typeActive === 1) {
					this.tabActive === 0 ? this.queryScenList() : this.queryScenStatusList()
				} else {
					this.queryShopList()
				}
			},
			// 分类点击事件
			tabClick(index) {
				this.scenList = []
				this.pageNo = 1
				this.tabActive = index
				this.isStatus()
			},

			// 下架失败剧本 弹窗确定
			downConfirm() {
				this.downErrFlag = true
			},
			// 点击剧本
			goDetail(item) {
				let flag = this.typeActive === 2 ? 2 : item.isScenCommon
				uni.navigateTo({
					url: "../scriptDetails/details?id=" + item.id + "&type=" + flag
				})
			},
			// 标签点击事件
			tagClick(index, id, flag, name) {
				console.log(index, id, flag, name)
				if (this.tagIds[index]) {
					if (this.tagIds[index].includes(id)) {
						this.tagIds[index].splice(this.tagIds[index].indexOf(id), 1)
					} else {
						let arr = this.tagIds[index]
						if (flag == 1) {
							arr.push(id)
							this.$set(this.tagIds, index, arr)
						} else {
							arr = [id]
							this.$set(this.tagIds, index, arr)
						}
					}

				} else {
					this.tagIds[index] = []
					this.$set(this.tagIds, index, [id])
				}

				let idArr = []
				for (let i = 0; i < this.tagIds.length; i++) {
					if (this.tagIds[i] && this.tagIds[i].length) {
						idArr.push(this.tagIds[i].join())
					}
				}
				this.tagIdsStr = idArr
			},
			// 设置查询剧本参数
			setData() {
				this.queryInfo.pageNo = this.pageNo
				this.queryInfo.searchWord = this.searchWord
				this.queryInfo.tagIds = this.tagIdsStr
				if (this.active) {
					this.queryInfo.peopleNum = this.active == 11 ? 10 : this.active
				} else {
					this.queryInfo.peopleNum = ''
				}
				this.queryInfo.numType = this.active == 11 ? 2 : 1
			},
			// 查询店铺剧本列表
			async queryShopList() {
				uni.showLoading()
				this.setData()
				let data = this.queryInfo
				if (this.tabActive === 0) {
					data.isPutaway = ''
				} else {
					data.isPutaway = this.tabActive
				}
				const {
					data: res
				} = await this.$request.request({
					url: "/v1/scenUser/queryStoreAllScen",
					method: "get",
					data
				})
				console.log(res)
				this.scenList = [...this.scenList, ...res.data.records]
				this.total = res.data.total
				uni.hideLoading()
			},
			// 查询平台剧本列表 - 全部
			async queryScenList() {
				uni.showLoading()
				this.setData()
				const {
					data: res
				} = await this.$request.request({
					url: "/v1/scenCommon/queryCommonAllScen",
					method: "POST",
					data: this.queryInfo
				})
				uni.hideLoading()
				this.scenList = [...this.scenList, ...res.data.records]
				this.total = res.data.total
				console.log(res)
			},
			// 查询平台剧本 已收录 or 未收录
			async queryScenStatusList() {
				this.setData()
				uni.showLoading()
				let data = this.queryInfo
				data.isInclude = this.tabActive
				const {
					data: res
				} = await this.$request.request({
					url: "/v1/scenCommon/queryCommonScenByWordApplet",
					method: "POST",
					data
				})
				uni.hideLoading()
				this.scenList = [...this.scenList, ...res.data.records]
				this.total = res.data.total
				console.log(res)
			},
			// 查询标签数据
			async queryTags() {
				this.showPup = true
				if (this.tagList.length) return
				uni.showLoading()
				const {
					data: res
				} = await this.$request.request({
					url: '/v1/tag/queryTagListByTagTypeSon',
					method: 'post',
					data: {
						tagType: 2
					}
				})
				uni.hideLoading()
				this.tagList = res.data
			},
		},
		onReachBottom() {
			if (this.scenList.length >= this.total) {
				// return this.$toast("没有更多了")
				return
			}
			this.pageNo++
			this.isStatus()
		},
		onShow() {
			if (this.one) {
				this.pageNo = 1
				this.scenList = []
				this.tagIds = []
				this.tagIdsStr = ''
				this.active = null
				// this.tabActive = 0
				this.total = 0
				this.searchWord = ''
				this.active = null
				this.isStatus()
			}
			this.one = true
		},
		watch: {
			typeActive(newVal) {
				this.pageNo = 1
				this.scenList = []
				this.tagIds = []
				this.tagIdsStr = ''
				this.active = null
				this.tabActive = 0
				this.total = 0
				this.searchWord = ''
				this.active = null
				this.isStatus()
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
			},
			tagActive() {
				return (index, id) => {
					if (this.tagIds[index] && this.tagIds[index].includes(id)) {
						return true
					} else {
						return false
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
					color: #333;
					background-color: #F1F1F1;
					border-radius: 80rpx;
				}

				.search-btn {
					position: absolute;
					right: 10rpx;
					top: 50%;
					transform: translateY(-50%);
					padding: 6rpx 20rpx;
					background-color: #f0eef5;
					font-size: 24rpx;
				}
			}

			.add-icon {
				margin-left: 20rpx;
				width: 40rpx;
				height: 40rpx;
				flex-shrink: 0;
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

			.t {
				color: #333;
				font-size: 32rpx;
				font-weight: 600;
			}

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

		.tx-item {
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

			.val {
				flex: 1;
			}
		}
	}

	.p-popup {
		box-sizing: border-box;
		padding: 30rpx;
		padding-right: 10rpx;
		height: 92%;

		.p-cate {
			.p-title {
				font-size: 28rpx;
				color: #333;
				font-weight: 600;
				margin-bottom: 10rpx;
			}

			.cate-list {
				display: flex;
				flex-wrap: wrap;
				padding: 20rpx 0 10rpx;

				.c-item {
					width: calc((100% - 45rpx) / 3);
					margin-right: 15rpx;
					height: 60rpx;
					background-color: #f2f2f2;
					border-radius: 30rpx;
					text-align: center;
					line-height: 60rpx;
					color: #333;
					font-size: 24rpx;
					margin-bottom: 20rpx;
				}
			}
		}

	}

	.btnG {
		display: flex;
		justify-content: space-between;
		padding: 0 20rpx 20rpx;

		.btn {
			width: 240rpx;
			height: 76rpx;
			border-radius: 38rpx;
			text-align: center;
			line-height: 76rpx;
			font-size: 24rpx;
			background-color: #f2f2f2;
		}
	}

	.p-active {
		background-color: #00BAAD !important;
		color: #fff !important;
	}
</style>
