<template>
  <div class="raceSystemComponent">
    <div class="title">
      赛制
    </div>
    <div class="raceSystemBase" v-on:click="select" v-bind:class="selectedClass">{{ displayText }}</div>
    <ul>
      <li class="raceSystemBase raceSystem"
          v-for="(raceSystem, index) in raceSystems"
          v-if="isClicked"
          v-on:click="confirm(index)">
        {{ raceSystem }}
      </li>
    </ul>
    <!--<div class="raceSystemBase raceSystem"-->
         <!--v-for="(raceSystem, index) in raceSystems"-->
         <!--v-if="isClicked"-->
         <!--v-on:click="confirm(index)">-->
      <!--{{ raceSystem }}-->
    <!--</div>-->
  </div>
</template>

<script>
  export default {
    name: 'input_race_system',
    data () {
      return {
        displayText: '请选择一个赛制',
        isClicked: false,
        selectedClass: ''
      }
    },
    computed: {
      raceSystems () {
        var raceSystems = []
        for (let i = 3; i < 12; i++) {
          let str = i.toString() + '人制'
          raceSystems.push(str)
        }
        raceSystems.push('随便几人制')
        return raceSystems
      }
    },
    methods: {
      select () {
        this.isClicked = true
        this.displayText = '请选择一个赛制'
      },
      confirm (index) {
        this.displayText = this.raceSystems[index]
        this.selectedClass = 'raceSystem'
        this.isClicked = false
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
  .raceSystemComponent {
    /*float: right;*/
    position: relative;
  }
  .title {
    font-family: "Microsoft YaHei UI";
    font-size: 24px;
    margin-bottom: 20px;
  }
  ul {
    position: absolute;
    top: 110px;
  }
  .raceSystemBase {
    font-family: "Microsoft YaHei UI";
    font-size: 24px;
    padding: 10px;
    background-color: #f6f6f6;
    margin-bottom: 5px;
    border-left: solid #ff0000 6px;
    cursor: pointer;
    float: left;
    clear: both;
    width: 245px;
  }
  .raceSystemBase:hover {
    cursor: pointer;
    background-color: #ffa6a6;
  }
  .raceSystem {
    border-left: solid #76e476 6px;
  }
  .raceSystem:hover {
    background-color: #d2f6d2;
  }

</style>
