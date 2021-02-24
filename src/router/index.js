import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes:[
    {path:'/',redirect: '/home'},
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
    // 分类管理下的五个路径
    /*
    {path:'/rent',component: () => import('@views/merchant/rent.vue')},
    {path:'/return',component: () => import('@views/merchant/return.vue')},
    {path:'/poststation',component: () => import('@views/merchant/poststation.vue')},
    {path:'/warehouse',component: () => import('@views/merchant/warehouse.vue')},
    {path:'/sale',component: () => import('@views/merchant/sale.vue')},
     */
  
    {path:'/commodity3',component: () => import('@views/merchant/commodity3.vue')},
    // 订单管理下的路径
    {path:'/OrderList',component: () => import('@views/merchant/OrderList.vue')},
    {path:'/OrderManage',component: () => import('@views/merchant/OrderManage.vue')},
    {path:'/sendback',component: () => import('@views/merchant/sendback.vue')},
    {path:'/SubmitOrder',component: () => import('@views/order/SubmitOrder.vue')},
    {path:'/PayOrder',component: () => import('@views/order/PayOrder.vue')},
    {path:'/OrderDeliver',component: () => import('@views/order/OrderDeliver.vue')},
    {path:'/Confirm',component: () => import('@views/order/Confirm.vue')},
    {path:'/Finish',component: () => import('@views/order/Finish.vue')},
    {path:'/SubmitOrderBack',component: () => import('@views/sendback/SubmitOrderBack.vue')},
    {path:'/PayOrderBack',component: () => import('@views/sendback/PayOrderBack.vue')},
    {path:'/ConfirmBack',component: () => import('@views/sendback/ConfirmBack.vue')},
    {path:'/FinishBack',component: () => import('@views/sendback/FinishBack.vue')},
    {path:'/OrderDeliverBack',component: () => import('@views/sendback/OrderDeliverBack.vue')},



    










  ]
})

export default router
