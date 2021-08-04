import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

// 引入uview
import uView from "uview-ui";
Vue.use(uView);

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

Vue.mixin({
	methods
})

const app = new Vue({
	...App
})
app.$mount()
