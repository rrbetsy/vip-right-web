<template>
  <div class="name">
   <div class="title">{{title}}</div>
   <div class="score-phone">
     <div class="score-star">
       <span class="score">{{score}}</span>
       <img :src="starAll"/>
       <img :src="starAll"/>
       <img :src="starAll"/>
       <img :src="starSemi"/>
       <img :src="starNone"/>
     </div>
     <div class="phone"><img :src="phoneIcon"/></div>
    </div>
    <div class="dis-pos">
     <img :src="coordinate"/>
     <div class="distance">{{distance}}</div>
     <div class="line"></div>
     <div class="position">{{position}}</div>
    </div>
  </div>
</template>

<script>
import starAll from '../star-all.png'
import starSemi from '../star-semi.png'
import starNone from '../star-none.png'
import phoneIcon from '../phone.png'
import coordinate from '../coordinate.png'
export default {
  name: 'Name',
  props: {
  title:String,
  score:String,
  position:String,
  distance:String
  },
  data(){
    return {
      starAll,
      starSemi,
      starNone,
      phoneIcon,
      coordinate
    }
  }
  }
</script>

<style scoped>
  .title{
    font-family: 'PingFangSC-Semibold';
    font-size: 14px;
    color: #111111;
    width: 100%;
  }
  .score-star{
    display: flex;
    align-items: center;
  }
  .score-phone{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .score{
    font-family: 'PingFangSC-Regular';
    font-size: 12px;
    color: #777777;
    padding: 1px;
  }
  .score-star img{
    width: 12px;
    height: 12px;
    margin-top: 3px;
    padding: 1px;
  }
  .phone img{
    margin-left: 160px;
    margin-right: 20px;
    width: 17px;
    height: 22px;
    background-size: 100%;
  }
  .dis-pos{
    display: flex;
    align-items: center;
  }
  .dis-pos img{
    width: 10px;
    height: 12px;
    margin-right: 2px;
  }
  .distance{
    font-family: 'PingFangSC-Regular';
    font-size: 12px;
    color: #777777;
  }
  .position{
    font-family: 'PingFangSC-Regular';
    font-size: 12px;
    color: #777777;
  }
  .line{
    width: 5px;
    height: 11px;
    margin-left: 10px;
    margin-right: 5px;
    position: relative;
  }
  .line::before{
    content: ' ';
    width: 200%;
    height: 200%;
    position: absolute;
    top: 0;
    left: 0;
    border-left: 1px solid #777777;
    transform: scale(0.5);
    transform-origin: top left;
    opacity: 0.3;
  }  
</style>
