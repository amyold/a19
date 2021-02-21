<template>
  <el-container>
    <el-header>
      <div class="name">
        <img src="@assets/home/菜单.png" alt="">
        <div>分类管理</div>
      </div>
    </el-header>

    <el-main>
      <el-row style="display: flex; margin-bottom: 16px;">
        <search v-model="search"></search>
        <sort></sort>
        <delete></delete>
      </el-row>

      <!-- 搜索得到的分类物品 -->
      <el-table :data="filteredCategoryList">
        <el-table-column type="selection" align="center"></el-table-column>
        <el-table-column prop="name"
                         label="类别名"
                         min-width="200"
                         align="center">
        </el-table-column>
        <el-table-column prop="stock"
                         label="商品库存"
                         min-width="200"
                         align="center">
        </el-table-column>
        <el-table-column prop="description"
                         label="描述"
                         min-width="300"
                         align="center">
        </el-table-column>
        <el-table-column prop="creatTime"
                         label="创建时间"
                         min-width="300"
                         align="center">
        </el-table-column>
        <el-table-column label="操作"
                         min-width="100"
                         align="center">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row.name)" type="text" size="small" round
                       style="background-color: #957BF1; color: #ffffff;">
              查看详情
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <el-pagination
          :current-page="page"
          :page-size="limit"
          :total="total"
          style="padding: 30px 0; text-align: center;"
          layout="total, prev, pager, next, jumper"
          @current-change="getBookByCondition"
      />
    </el-main>

  </el-container>
</template>

<script>
import Delete from "@components/delete";

export default {
  components: {Delete},
  data() {
    return {
      page: 1,
      limit: 5,
      total: 2,
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
      search: ""
    }
  },
  created() {

  },
  methods: {
    searchHandler() {

    },
    handleClick(id) {
      // this.$router.push('/rent')
      id
    },
    getBookByCondition() {

    }
  },
  computed: {
    filteredCategoryList() {
      return this.categoryList.filter(i => i.name.includes(this.search));
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
