import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes:[
    {path:'/',redirect: '/login'},
    {path:'/login',component: () => import('@views/login.vue')},
    {path:'/home',component: () => import('@views/home.vue')},
    {path:'/admin',component: () => import('@views/authority.vue')},
    {path:'/role',component: () => import('@views/role.vue')},
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
    {
      path: '/merchant',component:()=>import("@views/merchant.vue")
    }
  ]
})

export default router
