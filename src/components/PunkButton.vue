<template>
  <button :disabled="false" @click="$parent.color = 'green'">Click me</button>
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
