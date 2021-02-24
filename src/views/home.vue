<template>
  <el-container>
    <el-header>
      <div class="name">
        <img src="@assets/home/菜单.png" />
        <div>首页</div>
      </div>
    </el-header>

    <el-main>
      <div class="dataAnalyse">
        <div class="title">
          <img src="@assets/home/数据概览.png" />
          <div>数据分析</div>
        </div>
        <div class="analyse">
          <div class="chart1">
            <div id="main" :style="{ width: '480px', height: '280px' }"></div>
          </div>
          <div class="chart1">
            <div id="main1" :style="{ width: '480px', height: '280px' }"></div>
          </div>
          <div class="total">
            <div>
              <p class="name1">管理员总人数</p>
              <p>123</p>
            </div>
            <div>
              <p class="name1">在线人数</p>
              <p>1234</p>
            </div>
          </div>
        </div>
      </div>
      <div class="dataStatistics">
        <div class="title">
          <img src="@assets/home/数据.png" />
          <div>数据统计</div>
        </div>
        <div class="list">
          <div>
            <p class="name2">订单纠纷</p>
            <p>1</p>
          </div>
          <div>
            <p class="name2">商品审核</p>
            <p>12</p>
          </div>
          <div>
            <p class="name2">举报管理</p>
            <p>0</p>
          </div>
          <div>
            <p class="name2">商家管理</p>
            <p>244</p>
          </div>
        </div>
      </div>
      <div class="common">
        <div class="title">
          <img src="@assets/home/代码.png" />
          <div>常用功能</div>
        </div>
        <div class="useful">
          <!-- TO DO 针对第一个路由，跳转后打打开相应弹窗 -->
          <div class="box" @click="chooseFunc('/admin')">
            <div class="talk">
              <p class="up">添加权限人员</p>
              <p class="down">自由分配权限</p>
            </div>
              <img src="@assets/home/pic1.png">
            
          </div>
          <div class="box" @click="chooseFunc('/order')">
            <div class="talk">
              <p class="up">订单纠纷</p>
              <p class="down">赶快解决用户的烦恼</p>
            </div>
            <img src="@assets/home/pic1.png">
          </div>
          <div class="box" @click="chooseFunc('/user/check')">
            <div class="talk">
              <p class="up">商品审核</p>
              <p class="down">商家又上新啦！</p>
            </div>
            <img src="@assets/home/pic1.png">
          </div>
          <div class="box" @click="chooseFunc('/user/report')">
            <div class="talk">
              <p class="up">举报管理</p>
              <p class="down">谁对谁错你来定夺</p>
            </div>
            <img src="@assets/home/pic1.png">
          </div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
var echarts = require("echarts");
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  methods: {
    chooseFunc: function(path) {
      // console.log(path);
      this.$router.push(path)
    },
    drawEcharts() {
      var myChart = echarts.init(document.getElementById("main"));
      var myChart1 = echarts.init(document.getElementById("main1"));
      myChart.setOption({
        title: {
          text: "周活跃量",
          left: "center",
          top: "bottom",
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "line",
            symbol: "triangle",
            symbolSize: 20,
            lineStyle: {
              color: "#5470C6",
              width: 4,
              type: "dashed",
            },
            itemStyle: {
              borderWidth: 3,
              borderColor: "#EE6666",
              color: "yellow",
            },
          },
        ],
      });
      myChart1.setOption({
        title: {
          text: "用户分布",
          left: "center",
          top: "bottom",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "right",
          top: "center",
        },
        series: [
          {
            name: "用户分布",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "40",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "注册用户" },
              { value: 735, name: "注册商家" },
              { value: 580, name: "在线用户" },
              { value: 484, name: "在线商家" },
            ],
          },
        ],
      });
    },
  },
  mounted() {
    this.drawEcharts();
  },
};
</script>
<style lang="scss" scoped>
.name {
  display: flex;
  font-size: 18px;
  padding-top: 44px;
  padding-left: 84px;
  width: 120px;
  img {
    height: 24px;
    width: 24px;
    padding-right: 12px;
  }
}
.title {
  display: flex;
  font-size: 18px;
  padding-top: 12px;
  padding-left: 120px;
  width: 120px;
  img {
    height: 24px;
    width: 24px;
    padding-right: 12px;
  }
}
.analyse {
  display: flex;
  padding-left: 120px;
  padding-top: 12px;
  .chart1 {
    background-color: white;
    width: 480px;
    height: 280px;
    border-radius: 16px;
    margin-right: 20px;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.16);
  }
  .total {
    div {
      width: 240px;
      height: 130px;
      background-color: white;
      border-radius: 16px;
      margin-bottom: 20px;
      text-align: center;
      box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.16);
    }
    .name1 {
      font-size: 16px;
      color: black;
      font-weight: bold;
      padding-top: 32px;
    }
    p {
      color: #71b1fe;
      font-size: 24px;
      font-weight: bold;
      padding-top: 12px;
    }
  }
}
.dataStatistics {
  .list {
    width: 1240px;
    display: flex;
    height: 100px;
    margin-left: 120px;
    margin-top: 12px;
    border-radius: 16px;
    background-color: white;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.16);
    div {
      width: 310px;
      height: 100px;
      text-align: center;
      .name2 {
        font-size: 16px;
        color: black;
        font-weight: bold;
        padding-top: 18px;
      }
      p {
        color: #71b1fe;
        font-size: 24px;
        font-weight: bold;
        padding-top: 8px;
      }
    }
  }
}
.useful {
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;
  padding-left: 120px;
  width: 1240px;
  .box {
    background-color: white;
    width: 600px;
    height: 100px;
    border-radius: 16px;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.16);
    margin-right: 20px;
    margin-bottom: 20px;
    display: flex;
  }
  .talk {
    .up {
      font-weight: bold;
      padding-top: 30px;
      padding-left: 36px;
    }
    .down {
      color: #939393;
      font-size: 12px;
      padding-left: 36px;
      padding-top: 8px;
    }
  }
  img {
      padding-left: 320px;
      width: 120px;
      height: 120px;
    }
}
</style>