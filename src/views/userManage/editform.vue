<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="名称" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="描述" prop="description">
    <el-input v-model="ruleForm.description"></el-input>
  </el-form-item>
  <el-form-item label="描述" prop="description">
  <el-dropdown :hide-on-click="false">
      <span class="select">请选择权限<i class="el-icon-arrow-down el-icon--right"></i></span>
  <el-dropdown-menu slot="dropdown" >
    <el-dropdown-item><el-checkbox v-model="checked">权限人员</el-checkbox></el-dropdown-item>
    <el-dropdown-item><el-checkbox v-model="checked">角色列表</el-checkbox></el-dropdown-item>
        <el-dropdown-item><el-checkbox v-model="checked">订单管理</el-checkbox></el-dropdown-item>
    <el-dropdown-item><el-checkbox v-model="checked">用户管理</el-checkbox></el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
  </el-form-item>
    </el-form>
</template>

<script>
export default {
name:'editform',
data() {
      return {
        ruleForm: {
          name: '',
          description: '',
        }
}
 }

}

</script>
<style lang='scss' scoped>
.select{
    width: 100%;
    cursor: pointer;
}
</style>