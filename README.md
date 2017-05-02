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
<img src="..\readme_image\htq-web-index1.png" width="100%" height="100%">
<img src="..\readme_image\htq-web-index2.png" width="100%" height="100%">
