# 项目名称：仿大众点评vip用户页面和权益详情页

## 该项目使用vue框架开发，主页面带switch开关，tab分类和券列表。点击券可以进入到券详情页面，详情页包含图片、商户和点评模块。

### vue单页应用，由 vue-cli进行项目构建，vue-router进行页面跳转。
1、引入vue、vue-router，然后配置路由  
2、注册组件  
3、使用import命令引入组件，export default命令输出组件   
#### switch开关
1、设置按钮的初始状态为关  
2、点击按钮，状态为开，取与初始状态的值相反的结果即可  
3、使用三目运算切换按钮关和开的两种状态
#### tab分类
1、使用data()放置数据，把要用到的tab项放到data()中，并且设置对应序号  
2、使用v-for遍历data()中的tab项，获取对应元素和索引，使用$refs获取DOM节点  
3、设置高亮初始状态，即默认选中状态，把项目序号赋值给选中状态，就可以实现tab的切换
### 商户、星级等功能相似的组件进行复用。

### CSS3部分
1、使用flex进行复杂页面布局  
2、使用background-image:linear-gradient()实现渐变色背景，使用border-radius实现圆角、使用text-overflow:ellipsis文本超出部分省略号裁剪的特殊效果。

### 效果图 
1、用户页面  

![详情页](https://github.com/rrbetsy/vip-right-web/blob/master/images/vip-right-index.jpg?raw=true)

2、tab页面和商户列表   

![详情页](https://github.com/rrbetsy/vip-right-web/blob/master/images/vip-right-tab.jpg?raw=true)

3、详情页  

![详情页](https://github.com/rrbetsy/vip-right-web/blob/master/images/vip-right-detail.jpg?raw=true)

4、用户评论  

![评论](https://github.com/rrbetsy/vip-right-web/blob/master/images/vip-right-review.jpg?raw=true)