<template>
  <div class="theme-content">
    <div class="left-line"></div>
    <div class="theme">{{theme}}</div>
    <div class="right-line"></div>
  </div>
</template>

<script>
export default {
  name: 'ThemeContent',
  props: {
    theme: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.theme-content{
  display: flex;
  align-items: center;
  justify-content: center;
}
.theme{
  font-family: "PingFangSC-Semibold";
  font-size: 22px;
  color: #111111;
  height: 31px;
}
.left-line{
  width: 15px;
  height: 2.5px;
  background-color: #FF6633;
  margin-right: 10px;
  border-radius: 2px;
}
.right-line{
  width: 15px;
  height: 2.5px;
  background-color: #FF6633;
  margin-left: 10px;
  border-radius: 2px;
}
</style>
