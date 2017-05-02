<template>
  <div>
    <div class="head">
      <div class="header">
        <div class="logo">
          <img src="../assets/logo.png" alt="">
          <span>haiTiQiu</span>
        </div>
        <div class="rightInfo">
          <div class="button">
            <span @click="clicked">登录</span>
            <span>注册</span>
          </div>
          <div class="location">
            <span>临汾市 洪洞县</span>
          </div>
          <div class="date">
            <span>2017.04.26 星期二</span>
          </div>
          <div class="weather">
            <span>晴 10°/24°</span>
          </div>
        </div>
      </div>
      <span class="slogan"> 走，踢球去！</span>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'header1',
    data () {
      return {

      }
    },
    methods: {
      clicked () {
        alert('nn')
      }
    }
  }
</script>

<style scoped>
  .head {
    height: 800px;
    background: url('../assets/banner.png') no-repeat scroll;
    background-size: cover;
    margin-bottom: 20px;
    text-align: center;
  }
  .logo {
    float: left;
    margin-top: 30px;
    margin-left: 30px;
    height: 40px;
  }
  .logo span {
    float: right;
    margin-left: 20px;
    font-family: Consolas;
    font-size: 24px;
    color: #ffffff;
    height: 40px;
    line-height: 40px;
  }
  .slogan  {
    font-family: '汉仪寒石体简';
    color: #ffffff;
    font-size: 160px;
    font-style: italic;
    font-weight: bold;
    line-height: 700px;
    text-shadow: 0px 5px 3px #056f50;
  }
  .rightInfo {
    float: right;
    color: #ffffff;
    font-family: '微软雅黑';
    font-size: 18px;
    margin-top: 30px;
    margin-right: 30px;
    text-align: right;
  }
  .rightInfo .button {
    margin-bottom: 30px;
  }
  .rightInfo .button span {
    background: #d70379;
    padding: 2px 15px;
    margin-left: 30px;
  }
  .location, .date, .weather {
    margin-bottom: 18px;
  }
</style>
