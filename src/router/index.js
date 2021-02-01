import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@views/home.vue'
import member from '@views/member.vue'
import character from '@views/character.vue'
import message from '@views/message.vue'
import order from '@views/order.vue'
import user from '@views/user.vue'

Vue.use(VueRouter)


const router = new VueRouter({
  routes:[
    {path:'/',redirect:'/one'},
    {path:'/one',component:home},
    {path:'/two_one',component:member},
    {path:'/two_two',component:character},
    {path:'/three',component:message},
    {path:'/four',component:order},
    {path:'/five',component:user}


  ]
})

export default router
