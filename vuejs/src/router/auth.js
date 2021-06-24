import axios from 'axios'

export default function Auth(to, from, next){
  if(localStorage.getItem('token') != undefined){
    const req = {
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }

    axios.post('http://localhost:8181/validate', {}, req)
      .then(res => {
        console.log(res)
        next()
      }).catch(err => {
        console.log(err)
        localStorage.removeItem('token')
        next('/login')
      })
  } else {
    next('/login')
  }
}
