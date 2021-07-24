<template>
  <div class="bar">
    <div class="info"><img src="@assets/home/消息1.png" /></div>
    <div class="avater">
      <img src="https://th.bing.com/th/id/OIP.jNp2SPF7TX1_myPQ9HCHXQHaH0?pid=ImgDet&w=509&h=537&rs=1" />
      <p>管理员:赵海东</p>
    </div>
    <!-- <div class="exit" @click="leave"><img src="@assets/home/退出.png" /></div> -->
    <div class="exit" @click="leave"><img src="@assets/home/退出.png"/></div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
      center>
      <span>你确定要退出吗</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    leave: function () {
      this.$data.dialogVisible = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.bar {
  display: flex;
  padding-left: 1280px;
  padding-top: 28px;
  .info {
    display: flex;
    width: 48px;
    height: 48px;
    background: #ffffff;
    border-radius: 50%;
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
    margin-right: 18px;
    justify-content: center;
    align-items: center;
    img {
      width: 32px;
      height: 32px;
    }
  }

  .avater {
    width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
    }
    p {
      padding-left: 12px;
    }
  }

  .exit {
    display: flex;
    justify-items: center;
    align-items: center;
    padding-left: 12px;
    // TO DO 点击位置有点奇怪
    // width: 40px;
    // background-color: tomato;
    img {
      width: 30px;
      height: 30px;
    }
  }
}
</style>