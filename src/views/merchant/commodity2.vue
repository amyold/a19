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
      fixed
      prop="merchandiseinventory"
      label="商品库存"
      width="200"
      align="center">
    </el-table-column>
    <el-table-column
      fixed
      prop="description"
      label="描述"
      width="300"
      align="center">
    </el-table-column>
    <el-table-column
      prop="creattime"
      label="创建时间"
      width="300"
      align="center">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100"
      align="center">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row.id)" type="text" size="small" round  style="background-color: purple;">查看详情</el-button>
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
          page:1,
          limit:5,
          total:2,
          searchList:[
              {
                name:'switch卡带',//类别名
                merchandiseinventory:199,//商品库存
                description:'塞尔达的啥啥啥',//描述
                creattime:'2021/1/24/19:00'//创建时间
              },
              {
                name:'PlayStation5',//类别名
                merchandiseinventory:20,//商品库存
                description:'我暑假',//描述
                creattime:'2021/1/24/19:01'//创建时间
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

        },
        handleClick(id){
            this.$router.push('/rent')
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
