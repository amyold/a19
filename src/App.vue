<template>
  <div id="app">
    <el-container>
      <merchantaside/>
      <router-view></router-view>
    </el-container>
    
  </div>
</template>

<script>
import merchantaside from './components/merchantaside.vue'
export default {
    name:'app',
    components: {
        merchantaside
    }
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: "微软雅黑";
}

body {
  background-color: #F8F9FC;
}

</style>