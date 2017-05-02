<template>
  <div class="simpleInfo">
      <span class="infoTitle" v-if="showTitle">{{ finalTitle }}</span>
      <div class="gameInfo">
        <div class="userInfo">
          <img :src="setImgSrc" alt="">
          <!--<img src="../assets/tou_meiyan.jpg" alt="">-->
          <span>{{ post.userName}}</span>
        </div>
        <div class="importantInfo" >
          <p class="firstLevel" :class="dateClass" >{{ setWeekday }}</p>
          <p class="secondLevel" :class="dateClass">{{ setTime }} </p>
        </div>
        <div class="importantInfo">
          <p class="firstLevel" :class="locationClass"> {{ setLocation }} </p>
          <p class="secondLevel" :class="locationClass">{{ setRaceSystem }}</p>
        </div>
        <div class="extraInfo">
          <div class="buttons">
            <i class="material-icons add" @click="clicked">add</i>
            <i class="material-icons more">more_horiz</i>
          </div>
          <div class="remark">
            <span>{{post.remark}}</span>
          </div>
        </div>


      </div>
    </div>
</template>

<script>
  import touDoge from '../assets/tou_doge.jpg'
  import touAlaba from '../assets/tou_alaba.jpg'
  import touErha from '../assets/tou_erha.jpg'
  import touMeiyan from '../assets/tou_meiyan.jpg'
  import touXiaobei from '../assets/tou_xiaobei.jpg'
  export default {
    name: 'simpleInfo',
    props: {
      post: {
        default: {
          userName: 'htxf',
          userAvatar: 'tou_doge.jpg',
          date: '2017-04-28',
          time: '16:30',
          location: '太原电专阳光大操场',
          raceSystem: '五人制',
          remark: '人多分拨，开心就好',
          phone: '',
          weChat: 'guozhirong',
          qq: '573045535',
          title: '这周'
        }
      },
      index: 0
    },
    data () {
      return {
        finalTitle: '',
        dateClass: '',
        locationClass: ''
      }
    },
    computed: {
      // 不单是判断需不需要显示，还设置了finalTitle
      showTitle () {
        if (this.post.title === '这周0' || this.post.title === '下周0') {
          this.finalTitle = this.post.title.slice(0, 2)
          return true
        } else {
          return false
        }
      },
      setImgSrc () {
        switch (this.post.userAvatar) {
          case 'tou_doge.jpg':
            return touDoge
          case 'tou_alaba.jpg':
            return touAlaba
          case 'tou_erha.jpg':
            return touErha
          case 'tou_xiaobei.jpg':
            return touXiaobei
          case 'tou_meiyan.jpg':
            return touMeiyan
        }
      },
      setUserAvatar () {
        return '../assets/' + this.post.userAvatar
      },
      // 超出固定宽度时，用省略号代替，因为有渐变的CSS，使得用CSS处理过多字符串无效
      setWeekday () {
        var date = new Date(this.post.date)
        switch (date.getDay()) {
          case 0:
            return '周日'
          case 1:
            return '周一'
          case 2:
            return '周二'
          case 3:
            return '周三'
          case 4:
            return '周四'
          case 5:
            return '周五'
          case 6:
            return '周六'
        }
        return '周' + date.getDay()
      },
      setTime () {
        let hour = this.post.time.split(':')[0]
        let minute = this.post.time.split(':')[1]
        let allSeconds = hour * 3600 + minute * 60
        switch (true) {
          case allSeconds > 0 && allSeconds <= 43200:
            this.dateClass = 'morningTime'
            this.locationClass = 'morningPlace'
            return '早上' + this.post.time
          case allSeconds > 43200 && allSeconds <= 64800:
            this.dateClass = 'afternoonTime'
            this.locationClass = 'afternoonPlace'
            return '下午' + this.post.time
          case allSeconds > 64800 && allSeconds <= 86400:
            this.dateClass = 'nightTime'
            this.locationClass = 'nightPlace'
            return '晚上' + this.post.time
        }
      },
      setLocation () {
        if (this.post.location.length > 11) {
          return this.post.location.slice(0, 10) + '...'
        } else {
          return this.post.location
        }
      },
      setRaceSystem () {
        if (this.post.raceSystem) {
          return this.post.raceSystem
        } else {
          return '随便几人制'
        }
      }
    },
    methods: {
      clicked () {
        alert('cc')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*整个组件*/
  .simpleInfo{
    width: 960px;
    margin: 0 auto;
  }
  .infoTitle {
    font-family: "微软雅黑";
    font-size: 40px;
    font-weight: bold;
    color: #666666;
  }
  /*卡片容器*/
  .gameInfo {
    width: 960px;
    height: 150px;
    background-color: #ffffff;
    border: hidden;
    border-radius: 10px;
    box-shadow: 0px 5px 5px #e4e4e4;
    margin: 20px auto;
    display: flex;
    align-items: center;
  }
  /*用户信息：头像与名字*/
  .userInfo {
    height: 75px;
    margin-left: 30px;
    line-height: 75px;

  }
  .userInfo img {
    width: 75px;
    height: 75px;
    border: solid 2px #000000;
    border-radius: 50%;
    float: left;
  }
  .userInfo span {
    clear: both;
    font-family: "微软雅黑";
    font-size: 14px;
    display: inline-block;
    width: 60px;
    white-space:nowrap;
    word-break:keep-all;
    overflow:hidden;
    text-overflow:ellipsis;
    margin-left: 10px;
    margin-right: 50px;
  }
  /*时间：周几和具体时间*/
  .importantInfo {
    font-family: "微软雅黑";
    font-weight: bold;
    margin-right: 35px;
  }
  /*各种字的渐变，早上、下午、晚上及对应的时间与地点*/
  .morningTime{
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: -webkit-gradient(linear, left top, right bottom, from(#ff970a), color-stop(0.5, #fa9a7c) ,to(#ff4b00));
  }
  .afternoonTime{
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: -webkit-gradient(linear, left top, right bottom, from(#15ffe3), color-stop(0.5, #71ecbc) ,to(#00e88d));
  }
  .nightTime {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: -webkit-gradient(linear, left top, right bottom, from(#ff0ace), color-stop(0.5, #c560e0) ,to(#9500ff));
  }
  .morningPlace{
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: -webkit-gradient(linear, left top, right bottom, from(#e5c809), color-stop(0.5, #e9be66) ,to(#ffac00));
  }
  .afternoonPlace {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: -webkit-gradient(linear, left top, right bottom, from(#02e6e8), color-stop(0.5, #86def7) ,to(#12c4ff));
  }
  .nightPlace {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: -webkit-gradient(linear, left top, right bottom, from(#9f09e8), color-stop(0.5, #a77cf4) ,to(#6e0fff));
  }
  /*两种重要程度的信息。周几、地点第一级，时间、赛制第二级*/
  .firstLevel {
    font-size: 30px;
    margin-bottom: 0px;
    max-width: 340px;
    display: inline-block;
    /*这种情况下，字体渐变色，设置了透明属性，省略号不能显示了*/
    white-space:nowrap;
    word-break:keep-all;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  .secondLevel {
    font-size: 24px;
    margin-top: 0px;
  }
  /*额外信息*/
  .extraInfo {
    /*占满container剩余空间*/
    flex: 1;
    margin-right: 30px;
  }
  .buttons {
    font-size: 36px;
    float: right;
  }
  .material-icons.add {
    color: #11eb9c;
    cursor: pointer;

  }
  .material-icons.more {
    color: #666666;
    cursor: pointer;

  }
  .remark {
    clear: both;
    float: right;
    font-family: "汉仪平安行简";
    margin-top: 20px;
    font-size: 20px;
    color: #666666;
    font-weight: bold;
    max-width: 200px;
    /*超出后省略号显示*/
    white-space:nowrap;
    word-break:keep-all;
    overflow:hidden;
    text-overflow:ellipsis;
  }

</style>
