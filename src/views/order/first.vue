<template>
  <div>
    <div class="name">
                  <img src="@assets/home/菜单.png">
        <el-breadcrumb separator="/" class="title">
  <el-breadcrumb-item :to="{ path: '/OrderList' }" class="one">订单列表</el-breadcrumb-item>
  <el-breadcrumb-item class="two">订单详情</el-breadcrumb-item>
</el-breadcrumb>
      </div>
    <el-card class="box-card BoxOne">
  <el-steps :active="1" align-center>
  <el-step title="提交订单"></el-step>
  <el-step title="支付订单"></el-step>
  <el-step title="平台发货"></el-step>
  <el-step title="确认收货"></el-step>
  <el-step title="完成评价"></el-step>

</el-steps>

</el-card>
<el-card class="box-card BoxTwo">
   <div class="content">
     <div class="left">
    <img src="@assets/home/备货单.png" alt="">
    <span>当前订单状态：未支付</span>
  </div>
  <div class="right">
      <span>支付窗口还有<span>12min </span>关闭</span>
       </div>
   </div>
  </el-card>
  <div class="subheading ">
  <img src="@assets/home/收货人.png" alt="">
  <span>收货人信息</span>
  </div>
  <el-card class="box-card BoxThree">
   <div class="con">
      <div class="content">
      <span>收货人姓名</span>
      <span>{{Information.commodity}}</span>
    </div>
    <div class="content">
      <span>收货人电话</span>
      <span>{{Information.telephone}}</span>
    </div>
    <div class="content">
      <span>收货地址</span>
      <span>{{Information.address}}</span>
    </div>
    <div class="content">
      <span>邮政编码</span>
      <span>{{Information.code}}</span>
    </div>
   </div>
  </el-card>
  <div class="subheading ">
  <img src="@assets/home/货物.png" alt="">
  <span>商品信息</span>
  </div>
  <el-table
    :data="tableData"
    style="width: 1320px"
       class="table">
    <el-table-column
      fixed
       prop="pic"
      label="商品图片"
      width="150">
    </el-table-column>
    <el-table-column
      prop="number"
      label="商品编号/商品名"
      width="90">
    </el-table-column>
    <el-table-column
      prop="price"
      label="商品价格"
      width="100">
    </el-table-column>
    <el-table-column
      prop="type"
      label="租/买"
      width="120">
    </el-table-column>
    <el-table-column
      prop="attribute"
      label="商品属性"
      width="300">
    </el-table-column>
    <el-table-column
      prop="amount"
      label="数量"
      width="120">
    </el-table-column>
    <el-table-column
      prop="calculate"
      label="小计"
      width="120">
      </el-table-column>
      <el-table-column
      prop="remark"
      label="备注"
      width="120">
    </el-table-column>
  </el-table>
  <div class="all ">
    <span>共 件</span>
    <span>合计</span>
    <span> 元</span>
  </div>
  <div class="heading">
    <div class="subheading ">
  <img src="@assets/home/操作.png" alt="">
  <span>操作信息</span>
  </div>
    <el-button type="primary" class="btn" @click="remark= true">备注订单</el-button>
  </div>
   <el-card class="box-card BoxThree Box">
   <div class="con">
      <div class="content">
      <span>操作账号</span>
      <span></span>
    </div>
    <div class="content">
      <span>操作时间</span>
      <span></span>
    </div>
    <div class="content">
      <span>订单状态</span>
      <span></span>
    </div>
    <div class="content">
      <span>备注</span>
      <span></span>
    </div>
   </div>
   <div class="NA">
     <span>N/A</span>
   </div>
  </el-card>
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
  </div>
</template>

<script>
export default {
name:'',
components:{
},
data () {
  return {
    // 收货人信息的类
    remark:false,
    form:{
      remark:''
    },
    Information:{
      commodity:'迪迦奥特曼',
      telephone:'10086',
      address:'银河系奥特曼村',
      code:'123456'
    },
   tableData: [{
          number: 'A-10086',
          price: '289',
         type: '租',
         attribute: '豪华版',
         amount:1,
         remark:'这是一个备注'
        },
        {
          number: 'A-10086',
          price: '289',
         type: '租',
         attribute: '豪华版',
         amount:1,
         remark:'这是一个备注'
        }]
    
  }
},
methods:{
   switchTo(path) {
        console.log("hello");
        console.log(path);
        this.$router.push(path)
      }
}

}

</script>
<style lang='scss' scoped>
@import '@style/color.scss';
.name {
  display: flex;
  font-size: 18px;
  padding-top: 44px;
  padding-left: 84px;
align-items: center;
img {
    height: 24px;
    width: 24px;
    padding-right: 12px;
  };
  .title{
      display: flex;
      align-items: center;
      .one{font-size: 18px;
      font-weight: bold;};
      .two{
            font-size: 16px;

}
  }
}
.box-card
{
  width: 1206px;
  margin-left: 93px;
  margin-top: 37px;
  border-radius: 24px;
  @include shadow;
  height: 99px;
  
}
.el-button--primary {
  height: 32px;
  font-size: 12px;
  border-radius: 8px;
  border: none;
  @include shadow;
}
.BoxTwo{
  height: 75px;
  .content{
      display: flex;
      justify-content: space-between;
  }
.left{
    display: flex;
    align-items: center;
    img{
      width: 21px;
    }
    span{
      color: #F56C6C;
      margin-left: 10px;
      font-size: 14px;
    }
  };
  .right{
    .btn:nth-child(2){
      background-color: #957BF1;
      margin-left: 15px;
    }
    .btn:nth-child(3){
      background-color: #F56C6C;
            margin-left: 15px;

    }
  }

  
}
.subheading{
    margin-left: 93px;
    display: flex;
    align-content: center;
    margin: 19px 0 20px  93px; 
    img{
      width: 20px;
    };
    span{
      font-size: 14px;
    }
}
.BoxThree{
  .con{
      display: flex;
      justify-content: space-between;
      padding: 0 76px;

  }
  .content{
    display: flex;
  flex-direction: column;
  span{
    font: 14px;
  }
  span:nth-child(1){
font-weight: bold;
  }
   span:nth-child(2)
   {
     margin-top: 27px;
   }
  }
}
.table{
  @include shadow;
  margin-left: 93px;
}
.all{
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  span:nth-child(1){
    font-size: 16px;
    font-weight: bold;
        margin-right: 13px;


  }
  span:nth-child(2){
    font-size: 16px;
    font-weight: bold;
    margin-right: 13px;
  }
  span:nth-child(3){
    font-size: 20px;
    font-weight: bold;
    color: #FF0B0B;
  }
}
.heading{
  width:1206px;
  margin: 0 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .subheading{
    img{
          margin-right: 8px;
    }
  }
  .btn{
    background-color: #FCC41B;
    &:hover{
      background-color: #ffdd79;
    }
  }
}
.Box{
  height: 115px;
  .NA{
    margin: 0 auto;
    width: 45px;
    height: 45px;
    background-color:#9CDCF8 ;
    border-radius: 22.5px;
    @include center;
    span{
      color: white;
    }
  }
}
.dialog-footer
{
  margin: 25px 0 14px 0;
 .el-button--primary{
   width: 96px;
  font-size: 12px;
  border-radius: 8px;
  border: none;
  @include shadow;
 }
.el-button--primary:nth-child(1){
  background-color: #F56C6C;
  margin-right:24px;
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
}}
</style>