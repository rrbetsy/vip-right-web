<template>
  <div class="header-content">
    <div class="header-background"></div>
    <div class="icon">
      <div class="back-image"><img :src="backImage" @click="backEvent"></div>
      <div class="ruleI-image"><img :src="ruleImage"></div>
      <div class="share-image"><img :src="shareImage"></div>   
    </div>
    <div class="up-to-date"><UpToDate></UpToDate></div>
    <div class="header-user-coupon">
      <div class="header-user">
        <!-- 头像和vip标志 -->
        <div class="header-vip">
          <div class="header-image">
            <img :src="headerImage">
          </div>
          <div class="vip-sign">
            <img :src="vipSign">
          </div>
        </div>
        <!-- 今日可领的券 -->
        <div class="ueser-coupon">
          <div class="user-coupon-icon">
            <div class="user-name">{{userCoupon.user}}</div>
            <!-- 已领的券和向右图标 -->
            <div class="coupon-icon">
              <div class="take-coupon">{{takeCoupon}}</div>
              <div class="right-icon"></div>
            </div>
          </div>
          <div class="today-num-coupon">
            <div class="today">{{userCoupon.today}}</div>
            <div class="number">{{userCoupon.number}}</div>
            <div class="coupon">{{userCoupon.coupon}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
					
<script>
import axios from "axios";
import UpToDate from "./UpToDate.vue";
import listDataMock from "../../../mock/deal-list.json";
import headerImage from "../assets/head.jpg";
import backImage from "../assets/back.png";
import ruleImage from "../assets/rule.png";
import shareImage from "../assets/share.png";
import vipSign from "../assets/vip-sign.png";
export default {
  name: "HeaderContent",
  props: {},
  components:{
    UpToDate
  },
  data() {
    return {
      headerImage,
      backImage,
      ruleImage,
      shareImage,
      vipSign,
      userCoupon: {
        user: "漫达子",
        today: "今日可领",
        number: "2",
        coupon: "张券"
      },
      takeCoupon: "已领到的券",
      listData: []
    };
  },
  methods: {
    backEvent(){
    alert('返回')
    }
  },
  mounted() {
    //模拟请求
    // this.listData = listDataMock.data.discountCouponList;
    // console.log(this.listData);
    //   axios({
    // 	  method:'GET',
    // 	//   url:'//m.dianping.com/rightsDay/api/couponList?page=2&pageSize=10&couponCategory=1&locatedCityId=2&appCityId=*&token=*&dpid=*&lat=*&lng=*',
    // 	 url:'../../../mock/deal-list.json',
    // 	  data:{

    // 	  }
    //   }).then((res)=>{
    // 	  console.log(res)
    //   })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-content {
  position: relative;
}
.header-content .up-to-date{
  position: absolute;
  top: 0;
  left: 0;
}
.header-background {
  background: url("../assets/header-background.png");
  height: 239px;
  background-size: 100%;
}
.icon{
  display: flex;
  position: absolute;
  top: 38px;
  left: 18px;
}
.icon img{
  width: 29px;
  height: 29px;
}
.ruleI-image{
  margin-left: 252px;
}
.share-image{
  margin-left: 6px;
}
.header-user-coupon {
  display: flex;
}
.header-user,
.today-num-coupon,
.coupon-icon,
.user-coupon-icon {
  display: flex;
  align-items: center;
}
.header-user-coupon {
  width: 345px;
  height: 70.5px;
  background-image: linear-gradient(-89deg, #ff9561 17%, #ff3e18 80%);
  box-shadow: 0 0 30px 0 rgb(0, 0, 0, 0.4);
  border-radius: 10px;
  position: absolute;
  margin-left: 15px;
  top: 214px;
}
.header-image img {
  width: 44px;
  height: 43px;
  margin: 10px 12px 12px 13px;
  background-repeat: no-repeat;
  background-size: 100%;
  border: 1px solid #ffffff;
  opacity: 0.9;
  border-radius: 50%;
}
.vip-sign img {
  width: 21px;
  height: 21px;
  background-repeat: no-repeat;
  background-size: 100%;
  /* border: 1px solid #FFFFFF; */
  opacity: 0.9;
  border-radius: 50%;
  position: absolute;
  top: 32px;
  left: 40px;
}
.user-name {
  font-family: "PingFangSC-Semibold";
  font-size: 18px;
  color: #ffffff;
}
.take-coupon {
  font-family: "PingFangSC-Regular";
  font-size: 12px;
  color: #ffffff;
  opacity: 0.7;
  margin-left: 135px;
}
.right-icon {
  width: 6px;
  height: 6px;
  border-right: 2px solid #ffffff;
  border-bottom: 2px solid #ffffff;
  opacity: 0.5;
  transform: rotate(-45deg);
}
.today-num-coupon {
  height: 20px;
}
.today,
.coupon {
  font-family: "PingFangSC-Regular";
  font-size: 13px;
  color: #ffffff;
  opacity: 0.8;
}
.number {
  font-family: "PingFangSC-Semibold";
  font-size: 19px;
  color: #ffffff;
  opacity: 0.8;
  padding-right: 2px;
  padding-left: 2px;
}
</style>
