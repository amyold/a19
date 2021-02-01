<template>
 <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange"
    class="table">
    <el-table-column
      type="selection"
      >
    </el-table-column>
    <el-table-column
       align="center"
      label="序号"
      width="60"
      >
      <template slot-scope="scope">{{ scope.row.num }}</template>
    </el-table-column>
    <el-table-column
       align="center"
      prop="name"
      label="姓名"
      >
    </el-table-column>
    <el-table-column
       align="center"
      prop="number"
      label="账号"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
       align="center"
      prop="email"
      label="邮箱"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
       align="center"
      prop="addtime"
      label="添加时间"
      
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
       align="center"
      prop="lastime"
      label="最后登录时间"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
       align="center"
      prop="switch"
      label="是否启用"
      show-overflow-tooltip>
      <template slot-scope="scope">
          <el-switch
  v-model="scope.row.switch"
 >
</el-switch>
      </template>
    </el-table-column>
    <el-table-column
       align="center"
      prop="operate"
      label="操作"
     
      show-overflow-tooltip>
      <template slot-scope="scope">
           <el-button type="primary" v-model="scope.row.operate">编辑</el-button>
           <el-button type="danger" v-model="scope.row.operate">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
name:'list',
data() {
      return {
        tableData: [{
         num: '1',
          name: 'minus',
          number: '10086',
          email:'10086@qq.com',
          addtime:'2021/1/20',
          lastime:'2021/1/31',
          switch:'true',
          operate:'true'
        },
        {
         num: '1',
          name: 'minus',
          number: '10086',
          email:'10086@qq.com',
          addtime:'2021/1/20',
          lastime:'2021/1/31',
          switch:'true',
          operate:'true'
        },
        {
         num: '1',
          name: 'minus',
          number: '10086',
          email:'10086@qq.com',
          addtime:'2021/1/20',
          lastime:'2021/1/31',
          switch:'true',
          operate:'true'
        }],
        multipleSelection: []
      }
    },

}

</script>
<style lang='scss' scoped>

</style>