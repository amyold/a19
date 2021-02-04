<template>
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
         width="100">
       </el-table-column>
       <el-table-column
         prop="orderNumber"
         label="订单编号"
         width="100">
       </el-table-column>
       <el-table-column
         prop="orderStatus"
         label="订单状态"
         width="100">
       </el-table-column>
       <el-table-column
         prop="deliveryStatus"
         label="物流状态"
         width="100">
       </el-table-column>
       <el-table-column
         prop="feedback"
         label="用户反馈"
         width="300">
       </el-table-column>
       <el-table-column
         prop="remark"
         label="备注"
         width="300">
       </el-table-column>
       <el-table-column
         label="操作"
         show-overflow-tooltip>
         <el-button  type="primary" class="check">查看详情</el-button>
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
  name:'order',
  data() {
    return {
    value1: true,
    count: 1,
    tableData: [{
          number: 1,
          orderNumber: 'dadadad',
          orderStatus: '已支付',
          deliveryStatus: '已发货',
          feedback: '它竟然卖百度云账号！！！！！！！！',
          remark: '好耶'
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
  }
  .datalist {
    margin-top: 40px;
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
.check {
  background-color: #957BF1;
}

.el-pagination {
    padding-left: 1200px;
    padding-top: 20px;
}
</style>