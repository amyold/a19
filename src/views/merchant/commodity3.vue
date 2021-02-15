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
              <el-form-item label-width="100" label="是否愿意寄存驿站" prop="hostStation">
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
              <el-button style="background-color: #957BF1; color: white;">excel导入</el-button>
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
        <div style="display: flex;justify-content: center">
          <el-button @click="step = 1">返回上一层</el-button>
          <el-button type="primary" @click="next3">下一步</el-button>
        </div>
      </el-row>
      <el-row v-if="this.step === 3" class="box" :span="24">
        <div style="display: flex;justify-content: center">
          <el-button @click="step = 2">返回上一层</el-button>
          <el-button type="primary" @click="upload">上传</el-button>
        </div>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'commodity3',
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
    next3: function () {
      // TODO
      this.step = 3;
    },
    upload: function () {
      // TODO
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