<template>
  <div class="container">
    <div class="userList">
      <div class="head">
        <div><search /></div>
        <div><img src="@assets/home/加.png" alt="" /></div>
      </div>
      <div class="chatWindow">
        <div class="avater"><img src="@assets/auto.png" alt="" /></div>
        <div class="detail">
          <div class="info">
            <p class="infoName">智能客服</p>
            <div class="information">
              <p>非常okkkkkkkkkkk</p>
              <p class="lastTime">下午12：30 1/3/2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="chatRoom">
      <div class="title">
        智能客服
        <img src="@assets/home/火热.png" />
      </div>
      <!-- TO DO vue-scroll滑轮以及emoji,图片 -->
      <div class="talkArea">
        <div
          class="item my text"
          v-for="(item, index) in msgList"
          :class="{ my: item.uid === 1, other: item.uid === 2 }"
          :key="index"
        >
          <div class="userInfo">
            <div>{{ item.nickname }}</div>
          </div>
          <div class="contentInfo">
            <div class="Text">{{ item.content }}</div>
          </div>
        </div>
      </div>
      <div class="sendMessage">
        <div class="op">
          <div class="emoji"><img src="@assets/home/表情.png" alt="" /></div>
          <div class="pic"><img src="@assets/home/图片.png" alt="" /></div>
          <div class="shot"><img src="@assets/home/截屏.png" alt="" /></div>
        </div>
        <textarea v-model="msg" id="message" cols="30" rows="10"></textarea>
        <div class="send" @click="sendMessage"><button>发送</button></div>
      </div>
    </div>
  </div>
</template>

<script>
const ws = new WebSocket("ws://localhost:8000");

export default {
  name: "chat",
  data() {
    return {
      msg: "",
      username: "",
      msgList: [
        {
          uid: 2,
          nickname: "智能客服",
          content: "亲，对刚才的客服的服务还满意吗？",
        },
        {
          uid: 1,
          nickname: "minus",
          content: "非常okkkkkkkkkkk",
        },
      ],
    };
  },
  mounted() {
    ws.addEventListener("open", this.handleWsOpen.bind(this), false);
    ws.addEventListener("close", this.handleWsClose.bind(this), false);
    ws.addEventListener("error", this.handleWsError.bind(this), false);
    ws.addEventListener("message", this.handleWsMessage.bind(this), false);
  },
  methods: {
    sendMessage() {
      const msg = this.msg;
      if (!msg.trim().length) {
        return;
      }
      ws.send(
        JSON.stringify({
          uid: 1,
          nickname: "minus",
          content: this.msg,
        })
      );

      this.msg = "";

      ws.send(
        JSON.stringify({
          uid: 2,
          nickname: "智能客服",
          content: '不是我们捧场，是你们真的好',
        })
      );
    },
    handleWsOpen(e) {
      console.log("FE WebSocket open", e);
    },
    handleWsClose(e) {
      console.log("FE WebSocket close", e);
    },
    handleWsError(e) {
      console.log("FE WebSocket error", e);
    },
    handleWsMessage(e) {
      console.log(e);
      const msg = JSON.parse(e.data);
      this.msgList.push(msg);
      
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  margin-top: 60px;
  margin-left: 84px;
  width: 1160px;
  height: 800px;
  border-radius: 16px;
  background-color: #ffffff;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.4);
  .userList {
    width: 360px;
    height: 800px;
    background-color: white;
    border-right: 0.2px solid #e6e6e6;
    .head {
      background-color: white;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      .first /deep/ .el-input__inner {
        line-height: 64px;
        height: 32px;
        width: 240px;
        border-radius: 16px;
        border-color: #437dff;
        padding-left: 72px;
        background-color: white;
        color: #8a8a8a;
      }
      img {
        height: 32px;
        width: 32px;
        padding-top: 4px;
        padding-left: 12px;
      }
    }
    .chatWindow {
      height: 80px;
      border: 0.2px solid #e6e6e6;
      display: flex;
      align-items: center;
      .avater {
        padding-left: 12px;
        img {
          width: 64px;
          border-radius: 8px;
        }
      }
      .detail {
        display: flex;
        .info {
          padding-left: 8px;
          .infoName {
            font-size: 16px;
            font-weight: bold;
          }
          .information {
            display: flex;
            font-size: 12px;
            padding-top: 8px;
            color: #515151;
            .lastTime {
              padding-left: 8px;
            }
          }
        }
      }
    }
  }
  .chatRoom {
    width: 800px;
    .title {
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        padding-left: 4px;
        width: 20px;
        height: 20px;
      }
    }
    .talkArea {
      height: 520px;
      background-color: #f8f8f8;
    }
    .sendMessage {
      height: 200px;
      padding-right: 12px;
      display: flex;
      flex-direction: column;
      #message {
        height: 154px;
        outline: none;
        border: none;
        resize: none;
        cursor: pointer;
        font-size: 18px;
      }
      .send {
        text-align: right;
        button {
          width: 100px;
          height: 32px;
          border-radius: 20px;
          background: linear-gradient(180deg, #c1f9ff, #82d4ff 23%, #0088ff);
          border: none;
          outline: none;
          color: #fff;
          font-size: 14px;
          padding-right: 4px;
        }
      }
      .op {
        display: flex;
        .emoji,
        .pic,
        .shot {
          width: 40px;
          height: 40px;
          img {
            width: 32px;
            height: 32px;
          }
        }
      }
    }
  }
}

.item {
  width: 95%;
  .userInfo {
    margin: 12px 0;
    font-size: 12px;
  }
  .contentInfo {
    padding: 10px;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    font-size: 18px;
  }
}
.my {
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  .contentInfo {
    background-color: #95ec69;
  }
}
.other {
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  .contentInfo {
    background-color: #8a8a8a;
    color: white;
  }
}
</style>