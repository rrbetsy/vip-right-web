<template>
  <div class="nav-bar">
    <div class="icon-back" @click="backClick"></div>
    <p class="title">{{title}}</p>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    title: String
  },
  methods:{
      backClick(){
          alert('back')
      }
  }
}
</script>

<style scoped>
  .nav-bar{
    display: flex;
    height: 65px;
    align-items: center;
    position: relative;
  }
  .nav-bar::before{
    content: ' ';
    width: 200%;
    height: 200%;
    position: absolute;
    top: 0;
    left: 0;
    border-bottom: 1px solid #d7d7d7;
    transform: scale(0.5);
    transform-origin: top left;
  }
  .icon-back{
    width: 15px;
    height: 15px;
    border-left: 2px solid #111111;
    border-bottom: 2px solid #111111;
    transform: rotate(45deg);
    margin-left: 15px;
    }
  p.title{
    text-align: center;
    color: #111;
    font-size: 20px;
    font-weight: bold;
    flex: 1
    }
</style>
