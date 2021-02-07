<template>
  <div id="app">
    <el-container>
      <navigation/>
      <router-view></router-view>
    </el-container>
    
  </div>
</template>

<script>
import navigation from '@components/navigation.vue'
export default {
    name:'app',
    components: {
      navigation
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