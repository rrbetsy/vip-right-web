<template>
  <router-link to='/detail' class="link-wrap"><div class="list-item">
    <div class="shop-name">{{shopInfo.shopBaseInfo.shopName}}</div>
    <div class="star-distance">
     <div class="star-avgprice">
       <img :src="starAll"/>
       <img :src="starAll"/>
       <img :src="starAll"/>
       <img :src="starAll"/>
       <img :src="starAll"/>
       </div>
       <div class="avgprice">
         <span>￥</span>
         <span>{{shopInfo.shopBaseInfo.avgPrice}}</span>
         <span>/人</span>
       </div>
       <div class="distance">{{shopInfo.shopBaseInfo.distance}}</div>
    </div>
    <div class="part-line">
      <PartLine></PartLine>
    </div>
     <div class="shop-discount-coupon">
       <div class="shop-header"><img :src="shopHeader"></div>
       <div class="discount-coupon-name">
         <div class="coupon-name">{{shopInfo.commonCouponDTO.couponName}}</div>
         <div class="discount">
           <span class="discounted">{{discounted}}</span>
           <span class="pre-discount">{{preDiscount}}</span>
         </div>
       </div>
       <div class="take-coupon">{{takeCoupon}}</div>
     </div>  
     <SeparateBar></SeparateBar> 
  </div></router-link>
</template>

<script>
import listData from '../../../mock/deal-list.json'
import starAll from '../assets/star-all.png'
import shopHeader from '../assets/detail-image.jpg'
import PartLine from './PartLine.vue'
import SeparateBar from '../../../components/SeparateBar.vue'
export default {
  name: 'ShopList',
  props: {
   shopInfo:Object
  },
  components:{
     PartLine,
     SeparateBar
   },
  data() {
    return {
      starAll,
      shopHeader,
      takeCoupon:'去领券',
      discounted:'¥32',
      preDiscount:'¥64',
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
  /* .list-item{
  } */
  .link-wrap{
    display: block;
    text-decoration: none;
  }
  .shop-name{
    margin-top: 10px;
    margin-left: 20px;
    font-family: 'PingFangSC-Semibold';
    font-size: 16px;
    color: #111111;
  }
  .star-distance{
    display: flex;
    align-items: center;
    margin-left: 20px;
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
  .part-line{
    margin-left: 10px;
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
    margin-left: 20px;
    align-self: center;
  }
  .coupon-name{
    width: 166px;
    height: 41px;
    font-family: 'PingFangSC-Medium';
    font-size: 16px;
    color: #111111;
    text-align: left;
    line-height: 20px;
    margin-left: 10px;
    margin-right: 35px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
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
