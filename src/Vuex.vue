<template>
  <div id="app">
    <time-line />
    <notifications-badge />
  </div>
</template>

<script>
import TimeLine from './components/TimeLine.vue'
import NotificationsBadge from './components/NotificationsBadge.vue'

export default {
  name: 'App',
  components: {
    TimeLine,
    NotificationsBadge
  }
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
