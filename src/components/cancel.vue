<template>
    <div class="cancel">
        <img src="@assets/member/删除.png" alt="删除">
    </div>
</template>

<script>
export default {
  name:'cancel',
}
</script>

<style lang="scss" >
.cancel{
    width: 60px;
    height: 60px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F56C6C;
    margin-left: 20px;
    box-shadow: 0 3px 6px 0 rgba(0,0,0,0.16);
    img {
        width: 28px;
        height: 25px;
    }
}
.cancel:hover{
    background-color: #f09f9f;
}
</style>