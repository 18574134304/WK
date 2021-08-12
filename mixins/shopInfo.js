export default {
	onShow() {
		this.queryInfo()
	},
	methods: {
		async queryInfo() {
			uni.showLoading()
			const {
				data: res
			} = await this.$request.request({
				url: "/v1/store/checkStore",
				method: "post"
			})
			console.log(res)
			if (res.code) {
				this.info = res.data
			}
			uni.hideLoading()
		},
		async save(data) {
			const {
				data: res
			} = await this.$request.request({
				url: "/v1/store/saveOrUpdateStore",
				method: "POST",
				data
			})
			console.log(res)
			if (res.code == 1) {
				this.$toast("成功")
				setTimeout(_ => {
					this.back()
				}, 800)
			} else {
				this.$toast("失败")
			}
		}
	}
}
