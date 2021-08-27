<template>
  <div>
  <b-row>
    <b-col cols="6">
        <p>Child component</p>
        <small>{{message}}</small>
    </b-col>
    <b-col cols="6">
      <button v-on:click="sendToParent"> Submit </button>
    </b-col>
  </b-row>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  methods: {
      sendToParent() {
        this.$emit('sendToParentData', 'fromChild')
      }
  }
}
</script>

<style scoped>

</style>
