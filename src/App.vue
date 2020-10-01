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
  provide: { place: 'bar' },
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

select {
  font-size: x-large;
}
</style>
