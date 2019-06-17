<template>
  <div class="user-comment">
    <div class="head-user">
      <div>
        <div class="head-image"><img :src="headImage"></div>
        <div class="vip-sign"><img :src="vipSign"></div>
      </div>
      <div class="user-time">
        <div class="user">
          <div class="user-name">{{userName}}</div>
          <div class="vip-rank">{{vipRank}}</div>
        </div>
        <div class="time">{{time}}</div>
      </div>
    </div>
    <div class="score-star">
       <span class="score">{{score}}</span>
       <img :src="starAll"/>
       <img :src="starAll"/>
       <img :src="starAll"/>
       <img :src="starNone"/>
       <img :src="starNone"/>
      <span class="price">{{price}}</span>
     </div>
     <p class="evaluate">{{evaluate}}</p>
  </div>
</template>

<script>
import headImage from './head-image.jpg'
import vipSign from './vip-sign.png'
import starAll from './star-all.png'
import starNone from './star-none.png'
export default {
  name: 'UserComment',
  data(){
    return{
      headImage,
      vipSign,
      starAll,
      starNone,
      userName:'咖小咖哎美食',
      vipRank:'lv1',
      time:'2小时前',
      score:'打分',
      price:'￥333/人',
      evaluate:'晚上和家人吃饭，订了煲王之王，其实这家之前父母有来过，那回老爸老妈吃的,晚上和家人吃饭，订了煲王之王，其实这家之前父母有来过，那回老爸老妈吃的'
    }
  }
  }
</script>
<style scoped>
.user-comment{
  margin-left: 15px;
  position: relative;
}
.head-user{
  display: flex;
}
.user-comment .head-image img{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-size: 100%;
}
.user-comment .vip-sign img{
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-size: 100%;
  position: absolute;
  top: 25px;
  left: 25px;
}
.user{
  display: flex;
  align-items: center;
}
.user-name{
  font-family: 'PingFangSC-Regular';
  font-size: 15px;
  color: #466889;
  text-align: left;
  line-height: 28px;
  margin-left: 10px;
}
.time{
  font-family: 'PingFangSC-Regular';
  font-size: 12px;
  color: #999999;
  margin-left: 10px;
}
.vip-rank{
  width: 27px;
  height: 15px;
  padding: 1px 2px;
  line-height: 15px;
  text-align: center;
  background: #FABC00;
  border-radius: 100px;
  color: white;
  margin-left: 5px;
}
.score-star{
   margin-left: 48px;
   display: flex;
   align-items: center;
}
.score-star img{
  width: 14px;
  height: 13px;
  padding-left: 2px;
}
.score{
  font-family: 'PingFangSC-Regular';
  font-size: 13px;
  color: #111111;
  text-align: left;
}
.price{
  font-family: 'PingFangSC-Regular';
  font-size: 13px;
  color: #111111;
  text-align: left;
  margin-left: 5px;
}
.evaluate{
  width: 285px;
  height: 42px;
  font-family: 'PingFangSC-Regular';
  font-size: 15px;
  text-align: justify;
  color: #111111;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 48px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
