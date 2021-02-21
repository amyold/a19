<template>
  <el-row id="categoryDetailNavbar">
    <el-button @click="$emit('input', 0)" :type="value === 0 ? 'primary' : ''">租借中：{{ counts[0] }}</el-button>
    <el-button @click="$emit('input', 1)" :type="value === 1 ? 'primary' : ''">待归还：{{ counts[1] }}</el-button>
    <el-button @click="$emit('input', 2)" :type="value === 2 ? 'primary' : ''">驿站中：{{ counts[2] }}</el-button>
    <el-button @click="$emit('input', 3)" :type="value === 3 ? 'primary' : ''">仓库中：{{ counts[3] }}</el-button>
    <el-button @click="$emit('input', 4)" :type="value === 4 ? 'primary' : ''">已卖出：{{ counts[4] }}</el-button>
  </el-row>
</template>

<script>
export default {
  name: "CategoryDetailNavbar",
  props: ["value", "counts"],
  model: {
    prop: 'value'
  }
}
</script>

<style scoped>
#categoryDetailNavbar {
  margin-bottom: 6px;
}
</style>