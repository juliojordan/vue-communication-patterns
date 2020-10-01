<template>
  <div id="app">
    <marco-component />
    <br>
    <polo-component />
  </div>
</template>

<script>
import MarcoComponent from './components/MarcoComponent.vue'
import PoloComponent from './components/PoloComponent.vue'

export default {
  name: 'App',
  components: {
    MarcoComponent,
    PoloComponent
  },
}
</script>

<style>
#app {
  font-family: Monaco, monospace;
  font-size: xx-large;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
