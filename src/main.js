import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"
import 'amfe-flexible'


import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

import { Lazyload } from 'vant';

Vue.use(Lazyload, {
  lazyComponent: true,
});



Vue.config.productionTip = false

//将vuex的store添加到Vue的原型中 , 即所有组件中
Vue.prototype.$store = store;

Array.prototype.pushNoRepeat = function () {
  for (let i = 0; i < arguments.length; i++) {
    let ele = arguments[i];
    if (this.indexOf(ele) === -1) {
      this.push(ele);
    }
  }
};

import axios from 'axios'
axios.defaults.withCredentials = true
Vue.prototype.$axios = axios


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
