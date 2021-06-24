<template>
  <div id="nav">
    <Navbar />
    <router-view v-slot="{ Component }" >
      <transition name="slide">
        <component :is="Component" :key="$route.fullPath"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default{
  components: {
    Navbar,
  },
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  background: #f3f3f3;
}
#app{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.slide-enter-active,
.slide-leave-active{
  transition: opacity .3s, transform .3s;
}
.slide-enter,
.slide-leave-to{
  opacity: 0;
  transform: translateZ(-30%);
}
</style>
