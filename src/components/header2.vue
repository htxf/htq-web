<template>
  <div>
    <div class="head">
      <div class="header">
        <div class="logo">
          <img src="../assets/logo.png" alt="">
          <span>haiTiQiu</span>
        </div>
        <div class="button">
          <span>登录</span>
          <span>注册</span>
        </div>
        <ul>
          <li>晴 10°/24°</li>
          <li>2017.04.26 星期二</li>
          <li>临汾市 洪洞县</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'header2',
    data () {
      return {

      }
    }
  }
</script>

<style scoped>
  .head {
    height: 96px;
    background-color: #14a47f;
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
  .button {
    float: right;
    line-height: 96px;
    margin-right: 30px;
    color: #ffffff;
  }
  .button span {
    background: #d70379;
    padding: 2px 15px;
    margin-left: 30px;
  }
  ul {
    margin: 0px;
  }
  ul li {
    float: right;
    list-style-type: none;
    display: inline;
    color: #ffffff;
    margin-left: 30px;
    line-height: 96px;
  }
</style>
