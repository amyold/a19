<template>
  <el-container>
    <el-header>
      <div class="name">
        <img src="@assets/home/菜单.png" alt="">
        <div>上传商品</div>
      </div>
    </el-header>
    <el-main>
      <el-row class="box" :span="24">
        <el-steps :active="step" align-center>
          <el-step title="填写商品信息"></el-step>
          <el-step title="填写商品属性"></el-step>
          <el-step title="预览上传"></el-step>
        </el-steps>
      </el-row>
      <el-row v-if="this.step === 0" class="box" :span="24">
        <el-form :model="form" label-position="left" :rules="rules" ref="form1" label-width="100px">
          <el-form-item label="商品名称" prop="title">
            <el-col :span="8">
              <el-input v-model="form.title"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="商品分类" prop="category">
            <el-col :span="6">
              <el-input v-model="form.category"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="副标题" prop="subtitle">
            <el-col :span="12">
              <el-input v-model="form.subtitle"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="商品介绍" prop="description">
            <el-col :span="12">
              <el-input type="textarea" :rows="4" v-model="form.description"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="商品货号" prop="number">
            <el-col :span="2">
              <el-input v-model="form.number"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="售价" prop="price">
            <el-col :span="2">
              <el-input v-model.number="form.price"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="商品库存" prop="stock">
            <el-col :span="2">
              <el-input v-model.number="form.stock"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="租赁时间" required>
            <el-col :span="2">
              <el-form-item prop="rentTimeFrom">
                <el-input v-model.number="form.rentTimeFrom"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="2">
              <span style="display: block;text-align: center">~</span>
            </el-col>
            <el-col :span="2">
              <el-form-item prop="rentTimeTo">
                <el-input v-model.number="form.rentTimeTo" prop="rentTimeTo"></el-input>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-row :gutter="16">
            <el-col :span="4">
              <el-form-item label="押金设置" prop="deposit">
                <el-input v-model.number="form.deposit"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="租金设置" prop="rentPrice">
                <el-input v-model.number="form.rentPrice"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <el-form-item label-width="100" label="是否支持先租后买" prop="supportRentBeforeBuy">
                <el-switch v-model="form.supportRentBeforeBuy"></el-switch>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item label-width="100" label="是否支持续租" prop="supportLeaseRenewal">
                <el-switch v-model="form.supportLeaseRenewal"></el-switch>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item label-width="100" label="是否愿意寄存中心仓库" prop="hostStation">
                <el-switch v-model="form.hostStation"></el-switch>
              </el-form-item>
            </el-col>
          </el-row>
          <el-col :span="12">
            <el-form-item label="发货地址" prop="srcAddr">
              <el-input v-model="form.srcAddr"></el-input>
            </el-form-item>
          </el-col>
        </el-form>
        <el-col>
          <el-button style="display: block;margin: auto" type="primary" @click="next1">下一步</el-button>
        </el-col>
      </el-row>
      <el-row v-if="this.step === 1" class="box" :span="24">
        <el-form :model="form" label-position="left" :rules="rules" ref="form2" label-width="100px">
          <el-form-item label="商品导入" prop="sku" required>
            <!--TODO-->
            <el-row>
              <el-button style="background-color: #957BF1; color: white;" class='upload' @click="uploadClick">excel导入</el-button>
              <input type="file" class="jsin" style="display:none">
              <el-button style="background-color: #32CD9F; color: white;">生成信息</el-button>
            </el-row>
            <el-row>
              <el-card id="sku-preview">
              </el-card>
            </el-row>
          </el-form-item>
          <el-form-item label="商品相册" prop="album" required>
            <el-upload action="#" list-type="picture-card" :auto-upload="false">
              <!--TODO-->
              <i slot="default" class="el-icon-plus"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="参数详情" prop="details">
            <el-input v-model="form.details"></el-input>
          </el-form-item>
          <el-form-item label="图片详情" prop="photos">
            <!--TODO-->
            <el-upload action="#" list-type="picture-card" :auto-upload="false">
              <i slot="default" class="el-icon-plus"></i>
            </el-upload>
          </el-form-item>
        </el-form>
        <div style="display: flex;justify-content: center">
          <el-button @click="step = 0">返回上一层</el-button>
          <el-button type="primary" @click="next2">下一步</el-button>
        </div>
      </el-row>
      <el-row v-if="this.step === 2" class="box" :span="24">
        <item-detail :title="form.title"
                     :album='["https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg", "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"]'
                     :desc="form.description"
                     :price="form.price"
                     :rent-price="form.rentPrice"
                     :category="form.category.split(',')"
                     :rent-time-from="form.rentTimeFrom"
                     :rent-time-to="form.rentTimeTo"
                     :stock="form.stock"
                     :details="form.details"
                     :photos="['https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg']"
                     :deposit="form.deposit"
                     :support-buy-after-rent="form.supportRentBeforeBuy"
                     :support-lease-renewal="form.supportLeaseRenewal"
                     :host-station="form.hostStation"
                     :src-addr="form.srcAddr"
        ></item-detail>
        <div style="display: flex;justify-content: center">
          <el-button @click="step = 1">返回上一层</el-button>
          <el-button type="primary" @click="upload">上传</el-button>
        </div>
      </el-row>
      <el-row v-if="this.step === 3" class="box" :span="24">
        <el-table :data="[{
          name: 'Test',
          picture: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          number: form.number,
          price: form.price,
          rentPrice: form.rentPrice,
          tagNew: false,
          tagRecommend: false,
          reviewState: 0,
          stock: form.stock
        }]">
          <el-table-column type="selection"></el-table-column>
          <el-table-column label="商品图片">
            <template slot-scope="scope">
              <el-image :src="scope.row.picture"></el-image>
            </template>
          </el-table-column>
          <el-table-column label="商品编号/商品名" width="90">
            <template slot-scope="scope">
              {{ scope.row.number }}/{{ scope.row.name }}
            </template>
          </el-table-column>
          <el-table-column label="商品价格">
            <template slot-scope="scope">
              <el-row>
                <img style="height: 1em; width: 1em;" src="@assets/commodity3/sell.png" alt="价格">
                <span>￥{{ scope.row.price }}</span>
              </el-row>
              <el-row>
                <img style="height: 1em; width: 1em;" src="@assets/commodity3/rent.png" alt="租金">
                <span>￥{{ scope.row.rentPrice }}/天</span>
              </el-row>
            </template>
          </el-table-column>
          <el-table-column label="标签" width="100">
            <template slot-scope="scope">
              <el-row>
                <el-switch v-model="scope.row.tagNew" style="margin-right: 8px"></el-switch>
                <span>新品</span>
              </el-row>
              <el-row>
                <el-switch v-model="scope.row.tagRecommend" style="margin-right: 8px"></el-switch>
                <span>推荐</span>
              </el-row>
            </template>
          </el-table-column>
          <el-table-column label="商品属性">
            <template>
              <span style="cursor: pointer;display: flex; justify-content: center; align-items: center; width: 44px; height: 44px; background-color: #71B1FE; border-radius: 24px">
                <svg style="width: 32px; height: 32px;" t="1613646287231"
                     class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3092"
                     width="200" height="200">
                  <path
                      style="fill: #ffffff"
                      d="M704.853333 451.882667L345.834667 810.666667H192v-153.749334l359.018667-358.784 153.834666 153.749334z m30.165334-30.144l-153.813334-153.749334 42.154667-42.133333a42.666667 42.666667 0 0 1 60.309333 0l0.021334-0.021333 93.504 93.397333a42.666667 42.666667 0 0 1 0 60.352l-42.176 42.154667zM533.333333 725.034667H789.333333a42.645333 42.645333 0 0 1 0 85.290666H533.333333a42.645333 42.645333 0 0 1 0-85.290666z"
                      fill="#2A2A37" p-id="3093">
                  </path>
                </svg>
              </span>
            </template>
          </el-table-column>
          <el-table-column label="审核状态">
            <template slot-scope="scope">
              {{
                scope.row.reviewState === 0 ? '待审核' : scope.row.reviewState === 1 ? '审核中' : scope.row.reviewState === 2 ? '已通过' : '未通过'
              }}
            </template>
          </el-table-column>
          <el-table-column label="库存" prop="stock"></el-table-column>
          <el-table-column label="操作" width="300">
            <template>
              <el-button style="background-color: #957BF1; color: white; margin-right: 16px">查看详情</el-button>
              <el-button style="background-color: #F56C6C; color: white">删除商品</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import ItemDetail from "@components/ItemDetail";

export default {
  name: 'commodity3',
  components: {ItemDetail},
  data() {
    return {
      step: 0,
      form: {
        title: '',
        category: '',
        subtitle: '',
        description: '',
        number: '',
        price: 0,
        stock: '',
        rentTimeFrom: '',
        rentTimeTo: '',
        deposit: '',
        rentPrice: '',
        supportRentBeforeBuy: false,
        supportLeaseRenewal: false,
        hostStation: false,
        srcAddr: '',
        sku: {},
        details: ''
      },
      rules: {
        title: [
          {
            required: true,
            message: '请输入商品名称',
            trigger: "blur"
          }
        ],
        category: [
          {
            required: true,
            message: '请输入商品分类',
            trigger: "blur"
          }
        ],
        subtitle: [
          {
            required: true,
            message: '请输入副标题',
            trigger: "blur"
          }
        ],
        description: [
          {
            required: true,
            message: '请输入商品描述',
            trigger: "blur"
          }
        ],
        stock: [
          {
            required: true,
            message: '请输入库存',
            trigger: "blur"
          },
          {
            type: 'number',
            message: '必须为数字值',
          }
        ],
        rentTimeFrom: [
          {
            required: true,
            message: '请输入租赁时间',
            trigger: "blur"
          },
          {
            type: 'number',
            message: '必须为数字值',
          }
        ],
        rentTimeTo: [
          {
            required: true,
            message: '请输入租赁时间',
            trigger: "blur"
          },
          {
            type: 'number',
            message: '必须为数字值',
          }
        ],
        deposit: [
          {
            required: true,
            message: '请输入押金设置',
            trigger: "blur"
          },
          {
            type: 'number',
            message: '必须为数字值',
          }
        ],
        rentPrice: [
          {
            required: true,
            message: '请输入租金设置',
            trigger: "blur"
          },
          {
            type: 'number',
            message: '必须为数字值',
          }
        ],
        price: [
          {
            type: 'number',
            message: '必须为数字值',
          }
        ]
      }
    }
  },
  methods: {
    next1: function () {
      this.$refs["form1"].validate((valid) => {
        if (valid) {
          this.step = 1;
        }
      })
    },
    next2: function () {
      // TODO
      this.step = 2;
    },
    upload: function () {
      // TODO
      this.step = 3;
    },
    uploadClick(){
      let jsin=document.getElementsByClassName('jsin')[0];
                jsin.click();
    }
  }
}

</script>
<style scoped lang="scss">
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

.box {
  background: #ffffff;
  border-radius: 24px;
  padding: 32px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  margin-top: 8px;
}

.el-main {
  width: 90%;
  margin: 30px auto auto;
}

#sku-preview {
  margin-top: 21px;
  min-height: 100px;
}
</style>