<template>
<transition name="slide-fade">
  <div v-if="active" class="notification top-right slide" :class="theme"> 
    <h5>{{ message }}</h5>
    <button class="delete" @click="close"></button>    
  </div>
</transition>
</template>

<script>
export default {
  data(){
    return {
      active: false,
      timeout: null
    }
  },
  props:{
    message: String,
    theme: String,
  },
  methods:{
    close(){
      this.active = false
      clearTimeout(this.timeout)
    },
    show(){
      this.active = true
      this.timeout = setTimeout(()=>{this.active = false}, 3000)
    }
  }
}
</script>

<style scoped>
.top-right{
  top: 70px;
  right: 2px;
}
.notification{
  position: fixed;
  z-index: 10000;
  width: 360px;
  padding-left: 10px;
  padding-right: 10px;
}
.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>