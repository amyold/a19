<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="角色名称" prop="charactname">
    <el-input v-model="ruleForm.charactname"></el-input>
  </el-form-item>
  <el-form-item label="描述" prop="description">
    <el-input v-model="ruleForm.description"></el-input>
  </el-form-item>
  </el-form>
</template>

<script>
export default {
name:'addrole',
data () {
  return {
    ruleForm: {
          charactername: '',
          description: '',
        },
  }
}

}

</script>
<style scoped>
</style>