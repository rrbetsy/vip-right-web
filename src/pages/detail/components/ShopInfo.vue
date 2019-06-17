<template>
  <div class="shop-info">
    <Shop title='适用商户' store='15家门店适用'></Shop>
    <ShopName name='棒约翰'></ShopName>
  </div>
</template>

<script>
import Shop from './shop-info/Shop.vue'
import ShopName from './shop-info/ShopName.vue'
export default {
  name: 'ShopInfo', 
  components:{
   Shop,
   ShopName
  },
}
</script>

<style scoped>
.shop-info{
 width: 100%;
}
</style>
