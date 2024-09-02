import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

//Al usar webpackChunkName, se puede controlar el nombre del chunk y evitar que se carga innecesariamente cuando no se esta usando, a la hora de buildear el proyecto lo divide en un chunck solo, mejora los tiempos de carga
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/*webpackChunkName: "about" */'@/views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
