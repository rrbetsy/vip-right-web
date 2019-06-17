<template>
  <div class="comment">
    <div class="comments-number" v-for="(item,index) in commentsList" :key="index">
      {{item.comments}}
      {{item.number}}
    </div>
    </div>
</template>

<script>
export default {
  name: 'Comment',
  props: {
    commentsNumber:Object
  },
  data(){
    return{
      commentsList:[
        {
          comments:'服务热情',
          number:'(107)'
        },
        {
          comments:'味道赞',
          number:'(99)'
        },
        {
          comments:'下午茶',
          number:'(42)'
        },
        {
          comments:'聚会好去处',
          number:'(31)'
        }
      ]
    }
  },
  }
</script>

<style scoped>
.comment{
 margin-left: 15px;
 display: flex;
 flex-flow: wrap;
}
.comments-number{
  font-family: 'PingFangSC-Regular';
  font-size: 13px;
  color: #111111;
  letter-spacing: 0;
  opacity: 0.7;
  background: #F0F0F0;
  border-radius: 100px;
  padding: 5px 10px;
  margin-right: 5px;
  margin-bottom: 5px;
}
</style>
