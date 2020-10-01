<template>
  <div id="app">
    <p>Looking for: {{ place }}</p>
    <street-component></street-component>
  </div>
</template>

<script>
import StreetComponent from './components/StreetComponent.vue'

export default {
  name: 'App',
  components: {
    StreetComponent
  },
  provide: { place: 'irish' },
  data() {
    return {
      place: 'bar'
    }
  },
}
</script>

<style>
#app {
  font-family: Monaco, monospace;
  font-size: x-large;
  margin-top: 50px;
}

select {
  font-size: x-large;
}
</style>
