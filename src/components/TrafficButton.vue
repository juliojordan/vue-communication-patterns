<template>
  <button :disabled="input" @click="$emit('output')">Click me</button>
</template>

<script>
export default {
  name: 'TrafficButton',
  props: {
    input: {
      type: Boolean,
    }
  }
}
</script>

<style>

</style>
