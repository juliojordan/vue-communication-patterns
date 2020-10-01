<template>
  <div>
      <place-component name="Bar"></place-component>
      <place-component name="Irish"></place-component>
      <place-component name="Garito"></place-component>
  </div>
</template>

<script>
import PlaceComponent from './PlaceComponent.vue'
export default {
  name: 'StreetComponent',
  components: {
      PlaceComponent
  }
}
</script>

<style scoped>
div {
    border: 3px solid black;
}
</style>
