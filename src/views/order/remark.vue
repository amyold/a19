<template>
   <el-button type="primary" class="btn" @click="and= true">备注订单</el-button>
</template>

<script>
export default {
name:'remark',
data () {
    return {
        and: false
    }
}

}

</script>
<style lang='scss' scoped>
@import '@style/color.scss';

.el-button--primary {
  height: 32px;
  font-size: 12px;
  border-radius: 8px;
  border: none;
  @include shadow;
}
.btn{
    background-color: #FCC41B;
  }
</style>