import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: () => import('@views/home.vue') },
    { path: '/authorityPerson', component: () => import('@views/authorityPerson.vue') },
    { path: '/role', component: () => import('@views/role.vue') },
    { path: '/order', component: () => import('@views/order.vue') },
    { path: '/more', component: () => import('@views/userManage/more.vue') },
    { path: '/commodityTotal', component: () => import('@views/merchant/commodityTotal.vue') },
    { path: '/commodityKind', component: () => import('@views/merchant/commodityKind.vue') },
    { path: '/commodityUpload', component: () => import('@views/merchant/commodityUpload.vue') },
    { path: '/OrderList', component: () => import('@views/merchant/OrderList.vue') },
    { path: '/sendback', component: () => import('@views/merchant/sendback.vue') },
    { path: '/SubmitOrder', component: () => import('@views/order/SubmitOrder.vue') },
    { path: '/PayOrder', component: () => import('@views/order/PayOrder.vue') },
    { path: '/OrderDeliver', component: () => import('@views/order/OrderDeliver.vue') },
    { path: '/Confirm', component: () => import('@views/order/Confirm.vue') },
    { path: '/Finish', component: () => import('@views/order/Finish.vue') },
  ]
})

export default router
