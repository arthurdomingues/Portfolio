<template>
  <div>
    <div class="modal" :class="active">
      <div class="modal-card">
        <header class="modal-card-head">
        <p class="modal-card-title">Mensagem</p>
        <button class="delete" aria-label="close" @click="close()"></button>
      </header>
      <section class="modal-card-body">
        <h1 class="has-text-left">Id: {{ id }}</h1>
        <h1 class="has-text-left">Nome: {{ name }}</h1>
        <h1 class="has-text-left">Email: {{ email }}</h1>
        <h1 class="has-text-left">Enviado: {{ sent }}</h1><br>
        <h1>Mensagem: <br>{{ message }}</h1>
      </section>
      <footer class="modal-card-foot">
        <button @click="deleteMessage" class="button is-danger">Deletar</button>
        <button
          v-if="!archived"
          @click="toArchive"
          class="button is-warning">
          Arquivar
        </button>
      </footer>
      </div>
    </div>
  <Notification ref="success" class="is-primary" :message="notification"/>
  <Notification ref="error" class="is-danger" :message="notification"/>
  </div>
</template>

<script>
import axios from 'axios'
import Notification from '../components/Notification.vue'

export default {
  components:{
    Notification
  },
  data(){
    return{
      active: undefined,
      notification: undefined,
    }
  },
  props:{
    id: Number,
    name: String,
    email: String,
    message: String,
    sent: String,
    archived: Boolean,
  },
  methods:{
    close(){
      this.active = ''
    },
    show(){
      this.active = 'is-active'
    },
    deleteMessage(){
      const req = {
        headers:{
          authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }
      axios.delete('http://localhost:8181/contact/' + this.id, req)
        .then(res => {
          this.notification = res.data.message
          this.active = ''
          this.$refs.success.show()
          this.$emit('refresh')
        }).catch(err => {
          this.notification = err.response.data.err[0].msg
          this.$refs.error.show()
        })
    },
    toArchive(){
      const req = {
        headers:{
          authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }
      axios.put('http://localhost:8181/contact/' + this.id, {
       archived: "true"
      }, req).then( res => {
        this.notification = res.data.message
        this.active = ''
        this.$refs.success.show()
        this.$emit('refresh')
      }).catch(err => {
        this.notification = err.response.data.err
        this.$refs.error.show()
      })
    }

  }
}
</script>

<style scoped>
.modal{
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
