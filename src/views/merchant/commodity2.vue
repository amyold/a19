<template>
  <el-container>
    <el-header>
      <div class="name">
        <img src="@assets/home/菜单.png" alt="">
        <div style="cursor: pointer" @click="showingDetail = false">分类管理</div>
      </div>
    </el-header>

    <el-main>
      <el-row style="display: flex; margin-bottom: 16px;">
        <search v-model="search"></search>
        <sort></sort>
        <delete></delete>
      </el-row>

      <!-- 搜索得到的分类物品 -->
      <el-table v-if="!showingDetail" :data="filteredCategoryList">
        <el-table-column type="selection" align="center"></el-table-column>
        <el-table-column prop="name"
                         label="类别名"
                         min-width="200"
                         key="0"
                         align="center">
        </el-table-column>
        <el-table-column prop="stock"
                         label="商品库存"
                         min-width="200"
                         key="1"
                         align="center">
        </el-table-column>
        <el-table-column prop="description"
                         label="描述"
                         min-width="300"
                         key="2"
                         align="center">
        </el-table-column>
        <el-table-column prop="createTime"
                         label="创建时间"
                         min-width="300"
                         key="3"
                         align="center">
        </el-table-column>
        <el-table-column label="操作"
                         min-width="100"
                         key="4"
                         align="center">
          <template slot-scope="scope">
            <el-button @click="viewDetail(scope.row.name)" type="text" size="small" round
                       style="background-color: #957BF1; color: #ffffff;">
              查看详情
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <category-detail-navbar v-if="showingDetail" v-model="showingStatus"></category-detail-navbar>

      <el-table v-if="showingDetail && showingStatus === 0" :data="filteredItemList">
        <el-table-column key="5" label="商品名" prop="name" align="center"></el-table-column>
        <el-table-column key="6" label="总租赁期" prop="rentTimeTotal" align="center"></el-table-column>
        <el-table-column key="7" label="剩余租赁期" prop="rentTimeLeft" align="center"></el-table-column>
        <el-table-column key="8" label="押金" prop="deposit" align="center"></el-table-column>
        <el-table-column key="10" label="租金/天" prop="rentPrice" align="center"></el-table-column>
        <el-table-column key="11" label="商品号" prop="itemNumber" align="center"></el-table-column>
        <el-table-column key="12" label="订单号" prop="orderId" align="center"></el-table-column>
        <el-table-column key="13" label="订单金额" prop="orderAmount" align="center"></el-table-column>
        <el-table-column key="14" label="买家id" prop="buyerId" align="center"></el-table-column>
        <el-table-column key="15" label="付款时间" prop="payDate" align="center"></el-table-column>
        <el-table-column key="16" label="操作">
          <template>
            <el-button style="background-color: #957BF1; color: #ffffff">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <el-pagination
          :current-page="page"
          :page-size="10"
          :total="total"
          style="padding: 30px 0; text-align: center;"
          layout="total, prev, pager, next, jumper"
      />
    </el-main>

  </el-container>
</template>

<script>
import Delete from "@components/delete";
import CategoryDetailNavbar from "@components/CategoryDetailNavbar";

export default {
  components: {CategoryDetailNavbar, Delete},
  data() {
    return {
      showingDetail: false,
      activeCategory: "",
      categoryList: [
        {
          name: 'switch卡带',//类别名
          stock: 199,//商品库存
          description: '塞尔达的啥啥啥',//描述
          createTime: '2021/1/24/19:00'//创建时间
        },
        {
          name: 'PlayStation5',//类别名
          stock: 20,//商品库存
          description: '我暑假',//描述
          createTime: '2021/1/24/19:01'//创建时间
        }
      ],
      itemList: [],
      search: "",
      page: 1,
      /**
       * 0: 租赁中
       * 1: 待归还
       * 2: 驿站中
       * 3: 仓库中
       * 4: 已卖出
       */
      showingStatus: 0
    }
  },
  created() {
    // TODO
  },
  methods: {
    searchHandler() {

    },
    viewDetail(name) {
      this.activeCategory = name;
      this.showingStatus = 0;
      this.showingDetail = true;
    },
  },
  computed: {
    filteredCategoryList() {
      return this.categoryList.filter(i => i.name.includes(this.search));
    },
    filteredItemList() {
      return this.itemList.filter(i => i.name.includes(this.search));
    },
    total() {
      if (this.activeCategory === "") {
        return this.filteredCategoryList.length;
      } else {
        return this.filteredItemList.length;
      }
    }
  },
  watch: {
    activeCategory: function (val) {
      if (val !== '') {
        switch (this.showingStatus) {
          case 0: {
            this.itemList = [
              {
                name: "Test1",
                rentTimeTotal: 30,
                rentTimeLeft: 3,
                stock: 100,
                rentPrice: 1,
                itemNumber: "SDRF001",
                orderId: "abaa999",
                orderAmount: 30,
                buyerId: "minus",
                payDate: "2020/12/23"
              },
              {
                name: "Test2",
                rentTimeTotal: 30,
                rentTimeLeft: 3,
                stock: 100,
                rentPrice: 1,
                itemNumber: "SDRF001",
                orderId: "abaa999",
                orderAmount: 30,
                buyerId: "minus",
                payDate: "2020/12/23"
              }
            ];
            break;
          }
        }
      } else {
        this.itemList = [];
      }
    }
  }
}
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

.el-main {
  width: 90%;
  margin: 30px auto auto;
}
</style>
