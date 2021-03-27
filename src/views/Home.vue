<template>
  <div class="home">
    <div class="header">
      <div class="box">
        <div class="logo">
          <img src="../assets/logo.png" />
          <p>中心仓库</p>
        </div>
        <div class="warehouse">
          <p>福建省福州市大学城中心仓库</p>
          <img  @click="exit" src="../assets/exit.png" />
        </div>
      </div>
    </div>
    <el-main>
      <div class="chart">
        <div class="title">
          <img src="../assets/data.png" />
          <p>数据分析</p>
        </div>
        <div class="analyse">
          <div class="chart1">
            <div id="main" :style="{ width: '480px', height: '280px' }"></div>
          </div>
          <div class="chart1">
            <div id="main1" :style="{ width: '480px', height: '280px' }"></div>
          </div>
          <div class="other">
            <div>
              <p class="name1">累计收入</p>
              <p>12345</p>
            </div>
            <div>
              <p class="name1">仓储数量</p>
              <p>81</p>
            </div>
          </div>
        </div>
      </div>
      <div class="info">
        <div class="title">
          <img src="../assets/detail.png" />
          <p>状态详情</p>
        </div>
        <div class="kind">
          <router-link
            to="/home/sendGoods"
            class="tab"
            tag="div"
            active-class="active"
          >
            <button class="choose" name="btn">待发货：2</button>
          </router-link>
          <router-link
            to="/home/register"
            class="tab"
            tag="div"
            active-class="active"
          >
            <button class="choose" name="btn">待寄存：1</button>
          </router-link>
          <router-link
            to="/home/transport"
            class="tab"
            tag="div"
            active-class="active"
          >
            <button class="choose" name="btn">运输中：4</button>
          </router-link>
          <router-link
            to="/home/registering"
            class="tab"
            tag="div"
            active-class="active"
          >
            <button class="choose" name="btn">寄存中：1</button>
          </router-link>
          <router-link
            to="/home/finished"
            class="tab"
            tag="div"
            active-class="active"
          >
            <button class="choose" name="btn">已完成：3</button>
          </router-link>
        </div>
        <div class="child"><router-view /></div>
      </div>
    </el-main>
  </div>
</template>

<script>
var echarts = require("echarts");
export default {
  name: "home",
  data() {
    return {};
  },
  methods: {
    exit() {
      this.$router.push('/login')
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    drawEcharts() {
      var myChart = echarts.init(document.getElementById("main"));
      var myChart1 = echarts.init(document.getElementById("main1"));
      myChart.setOption({
        title: {
          text: "寄存费用收入",
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
      }),
        myChart1.setOption({
          title: {
            text: "商品分布",
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
                { value: 1048, name: "存储数量" },
                { value: 735, name: "寄出数量" },
                { value: 580, name: "路途数量" },
                { value: 484, name: "商家寄来" },
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
<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.header {
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 100%;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.16);
}

.header .box {
  display: flex;
  width: 1320px;
  justify-content: flex-start;
}

.warehouse {
  margin-left: auto;
  display: flex;
  align-items: center;
}

.warehouse p{
  font-size: 14px;
  padding-right: 16px;
  color: #707070;
}

.warehouse img {
  width: 24px;
}

.logo {
  height: 48px;
  display: flex;
}

.logo img {
  width: 48px;
  height: 48px;
}

.logo p {
  line-height: 48px;
  font-weight: bold;
  color: #409eff;
  font-size: 18px;
}

.chart {
  padding-bottom: 20px;
}

.analyse {
  display: flex;
}

.chart1 {
  background-color: white;
  width: 480px;
  height: 280px;
  border-radius: 16px;
  margin-right: 20px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.16);
}

.other div {
  width: 240px;
  height: 130px;
  background-color: white;
  border-radius: 16px;
  margin-bottom: 20px;
  text-align: center;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.16);
}

.other .name1 {
  font-size: 16px;
  color: black;
  font-weight: bold;
  padding-top: 32px;
}

.other p {
  color: #71b1fe;
  font-size: 24px;
  font-weight: bold;
  padding-top: 12px;
}

.title {
  display: flex;
  font-size: 18px;
  padding-bottom: 20px;
}

.title img {
  width: 24px;
}

.title p {
  padding-left: 12px;
}

.kind {
  display: flex;
  flex-direction: row;
}

.kind .choose {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 60px;
  background: #ffffff;
  color: #666666;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.16);
  font-size: 14px;
  font-weight: bold;
  border: none;
  margin-right: 20px;
  border-radius: 8px;
  outline: none;
}
.kind .choose:hover,
.choose:focus {
  background-color: #409eff;
  color: #ffffff;
}
</style>
