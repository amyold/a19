<template>
    <div class="sort">
        <img src="@assets/member/排序.png">
    </div>
</template>

<script>
export default {
  name:'sort',
}
</script>

<style lang="scss">
.sort{
    width: 60px;
    height: 60px;
    border-radius: 30px;
    display: flex;
    margin-left: 20px;
    justify-content: center;
    align-items: center;
    background-color: #16C2C2;
    box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.16); 
    img {
        width: 28px;
        height: 25px;
    }
}

.sort:hover{
    background-color: #21d8d8
}
</style>