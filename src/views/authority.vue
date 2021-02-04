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
            <el-button type="primary" >单独添加</el-button>
          </div>
          <div class="box">
            <img src="@assets/member/重点人群.png">
            <el-button type="primary">批量添加</el-button>
          </div>
          <div class="box">
            <img src="@assets/member/模板.png">
            <el-button type="primary">模板下载</el-button>
          </div>
           </div>
      </div>
      <div class="about">
        <div class="title">
          <img src="@assets/member/概述.png">
          <p>权限人员概况</p>
        </div>
        <div class="op">
          <div class="seek"><search/></div>
          <sort/>
          <cancel/>
        </div>
        <div class="datalist">
          <el-table
       ref="multipleTable"
       :data="tableData"
       tooltip-effect="dark"
       style="width: 1412px"
       :header-cell-style="{'text-align':'center'}"
       :cell-style="{'text-align':'center','pading-top':'20px'}"
       @selection-change="handleSelectionChange">
       <el-table-column
         type="selection"
         width="55">
       </el-table-column>
       <el-table-column
         prop="number"
         label="序号"
         width="120">
       </el-table-column>
       <el-table-column
         prop="name"
         label="姓名"
         width="120">
       </el-table-column>
       <el-table-column
         prop="account"
         label="账号"
         width="120">
       </el-table-column>
       <el-table-column
         prop="email"
         label="邮箱"
         width="180">
       </el-table-column>
       <el-table-column
         prop="addTime"
         label="添加时间"
         width="200">
       </el-table-column>
       <el-table-column
         prop="lastTime"
         label="最后登录时间"
         width="200">
       </el-table-column>
       <el-table-column
         label="是否启用"
         width="120">
         <el-switch v-model="value1">
</el-switch>
       </el-table-column>
       <el-table-column
         label="操作"
         show-overflow-tooltip>
         <el-button  type="primary" class="edit">编辑</el-button>
         <el-button  type="primary" class="cancel1">删除</el-button>
       </el-table-column>
     </el-table>
     <div id="page">
       <el-pagination
        background
        layout="total, prev, pager, next"
        :total="count">
      </el-pagination>
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
  return {
    value1: true,
    count: 1,
    tableData: [{
          number: 1,
          name: 'minus',
          account: '18559120521',
          email: '1874508358@qq.com',
          addTime: '2019-07-04 23:59:59',
          lastTime: '2020-07-04 23:59:59',
        }],
        multipleSelection: []
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
      }
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
  padding-left: 104px;
  .detail {
    display: flex;
    justify-content: space-between;
    padding-left: 27px;
    padding-right: 329px;
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

.about {
  display: flex;
  flex-direction: column;
  padding-left: 104px;
  .seek {
    padding-right: 27px;
  }
  .op {
    display: flex;
  }
  .datalist {
    margin-top: 24px;
    .page {
      margin-top: 24px;
    }
  }
}

.el-button--primary {
  width: 96px;
  height: 32px;
  font-size: 12px;
  border-radius: 8px;
  border: none;
}
.edit {
  background-color: #957BF1;
}

.cancel1 {
  background-color: #F56C6C;
}

.el-pagination {
    padding-left: 1200px;
    padding-top: 20px;
}
</style>