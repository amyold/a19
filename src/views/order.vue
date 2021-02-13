<template>
  <el-container>
    <el-header>
      <div class="name">
        <img src="@assets/home/菜单.png">
        <div>订单纠纷</div>
      </div>
    </el-header>
    <el-main>
      <div class="about">

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
               style="width: 1412px"
               :header-cell-style="{'text-align':'center'}"
               :cell-style="{'text-align':'center','pading-top':'20px'}"
               @selection-change="handleSelectionChange">
               <el-table-column
                 type="selection"
                 width="55">
               </el-table-column>
               <el-table-column
                 prop="orderSn"
                 label="订单编号"
                 width="250">
               </el-table-column>
               <el-table-column
                 prop="memberName"
                 label="用户名"
                 width="120">
               </el-table-column>
               <el-table-column
                 prop="merchantName"
                 label="商家名"
                 width="120">
               </el-table-column>
               <el-table-column
                 prop="disputeType"
                 label="纠纷类型"
                 width="150">
                   <template slot-scope="scope">
                      <span>{{scope.row.disputeType===1?'一级纠纷':'二级纠纷'}}</span>
                   </template>
               </el-table-column>
              <el-table-column
                      label="状态"
                      width="70px">
                  <template slot-scope="scope">
                      {{scope.hashProcess==0?'未处理':'已处理'}}
                  </template>
              </el-table-column>
              <el-table-column
                      label="操作"
                      show-overflow-tooltip>
                  <template slot-scope="scope">
                      <el-button  type="primary" class="edit" @click="showFrom(1,scope.row)">详情</el-button>
                      <el-button  type="primary" class="cancel1" @click="handleDelete(scope.row)" v-if="scope.hashProcess==0">审判</el-button>
                  </template>
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
           :title="formTitle"
           :visible.sync="formVisible"
           width="40%"
           class="dialog_one"
          >
          <el-form :model="formObject"  ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <el-form-item label="纠纷内容" prop="disputeContent">
                <el-input v-model="formObject.disputeContent"></el-input>
              </el-form-item>
              <el-form-item label="聊天记录" prop="chatPics" v-show="formObject.chatPics.length>0">
                  <el-image
                          style="width: 80%; height: auto"
                          v-for="(item,index) in formObject.chatPics"
                          :key="index"
                          :src="item"
                          >
                  </el-image>
              </el-form-item>
              <el-form-item label="商家票数" prop="merchantVote">
                  <el-input v-model="formObject.merchantVote"></el-input>
              </el-form-item>
              <el-form-item label="用户票数" prop="memberVote">
                  <el-input v-model="formObject.memberVote"></el-input>
              </el-form-item>
              <el-form-item label="最终结果" prop="result" v-show="formObject.result>=0">
                  <span>{{formObject.result==0?'支持用户':'支持商家'}}</span>
              </el-form-item>
          </el-form>
           <div class="dialog-footer" v-show="formObject.result<0">
               <el-button type="primary" @click="handlePutConfirm(0)">支持用户</el-button>
               <el-button type="primary" @click="handlePutConfirm(1)">支持商家</el-button>
           </div>
        </el-dialog>
    </el-main>
    
  </el-container>
</template>

<script>
export default {
  name:'order',
  data() {
    return {
       more:false,
       value1: true,
       count: 1,
       ruleForm:
       {
          number: '',
          descriptiont: '',
          detail: ''
       },
       tableData: [],
       multipleSelection: [],
        //分页控件
        page: {
            id:'2',//管理员id
            total:3,
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
            chatPics:[],
            disputeContent:'',
            memberVote:0,
            merchantVote:0,
            result:-1
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
            await this.$api.OrderDisputeItem.getHmsDisputeOrderItemPageListUsingPOST(this.page).then(res=>
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
         * 审判
         * @param index
         * @returns {Promise<void>}
         */
        async handlePutConfirm(type)
        {
           let object={
               id:this.formObject.id,
               result:type
           }
           await this.$api.OrderDisputeItem.updateHmsDisputeOrderItemUsingPOST(object).then(res=>{
               this.closeForm();
           })
        },
        /**
         * 打开表单(通用)
         * type=0->添加
         * type=1->编辑
         */
        async showFrom(type,row)
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
                this.formTitle="纠纷详情";
                this.$api.OrderDisputeItem.getHmsDisputeOrderItemUsingGET(row.id).then(res=>{
                    console.log(res.data)
                    this.formObject=res.data
                    this.formObject.id=row.id
                    this.formVisible= true;
                })
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
    },
    created() {
      this.getList(0);
      this.formObject=this.formInitialData
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

.about {
  display: flex;
  flex-direction: column;
  padding-left: 104px;
  margin-top: 40px;
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
      outline: none;}
  }
  .datalist {
    margin-top: 40px;
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
.check {
  background-color: #957BF1;
}

.check:hover {
  background-color: #a38ef4;
}
.el-pagination {
    padding-left: 1200px;
    padding-top: 20px;
}
.edit {
    background-color: #957BF1;
}
.edit:hover {
    background-color: #a38ef4;
}

.cancel1 {
    background-color: #F56C6C;
}
.cancel1:hover {
    background-color: #f08383;
}
.dialog_two .dialog-footer,
.dialog_one .dialog-footer
{
    z-index: -1;
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
</style>