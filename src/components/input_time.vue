<template>
  <div class="timeComponent">
    <div class="title">
      时间
    </div>
    <div class="timeBase" v-on:click="select" v-bind:class="selectedClass">{{ displayText }}</div>
    <div class="secondChoose" v-if="isClicked">
      <span class="hourSpan" v-on:click="selectHour">{{ selectedHour }}</span>
      <span class="minuteSpan" v-on:click="selectMinute">{{ selectedMinute }}</span>
      <span v-on:click="confirmTime"> 确定 </span>
    </div>
    <ul>
      <li
          v-for="(hour, index) in hours"
          v-if="isHourClicked"
          v-on:click="confirmHour(index)">
        {{ hour }}
      </li>
    </ul>
    <ul class="minuteUl">
      <li
          v-for="(minute, index) in minutes"
          v-if="isMinuteClicked"
          v-on:click="confirmMinute(index)">
        {{ minute }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'input_time',
    data () {
      return {
        isClicked: false,
        isHourClicked: false,
        isMinuteClicked: false,
        displayText: '请选择一个时间',
        selectedHour: '00',
        selectedMinute: '00',
        minutes: ['00', '15', '30', '45'],
        selectedClass: ''
      }
    },
    methods: {
      select () {
        this.isClicked = true
        this.isHourClicked = true
        this.isMinuteClicked = true
        this.$emit('inputListClick', 1)
      },
      selectHour () {
        this.isClicked = true
        this.isHourClicked = true
        this.$emit('inputListClick', 1)
      },
      selectMinute () {
        this.isClicked = true
        this.isMinuteClicked = true
        this.$emit('inputListClick', 1)
      },
      confirmHour (index) {
        this.selectedHour = this.hours[index]
        this.isHourClicked = false
      },
      confirmMinute (index) {
        this.selectedMinute = this.minutes[index]
        this.isMinuteClicked = false
      },
      confirmTime () {
        this.displayText = this.selectedHour + ' : ' + this.selectedMinute
        this.isClicked = false
        this.isHourClicked = false
        this.isMinuteClicked = false
        this.selectedClass = 'selected'
        this.$emit('inputItemClick', this.displayText)
      }
    },
    computed: {
      hours () {
        var hours = []
        for (let i = 6; i < 23; i++) {
          if (i.toString().length < 2) {
            i = '0' + i.toString()
          }
          hours.push(i)
        }
        return hours
      }
    }
  }
</script>

<style scoped>
  .timeComponent {
    font-family: "Microsoft YaHei UI";
    font-size: 24px;
    position: relative;
  }
  .title {
    margin-bottom: 20px;
    position: relative;
  }
  .timeBase {
    padding: 10px;
    background-color: #f6f6f6;
    margin-bottom: 5px;
    border-left: solid #ff0000 6px;
    width: 180px;
    float: left;
    clear: both;
  }
  .timeBase:hover {
    cursor: pointer;
    background-color: #ffa6a6;
  }
  .secondChoose {
    position: absolute;
    top: 104px;
    z-index: 999;
  }
  span {
    display: inline-block;
    padding: 10px;
    background-color: #f6f6f6;
  }
  span:hover {
    background-color: #ffa6a6;
    cursor: pointer;
  }
  ul {
    list-style-type: none;
    margin: 0px;
    padding: 0px;
    float: left;
    position: absolute;
    top: 160px;
    z-index: 999;
  }
  li {
    padding: 10px;
    background-color: #f6f6f6;
    float: left;
    clear: both;
  }
  li:hover {
    background-color: #76e476;
    cursor: pointer;
  }
  .minuteUl {
    left: 52px;
  }
  .selected {
    border-left: solid #76e476 6px;
  }
  .selected:hover {
    background-color: #d2f6d2;
  }

</style>
