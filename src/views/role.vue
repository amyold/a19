<template>
  <el-container>
    <el-header>
      <div class="name">
        <img src="@assets/home/菜单.png">
        <div>角色列表</div>
      </div>
    </el-header>
    <el-main>
      <div class="about">
        <div class="op">
          <div class="seek"><search/></div>
         <el-button class="btn"> <sort/></el-button>
         <el-button class="btn"> <cancel/></el-button>
         <el-button class="btn" @click="addrole=true"><add/></el-button>
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
         label="角色名称"
         width="120">
       </el-table-column>
       <el-table-column
         prop="describe"
         label="描述"
         width="200">
       </el-table-column>
       <el-table-column
         prop="personCount"
         label="人员数"
         width="120">
       </el-table-column>
       <el-table-column
         prop="addTime"
         label="添加时间"
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
         <el-button  type="primary" class="edit" @click="edit=true">编辑</el-button>
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
      <el-dialog
  title="编辑"
  :visible.sync="edit"
  width="40%"
  >
  <editform/>
  <span slot="footer" class="dialog-footer">
    <el-button @click="edit = false">取 消</el-button>
    <el-button type="primary" @click="edit = false">确 定</el-button>
  </span>
</el-dialog>
 <el-dialog
  title="添加角色"
  :visible.sync="addrole"
  width="40%"
  >
  <addrole/>
  <span slot="footer" class="dialog-footer">
    <el-button @click="addrole = false">取 消</el-button>
    <el-button type="primary" @click="addrole = false">确 定</el-button>
  </span>
</el-dialog>
    </el-main>
  </el-container>
</template>

<script>
import editform from '@views/userManage/editform.vue'
import addrole from '@views/userManage/addrole.vue'
import add from '@components/add.vue'

export default {
  name:'role',
  data() {
    return {
      addrole:false,
      edit:false,
    value1: true,
    count: 1,
    tableData: [{
          number: 1,
          name: 'minus',
          describe: '18559120521',
          personCount: 10,
          addTime: '2019-07-04 23:59:59',
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
    },
    components:{
      editform,
      addrole,
      add
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
      outline: none;
}
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

.el-pagination {
    padding-left: 1200px;
    padding-top: 20px;
}
</style>