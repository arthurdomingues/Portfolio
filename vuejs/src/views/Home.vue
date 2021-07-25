<template>
<section class="hero is-fullheight is-info">
  <div class="hero-body section1">
    <div class="container is-centered">

        <h1 class="title
          is-size-2-mobile
          is-size-1-desktop
          has-text-centered
          is-family-code h11">
          Olá, eu sou o Arthur!!
        </h1>
        <h3 class="has-text-weight-bold
          h11 is-size-4-mobile
          is-size-3-desktop
          has-text-centered
          is-family-code">
          Seja bem vindo!!
        </h3>
        <br>
        <div class="buttons is-centered">
          <button class="button
            is-rounded
            is-large
            is-primary
            is-outlined"
            @click="redirect">
            Projetos</button>
        </div>

    </div>
  </div>
</section>
</template>

<script>
export default {
  methods:{
    redirect(){
      this.$router.push('Projects')
    }
  }
}
</script>

<style scoped>
.section1{
  background: transparent;
}
.h11 {
  color:white;
}
</style>
