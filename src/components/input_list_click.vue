<template>
  <div class="inputContainer">
    <div class="title">{{ title }}</div>
    <div class="textBase"
         v-bind:style="{width: textBaseWidth + 'px', marginBottom: textBaseMarginBottom + 'px'}"
         v-on:click="select"
         v-bind:class="[isSelected ? selectedClass : textBaseClass]">
      {{ displayText }}
    </div>
    <ul v-bind:style="{top: ulTop + 'px'}">
      <li class="textBase listItem"
          v-bind:style="{width: textBaseWidth + 'px', marginBottom: textBaseMarginBottom + 'px'}"
          v-for="(item, index) in lists"
          v-if="isClicked"
          v-bind:class="classes[index]"
          v-on:click="confirm(index)">
      {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'input_list_click',
    props: {
      title: '',
      defaultDisplayText: '',
      lists: {},
      classes: {},
      textBaseWidth: '',
      textBaseMarginBottom: '',
      borderColor: '',
      ulTop: '',
      textBaseClass: ''
    },
    created: function () {
      this.displayText = this.defaultDisplayText
    },
    data () {
      return {
        displayText: '',
        isClicked: false,
        isSelected: false,
        selectedClass: ''
      }
    },
    methods: {
      select () {
        this.isClicked = true
        this.displayText = this.defaultDisplayText
        switch (true) {
          case this.title === '日期':
            this.$emit('inputListClick', 0)
            break
          case this.title === '赛制':
            this.$emit('inputListClick', 2)
        }
      },
      confirm (index) {
        this.isClicked = false
        this.isSelected = true
        this.displayText = this.lists[index]
        this.selectedClass = 'selected'
        this.$emit('inputItemClick', this.displayText)
      }
    }
  }
</script>

<style scoped>

  .inputContainer {
    position: relative;
  }
  .title {
    font-family: "Microsoft YaHei UI";
    font-size: 24px;
    margin-bottom: 20px;
  }
  .textBase {
    font-family: "Microsoft YaHei UI";
    font-size: 24px;
    padding: 10px;
    background-color: #f6f6f6;
    /*margin-bottom: 10px;*/
    border-left: solid #ff0000 6px;
    float: left;
    clear: both;
    /*width: 380px;*/
  }
  .textBase:hover {
    cursor: pointer;
    background-color: #ffa6a6;
  }
  ul {
    list-style-type: none;
    margin: 0px;
    padding: 0px;
    position: absolute;
    top: 110px;
    z-index: 999;
  }
  /*剩下的 每个不同的组件(日期、时间、赛制) 不一样 日期的*/
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

  /*时间、赛制的*/
  .selected {
    border-left: solid #76e476 6px;
  }
  .selected:hover {
    background-color: #d2f6d2;
  }

  .raceSystemTextBase {
    width: 245px;
    margin-bottom: 5px;
    border-left: solid #ffa500 6px;
  }
  .raceSystemTextBase:hover {
    background-color: #ffdfa8;
  }
</style>
