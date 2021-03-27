<template>
  <div class="container">
    <div class="left">
      <p>more rewaring</p>
      <p>more efficient</p>
    </div>
    <div class="right">
        <div class="logo">
          <img src="../assets/logo.png" />
          <p>中心仓库</p>
        </div>
        <div class="account">
          <p>请输入账号</p>
          <input type="text" />
        </div>
        <div class="password">
          <p>请输入密码</p>
          <input type="password" />
        </div>
        <button @click="login">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {};
  },
  methods: {
    login() {
      this.$router.push("/home");
    },
  },
};
</script>
<style scoped>
.container {
  display: flex;
  width: 100%;
}

.logo {
  display: flex;
  padding-bottom: 40px;
}

.logo img {
  width: 72px;
  height: 72px;
  padding-right: 12px;
}

.logo p {
  font-size: 24px;
  font-weight: bold;
  line-height: 72px;
  color: #0088ff;
}

.account p,.password p{
  padding-top: 12px;
  padding-bottom: 12px;
  color: #005dff;
  font-size: 16px;
  margin: auto;
}

input {
  width: 360px;
  height: 48px;
  border-radius: 8px;
  padding-left: 10px;
  background-color: #f3f3f4;
  border: 0px;
  outline: none;
}

input:hover,
input:focus {
  background-color: white;
  border: 2px solid #4c6fe2;
  box-shadow: 0px 3px 6px 0px #c1f9ff;
}

button {
  margin-top: 20px;
  width: 200px;
  height: 40px;
  border-radius: 20px;
  background: linear-gradient(180deg, #c1f9ff, #82d4ff 23%, #0088ff);
  border: none;
  outline: none;
  color: #fff;
  font-size: 16px;
}

.left {
  width: 50%;
  height: 100%;
  background-image: url('../assets/bg.jpeg');
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.left p{
  font-size: 48px;
  color: #fff;
  font-weight: bold;
  padding-top: 32px;
}

.right {
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}
</style>