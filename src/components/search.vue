<template>
 <el-input
  placeholder="请输入内容"
  v-model="input"
  prefix-icon="el-icon-search"
  clearable
  class="first">
</el-input>
</template>

<script>
export default {
  name:'search',
  data() {
    return {
      input: ''
    }
  }
}
</script>

<style lang="scss">
.first /deep/.el-input__inner {
  line-height: 64px;
  height: 64px;
  width: 1080px;
  border-radius: 32px;
  padding-left: 72px;
  box-shadow:  0px 1px 2px 0px rgba(0,0,0,0.16);
}

.el-input__icon {
    padding-left: 30px;
}
</style>