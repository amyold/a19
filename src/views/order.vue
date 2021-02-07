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
         <el-button class="btn"> <sort/></el-button>
         <el-button class="btn">          <cancel/>
</el-button>
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
         width="80">
       </el-table-column>
       <el-table-column
         prop="orderNumber"
         label="订单编号"
         width="120">
       </el-table-column>
       <el-table-column
         prop="orderStatus"
         label="订单状态"
         width="120">
       </el-table-column>
       <el-table-column
         prop="deliveryStatus"
         label="物流状态"
         width="120">
       </el-table-column>
       <el-table-column
         prop="feedback"
         label="用户反馈"
         width="300">
       </el-table-column>
       <el-table-column
         prop="remark"
         label="备注"
         width="100">
       </el-table-column>
       <el-table-column
         label="操作"
         show-overflow-tooltip>
         <el-button  type="primary" class="check" @click="more=true">查看详情</el-button>
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
       <el-dialog
  title="反馈内容"
  :visible.sync="more"
  width="45%"
  >
  <el-form :model="ruleForm"  ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="号码" prop="number">
    <el-input v-model="ruleForm.number"></el-input>
  </el-form-item>
  <el-form-item label="描述" prop="description">
    <el-input v-model="ruleForm.description"></el-input>
  </el-form-item>
   <el-form-item label="相关资料" prop="detail">
    <el-input v-model="ruleForm.detail"></el-input>
  </el-form-item>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="more = false">取 消</el-button>
    <el-button type="primary" @click="more = false">确 定</el-button>
  </span>
</el-dialog>
    </el-main>
    
  </el-container>
</template>

<script>
export default {
  name:'order',
  data() {
    return {
      more:false,
    value1: true,
    count: 1,
    ruleForm: {
          number: '',
          descriptiont: '',
          detail: ''
        },
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

.check:hover {
  background-color: #a38ef4;
}
.el-pagination {
    padding-left: 1200px;
    padding-top: 20px;
}
</style>