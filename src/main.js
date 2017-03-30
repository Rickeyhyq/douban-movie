// import Vue from 'vue'
// import App from './App'
// import router from './router'

// Vue.config.productionTip = false

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   render: h => h(App)
// })

'use strict'
// 1. 导入组件
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
// 导入muse-ui
import Museui from 'muse-ui'
import '../node_modules/muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-light.css' // 使用 dark 主题
Vue.use(Museui)

// 引入自己的css
import '../static/css/base.css'

// 使用axios
import axios from 'axios'
Vue.prototype.$http = axios

Vue.config.productionTip = false

// 2. 创建Vue对象
new Vue({
  el: '#app',
  router: router,
  render: c => c(App)
})
