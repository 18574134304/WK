import Vue from 'vue'
import App from './App'
import request from '@/common/request.js'
import store from 'store/store.js'
Vue.use(store);

Vue.config.productionTip = false
App.mpType = 'app'

// 引入uview
import uView from "uview-ui";
Vue.use(uView);

Vue.prototype.$request = request

// 混入全局方法
import methods from 'mixins/methods.js'

// toast
function toast(title, icon = "none") {
	return uni.showToast({
		title,
		icon
	})
}
Vue.prototype.$toast = toast
Vue.prototype.$baseUrl = 'http://47.94.232.145:8082/zhongben-app'
Vue.mixin({
	methods
})

const app = new Vue({
	...App,
	store
})
app.$mount()
