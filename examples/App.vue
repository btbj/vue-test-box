<template>
  <div id="app">
    <vue-test-box></vue-test-box>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { VueTestBox } from '../packages/index.js'

export default {
  name: 'app',
  components: {
    // HelloWorld
    VueTestBox
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
