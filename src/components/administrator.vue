<template>
  <el-container class="bg">
  <el-aside class="aside">
  <div class="logo">
    <p>ultraman</p>
  </div>
  <el_menu/>
  </el-aside>
   <router-view></router-view>
</el-container>

</template>

<script>
import el_menu from '@components/el_menu.vue'
export default {
name:'home',
components: {
  el_menu
}

}

</script>
<style lang='scss' scoped>
@import '@style/color.scss';
.bg{
    width: 100vw;
    height: 100vh;
    background-color:$backgroundcolor ;
    .aside{
        background-color: white;
        width: 264px;
        border-radius: 0 32px 0 0;
        @include shadow;
        .logo{
          margin: 57px 0 43px;
          text-align: center;
          p{
            font: 20px bold;
            color:#707070 ;}
        }
    }
}
</style>