import Vue from "vue";
import App from "./App";
import router from "./router";
import Browser from "@/behaviors/Browser";
import BaseException from "@/exception/Base";
import store from "./store";
import echarts from "echarts";

import 'normalize.css';
import './scss/global.scss'
import '@/assets/iconfont/iconfont.css';
import 'element-ui/lib/theme-chalk/index.css';

import { Message, MessageBox, Menu, Submenu, MenuItem, MenuItemGroup, Table, TableColumn, Switch, Button, Tree, Input,
  Header, Aside, Footer, Main, Container
} from 'element-ui';


Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$echarts = echarts;

Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Button)
Vue.use(Tree)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Footer)
Vue.use(Main)
Vue.use(Container)
Vue.use(Input)


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
