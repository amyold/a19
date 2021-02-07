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
        <el-submenu index="/commodity">
          <template slot="title">
            <img src="@assets/home/商品.png">
            <span>商品管理</span>
          </template>
          <el-menu-item index="/commodity1">
            <img src="@assets/home/查找 表单 列表.png">
            <span slot="title">全部商品</span>
            </el-menu-item>
          <el-menu-item index="/commodity2">
           <img src="@assets/home/待处理订单.png">
            <span slot="title">分类管理</span>
          </el-menu-item>
          <el-menu-item index="/commodity3">
           <img src="@assets/home/待处理订单.png">
            <span slot="title">上传商品</span>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="/OrderManage">
          <template slot="title">
            <img src="@assets/home/订单.png">
            <span>订单管理</span>
          </template>
          <el-menu-item index="/OrderList">
            <img src="@assets/home/查找 表单 列表.png">
            <span slot="title">订单列表</span>
            </el-menu-item>
          <el-menu-item index="/Sendback">
           <img src="@assets/home/待处理订单.png">
            <span slot="title">退还货待处理</span>
          </el-menu-item>
        </el-submenu>
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
         <el-menu-item index="/message">
           <img src="@assets/home/消息.png">
            <span slot="title">消息回复</span>
          </el-menu-item>
      
    </el-menu>
</template>

<script>
export default {
 name:'merchantaside',
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