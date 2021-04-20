<template>
  <el-container>
    <el-header>
      <div class="name">
        <img src="@assets/home/菜单.png">
        <div>用户管理</div>
      </div>
    </el-header>
    <el-main>
      <div class="about">
        <div class="op">
          <div class="seek"><search/></div>
         <el-button class="btn"> <sort/></el-button>
         <el-button class="btn"><cancel/></el-button>
        </div>
        <div class="kind">
          <button @click="switchTo('/user/check')" class="choose" name='btn'>
            商品审核：1
          </button>
          <button @click="switchTo('report')" class="choose" name='btn'>
            举报反馈：1
          </button>
          <button @click="switchTo('administration')" class="choose" name='btn'>
            商家管理：1
          </button>
        </div>
        <router-view></router-view>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name:'user',
  data() {
    return {
  }
},
    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      switchTo(path) {
        console.log("hello");
        console.log(path);
        this.$router.push(path)
      }
    }
}
</script>
<style lang="scss" scoped>
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

.about {
  display: flex;
  flex-direction: column;
  padding-left: 104px;
  margin-top: 40px;
  .seek {
    padding-right: 27px;
  }
  .op {
    display: flex;
    .btn{
      margin: 0;
      padding: 0;
      border: none;
      background-color: transparent;
      outline: none;}
  }
  .kind {
    display: flex;
    flex-direction: row;
    padding-top: 27px;
    .choose {
    width: 180px;
    height: 60px;
    background: #ffffff;
    color: #666666;
    box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.16);
    font-size: 14px;
    font-weight: bold;
    border: none;
    text-align: center;
    line-height: 60px;
    margin-right: 20px;
    border-radius: 8px;
    }
    .choose:hover,
    .choose:focus{
     color:#616BBE ;
    }
  }
}
button:focus{outline:0;}
</style>