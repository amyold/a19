<template>
  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      router>
      <el-menu-item index="one">
        <img src="@assets/home/主页.png" alt="">
        <span slot="title">首页</span>
      </el-menu-item>
       <el-submenu index="two">
          <template slot="title">
            <img src="@assets/home/权限.png" alt="">
            <span>权限管理</span>
          </template>
          <el-menu-item index="two_one">
            <img src="@assets/home/权限列表.png" alt="">
            <span slot="title">权限人员</span>
            </el-menu-item>
          <el-menu-item index="two_two">
           <img src="@assets/home/角色列表.png" alt="">
            <span slot="title">角色列表</span>
          </el-menu-item>
        </el-submenu>
      <el-menu-item index="three">
              <img src="@assets/home/消息.png" alt="">
        <span slot="title">消息回复</span>
      </el-menu-item>
      <el-menu-item index="four">
           <img src="@assets/home/订单.png" alt="">

        <span slot="title">订单管理</span>
      </el-menu-item>
      <el-menu-item index="five">
               <img src="@assets/home/商品.png" alt="">

        <span slot="title">用户管理</span>
      </el-menu-item>
    </el-menu>
</template>

<script>
export default {
name:'el_menu'
}

</script>
<style lang='scss' scoped>
.el-menu-vertical-demo{
  text-align: center;
  img{
    width: 18px;
    padding-right: 10px;
  }
}
</style>