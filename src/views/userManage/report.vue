<template>
  <div class="datalist">
          <el-table
       ref="multipleTable"
       :data="tableData"
       tooltip-effect="dark"
       style="width: 1412px"
       :header-cell-style="{'text-align':'center'}"
       :cell-style="{'text-align':'center','pading-top':'20px'}"
       :row-style="{height:'100px'}"
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
       prop="account"
         label="举报者账号"
         width="120">
       </el-table-column>
       <el-table-column
         prop="reportedName"
         label="被举报用户名"
         width="120">
       </el-table-column>
       <el-table-column
         prop="reportedAccount"
         label="用户账号"
         width="120">
       </el-table-column>
       <el-table-column
         prop="reason"
         label="举报理由"
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
         <el-button  type="primary" class="edit">查看详情</el-button>
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
</template>

<script>
export default {
  name:'report',
  data() {
    return {
    value1: true,
    count: 1,
    tableData: [{
          number: 1,
          account: 'dadada1',
          reportedName: '泰罗奥特曼',
          reportedAccount: 'tailuo123',
          reason: '斯特里姆光线残骸花花草草',
          remark: '贩卖各种怪兽宠物'
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
.datalist {
    margin-top: 32px;
    .page {
      margin-top: 24px;
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

.el-pagination {
    padding-left: 1200px;
    padding-top: 20px;
}
</style>