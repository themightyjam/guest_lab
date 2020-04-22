<template>
  <div id="app">
    <guest-form />
    <guest-gird />
  </div>
</template>

<script>
import GuestForm from './components/GuestForm.vue';
import GuestGrid from './components/GuestGrid.vue';


export default {
  name: 'App',
  components: {
    'guest-form': GuestForm,
    'guest-grid': GuestGrid
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
