<template>
  <el-row :gutter="20">
    <el-col :span="4">
      <el-carousel indicator-position="outside" height="120px">
        <el-carousel-item v-for="img in album" :key="img">
          <el-image :src="img" :preview-src-list="[img]">
          </el-image>
        </el-carousel-item>
      </el-carousel>
    </el-col>
    <el-col :span="16">
      <el-row id="title">{{ title }}</el-row>
      <el-row id="priceBar">
        <el-col :span="12">
          <span class="label">价格</span>
          <span class="price">￥{{ price }}</span>
        </el-col>
        <el-col :span="12">
          <span class="label">租金</span>
          <span class="price">￥{{ rentPrice }}/天</span>
        </el-col>
      </el-row>
      <el-row class="entry">
        <el-col :span="3" class="label">商品介绍</el-col>
        <el-col :span="21">
          {{ desc }}
        </el-col>
      </el-row>
      <el-row class="entry">
        <el-col :span="3" class="label">库存</el-col>
        <el-col :span="21">{{ stock }}件</el-col>
      </el-row>
      <el-row class="entry">
        <el-col :span="3" class="label">租赁时间</el-col>
        <el-col :span="21">{{ rentTimeFrom }} ~ {{ rentTimeTo }} 天</el-col>
      </el-row>
      <el-row class="entry">
        <el-col class="label" :span="3">分类</el-col>
        <el-col :span="21">
          <el-row type="flex" :gutter="20">
            <el-col v-for="cat in category" :key="cat">
              <el-card shadow="hover">
                {{ cat }}
              </el-card>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row class="entry">
        <el-col :span="3" class="label">参数详情</el-col>
        <el-col :span="21">{{ details }}</el-col>
      </el-row>
      <el-row class="entry">
        <el-col class="label" :span="3">图片详情</el-col>
        <el-col :span="21">
          <el-image v-for="p in photos"
                    :key="p"
                    :src="p"
                    fit="fit"
                    style="width: 40px; height: 40px;margin-right: 8px"
                    :preview-src-list="[p]"></el-image>
        </el-col>
      </el-row>
      <el-row class="entry">
        <el-col :span="3" class="label">押金设置</el-col>
        <el-col :span="21">￥{{ deposit }}</el-col>
      </el-row>
      <el-row class="entry" :gutter="20">
        <el-col :span="6">
          <span class="label">是否支持先租后买</span>
          <el-switch style="margin-left: 8px" disabled v-model="supportBuyAfterRent"></el-switch>
        </el-col>
        <el-col :span="6">
          <span class="label">是否支持续租</span>
          <el-switch style="margin-left: 8px" disabled v-model="supportLeaseRenewal"></el-switch>
        </el-col>
        <el-col :span="6">
          <span class="label">是否愿意寄存驿站</span>
          <el-switch style="margin-left: 8px" disabled v-model="hostStation"></el-switch>
        </el-col>
      </el-row>
      <el-row class="entry">
        <el-col :span="3" class="label">发货地址</el-col>
        <el-col :span="21">{{ srcAddr }}</el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "itemDetail",
  props: ["title", "desc", "price", "rentPrice", "category", "rentTimeFrom", "rentTimeTo", "details",
    "stock", "album", "photos", "deposit", "supportBuyAfterRent", "supportLeaseRenewal", "hostStation", "srcAddr"]
}
</script>

<style scoped lang="scss">
#title {
  font-size: larger;
  font-weight: bold;
  margin-bottom: 12px;
}

#priceBar {
  background-color: #e3e3e3;
  padding: 20px;
  border-radius: 4px;
}

.price {
  color: #ff0036;
  padding-left: 2em;
}
.label {
  font-weight: bold;
}
.entry {
  margin-top: 20px;
}
</style>