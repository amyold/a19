<template>
  <div id="app">
    <el-container>
      <el-aside><navigation/></el-aside>
      <el-container>
        <el-header height="40px"><topBar/></el-header>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import navigation from "@components/navigation.vue";
import topBar from "@components/topBar.vue";
import TopBar from './components/topBar.vue';
export default {
  name: "app",
  components: {
    navigation,
    topBar
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: "微软雅黑";
}

body {
  background-color: #f8f9fc;
}
</style>