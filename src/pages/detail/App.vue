<template>
  <div id="app">
    <nav-bar title="权益详情"></nav-bar>
    <head-info></head-info>
    <DividerBar></DividerBar>
    <Content></Content>
    <shop-info></shop-info>
    <DividerBar></DividerBar>
    <review></review>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import HeadInfo from './components/HeadInfo.vue'
import Content from './components/Content.vue'
import ShopInfo from './components/ShopInfo.vue'
import Review from './components/Review.vue'
import DividerBar from './components/DividerBar.vue'

export default {
  name: 'app',
  components: {
    NavBar,
    HeadInfo,
    Content,
    ShopInfo,
    Review,
    DividerBar
  }
}
</script>

<style>
#app {
  font-size: 12px;
}
</style>
