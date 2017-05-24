<template>
  <div @sroll="handleScroll">
    <header1 v-if="isHeader1"></header1>
    <header2 v-else></header2>
    <div class="launchGameButton" v-show="!isLogin" >
      登录后可发起组织
    </div>
    <div class="launchGameButton" v-show="isLogin">
      <a href="#/launchGame">发起一个组织</a>
    </div>
    <simple-info  v-for="(post, index) in sortedAddTitledPosts"
                  v-bind:post="post" v-bind:index="index" ></simple-info>
  </div>
</template>

<script>
  import Header1 from '../components/header1.vue'
  import Header2 from '../components/header2.vue'
  import SimpleInfo from '../components/simpleInfo.vue'
  import Util from '../util/util'
  export default {
    name: 'index',
    data () {
      return {
//        posts: [
//          {
//            userName: 'htxf',
//            userAvatar: 'tou_doge.jpg',
//            date: '2017-05-25',
//            time: '20:30',
//            location: '大槐树文化中心',
//            raceSystem: '',
//            remark: '',
//            phone: '',
//            weChat: 'guozhirong',
//            qq: '573045535'
//          },
//          {
//            userName: 'htxf',
//            userAvatar: 'tou_doge.jpg',
//            date: '2017-05-24',
//            time: '20:30',
//            location: '大槐树文化中心',
//            raceSystem: '',
//            remark: '早睡朝气，锻炼身体，噢耶',
//            phone: '',
//            weChat: 'guozhirong',
//            qq: '573045535'
//          },
//          {
//            userName: '电专第一前锋',
//            userAvatar: 'tou_xiaobei.jpg',
//            date: '2017-05-29',
//            time: '10:00',
//            location: '大槐树文化中心',
//            raceSystem: '三人制',
//            remark: '人不踢球枉少年',
//            phone: '',
//            weChat: 'guozhirong',
//            qq: '573045535'
//          },
//          {
//            userName: '哈哈',
//            userAvatar: 'tou_erha.jpg',
//            date: '2017-05-29',
//            time: '17:00',
//            location: '洪洞县武高场子',
//            raceSystem: '',
//            remark: '嘿嘿，厉害啦。',
//            phone: '',
//            weChat: 'guozhirong',
//            qq: '573045535'
//          },
//          {
//            userName: 'htxf',
//            userAvatar: 'tou_doge.jpg',
//            date: '2017-05-30',
//            time: '16:30',
//            location: '太原电专阳光大操场',
//            raceSystem: '五人制',
//            remark: '人多分拨，开心就好',
//            phone: '',
//            weChat: 'guozhirong',
//            qq: '573045535'
//          },
//          {
//            userName: '阿拉巴',
//            userAvatar: 'tou_alaba.jpg',
//            date: '2017-05-25',
//            time: '16:30',
//            location: '太原电专阳光大操场西边操场不拉不拉不拉不拉',
//            raceSystem: '五人制',
//            remark: '诶哟，见鬼了。',
//            phone: '',
//            weChat: 'guozhirong',
//            qq: '573045535'
//          },
//          {
//            userName: '盛世美颜',
//            userAvatar: 'tou_meiyan.jpg',
//            date: '2017-05-26',
//            time: '06:30',
//            location: '太原南站',
//            raceSystem: '二人制',
//            remark: '小亲亲，波波波。',
//            phone: '',
//            weChat: 'guozhirong',
//            qq: '573045535'
//          }
//        ],
        isHeader1: true,
        isLogin: true
      }
    },
    computed: {
      sortedAddTitledPosts () {
        // 对posts中的posts根据约球时间，即根据date和time排序；
        // 因为从服务器查询到的posts应该是按照发帖顺序排序的。
        this.posts.sort(Util.createComparisonFunction('date', 'time'))

        // 计数这周的个数
        var i = 0
        // 计数下周的个数
        var j = 0
        // 还要对posts中的每个post加上title属性
        this.posts.forEach(function (post) {
          if (Util.isSameWeek(post['date'])) {
            post['title'] = '这周' + i.toString()
            i++
          } else {
            post['title'] = '下周' + j.toString()
            j++
          }
        })

        return this.posts
      },
      counter () {
        return this.$store.state.counter
      },
      posts () {
        return this.$store.state.posts
      }
    },
    components: {
      'simple-info': SimpleInfo,
      'header1': Header1,
      'header2': Header2
    },
    methods: {
      handleScroll () {
        if (window.scrollY > 100) {
//          alert('aa')
          this.isHeader1 = false
        }
        console.log(window.scrollY)
      },
      showStore () {
        alert('aa')
        alert(this.counter)
        this.$store.commit('increaseCounter')
        alert(this.counter)
        console.log(this.$store.state.posts)
      }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style>
  .launchGameButton {
    font-family: "Microsoft YaHei UI";
    font-size: 30px;
    text-align: center;
    background-color: #14a47f;
    color: #ffffff;
    padding: 5px;
    width: 250px;
    margin: 10px auto;
  }
  .launchGameButton:hover {
    cursor: pointer;
  }
  .launchGameButton a {
    text-decoration: none;
  }
  .launchGameButton a:link {
    color:#ffffff;/* 未被访问的链接 */
  }
  .launchGameButton a:visited {
    color:#ffffff;/* 未被访问的链接 */
  }
  .launchGameButton a:hover {
    color:#ffffff;/* 未被访问的链接 */
  }
  .launchGameButton a:active {
    color:#ffffff;/* 未被访问的链接 */
  }
</style>
