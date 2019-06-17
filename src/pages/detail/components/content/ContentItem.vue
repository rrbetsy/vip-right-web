<template>
  <div class="content-item">
    <div class="item-title">{{itemInfo.title}}</div>
    <ul>
      <li v-for="(item,index) in itemInfo.items" :key="index" >{{item}}</li>
    </ul>
    <DividerBar></DividerBar>
  </div>
</template>

<script>
import DividerBar from '../DividerBar.vue'
export default {
  name: 'ContentItem',
  props: {
    itemInfo:Object,
  },
  components: {
    DividerBar
  }
  }
</script>

<style scoped>
.content-item{
   background: #FFFFFF;
}
.content-item .item-title{
   font-family: 'PingFangSC-Semibold';
   font-size: 16px;
   color: #111111;
   letter-spacing: -0px;
   padding-top: 10px;
   padding-bottom: 5px;
   padding-left: 15px;
}
ul{
    padding-right: 15px;
    padding-bottom: 15px;
    padding-left: 15px;
}
.content-item li{
    list-style-type: none;
    font-family: 'PingFangSC-Regular';
    font-size: 13px;
    color: #777777;
    letter-spacing: -0px;
}
</style>
