<template>
  <div class="container">
    <div class="datalist">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 1320px"
        :header-cell-style="{ 'text-align': 'center', 'font-size': '12px' }"
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
        <el-table-column prop="productName" label="商品名" width="180">
        </el-table-column>
        <el-table-column prop="depositor" label="寄存人" width="120">
        </el-table-column>
        <el-table-column prop="phoneNumber" label="联系电话" width="120">
        </el-table-column>
        <el-table-column
          prop="bussinessInfo"
          label="商家店铺/联系电话"
          width="240"
        >
        </el-table-column>
        <el-table-column prop="leftTime" label="剩余时间" width="120">
        </el-table-column>
        <el-table-column label="操作" show-overflow-tooltip>
          <el-button type="primary" @click="open1" class="edit"
            >提醒用户</el-button
          >
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
  name: "register",
  data() {
    return {
      value1: true,
      count: 1,
      tableData: [
        {
          number: 1,
          productPic: "https://s3.ax1x.com/2021/02/23/yLu6eS.jpg",
          productName: "超级马里奥",
          depositor: "minus",
          phoneNumber: "18559120521",
          bussinessInfo: "minus/18559120521",
          leftTime: "23:01:13",
        },
        {
          number: 2,
          productPic:
            "https://www.androidical.com/wp-content/uploads/2020/05/Xiaomi-Redmi-Note-9.jpg",
          productName: "Redmi Note9",
          depositor: "李凌印",
          phoneNumber: "18559120521",
          cost: "12.99元/天",
          address: "福建省南平市创世纪",
          clientInfo: "/18559120521",
          bussinessInfo: "小米官方旗舰店/13859322312",
          leftTime: "47:10:20",
        },
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
    open1() {
      this.$notify({
        title: "发送成功",
        message: "用户已收到您的提醒",
        type: "success",
      });
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