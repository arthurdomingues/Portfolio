import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import Skills from '../views/Skills.vue'
import Contact from '../views/Contact.vue'
import Messages from '../views/Messages.vue'
import Login from '../views/Login.vue'
import Auth from './auth'
import NotFound from '../views/404.vue'

const routes = [
  { path: '/:pathMatch(.*)*', component: NotFound },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin/messages/:archived?',
    name: 'Messages',
    component: Messages,
    beforeEnter: Auth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
