<template>
<div>
  <Header/>
  <About/>
  <Skills/>
  <Footer/>
</div>  
</template>

<script>
//import axios from 'axios';
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'
import About from './components/About/About.vue'
import Skills from './components/Skills/Skills.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    About,
    Skills,
  },
  data(){
    return{
      hello: ''
    }
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
  background-color: #e4e4e4;
}
</style>
