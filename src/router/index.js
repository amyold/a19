import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    {path:'/home',component: () => import('@views/home.vue')},
    {path:'/authority1',component: () => import('@views/authority.vue')},
    {path:'/authority2',component: () => import('@views/role.vue')},
    {path:'/order',component: () => import('@views/order.vue')},
    {path:'/chat',component: () => import('@views/chat.vue')},
    {path:'/user',component: () => import('@views/user.vue')},
  ]
})

export default router
