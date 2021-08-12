<template>
	<view class="withdrawalRule">
		<view class="withdrawalRule-con">
			{{ ruleText }}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ruleText: ''
			}
		},
		mounted() {
			this.getRule()
		},
		methods: {
			async getRule() {
				let {data: res} = await this.$request.request({
					url: '/v1/config/config/queryGzxy',
					method: 'get',
					data:{
						configName: 'withdrawRule'
					}
				})
				console.log(res)
				this.ruleText = res.data.configValue
			}
		}
	}
</script>

<style lang="scss" scoped>
	.withdrawalRule{
		background-color: #F8F8F8;
		height: calc(100vh - 88rpx);
		padding: 41rpx 32rpx 0;
		.withdrawalRule-con{
			font-size: 32rpx;
			line-height: 56rpx;
			color: #333333;
		}
	}
</style>
