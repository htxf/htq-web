<template>
  <div>
    <div class="title">
      备注信息
    </div>
    <input-simple-info
      v-bind="{inputName: inputName,
               inputSpan: inputSpan,
               placeholder: placeholder,
               isMustInput: isMustInput,
               inputWidth: inputWidth,
               name: inputName}"
      v-model="com2BackRemark"
      v-on:input="returnValue(com2BackRemark)">
    </input-simple-info>

  </div>
</template>

<script>
  import inputSimpleInfo from '../components/input_simple_info.vue'
  export default {
    name: 'input_contact_info',
    data () {
      return {
        inputName: '备注信息',
        inputSpan: '',
        placeholder: '来呀，快活呀~~',
        isMustInput: 'notMustInput',
        inputWidth: '600',
        com2BackRemark: ''
      }
    },
    components: {
      'input-simple-info': inputSimpleInfo
    },
    methods: {
      returnValue (com2BackRemark) {
        this.$emit('input', com2BackRemark)
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
