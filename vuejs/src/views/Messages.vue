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
              message.sent,
              message.archived)">
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
  :sent="sent"
  :archived="archived"/>

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
      sent: undefined,
      archived: undefined,
      archivedRouteParam: ''
    }
  },
  created(){
    if(this.$route.params.archived){
      this.archivedRouteParam = '/' + this.$route.params.archived
    }
    const req = {
      headers:{
        authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }
    axios.get('http://localhost:8181/contact' + this.archivedRouteParam, req)
      .then(res => {
        this.messages = res.data
        console.log(this.messages)
      }).catch(err => {
        this.notification = err.response.data.err[0].msg
        this.$refs.danger.show()
      })
  },
  methods:{
    showModal(id, name, email, message, sent, archived){
      this.id = id
      this.name = name
      this.email = email
      this.message = message
      this.sent = this.dateCorretion(sent)
      this.archived = archived
      this.$refs.showMessage.show()
    },
    reload(){
      setTimeout(()=>{this.$router.go()}, 3500)
    },
    dateCorretion(date){
      let correction = date.split('-')
      const year = correction[0]
      const month = correction[1]
      const day = correction[2].split('T')[0]
      const sent = `${day}-${month}-${year}`
      return sent
    }
  }
}
</script>

<style scoped>
.button{
  margin: 1%;
  width: 8%;
}
</style>
