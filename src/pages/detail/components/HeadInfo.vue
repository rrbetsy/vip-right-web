<template>
  <div class="head-info">
   <img :src="detailImage"/>
    <div class="coupon">{{ coupon}}</div>
    <div class="limit-time">
        <span class="time">{{time}}</span>
        <span class="limit">{{limit}}</span>
    </div>
 </div>
</template>

<script>
import detailImage from '../assets/detail-image.jpg'
export default {
  name: 'HeadInfo',
  data(){
      return{
          detailImage,
          coupon:'大众点评外卖抵用券',
          time:'有效期：2019.10.23-2019.11.23',
          limit:'仅限每周二到店使用'
      }
  }
}
</script>

<style scoped>
.head-info{
  background: #FFFFFF;
}
.head-info img{
  background-size: 100%;
  width: 100%;
  height: 234px;
}
.head-info .coupon{
  font-family: PingFangSC-Semibold;
  font-size: 19px;
  color: #111111;
  letter-spacing: 0.41px;
  margin-top: 10px;
  margin-bottom: 5px;
  margin-left: 15px;
}
.head-info .limit-time{
  font-family: PingFangSC-Regular;
  font-size: 13px;
  color: #777777;
  letter-spacing: 0.28px;
  margin-left: 15px;
  padding-bottom: 15px;
}
.head-info .limit{
  margin-left: 20px;
}
</style>
