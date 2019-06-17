<template>
  <div class="content">
    <content-item v-for="(item,index) in contentList" :key="index" :itemInfo="item"></content-item>
  </div>
</template>

<script>
import ContentItem from './content/ContentItem.vue'
export default {
  name: 'Content',
  components:{
    ContentItem
  },
  data(){
    return {
      contentList:[
        {
          title:'套餐内容',
          items:[
            '秘制花甲1份',
            '粉丝1份',
            '酸梅汁1扎'
            ]
        },
        {
          title:'活动说明',
          items:[
            '领取条件：大众点评橙V用户',
            '使用有效期：2018/07/17-2018/07/31',
            '领取数量：每人仅限领取一次；'
            ]
        },
        {
          title:'预约信息',
          items:[
            '不需要预约',
            ]
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
