<template>
<!--订单列表 -->
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
         prop="submission"
         label="提交时间"
         width="180">
       </el-table-column>
       <el-table-column
         prop="status"
         label="支付状态"
         width="80">
       </el-table-column>
       <el-table-column
         prop="account"
         label="用户账户"
         width="100">
       </el-table-column>
       <el-table-column
         prop="OrderStatus"
         label="订单状态"
         width="80">
       </el-table-column>
       <el-table-column
         prop="OrderAmount"
         label="订单金额"
         width="80">
       </el-table-column>
       <el-table-column
       prop="DeliverStatus"
         label="物流情况"
         width=" 80">
       </el-table-column>
       <el-table-column
         label="操作"
         show-overflow-tooltip>
         <el-button  type="primary" class="edit" @click="switchTo('/SubmitOrder')">查看详情</el-button>
         <el-button  type="primary" class="cancel1" @click.native.prevent="deleteRow(scope.$index, tableData)" >删除订单</el-button>
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
      },
      
       deleteRow(index, rows) {
        rows.splice(index, 1);
      }
}
,
 data() {
    return {
       count: 1,
    tableData: [{
          number: 1,
         OrderNumber: 'DDDDD009',
          submission: '2019-07-04 23:59:59',
          status: '已支付',
         account: 'minus',
         OrderStatus:'已发货',
         OrderAmount:'19.9￥',
         DeliverStatus:'运输中',
        },
        {
          number: 1,
         OrderNumber: 'DDDDD009',
          submission: '2019-07-04 23:59:59',
          status: '已支付',
         account: 'minus',
         OrderStatus:'已发货',
         OrderAmount:'19.9￥',
         DeliverStatus:'运输中',
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
  }
}
.el-pagination {
    padding-left: 1200px;
    padding-top: 20px;
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
.edit:hover {
  background-color: #a38ef4;
}

.cancel1 {
  background-color: #F56C6C;
}
.cancel1:hover {
  background-color: #f08383;
}

</style>