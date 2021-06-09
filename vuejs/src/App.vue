<template>
  <h1>{{hello}}</h1>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  components: {
  },
  data(){
    return{
      hello: ''
    }
  },
created: function(){
  axios.get('http://localhost:8181/').then(res => {
    this.hello = res.data;
  }).catch(err => {
    console.log(err)
  })
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
