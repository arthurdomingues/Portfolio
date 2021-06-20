<template>
  <section class="section">
  <br>
  <br>
  <div class="container is-fluid">
    <div v-for="message in messages" :key="message.id">
      <div class="card">
        <div class="card-header">
          <p class="card-header-title">
            Nome:{{message.name}}<br> Email:{{message.email}}
          </p>
          <button
            class="button is-primary"
            @click="showModal(
              message.id,
              message.name,
              message.email,
              message.message,
              message.sent)">
            Ver
          </button>
        </div>

        <div class="card-content">
          {{message.message}}
        </div>
      </div>
      <hr>
    </div>
  </div>

  <MessageModal @refresh="reload"
  ref="showMessage"
  :id="id"
  :name="name"
  :email="email"
  :message="message"
  :sent="sent"/>

  <Notification ref="danger" class="is-danger" :message="notification"/>
  </section>
</template>

<script>
import axios from 'axios'
import Notification from '../components/Notification.vue'
import MessageModal from '../components/MessageModal.vue'

export default{
  components:{
    Notification,
    MessageModal
  },
  data(){
    return{
      messages: [],
      notification: '',
      id: -1,
      name: '',
      email: '',
      message: '',
      sent: ''
    }
  },
  created(){
    const req = {
      headers:{
        authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }
    axios.get('http://localhost:8181/contact', req)
      .then(res => {
        this.messages = res.data
      }) .catch(err => {
        this.notification = err.response.data.err
        this.$refs.danger.show()
      })
  },
  methods:{
    showModal(id, name, email, message, sent){
      this.id = id
      this.name = name
      this.email = email
      this.message = message
      this.sent = sent
      this.$refs.showMessage.show()
    },
    reload(){
      setTimeout(()=>{this.$router.go()}, 3500)
    }
  }

}
</script>

<style scoped>
</style>
