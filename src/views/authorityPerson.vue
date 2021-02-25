<template>
  <el-container>
    <el-header>
      <div class="name">
        <img src="@assets/home/菜单.png">
        <div>权限人员</div>
      </div>
    </el-header>
    <el-main>
      <div class="addrole">
        <div class="title">
          <img src="@assets/member/添加.png" alt="">
          <p>添加概述人员</p>
        </div>
        <div class="detail">
          <div class="box">
            <img src="@assets/member/添加人员.png">
            <el-button type="primary" @click="addpeople=true">单独添加</el-button>
          </div>
          <div class="box">
            <img src="@assets/member/重点人群.png">
            <el-button type="primary" @click="batchadd=true">批量添加</el-button>
          </div>
          <div class="box">
            <img src="@assets/member/模板.png">
            <el-button type="primary">模板下载</el-button>
          </div>
           </div>
      </div>
      <div class="about">
        <div class="title">
          <img src="@assets/member/概述.png">
          <p>权限人员概况</p>
        </div>
        <div class="op">
          <div class="seek"><search/></div>
          <el-button class="btn"> <sort/></el-button>
          <el-button class="btn"><cancel/></el-button>
        </div>
        <div class="datalist">
          <el-table
       ref="multipleTable"
       :data="tableData"
       tooltip-effect="dark"
       style="width:1412px"
       :header-cell-style="{'text-align':'center'}"
       :cell-style="{'text-align':'center','pading-top':'20px'}"
       @selection-change="handleSelectionChange">
       <el-table-column
         type="selection"
         width="55">
       </el-table-column>
       <el-table-column
         prop="number"
         label="序号"
         width="50">
       </el-table-column>
       <el-table-column
         prop="name"
         label="姓名"
         width="100">
       </el-table-column>
       <el-table-column
         prop="account"
         label="账号"
         width="180">
       </el-table-column>
       <el-table-column
         prop="email"
         label="邮箱"
         width="180">
       </el-table-column>
       <el-table-column
         prop="addTime"
         label="添加时间"
         width="180">
       </el-table-column>
       <el-table-column
         prop="lastTime"
         label="最后登录时间"
         width="180">
       </el-table-column>
       <el-table-column
         label="是否启用"
         width="100">
         <el-switch v-model="value1">
</el-switch>
       </el-table-column>
       <el-table-column
         label="操作"
         show-overflow-tooltip>
         <el-button  type="primary" class="edit">编辑</el-button>
         <el-button  type="primary" class="cancel1">删除</el-button>
       </el-table-column>
     </el-table>
     <div id="page">
       <el-pagination
        background
        layout="total, prev, pager, next"
        :total="count">
      </el-pagination>
     </div>
        </div> 
       
      </div>
      <el-dialog
  title="单独添加"
  :visible.sync="addpeople"
  width="40%"
  class="dialog_one"
  >
  <addform/>
  <div class="dialog-footer">
    <el-button type="primary" @click="addpeople = false">取 消</el-button>
    <el-button type="primary" @click="addpeople = false">确 定</el-button>
  </div>
</el-dialog>
 <el-dialog
  title="批量上传"
  :visible.sync="batchadd"
  width="40%"
  class="dialog_two"
  >
  <div class="box">
    <img src="@assets/home/上传.png" alt="">
    <span>点击上传</span>
  </div>
  <div class="dialog-footer">
    <el-button type="primary" @click="batchadd = false">取 消</el-button>
    <el-button type="primary" @click="batchadd = false">确 定</el-button>
  </div>
</el-dialog>

    </el-main>
  </el-container>
</template>

<script>
import Search from '../components/search.vue'
import addform from '@views/userManage/addform.vue'

export default {
  name:'member',
  components: {
  Search,
  addform
},
  data() {
  return {
      screenWidth: document.body.clientWidth,
    addpeople:false,
    batchadd:false,
    value1: true,
    count: 1,
    tableData: [{
          number: 1,
          name: 'minus',
          account: '18559120521',
          email: '1874508358@qq.com',
          addTime: '2019-07-04 23:59:59',
          lastTime: '2020-07-04 23:59:59',
        }],
        multipleSelection: []
  }
},
  methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    },
     mounted() {
    const that = this
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        that.screenWidth = window.screenWidth
        console.log(that.screenWidth)
        if (that.screenWidth < 993) {
          that.topImgShow = false
        } else {
          that.topImgShow = true
        }
      })()
    }
  },

}
</script>
<style lang='scss' scoped>
@import '@style/color.scss';
.el-header{
  padding: 0 0;
}
.el-main{
  padding-left: 0;
  padding-right: 0;
}
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

.addrole {
  padding-left: 104px;
  .detail {
    display: flex;
    justify-content: space-between;
    padding-left: 27px;
    padding-right: 329px;
    .box {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 360px;
      height: 180px;
      background-color: white;
      border-radius: 16px;
      box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.16);
      img {
        height: 64px;
        width: 64px
        }
      .el-button--primary {
        border-radius: 8px;
        margin-top: 27px;
        width: 96px;
        border-radius: 8px;
        font-size: 12px;
        background-color: #957bf1;
        border: none;
      }
      
      .el-button--primary:hover{
        background-color: #a38ef4;
      }

    }
  }
}
.title {
    display: flex;
    margin: 27px  0;
    img {
      width: 18px;
      height: 18px;
      padding-right: 10px
    };
    p {font: 16px;}
}

.about {
  display: flex;
  flex-direction: column;
  padding-left: 104px;
  .seek {
    padding-right: 27px;
  }
  .op {
    display: flex;
     .btn{
      margin: 0;
      padding: 0;
      border: none;
      background-color: transparent;
      outline: none;
}
  }
  .datalist {
    margin-top: 24px;
    .page {
      margin-top: 24px;
    }
  }
}

.el-button--primary {
  width: 96px;
  height: 32px;
  font-size: 12px;
  border-radius: 8px;
  border: none;
}
.edit {
  background-color: #957BF1;
}
.edit:hover{
  background-color: #a38ef4;
}
.cancel1 {
  background-color: #F56C6C;
}
.cancel1:hover{
  background-color: #f08383;

}
.el-pagination {
    padding-left: 60vw;
    padding-top: 20px;
}
.dialog_two .dialog-footer,
.dialog_one .dialog-footer

{
  margin: 42px 0 18px 0;
 text-align: center;
.el-button--primary:nth-child(1){
  background-color: #F56C6C;
  margin-right: 130px;
  &:hover{
     background-color: #f08383;
  }
}
.el-button--primary:nth-child(2)
{
  background-color: #957BF1;
  &:hover{
    background-color: #a38ef4;
  }
}

}
.dialog_two .box{
  margin: 0 auto;
  width: 360px;
  height: 200px;
  border-radius: 21px;
border: 1px dashed #707070;
  @include center;
 display: flex;
 flex-direction: column;
  span{
color: #b6b6b6;
font-weight: bold;
font-size: 20px;
    margin-top: 25px;
  }
  img{
    width: 85px;
  }
}

</style>