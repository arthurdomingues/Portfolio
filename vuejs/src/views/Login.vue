<template>
  <section class="hero is-fullheight">
    <div class="hero-body color">
      <div class="container is-centered">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <div class="card">

              <span class="card-header-title is-size-3">
                  Login
              </span>

              <div class="card-content">
                <div class="field">
                  <p class="control has-icons-left has-icons-right">
                    <input class="input"
                    type="user"
                    placeholder="User"
                    v-model="name">
                    <span class="icon is-small is-left">
                      <fa :icon="['fas', 'user']"/>
                    </span>
                  </p>
                </div>
                <div class="field">
                  <p class="control has-icons-left has-icons-right">
                    <input class="input"
                    type="password"
                    placeholder="Password"
                    v-model="password">
                    <span class="icon is-small is-left">
                      <fa :icon="['fas', 'lock']"/>
                    </span>
                  </p>
                </div>
                <div class="field">
                  <p class="control">
                    <button class="button is-success" @click="login">
                      Login
                    </button>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <Notification ref="success" class="is-primary" :message="notification"/>
    <Notification ref="danger" class="is-danger" :message="notification"/>

  </section>
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
      password: '',
      name: '',
      notification: undefined
    }
  },
  methods:{
    login(){
      axios.post('http://localhost:8181/login', {
        name: this.name,
        password: this.password
      }).then(res => {
        this.notification = res.data.message
        this.$refs.success.show()
        localStorage.setItem('token', res.data.token)
        setTimeout(()=>{
          this.$router.go()
        }, 3500)
      }).catch(err => {
        console.log(err)
        this.notification = err.response.data.err[0].msg
        this.$refs.danger.show()
      })
    }
  }
}
</script>

<style scoped>
.card{
  margin: auto;
  background: url('~@/assets/images/background.png');
  box-shadow: none;
}

.input {
  color: #F4F9E9;
  background: #252934;
}

::placeholder {
  color: gray;
  opacity: 0.5;
}

span {
  color: #F4F9E9;
}
</style>
