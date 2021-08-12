<template>
	<view class="">
		<input v-model="userInfo.username" type="text" value="" placeholder="请输入昵称" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: {}
			}
		},
		mounted() {
			this.getUserInfo()
		},
		methods: {
			async getUserInfo() {
				let {data: res} = await this.$request.request({
					url: '/v1/user/queryUser',
					method: 'get'
				})
				this.userInfo = res.data
				console.log(this.userInfo)
			},
			async onNavigationBarButtonTap(e) {
				if(this.userName == '') {
					uni.showToast({
						title: '请输入昵称',
						icon: 'none'
					})
					return
				}
				let {data: res} = await this.$request.request({
					url: '/v1/user/userUpdate',
					method: 'post',
					data: {
						username: this.userInfo.username
					}
				})
				if(res.code == 1) {
					uni.showToast({
						title: res.msg,
						icon: 'none'
					})
					uni.setStorage({key: 'userInfo',data: this.userInfo})
					this.getUserInfo()
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	input{
		margin-left: 30rpx;
		font-size: 28rpx;
		color: #333333;
	}
</style>
