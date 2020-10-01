<template>
  <ul>
      <li v-for="(msg, idx) in $store.state.messages" :key="idx">
          <span @click="onClick">{{ msg }} [X]</span>
      </li>
  </ul>
</template>

<script>
export default {
  name: 'TimeLine',
  methods: {
      onClick() {
          this.$store.dispatch('removeMessage')
      }
  }
}
</script>

<style>

</style>
