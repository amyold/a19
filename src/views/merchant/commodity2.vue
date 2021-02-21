<template>
  <el-container>
    <el-header>
      <div class="name">
        <img src="@assets/home/菜单.png" alt="">
        <div style="cursor: pointer" @click="showingDetail = false">分类管理</div>
        <span id="activeCategory" v-if="showingDetail">/{{ activeCategory }}</span>
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

      <category-detail-navbar v-if="showingDetail" v-model="showingStatus"
                              :counts="[2,1,1,4,0]"></category-detail-navbar>

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
        <el-table-column key="16" label="操作" align="center">
          <template>
            <el-button style="background-color: #957BF1; color: #ffffff" round size="small">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-table v-if="showingDetail && showingStatus === 1" :data="filteredItemList">
        <el-table-column key="17" label="商品名" prop="name" align="center"></el-table-column>
        <el-table-column key="18" label="商品号" prop="itemNumber" align="center"></el-table-column>
        <el-table-column key="19" label="订单号" prop="orderId" align="center"></el-table-column>
        <el-table-column key="20" label="买家id" prop="buyerId" align="center"></el-table-column>
        <el-table-column key="21" label="逾期情况" prop="overdue" align="center"></el-table-column>
        <el-table-column key="22" label="最晚归还日期" prop="latestReturnDate" align="center"></el-table-column>
        <el-table-column key="23" label="操作" min-width="150" align="center">
          <template>
            <el-row>
              <el-button style="color: #ffffff; background-color: #957BF1" round size="small">查看详情</el-button>
              <el-button style="color: #ffffff; background-color: #FCC41B" round size="small">一键提醒</el-button>
            </el-row>
          </template>
        </el-table-column>
      </el-table>

      <el-table v-if="showingDetail && showingStatus === 2" :data="filteredItemList">
        <el-table-column key="24" label="商品名" prop="name" align="center"></el-table-column>
        <el-table-column key="25" label="商品号" prop="itemNumber" align="center"></el-table-column>
        <el-table-column key="26" label="质检情况" prop="checkStatus" align="center"></el-table-column>
        <el-table-column key="27" label="驿站地址" prop="hostStationAddr" align="center"></el-table-column>
        <el-table-column key="28" label="驿站联系人" prop="hostStationContact" align="center"></el-table-column>
        <el-table-column key="29" label="操作" align="center" min-width="200">
          <template>
            <el-row>
              <el-button style="color: #ffffff; background-color: #957BF1" round size="small">查看详情</el-button>
              <el-button style="color: #ffffff; background-color: #F56C6C" round size="small">召回</el-button>
              <el-button style="color: #ffffff; background-color: #16C2C2" round size="small">发货</el-button>
            </el-row>
          </template>
        </el-table-column>
      </el-table>

      <el-table v-if="showingDetail && showingStatus === 3" :data="filteredItemList">
        <el-table-column key="30" label="商品名" prop="name" align="center"></el-table-column>
        <el-table-column key="31" label="商品号" prop="itemNumber" align="center"></el-table-column>
        <el-table-column key="32" label="质检情况" prop="checkStatus" align="center"></el-table-column>
        <el-table-column key="33" label="仓库地址" prop="repoAddr" align="center"></el-table-column>
        <el-table-column key="34" label="仓库联系人" prop="repoContact" align="center"></el-table-column>
        <el-table-column key="35" label="操作" align="center" min-width="200">
          <template>
            <el-row>
              <el-button style="color: #ffffff; background-color: #957BF1" round size="small">查看详情</el-button>
              <el-button style="color: #ffffff; background-color: #F56C6C" round size="small">召回</el-button>
              <el-button style="color: #ffffff; background-color: #16C2C2" round size="small">发货</el-button>
            </el-row>
          </template>
        </el-table-column>
      </el-table>

      <el-table v-if="showingDetail && showingStatus === 4" :data="filteredItemList">
        <el-table-column label="订单编号" prop="orderId" align="center"></el-table-column>
        <el-table-column label="提交时间" prop="submitTime" align="center"></el-table-column>
        <el-table-column label="支付状态" prop="payStatus" align="center"></el-table-column>
        <el-table-column label="用户账户" prop="userAccount" align="center"></el-table-column>
        <el-table-column label="订单状态" prop="orderStatus" align="center"></el-table-column>
        <el-table-column label="订单金额" prop="orderAmount" align="center"></el-table-column>
        <el-table-column label="物流情况" prop="logisticsStatus" align="center"></el-table-column>
        <el-table-column label="操作" align="center" min-width="200">
          <template>
            <el-row>
              <!--TODO 到底有啥操作？？-->
            </el-row>
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
    viewDetail(name) {
      this.activeCategory = name;
      this.showingStatus = 0;
      this.showingDetail = true;
    },
  },
  computed: {
    filteredCategoryList() {
      // TODO 根据页面进行 slice
      return this.categoryList.filter(i => i.name.includes(this.search));
    },
    filteredItemList() {
      // TODO 根据页面进行 slice
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
    showingStatus: function (val) {
      this.search = "";
      switch (val) {
        case 0: {
          this.itemList = [
            {
              name: "Test1",
              rentTimeTotal: 30,
              rentTimeLeft: 3,
              stock: 100,
              deposit: 114,
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
              deposit: 114,
              itemNumber: "SDRF001",
              orderId: "abaa999",
              orderAmount: 30,
              buyerId: "minus",
              payDate: "2020/12/23"
            }
          ];
          break;
        }
        case 1: {
          this.itemList = [
            {
              name: "达尔塞传说",
              itemNumber: "RFDC333",
              orderId: "3112334",
              buyerId: "minus",
              overdue: "逾期2天",
              latestReturnDate: "2020/12/23"
            }
          ];
          break;
        }
        case 2: {
          this.itemList = [
            {
              name: "达尔塞传说",
              itemNumber: "RFDC333",
              checkStatus: "不合格",
              hostStationAddr: "M78星云",
              hostStationContact: "奥特曼"
            }
          ];
          break;
        }
        case 3: {
          this.itemList = [
            {
              name: "达尔塞传说",
              itemNumber: "RFDC333",
              checkStatus: "不合格",
              repoAddr: "M78星云",
              repoContact: "奥特曼"
            },
            {
              name: "达尔塞传说",
              itemNumber: "RFDC334",
              checkStatus: "合格",
              repoAddr: "M78星云",
              repoContact: "奥特曼"
            },
            {
              name: "达尔塞传说",
              itemNumber: "RFDC335",
              checkStatus: "不合格",
              repoAddr: "M78星云",
              repoContact: "奥特曼"
            },
            {
              name: "达尔塞传说",
              itemNumber: "RFDC336",
              checkStatus: "合格",
              repoAddr: "M87星云",
              repoContact: "奥特曼"
            }
          ];
          break;
        }
        case 4: {
          this.itemList = [];
          break;
        }
      }
    },
    activeCategory: function () {
      this.search = "";
      this.itemList = [
        {
          name: "Test1",
          rentTimeTotal: 30,
          rentTimeLeft: 3,
          stock: 100,
          deposit: 114,
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
          deposit: 114,
          itemNumber: "SDRF001",
          orderId: "abaa999",
          orderAmount: 30,
          buyerId: "minus",
          payDate: "2020/12/23"
        }
      ];
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

#activeCategory {
  position: relative;
  margin-left: 8px;
  color: rgba(0, 0, 0, 0.4);
}
</style>
