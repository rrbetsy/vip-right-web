<template>
  <div class="shop">
    <div class="title">{{title}}</div>
    <div class="people">{{people}}</div>
    <div class="store">{{store}}</div>
    <div class="icon-right" @click="handelClick"></div>
  </div>
</template>

<script>
export default {
  name: 'Shop',
  props: {
   title:String,
   store:String,
   people:String
  },
  methods:{
    handelClick(){
      alert('clicked')
    }
  }
  }
</script>

<style scoped>
  .shop{
    height: 50px;
    display: flex;
    align-items: center;
    width: 100%;
  }
  .shop .title{
    font-family: 'PingFangSC-Semibold';
    font-size: 16px;
    color: #111111;
    letter-spacing: -0px;
    margin-left: 15px;
  }
  .store{
    font-family: 'PingFangSC-Regular';
    font-size: 12px;
    color: #777777;
    margin-left: 185px;
    flex: 1;
  }
  .people{
    font-family: '.SFNSDisplay';
    font-size: 15px;
    color: #777777;
    letter-spacing: -0px;
    margin-left: 5px;
  }
    .icon-right{
      width: 6px;
      height: 6px;
      border-right: 2px solid #777777;
      border-bottom: 2px solid #777777;
      transform: rotate(-45deg);
      margin-right: 20px;
    }
</style>
