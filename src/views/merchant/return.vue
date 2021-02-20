<template>
  <div >
<el-row>
      <el-col :span="8" class="center">
        <el-input
          v-model="search"
          @focus="focus"
          @blur="blur"
          @keyup.enter.native="searchHandler"
          placeholder="搜索"
        >
         <!-- <i class="el-icon-search"></i> -->
          <el-button slot="append" icon="el-icon-search" id="search" @click="searchHandler"></el-button>
        </el-input>
        <!---设置z-index优先级,防止被走马灯效果遮挡-->
        <el-card
          @mouseenter="enterSearchBoxHanlder"
          v-if="isSearch"
          class="box-card"
          id="search-box"
          style="position:relative;z-index:15"
        >
        </el-card>
      </el-col>
         <el-button  icon="el-icon-sort" id="sort" @click="searchHandler" class='sort' circle></el-button>
         <el-button  icon="el-icon-delete" id="drop" @click="searchHandler" class='drop' circle></el-button>
    </el-row>

    <!-- 租借的相关信息 -->
    <div class='info'>
        <router-link :to="`/rent`" class='in' >租借中: {{onloan}}</router-link>
        <span class='in' style="color:red">待归还: {{tobereturned}}</span>
        <router-link :to="`/poststation`"  class='in'>驿站中: {{inthepoststation}}</router-link>
        <router-link :to="`/warehouse`"  class='in'>仓库中: {{inthewarehouse}}</router-link>
         <router-link :to="`/sale`"  class='in'>已卖出: {{sale}}</router-link>
    </div>

    <!-- 搜索得到的分类物品 -->
    <div class='goods'>
        <el-table
        
    :data="searchList"
    style="width: 100%">
    <el-table-column
      fixed
      prop="name"
      label="商品名"
      width="200"
      align="center">
    </el-table-column>
    <el-table-column
      prop="commoditynumber"
      label="商品号"
      width="150"
      align="center">
    </el-table-column>
    <el-table-column
      prop="ordernumber"
      label="订单号"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="buyerId"
      label="买家Id"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="condition"
      label="逾期情况"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="returntime"
      label="最晚归还时间"
      width="140"
      align="center">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="200"
      align="center">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row.id)" type="text" size="small" round  style="background-color: purple;">查看详情</el-button>
        <el-button @click="handleInfo(scope.row.id)" type="text" size="small" round  style="background-color: yellow;">一键提醒</el-button>
      </template>
      
    </el-table-column>
  </el-table>
    </div>

    <!-- 分页 -->
    <el-pagination
      :current-page="page"
      :page-size="limit"
      :total="total"
      style="padding: 30px 0; text-align: center;"
      layout="total, prev, pager, next, jumper"
      @current-change="getBookByCondition"
    />
  </div>
</template>

<script>
export default {
data() {
      return {
          onloan:2,//租借中
          tobereturned:1,//待归还
          inthepoststation:1,//驿站中
          inthewarehouse:4,//仓库中
          sale:0,//已卖出
          page:1,
          limit:5,
          total:2,
          searchList:[
              {
                name:'塞尔达传奇',//商品名
                commoditynumber:'SDRF001',//商品号
                ordernumber:'abda999',//订单号
                buyerId:'minus',//买家Id
                condition:'逾期两天',//逾期情况
                returntime:'2020/12/23',//最晚归还时间
              }
          ],//分类得到的商品
          search: "", //当前输入框的值
          isFocus: false, //是否聚焦
      }
    },
    created(){
        
    },
    methods:{
        searchHandler(){

        }
    }
}
</script>

<style scoped>
.center {
    width: 550px;
  margin-top: 15px;
  margin-left: 350px;
}
.sort {
  margin-top: 15px;
  margin-left: 30px;
  background-color:blue;
  color: white;
}
.drop {
  margin-top: 15px;
  margin-left: 30px;
  background-color: red;
  color: white;
}
.info {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    width: 100%;
    margin-top: 45px;
    margin-left: 150px;
}

.in{
    padding-top: 50px;
    padding-left: 130px;
}
.goods{
    margin-top: 45px;
    margin-left: 30px;
}
</style>
