<template>
<nav class="navbar is-dark is-fixed-top">
  <div class="navbar-brand">
      <a class="navbar-item is-family-code has-text-weight-bold is-size-3">
        Arthur Domingues
      </a>
    <div class="navbar-burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-start">
    </div>

    <div class="navbar-end is-family-code has-text-weight-bold">
        <router-link class="navbar-item" to="/">Home</router-link>

        <router-link class="navbar-item" to="/about">Sobre Mim</router-link>

        <router-link class="navbar-item" to="/skills">Skills</router-link>

        <a class="navbar-item" href=""> Projetos </a>

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
  created: function(){
    if(localStorage.getItem('token')){
      this.auth = true
    } else {
      this.auth = false
    }
  },
  data(){
    return{
      auth: false,
      message: undefined
    }
  },
  methods:{
    logout(){
      axios.get('http://localhost:8181/logout')
        .then(res => {
          this.message = res.data.message
          this.$refs.success.show()
          localStorage.removeItem('token')
          setTimeout(()=>{
            this.$router.go()
          }, 3500)
        }).catch(err=>{
          console.log(err)
          this.$refs.danger.show()
        })
    }
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const $navbarBurgers = Array
    .prototype
    .slice
    .call(document.querySelectorAll('.navbar-burger'), 0);
  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});
</script>
<style scoped>
</style>
