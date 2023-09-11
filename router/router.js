import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../src/components/views/Home/Home.vue'
import Task from '../src/components/views/Task/Task.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/task',
    name: 'task',
    component: Task,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router