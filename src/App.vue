<template>
  <div id="app">
    <el-container v-show="!(path === '/login')">
      <el-aside><navigation /></el-aside>
      <el-container>
        <el-header height="40px"><topBar /></el-header>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container >
    <router-view v-show="(path === '/login')"></router-view>
  </div>
</template>

<script>
import topBar from "@components/topBar.vue";
import navigation from '@components/navigation.vue';
export default {
  name: "app",
  components: {
    navigation,
    topBar,
  },
  data() {
    Navigation
    return {
      path: "",
    }
  },
  mounted(){
    this.path=this.$route.path
  },
  watch: {
    $route(to,from){
      this.path=to.path;
    }
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  font-family: "微软雅黑";
}
html,body,#app {
  height: 100%;
  width: 100%;
}
#container {
  height: 100%;
  width: 100%;
}
body {
  background-color: #f8f9fc;
}
.el-container .el-main {
  padding: 0;
}
</style>