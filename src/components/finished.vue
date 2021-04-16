<template>
  <div class="container">
    <div class="datalist">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 1320px"
        :header-cell-style="{ 'text-align': 'center', 'font-size': '12px', }"
        :cell-style="{
          'text-align': 'center',
          'padding-top': '20px',
          'font-size': '12px',
        }"
        :row-style="{ height: '100px' }"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="number" label="序号" width="45">
        </el-table-column>
        <el-table-column prop="productPic" label="商品图片" width="120">
          <template slot-scope="scope">
            <el-image :src="scope.row.productPic"></el-image>
          </template>
        </el-table-column>
        <el-table-column prop="productName" label="商品名" width="120">
        </el-table-column>
        <el-table-column prop="dayNumber" label="已寄存天数" width="120">
        </el-table-column>
        <el-table-column prop="cost" label="寄存单价" width="75">
        </el-table-column>
        <el-table-column prop="address" label="收货地址" width="180">
        </el-table-column>
        <el-table-column
          prop="clientInfo"
          label="收货人/联系电话"
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop="bussinessInfo"
          label="商家店铺/联系电话"
          width="180"
        >
        </el-table-column>
        <el-table-column prop="totalCost" label="总费用" width="70">
        </el-table-column>
        <el-table-column prop="state" label="状态" show-overflow-tooltip>
        </el-table-column>

      </el-table> 
    </div>
    <div class="page">
        <el-pagination
          background
          layout="total, prev, pager, next"
          :total="count"
        >
        </el-pagination>
      </div>
  </div>
</template>

<script>
export default {
  name: "finished",
  data() {
    return {
      value1: true,
      count: 3,
      tableData: [
        {
          number: 1,
          productPic: "https://s3.ax1x.com/2021/02/23/yLu6eS.jpg",
          productName: "超级马里奥",
          dayNumber: "10天",
          cost: "10元/天",
          address: "某某省某某市某某大学城",
          clientInfo: "minus/18559120521",
          bussinessInfo: "minus/18559120521",
          totalCost: '100元',
          state: "已完成"
        },
        {
          number: 2,
          productPic: "https://s3.ax1x.com/2021/02/23/yLuWJs.jpg",
          productName: "塞尔达传说",
          dayNumber: "16天",
          cost: "12元/天",
          address: "某某省某某市某某大学城",
          clientInfo: "plus/18559120521",
          bussinessInfo: "minus/18559120521",
          totalCost: '192元',
          state: "已完成"
        },
        {
          number: 1,
          productPic: "https://s3.ax1x.com/2021/02/23/yLu6eS.jpg",
          productName: "超级马里奥",
          dayNumber: "10天",
          cost: "10元/天",
          address: "某某省某某市某某大学城",
          clientInfo: "minus/18559120521",
          bussinessInfo: "minus/18559120521",
          totalCost: '100元',
          state: "已完成"
        }
      ],
      multipleSelection: [],
    };
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  },
};
</script>
<style scoped>
.datalist {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
}

.datalist .page {
  margin-top: 24px;
}

.el-button--primary {
  height: 32px;
  font-size: 2px;
  border-radius: 8px;
  border: none;
}

.edit {
  background-color: #957bf1;
}

.edit:hover {
  background-color: #a38ef4;
}

.el-pagination {
  padding-left: 1140px;
  padding-top: 20px;
}
</style>