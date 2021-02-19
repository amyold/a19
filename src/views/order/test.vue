<el-card class="box-card BoxTwo">
   <div class="content">
     <div class="left">
    <img src="@assets/home/备货单.png" alt="">
    <span>当前订单状态：未发货</span>
  </div>
  <div class="right">
      <el-button type="primary" class="btn" @click="dialogVisible = true">点击发货</el-button>
      <el-button type="primary" class="btn" @click="edit = true">修改收货人信息</el-button>
      <el-button type="primary" class="btn" >删除订单</el-button>
       </div>
   </div>
  </el-card>
  <!-- 点击发货 -->
  <el-dialog
  title="运单信息编写"
  :visible.sync="dialogVisible"
  width="45%"
  :before-close="handleClose"
  class="dialog">
  <span class="cin">
      <span>运单号</span>
      <el-input
  placeholder="请输入内容"
  v-model="input"
  clearable>
</el-input>
    </span>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
<!-- 修改收货人信息 -->
 <el-dialog
  title="修改收货人信息"
  :visible.sync="edit"
  width="45%"
  :before-close="handleClose"
  class="dialog">
 <span>
     <el-form ref="form" :model="Information" label-width="80px">
  <el-form-item label="收货人姓名">
    <el-input v-model="Information.name"></el-input>
  </el-form-item>
  <el-form-item label="收货人电话号码">
    <el-input v-model="Information.telephone"></el-input>
  </el-form-item>
  <el-form-item label="收货地址">
    <el-input v-model="Information.address"></el-input>
  </el-form-item>
  <el-form-item label="邮政编码">
    <el-input v-model="Information.code"></el-input>
  </el-form-item>
     </el-form>
 </span>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="edit = false">取 消</el-button>
    <el-button type="primary" @click="edit = false">确 定</el-button>
  </span>
</el-dialog>
<!-- 备注订单 -->
 <el-dialog
  title="备注订单"
  :visible.sync="remark"
  width="45%"
  :before-close="handleClose">
  <span>
    <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="备注">
    <el-input v-model=" form.remark" type="textarea" :autosize="{ minRows:5, maxRows:8}"></el-input>
  </el-form-item>
    </el-form>
  </span>
  <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="remark = false">取 消</el-button>
    <el-button type="primary" @click="remark= false">确 定</el-button>
  </span>
</el-dialog>
