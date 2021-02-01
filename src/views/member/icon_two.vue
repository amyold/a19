<template>
   <div class="out">
            <div class="icon_two">
              <img src="@assets/member/排序.png" alt="">
            </div>
          <div class="icon_two">
              <img src="@assets/member/删除.png" alt="">
          </div>
          </div>
</template>

<script>
export default {
name:'icon_two'

}

</script>
<style lang='scss' scoped>
@import '@style/color.scss';
.out{
  display: flex;
}
.icon_two{
    width: 60px;
    height: 60px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    @include shadow;
    margin-left: 10px;
    img{
        width: 29px;
    }
   
  }
  .icon_two:nth-child(1){
    background-color: #16c2c2;
  }
  .icon_two:nth-child(2){
    background-color: #f56c6c;
  }

</style>