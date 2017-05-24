<template>
  <div class="dateComponent">
    <div class="title">
      日期
    </div>
    <div class="dateBase" v-on:click="select" v-bind:class="selectedClass">{{ displayText }}</div>
    <ul>
      <li class="dateBase date"
          v-for="(date, index) in dates"
          v-if="isClicked"
          v-bind:class="classes[index]"
          v-on:click="confirm(index)">
        {{ date }}
      </li>
    </ul>
    <!--<div class="dateBase date"-->
         <!--v-for="(date, index) in dates"-->
         <!--v-if="isClicked"-->
         <!--v-bind:class="classes[index]"-->
         <!--v-on:click="confirm(index)">-->
      <!--{{ date }}-->
    <!--</div>-->
  </div>
</template>

<script>
  export default {
    name: 'input_date',
    data () {
      return {
        displayText: '请选择一个日期',
        isClicked: false,
        classes: ['one', 'two', 'three', 'four', 'five', 'six', 'seven'],
        selectedClass: ''
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
          console.log(str)
          dates.push(str)
        }
        return dates
      }
    },
    methods: {
      select () {
        this.isClicked = true
        this.displayText = '请选择一个日期'
      },
      confirm (index) {
        this.isClicked = false
        this.displayText = this.dates[index]
        this.selectedClass = this.classes[index]
      }
    }
  }
</script>

<style scoped>
  ul {
    list-style-type: none;
    margin: 0px;
    padding: 0px;
  }
  .dateComponent {
    /*float: left;*/
    position: relative;
  }
  .title {
    font-family: "Microsoft YaHei UI";
    font-size: 24px;
    margin-bottom: 20px;
    position: relative;
  }
  ul {
    position: absolute;
    top: 110px;
  }
  .dateBase {
    font-family: "Microsoft YaHei UI";
    font-size: 24px;
    padding: 10px;
    background-color: #f6f6f6;
    margin-bottom: 10px;
    border-left: solid #ff0000 6px;
    float: left;
    clear: both;
    width: 380px;
  }
  .dateBase:hover {
    cursor: pointer;
    background-color: #ffa6a6;
  }
  .one {
    border-left: solid #ff0000 6px;
  }
  .one:hover {
    background-color: #ffa6a6;
  }
  .two {
    border-left: solid #ffa500 6px;
  }
  .two:hover {
    background-color: #ffdfa8;
  }
  .three {
    border-left: solid #ffff00 6px;
  }
  .three:hover {
    background-color: #f0f4a2;
  }
  .four {
    border-left: solid #00ff00 6px;
  }
  .four:hover {
    background-color: #94f1a1;
  }
  .five {
    border-left: solid #00ffff 6px;
  }
  .five:hover {
    background-color: #95f2f4;
  }
  .six {
    border-left: solid #0000ff 6px;
  }
  .six:hover {
    background-color: #969df5;
  }
  .seven {
    border-left: solid #a800ff 6px;
  }
  .seven:hover {
    background-color: #cd9df4;
  }
</style>
