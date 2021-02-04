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
    {path:'/chat',component: () => import('@views/chat.vue')},
    {path:'/user',component: () => import('@views/user.vue'),
      children: [
        {
          path:'check',component: () => import('@views/userManage/check.vue')
        },
        {
          path:'report',component: () => import('@views/userManage/report.vue')
        },
      ]
    },
  ]
})

export default router
