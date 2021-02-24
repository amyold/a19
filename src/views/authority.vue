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
            <el-button type="primary" @click="showFrom(0)">单独添加</el-button>
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
          <div class="seek">
              <search
                      :searchText="page.keyword"
                      @changeText="changeText"
                      @search="getList"
              />
          </div>
          <el-button class="btn"> <sort/></el-button>
          <el-button class="btn"><cancel/></el-button>
        </div>

        <!--  table page        -->
        <div class="datalist">

          <el-table
               ref="multipleTable"
               :data="tableData"
               tooltip-effect="dark"
               style="width:95%"
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
                 prop="username"
                 label="姓名"
                 width="100">
               </el-table-column>

               <el-table-column
                 prop="phone"
                 label="手机号"
                 width="180">
               </el-table-column>

               <el-table-column
                 prop="email"
                 label="邮箱"
                 width="180">
               </el-table-column>

               <el-table-column
                 prop="createTime"
                 label="添加时间"
                 width="180">
               </el-table-column>

               <el-table-column
                 disabled
                 label="是否启用"
                 width="100"
               >
                 <template slot-scope="scope">
                     <el-switch
                             disabled
                             v-model="scope.row.status===1">
                     </el-switch>
                 </template>
               </el-table-column>

               <el-table-column
                 label="操作"
                 show-overflow-tooltip>
                   <template slot-scope="scope">
                       <el-button  type="primary" class="edit" @click="showFrom(1,scope.row)">编辑</el-button>
                       <el-button  type="primary" class="cancel1" @click="handleDelete(scope.row)">删除</el-button>
                   </template>
               </el-table-column>
        </el-table>

          <div id="page">
           <el-pagination
            background
            layout="total, prev, pager, next"
            @current-change="getList"
            :total="page.total"
            :page-size="page.pageSize"
            :current-page="page.pageIndex"
           ></el-pagination>
         </div>

       </div>
      </div>

      <!-- 弹框增加/修改        -->
      <el-dialog
          :title="formTitle"
          :visible.sync="formVisible"
          width="40%"
          class="dialog_one">
          <!--          form表单-->
          <el-form :model="formObject"  ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <el-form-item label="姓名" prop="name">
                  <el-input v-model="formObject.username"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                  <el-input v-model="formObject.password" ></el-input>
              </el-form-item>
              <el-form-item label="手机号" prop="phone">
                  <el-input v-model="formObject.phone"></el-input>
              </el-form-item>
              <el-form-item label="邮箱" prop="email">
                  <el-input v-model="formObject.email"></el-input>
              </el-form-item>
              <el-form-item label="启用" prop="status">
                  <el-switch
                          v-model="isUse"
                          active-color="#13ce66"
                          inactive-color="#ff4949">
                  </el-switch>
              </el-form-item>
              <el-form-item label="备注" prop="remark">
                  <el-input
                          type="textarea"
                          :autosize="{ minRows:6, maxRows: 10}"
                          v-model="formObject.note">
                  </el-input>
              </el-form-item>
          </el-form>
          <!--          底部按钮-->
          <div class="dialog-footer">
            <el-button type="primary" @click="closeForm">取 消</el-button>
            <el-button type="primary" @click="handlePutConfirm">确 定</el-button>
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
        tableData: [],
        multipleSelection: [],
         //分页控件
        page:
        {
              total:0,
              pageSize:5,
              pageIndex:0,
              keyword:""
        },
        //表单相关
        searchText:'',
        isUse:true,
        formVisible:false,
        formType:0,
        formTitle:"",
        formObject:{},
        formInitialData:{
            id: '',
            username: '',
            password: '',
            email:'',
            phone:'',
            note:'',
            status:1,
        }
      }
  },
  methods: {
      /**
       * 获取分页列表(通用)
       * @param index
       * @returns {Promise<void>}
       */
      async getList(index)
      {
          this.page.pageIndex=index
          await this.$api.Admin.getHmsAdminPageListUsingPOST(this.page).then(res=>
          {
              var data=res.data
              this.tableData=data.records
              this.page.total=Number.parseInt(data.total)
              this.page.pageIndex=Number.parseInt(data.pageIndex)
              this.page.pageSize=Number.parseInt(data.pageSize)
          })
      },

      /**
       * 编辑->打开弹框(通用)
       * @param index
       * @returns {Promise<void>}
       */
      handleEdit(row)
      {
        this.editTitle = "编辑";
        this.formData=row;
        this.addpeople=true
      },
      /**
       * 增加(通用)
       * @param index
       * @returns {Promise<void>}
       */
      async handlePutConfirm()
      {
          this.formObject.status = (this.isUse===true?1:0);
          if(this.formType===0)
          {
              await this.$api.Admin.addHmsAdminUsingPUT(this.formObject).then(res=>{
                  var code = res.code;
                  if(code===200)
                  {
                      this.closeForm();
                      this.getList(0);
                      this.$api.util.showMessage('success','添加成功');
                  }
                  else
                  {
                      this.$api.util.showMessage('error',res.message);
                  }
              })
          }else
          {
              await this.$api.Admin.updateHmsAdminUsingPOST(this.formObject).then(res=>{
                  var code = res.code;
                  if(code===200)
                  {
                      this.closeForm();
                      this.getList(0);
                      this.$api.util.showMessage('success','编辑成功');
                  }
                  else
                  {
                      this.$api.util.showMessage('error',res.message);
                  }
              })
          }
      },
      /**
       * 删除(通用)
       * @param row
       * @returns {Promise<void>}
       */
      async handleDelete(row)
      {
          await this.$api.Admin.deleteHmsAdminUsingDELETE(row.id).then(res=>{
              if(res.code===200)
              {
                  this.getList(0);
                  this.$api.util.showMessage('success','删除成功');
              }
              else
              {
                  this.$api.util.showMessage('error',res.message);
              }
          })
      },
      /**
       * 打开表单(通用)
       * type=0->添加
       * type=1->编辑
       */
      showFrom(type,row)
      {
          this.formType=type;
          if(type===0)
          {
              this.formTitle="增加";
              this.formObject = this.formInitialData
              this.formVisible = true;
              this.isUse=true
          }else
          {
              this.formTitle="编辑";
              this.formObject=row;
              this.isUse=row.status===1
              this.formVisible= true;
          }
      },
      /**
       * 关闭表单(通用)
       */
      closeForm()
      {
        this.formVisible=!this.formVisible;
        this.formObject=this.formInitialData;
      },
      changeText(e)
      {
          this.page.keyword=e;
      },
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
    }
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