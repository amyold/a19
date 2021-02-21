<template>
  <el-row>
    <el-button @click="$emit('input', 0)">租借中</el-button>
    <el-button @click="$emit('input', 1)">待归还</el-button>
    <el-button @click="$emit('input', 2)">驿站中</el-button>
    <el-button @click="$emit('input', 3)">仓库中</el-button>
    <el-button @click="$emit('input', 4)">已卖出</el-button>
  </el-row>
</template>

<script>
export default {
  name: "CategoryDetailNavbar",
  props: ["value"],
  model: {
    prop: 'value'
  }
}
</script>

<style scoped>

</style>