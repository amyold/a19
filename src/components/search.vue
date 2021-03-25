<template>
  <el-input
      placeholder="请输入内容"
      :value="value"
      @input="$emit('input', $event)"
      prefix-icon="el-icon-search"
      clearable
      class="first">
  </el-input>
</template>

<script>
export default {
  name: 'search',
  props: ["value"]
}
</script>

<style lang="scss" scoped>
.first /deep/ .el-input__inner {
  line-height: 64px;
  height: 64px;
  width: 56vw;
  border-radius: 32px;
  padding-left: 72px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.16);
}

.el-input__icon {
  padding-left: 30px;
}

.el-input {
  width: auto !important;
}
</style>