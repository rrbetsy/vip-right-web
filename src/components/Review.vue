<template>
  <div class="review">
    <div class="people-review">
      <shop title="网友点评" people="(298)"></shop>
      <div class="icon-right" @click="handelClick"></div>
    </div> 
    <Comment></Comment>
    <UserComment></UserComment>
    <DividerBar></DividerBar>
  </div>
</template>

<script>
import Shop from './shop-info/Shop.vue'
import Comment from './review/Comment.vue'
import UserComment from './review/UserComment.vue'
import DividerBar from './DividerBar.vue'
export default {
  name: 'Review',
  components:{
    Shop,
    Comment,
    UserComment,
    DividerBar
  }, 
  methods:{
    handelClick(){
      alert('clicked')
    }
    }
}
</script>

<style scoped>
  .people-review{
    display: flex;
    justify-content: space-between;
  }
 .people{
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #777777;
    margin-left: 10px;
  }
</style>
