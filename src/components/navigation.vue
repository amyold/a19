<template>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      router>
      <div class="logo">
          <img src="@assets/home/paper.png">
          <p>ultraman</p>
      </div>
      <el-menu-item index="/home">
        <img src="@assets/home/主页.png">
        <span slot="title">首页</span>
      </el-menu-item>
       <el-submenu index="/authorty">
          <template slot="title">
            <img src="@assets/home/权限.png">
            <span>权限管理</span>
          </template>
          <el-menu-item index="/authority1">
            <img src="@assets/home/权限列表.png">
            <span slot="title">权限人员</span>
            </el-menu-item>
          <el-menu-item index="/authority2">
           <img src="@assets/home/角色列表.png">
            <span slot="title">角色列表</span>
          </el-menu-item>
        </el-submenu>
      <el-menu-item index="/order">
           <img src="@assets/home/订单.png">

        <span slot="title">订单管理</span>
      </el-menu-item>
      <el-menu-item index="/user/check">
               <img src="@assets/home/商品.png">
        <span slot="title">用户管理</span>
      </el-menu-item>
    </el-menu>
</template>

<script>
export default {
 name:'navigation',
 methods: {
    }
}
</script>
<style lang="scss">
.logo {
    display: flex;
    padding: 57px;
    background-color: #ffffff !important;
    border-radius: 0px 32px 32px 0px;
    p {
        font-weight: bold;
        font-size: 20px;
        color: #707070; 
    }
}
.el-menu-vertical-demo {
    width: 264px;
    height: 995px;
    background: #fff !important;
    border-radius: 0px 32px 32px 0px;
    box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.16);
    background-color: #616BBE;
    .el-menu-item {
        padding: 4px;
        background-color: #ffffff;
    }
    .el-submenu {
        background-color: #ffffff;
    }
    span {
        color: #939393;
        font-weight: bold;
        line-height: 56px;
    }
    img {
        width: 18px;
        padding-right: 20px;
    }
}

.el-menu-item.is-active {
      background: linear-gradient(to right, #f4f1ff, #ffffff) !important;
      border-radius: 0px 24px 24px 0px;
      box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.16); 
      span {
        color: #616BBE !important;
      }
}

.el-menu-item:hover{
    background: linear-gradient(to right, #f4f1ff, #ffffff) !important;
}

.el-submenu:hover {
    background: linear-gradient(to right, #f4f1ff, #ffffff) !important;
}
</style>