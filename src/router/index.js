import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes:[
    {path:'/home',component: () => import('@views/home.vue')},
    {path:'/authority1',component: () => import('@views/authority.vue')},
    {path:'/authority2',component: () => import('@views/role.vue')},
    {path:'/order',component: () => import('@views/order.vue')},
    {path:'/more',component: () => import('@views/userManage/more.vue')},
    {path:'/user',component: () => import('@views/user.vue'),
      children: [
        {
          path:'check',component: () => import('@views/userManage/check.vue')
        },
        {
          path:'report',component: () => import('@views/userManage/report.vue')
        },
        {
          path:'administration',component: () => import('@views/userManage/administration.vue')
        }
      ]
    },
    {path:'/commodity',component: () => import('@views/merchant/commodity.vue')},
    {path:'/commodity1',component: () => import('@views/merchant/commodity1.vue')},
    {path:'/commodity2',component: () => import('@views/merchant/commodity2.vue')},
    {path:'/commodity3',component: () => import('@views/merchant/commodity3.vue')},
    {path:'/OrderList',component: () => import('@views/merchant/OrderList.vue')},
    {path:'/OrderManage',component: () => import('@views/merchant/OrderManage.vue')},
    {path:'/sendback',component: () => import('@views/merchant/sendback.vue')},




  ]
})

export default router
