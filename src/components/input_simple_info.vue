<template>
  <div>
    <span v-if="haveSpan">{{ inputSpan }}</span>
    <input v-bind:placeholder="placeholder"
           v-bind:style="{width: inputWidth + 'px'}"
           v-bind:name="inputName"
           v-model="textValue"
           id="input"
           type="text"
           v-bind:class="[isValid, isMustInput]"
           v-bind:value="value"
           v-on:input="returnValue($event.target.value)">
  </div>
</template>

<script>
  export default {
    name: 'input_simple_info',
    props: {
      inputSpan: '',
      inputName: '',
      placeholder: '',
      isMustInput: '',
      inputWidth: '',
      value: ''
    },
    data () {
      return {
        textValue: ''
      }
    },
    computed: {
      isValid () {
        if (this.inputName === '手机') {
          var pattern = /(^(([0]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$)|(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/
          if (pattern.test(this.textValue)) {
            return 'valid'
          } else {
            return 'notMustInput'
          }
        } else {
          if (this.textValue.length > 0) {
            return 'valid'
          }
        }
      },
      haveSpan () {
        if (this.inputSpan.length > 0) {
          return true
        } else {
          return false
        }
      }
    },
    methods: {
      returnValue (value) {
        this.$emit('input', value)
      }
    }
  }
</script>

<style scoped>
  div {
    display: inline-block;
  }
  span, input {
    font-family: "Microsoft YaHei UI";
    font-size: 18px;
  }
  span {
    margin-right: 10px;
  }
  input {
    border: none;
    margin-bottom: 5px;
    outline: none;
    margin-right: 60px;
  }
  .notMustInput {
    border-bottom: solid #ffa500 3px;
  }
  .mustInput {
    border-bottom: solid #ff0000 3px;
  }
  .valid {
    border-bottom: solid #76e476 3px;
  }
</style>
