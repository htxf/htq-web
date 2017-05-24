import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    counter: 0,
    posts: [
      {
        userName: 'htxf',
        userAvatar: 'tou_doge.jpg',
        date: '2017-05-25',
        time: '20:30',
        location: '大槐树文化中心',
        raceSystem: '',
        remark: '',
        phone: '',
        weChat: 'guozhirong',
        qq: '573045535'
      },
      {
        userName: 'htxf',
        userAvatar: 'tou_doge.jpg',
        date: '2017-05-24',
        time: '20:30',
        location: '大槐树文化中心',
        raceSystem: '',
        remark: '早睡朝气，锻炼身体，噢耶',
        phone: '',
        weChat: 'guozhirong',
        qq: '573045535'
      },
      {
        userName: '电专第一前锋',
        userAvatar: 'tou_xiaobei.jpg',
        date: '2017-05-29',
        time: '10:00',
        location: '大槐树文化中心',
        raceSystem: '三人制',
        remark: '人不踢球枉少年',
        phone: '',
        weChat: 'guozhirong',
        qq: '573045535'
      },
      {
        userName: '哈哈',
        userAvatar: 'tou_erha.jpg',
        date: '2017-05-29',
        time: '17:00',
        location: '洪洞县武高场子',
        raceSystem: '',
        remark: '嘿嘿，厉害啦。',
        phone: '',
        weChat: 'guozhirong',
        qq: '573045535'
      },
      {
        userName: 'htxf',
        userAvatar: 'tou_doge.jpg',
        date: '2017-05-30',
        time: '16:30',
        location: '太原电专阳光大操场',
        raceSystem: '五人制',
        remark: '人多分拨，开心就好',
        phone: '',
        weChat: 'guozhirong',
        qq: '573045535'
      },
      {
        userName: '阿拉巴',
        userAvatar: 'tou_alaba.jpg',
        date: '2017-05-25',
        time: '16:30',
        location: '太原电专阳光大操场西边操场不拉不拉不拉不拉',
        raceSystem: '五人制',
        remark: '诶哟，见鬼了。',
        phone: '',
        weChat: 'guozhirong',
        qq: '573045535'
      },
      {
        userName: '盛世美颜',
        userAvatar: 'tou_meiyan.jpg',
        date: '2017-05-26',
        time: '06:30',
        location: '太原南站',
        raceSystem: '二人制',
        remark: '小亲亲，波波波。',
        phone: '',
        weChat: 'guozhirong',
        qq: '573045535'
      }
    ]
  },
  mutations: {
    increaseCounter (state) {
      state.counter++
    },
    pushNewPost (state, post) {
      state.posts.push(post)
    }
  }
})

export default store
