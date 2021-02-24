<template>
  <div>
    <div class="name">
      <img src="@assets/home/菜单.png" />
      <el-breadcrumb separator="/" class="title">
        <el-breadcrumb-item :to="{ path: '/user/check' }" class="one"
          >用户管理</el-breadcrumb-item
        >
        <el-breadcrumb-item class="two">查看详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-card class="box-card">
      <div class="title">
        <span>查看详情</span>
        <div></div>
      </div>
      <div class="content">
        <el-card class="card" shadow="never">
          <div class="top">
            <img src="@assets/home/商品2.png" alt="" />
            <span>商品详情</span>
          </div>
          <div class="down">
            <div class="left">
              <img src="@assets/home/塞尔达.jpeg" alt="" />
            </div>
            <div class="right">
              <span>{{ detail.title }}</span>
              <div class="cost">
                  <div class="price">价格<span>￥{{detail.price}}</span></div>
                  <div class="rent">租金<span>￥{{detail.rent}}</span></div>
                <!-- <span>
                  价格 :￥ {{ detail.price }} 租金 :￥ {{ detail.rent }}
                </span> -->
              </div>
              <span>商品介绍: {{ detail.introduction }}</span>
              <span>库存 <span class="content">{{ detail.inventory }}件</span></span>
              <span
                >租赁时间 <span class="content1">{{ detail.time.min }} ~ {{ detail.time.max }}天</span>
              </span>
              <span>分类 </span>
              <span>参数详情 <div class="parameter">{{ detail.particulars }}</div></span>
              <span>图片详情 </span>
              <span>押金设置 ￥{{ detail.guarantee }}</span>
              <span>
                是否支持先租后买
                <el-switch
                  v-model="value0"
                  active-color="#409EFF"
                  inactive-color="#f56c6c"
                >
                </el-switch>
              </span>
              <span>
                是否支持续租

                <el-switch
                  v-model="value1"
                  active-color="#409EFF"
                  inactive-color="#f56c6c"
                >
                </el-switch>
              </span>
              <span>
                是否愿意寄存驿站

                <el-switch
                  v-model="value2"
                  active-color="#409EFF"
                  inactive-color="#f56c6c"
                >
                </el-switch>
              </span>
              <span>发货地址 {{ detail.site }} </span>
            </div>
          </div>
        </el-card>
        <el-card class="card" shadow="never">
          <div class="top">
            <img src="@assets/home/店铺.png" alt="" />
            <span>店铺详情</span>
          </div>
          <div class="down">
            <div class="left">
              <img src="@assets/home/店铺头像.jpg" alt="" />
            </div>
            <div class="right">
              <span>店铺名: {{ shop.name }} </span>
              <span>店铺描述: {{ shop.description }}</span>
              <span>营业执照</span>
              <span>品牌代理书或其他材料</span>
            </div>
          </div>
        </el-card>
      </div>
      <div class="btn">
        <el-button type="danger" @click="sendback = true">退回</el-button>
        <el-button type="primary" @click="switchTo('/user/check')"
          >通过</el-button
        >
      </div>
    </el-card>
    <el-dialog
      title="退回"
      :visible.sync="sendback"
      width="45%"
      class="dialog_one"
    >
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="退回理由" prop="reason">
          <el-input v-model="ruleForm.reason"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input
            type="textarea"
            :autosize="{ minRows: 3, maxRows: 10 }"
            v-model="ruleForm.remark"
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="dialog-footer">
        <el-button type="primary" @click="sendback = false">取 消</el-button>
        <el-button type="primary" @click="sendback = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
button
<script>
export default {
  name: "",
  data() {
    return {
      sendback: false,
      value0: true,
      value1: true,
      value2: true,
      detail: {
        title:
          "【国行游戏机专用】任天堂Switch游戏卡ns马里奥奥德赛卡丁车健身环大冒险卡带舞力全开马力欧网球兑换码下载",
        price: 100,
        rent: 0,
        introduction:
          "超好玩超好玩超好玩超好玩超好玩超好玩超好玩超好玩超好玩超好玩超好玩超好玩超好玩超好玩超好玩超好玩超好玩超好玩超好玩超好玩超好玩超好玩超好玩超好玩超好玩超好玩超好玩超好玩超好玩超好玩超好玩超好玩超好玩超好玩超好玩超好玩超好玩超好玩超好玩！！！！！！",
        inventory: 100,
        time: {
          min: 1,
          max: 100,
        },
        particulars:
          "超级马力欧 奥德赛》（Super Mario Odyssey）是任天堂游戏公司发行的开放世界动作冒险游戏（沙盒）。 [1-2]  2017年10月27日独占登陆新主机NS（Nintendo Switch）。 [3]  本作是睽违15年、继承《超级马力欧64》以及《超级阳光马力欧》高自由度血脉的箱庭探索3D马力欧正统续作。 [3]  游戏对应官方繁体中文和简体中文。EDGE，IGN和Gamestop均给出满分评定，媒体均给出极高的正面评价，综评网站Metacritic《奥德赛》的综评为97",
        guarantee: 100,
        site: "M72星云",
      },
      shop: {
        name: "奥特曼店",
        description:
          "店铺描述：真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错",
      },
      ruleForm: {
        reason: "",
        remark: "",
      },
    };
  },
  methods: {
    switchTo(path) {
      // console.log("hello");
      // console.log(path);
      this.$router.push(path);
    },
  },
};
</script>
<style lang='scss' scoped>
@import "@style/color.scss";
.name {
  display: flex;
  font-size: 18px;
  padding-top: 44px;
  padding-left: 84px;
  align-items: center;
  img {
    height: 24px;
    width: 24px;
    padding-right: 12px;
  }
  .title {
    display: flex;
    align-items: center;
    .one {
      font-size: 18px;
      font-weight: bold;
    }
    .two {
      font-size: 16px;
    }
  }
}
.box-card {
  margin-top: 48px;
  width: 1206px;
  border-radius: 24px;
  margin-left: 124px;

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      font-size: 18px;
    }
    div {
      margin-top: 5px;
      width: 88px;
      height: 8px;
      border-radius: 4px;
      background-color: #616bbe;
    }
  }
  .content {
    .card {
      width: 1153px;
      border-radius: 32px;
    }
    .card:nth-child(1) {
      margin-top: 45px;

      .top {
        display: flex;
        align-items: center;
        margin: 0 0 24px 0;
        img {
          width: 24px;
          margin-right: 10px;
        }
      }
      .down {
        padding: 0 37px;
        display: flex;
        justify-content: space-between;
        .left {
          width: 270px;
          height: 270px;
          border: 1px #e8e8e8 solid;
          text-align: center;
          img {
            margin: 10px 0;
            height: 250px;
          }
        }
        .right {
          width: 100%;
          margin-left: 30px;
          display: flex;
          flex-direction: column;
          .cost {
              display: flex;
              width: 720px;
              height: 74px;
              background-color: #E8E8E8;
              margin-bottom: 12px;
              font-size: 16px;
              font-weight: bold;
              flex-direction: row;
              align-items: center;
              .price {
                  margin-left: 12px;
                  span {
                      margin-left: 40px;
                      color: #FF0036;
                      font-weight: bold;
                      font-size: 20px;
                  }
              }
              .rent {
                  margin-left: 300px;
                  span {
                      margin-left: 40px;
                      color: #FF0036;
                      font-weight: bold;
                      font-size: 20px;
                  }
              }
          }
          span {
            margin-bottom: 12px;
            .content {
                margin-left: 150px;
            }
            .content1 {
                margin-left: 100px;
            }
            .parameter {
                margin-left: 6px;
            }
          }
        }
      }
    }
    .card:nth-child(2) {
      margin-top: 30px;
      .top {
        display: flex;
        align-items: center;
        margin: 0 0 24px 0;
        img {
          width: 24px;
          margin-right: 10px;
        }
      }
      .down {
        padding: 0 37px;
        display: flex;
        justify-content: space-between;
        .left {
          img {
            height: 200px;
          }
        }
        .right {
          margin-left: 30px;
          display: flex;
          flex-direction: column;
          span {
            margin-bottom: 24px;
          }
        }
      }
    }
  }
}
.btn {
  margin: 96px 0 36px 0;
  display: flex;
  justify-content: center;
}
.dialog_one .dialog-footer {
  margin: 42px 0 18px 0;
  text-align: center;
  .el-button--primary {
    font-size: 12px;
    border-radius: 8px;
    border: none;
  }
  .el-button--primary:nth-child(1) {
    background-color: #f56c6c;
    margin-right: 130px;
    &:hover {
      background-color: #f08383;
    }
  }
  .el-button--primary:nth-child(2) {
    background-color: #957bf1;
    &:hover {
      background-color: #a38ef4;
    }
  }
}
</style>