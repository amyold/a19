<template>
 <el-input
  placeholder="请输入内容"
  v-model="input"
  @input="changeText"
  @change="search"
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
  },
 methods:{
   changeText()
   {
     this.$emit("changeText",this.input)
   },
   search()
   {
     this.$emit("search")
   }
 },
 props:{
  searchText:{
   type:String
  }
 },
 created() {
   this.input= this.searchText
  }
}
</script>

<style lang="scss">
.first .el-input__inner {
  line-height: 64px;
  height: 64px;
  outline: none;
  width: 56vw;
  border-radius: 32px;
  padding-left: 72px;
  box-shadow:  0px 1px 2px 0px rgba(0,0,0,0.16);
}

.el-input__icon {
    padding-left: 30px;
}
</style>