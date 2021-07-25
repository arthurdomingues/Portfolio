<template>
<section class="section">
  <br>
  <div class="container is-centered">
    <div class="column is-12">
      <h1 class="title has-text-centered section-title">Contato</h1>
    </div>

  <div class="columns">
    <div class="column is-6 has-text-left is-family-code">
      <br>
      <h2 class="has-text-weight-bold is-size-3 is-size-4-mobile">
        Email:
      </h2>
      <a class="is-size-4" href="mailto:arthurdomingues76@gmail.com">
        <fa :icon="['fas', 'envelope']"></fa>
        arthurdomingues76@gmail.com
      </a>
      <br>
      <br>

      <h2 class="has-text-weight-bold is-size-3 is-size-4-mobile">
        Github:
      </h2>
      <a class="is-size-4" href="https://github.com/arthurdomingues/">
        <fa :icon="['fab', 'github']"></fa>
        arthurdomingues
      </a>
      <br>
      <br>

      <h2 class="has-text-weight-bold is-size-3 is-size-4-mobile">
        Twitter:
      </h2>
      <a class="is-size-4" href="https://twitter.com/ASilvaDomingues">
        <fa :icon="['fab', 'twitter']"></fa>
        @ASilvaDomingues
      </a>
      <br>
      <br>

      <h2 class="has-text-weight-bold is-size-3 is-size-4-mobile">
        Celular:
      </h2>
      <h2 class="is-size-4">
        <fa :icon="['fab', 'whatsapp']"></fa>
        <fa :icon="['fab', 'telegram']"></fa>
        (11)95814-0689
      </h2>
      <br>
      <br>
    </div>

    <div class="column is-6 has-text-left">
      <br>
      <div class="field">
        <div class="control has-icons-left">
          <input class="input"
          type="text"
          placeholder="Seu Nome"
          v-model="name">
          <span class="icon is-left">
            <fa :icon="['fas', 'user']"></fa>
          </span>
        </div>
      </div>

      <div class="field">
        <div class="control has-icons-left">
          <input class="input"
          type="email"
          placeholder="Seu Email"
          v-model="email">
          <span class="icon is-left">
            <fa :icon="['fas', 'envelope']"></fa>
          </span>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <textarea class="input textarea"
            placeholder="Sua Mensagem"
            v-model="message"></textarea>
        </div>
      </div>

      <button class="button is-primary is-outlined is-medium" @click="send">
        Enviar
      </button>

        <Notification ref="success" class="is-primary" :message="notification"/>
        <Notification ref="danger" class="is-danger" :message="notification"/>
    </div>

  </div>

  </div>
</section>
</template>

<script>
import axios from 'axios'
import Notification from '../components/Notification.vue'

export default {
  components:{
    Notification
  },
  data(){
    return {
      name: '',
      email: '',
      message: '',
      notification: undefined,
    }
  },
  methods:{
    send(){
      axios.post('http://localhost:8181/contact',{
        name: this.name,
        email: this.email,
        message: this.message
      }).then( res =>{
        this.notification = res.data.message
        this.$refs.success.show()
        this.$router.push('Contact')
      }).catch(err => {
        this.notification = err.response.data.err[0].msg
        this.$refs.danger.show()
        this.$router.push('Contact')
      })
      this.name = ''
      this.email = ''
      this.message = ''
    },
  }
}
</script>

<style scoped>
.input {
  color: #F4F9E9;
  background: #252934;
  border: none;
}

::placeholder{
  color:gray;
  opacity: 0.5;
}

a{
  color:#F4F9E9;
  transition: all 300ms ease-in-out;
}

a:hover{
  color: #08fdd8;
}
h1, h2{
  color: #F4F9E9;
}

@media(max-width: 375px){
  a {
    font-size: 1.15rem !important;
  } 
}

@media(max-width: 374px) and (min-width: 320px){
  a {
    font-size: 1rem !important;
  } 
}
</style>
