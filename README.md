# htq-web

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

以上是安装vue.js时带的readme。

这是一个web版的还踢球，之前做了一个Android版的。可以提供给人们一个平台，发布约球信息。其实就相当于是一个简单的论坛。计划的主要功能有：发布约球信息，浏览一周内的**本地区**的约球信息，查看约球信息的详情（具体信息、约球当天的天气、约球地点），查看本地区的球场信息，查看本地区各项业余比赛的信息。

目前完成了浏览一周内的约球信息。按照本周和下周分组，并按照约球时间（而不是发帖时间）排序，将具体的时间如2017-04-27以周三来显示，早晨、下午、晚上三个不同的时段用三个不同的颜色区分。截图如下所示：
![还踢球web版首屏1](https://github.com/htxf/htq-web/blob/master/readme_image/htq-web-index1.png)
![还踢球web版首屏2](https://github.com/htxf/htq-web/blob/master/readme_image/htq-web-index2.png)

完成了发起组织功能。用到了vue.js中的component组件、router路由、状态管理器vuex。

所有的帖子列表posts本来在index.vue中，现在写在了状态管理器中的store中的state下的posts。在store中的mutations下写了一个方法pushPost，用来向posts中添加新的帖子。在launchGame页面下，经检查没有错误后就可以                使用this.$store.commit('pushNewPost', this.post)将新的this.post添加到全局唯一的posts中。

发起组织功能用到了组件和组件的嵌套，用props从父组件传递数据到子组件；在子组件用this.$emit('xx', arguments)同时在父组件用v-on:xx='doSome'方法从子组件传数据到父组件；input标签有点特殊(其实是vue.js帮忙写好了上边的'xx'-->'input')，子组件中用input标签的话，需要v-bind:value="value" v-on:input="returnValue($event.target.value)"，然后在returnValue (value) {} 方法中this.$emit('input', value)，之后在父组件中用v-model="com2BackMsg"，comBackMsg就保持了在子组件输入的东西了，此时父组件还有父组件，在父组件中再写v-on:input="returnValue(returnedValue)"，在returnValue (returnedValue) {}方法中写this.$emit('input', retrunedValue)，在父组件的父组件用v-model="com1BackMsg"就可以保持子组件输入的东西了。

日期、时间、赛制用的同一个组件，但样式还不尽相同。地址、手机、微信、QQ、备注用的同一个组件，样式也不同。必填的信息用红色标注，不是必填的用淡黄色标注。

router路由的话得先在新建Router进行配置，之后用a标签的href属性可以跳转，也可以用this.$router.push('/')方法跳转。

截图如下所示：
![还踢球web版发起组织1](https://github.com/htxf/htq-web/blob/master/readme_image/htq-web-launchGame1.png)
![还踢球web版发起组织2](https://github.com/htxf/htq-web/blob/master/readme_image/htq-web-launchGame2.png)