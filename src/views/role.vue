<template>
  <el-container>

    <el-header>
      <div class="name">
        <img src="@assets/home/菜单.png">
        <div>角色列表</div>
      </div>
    </el-header>

    <el-main>


      <div class="about">

        <div class="op">
         <div class="seek">
            <search
                    :searchText="page.keyword"
                    @changeText="changeText"
                    @search="getList"
            />
        </div>
         <el-button class="btn"> <sort/></el-button>
         <el-button class="btn"> <cancel/></el-button>
         <el-button class="btn" @click="showFrom(0)"><add/></el-button>
        </div>

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
                      label="序号"
                      width="70px">
                  <template slot-scope="scope">
                      {{scope.$index+1}}
                  </template>
              </el-table-column>
               <el-table-column
                 prop="roleName"
                 label="角色名称"
                 width="200">
               </el-table-column>
               <el-table-column
                 prop="description"
                 label="描述"
                 width="250">
               </el-table-column>
               <el-table-column
                 prop="sort"
                 label="排序"
                 width="80">
               </el-table-column>
               <el-table-column
                 prop="createTime"
                 label="创建时间"
                 width="160">
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
                <el-form-item label="名称" prop="name">
                    <el-input v-model="formObject.roleName"></el-input>
                </el-form-item>
                <el-form-item label="描述" prop="description">
                    <el-input v-model="formObject.description"></el-input>
                </el-form-item>
                <el-form-item label="排序" prop="sort">
                    <el-input v-model="formObject.sort"></el-input>
                </el-form-item>
                <el-form-item label="权限分配" prop="description" v-if="formType==1">
                    <el-tree
                            ref="resourceTree"
                            :data="treeData"
                            show-checkbox
                            node-key="id"
                            >
                    </el-tree>
                </el-form-item>
            </el-form>
            <!--          底部按钮-->
            <div class="dialog-footer">
                <el-button type="primary" @click="closeForm">取 消</el-button>
                <el-button type="primary" @click="handlePutConfirm">确 定</el-button>
            </div>
        </el-dialog>

    </el-main>
  </el-container>
</template>

<script>
import editform from '@views/userManage/editform.vue'
import addrole from '@views/userManage/addrole.vue'
import add from '@components/add.vue'
import Search from '../components/search.vue'
export default {
    name:'role',
    data() {
        return {
            addrole:false,
            edit:false,
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
                roleName:'',
                description:'',
                sort:0,
                createTime:'',
                resourceIds:[],
            },
            //树形控件
            treeData:[]
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
            await this.$api.Role.getHmsRolePageListUsingPOST(this.page).then(res=>
            {
                var data=res.data
                this.tableData=data.records
                this.page.total=Number.parseInt(data.total)
                this.page.pageIndex=Number.parseInt(data.pageIndex)
                this.page.pageSize=Number.parseInt(data.pageSize)
            })
        },
        /**
         * 获取树形控件
         */
        async getResourceTree()
        {
            await this.$api.ResourceCategory.getHmsResourceTreeUsingGET().then(res=>{
                this.treeData=res.data
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
            if(this.formType===0)
            {
                await this.$api.Role.addHmsRoleUsingPUT(this.formObject).then(res=>{
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
                this.formObject.resourceIds=this.$refs.resourceTree.getCheckedKeys();
                await this.$api.Role.updateHmsRoleUsingPOST(this.formObject).then(res=>{
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
            console.log(row)
            console.log(row.id)
            await this.$api.Role.deleteHmsRoleUsingDELETE(row.id).then(res=>{
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
                //树形控件逻辑
                this.$api.RoleResource.getHmsRoleResourceUsingGET(row.id).then(res=>{
                    this.$refs.resourceTree.setCheckedKeys(res.data,true);
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
    components:{
      editform,
      addrole,
      add,
        Search
    },
    created() {
        this.getList(0)
        this.getResourceTree()
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
      outline: none;
}
  }
  .datalist {
    margin-top: 40px;
    .page {
      margin-top: 24px;
    }
  }
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
.edit:hover {
  background-color: #a38ef4;
}

.cancel1 {
  background-color: #F56C6C;
}
.cancel1:hover {
  background-color: #f08383;
}

.el-pagination {
    padding-left: 1200px;
    padding-top: 20px;
}
</style>