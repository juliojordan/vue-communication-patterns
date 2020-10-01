<template>
  <div id="app">
    <h1>[<span :style="{ color }">o</span>]</h1>
    <punk-button :input="!isRed" @output="onOutput" />
  </div>
</template>

<script>
import PunkButton from './components/PunkButton.vue'

export default {
  name: 'App',
  components: {
    PunkButton 
  },
  data() {
    return {
      color: 'red'
    }
  },
  computed: {
    isRed() {
      return this.color === 'red'
    },
  },
  methods: {
    onOutput() {
      this.color = "yellow";
      setTimeout(() => {
	this.color = "green";
      }, 1000);
      setTimeout(() => {
	this.color = "yellow";
      }, 3000);
      setTimeout(() => {
	this.color = "red";
      }, 4000);
    },
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
