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
			<text class="t">综合</text>
			<view class="right" @click="showPup=true">
				<text>筛选</text>
				<image src="../../static/index/checkPlay/sx-icon.png"></image>
			</view>
		</view>
		<view class="j-list">
			<jb-item></jb-item>
		</view>

		<!-- 筛选弹窗 -->
		<u-popup v-model="showPup" mode="right" border-radius="14" width="75%">
			<view class="p-popup">
				<scroll-view scroll-y="true" style="height: 100%;">
					<view class="p-cate" v-for="(item,index) in tagList" :key="index">
						<view class="p-title">题材</view>
						<view class="cate-list">
							<view class="c-item" :class="{'p-active':tagActive(index,item1.id)}" :key="index1"
								v-for="(item1,index1) in item" @click="tagClick(index,item1.id)">{{item1.name}}</view>
						</view>
					</view>
				</scroll-view>
			</view>
			<view class="btnG">
				<view class="btn" @click="tagIds=[]">清空</view>
				<view class="btn p-active">确定</view>
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
				showPup: false,
				active: null,
				peopleList: ['<=4人', '5人', '6人', '7人', '8人', '9人', '10人', '10人+'],
				// 筛选数据
				tagList: [
					[{
						name: '恐怖',
						id: 1
					}],
					[{
							name: '恐怖',
							id: 1
						},
						{
							name: '恐怖',
							id: 2
						},
						{
							name: '恐怖',
							id: 3
						},
						{
							name: '恐怖',
							id: 4
						},
						{
							name: '恐怖',
							id: 5
						}
					],
					[{
							name: '恐怖',
							id: 1
						},
						{
							name: '恐怖',
							id: 2
						},
						{
							name: '恐怖',
							id: 3
						},
						{
							name: '恐怖',
							id: 4
						},
						{
							name: '恐怖',
							id: 5
						},
						{
							name: '恐怖',
							id: 6
						},
						{
							name: '恐怖',
							id: 7
						}
					],
				],

				tagIds: [],
			}
		},
		methods: {
			// 标签点击事件
			tagClick(index, id) {
				if (this.tagIds[index]) {
					if (this.tagIds[index].includes(id)) {
						this.tagIds[index].splice(this.tagIds[index].indexOf(id), 1)
					} else {
						let arr = this.tagIds[index]
						arr.push(id)
						this.$set(this.tagIds, index, arr)
					}

				} else {
					this.tagIds[index] = []
					this.$set(this.tagIds, index, [id])
				}
			}
		},
		computed: {
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

			.t {
				color: #333;
				font-size: 32rpx;
				font-weight: 600;
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
