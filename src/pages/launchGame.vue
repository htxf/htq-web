<template>
  <div>
    <header2 v-bind:class="[isClicked ? blur : '']"></header2>
    <div v-bind:class="[isClicked ? blur : '']" class="launchGameTitle">(⊙_⊙) 发起一个组织 (⊙_⊙)</div>
    <div class="container">
      <div class="firstColumn">
        <!--<input-date></input-date>-->
        <input-list-click
          v-bind:class="[isInputListBlur[0] ? blur : '']"
          v-bind="{textBaseWidth: dateTextBaseWidth,
                   textBaseMarginBottom: dateTextBaseMarginBottom,
                   defaultDisplayText: dateDisplayText,
                   title: dateTitle,
                   lists: dates,
                   classes: datesClasses
                  }"
          v-on:inputListClick="inputListClick"
          v-on:inputItemClick="inputItemClick">
        </input-list-click>
        <input-time
          v-bind:class="[isInputListBlur[1] ? blur : '']"
          v-on:inputListClick="inputListClick"
          v-on:inputItemClick="inputItemClick">
        </input-time>
        <!--<input-list-click-->
          <!--v-bind:class="[isInputListBlur[1] ? blur : '']"-->
          <!--v-bind="{textBaseWidth: timeTextBaseWidth,-->
                   <!--textBaseMarginBottom: timeTextBaseMarginBottom,-->
                   <!--ulTop: timeUlTop,-->
                   <!--defaultDisplayText: timeDisplayText,-->
                   <!--title: timeTitle,-->
                   <!--lists: times,-->
                   <!--classes: timeClasses-->
                  <!--}">-->
        <!--</input-list-click>-->
        <!--<input-race-system></input-race-system>-->
        <input-list-click
          v-bind:class="[isInputListBlur[2] ? blur : '']"
          v-bind="{textBaseWidth: raceSystemTextBaseWidth,
                   textBaseMarginBottom: raceSystemTextBaseMarginBottom,
                   borderColor: raceSystemBorderColor,
                   defaultDisplayText: raceSystemDisplayText,
                   textBaseClass: raceSystemTextBaseClass,
                   title: raceSystemTitle,
                   lists: raceSystems,
                   classes: raceSystemClasses
                  }"
          v-on:inputListClick="inputListClick"
          v-on:inputItemClick="inputItemClick">
        </input-list-click>
      </div>
      <div class="belowColumn"
           v-bind:class="[isClicked ? blur : '']">
        <input-location v-model="com1BackLocation"></input-location>
      </div>
      <div class="belowColumn"
           v-bind:class="[isClicked ? blur : '']">
        <input-contact-info v-model="com1BackContact"></input-contact-info>
      </div>
      <div class="belowColumn"
           v-bind:class="[isClicked ? blur : '']">
        <input-remark-info v-model="com1BackRemark"></input-remark-info>
      </div>
      <div class="belowColumn"
           v-bind:class="[isClicked ? blur : '']">
        <div style="font-family: 'Microsoft YaHei UI'; font-size: 24px; margin-bottom: 20px">
          注意事项
        </div>
        <div style="font-family: 'Microsoft YaHei UI'; font-size: 18px; margin-bottom: 5px; color: #aaaaaa">
          日期、时间、地点必填哦。
        </div>
        <div style="font-family: 'Microsoft YaHei UI'; font-size: 18px; color: #aaaaaa">
          留下联系方式更好的交流一下，至少填一个嘛。
        </div>
      </div>
    </div>
    <div class="launchGameButton" v-on:click="launchGame">
      发起一个组织
    </div>
  </div>
</template>

<script>
  import header2 from '../components/header2.vue'
  import inputDate from '../components/input_date.vue'
  import inputTime from '../components/input_time.vue'
  import inputRaceSystem from '../components/input_race_system.vue'
  import inputLocation from '../components/input_location.vue'
  import inputListClick from '../components/input_list_click.vue'
  import inputContactInfo from '../components/input_contact_info.vue'
  import inputRemarkInfo from '../components/input_remark_info.vue'
  export default {
    name: 'launchGame',
    data () {
      return {
        dateTitle: '日期',
        dateTextBaseWidth: '380',
        dateTextBaseMarginBottom: '10',
        dateDisplayText: '请选择一个日期',
        timeTitle: '时间',
        timeTextBaseWidth: '',
        timeTextBaseMarginBottom: '0',
        timeUlTop: '-200',
        timeDisplayText: '请选择一个时间',
        raceSystemTitle: '赛制',
        raceSystemTextBaseWidth: '245',
        raceSystemTextBaseMarginBottom: '5',
        raceSystemBorderColor: '#ffa500',
        raceSystemTextBaseClass: 'raceSystemTextBase',
        raceSystemDisplayText: '请选择一个赛制',
        datesClasses: ['one', 'two', 'three', 'four', 'five', 'six', 'seven'],
        raceSystemClasses: [],
        timeClasses: [],
        isClicked: false,
        isInputListBlur: [false, false, false],
        blur: 'blur',
        post: {
          userName: 'htxf',
          userAvatar: 'tou_doge.jpg',
          date: '',
          time: '',
          location: '',
          raceSystem: '',
          remark: '',
          phone: '',
          weChat: '',
          qq: ''
        },
        com1BackLocation: '',
        com1BackContact: [],
        com1BackRemark: ''
      }
    },
    computed: {
      dates () {
        var dates = []
        let one = new Date()
        for (let i = 0; i < 7; i++) {
          let temp = new Date(one.getTime() + i * 24 * 60 * 60 * 1000)
          let str = '周'
          switch (true) {
            case temp.getDay() === 0:
              str = str + '日'
              break
            case temp.getDay() === 1:
              str = str + '一'
              break
            case temp.getDay() === 2:
              str = str + '二'
              break
            case temp.getDay() === 3:
              str = str + '三'
              break
            case temp.getDay() === 4:
              str = str + '四'
              break
            case temp.getDay() === 5:
              str = str + '五'
              break
            case temp.getDay() === 6:
              str = str + '六'
              break
          }
          str = str + '---' + temp.toLocaleDateString() + '---'
          switch (true) {
            case i === 0:
              str = str + '今天'
              break
            case i === 1:
              str = str + '明天'
              break
            case i === 2:
              str = str + '后天'
              break
            case i === 3:
              str = str + '大后天'
              break
            case i === 4:
              str = str + '大大后天'
              break
            case i === 5:
              str = str + '大大大后天'
              break
            case i === 6:
              str = str + '大大大大后天'
              break
          }
          dates.push(str)
        }
        return dates
      },
      raceSystems () {
        var raceSystems = []
        for (let i = 3; i < 12; i++) {
          let str = ''
          switch (true) {
            case i === 3:
              str = '三'
              break
            case i === 4:
              str = '四'
              break
            case i === 5:
              str = '五'
              break
            case i === 6:
              str = '六'
              break
            case i === 7:
              str = '七'
              break
            case i === 8:
              str = '八'
              break
            case i === 9:
              str = '九'
              break
            case i === 10:
              str = '十'
              break
            case i === 11:
              str = '十一'
              break
          }
          str = str + '人制'
          raceSystems.push(str)
          this.raceSystemClasses.push('selected')
        }
        raceSystems.push('随便几人制')
        this.raceSystemClasses.push('selected')
        return raceSystems
      },
      posts () {
        return this.$store.state.posts
      }
    },
    components: {
      'header2': header2,
      'input-date': inputDate,
      'input-time': inputTime,
      'input-race-system': inputRaceSystem,
      'input-location': inputLocation,
      'input-list-click': inputListClick,
      'input-contact-info': inputContactInfo,
      'input-remark-info': inputRemarkInfo
    },
    methods: {
      inputListClick (index) {
        this.isClicked = true
        for (let i = 0; i < this.isInputListBlur.length; i++) {
          if (i === index) {
            this.isInputListBlur[i] = false
          } else {
            this.isInputListBlur[i] = true
          }
        }
      },
      inputItemClick (text) {
        this.isClicked = false
        this.raceSystemBorderColor = '#76e476'
        for (let i = 0; i < this.isInputListBlur.length; i++) {
          this.isInputListBlur[i] = false
        }
        if (text.length === 7) {
          this.post['time'] = text.replace(/\s+/g, '')
        } else if (text.length !== 7 && text.length < 19) {
          this.post['raceSystem'] = text
        } else {
          this.post['date'] = text.split('---')[1]
        }
      },
      launchGame () {
        this.post['location'] = this.com1BackLocation
        this.post['phone'] = this.com1BackContact[0]
        this.post['weChat'] = this.com1BackContact[1]
        this.post['qq'] = this.com1BackContact[2]
        this.post['remark'] = this.com1BackRemark
        console.log(this.post)
        var pattern = /(^(([0]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$)|(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/
        if (this.post['phone'] !== undefined && this.post['phone'].length !== 0) {
          if (!pattern.test(this.post['phone'])) {
            alert('手机号码不对。。')
          }
        } else {
          if (this.post['date'].length === 0) {
            alert('选下日期好不啦。。')
          } else {
            if (this.post['time'].length === 0) {
              alert('选下时间好不啦。。')
            } else {
              if (this.post['location'].length === 0) {
                alert('填下地址好不啦。。')
              } else {
                this.$store.commit('pushNewPost', this.post)
                this.$router.push('/')
              }
            }
          }
        }
      }
    }
  }
</script>

<style scoped>
  .launchGameTitle {
    font-family: "Microsoft YaHei UI";
    font-size: 48px;
    text-align: center;
    margin-bottom: 50px;
  }
  .container {
    width: 960px;
    margin: 50px auto 50px auto;
    background-color: #ffffff;
    border: hidden;
    border-radius: 10px;
    box-shadow: 0px 5px 5px #e4e4e4;
    padding: 30px;
  }
  .firstColumn {
    display: flex;
    justify-content: space-between;
    z-index: 999;
  }
  .belowColumn {
    margin-top: 20px;
  }
  .blur {
    -webkit-filter: blur(8px);
    -moz-filter: blur(8px);
    -o-filter: blur(8px);
    -ms-filter: blur(8px);
    filter: blur(8px);
  }
  .launchGameButton {
    margin: 50px auto;
  }

</style>
