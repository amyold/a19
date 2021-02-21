<template>
  <div class="delete">
    <img src="@assets/member/删除.png" alt="删除">
  </div>
</template>

<script>
export default {
  name: 'delete',
}
</script>

<style lang="scss">
.delete {
  width: 60px;
  height: 60px;
  border-radius: 30px;
  display: flex;
  margin-left: 20px;
  justify-content: center;
  align-items: center;
  background-color: #F56C6C;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);

  img {
    width: 28px;
    height: 25px;
  }
}

.delete:hover {
  background-color: #ed4545
}
</style>