<template>
  <div id="app">
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
* {
  color:#F4F9E9;
}

.section .title {
  color:#F4F9E9;
}

body{
  margin: 0;
  padding: 0;
  background: #f3f3f3;
}
#app{
  height: 100vh;
  text-align: center;
  background-color: #1b242f;
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

section {
  background: #1b242f;
}
</style>
