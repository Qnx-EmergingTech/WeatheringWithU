<template>
  <div id="app" class="min-h-screen flex flex-col px-20 py-10 bg-gray-200 h-full">
    <WeatherNavbar />
    <router-view  />
    <WeatherFooter />
  </div>
</template>

<script>
import WeatherNavbar from './components/WeatherNavbar.vue'
import WeatherFooter from './components/WeatherFooter.vue'

export default {
  name: 'App',
  components: {
    WeatherNavbar,
    WeatherFooter
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.flex-grow {
  flex: 1;
}

::-webkit-scrollbar {
  display: none;
}

html {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
