<template>
    <div class="cancel">
        <img src="@assets/member/删除.png">
    </div>
</template>

<script>
export default {
  name:'cancel',
}
</script>

<style lang="scss">
.cancel{
    width: 60px;
    height: 60px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F56C6C;
    margin-left: 20px;
    box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.16); 
    img {
        width: 28px;
        height: 25px;
    }
}
</style>