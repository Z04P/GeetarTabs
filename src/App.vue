<template>
  <div id="app">
    <nav-bar />
    <router-view />
    <foot />
  </div>
</template>
<script>
import NavBar from './components/layout/NavBar'
import Foot from './components/layout/Foot'

export default {
  name: 'app',
  components: {
    NavBar,
    Foot
  }
}
</script>

<style>
body {
  background-color: rgb(245, 245, 245);
}
</style>
