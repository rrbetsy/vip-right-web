<template>
  <div id="app">
    <HeaderContent></HeaderContent>
    <div class="this-week"><ThemeContent theme='本周热推'></ThemeContent></div>
    <SeparateBar></SeparateBar>
    <ShopList></ShopList>
    <DividerBar></DividerBar>
    <div class="discount"><ThemeContent theme='5折专享券'></ThemeContent></div>
    <TabBar></TabBar>
    <SeparateBar></SeparateBar>
    <ShopList></ShopList>
    <DividerBar></DividerBar>
  </div>
</template>

<script>
import HeaderContent from './components/HeaderContent.vue'
import ThemeContent from './components/ThemeContent.vue'
import DividerBar from '../../components/DividerBar.vue'
import SeparateBar from '../../components/SeparateBar.vue'
import TabBar from './components/TabBar.vue'
import ShopList from './components/ShopList.vue'
// import PartLine from './components/PartLine.vue'
// import HelloWorld from './components/HelloWorld.vue'

export default {
   components:{
     HeaderContent,
     ThemeContent,
     DividerBar,
     SeparateBar,
     TabBar,
     ShopList,
    //  PartLine
   }
}
</script>

<style scoped>
.this-week{
  margin-top: 70.5px;
  margin-bottom: 15px;
}
.discount{
  margin-top: 25px;
}
</style>
