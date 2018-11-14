// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import Vant from 'vant';
import './assets/flexible'
import 'vant/lib/vant-css/index.css';
import api from '@/api';
import './assets/iconfont/style.css';
import './assets/iconfont/ganfont.ttf';

Vue.prototype.$api = api;  

Vue.use(Vant);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
