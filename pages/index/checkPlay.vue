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
			<view class="right">
				<text>筛选</text>
				<image src="../../static/index/checkPlay/sx-icon.png"></image>
			</view>
		</view>
		<view class="j-list">
			<jb-item></jb-item>
		</view>
	</view>
</template>

<script>
	import JbItem from '../../components/JbItem.vue'
	export default {
		components:{
			JbItem
		},
		data() {
			return {
				active: null,
				peopleList: ['<=4人', '5人', '6人', '7人', '8人', '9人', '10人', '10人+']
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
</style>
