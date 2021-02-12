<template>
 <el-form :model="formData"  ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="姓名" prop="name">
    <el-input v-model="formData.username"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input v-model="formData.password" ></el-input>
  </el-form-item>
  <el-form-item label="手机号" prop="phone">
    <el-input v-model="formData.phone"></el-input>
  </el-form-item>
  <el-form-item label="邮箱" prop="email">
    <el-input v-model="formData.email"></el-input>
  </el-form-item>
  <el-form-item label="启用" prop="status">
      <el-switch
          v-model="formData.status===1"
          active-color="#13ce66"
          inactive-color="#ff4949">
      </el-switch>
  </el-form-item>
  <el-form-item label="备注" prop="remark">
    <el-input
         type="textarea"
        :autosize="{ minRows:6, maxRows: 10}"
         v-model="formData.note"
    >
    </el-input>
  </el-form-item>
  </el-form>
</template>

<script>
export default {
    name:'addform',
    props:{
        formData:{
            type:Object
        }
    }
}
</script>
<style scoped>
</style>