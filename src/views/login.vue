<template>
  <div class="total">
    <div class="loginPage" v-show="isShow">
      <p class="title">登录</p>
      <div class="user">
        <p>用户名或邮箱</p>
        <input type="text"/>
      </div>
      <div class="password">
        <p>密码</p>
        <input type="type" />
        <div class="op">
          <p>忘记密码</p>
          <p @click="change">没有账号？立即注册</p>
        </div>
      </div>
      <button @click="login">登录</button>
    </div>
    <div class="regiestPage" v-show="!isShow">
      <p class="title">注册</p>
      <div class="user">
        <p>用户名或邮箱</p>
        <input type="text" />
      </div>
      <div class="password">
        <p>密码</p>
        <input type="text" />
      </div>
      <div class="password">
        <p>确认密码</p>
        <input type="text" />
        <div class="op">
          <p @click="change">我有账号，立即登录</p>
          <p>邮箱注册</p>
        </div>
      </div>
      <button @click="change">注册</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      isShow: true,
    };
  },
  methods: {
    login: function (e) {
      console.log(e);
      this.$router.push("home");
    },
    change: function(e) {
      console.log(e);
      this.isShow=!this.isShow;
    },
  },
};
</script>
<style lang="scss" scoped>
.total {
  background-image: url("../assets/home/bgc.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.loginPage,.regiestPage {
  position: absolute;
  background-color: white;
  width: 25%;
  height: 55%;
  border-radius: 16px;
  background-attachment: fixed;
  transition: all 1s;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 50px 50px rgba(0, 0, 0, 0.5);
  .title {
    font-size: 30px;
    font-weight: bold;
    padding-bottom: 40px;
  }
  .user,.password {
    p {
      font-size: 16px;
      padding-bottom: 8px;
    }
  }
  .password {
    .op {
      display: flex;
      p {
        padding-top: 16px;
        color: #005dff;
        font-size: 12px;
        margin: auto;
      }
    }
  }
}

input {
  width: 300px;
  height: 40px;
  border-radius: 8px;
  padding-left: 10px;
  background-color: #f3f3f4;
  border: 0px;
  outline: none;
  &:hover,
  &:focus {
    background-color: white;
    border: 2px solid #4c6fe2;
    box-shadow: 0px 3px 6px 0px #c1f9ff;
  }
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
</style>