<template>
	<view id="system-Message">
		<view class="m-list" v-for="item in 2">
			<view class="m-item">
				<view class="title">
					<view class="type">系统消息</view>
					<text class="time">2020-02-02 10:00</text>
				</view>
				<view class="info ellipsis-2">系统消息内容系统消息内容系统消息内容系统消息内容系统消息内容系统消息内容系统消息内容系统消息内容系统消息内容系统消息内容系统消息内容系统消息内容系统消息内容系统消息内容</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 系统消息列表
				list:[]
			}
		},
		onLoad() {
			this.query()
		},
		methods:{
			async query(){
				const {data:res} = await this.$request.request({
					url:"/v1/message/queryMessageList",
					method:"post",
					data:{
						pageNo:1,
						pageSize:1000
					}
				})
				console.log(res)
			}
		}
	}
</script>

<style lang="scss" scoped>
	#system-Message {
		.m-list {
			.m-item {
				box-sizing: border-box;
				padding: 20rpx 30rpx;
				margin-top: 20rpx;
				width: 750rpx;
				height: 203rpx;
				background-color: #fff;

				.title {
					display: flex;
					align-items: center;
					justify-content: space-between;
					.type{
						font-size: 32rpx;
						color: #333;
						font-weight: 500;
					}
					.time{
						color: #666;
						font-size: 28rpx;
					}
				}
				.info{
					margin-top: 20rpx;
					line-height: 40rpx;
					font-size: 28rpx;
					color: #666;
				}
			}
		}
	}
</style>
