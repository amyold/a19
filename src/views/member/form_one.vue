<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="账号" prop="name">
    <el-input ></el-input>
  </el-form-item>
  <el-form-item label="姓名" prop="name">
    <el-input ></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="name">
    <el-input ></el-input>
  </el-form-item>
  <el-form-item label="手机号" prop="name">
    <el-input ></el-input>
  </el-form-item>
  <el-form-item label="邮箱" prop="name">
    <el-input ></el-input>
  </el-form-item>
  <el-form-item label="备注" prop="name">
    <el-input ></el-input>
  </el-form-item>
  </el-form>
</template>

<script>
export default {
name:'form_one'

}

</script>
<style scoped>
</style>