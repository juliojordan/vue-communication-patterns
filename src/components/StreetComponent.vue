<template>
  <div>
    <span>
      <span>
        <place-component name="Bar"></place-component>
      </span>
    </span>
    <span>
      <span>
        <place-component name="Irish"></place-component>
      </span>
    </span>
    <span>
      <span>
        <place-component name="Garito"></place-component>
      </span>
    </span>
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
    width: 50%;
}
</style>
