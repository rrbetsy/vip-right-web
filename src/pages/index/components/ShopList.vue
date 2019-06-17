<template>
  <div class="shop-list">
    <list-item v-for="(item, index) in dataList" :key="index" :shopInfo="item"></list-item>
  </div>
</template>

<script>
import listData from '../../../mock/deal-list.json'
import ListItem from './ListItem.vue'
export default {
  name: 'ShopList',
  props: {
   
  },
  components:{
     ListItem,
   },
  data() {
    return {
      dataList:[{}]
    }
  },
  created() {
    this.dataList = listData.data.discountCouponList,
    console.log(this.dataList[0].shopBaseInfo)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .shop-name{
    margin-top: 10px;
    font-family: 'PingFangSC-Semibold';
    font-size: 16px;
    color: #111111;
  }
  .star-distance{
    display: flex;
    align-items: center;
  }
  .star-avgprice img{
    width: 12px;
    height: 12px;
    margin-top: 3px;
    padding: 1px;
  }
  .avgprice{
    font-family: 'PingFangSC-Regular';
    font-size: 12px;
    color: #111111;
    text-align: right;
    line-height: 22px;
    margin-left: 4px;
  }
  .distance{
    font-family: 'PingFangSC-Regular';
    font-size: 12px;
    color: #777777;
    margin-left: 180px;
  }
 .shop-discount-coupon{
    display: flex;
    /* align-items: center; */
  }
  .shop-header img{
    width: 66px;
    height: 66px;
    border: 2px solid #F7D986;
    border-radius: 3px;
    margin-bottom: 12px;
    align-self: center;
  }
  .coupon-name{
    width: 166px;
    height: 41px;
    font-family: 'PingFangSC-Medium';
    font-size: 16px;
    color: #111111;
    text-align: left;
    line-height: 19px;
    margin-left: 10px;
    margin-right: 35px;
  }
  .discount{
    margin-top: 7px;
    margin-bottom: 12px;
  }
  .discounted{
    font-family: 'PingFangSC-Semibold';
    font-size: 17px;
    color: #FF6633;
    padding: 10px 5px 10px 10px;
  }
  .pre-discount{
    font-family: 'Helvetica';
    font-size: 14px;
    color: #777777;
    text-decoration: line-through;
  }
  .take-coupon{
    width: 66px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    background: #FF6633;
    border-radius: 100px;
    font-family: 'PingFangSC-Semibold';
    font-size: 13px;
    color: #FFFFFF;
    flex: 1;
    margin-right: 15px;
    align-self: center;
  }
</style>
