<template>
  <el-container>
    <el-header>
      <div class="name">
        <img src="@assets/home/菜单.png">
        <div>权限人员</div>
      </div>
    </el-header>
    <el-main>
      <div class="add">
        <div class="title">
          <img src="@assets/member/添加.png" alt="">
          <p>添加概述人员</p>
        </div>
        <div class="detail">
          <div class="box">
            <img src="@assets/member/添加人员.png">
            <el-button type="primary" @click="add_dialog = true">单独添加</el-button>
          </div>
          <div class="box">
            <img src="@assets/member/重点人群.png">
            <el-button type="primary" @click="add_dialog_two = true">批量添加</el-button>
          </div>
          <div class="box">
            <img src="@assets/member/模板.png">
            <el-button type="primary">模板下载</el-button>
          </div>
           </div>
      </div>
      <div class="about">
        <div class="title">
          <img src="@assets/member/概述.png" alt="">
          <p>权限人员概况</p>
        </div>
        <div class="list">
          <search/>
          <div class="op">
            <sort/>
            <cancel/>
          </div>
        </div>  
      </div>
    </el-main>
  </el-container>
</template>

<script>
import Search from '../components/search.vue'
export default {
name:'member',
components: {
Search
},
data() {
  return {}
}
}
</script>
<style lang='scss' scoped>
.name {
  display: flex;
  font-size: 18px;
  padding-top: 44px;
  padding-left: 84px;
  width: 120px;
  img {
    height: 24px;
    width: 24px;
    padding-right: 12px;
  }
}

.add {
  padding: 0 329px 0 104px;
  .detail {
    display: flex;
    justify-content: space-between;
    padding-left: 27px;
    .box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 360px;
      height: 180px;
      background-color: white;
      border-radius: 16px;
      box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.16);
      img {
        height: 64px;
        width: 64px
        }
      .el-button--primary {
        border-radius: 8px;
        margin-top: 27px;
        width: 96px;
        border-radius: 8px;
        font-size: 12px;
        background-color: #957bf1;
        border: none;
      }
    }
  }
}

.about {
  padding: 48px 329px 0 104px;
}

.title {
    display: flex;
    margin: 27px  0;
    img {
      width: 18px;
      height: 18px;
      padding-right: 10px
    };
    p {font: 16px;}
  }

.list {
  display: flex;
  .search {
  }
  .op {
    display: flex;
  }
}
</style>