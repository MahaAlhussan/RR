<template>

<NavBar/>
<HomeView/>
</template>

<script>
import ModeSwitch from '@/components/ModeSwitch.vue'
import NavBar from './components/NavBar.vue'
import HomeView from './views/HomeView.vue'
export default {
  components:{
    ModeSwitch,
    NavBar,
    HomeView
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
}


</style>
