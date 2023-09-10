import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../src/components/views/Home/Home.vue'
import Task from '../src/components/views/Task/Task.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Home,
  },
  {
    path: '/task',
    name: 'task',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Task,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router