import Vue from "vue";

import api from "./api"; // 导入api接口
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import vueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import "swiper/js/swiper.min.js";
import "nprogress/nprogress.css";
import "./assets/css/main.css";





Vue.prototype.$api = api; // 将api挂载到vue的原型上

Vue.use(vueAwesomeSwiper);

Vue.use(ElementUI);

Vue.config.productionTip = false;





new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");