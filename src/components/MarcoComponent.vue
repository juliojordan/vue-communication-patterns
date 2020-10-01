<template>
  <button @click="onClick">{{ msg }}</button>
</template>

<script>
import eventBus from '../event-bus.js'

export default {
  name: 'MarcoComponent',
  data() {
    return {
      msg: 'Marco'
    }
  },
  created() {
    eventBus.$on('polo', this.onPolo)
  },
  methods: {
    onClick() {
      eventBus.$emit('marco')
    },
    onPolo() {
      this.msg = 'Polo'
    }
  }
}
</script>

<style scoped>

</style>
