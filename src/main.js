import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import axios from "axios";
import search from '@components/search.vue'
import sort from '@components/sort.vue'
import cancel from '@components/cancel.vue'
import api from './api'


Vue.use(api)
Vue.use(ElementUI);
Vue.component('search',search)
Vue.component('sort',sort)
Vue.component('cancel',cancel)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
