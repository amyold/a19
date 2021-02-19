<template>
<!-- 退还货待处理 -->
  <el-container>
    <el-header>
      <div class="name">
        <img src="@assets/home/菜单.png">
        <div>订单列表</div>
      </div>
    </el-header>
    <el-main>
      <div class="about">
        <div class="op">
          <div class="seek"><search/></div>
         <el-button class="btn"> <sort/></el-button>
         <el-button class="btn"><cancel/></el-button>
        </div>
         <div class="datalist">
          <el-table
       ref="multipleTable"
       :data="tableData"
       tooltip-effect="dark"
       style="width:1412px"
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
         width="50">
       </el-table-column>
       <el-table-column
         prop="OrderNumber"
         label="订单编号"
         width="100">
       </el-table-column>
       <el-table-column
         prop="ApplyTime"
         label="申请时间"
         width="180">
       </el-table-column>
       <el-table-column
         prop="HandTime"
         label="处理时间"
         width="180">
       </el-table-column>
       <el-table-column
         prop="account"
         label="用户账户"
         width="100">
       </el-table-column>
       <el-table-column
         prop="OrderStatus"
         label="申请状态"
         width="80">
       </el-table-column>
       <el-table-column
         prop="BackAmount"
         label="退款金额"
         width="80">
       </el-table-column>
       <el-table-column
       prop="processor"
         label="处理人"
         width="80">
       </el-table-column>
       <el-table-column
         label="操作"
         show-overflow-tooltip>
         <el-button  type="primary" class="edit" @click="switchTo('/SubmitOrderBack')">查看详情</el-button>
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
export default {
name:'',
methods:{
  switchTo(path) {
        console.log("hello");
        console.log(path);
        this.$router.push(path)
      },
},
 data() {
    return {
       count: 1,
    tableData: [{
          number: 1,
         OrderNumber: 'DDDDD009',
         ApplyTime: '2021/1/1',
         HandTime: '2021/1/2',
         account: 'minus',
         OrderStatus:'已完成',
         BackAmount:'19.9￥',
         processor:'ddd',
        }],
        multipleSelection: []
  }
}

}

</script>
<style lang='scss' scoped>
.el-header{
  padding: 0 0;
}
.el-main{
  padding-left: 0;
  padding-right: 0;
}
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
.el-button--primary {
  width: 96px;
  height: 32px;
  font-size: 12px;
  border-radius: 8px;
  border: none;
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
  .datalist {
    margin-top: 40px;
    .page {
      margin-top: 24px;
    }
    .edit {
  background-color: #957BF1;
  &:hover{
      background-color: #a38ef4;

  }
}
  }
}
.el-pagination {
    padding-left: 1200px;
    padding-top: 20px;
}
</style>