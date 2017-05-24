<template>
  <div>
    <div class="title">
      联系信息
    </div>
    <input-simple-info
      v-bind="{inputName: phoneInputName,
               inputSpan: phoneInputSpan,
               placeholder: phonePlaceHolder,
               isMustInput: isMustInput,
               inputWidth: inputWidth,
               name: phoneInputName}"
      v-model="com2BackPhone"
      v-on:input="returnValue(returnedValue)">
    </input-simple-info>

    <input-simple-info
      v-bind="{inputName: weChatInputName,
               inputSpan: weChatInputSpan,
               placeholder: weChatPlaceHolder,
               isMustInput: isMustInput,
               inputWidth: inputWidth,
               name: weChatInputName}"
      v-model="com2BackWeChat"
      v-on:input="returnValue(returnedValue)">
    </input-simple-info>

    <input-simple-info
      v-bind="{inputName: qqInputName,
               inputSpan: qqInputSpan,
               placeholder: qqPlaceHolder,
               isMustInput: isMustInput,
               inputWidth: inputWidth,
               name: qqInputName}"
      v-model="com2BackQq"
      v-on:input="returnValue(returnedValue)">
    </input-simple-info>

  </div>
</template>

<script>
  import inputSimpleInfo from '../components/input_simple_info.vue'
  export default {
    name: 'input_contact_info',
    data () {
      return {
        phoneInputName: '手机',
        phoneInputSpan: '手机',
        phonePlaceHolder: '请输入手机号',
        weChatInputName: '微信',
        weChatInputSpan: '微信',
        weChatPlaceHolder: '请输入微信号',
        qqInputName: 'QQ',
        qqInputSpan: 'QQ',
        qqPlaceHolder: '请输入QQ号',
        isMustInput: 'notMustInput',
        inputWidth: '150',
        com2BackPhone: '',
        com2BackWeChat: '',
        com2BackQq: ''
      }
    },
    computed: {
      returnedValue () {
        var returnedValue = []
        returnedValue.push(this.com2BackPhone)
        returnedValue.push(this.com2BackWeChat)
        returnedValue.push(this.com2BackQq)
        return returnedValue
      }
    },
    components: {
      'input-simple-info': inputSimpleInfo
    },
    methods: {
      returnValue (returnedValue) {
        this.$emit('input', returnedValue)
      }
    }
  }
</script>

<style>
  .title {
    font-family: "Microsoft YaHei UI";
    font-size: 24px;
    margin-bottom: 20px;
  }
</style>
