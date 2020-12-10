import Vue from "vue";
import App from "./App.vue";
Vue.config.productionTip = false;

// mint-ui
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
Vue.use(MintUI);

// ly-tab
import LyTab from "ly-tab";
Vue.use(LyTab);

// 导入路由模块
import router from "./router/router.js";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
