<template>
  <div class="shop-name">
   <img :src="detailImage">
   <name title='棒约翰' score='打分' distance='170m' position='五一路491弄128号万福园旁'></name>
  </div>
</template>

<script>
import Name from './shop-name/Name.vue'
import detailImage from './detail-image.jpg'
export default {
  name: 'ShopName',
  props: {
   name:String,
  },
  data(){
    return{
      detailImage
    }
  },
components:{
   Name
  }
  }
</script>

<style scoped>
  .shop-name{
    display: flex;
  }
  .shop-name img{
    width: 53px;
    height: 53px;
    margin-left: 15px;
    margin-right: 5px;
    margin-bottom: 13px;
  }
</style>
