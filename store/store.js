import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const Store = new Vuex.Store({
	state:{
		// 选择标签页的id和name
		tagIds:"",
		tagNames:"",
		// 是否缓存组件
		Alive:[]
	},
	mutations:{
		setTags(state,data){
			state.tagIds = data.tagIds
			state.tagNames = data.tagNames
		},
		setAlive(state,data){
			state.Alive = data
		}
	}
})
export default Store