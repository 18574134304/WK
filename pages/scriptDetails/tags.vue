<template>
	<view id="tags">
		<view class="p-cate" v-for="(item,index) in tagList" :key="item.id">
			<template v-if="item.list.length">
				<view class="p-title">{{item.tagName}}</view>
				<view class="cate-list">
					<view class="c-item" :class="{'p-active':tagActive(index,item1.id)}" :key="item1.id"
						v-for="(item1,index1) in item.list" @click="tagClick(index,item1.id,item.isMany,item1.tagName)">
						{{item1.tagName}}
					</view>
				</view>
			</template>
		</view>

		<view class="save" @click="save">
			<view>完成</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				tagList: [],
				tagIds: [],
				tagNames: []
			}
		},
		onLoad() {
			this.queryTags()
		},
		methods: {
			// 标签点击事件
			tagClick(index, id, flag, name) {
				if (this.tagIds[index]) {
					console.log(id)
					if (this.tagIds[index].includes(id)) {
						console.log('ok', this.tagIds[index])
						this.tagIds[index].splice(this.tagIds[index].indexOf(id), 1)
						console.log(this.tagIds)
					} else {
						console.log('no')
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
				if (this.tagNames.includes(name)) {
					this.tagNames.splice(this.tagNames.indexOf(name), 1)
				} else {
					this.tagNames.push(name)
				}
			},
			// 查询标签数据
			async queryTags() {
				const {
					data: res
				} = await this.$request.request({
					url: '/v1/tag/queryTagListByTagTypeSon',
					method: 'post',
					data: {
						tagType: 2
					}
				})
				this.tagList = res.data
				// 回显标签
				if (this.tIds) {
					let ids = this.tIds.split(',')
					this.tagNames = this.tNames.split(',')
					for (let i = 0; i < ids.length; i++) {
						try {
							this.tagList.forEach((item, index) => {
								item.list.map(item1 => {
									if (item1.id == ids[i]) {
										if (!this.tagIds[index]) {
											this.tagIds[index] = []
										}
										let arr = this.tagIds[index]
										arr.push(item1.id)
										this.$set(this.tagIds, index, arr)
										throw "ok"
									}
								})
							})
						} catch (e) {}
					}
				}

			},
			save() {
				let idArr = []
				for (let i = 0; i < this.tagIds.length; i++) {
					if (this.tagIds[i] && this.tagIds[i].length) {
						idArr.push(this.tagIds[i].join())
					}
				}
				let obj = {
					tagIds: idArr.join(),
					tagNames: this.tagNames.join()
				}
				this.$store.commit("setTags", obj)
				this.back()
			}
		},
		destroyed() {
			// console.log('销毁了')
			// this.$store.commit("setAlive",[])
			// this.$store.commit("setTags",{tagIds:'',tagNames:''})
		},
		computed: {
			...mapState({
				tIds: "tagIds",
				tNames: "tagNames"
			}),
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
		background-color: #fff;
		padding: 20rpx 30rpx 120rpx;

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
			position: fixed;
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
