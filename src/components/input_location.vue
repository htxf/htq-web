<template>
  <div class="locationComponent">
    <div class="title">
      地图
    </div>
    <input-simple-info
      v-bind:inputSpan=inputSpan
      v-bind:placeholder=inputPlaceHolder
      v-bind:isMustInput=inputIsMustInput
      v-bind:inputWidth=inputWidth
      v-bind:name=inputName
      v-model="com2BackLocation"
      v-on:input="returnValue(com2BackLocation)">
    </input-simple-info>
    <img src="../assets/map.jpg" alt="">
  </div>
</template>

<script>
  import inputSimpleInfo from '../components/input_simple_info.vue'
  export default {
    name: 'input_location',
    props: {
      value: ''
    },
    data () {
      return {
        inputSpan: '',
        inputName: '地图',
        inputPlaceHolder: '请输入地址',
        inputIsMustInput: 'mustInput',
        inputWidth: '600',
        com2BackLocation: ''
      }
    },
    components: {
      'input-simple-info': inputSimpleInfo
    },
    methods: {
      returnValue (com2BackLocation) {
        this.$emit('input', com2BackLocation)
      }
    }
  }
</script>

<style scoped>
  .title {
    font-family: "Microsoft YaHei UI";
    font-size: 24px;
    margin-bottom: 20px;
  }
  img {
    width: 960px;
    height: 500px;
    border: solid 2px #e4e4e4;
  }

</style>
