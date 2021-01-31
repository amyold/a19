<template>
 <el-aside class="aside">
     <div class="title"><p>ultraman</p></div>
   <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item index="1">
       <img src="@assets/home/主页.png" alt="" class="icon">
        <span slot="title" >首页</span>
      </el-menu-item>
      <el-submenu index="2">
          <template slot="title">
            <img src="@assets/home/权限.png" alt="" class="icon">      
            <span >权限管理</span>
          </template>
          <el-menu-item index="1-4-1">
            <img src="@assets/home/权限列表.png" alt="" class="icon">
            <span >权限人员</span>
          </el-menu-item>
          <el-menu-item index="1-4-1">
              <img src="@assets/home/角色列表.png" alt="" class="icon">      
            <span >角色列表</span>
          </el-menu-item>
        </el-submenu>
      <el-menu-item index="3">
              <img src="@assets/home/消息.png" alt="" class="icon">      
        <span slot="title" >消息回复</span>
      </el-menu-item>
      <el-menu-item index="4">
              <img src="@assets/home/订单.png" alt="" class="icon">      
        <span slot="title" >订单管理</span>
      </el-menu-item>
      <el-menu-item index="5">
              <img src="@assets/home/商品.png" alt="" class="icon">      
        <span slot="title" >用户管理</span>
      </el-menu-item>
    </el-menu>
 </el-aside>
</template>

<script>
export default {
name:'firstaside'

}

</script>
<style lang='scss' scoped>
@import'@style/color.scss';
.icon{
    width: 18px;
}
.el-menu-vertical-demo span{
  padding-left: 16px;
}
.el-menu-vertical-demo
{
  margin-top: 42px;
}
.aside{
    text-align: center;
    width: 264px;
    background-color:white;
    box-shadow: 0 30x 60x rgba(0,0,0,0.16);
    border-radius: 0 32px 0 0;
    .title{
        padding-top: 57px;
    p{
    font-size: 20px;
    color:$fontcolor;
    };
    }
}
</style>