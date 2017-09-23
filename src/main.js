import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// vuex store
const vuex_store = new Vuex.Store({
    state: {
        menuOpened:false// 定义你的数据源
    },
    mutations: {
       toggleMenu(state){
            state.menuOpened = !state.menuOpened;
        }
    }
})




new Vue({
  el: '#app',
  store:vuex_store,
  render: h => h(App)
})
