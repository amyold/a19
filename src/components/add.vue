<template>
    <div class="add">
        <img src="@assets/home/add.png">
    </div>
</template>

<script>
export default {
  name:'add',
}
</script>

<style lang="scss">
.add{
    width: 60px;
    height: 60px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #71B1FE;
    margin-left: 20px;
    box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.16); 
    img {
        width: 28px;
        height: 25px;
    }
}
.add:hover{
        background-color: #8cbcf7;

}
</style>