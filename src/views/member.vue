<template>
  <el-container>
    <el-header class="head">
      <div class="left">
        <img src="@assets/home/菜单.png" alt="" class="pic">
        <p>权限人员</p>
      </div>
      <div class="right">
          <div class="icon">
            <img src="@assets/home/xiaoxi.png" alt="">
          </div>
          <div class="icon">
            <img src="@assets/home/头像.png" alt="">
          </div>
          <p>minus</p>
      </div>
    </el-header>
    <el-main class="main">
      <div class="top">
        <div class="title">
          <img src="@assets/member/添加.png" alt="">
          <p>添加概述人员</p>
        </div>
        <div class="detail">
          <div class="box">
            <img src="@assets/member/添加人员.png" alt="">
            <el-button type="primary" @click="add_dialog = true">单独添加</el-button>
          </div>
          <div class="box">
            <img src="@assets/member/重点人群.png" alt="">
            <el-button type="primary" @click="add_dialog_two = true">批量添加</el-button>
          </div>
          <div class="box">
            <img src="@assets/member/模板.png" alt="">
            <el-button type="primary">模板下载</el-button>
          </div>
           </div>
        <div class="title">
          <img src="@assets/member/概述.png" alt="">
          <p>添加概述人员</p>
        </div>
      </div>
      <div class="bottom">
        <div class="search">
          <el-input
  placeholder="请输入内容"
  v-model="input"
  clearable
  prefix-icon="el-icon-search"
  class="first">
</el-input>
         <icon_two/>
        </div>
      </div>
      <el-card class="box-card">
        <list/>
      </el-card>
    </el-main>
    <el-dialog
  title="单独添加"
  :visible.sync="add_dialog"
  width="50%"
  class="dialog_one">
  <form_one/>
  <span slot="footer" class="dialog-footer">
    <el-button @click="add_dialog = false">取 消</el-button>
    <el-button type="primary" @click="add_dialog = false">确 定</el-button>
  </span>
</el-dialog>
<el-dialog
  title="批量上传"
  :visible.sync="add_dialog_two"
  width="35%">
  <form_two/>
  <span slot="footer" class="dialog-footer">
    <el-button @click="add_dialog_two = false">取 消</el-button>
    <el-button type="primary" @click="add_dialog_two = false">确 定</el-button>
  </span>
</el-dialog>

  </el-container>
</template>

<script>
import form_one from '@views/member/form_one.vue'
import form_two from '@views/member/form_two.vue'
import icon_two from '@views/member/icon_two.vue'
import list from '@views/member/list.vue'

export default {
name:'member',
components: {
form_one,
form_two,
icon_two,
list
  
},
data() {
      return {
        add_dialog: false,
        add_dialog_two: false,
         input: ''
      };
    }

}

</script>
<style lang='scss' scoped>
@import '@style/color.scss';
.el-main{
  padding: 0;
}
.el-header{
  padding: 0 219px 0 80px;
}
.head{
  margin-top: 44px;
  display: flex;
  justify-content: space-between;
  position: relative;
}
.left{
  display: flex;
  .pic{
    width: 30px;
    height: 30px;
    padding-right: 10px;
  }
  p{
    font: 18px color bold;
  }
}
.right{
  display: flex;
  align-items: center;
  .icon{
    border-radius: 20px;
    width: 40px;
    height: 40px;
    @include shadow;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width: 18px
    }
  }
  p
  {
   font: 14px 'right';
  }
}
.top{
  padding: 0 329px 0 104px;
  .title{
    display: flex;
    margin: 27px  0;
    img{
      width: 17px;
      padding-right: 10px
    };
    p{font: 16px;}
  }
  .detail{
    display: flex;
    justify-content: space-between;
    padding-left: 27px;
    .box{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 360px;
      height: 180px;
      background-color: white;
      @include shadow;
      img{height: 66px;}
      .el-button--primary{
        border-radius: 8px;
        margin-top: 27px;
        width: 96px;
        @include shadow;
        background-color: #957bf1;
        border: none;
      }
    }
  }
}
.bottom{
  .search{
  padding: 0 325px 0 86px;
  display: flex;
}

  
}
.first /deep/.el-input__inner{
  line-height: 64px;
  height: 64px;
  border-radius: 32px;
  @include shadow;
}
.box-card{
  margin:23px 325px 0 86px ;
  text-align: center;
}
.dialog_one /deep/ .el-dialog
{
  border-radius: 20px;
}

</style>