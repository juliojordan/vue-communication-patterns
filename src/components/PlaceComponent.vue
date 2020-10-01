<template>
  <span :class="{ active: isActive }">{{ `[${name}]`}}</span>
</template>

<script>
export default {
  name: 'PlaceComponent',
  props: ['name'],
  inject: ['place'],
  computed: {
    isActive() {
        return this.name.toLowerCase() === this.place
    }
  }
}
</script>

<style>
.active {
    font-size: xx-large;
    color: red;
}
</style>
