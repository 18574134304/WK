import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
// 注册title插件
import TitleBlock from '@/components/tBlock/index.js'
Vue.use(TitleBlock)

// 引入uview
import uView from "uview-ui";
Vue.use(uView);

// 混入全局方法
import methods from 'mixins/methods.js'

Vue.mixin({
	methods
})

const app = new Vue({
	...App
})
app.$mount()
