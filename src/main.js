import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'mint-ui/lib/style.css'
import './assets/mui/css/mui.min.css'
import './assets/mui/css/icons-extra.css'


// import { Button,Header,Swipe, SwipeItem ,Lazyload} from 'mint-ui';
// Vue.component(Button.name, Button);
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.use(Lazyload);

//全局引用mint
import Mint from 'mint-ui';
Vue.use(Mint);

import VuePreview from 'vue-preview'
Vue.use(VuePreview)

import axios from 'axios'
Vue.prototype.axios = axios;

//导入时间插件
import moment from "moment"
//定义全局过滤器
Vue.filter('dateFormat',function(dataStr,pattern="YYYY-MM-DD HH-mm-ss"){
  return moment(dataStr,moment.ISO_8601).format(pattern)
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
