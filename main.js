import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
// 注册title插件
import TitleBlock from '@/components/tBlock/index.js'
Vue.use(TitleBlock)

import uView from "uview-ui";
Vue.use(uView);

const app = new Vue({
	...App
})
app.$mount()
