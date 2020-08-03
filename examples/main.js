import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import renderTable from '../lib/render-el-table.common'

import Highlight from './highlight'

Vue.use(ElementUI)
Vue.use(renderTable)
Vue.use(Highlight)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)
}).$mount('#app')
