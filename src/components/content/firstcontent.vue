<template>
  <el-container>
     <el-header class="content">
      <div class="left">
         <div><img src="@assets/home/菜单.png" alt="" class="icon"></div>
         <span>权限人员</span>
      </div>
      <div class="right">
         <div class="xiaoxi"></div>
         <div class="touxiang"></div>
         <span>minus</span>
      </div>
   </el-header>
    <el-main>Main</el-main>
  </el-container>
</template>

<script>
export default {
name:'firstcontent',
}

</script>
<style lang='scss' scoped>
@import'@style/color.scss';
.content{
   padding-top: 44px;
   width: 100%;
   display: flex;
   justify-content: space-between;
   
}
.left{
  display: flex;
  padding-left: 80px;
}
.left .icon{
width:25px;
}
.left span{
   font: 18px bold;
   padding-left: 10px;
}
.right{
  display: flex;
  padding-right: 200px;
}
.right span{
  font: 14px 'Segoe UI';
  line-height: 40px;
}
.right div
{
  width: 40px;
  height: 40px;
  border-radius: 20px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16);
  background-color: white;
 margin-right: 12px;
}
 
</style>