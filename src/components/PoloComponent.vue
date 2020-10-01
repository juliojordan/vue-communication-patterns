<template>
  <button @click="onClick">{{ msg }}</button>
</template>

<script>
import eventBus from '../event-bus.js'

export default {
  name: 'PoloComponent',
  data() {
    return {
      msg: 'Polo'
    }
  },
  created() {
    eventBus.$on('marco', this.onMarco)
  },
  methods: {
    onClick() {
      eventBus.$emit('polo')
    },
    onMarco() {
      this.msg = 'Marco'
    }
  }
}
</script>

<style scoped>

</style>
