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
       prop="productPic"
         label="商品图片"
         width="180">
         <template slot-scope="scope">
              <el-image :src="scope.row.productPic"></el-image>
          </template>
       </el-table-column>
       <el-table-column
         prop="productName"
         label="商品名"
         width="120">
       </el-table-column>
       <el-table-column
         prop="bussinessName"
         label="商家店铺名"
         width="120">
       </el-table-column>
       <el-table-column
         prop="bussinessAccount"
         label="商家账号"
         width="120">
       </el-table-column>
       <el-table-column
         prop="bussinessScope"
         label="经营范围"
         width="300">
       </el-table-column>
       <el-table-column
         label="操作"
         show-overflow-tooltip>
         <el-button  type="primary" class="edit" @click="switchTo('/more')" >查看详情</el-button>
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
  name:'check',
  data() {
    return {
    value1: true,
    count: 1,
    tableData: [
        {
          number: 1,
          productPic: 'https://th.bing.com/th/id/OIP._ywz8NtRKox6M5gykTc2_AHaGD?pid=ImgDet&rs=1',
          productName: '小米11青春版',
          bussinessName: '小米之家',
          bussinessAccount: 'automan123',
          bussinessScope: '家电数码'
        },
         {
          number: 2,
          productPic: 'https://th.bing.com/th/id/OIP.JSsB9dbXWxQ1WUR2sXrOwgHaHa?pid=ImgDet&rs=1',
          productName: '小米11',
          bussinessName: '小米之家',
          bussinessAccount: 'automan123',
          bussinessScope: '家电数码'
        },
         {
          number: 3,
          productPic: 'https://th.bing.com/th/id/OIP.fDDqxE4vWucxrct0nSKmzgHaIq?pid=ImgDet&rs=1',
          productName: 'Redmi Note8 Pro',
          bussinessName: '小米之家',
          bussinessAccount: 'automan123',
          bussinessScope: '家电数码'
        },
         {
          number: 4,
          productPic: 'https://th.bing.com/th/id/OIP.bo7-Y-u2qiP8FfNOC7G1MwHaHp?pid=ImgDet&rs=1',
          productName: 'iphone 11',
          bussinessName: 'apple官方租赁店',
          bussinessAccount: 'aut1232453',
          bussinessScope: '家电数码'
        },
        ],
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
.edit:hover{
background-color: #a38ef4;
}


.el-pagination {
    padding-left: 1200px;
    padding-top: 20px;
}
</style>