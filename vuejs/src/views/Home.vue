<template>
  <div class="home">
    <Header/>
    <Welcome/>
    <About/>
    <Skills/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header/Header.vue'
import Welcome from '@/components/Welcome/Welcome.vue'
import About from '@/components/About/About.vue'
import Skills from '@/components/Skills/Skills.vue'
import Footer from '@/components/Footer/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Welcome,
    About,
    Skills,
    Footer,
  }
}
</script>
