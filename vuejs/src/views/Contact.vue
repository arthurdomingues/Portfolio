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
      <h1 class="has-text-weight-bold is-size-3">
        Email:
      </h1>
      <a class="is-size-4" href="mailto:arthurdomingues76@gmail.com">
        <fa :icon="['fas', 'envelope']"></fa>
        arthurdomingues76@gmail.com
      </a>
      <br>
      <br>

      <h1 class="has-text-weight-bold is-size-3">
        Github:
      </h1>
      <a class="is-size-4" href="https://github.com/arthurdomingues/">
        <fa :icon="['fab', 'github']"></fa>
        arthurdomingues
      </a>
      <br>
      <br>

      <h1 class="has-text-weight-bold is-size-3">
        Twitter:
      </h1>
      <a class="is-size-4" href="https://twitter.com/ASilvaDomingues">
        <fa :icon="['fab', 'twitter']"></fa>
        @ASilvaDomingues
      </a>
      <br>
      <br>

      <h1 class="has-text-weight-bold is-size-3">
        Celular:
      </h1>
      <a class="is-size-4" href="https://twitter.com/ASilvaDomingues">
        <fa :icon="['fab', 'whatsapp']"></fa>
        <fa :icon="['fab', 'telegram']"></fa>
        (11)95814-0689
      </a>
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

      <button class="button is-dark is-outlined is-medium" @click="send">
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
        this.notification = err.response.data.err
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
::placeholder{
  color:gray;
  opacity: 1;
}

</style>
