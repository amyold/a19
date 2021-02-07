<template>
 <div class="dialog-footer">
    <el-button type="primary" @click="sendback = false">取 消</el-button>
    <el-button type="primary" @click="sendback= false">确 定</el-button>
  </div>
</template>

<script>
export default {
name:''

}

</script>
<style lang='scss' scoped>
.el-button--primary {
  width: 96px;
  height: 32px;
  font-size: 12px;
  border-radius: 8px;
  border: none;
}
.dialog-footer
{
  margin: 42px 0 18px 0;
 text-align: center;
.el-button--primary:nth-child(1){
  background-color: #F56C6C;
  margin-right: 130px;
  &:hover{
     background-color: #f08383;
  }
}
.el-button--primary:nth-child(2)
{
  background-color: #957BF1;
  &:hover{
    background-color: #a38ef4;
  }
}
}
</style>