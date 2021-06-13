import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import Skills from '../views/Skills.vue'

const routes = [
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
