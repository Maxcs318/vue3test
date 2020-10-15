<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->

    <!-- nav -->
    <nav-bar></nav-bar>

    <div class="container main-content">
      <div class="row">
        <div class="col-12">
          <router-view/>
        </div>
      </div>
      
    </div>

    <!-- foot -->
    <footer-bar></footer-bar>
    
  </div>
</template>

<script>
import nav_Bar from "@/components/Nav/Navbar"
import footer_Bar from "@/components/Nav/Footer"

export default {
  name: 'App',
  data(){
    return{
      transitionName:"slide-fade",
      text:'',
    }
  },
  components: {
    navBar : nav_Bar,
    footerBar : footer_Bar
  },
  watch:{
    
  },
  computed:{
    
  }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0; 
    background: white;
    height: 100%;
  }
  /* page */
  .page-enter,
  .page-leave-active {
    opacity: 0;
  }
  .page-enter-active,
  .page-leave-active {
    transition: all 0.5s;
  }

  /*  slide-fade */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  .main-content{
    padding-top: 25px;
    padding-bottom: 25px;
  }
</style>
