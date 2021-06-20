<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container is-centered">
        <h1 class="is-size-1 has-text-left">404</h1>
        <h2 class="is-size-3 has-text-left">Ops! A página não foi encontrada</h2>
        <h2 class="is-size-3 has-text-left">
          Você será redirecinado em breve
        </h2>
        <Notification ref="redirect" class="is-warning" :message="message"/>
      </div>
    </div>
    <br>
  </section>
</template>

<script>
import Notification from '../components/Notification.vue'

export default{
  components:{
    Notification
  },
  data(){
    return{
      message: 'Ops xP'
    }
  },
  mounted: function(){
    this.$refs.redirect.show()
    setTimeout(()=>{
        this.$router.push('/')
      }, 3500)
  }

}
</script>

<style scoped>
.hero{
  background: #363636;
}
h1, h2{
  color: white;
}
</style>
