<template>
  <el-container class="home">
    <firstaside/>
    <firstcontent/>
  </el-container>
</template>

<script>
import firstcontent from '@components/content/firstcontent.vue'
import firstaside from '@components/aside/firstaside.vue'
export default {
name:'home',
components: {
  firstcontent,
  firstaside
}
}

</script>
<style lang='scss' scoped>
@import'@style/color.scss';
.home{
  background-color: $backgroundcolor;
  width: 100vw;
  height: 100vh;
}
</style>