import Vue from 'vue'
import Router from 'vue-router'
// import BuriedPoint from '@/behaviors/BuriedPoint'
import Index from '@/views/Index'
import BlogDetail from '@/views/BlogDetail'
import other from '@/router/other'

Vue.use(Router)

let routers = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/detail/:id',
    name: 'BlogDetail',
    component: BlogDetail
  },
  
  ...other
]

let router = new Router({
  routes: routers
})

//页面浏览时间统计
router.beforeEach((to, from, next) => {
//   let endTime = (new Date()).getTime();

//   if (from.name) {
//     BuriedPoint.recordTime({ pageName: from.name, time: endTime - enterTime })
//   }

  next();
})

export default router
