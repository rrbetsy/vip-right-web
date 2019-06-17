<template>
  <div class="up-to-date">
    <div class="remind">上新提醒</div>
    <div :class="btnClass" @click="onOrOff">
      <div :class="buttonClass"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UpToDate',
  props: {
    msg: String
  },
  data() {
    return {
      off:Boolean,
      default:false
    }
  },
  computed: {
    btnClass(){
      return ['btn',this.off?'btn-off':'btn-on']
    },
    buttonClass(){
      return ['button',this.off?'button-off':'button-on']
    }
  },
  methods: {
    onOrOff(){
      return this.off=!this.off
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.up-to-date{
  display: flex;
  margin-left: 277px;
  margin-top: 72px;
}
.remind{
  width: 52px;
  height: 18px;
  font-family: 'PingFangSC-Regular';
  font-size: 12px;
  color: #999999;
  line-height: 18px;
}
.btn{
  width: 30px;
  height: 15px;
  box-shadow: inset 0 1px 6px 0 rgba(16,8,69,0.50);
  border-radius: 100px;
  position: relative;
}
.btn-off{
  background: #666666;
}
.btn-on{
  background: #ff6633;
}
.button{
  width: 15px;
  height: 15px;
  background: #FFFFFF;
  border: 1px solid #DDDDDD;
  border-radius: 50%;
  position: absolute;
}
.button-off{
  top: -1px;
  left: 0;
}
.button-on{
  top: -1px;
  left: 15px;
}
</style>
