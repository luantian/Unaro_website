import Vue from "vue";
import App from "./App";
import router from "./router";
import Browser from "@/behaviors/Browser";
import BaseException from "@/exception/Base";
import store from "./store";
// import echarts from "echarts";

import 'normalize.css';
import './scss/global.scss'
// import '@/assets/iconfont/iconfont.css';
// import 'element-ui/lib/theme-chalk/index.css';

import 'github-markdown-css'
import 'highlight.js/styles/github.css'

import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/ambiance.css'
import 'codemirror/theme/cobalt.css'
import 'codemirror/mode/javascript/javascript'

Vue.use(codemirror)

/**
 * 浏览器关闭之前需要的操作
 */
window.addEventListener("beforeunload", e => {
  console.log("e", e);
  Browser.close();
});

/**
 * vue组件内的同步异常捕获
 */
Vue.config.errorHandler = BaseException.vueError;

/**
 * promise异常捕获
 */
window.addEventListener("unhandledrejection", BaseException.promiseError);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
