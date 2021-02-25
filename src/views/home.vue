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
              <p class="name1">今日成交总额</p>
              <p>15200</p>
            </div>
            <div>
              <p class="name1">今日成交订单数</p>
              <p>15</p>
            </div>
          </div>
        </div>
      </div>
      <div class="dataStatistics">
        <div class="title">
          <img src="@assets/home/数据.png" />
          <div>经营概况</div>
        </div>
        <div class="list">
          <div>
            <p class="name2">访客数</p>
            <p>1234</p>
          </div>
          <div>
            <p class="name2">支付金额</p>
            <p>120000</p>
          </div>
          <div>
            <p class="name2">支付转化率</p>
            <p>87%</p>
          </div>
          <div>
            <p class="name2">退款金额</p>
            <p>2440</p>
          </div>
        </div>
        <div id="listChart" :style="{ width: '1240px', height: '400px' }"></div>
      </div>
      <div class="common">
        <div class="title">
          <img src="@assets/home/代码.png" />
          <div>常用功能</div>
        </div>
        <div class="useful">
          <div class="box" @click="chooseFunc('/commodity2')">
            <div class="talk">
              <p class="up">分类管理</p>
              <p class="down">自由管理不同种类</p>
            </div>
            <img src="@assets/home/pic5.png" />
          </div>
          <div class="box" @click="chooseFunc('/commodity3')">
            <div class="talk">
              <p class="up">上传商品</p>
              <p class="down">添加点新鲜血液吧</p>
            </div>
            <img src="@assets/home/pic6.png" />
          </div>
          <div class="box" @click="chooseFunc('/OrderList')">
            <div class="talk">
              <p class="up">订单列表</p>
              <p class="down">看看大家都买了些啥</p>
            </div>
            <img src="@assets/home/pic7.png" />
          </div>
          <div class="box" @click="chooseFunc('/Sendback')">
            <div class="talk">
              <p class="up">退换货处理</p>
              <p class="down">一切为了顾客</p>
            </div>
            <img src="@assets/home/pic8.png" />
          </div>
          <div class="box" @click="chooseFunc('/authority1')">
            <div class="talk">
              <p class="up">添加权限人员</p>
              <p class="down">人多力量大</p>
            </div>
            <img src="@assets/home/pic9.png" />
          </div>
          <div class="box" @click="chooseFunc('/message')">
            <div class="talk">
              <p class="up">消息回复</p>
              <p class="down">康康大家都说了些啥</p>
            </div>
            <img src="@assets/home/pic4.png" />
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
    chooseFunc: function (path) {
      // console.log(path);
      this.$router.push(path);
    },
    drawEcharts() {
      var app = {};
      var option;
      var myChart = echarts.init(document.getElementById("main"));
      var myChart1 = echarts.init(document.getElementById("main1"));
      var myChart2 = echarts.init(document.getElementById("listChart"));
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
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["访问次数", "访问人数", "新增粉丝", "成交量", "成交金额"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "访问次数",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "访问人数",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "新增粉丝",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: "成交量",
            type: "line",
            stack: "总量",
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: "成交金额",
            type: "line",
            stack: "总量",
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
        ],
      });
      option = {
        title: {
          text: "实时订单数据",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#283b56",
            },
          },
        },
        legend: {
          data: ["最新订单金额", "预购队列"],
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {},
          },
        },
        dataZoom: {
          show: false,
          start: 0,
          end: 100,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: true,
            data: (function () {
              var now = new Date();
              var res = [];
              var len = 10;
              while (len--) {
                res.unshift(now.toLocaleTimeString().replace(/^\D*/, ""));
                now = new Date(now - 2000);
              }
              return res;
            })(),
          },
          {
            type: "category",
            boundaryGap: true,
            data: (function () {
              var res = [];
              var len = 10;
              while (len--) {
                res.push(10 - len - 1);
              }
              return res;
            })(),
          },
        ],
        yAxis: [
          {
            type: "value",
            scale: true,
            name: "价格",
            max: 30,
            min: 0,
            boundaryGap: [0.2, 0.2],
          },
          {
            type: "value",
            scale: true,
            name: "预购量",
            max: 1200,
            min: 0,
            boundaryGap: [0.2, 0.2],
          },
        ],
        series: [
          {
            name: "预购队列",
            type: "bar",
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: (function () {
              var res = [];
              var len = 10;
              while (len--) {
                res.push(Math.round(Math.random() * 1000));
              }
              return res;
            })(),
          },
          {
            name: "最新订单金额",
            type: "line",
            data: (function () {
              var res = [];
              var len = 0;
              while (len < 10) {
                res.push((Math.random() * 10 + 5).toFixed(1) - 0);
                len++;
              }
              return res;
            })(),
          },
        ],
      };

      app.count = 11;
      setInterval(function () {
        var axisData = new Date().toLocaleTimeString().replace(/^\D*/, "");

        var data0 = option.series[0].data;
        var data1 = option.series[1].data;
        data0.shift();
        data0.push(Math.round(Math.random() * 1000));
        data1.shift();
        data1.push((Math.random() * 10 + 5).toFixed(1) - 0);

        option.xAxis[0].data.shift();
        option.xAxis[0].data.push(axisData);
        option.xAxis[1].data.shift();
        option.xAxis[1].data.push(app.count++);

        myChart2.setOption(option);
      }, 2100);

      option && myChart2.setOption(option);
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
  padding-top: 20px;
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
  #listChart {
    margin-left: 120px;
    margin-top: 12px;
    border-radius: 16px;
    background-color: white;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.16);
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
    width: 100px;
    height: 100px;
  }
}
</style>