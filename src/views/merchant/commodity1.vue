<template>
  <el-container>
    <el-header>
      <div class="name">
        <img src="@assets/home/菜单.png" alt="">
        <div>全部商品</div>
      </div>
    </el-header>
    <el-main>
      <el-row style="display: flex; margin-bottom: 16px;">
        <search></search>
        <sort></sort>
        <delete></delete>
      </el-row>
      <el-row class="box">
        <el-table :data="items">
          <el-table-column type="selection" align="center"></el-table-column>
          <el-table-column label="商品图片">
            <template slot-scope="scope">
              <el-image :src="scope.row.picture"></el-image>
            </template>
          </el-table-column>
          <el-table-column label="商品编号/商品名" width="90">
            <template slot-scope="scope">
              {{ scope.row.number }}/{{ scope.row.name }}
            </template>
          </el-table-column>
          <el-table-column label="商品价格">
            <template slot-scope="scope">
              <el-row>
                <img style="height: 1em; width: 1em;" src="@assets/commodity3/sell.png" alt="价格">
                <span>￥{{ scope.row.price }}</span>
              </el-row>
              <el-row>
                <img style="height: 1em; width: 1em;" src="@assets/commodity3/rent.png" alt="租金">
                <span>￥{{ scope.row.rentPrice }}/天</span>
              </el-row>
            </template>
          </el-table-column>
          <el-table-column label="标签" width="100">
            <template slot-scope="scope">
              <el-row>
                <el-switch v-model="scope.row.tagNew" style="margin-right: 8px"></el-switch>
                <span>新品</span>
              </el-row>
              <el-row>
                <el-switch v-model="scope.row.tagRecommend" style="margin-right: 8px"></el-switch>
                <span>推荐</span>
              </el-row>
            </template>
          </el-table-column>
          <el-table-column label="商品属性">
            <template>
              <span style="cursor: pointer;display: flex; justify-content: center; align-items: center; width: 44px; height: 44px; background-color: #71B1FE; border-radius: 24px">
                <svg style="width: 32px; height: 32px;" t="1613646287231"
                     class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3092"
                     width="200" height="200">
                  <path
                      style="fill: #ffffff"
                      d="M704.853333 451.882667L345.834667 810.666667H192v-153.749334l359.018667-358.784 153.834666 153.749334z m30.165334-30.144l-153.813334-153.749334 42.154667-42.133333a42.666667 42.666667 0 0 1 60.309333 0l0.021334-0.021333 93.504 93.397333a42.666667 42.666667 0 0 1 0 60.352l-42.176 42.154667zM533.333333 725.034667H789.333333a42.645333 42.645333 0 0 1 0 85.290666H533.333333a42.645333 42.645333 0 0 1 0-85.290666z"
                      fill="#2A2A37" p-id="3093">
                  </path>
                </svg>
              </span>
            </template>
          </el-table-column>
          <el-table-column label="审核状态">
            <template slot-scope="scope">
              {{
                scope.row.reviewState === 0 ? '待审核' : scope.row.reviewState === 1 ? '审核中' : scope.row.reviewState === 2 ? '已通过' : '未通过'
              }}
            </template>
          </el-table-column>
          <el-table-column label="库存" prop="stock"></el-table-column>
          <el-table-column label="操作" width="300">
            <template>
              <el-button style="background-color: #957BF1; color: white; margin-right: 16px">查看详情</el-button>
              <el-button style="background-color: #F56C6C; color: white">删除商品</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import Delete from "@components/delete";
export default {
  name: 'commodity3',
  components: {Delete},
  data() {
    return {
      items: [
        {
          name: 'Test',
          picture: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          number: 'A-110',
          price: 114,
          rentPrice: 514,
          tagNew: false,
          tagRecommend: false,
          reviewState: 0,
          stock: 1919810
        },
        {
          name: 'Test',
          picture: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          number: 'A-111',
          price: 114,
          rentPrice: 514,
          tagNew: true,
          tagRecommend: false,
          reviewState: 1,
          stock: 1919810
        },
        {
          name: 'Test',
          picture: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          number: 'A-112',
          price: 114,
          rentPrice: 514,
          tagNew: false,
          tagRecommend: true,
          reviewState: 2,
          stock: 1919810
        }
      ]
    }
  },
  methods: {

  }
}

</script>
<style scoped lang="scss">
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

.box {
  background: #ffffff;
  border-radius: 24px;
  padding: 32px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  margin-top: 8px;
}

.el-main {
  width: 90%;
  margin: 30px auto auto;
}
</style>