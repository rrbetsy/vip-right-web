<template>
  <div class="tab-bar">
    <div class="sub-line" :style="lineStyle"></div>
    <div
      v-for="(item, index) in tabItems"
      :key="index"
      :class="itemClass(item)"
      @click="itemClick(item,index)"
      ref="item"
    >{{item.title}}</div>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  props: {},
  data() {
    return {
      tabItems: [
        {
          id: 1,
          title: "美食"
        },
        {
          id: 2,
          title: "休闲娱乐"
        }
      ],
      lineInfo: {
        left: undefined,
        width: undefined
      },
      activeId: 1
    };
  },
  computed: {
    lineStyle() {
      return {
        left: this.lineInfo.left ? this.lineInfo.left + "px" : undefined,
        width: this.lineInfo.width ? this.lineInfo.width + "px" : undefined
      };
    }
  },
  methods: {
    itemClass(item) { //修改选中状态的样式
      return ["tab-item", item.id === this.activeId ? "active" : ""];
    },
    itemClick(item, index) {
      //如果选中的是自身则没有变化
      if (this.activeId === item.id) return;
      //将选中的id值赋给activeId，确定选中id
      //获取节点离屏幕左边的距离，和自身的宽度
      this.activeId = item.id;
      const { offsetLeft, clientWidth } = this.$refs.item[index];
      this.lineInfo = {
        width: clientWidth,
        left: offsetLeft
      };
    }
  },
  //设置初始高亮
  mounted() {
    const { offsetLeft, clientWidth } = this.$refs.item[0];
    this.lineInfo = {
      width: clientWidth,
      left: offsetLeft
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab-bar {
  display: flex;
  justify-content: space-evenly;
  position: relative;
}
.tab-item {
  font-family: "PingFangSC-Regular";
  font-size: 16px;
  color: #111111;
  text-align: center;
  line-height: 32px;
  padding: 10px;
}
.active {
  color: #f63;
}
.sub-line {
  content: " ";
  /* width: 52px; */
  height: 4px;
  position: absolute;
  top: 48px;
  /* left: 80px; */
  transition: all 0.2s ease-in-out;
  background-image: linear-gradient(90deg, #ff3f27 0%, #ffb76c 100%);
}
</style>
