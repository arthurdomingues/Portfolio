<template>
<nav class="navbar is-dark is-fixed-top">
  <div class="navbar-brand">
      <a class="
        navbar-item
        is-family-code
        has-text-weight-bold
        is-size-3
        is-size-4-mobile">
        Arthur Domingues
      </a>
    <div 
      class="navbar-burger"
      data-target="navbarBurger"
      :class="burger"
      @click="activeBurger" >
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarBurger" class="navbar-menu" :class="burger">
    <div class="navbar-start">
    </div>

    <div
      class="navbar-end is-family-code has-text-weight-bold"
      @click="activeBurger">
        <router-link class="navbar-item" to="/">Home</router-link>

        <router-link class="navbar-item" to="/about">Sobre Mim</router-link>

        <router-link class="navbar-item" to="/skills">Skills</router-link>

        <router-link class="navbar-item" to="/projects">Projetos</router-link>

        <router-link class="navbar-item" to="/contact">Contato</router-link>

        <a class="navbar-item" href="https://github.com/arthurdomingues/">
          <fa class="fa-2x" :icon="['fab', 'github']"></fa>
        </a>
        <a class="navbar-item" href="https://twitter.com/ASilvaDomingues">
          <fa class="fa-2x" :icon="['fab', 'twitter']"></fa>
        </a>

        <div v-if="auth" class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            <fa class="fa-2x" :icon="['fas', 'envelope']"></fa>
          </a>
          <div class="navbar-dropdown is-right">
            <router-link
              class="navbar-item"
              :to="{name: 'Messages'}"
              >Todas</router-link>
            <router-link
              class="navbar-item"
              :to="{name: 'Messages', params: {archived: 'archived'}}"
              >Arquivadas </router-link>
          </div>
        </div>

        <router-link v-if="auth" class="navbar-item" @click="logout" to="/">
          <fa class="fa-2x" :icon="['fas', 'sign-out-alt']"></fa>
        </router-link>

    </div>
  </div>
  <Notification ref="success" class="is-primary" :message="message"/>
  <Notification ref="danger" class="is-warning" :message="message"/>
</nav>

</template>

<script>
import axios from 'axios'
import Notification from '../components/Notification.vue'

export default{
  components:{
    Notification
  },
  data(){
    return{
      message: undefined,
      auth: false,
      burger: undefined 
    }
  },
  watch(){
    if(!localStorage.getItem('token')){
      this.auth = false
    }
  },
  created(){
    if(localStorage.getItem('token')){
      this.auth = true
    } else {
      this.auth = false
    }
  },
  methods:{
    logout(){
      axios.get('http://localhost:8181/logout')
        .then(res => {
          this.message = res.data.message
          localStorage.removeItem('token')
          this.$refs.success.show()
          setTimeout(()=>{
            this.$router.go()
          }, 3500)
        }).catch(err=>{
          console.log(err)
          this.$refs.danger.show()
        })
    },
    activeBurger(){
      if(this.burger === undefined){
        this.burger = "is-active"
      } else {
        this.burger = undefined
      }
    }
    }
  }
</script>
<style scoped>
</style>
