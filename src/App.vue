<template>
  <div class="container-fluid">
    <TopBar/>
    <div class="container-fluid" style="margin-top: 70px; margin-bottom: 5%">      
      <router-view />
      <MyFooter class="mt-5"> </MyFooter>
    </div>  
  </div>
  </template>

<script>
import TopBar from './components/TopBar.vue';
import MyFooter from './components/MyFooter.vue';
import { mapGetters } from 'vuex';


  export default {
    components: { TopBar, MyFooter },
    computed: {
      ...mapGetters(['getCarDetail', 'getCarImages','getSelectedCarModel','getSelectedCarGeneration']),
    }
  }

</script>
  

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
