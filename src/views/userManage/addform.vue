<template>
 <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="账号" prop="account">
    <el-input v-model="ruleForm.account"></el-input>
  </el-form-item>
  <el-form-item label="姓名" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input v-model="ruleForm.password"></el-input>
  </el-form-item>
  <el-form-item label="手机号" prop="number">
    <el-input v-model="ruleForm.number"></el-input>
  </el-form-item>
  <el-form-item label="邮箱" prop="email">
    <el-input v-model="ruleForm.email"></el-input>
  </el-form-item>
  <el-form-item label="备注" prop="remark">
    <el-input v-model="ruleForm.remark"></el-input>
  </el-form-item>
  </el-form>
</template>

<script>
export default {
name:'addform',
 data() {
      return {
        ruleForm: {
          account: '',
          name: '',
          password: '',
          number: '',
          email:'',
          remark:''
        }
}
 }}
</script>
<style scoped>
</style>