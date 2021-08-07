<template>
	<view id="tags">
		<view class="p-cate" v-for="(item,index) in tagList" :key="index">
			<view class="p-title">题材</view>
			<view class="cate-list">
				<view class="c-item" :class="{'p-active':tagActive(index,item1.id)}" :key="index1"
					v-for="(item1,index1) in item" @click="tagClick(index,item1.id)">{{item1.name}}</view>
			</view>
		</view>

		<view class="save">
			<view>完成</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

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
				console.log(index, id, this.tagIds)
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
	#tags {
		width: 100vw;
		height: calc(100vh - 88rpx);
		background-color: #fff;
		padding: 20rpx 30rpx;

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

			.p-active {
				background-color: #00BAAD !important;
				color: #fff !important;
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
